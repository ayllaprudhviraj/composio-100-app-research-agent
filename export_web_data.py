"""Export JSON research results and analytics into web/js/data.js for standalone static dashboard viewing."""
import json
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent
RESULTS_JSON = ROOT_DIR / "data" / "research_results.json"
PATTERN_JSON = ROOT_DIR / "reports" / "pattern_analysis.json"
OPPORTUNITIES_JSON = ROOT_DIR / "reports" / "integration_opportunities.json"
ACCURACY_REPORT_JSON = ROOT_DIR / "reports" / "human_verified_accuracy_report.json"
OUTPUT_JS = ROOT_DIR / "web" / "js" / "data.js"

OUTPUT_JS.parent.mkdir(parents=True, exist_ok=True)

with open(RESULTS_JSON, "r", encoding="utf-8") as f:
    results = json.load(f)

with open(PATTERN_JSON, "r", encoding="utf-8") as f:
    patterns = json.load(f)

with open(OPPORTUNITIES_JSON, "r", encoding="utf-8") as f:
    opportunities = json.load(f)

with open(ACCURACY_REPORT_JSON, "r", encoding="utf-8") as f:
    accuracy = json.load(f)

js_content = f"""// Auto-generated empirical dataset for Composio 100-App Research Dashboard
window.RESEARCH_RESULTS = {json.dumps(results, indent=2)};
window.PATTERN_ANALYSIS = {json.dumps(patterns, indent=2)};
window.INTEGRATION_OPPORTUNITIES = {json.dumps(opportunities, indent=2)};
window.ACCURACY_AUDIT = {json.dumps(accuracy, indent=2)};
"""

with open(OUTPUT_JS, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully exported data bundle to {OUTPUT_JS} ({len(results)} applications)")
