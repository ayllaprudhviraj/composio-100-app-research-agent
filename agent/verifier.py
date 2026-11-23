"""Core verification engine performing source content, domain, and claim-level audits."""
from typing import Dict, Any, List
from pathlib import Path
from loguru import logger

from agent.source_validator import SourceValidator
from agent.human_review import HumanReviewManager

class VerificationEngine:
    def __init__(self):
        self.validator = SourceValidator()
        self.review_manager = HumanReviewManager()

    def verify_app_result(self, app_meta: Dict[str, Any], research_data: Dict[str, Any], raw_cache: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Verify an application research result against sources and rule checks."""
        app_id = research_data.get("id")
        app_name = research_data.get("identity", {}).get("name", "Unknown")
        website = app_meta.get("website", "")
        evidence_list = research_data.get("evidence", [])

        # Combined text from cached source documents
        corpus = " ".join([doc.get("text", "").lower() for doc in raw_cache])
        checks = []

        # 1. URL Reachability & Domain Authoritativeness
        evidence_reachability = []
        for ev in evidence_list:
            url = ev.get("source_url", "")
            is_auth = self.validator.is_authoritative_domain(url, website)
            reach = self.validator.check_url_reachability(url)
            reach["source_url"] = url
            reach["is_authoritative"] = is_auth
            evidence_reachability.append(reach)

        all_reachable = any(r["reachable"] for r in evidence_reachability) if evidence_reachability else False
        any_authoritative = any(r["is_authoritative"] for r in evidence_reachability)

        # 2. Check Authentication Classification
        auth = research_data.get("authentication", {})
        auth_methods = auth.get("auth_methods", [])
        auth_status = "Unsupported"
        auth_has_ev = bool(evidence_list)
        
        # Verify text mentions in documentation
        auth_keywords_found = [m for m in auth_methods if m.lower().split()[0] in corpus]
        if "Unknown" in auth_methods:
            auth_status = "Verified"
        elif auth_keywords_found and any_authoritative:
            auth_status = "Verified"
        elif auth_keywords_found:
            auth_status = "Partially verified"
        else:
            auth_status = "Requires human review"
            self.review_manager.add_to_queue(
                app_id, app_name, "authentication", auth_methods,
                "Authentication method mentioned without direct text match in retrieved corpus"
            )

        checks.append({
            "field": "authentication",
            "predicted": auth_methods,
            "status": auth_status,
            "has_evidence": auth_has_ev,
            "is_unknown": "Unknown" in auth_methods
        })

        # 3. Check Developer Access (Self-serve vs Gated)
        dev_access = research_data.get("developer_access", {})
        access_tier = dev_access.get("access_tier", "Unknown")
        access_status = "Unsupported"
        
        # Guardrail: Free trial is NOT permanent free
        if access_tier == "Self-serve free":
            if "free trial" in corpus and "free plan" not in corpus and "open source" not in corpus:
                access_status = "Conflicting evidence"
                self.review_manager.add_to_queue(
                    app_id, app_name, "developer_access", access_tier,
                    "Classified as Self-serve free, but retrieved text mentions 'free trial' without verified permanent free tier"
                )
            elif any_authoritative:
                access_status = "Verified"
            else:
                access_status = "Partially verified"
        elif access_tier in ("Paid-plan dependent", "Partner/contact-sales gated", "Self-serve trial"):
            access_status = "Verified" if any_authoritative else "Partially verified"
        elif access_tier == "Unknown":
            access_status = "Verified"
        else:
            access_status = "Requires human review"

        checks.append({
            "field": "developer_access",
            "predicted": access_tier,
            "status": access_status,
            "has_evidence": bool(evidence_list),
            "is_unknown": access_tier == "Unknown"
        })

        # 4. Check API Surface & Availability
        api_surface = research_data.get("api_surface", {})
        has_public_api = api_surface.get("has_public_api", False)
        api_types = api_surface.get("api_types", [])
        api_breadth = api_surface.get("api_breadth", "unknown")
        
        api_status = "Verified" if (has_public_api and any_authoritative) else "Partially verified"
        checks.append({
            "field": "api_surface",
            "predicted": {"has_public_api": has_public_api, "api_types": api_types, "breadth": api_breadth},
            "status": api_status,
            "has_evidence": bool(evidence_list),
            "is_unknown": api_breadth == "unknown"
        })

        # 5. Check MCP Classification
        mcp = research_data.get("mcp", {})
        mcp_status_val = mcp.get("mcp_status", "Unknown")
        repo_url = mcp.get("repository_url")
        mcp_verif_status = "Verified"

        if mcp_status_val in ("Official MCP", "Third-party MCP", "Community MCP"):
            if not repo_url or "github.com" not in repo_url:
                mcp_verif_status = "Unsupported"
                self.review_manager.add_to_queue(
                    app_id, app_name, "mcp", mcp_status_val,
                    "Claimed MCP server exists but repository URL is missing or non-GitHub"
                )
            else:
                mcp_verif_status = "Verified"
        elif mcp_status_val == "No verified MCP found":
            mcp_verif_status = "Verified"
        else:
            mcp_verif_status = "Partially verified"

        checks.append({
            "field": "mcp",
            "predicted": {"status": mcp_status_val, "repo": repo_url},
            "status": mcp_verif_status,
            "has_evidence": bool(repo_url) or mcp_status_val == "No verified MCP found",
            "is_unknown": mcp_status_val == "Unknown"
        })

        # 6. Overall Application Status
        statuses = [c["status"] for c in checks]
        if all(s == "Verified" for s in statuses):
            overall_status = "Verified"
        elif any(s == "Conflicting evidence" for s in statuses):
            overall_status = "Conflicting evidence"
        elif any(s == "Requires human review" for s in statuses):
            overall_status = "Requires human review"
        elif any(s == "Partially verified" for s in statuses):
            overall_status = "Partially verified"
        else:
            overall_status = "Unsupported"

        return {
            "app_id": app_id,
            "app_name": app_name,
            "overall_status": overall_status,
            "verification_checks": checks,
            "evidence_reachability": evidence_reachability
        }
