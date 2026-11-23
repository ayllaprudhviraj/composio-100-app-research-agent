"""Comprehensive programmatic data, metric, and MCP integrity audit."""
import json
import csv
from pathlib import Path
from collections import Counter

ROOT_DIR = Path(__file__).resolve().parent
DATA_DIR = ROOT_DIR / "data"
REPORTS_DIR = ROOT_DIR / "reports"

RESULTS_JSON = DATA_DIR / "research_results.json"
RESULTS_CSV = DATA_DIR / "research_results.csv"
BENCHMARK_JSON = DATA_DIR / "human_ground_truth_benchmark.json"
HUMAN_ACCURACY_JSON = REPORTS_DIR / "human_verified_accuracy_report.json"
VERIF_REPORT_JSON = REPORTS_DIR / "verification_report.json"
REVIEW_QUEUE_JSON = DATA_DIR / "human_review_queue.json"
OPPS_JSON = REPORTS_DIR / "integration_opportunities.json"

with open(RESULTS_JSON, "r", encoding="utf-8") as f:
    apps = json.load(f)

print("=" * 65)
print("TASK 1: DATA AUDIT")
print("=" * 65)
print(f"Total apps in JSON: {len(apps)}")
ids = [a["id"] for a in apps]
print(f"Unique IDs: {len(set(ids))} (Min: {min(ids)}, Max: {max(ids)})")
names = [a["identity"]["name"] for a in apps]
print(f"Unique Names: {len(set(names))}")

cat_counts = Counter([a["identity"]["category"] for a in apps])
print("\nCategory distribution:")
for c, cnt in cat_counts.items():
    print(f"  - {c}: {cnt}")

# Check evidence URLs
total_evidence_links = 0
apps_without_evidence = []
broken_or_malformed_urls = []
for a in apps:
    ev_list = a.get("evidence", [])
    total_evidence_links += len(ev_list)
    if not ev_list:
        apps_without_evidence.append((a["id"], a["identity"]["name"]))
    for ev in ev_list:
        url = ev.get("source_url", "")
        if not url.startswith("http://") and not url.startswith("https://"):
            broken_or_malformed_urls.append((a["id"], url))

print(f"\nTotal evidence links stored across 100 apps: {total_evidence_links}")
print(f"Apps without evidence: {len(apps_without_evidence)}")
print(f"Malformed URLs: {len(broken_or_malformed_urls)}")

print("\n" + "=" * 65)
print("TASK 2: METRIC AUDIT (EXACT RECALCULATION)")
print("=" * 65)
total_apps = len(apps)

# 1. Self-serve apps
self_serve_free = sum(1 for a in apps if a["developer_access"]["access_tier"] == "Self-serve free")
self_serve_trial = sum(1 for a in apps if a["developer_access"]["access_tier"] == "Self-serve trial")
print(f"1. Self-serve free: {self_serve_free}/{total_apps} ({self_serve_free/total_apps*100:.1f}%)")
print(f"   Self-serve trial: {self_serve_trial}/{total_apps} ({self_serve_trial/total_apps*100:.1f}%)")
print(f"   Total self-serve (free + trial): {self_serve_free + self_serve_trial}/{total_apps} ({(self_serve_free + self_serve_trial)/total_apps*100:.1f}%)")

# 2. Gated apps
paid_plan = sum(1 for a in apps if a["developer_access"]["access_tier"] == "Paid-plan dependent")
admin_approval = sum(1 for a in apps if a["developer_access"]["access_tier"] == "Admin approval required")
partner_gated = sum(1 for a in apps if a["developer_access"]["access_tier"] == "Partner/contact-sales gated")
total_gated = paid_plan + admin_approval + partner_gated
print(f"\n2. Gated apps:")
print(f"   - Paid-plan dependent: {paid_plan}/{total_apps}")
print(f"   - Admin approval: {admin_approval}/{total_apps}")
print(f"   - Partner gated: {partner_gated}/{total_apps}")
print(f"   Total gated/paid-restricted: {total_gated}/{total_apps} ({total_gated/total_apps*100:.1f}%)")

# 3. Public API apps
public_apis = sum(1 for a in apps if a["api_surface"]["has_public_api"])
print(f"\n3. Public API apps: {public_apis}/{total_apps} ({public_apis/total_apps*100:.1f}%)")

# 4. MCP breakdown
mcp_counts = Counter([a["mcp"]["mcp_status"] for a in apps])
print(f"\n4. MCP breakdown:")
for m, c in mcp_counts.items():
    print(f"   - {m}: {c}/{total_apps} ({c/total_apps*100:.1f}%)")

# 5. Easy wins vs Opportunities
easy_build = sum(1 for a in apps if a["buildability"]["rating"] == "Easy")
easy_wins_strict = sum(1 for a in apps if a["buildability"]["rating"] == "Easy" and a["developer_access"]["access_tier"] in ("Self-serve free", "Self-serve trial") and a["api_surface"]["has_public_api"])
print(f"\n5. Easy buildability rating: {easy_build}/{total_apps}")
print(f"   Strict Easy Wins (Easy + Self-serve + Public API): {easy_wins_strict}/{total_apps}")

# 6. Automated Verification Audit Metrics
with open(VERIF_REPORT_JSON, "r", encoding="utf-8") as f:
    vrep = json.load(f)
v_metrics = vrep["metrics"]
print(f"\n6. Verification Report Automated Check Metrics:")
print(f"   - Total claims evaluated: {v_metrics['total_claims_evaluated']}")
print(f"   - Verified claims: {v_metrics['verified_claims']}/{v_metrics['total_claims_evaluated']} ({v_metrics['claim_level_verification_rate']*100:.1f}%)")
print(f"   - Evidence link coverage: {v_metrics['evidence_coverage']*100:.1f}%")
print(f"   - Claims requiring review: {v_metrics['requires_human_review_claims']}")

# 7. Human Ground Truth Benchmark Audit Metrics
with open(HUMAN_ACCURACY_JSON, "r", encoding="utf-8") as f:
    hrep = json.load(f)
h_summary = hrep["benchmark_summary"]
print(f"\n7. Human-Confirmed Ground Truth Benchmark (20 apps / 10 categories):")
print(f"   - Sample apps: {h_summary['total_sampled_apps']}")
print(f"   - Apps with 100% agreement: {h_summary['apps_with_100pct_accuracy']}/{h_summary['total_sampled_apps']} ({h_summary['app_level_accuracy']*100:.1f}%)")
print(f"   - Claims audited: {h_summary['total_claims_audited']}")
print(f"   - Claims correct: {h_summary['claims_correct']}/{h_summary['total_claims_audited']} ({h_summary['overall_claim_level_accuracy']*100:.1f}%)")
print(f"   - Field-level accuracy breakdown:")
for f_name, acc in h_summary["field_level_accuracies"].items():
    print(f"     • {f_name}: {acc*100:.1f}%")
