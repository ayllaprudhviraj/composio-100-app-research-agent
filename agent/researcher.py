"""Core researcher coordinator orchestrating search, fetching, extraction, caching, and storage."""
import os
import json
import time
from pathlib import Path
from loguru import logger
from typing import Dict, Any, Optional

from agent.schemas import AppResearchResult
from agent.search_provider import SearchProvider
from agent.document_fetcher import DocumentFetcher
from agent.extractor import GeminiExtractor

ROOT_DIR = Path(__file__).resolve().parent.parent
RAW_CACHE_DIR = ROOT_DIR / "data" / "raw"
PROCESSED_DIR = ROOT_DIR / "data" / "processed"

class AppResearcher:
    def __init__(self):
        RAW_CACHE_DIR.mkdir(parents=True, exist_ok=True)
        PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
        
        self.search_provider = SearchProvider()
        self.document_fetcher = DocumentFetcher()
        self.extractor = GeminiExtractor()

    def _get_cache_path(self, app_id: int) -> Path:
        return RAW_CACHE_DIR / f"app_{app_id}_cache.json"

    def _get_processed_path(self, app_id: int) -> Path:
        return PROCESSED_DIR / f"app_{app_id}.json"

    def is_researched(self, app_id: int) -> bool:
        """Check if application research is already completed and saved."""
        path = self._get_processed_path(app_id)
        return path.exists()

    def research_app(self, app_meta: Dict[str, Any], force: bool = False) -> AppResearchResult:
        """Research a single application with caching and resume support."""
        app_id = app_meta["id"]
        app_name = app_meta["name"]
        processed_file = self._get_processed_path(app_id)

        # Check existing result for resumption
        if processed_file.exists() and not force:
            logger.info(f"[{app_id}/100] App '{app_name}' already researched. Loading cached result.")
            with open(processed_file, "r", encoding="utf-8") as f:
                return AppResearchResult.model_validate_json(f.read())

        logger.info(f"[{app_id}/100] Starting research for '{app_name}' ({app_meta['category']})...")
        cache_file = self._get_cache_path(app_id)
        retrieved_docs = []

        # Step 1 & 2: Search & Fetch with Cache
        if cache_file.exists() and not force:
            logger.info(f"Loading cached documents for '{app_name}' from {cache_file}")
            with open(cache_file, "r", encoding="utf-8") as f:
                retrieved_docs = json.load(f)
        else:
            logger.info(f"Searching official sources for '{app_name}'...")
            search_results = self.search_provider.find_official_sources(
                app_name=app_name,
                website=app_meta.get("website", ""),
                hint=app_meta.get("official_docs_hint", "")
            )
            
            logger.info(f"Found {len(search_results)} candidate URLs. Fetching page content...")
            for res in search_results:
                url = res.get("url")
                if not url:
                    continue
                doc = self.document_fetcher.fetch_page(url)
                if doc and len(doc.get("text", "")) > 100:
                    retrieved_docs.append(doc)
                time.sleep(0.5)  # respectful delay

            # Cache the retrieved documents
            with open(cache_file, "w", encoding="utf-8") as f:
                json.dump(retrieved_docs, f, indent=2)

        if not retrieved_docs:
            logger.warning(f"No pages could be fetched for '{app_name}'. Using search snippets as fallback evidence.")
            # Build minimal docs from search snippets if full page failed
            retrieved_docs = [{
                "url": f"https://{app_meta.get('website', '')}",
                "title": app_name,
                "text": f"Application: {app_name}. Hint: {app_meta.get('official_docs_hint', '')}",
                "retrieved_timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ")
            }]

        # Step 3: Structured Extraction with Gemini
        logger.info(f"Running structured fact extraction for '{app_name}' on {len(retrieved_docs)} documents...")
        result = self.extractor.extract_app_research(app_meta, retrieved_docs)

        # Save result
        with open(processed_file, "w", encoding="utf-8") as f:
            f.write(result.model_dump_json(indent=2))

        logger.success(f"[{app_id}/100] Research complete for '{app_name}'. Saved to {processed_file}")
        return result

