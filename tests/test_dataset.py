"""Test suite 1: Dataset integrity and schema tests."""
import json
import csv
from pathlib import Path
from collections import Counter

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"

EXPECTED_CATEGORIES = [
    "CRM and Sales",
    "Support and Helpdesk",
    "Communications and Messaging",
    "Marketing, Ads, Email and Social",
    "Ecommerce",
    "Data, SEO and Scraping",
    "Developer, Infra and Data Platforms",
    "Productivity and Project Management",
    "Finance and Fintech",
    "AI, Research and Media-native"
]

def test_apps_json_count_and_uniqueness():
    with open(DATA_DIR / "apps.json", "r", encoding="utf-8") as f:
        apps = json.load(f)
    assert len(apps) == 100, f"Expected 100 apps, got {len(apps)}"
    
    ids = [a["id"] for a in apps]
    assert ids == list(range(1, 101)), "App IDs must be consecutive integers from 1 to 100"
    
    names = [a["name"].strip().lower() for a in apps]
    assert len(names) == len(set(names)), "Duplicate application names found in input dataset"

def test_all_ten_categories_represented():
    with open(DATA_DIR / "apps.json", "r", encoding="utf-8") as f:
        apps = json.load(f)
    cat_counts = Counter([a["category"] for a in apps])
    for cat in EXPECTED_CATEGORIES:
        assert cat_counts[cat] == 10, f"Category '{cat}' must have exactly 10 apps, found {cat_counts[cat]}"

def test_apps_csv_parity():
    with open(DATA_DIR / "apps.json", "r", encoding="utf-8") as f:
        json_apps = json.load(f)
    with open(DATA_DIR / "apps.csv", "r", encoding="utf-8") as f:
        csv_rows = list(csv.DictReader(f))
    assert len(json_apps) == len(csv_rows) == 100
    for j, c in zip(json_apps, csv_rows):
        assert str(j["id"]) == c["id"]
        assert j["name"] == c["name"]
        assert j["category"] == c["category"]
