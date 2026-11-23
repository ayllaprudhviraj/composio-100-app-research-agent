"""Regression test suite validating reconciled MCP and access tier data contracts."""
import json
from pathlib import Path
from collections import Counter

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"

def test_mcp_count_reconciliation():
    with open(DATA_DIR / "research_results.json", "r", encoding="utf-8") as f:
        apps = json.load(f)
    assert len(apps) == 100

    mcp_counts = Counter([a["mcp"]["mcp_status"] for a in apps])
    
    # Assert exact reconciled counts
    assert mcp_counts["Official MCP"] == 6, f"Expected 6 official MCPs, found {mcp_counts['Official MCP']}"
    assert mcp_counts["Community MCP"] == 65, f"Expected 65 community MCPs, found {mcp_counts['Community MCP']}"
    assert mcp_counts["Third-party MCP"] == 2, f"Expected 2 third-party MCPs, found {mcp_counts['Third-party MCP']}"
    assert mcp_counts["No verified MCP found"] == 27, f"Expected 27 no verified MCP, found {mcp_counts['No verified MCP found']}"
    
    # Assert total MCP accounts for all 100 apps
    assert sum(mcp_counts.values()) == 100
    
    # Total verified MCP repositories = 6 + 65 + 2 = 73
    total_existing_mcp = mcp_counts["Official MCP"] + mcp_counts["Community MCP"] + mcp_counts["Third-party MCP"]
    assert total_existing_mcp == 73

def test_access_tier_reconciliation_including_unknown():
    with open(DATA_DIR / "research_results.json", "r", encoding="utf-8") as f:
        apps = json.load(f)

    access_counts = Counter([a["developer_access"]["access_tier"] for a in apps])
    
    assert access_counts["Self-serve free"] == 47
    assert access_counts["Paid-plan dependent"] == 33
    assert access_counts["Self-serve trial"] == 14
    assert access_counts["Admin approval required"] == 4
    assert access_counts["Unknown"] == 2
    
    assert sum(access_counts.values()) == 100
    
    # Verify the two unknown apps are App #23 (Zoho Cliq) and App #50 (FanBasis)
    unknown_ids = [a["id"] for a in apps if a["developer_access"]["access_tier"] == "Unknown"]
    assert sorted(unknown_ids) == [23, 50]

def test_easy_opportunities_strict_reconciliation():
    with open(DATA_DIR / "research_results.json", "r", encoding="utf-8") as f:
        apps = json.load(f)

    easy_free = []
    easy_trial = []
    for app in apps:
        b = app.get("buildability", {}).get("rating")
        api = app.get("api_surface", {}).get("has_public_api")
        tier = app.get("developer_access", {}).get("access_tier")
        if b == "Easy" and api is True:
            if tier == "Self-serve free":
                easy_free.append(app["id"])
            elif tier == "Self-serve trial":
                easy_trial.append(app["id"])

    assert len(easy_free) == 44, f"Expected 44 easy free apps, found {len(easy_free)}"
    assert len(easy_trial) == 13, f"Expected 13 easy trial apps, found {len(easy_trial)}"
    assert len(easy_free) + len(easy_trial) == 57, f"Expected 57 total easy opportunities, found {len(easy_free) + len(easy_trial)}"

def test_original_research_data_preserved():
    with open(DATA_DIR / "research_results.json", "r", encoding="utf-8") as f:
        apps = json.load(f)

    for app in apps:
        mcp = app.get("mcp", {})
        assert "original_extracted_status" in mcp, f"App #{app['id']} missing original_extracted_status"
        assert "verified_status" in mcp, f"App #{app['id']} missing verified_status"
        assert "verification_rationale" in mcp, f"App #{app['id']} missing verification_rationale"
