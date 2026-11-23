"""CLI entrypoint to execute research with limit, rate limiting, and resume support."""
import argparse
import json
import time
from pathlib import Path
from loguru import logger
from agent.researcher import AppResearcher

ROOT_DIR = Path(__file__).resolve().parent.parent
APPS_JSON = ROOT_DIR / "data" / "apps.json"

def main():
    parser = argparse.ArgumentParser(description="Run research on SaaS apps.")
    parser.add_argument("--limit", type=int, default=5, help="Number of apps to research.")
    parser.add_argument("--start", type=int, default=1, help="Starting app ID (1-based).")
    parser.add_argument("--force", action="store_true", help="Force rerun even if already processed.")
    args = parser.parse_args()

    if not APPS_JSON.exists():
        logger.error(f"Cannot find {APPS_JSON}")
        return

    with open(APPS_JSON, "r", encoding="utf-8") as f:
        all_apps = json.load(f)

    # Filter apps
    target_apps = [a for a in all_apps if a["id"] >= args.start][:args.limit]
    logger.info(f"Selected {len(target_apps)} application(s) for research (start={args.start}, limit={args.limit})")

    researcher = AppResearcher()
    success_count = 0
    failed_count = 0

    for app in target_apps:
        try:
            researcher.research_app(app, force=args.force)
            success_count += 1
            time.sleep(2)  # Rate limiting delay between apps
        except Exception as e:
            failed_count += 1
            logger.error(f"Failed researching {app['name']}: {e}")

    logger.info("=" * 60)
    logger.info(f"BATCH RUN COMPLETE: {success_count} succeeded, {failed_count} failed.")
    logger.info("=" * 60)

if __name__ == "__main__":
    main()

