"""Validation script for 100 App API Research Agent dataset."""
import csv
import json
import sys
from pathlib import Path
from collections import Counter

ROOT_DIR = Path(__file__).resolve().parent
JSON_PATH = ROOT_DIR / "data" / "apps.json"
CSV_PATH = ROOT_DIR / "data" / "apps.csv"

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
    "AI, Research and Media-native",
]

def generate_csv_from_json(apps):
    """Generate CSV from apps list."""
    with open(CSV_PATH, "w", newline="", encoding="utf-8") as f:
        fieldnames = ["id", "name", "category", "website", "official_docs_hint", "research_status"]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(apps)

def validate_dataset():
    print("=" * 65)
    print(" COMPOSIO 100-APP DATASET VALIDATION REPORT")
    print("=" * 65)

    if not JSON_PATH.exists():
        print(f"[FAIL] Missing {JSON_PATH}")
        sys.exit(1)

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        apps = json.load(f)

    # 1. Generate CSV
    generate_csv_from_json(apps)
    print(f"[OK] Generated {CSV_PATH}")

    errors = []

    # 2. Count Check
    total = len(apps)
    if total == 100:
        print(f"[PASS] Total Applications: {total} (Exactly 100)")
    else:
        errors.append(f"Expected 100 applications, found {total}")
        print(f"[FAIL] Total Applications: {total} (Expected 100)")

    # 3. ID Check: 1 to 100 consecutive
    ids = [app.get("id") for app in apps]
    expected_ids = list(range(1, 101))
    if ids == expected_ids:
        print("[PASS] IDs: Consecutive 1 to 100 with zero gaps or duplicates")
    else:
        duplicates = [item for item, count in Counter(ids).items() if count > 1]
        missing = set(expected_ids) - set(ids)
        errors.append(f"ID mismatch. Duplicates: {duplicates}, Missing: {missing}")
        print(f"[FAIL] ID sequence invalid. Duplicates: {duplicates}, Missing: {missing}")

    # 4. Duplicate Names Check
    names = [app.get("name", "").strip().lower() for app in apps]
    name_counts = Counter(names)
    duplicate_names = [name for name, count in name_counts.items() if count > 1]
    if not duplicate_names:
        print("[PASS] Unique Names: All 100 application names are unique")
    else:
        errors.append(f"Duplicate names found: {duplicate_names}")
        print(f"[FAIL] Duplicate names found: {duplicate_names}")

    # 5. Missing Fields Check
    missing_fields = []
    for app in apps:
        app_id = app.get("id")
        for field in ["id", "name", "category", "website", "official_docs_hint", "research_status"]:
            if not str(app.get(field, "")).strip():
                missing_fields.append((app_id, field))
    
    if not missing_fields:
        print("[PASS] Complete Records: No empty or missing fields across any record")
    else:
        errors.append(f"Missing fields: {missing_fields}")
        print(f"[FAIL] Missing fields found: {missing_fields}")

    # 6. Category Breakdown & Verification
    categories = [app.get("category") for app in apps]
    cat_counts = Counter(categories)
    
    print("\n" + "-" * 65)
    print(" CATEGORY DISTRIBUTION BREAKDOWN (10 Categories)")
    print("-" * 65)
    for cat in EXPECTED_CATEGORIES:
        count = cat_counts.get(cat, 0)
        status = "[PASS]" if count == 10 else "[FAIL]"
        print(f" {status} {cat.ljust(40)}: {count:2d} apps")

    unexpected_cats = set(cat_counts.keys()) - set(EXPECTED_CATEGORIES)
    if unexpected_cats:
        errors.append(f"Unexpected categories found: {unexpected_cats}")
        print(f"[FAIL] Unexpected categories: {unexpected_cats}")

    print("=" * 65)
    if errors:
        print(f"RESULT: FAILED with {len(errors)} error(s)")
        sys.exit(1)
    else:
        print("RESULT: ALL VALIDATION CHECKS PASSED SUCCESSFULLY (100/100)")
        print("=" * 65)

if __name__ == "__main__":
    validate_dataset()
