"""Test suite 4: Analytics consistency with raw research results."""
import json
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
REPORTS_DIR = ROOT_DIR / "reports"

def test_analytics_metrics_parity():
    with open(DATA_DIR / "research_results.json", "r", encoding="utf-8") as f:
        results = json.load(f)
    with open(REPORTS_DIR / "pattern_analysis.json", "r", encoding="utf-8") as f:
        patterns = json.load(f)
        
    assert patterns["dataset_summary"]["total_apps"] == len(results) == 100
    
    # Check public API count consistency
    actual_public_api = sum(1 for r in results if r["api_surface"]["has_public_api"])
    reported_public_api = patterns["4_public_api_availability"]["has_public_api"]["count"]
    assert actual_public_api == reported_public_api

    # Check Self-serve free count consistency
    actual_self_serve = sum(1 for r in results if r["developer_access"]["access_tier"] == "Self-serve free")
    reported_self_serve = patterns["3_developer_access"]["Self-serve free"]["count"]
    assert actual_self_serve == reported_self_serve

def test_integration_opportunities_counts():
    with open(REPORTS_DIR / "integration_opportunities.json", "r", encoding="utf-8") as f:
        opps = json.load(f)
        
    assert "easy_wins" in opps
    assert "medium_opportunities" in opps
    assert "difficult_opportunities" in opps
    assert "mcp_white_space_opportunities" in opps
    
    assert opps["easy_wins"]["count"] == len(opps["easy_wins"]["apps"])
    assert opps["mcp_white_space_opportunities"]["count"] == len(opps["mcp_white_space_opportunities"]["apps"])
