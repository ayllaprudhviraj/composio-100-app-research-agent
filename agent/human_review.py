"""Human review queue manager for flagged or uncertain findings."""
import json
from pathlib import Path
from typing import Dict, Any, List
from loguru import logger

ROOT_DIR = Path(__file__).resolve().parent.parent
QUEUE_PATH = ROOT_DIR / "data" / "human_review_queue.json"

class HumanReviewManager:
    def __init__(self):
        QUEUE_PATH.parent.mkdir(parents=True, exist_ok=True)
        self.queue_items: List[Dict[str, Any]] = []

    def add_to_queue(self, app_id: int, app_name: str, field_name: str, predicted_value: Any, reason: str, evidence_url: str = None):
        """Add an uncertain or conflicting finding to human review queue."""
        item = {
            "app_id": app_id,
            "app_name": app_name,
            "field_name": field_name,
            "predicted_value": predicted_value,
            "review_reason": reason,
            "evidence_url": evidence_url,
            "human_confirmed_value": None,
            "reviewed": False
        }
        self.queue_items.append(item)

    def save_queue(self):
        """Persist review queue to file."""
        with open(QUEUE_PATH, "w", encoding="utf-8") as f:
            json.dump(self.queue_items, f, indent=2)
        logger.info(f"Saved {len(self.queue_items)} review item(s) to {QUEUE_PATH}")
