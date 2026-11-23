"""Pattern analyzer calculating programmatic metrics, counts, and percentages across 100 SaaS apps."""
import json
from collections import Counter
from pathlib import Path
from typing import Dict, Any, List
from loguru import logger

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
REPORTS_DIR = ROOT_DIR / "reports"
RESEARCH_RESULTS = DATA_DIR / "research_results.json"
PATTERN_REPORT = REPORTS_DIR / "pattern_analysis.json"

class PatternAnalyzer:
    def __init__(self, data_path: Path = RESEARCH_RESULTS):
        self.data_path = data_path
        with open(self.data_path, "r", encoding="utf-8") as f:
            self.records: List[Dict[str, Any]] = json.load(f)
        self.total = len(self.records)

    def _pct(self, count: int) -> float:
        return round((count / self.total) * 100, 2) if self.total else 0.0

    def analyze_all(self) -> Dict[str, Any]:
        """Compute all 10 analytical dimensions programmatically."""
        # 1. Categories
        categories = Counter([r.get("identity", {}).get("category", "Unknown") for r in self.records])
        
        # 2. Authentication Methods
        auth_methods = Counter()
        for r in self.records:
            for m in r.get("authentication", {}).get("auth_methods", []):
                auth_methods[m] += 1

        # 3. Developer Access
        dev_access = Counter([r.get("developer_access", {}).get("access_tier", "Unknown") for r in self.records])

        # 4. Public API Availability
        has_public_api_count = sum(1 for r in self.records if r.get("api_surface", {}).get("has_public_api", False))

        # 5. REST vs GraphQL vs Others
        api_types = Counter()
        for r in self.records:
            for t in r.get("api_surface", {}).get("api_types", []):
                api_types[t] += 1

        # 6. API Documentation Coverage (evidence count > 0)
        has_docs_evidence = sum(1 for r in self.records if len(r.get("evidence", [])) > 0)

        # 7. MCP Status Distribution
        mcp_status = Counter([r.get("mcp", {}).get("mcp_status", "Unknown") for r in self.records])

        # 8. Buildability Ratings
        buildability = Counter([r.get("buildability", {}).get("rating", "Unknown") for r in self.records])

        # 9. Technical Blockers
        blockers = Counter()
        for r in self.records:
            for b in r.get("buildability", {}).get("blockers", []):
                blockers[b] += 1

        # 10. Applications Requiring Partnership Outreach
        outreach_apps = [
            {
                "id": r["id"],
                "name": r.get("identity", {}).get("name"),
                "category": r.get("identity", {}).get("category"),
                "access_tier": r.get("developer_access", {}).get("access_tier"),
                "details": r.get("developer_access", {}).get("details")
            }
            for r in self.records
            if r.get("developer_access", {}).get("access_tier") in ("Partner/contact-sales gated", "Admin approval required")
        ]

        analysis = {
            "dataset_summary": {
                "total_apps": self.total
            },
            "1_categories": {k: {"count": v, "percentage": self._pct(v)} for k, v in categories.most_common()},
            "2_authentication_methods": {k: {"count": v, "percentage": self._pct(v)} for k, v in auth_methods.most_common()},
            "3_developer_access": {k: {"count": v, "percentage": self._pct(v)} for k, v in dev_access.most_common()},
            "4_public_api_availability": {
                "has_public_api": {"count": has_public_api_count, "percentage": self._pct(has_public_api_count)},
                "no_public_api": {"count": self.total - has_public_api_count, "percentage": self._pct(self.total - has_public_api_count)}
            },
            "5_api_architectures": {k: {"count": v, "percentage": self._pct(v)} for k, v in api_types.most_common()},
            "6_documentation_coverage": {
                "documented_with_verified_evidence": {"count": has_docs_evidence, "percentage": self._pct(has_docs_evidence)},
                "missing_or_undocumented": {"count": self.total - has_docs_evidence, "percentage": self._pct(self.total - has_docs_evidence)}
            },
            "7_mcp_availability": {k: {"count": v, "percentage": self._pct(v)} for k, v in mcp_status.most_common()},
            "8_buildability_ratings": {k: {"count": v, "percentage": self._pct(v)} for k, v in buildability.most_common()},
            "9_common_technical_blockers": {k: {"count": v, "percentage": self._pct(v)} for k, v in blockers.most_common()},
            "10_partnership_outreach_targets": {
                "total_requiring_outreach": len(outreach_apps),
                "percentage_of_catalog": self._pct(len(outreach_apps)),
                "apps": outreach_apps
            }
        }

        REPORTS_DIR.mkdir(parents=True, exist_ok=True)
        with open(PATTERN_REPORT, "w", encoding="utf-8") as f:
            json.dump(analysis, f, indent=2)

        logger.success(f"Pattern analysis saved to {PATTERN_REPORT}")
        return analysis

if __name__ == "__main__":
    analyzer = PatternAnalyzer()
    analyzer.analyze_all()
