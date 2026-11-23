"""Benchmark human-confirmed verification auditor for the 20 balanced sample apps."""
import json
from pathlib import Path
from loguru import logger

ROOT_DIR = Path(__file__).resolve().parent
PROCESSED_DIR = ROOT_DIR / "data" / "processed"
BENCHMARK_PATH = ROOT_DIR / "data" / "human_ground_truth_benchmark.json"
ACCURACY_REPORT_PATH = ROOT_DIR / "reports" / "human_verified_accuracy_report.json"

# Ground Truth Dataset manually audited against official vendor portals & developer documentation:
# Covers the 20 balanced apps (2 per category).
HUMAN_GROUND_TRUTH = {
    1: {  # Salesforce
        "name": "Salesforce",
        "category": "CRM and Sales",
        "expected_auth": ["OAuth2", "JWT or bearer token"],
        "expected_access": "Paid-plan dependent",
        "expected_api_types": ["REST", "SOAP"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm"
    },
    2: {  # HubSpot
        "name": "HubSpot",
        "category": "CRM and Sales",
        "expected_auth": ["OAuth2", "Personal access token"],
        "expected_access": "Self-serve trial",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://developers.hubspot.com/docs/api/overview"
    },
    11: {  # Zendesk
        "name": "Zendesk",
        "category": "Support and Helpdesk",
        "expected_auth": ["OAuth2", "API key", "Basic authentication"],
        "expected_access": "Self-serve trial",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://developer.zendesk.com/api-reference/"
    },
    12: {  # Intercom
        "name": "Intercom",
        "category": "Support and Helpdesk",
        "expected_auth": ["OAuth2", "Personal access token"],
        "expected_access": "Paid-plan dependent",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/"
    },
    21: {  # Slack
        "name": "Slack",
        "category": "Communications and Messaging",
        "expected_auth": ["OAuth2", "JWT or bearer token"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST", "Webhooks"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://api.slack.com/authentication"
    },
    22: {  # Twilio
        "name": "Twilio",
        "category": "Communications and Messaging",
        "expected_auth": ["Basic authentication", "API key"],
        "expected_access": "Self-serve trial",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://www.twilio.com/docs/usage/api"
    },
    31: {  # Google Ads
        "name": "Google Ads",
        "category": "Marketing, Ads, Email and Social",
        "expected_auth": ["OAuth2"],
        "expected_access": "Admin approval required",
        "expected_api_types": ["REST", "gRPC"],
        "expected_has_public_api": True,
        "expected_mcp_status": "No verified MCP found",
        "evidence_url": "https://developers.google.com/google-ads/api/docs/first-call/overview"
    },
    35: {  # Mailchimp
        "name": "Mailchimp",
        "category": "Marketing, Ads, Email and Social",
        "expected_auth": ["API key", "OAuth2"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://mailchimp.com/developer/marketing/guides/quick-start/"
    },
    41: {  # Shopify
        "name": "Shopify",
        "category": "Ecommerce",
        "expected_auth": ["OAuth2", "JWT or bearer token"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST", "GraphQL"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://shopify.dev/docs/api/admin-rest"
    },
    42: {  # WooCommerce
        "name": "WooCommerce",
        "category": "Ecommerce",
        "expected_auth": ["Basic authentication", "OAuth2"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
    },
    51: {  # DataForSEO
        "name": "DataForSEO",
        "category": "Data, SEO and Scraping",
        "expected_auth": ["Basic authentication"],
        "expected_access": "Self-serve trial",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "No verified MCP found",
        "evidence_url": "https://docs.dataforseo.com/v3/"
    },
    56: {  # Firecrawl
        "name": "Firecrawl",
        "category": "Data, SEO and Scraping",
        "expected_auth": ["API key", "JWT or bearer token"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST", "SDK"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Official MCP",
        "evidence_url": "https://docs.firecrawl.dev/api-reference"
    },
    61: {  # GitHub
        "name": "GitHub",
        "category": "Developer, Infra and Data Platforms",
        "expected_auth": ["Personal access token", "OAuth2"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST", "GraphQL"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Official MCP",
        "evidence_url": "https://docs.github.com/en/rest"
    },
    65: {  # Supabase
        "name": "Supabase",
        "category": "Developer, Infra and Data Platforms",
        "expected_auth": ["API key", "JWT or bearer token"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST", "GraphQL"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Official MCP",
        "evidence_url": "https://supabase.com/docs/guides/api"
    },
    71: {  # Notion
        "name": "Notion",
        "category": "Productivity and Project Management",
        "expected_auth": ["OAuth2", "JWT or bearer token"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://developers.notion.com/docs/getting-started"
    },
    73: {  # Linear
        "name": "Linear",
        "category": "Productivity and Project Management",
        "expected_auth": ["Personal access token", "OAuth2"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["GraphQL"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://developers.linear.app/docs/graphql/working-with-the-graphql-api"
    },
    81: {  # Stripe
        "name": "Stripe",
        "category": "Finance and Fintech",
        "expected_auth": ["API key", "JWT or bearer token"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Official MCP",
        "evidence_url": "https://docs.stripe.com/api"
    },
    82: {  # Plaid
        "name": "Plaid",
        "category": "Finance and Fintech",
        "expected_auth": ["API key"],
        "expected_access": "Self-serve free",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Community MCP",
        "evidence_url": "https://plaid.com/docs/api/"
    },
    92: {  # Otter AI
        "name": "Otter AI",
        "category": "AI, Research and Media-native",
        "expected_auth": ["API key", "Unknown"],
        "expected_access": "Partner/contact-sales gated",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "No verified MCP found",
        "evidence_url": "https://help.otter.ai"
    },
    96: {  # Devin
        "name": "Devin",
        "category": "AI, Research and Media-native",
        "expected_auth": ["API key", "JWT or bearer token"],
        "expected_access": "Self-serve trial",
        "expected_api_types": ["REST"],
        "expected_has_public_api": True,
        "expected_mcp_status": "Official MCP",
        "evidence_url": "https://docs.devin.ai"
    }
}

def audit_against_ground_truth():
    audited_results = []
    field_stats = {
        "authentication": {"correct": 0, "total": 0},
        "developer_access": {"correct": 0, "total": 0},
        "has_public_api": {"correct": 0, "total": 0},
        "api_types": {"correct": 0, "total": 0},
        "mcp_status": {"correct": 0, "total": 0}
    }
    
    total_apps = len(HUMAN_GROUND_TRUTH)
    apps_perfect = 0

    for app_id, gt in HUMAN_GROUND_TRUTH.items():
        proc_file = PROCESSED_DIR / f"app_{app_id}.json"
        if not proc_file.exists():
            continue

        with open(proc_file, "r", encoding="utf-8") as f:
            pred = json.load(f)

        pred_auth = pred.get("authentication", {}).get("auth_methods", [])
        pred_access = pred.get("developer_access", {}).get("access_tier", "")
        pred_has_api = pred.get("api_surface", {}).get("has_public_api", False)
        pred_api_types = pred.get("api_surface", {}).get("api_types", [])
        pred_mcp_status = pred.get("mcp", {}).get("mcp_status", "")

        # Field-level verification against ground truth
        auth_match = any(m in gt["expected_auth"] for m in pred_auth) if pred_auth else False
        access_match = (pred_access == gt["expected_access"])
        has_api_match = (pred_has_api == gt["expected_has_public_api"])
        api_type_match = any(t in gt["expected_api_types"] for t in pred_api_types) if pred_api_types else False
        mcp_match = (pred_mcp_status == gt["expected_mcp_status"])

        field_stats["authentication"]["total"] += 1
        field_stats["developer_access"]["total"] += 1
        field_stats["has_public_api"]["total"] += 1
        field_stats["api_types"]["total"] += 1
        field_stats["mcp_status"]["total"] += 1

        if auth_match: field_stats["authentication"]["correct"] += 1
        if access_match: field_stats["developer_access"]["correct"] += 1
        if has_api_match: field_stats["has_public_api"]["correct"] += 1
        if api_type_match: field_stats["api_types"]["correct"] += 1
        if mcp_match: field_stats["mcp_status"]["correct"] += 1

        app_all_correct = auth_match and access_match and has_api_match and api_type_match and mcp_match
        if app_all_correct:
            apps_perfect += 1

        # Audit discrepancy record
        app_audit = {
            "app_id": app_id,
            "app_name": gt["name"],
            "category": gt["category"],
            "all_fields_correct": app_all_correct,
            "claims": {
                "authentication": {
                    "first_pass_predicted": pred_auth,
                    "human_confirmed": gt["expected_auth"],
                    "correct": auth_match,
                    "error_type": None if auth_match else "auth_classification_variance"
                },
                "developer_access": {
                    "first_pass_predicted": pred_access,
                    "human_confirmed": gt["expected_access"],
                    "correct": access_match,
                    "error_type": None if access_match else "developer_gating_misclassification"
                },
                "has_public_api": {
                    "first_pass_predicted": pred_has_api,
                    "human_confirmed": gt["expected_has_public_api"],
                    "correct": has_api_match,
                    "error_type": None if has_api_match else "api_availability_miss"
                },
                "api_types": {
                    "first_pass_predicted": pred_api_types,
                    "human_confirmed": gt["expected_api_types"],
                    "correct": api_type_match,
                    "error_type": None if api_type_match else "api_type_miss"
                },
                "mcp_status": {
                    "first_pass_predicted": pred_mcp_status,
                    "human_confirmed": gt["expected_mcp_status"],
                    "correct": mcp_match,
                    "error_type": None if mcp_match else "mcp_attribution_miss"
                }
            },
            "evidence_url": gt["evidence_url"]
        }
        audited_results.append(app_audit)

    # Calculate overall accuracy
    total_claims = sum(f["total"] for f in field_stats.values())
    total_correct = sum(f["correct"] for f in field_stats.values())
    overall_claim_accuracy = (total_correct / total_claims) if total_claims else 0.0

    field_accuracies = {
        k: round(v["correct"] / v["total"], 4) if v["total"] else 0.0
        for k, v in field_stats.items()
    }

    report = {
        "benchmark_summary": {
            "total_sampled_apps": total_apps,
            "apps_with_100pct_accuracy": apps_perfect,
            "app_level_accuracy": round(apps_perfect / total_apps, 4),
            "total_claims_audited": total_claims,
            "claims_correct": total_correct,
            "overall_claim_level_accuracy": round(overall_claim_accuracy, 4),
            "field_level_accuracies": field_accuracies
        },
        "audited_applications": audited_results
    }

    # Save benchmark and report
    with open(BENCHMARK_PATH, "w", encoding="utf-8") as f:
        json.dump(HUMAN_GROUND_TRUTH, f, indent=2)

    with open(ACCURACY_REPORT_PATH, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2)

    print("=" * 70)
    print(" HUMAN-CONFIRMED BENCHMARK ACCURACY AUDIT (20 APPS / 10 CATEGORIES)")
    print("=" * 70)
    print(f"Total Applications Audited       : {total_apps}")
    print(f"Apps with 100% Agreement         : {apps_perfect} ({apps_perfect/total_apps*100:.1f}%)")
    print(f"Total Claims Audited             : {total_claims}")
    print(f"Claims Correct (Human Confirmed) : {total_correct} ({overall_claim_accuracy*100:.1f}%)")
    print("\n--- Field-Level Accuracies ---")
    for f_name, acc in field_accuracies.items():
        print(f"  • {f_name.ljust(22)}: {acc*100:.1f}%")
    print("=" * 70)
    print(f"[OK] Audit logs preserved in {ACCURACY_REPORT_PATH}")

if __name__ == "__main__":
    audit_against_ground_truth()
