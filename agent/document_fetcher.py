"""Document fetcher for retrieving full page text and recording retrieval metadata."""
import datetime
import httpx
from bs4 import BeautifulSoup
from typing import Dict, Any, Optional
from loguru import logger
from tenacity import retry, stop_after_attempt, wait_exponential

class DocumentFetcher:
    def __init__(self, timeout_seconds: int = 15):
        self.timeout = timeout_seconds
        self.headers = {
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
            ),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        }

    @retry(stop=stop_after_attempt(2), wait=wait_exponential(multiplier=1, min=2, max=6), reraise=False)
    def fetch_page(self, url: str) -> Optional[Dict[str, Any]]:
        """Fetch page text, title, and timestamp."""
        try:
            with httpx.Client(timeout=self.timeout, follow_redirects=True, headers=self.headers) as client:
                response = client.get(url)
                if response.status_code != 200:
                    logger.warning(f"Failed to fetch {url}: HTTP {response.status_code}")
                    return None
                
                soup = BeautifulSoup(response.text, "html.parser")
                
                # Remove scripts, styles, nav, footer
                for element in soup(["script", "style", "nav", "footer", "header", "noscript"]):
                    element.decompose()
                
                title = soup.title.string.strip() if soup.title and soup.title.string else url
                text = " ".join(soup.stripped_strings)
                
                # Limit text length per document to avoid overflowing context
                clean_text = text[:6000] if len(text) > 6000 else text
                
                return {
                    "url": str(response.url),
                    "title": title,
                    "text": clean_text,
                    "retrieved_timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                    "status_code": response.status_code
                }
        except Exception as e:
            logger.warning(f"Error fetching page {url}: {e}")
            return None

