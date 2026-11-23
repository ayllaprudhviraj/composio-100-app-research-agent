"""Official Composio Python SDK client wrapper supporting modern sessions and MCP endpoints."""
import os
from typing import Optional, Dict, Any
from loguru import logger
from dotenv import load_dotenv

load_dotenv()

class ComposioIntegrationClient:
    """Wrapper around official Composio Python SDK (composio>=0.34.0).
    
    Adheres strictly to modern sessions architecture:
    https://docs.composio.dev/docs/sessions-via-mcp
    """

    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or os.getenv("COMPOSIO_API_KEY")
        self._client = None
        self._init_error = None

        if not self.api_key or not self.api_key.strip():
            self._init_error = "COMPOSIO_API_KEY is missing or empty in environment."
            logger.warning(self._init_error)
            return

        try:
            from composio import Composio
            self._client = Composio(api_key=self.api_key)
            logger.info("Composio client initialized successfully with modern SDK.")
        except Exception as e:
            self._init_error = f"Failed to initialize Composio client: {e}"
            logger.error(self._init_error)

    def mask_key(self, key: Optional[str]) -> str:
        """Safely mask key for logs and outputs without exposing secrets."""
        if not key or len(key) < 8:
            return "***"
        return f"{key[:4]}...{key[-4:]}"

    def check_connection(self) -> Dict[str, Any]:
        """Perform a safe connectivity and authentication verification."""
        if self._init_error:
            return {
                "status": "error",
                "authenticated": False,
                "message": self._init_error,
                "api_key_configured": bool(self.api_key),
                "masked_key": self.mask_key(self.api_key)
            }

        try:
            # Check session creation or tool router ping
            # Using stable test user
            session = self._client.sessions.create(
                user_id="connectivity_probe_user",
                mcp=True
            )
            return {
                "status": "ok",
                "authenticated": True,
                "session_id": session.id,
                "mcp_url": getattr(session.mcp, "url", None),
                "has_headers": bool(getattr(session.mcp, "headers", None)),
                "masked_key": self.mask_key(self.api_key)
            }
        except Exception as e:
            err_msg = str(e)
            logger.warning(f"Composio connection check failed: {err_msg}")
            return {
                "status": "failed",
                "authenticated": False,
                "message": err_msg,
                "api_key_configured": bool(self.api_key),
                "masked_key": self.mask_key(self.api_key)
            }

    def create_mcp_session(self, user_id: str = "local_dev_user", toolkits: Optional[list] = None) -> Dict[str, Any]:
        """Create a development session with MCP enabled per official docs.
        
        Args:
            user_id: Stable identifier for user context.
            toolkits: Optional list of app toolkits to scope (e.g. ['github', 'slack']).
        """
        if not self._client:
            raise RuntimeError(f"Composio client not initialized: {self._init_error}")

        params = {"user_id": user_id, "mcp": True}
        if toolkits:
            params["toolkits"] = toolkits

        logger.info(f"Creating Composio MCP session for user '{user_id}' with params={params}")
        session = self._client.sessions.create(**params)

        mcp_url = getattr(session.mcp, "url", None)
        raw_headers = getattr(session.mcp, "headers", {}) or {}

        # Safe header sanitation to prevent token leak
        sanitized_headers = {}
        for k, v in raw_headers.items():
            if any(secret_term in k.lower() for secret_term in ["auth", "key", "token", "secret"]):
                sanitized_headers[k] = self.mask_key(str(v))
            else:
                sanitized_headers[k] = v

        return {
            "session_id": session.id,
            "mcp_url": mcp_url,
            "sanitized_headers": sanitized_headers,
            "raw_session": session
        }
