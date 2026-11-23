"""Search provider for discovering official developer documentation, API references, and MCP repos."""
import os
import requests
from typing import List, Dict, Any
from loguru import logger
from dotenv import load_dotenv

load_dotenv()

class SearchProvider:
    def __init__(self):
        self.tavily_api_key = os.getenv("TAVILY_API_KEY")
        self.serper_api_key = os.getenv("SERPER_API_KEY")
        
        self.tavily_client = None
        if self.tavily_api_key:
            try:
                from tavily import TavilyClient
                self.tavily_client = TavilyClient(api_key=self.tavily_api_key)
            except Exception as e:
                logger.warning(f"Failed to initialize TavilyClient: {e}")

    def search(self, query: str, max_results: int = 5) -> List[Dict[str, str]]:
        """Search using Tavily with Serper fallback."""
        results = []
        # Try Tavily first
        if self.tavily_client:
            try:
                logger.info(f"Tavily search query: '{query}'")
                response = self.tavily_client.search(
                    query=query,
                    max_results=max_results,
                    search_depth="advanced",
                    include_answer=False
                )
                for item in response.get("results", []):
                    results.append({
                        "url": item.get("url"),
                        "title": item.get("title", ""),
                        "snippet": item.get("content", "")
                    })
                if results:
                    return results
            except Exception as e:
                logger.warning(f"Tavily search failed for '{query}': {e}. Falling back to Serper.")

        # Fallback to Serper
        if self.serper_api_key:
            try:
                logger.info(f"Serper search query: '{query}'")
                resp = requests.post(
                    "https://google.serper.dev/search",
                    headers={"X-API-KEY": self.serper_api_key, "Content-Type": "application/json"},
                    json={"q": query, "num": max_results},
                    timeout=15
                )
                if resp.status_code == 200:
                    data = resp.json()
                    for item in data.get("organic", []):
                        results.append({
                            "url": item.get("link"),
                            "title": item.get("title", ""),
                            "snippet": item.get("snippet", "")
                        })
                    return results
            except Exception as e:
                logger.error(f"Serper search failed: {e}")

        return results

    def find_official_sources(self, app_name: str, website: str, hint: str) -> List[Dict[str, str]]:
        """Run targeted queries to find official docs, auth, pricing, and MCP repos."""
        queries = [
            f"{app_name} official developer API documentation {website}",
            f"{app_name} API authentication developer credentials {website}",
            f"{app_name} model context protocol mcp server github"
        ]
        
        all_results = []
        seen_urls = set()
        
        for q in queries:
            search_res = self.search(q, max_results=3)
            for res in search_res:
                url = res.get("url")
                if url and url not in seen_urls:
                    seen_urls.add(url)
                    all_results.append(res)
                    
        return all_results

