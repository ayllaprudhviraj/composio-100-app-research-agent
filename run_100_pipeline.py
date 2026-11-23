"""Full 100-app pipeline runner processing in batches of 10 with resume, rate-limiting, and error tracking."""
import json
import csv
import time
from pathlib import Path
from loguru import logger

from agent.researcher import AppResearcher
from agent.schemas import AppResearchResult

ROOT_DIR = Path(__file__).resolve().parent
DATA_DIR = ROOT_DIR / "data"
APPS_JSON = DATA_DIR / "apps.json"
PROCESSED_DIR = DATA_DIR / "processed"
REPORTS_DIR = ROOT_DIR / "reports"

RESULTS_JSON = DATA_DIR / "research_results.json"
RESULTS_CSV = DATA_DIR / "research_results.csv"
ERRORS_JSON = DATA_DIR / "research_errors.json"
EXEC_REPORT_JSON = REPORTS_DIR / "research_execution_report.json"

BATCH_SIZE = 10

def validate_batch_outputs(batch_ids, all_apps_map):
    """Validate schema, completeness, duplicates, and missing fields for a batch."""
    batch_results = []
    batch_errors = []

    for aid in batch_ids:
        proc_file = PROCESSED_DIR / f"app_{aid}.json"
        if not proc_file.exists():
            batch_errors.append({"id": aid, "name": all_apps_map[aid]["name"], "error": "Output file missing"})
            continue
        try:
            with open(proc_file, "r", encoding="utf-8") as f:
                data = json.load(f)
            # Schema validation via Pydantic
            validated = AppResearchResult.model_validate(data)
            batch_results.append(validated.model_dump())
        except Exception as e:
            batch_errors.append({"id": aid, "name": all_apps_map[aid]["name"], "error": f"Schema validation error: {e}"})

    return batch_results, batch_errors

def consolidate_dataset(all_apps):
    """Consolidate all individual processed apps into research_results.json and CSV."""
    all_results = []
    errors = []
    seen_ids = set()

    for app in all_apps:
        aid = app["id"]
        proc_file = PROCESSED_DIR / f"app_{aid}.json"
        if proc_file.exists():
            try:
                with open(proc_file, "r", encoding="utf-8") as f:
                    data = json.load(f)
                if aid not in seen_ids:
                    all_results.append(data)
                    seen_ids.add(aid)
            except Exception as e:
                errors.append({"id": aid, "name": app["name"], "error": str(e)})
        else:
            errors.append({"id": aid, "name": app["name"], "error": "Not processed or pending"})

    # Sort by ID consecutive
    all_results.sort(key=lambda x: x["id"])

    # Save JSON
    with open(RESULTS_JSON, "w", encoding="utf-8") as f:
        json.dump(all_results, f, indent=2)

    # Save CSV
    if all_results:
        with open(RESULTS_CSV, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow([
                "id", "name", "category", "description",
                "auth_methods", "developer_access", "has_public_api",
                "api_types", "api_breadth", "mcp_status",
                "buildability_rating", "blockers", "evidence_count", "status"
            ])
            for r in all_results:
                ident = r.get("identity", {})
                auth = r.get("authentication", {})
                dev = r.get("developer_access", {})
                api = r.get("api_surface", {})
                mcp = r.get("mcp", {})
                bld = r.get("buildability", {})
                ev = r.get("evidence", [])
                
                writer.writerow([
                    r.get("id"),
                    ident.get("name"),
                    ident.get("category"),
                    ident.get("one_line_description"),
                    "; ".join(auth.get("auth_methods", [])),
                    dev.get("access_tier"),
                    api.get("has_public_api"),
                    "; ".join(api.get("api_types", [])),
                    api.get("api_breadth"),
                    mcp.get("mcp_status"),
                    bld.get("rating"),
                    "; ".join(bld.get("blockers", [])),
                    len(ev),
                    r.get("research_status")
                ])

    # Save errors
    with open(ERRORS_JSON, "w", encoding="utf-8") as f:
        json.dump(errors, f, indent=2)

    return all_results, errors

def main():
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)

    with open(APPS_JSON, "r", encoding="utf-8") as f:
        all_apps = json.load(f)

    if len(all_apps) != 100:
        logger.error(f"Input dataset validation failed: expected exactly 100 apps, found {len(all_apps)}")
        return

    logger.info("Input dataset verified: exactly 100 applications loaded.")
    all_apps_map = {a["id"]: a for a in all_apps}
    researcher = AppResearcher()

    total_batches = (len(all_apps) + BATCH_SIZE - 1) // BATCH_SIZE
    batch_summaries = []

    for b_idx in range(total_batches):
        start_idx = b_idx * BATCH_SIZE
        batch = all_apps[start_idx : start_idx + BATCH_SIZE]
        batch_ids = [a["id"] for a in batch]
        
        logger.info("=" * 60)
        logger.info(f"PROCESSING BATCH {b_idx + 1}/{total_batches} (App IDs {batch_ids[0]} to {batch_ids[-1]})")
        logger.info("=" * 60)

        for app in batch:
            aid = app["id"]
            if researcher.is_researched(aid):
                logger.info(f"App [{aid}/100] '{app['name']}' already completed. Skipping (resume safe).")
            else:
                try:
                    logger.info(f"Researching App [{aid}/100] '{app['name']}'...")
                    researcher.research_app(app, force=False)
                    time.sleep(1.0)  # Rate limiting delay
                except Exception as e:
                    logger.error(f"Failed App [{aid}/100] '{app['name']}': {e}")

        # Batch Post-Validation Check
        valid_res, err_res = validate_batch_outputs(batch_ids, all_apps_map)
        b_summary = {
            "batch_number": b_idx + 1,
            "apps_in_batch": len(batch_ids),
            "successfully_validated": len(valid_res),
            "errors_in_batch": len(err_res),
            "error_details": err_res
        }
        batch_summaries.append(b_summary)
        logger.info(f"Batch {b_idx + 1} Result: {len(valid_res)}/{len(batch_ids)} valid, {len(err_res)} errors.")

    # Final Dataset Consolidation
    logger.info("Consolidating all research results across 100 applications...")
    all_results, all_errors = consolidate_dataset(all_apps)

    # Generate Execution Report
    exec_report = {
        "execution_summary": {
            "total_apps_in_target": len(all_apps),
            "total_successfully_researched": len(all_results),
            "total_failed_or_pending": len(all_errors),
            "batch_size": BATCH_SIZE,
            "total_batches_executed": total_batches
        },
        "batch_breakdown": batch_summaries
    }

    with open(EXEC_REPORT_JSON, "w", encoding="utf-8") as f:
        json.dump(exec_report, f, indent=2)

    logger.success(f"Pipeline complete! {len(all_results)}/100 applications successfully saved.")
    logger.info(f"Results JSON: {RESULTS_JSON}")
    logger.info(f"Results CSV:  {RESULTS_CSV}")
    logger.info(f"Report JSON:   {EXEC_REPORT_JSON}")

if __name__ == "__main__":
    main()
