"""Test suite 2: Research results integrity, schema validation, and CSV parity."""
import json
import csv
from pathlib import Path
from agent.schemas import AppResearchResult

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"

def test_research_results_json_schema():
    results_path = DATA_DIR / "research_results.json"
    assert results_path.exists(), "research_results.json does not exist"
    
    with open(results_path, "r", encoding="utf-8") as f:
        records = json.load(f)
        
    assert len(records) == 100, f"Expected 100 research results, found {len(records)}"
    
    for r in records:
        # Strict Pydantic schema validation
        validated = AppResearchResult.model_validate(r)
        assert validated.id >= 1 and validated.id <= 100
        assert validated.identity.name != ""
        assert len(validated.evidence) > 0, f"App #{validated.id} {validated.identity.name} has no evidence attached"

def test_research_results_csv_parity():
    json_path = DATA_DIR / "research_results.json"
    csv_path = DATA_DIR / "research_results.csv"
    
    with open(json_path, "r", encoding="utf-8") as f:
        json_data = json.load(f)
    with open(csv_path, "r", encoding="utf-8") as f:
        csv_rows = list(csv.DictReader(f))
        
    assert len(json_data) == len(csv_rows) == 100
    
    for j, c in zip(json_data, csv_rows):
        assert str(j["id"]) == c["id"]
        assert j["identity"]["name"] == c["name"]
        assert j["developer_access"]["access_tier"] == c["developer_access"]
        assert j["buildability"]["rating"] == c["buildability_rating"]

def test_no_api_keys_exposed_in_research_outputs():
    # Ensure no actual API key string leaks into processed outputs
    files_to_check = [
        DATA_DIR / "research_results.json",
        DATA_DIR / "research_results.csv",
        ROOT_DIR / "web" / "js" / "data.js"
    ]
    forbidden_tokens = ["ck_BdvNCV5Qglr", "AQ.Ab8RN6JDH2", "tvly-3OP6Ih", "4886f68619e004a17acdcbf6911bcc5086998846"]
    
    for file_path in files_to_check:
        if file_path.exists():
            content = file_path.read_text(encoding="utf-8")
            for token in forbidden_tokens:
                assert token not in content, f"Secret credential leaked in {file_path.name}!"
