"""Run research on exactly 20 sampled apps (2 from each of the 10 categories)."""
import json
import time
from pathlib import Path
from loguru import logger
from agent.researcher import AppResearcher

ROOT_DIR = Path(__file__).resolve().parent
APPS_JSON = ROOT_DIR / "data" / "apps.json"

# Exactly 2 apps from each category:
# CRM & Sales: 1 (Salesforce), 2 (HubSpot)
# Support & Helpdesk: 11 (Zendesk), 12 (Intercom)
# Communications & Messaging: 21 (Slack), 22 (Twilio)
# Marketing & Social: 31 (Google Ads), 35 (Mailchimp)
# Ecommerce: 41 (Shopify), 42 (WooCommerce)
# Data & SEO: 51 (DataForSEO), 56 (Firecrawl)
# Developer & Infra: 61 (GitHub), 65 (Supabase)
# Productivity: 71 (Notion), 73 (Linear)
# Finance & Fintech: 81 (Stripe), 82 (Plaid)
# AI & Media: 92 (Otter AI), 96 (Devin)

TARGET_20_IDS = [
    1, 2,       # CRM and Sales
    11, 12,     # Support and Helpdesk
    21, 22,     # Communications and Messaging
    31, 35,     # Marketing, Ads, Email and Social
    41, 42,     # Ecommerce
    51, 56,     # Data, SEO and Scraping
    61, 65,     # Developer, Infra and Data Platforms
    71, 73,     # Productivity and Project Management
    81, 82,     # Finance and Fintech
    92, 96      # AI, Research and Media-native
]

def main():
    with open(APPS_JSON, "r", encoding="utf-8") as f:
        all_apps = json.load(f)

    apps_map = {a["id"]: a for a in all_apps}
    target_apps = [apps_map[aid] for aid in TARGET_20_IDS if aid in apps_map]

    logger.info(f"Starting research on {len(target_apps)} balanced sample applications across all 10 categories...")
    researcher = AppResearcher()

    for i, app in enumerate(target_apps, 1):
        try:
            logger.info(f"[{i}/{len(target_apps)}] Processing App ID {app['id']}: {app['name']} ({app['category']})")
            researcher.research_app(app, force=False)
            time.sleep(1)
        except Exception as e:
            logger.error(f"Error researching {app['name']}: {e}")

    logger.success("20-app research batch complete!")

if __name__ == "__main__":
    main()
