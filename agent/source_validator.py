"""Source domain and URL reachability validator."""
import urllib.parse
from typing import Dict, Any, List
import httpx
from loguru import logger

AUTHORITATIVE_DOMAINS = {
    "github.com", "gitlab.com", "microsoft.com", "google.com",
    "facebook.com", "amazon.com", "salesforce.com", "intuit.com",
    "atlassian.com", "stoplight.io", "readme.io", "gitbook.io", "swagger.io"
}

class SourceValidator:
    def __init__(self, timeout_seconds: int = 10):
        self.timeout = timeout_seconds
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
        }

    def check_url_reachability(self, url: str) -> Dict[str, Any]:
        """Check if an evidence URL is reachable without relying solely on status 200."""
        try:
            with httpx.Client(timeout=self.timeout, follow_redirects=True, headers=self.headers) as client:
                resp = client.head(url)
                if resp.status_code in (405, 403):  # Some servers reject HEAD
                    resp = client.get(url)
                
                reachable = resp.status_code < 400
                return {
                    "reachable": reachable,
                    "status_code": resp.status_code,
                    "final_url": str(resp.url),
                    "error": None
                }
        except Exception as e:
            return {
                "reachable": False,
                "status_code": 0,
                "final_url": url,
                "error": str(e)
            }

    def is_authoritative_domain(self, source_url: str, app_website: str) -> bool:
        """Check if domain matches app website or a recognized developer/repo authority."""
        try:
            parsed_src = urllib.parse.urlparse(source_url)
            src_host = (parsed_src.netloc or "").lower().split(":")[0]
            
            # Clean app website
            app_host = app_website.lower().replace("https://", "").replace("http://", "").split("/")[0].split(":")[0]

            # Direct match or subdomain
            if app_host and (src_host == app_host or src_host.endswith("." + app_host)):
                return True

            # Match known authoritative platforms (GitHub, Microsoft Docs, Stoplight, Readme, etc.)
            for auth in AUTHORITATIVE_DOMAINS:
                if src_host == auth or src_host.endswith("." + auth):
                    return True

            return False
        except Exception:
            return False
