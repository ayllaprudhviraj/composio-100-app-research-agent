"""Extractor leveraging Google Gemini with structured Pydantic output."""
import os
import json
from loguru import logger
from dotenv import load_dotenv
from agent.schemas import AppResearchResult
from agent.prompts import EXTRACTION_SYSTEM_PROMPT, EXTRACTION_USER_PROMPT_TEMPLATE

load_dotenv()

class GeminiExtractor:
    def __init__(self, model_name: str = "gemini-3.5-flash-lite"):
        self.api_key = os.getenv("GEMINI_API_KEY")
        if not self.api_key:
            raise ValueError("GEMINI_API_KEY is not set in environment or .env file.")
        
        from google import genai
        from google.genai import types
        self.client = genai.Client(api_key=self.api_key)
        self.model_name = os.getenv("GEMINI_MODEL", model_name)
        self.types = types

    def extract_app_research(self, app_meta: dict, retrieved_docs: list) -> AppResearchResult:
        """Extract structured findings from retrieved documents using Gemini."""
        docs_text = ""
        for i, doc in enumerate(retrieved_docs, 1):
            docs_text += f"\n--- DOCUMENT {i} ---\n"
            docs_text += f"URL: {doc['url']}\n"
            docs_text += f"Title: {doc.get('title', 'N/A')}\n"
            docs_text += f"Retrieved: {doc.get('retrieved_timestamp', 'N/A')}\n"
            docs_text += f"Content:\n{doc.get('text', '')}\n"

        prompt = EXTRACTION_USER_PROMPT_TEMPLATE.format(
            name=app_meta["name"],
            category=app_meta["category"],
            website=app_meta["website"],
            official_docs_hint=app_meta.get("official_docs_hint", ""),
            retrieved_documents=docs_text
        )

        from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

        @retry(
            stop=stop_after_attempt(5),
            wait=wait_exponential(multiplier=1.5, min=2, max=10),
            reraise=True
        )
        def _call_gemini_with_retry():
            return self.client.models.generate_content(
                model=self.model_name,
                contents=prompt,
                config=self.types.GenerateContentConfig(
                    system_instruction=EXTRACTION_SYSTEM_PROMPT,
                    response_mime_type="application/json",
                    response_schema=AppResearchResult,
                    temperature=0.1
                )
            )

        try:
            logger.info(f"Invoking Gemini ({self.model_name}) structured extraction for '{app_meta['name']}'...")
            response = _call_gemini_with_retry()

            result_dict = json.loads(response.text)
            # Ensure id matches
            result_dict["id"] = app_meta["id"]
            return AppResearchResult.model_validate(result_dict)

        except Exception as e:
            logger.error(f"Gemini extraction failed for {app_meta['name']}: {e}")
            raise
