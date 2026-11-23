"""Reproducible CLI runner for verification and accuracy audits with fixed random seed."""
import argparse
import json
import random
from pathlib import Path
from loguru import logger

from agent.verifier import VerificationEngine
from agent.accuracy import AccuracyCalculator

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
APPS_JSON = DATA_DIR / "apps.json"
PROCESSED_DIR = DATA_DIR / "processed"
RAW_DIR = DATA_DIR / "raw"
REPORTS_DIR = ROOT_DIR / "reports"

def main():
    parser = argparse.ArgumentParser(description="Run verification checks on research results.")
    parser.add_argument("--sample-size", type=int, default=20, help="Number of records to sample for verification.")
    parser.add_argument("--seed", type=int, default=42, help="Fixed random seed for reproducible sampling.")
    args = parser.parse_args()

    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    with open(APPS_JSON, "r", encoding="utf-8") as f:
        all_apps = json.load(f)

    # Find apps that have processed research results
    processed_files = list(PROCESSED_DIR.glob("app_*.json"))
    available_ids = [int(p.stem.replace("app_", "")) for p in processed_files]
    
    if not available_ids:
        logger.error("No processed applications found in data/processed/. Run research first.")
        return

    logger.info(f"Found {len(available_ids)} processed app(s) in repository.")
    
    # Reproducible sampling using fixed seed
    random.seed(args.seed)
    sample_ids = sorted(random.sample(available_ids, min(args.sample_size, len(available_ids))))
    logger.info(f"Selected reproducible sample of {len(sample_ids)} app(s) (seed={args.seed}): {sample_ids}")

    apps_by_id = {a["id"]: a for a in all_apps}
    engine = VerificationEngine()
    sampled_verification_results = []

    for app_id in sample_ids:
        proc_file = PROCESSED_DIR / f"app_{app_id}.json"
        raw_cache_file = RAW_DIR / f"app_{app_id}_cache.json"

        with open(proc_file, "r", encoding="utf-8") as f:
            res_data = json.load(f)

        raw_cache = []
        if raw_cache_file.exists():
            with open(raw_cache_file, "r", encoding="utf-8") as f:
                raw_cache = json.load(f)

        app_meta = apps_by_id.get(app_id, {"website": ""})
        verif_res = engine.verify_app_result(app_meta, res_data, raw_cache)
        sampled_verification_results.append(verif_res)
        logger.info(f"Verified App [{app_id}] '{verif_res['app_name']}': {verif_res['overall_status']}")

    # Save human review queue
    engine.review_manager.save_queue()

    # Calculate metrics
    metrics = AccuracyCalculator.calculate_metrics(sampled_verification_results)

    report_payload = {
        "metadata": {
            "sample_size": len(sample_ids),
            "seed": args.seed,
            "sample_ids": sample_ids
        },
        "metrics": metrics,
        "sample_verifications": sampled_verification_results
    }

    report_path = REPORTS_DIR / "verification_report.json"
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report_payload, f, indent=2)

    logger.success(f"Verification report saved to {report_path}")

    print("\n" + "=" * 65)
    print(" VERIFICATION & AUDIT ACCURACY REPORT")
    print("=" * 65)
    print(f"Sample Size Evaluated        : {metrics['total_apps_evaluated']}")
    print(f"Apps Fully Verified          : {metrics['apps_fully_verified']} ({metrics['app_level_verification_rate']*100:.1f}%)")
    print(f"Total Claims Evaluated       : {metrics['total_claims_evaluated']}")
    print(f"Verified Claims              : {metrics['verified_claims']}")
    print(f"Partially Verified Claims    : {metrics['partially_verified_claims']}")
    print(f"Conflicting Evidence         : {metrics['conflicting_claims']}")
    print(f"Requires Human Review        : {metrics['requires_human_review_claims']}")
    print(f"Overall Claim Verification   : {metrics['claim_level_verification_rate']*100:.1f}%")
    print(f"Evidence Coverage            : {metrics['evidence_coverage']*100:.1f}%")
    print(f"Unknown Rate                 : {metrics['unknown_rate']*100:.1f}%")
    print("=" * 65 + "\n")

if __name__ == "__main__":
    main()
