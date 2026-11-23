"""Accuracy metrics calculator distinguishing first-pass AI from human-confirmed ground truth."""
import json
from pathlib import Path
from typing import List, Dict, Any

class AccuracyCalculator:
    """Calculates audit metrics without conflating confidence with accuracy."""

    @staticmethod
    def calculate_metrics(sampled_records: List[Dict[str, Any]]) -> Dict[str, Any]:
        total_claims = 0
        total_evidence_claims = 0
        unknown_claims = 0
        
        # Track verified counts
        verified_claims = 0
        partially_verified_claims = 0
        unsupported_claims = 0
        inaccessible_claims = 0
        conflicting_claims = 0
        needs_review_claims = 0

        total_apps = len(sampled_records)
        apps_fully_verified = 0

        for rec in sampled_records:
            app_checks = rec.get("verification_checks", [])
            app_claims_count = len(app_checks)
            app_verified_count = 0

            for check in app_checks:
                total_claims += 1
                status = check.get("status")
                
                if check.get("has_evidence"):
                    total_evidence_claims += 1
                if check.get("is_unknown"):
                    unknown_claims += 1

                if status == "Verified":
                    verified_claims += 1
                    app_verified_count += 1
                elif status == "Partially verified":
                    partially_verified_claims += 1
                elif status == "Conflicting evidence":
                    conflicting_claims += 1
                elif status == "Unsupported":
                    unsupported_claims += 1
                elif status == "Inaccessible":
                    inaccessible_claims += 1
                elif status == "Requires human review":
                    needs_review_claims += 1

            if app_claims_count > 0 and app_verified_count == app_claims_count:
                apps_fully_verified += 1

        evidence_coverage = (total_evidence_claims / total_claims) if total_claims else 0.0
        unknown_rate = (unknown_claims / total_claims) if total_claims else 0.0
        claim_verification_rate = (verified_claims / total_claims) if total_claims else 0.0
        app_verification_rate = (apps_fully_verified / total_apps) if total_apps else 0.0

        return {
            "total_apps_evaluated": total_apps,
            "apps_fully_verified": apps_fully_verified,
            "app_level_verification_rate": round(app_verification_rate, 4),
            "total_claims_evaluated": total_claims,
            "verified_claims": verified_claims,
            "partially_verified_claims": partially_verified_claims,
            "conflicting_claims": conflicting_claims,
            "unsupported_claims": unsupported_claims,
            "inaccessible_claims": inaccessible_claims,
            "requires_human_review_claims": needs_review_claims,
            "claim_level_verification_rate": round(claim_verification_rate, 4),
            "evidence_coverage": round(evidence_coverage, 4),
            "unknown_rate": round(unknown_rate, 4)
        }
