"""Audit all 100 applications' MCP claims and repository legitimacy."""
import json
from pathlib import Path
from collections import Counter

ROOT_DIR = Path(__file__).resolve().parent
DATA_DIR = ROOT_DIR / "data"

with open(DATA_DIR / "research_results.json", "r", encoding="utf-8") as f:
    apps = json.load(f)

print("=" * 65)
print("TASK 3: MCP CLAIMS AUDIT ACROSS ALL 100 APPS")
print("=" * 65)

mcp_status_counts = Counter([a["mcp"]["mcp_status"] for a in apps])
print(f"Total apps: {len(apps)}")
for st, cnt in mcp_status_counts.items():
    print(f"  - {st}: {cnt}")

has_repo_url = [a for a in apps if a["mcp"].get("repository_url")]
has_github = [a for a in has_repo_url if "github.com" in a["mcp"].get("repository_url", "").lower()]
non_github = [a for a in has_repo_url if "github.com" not in a["mcp"].get("repository_url", "").lower()]

print(f"\nApps with an MCP repository/documentation URL: {len(has_repo_url)}")
print(f"  - Pointing to direct GitHub: {len(has_github)}")
print(f"  - Non-GitHub / Registry URLs: {len(non_github)}")

if non_github:
    print("\nNon-GitHub MCP repository URLs found:")
    for a in non_github:
        print(f"  - #{a['id']} {a['identity']['name']} ({a['mcp']['mcp_status']}): {a['mcp'].get('repository_url')}")

# Identify claimed official vs third party vs community
official_apps = [a for a in apps if a["mcp"]["mcp_status"] == "Official MCP"]
print(f"\nOfficial MCP claimed count: {len(official_apps)}")
print("Sample Official MCP claimed:")
for a in official_apps[:8]:
    print(f"  - #{a['id']} {a['identity']['name']}: {a['mcp'].get('repository_url')} (maintainer: {a['mcp'].get('maintainer')})")
