"""Test suite 3: Verification engine, accuracy audit, and review queue consistency."""
import json
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
REPORTS_DIR = ROOT_DIR / "reports"
DATA_DIR = ROOT_DIR / "data"

def test_verification_report_exists_and_valid():
    rep_path = REPORTS_DIR / "verification_report.json"
    assert rep_path.exists(), "verification_report.json must exist"
    
    with open(rep_path, "r", encoding="utf-8") as f:
        rep = json.load(f)
        
    metrics = rep.get("metrics", {})
    assert metrics.get("total_apps_evaluated") == 100
    assert metrics.get("claim_level_verification_rate") > 0.8
    assert metrics.get("evidence_coverage") > 0.9

def test_human_review_queue_preservation():
    queue_path = DATA_DIR / "human_review_queue.json"
    assert queue_path.exists(), "human_review_queue.json must exist"
    
    with open(queue_path, "r", encoding="utf-8") as f:
        queue = json.load(f)
        
    assert isinstance(queue, list)
    assert len(queue) > 0, "Review queue should hold flagged items"
    
    for item in queue:
        assert "app_id" in item
        assert "app_name" in item
        assert "field_name" in item
        assert "review_reason" in item

def test_human_ground_truth_benchmark():
    bm_path = DATA_DIR / "human_ground_truth_benchmark.json"
    rep_path = REPORTS_DIR / "human_verified_accuracy_report.json"
    
    assert bm_path.exists()
    assert rep_path.exists()
    
    with open(bm_path, "r", encoding="utf-8") as f:
        bm = json.load(f)
    with open(rep_path, "r", encoding="utf-8") as f:
        rep = json.load(f)
        
    assert len(bm) == 20, "Human benchmark must evaluate 20 balanced apps"
    assert rep["benchmark_summary"]["total_sampled_apps"] == 20
    assert rep["benchmark_summary"]["total_claims_audited"] == 100
