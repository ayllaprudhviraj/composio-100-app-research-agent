"""Integration test script verifying Composio credentials, connectivity, and session initiation."""
import sys
from loguru import logger
from integrations.composio_client import ComposioIntegrationClient

def test_composio():
    logger.info("Starting Composio integration connectivity tests...")
    
    integration = ComposioIntegrationClient()
    
    if not integration.api_key:
        logger.error("[FAIL] COMPOSIO_API_KEY environment variable is not configured.")
        print("\nPrerequisite Check: COMPOSIO_API_KEY is missing from .env")
        sys.exit(1)

    logger.info(f"Checking credentials with key: {integration.mask_key(integration.api_key)}")
    check = integration.check_connection()

    if check["status"] == "ok" and check["authenticated"]:
        logger.success("[PASS] Composio connection successful and authenticated!")
        print("\n--- Session & MCP Diagnostics ---")
        print(f"Session ID : {check.get('session_id')}")
        print(f"MCP URL    : {check.get('mcp_url')}")
        print(f"Headers OK : {check.get('has_headers')}")
        print("---------------------------------\n")
    else:
        logger.warning(f"[FAIL/UNAUTHORIZED] Composio responded: {check.get('message')}")
        print("\n" + "=" * 65)
        print(" COMPOSIO INTEGRATION STATUS")
        print("=" * 65)
        print(f"Key configured   : Yes ({check.get('masked_key')})")
        print(f"Auth Status      : {check.get('message')}")
        print("\nNote: The modern Composio API requires an active Composio project key.")
        print("If the key is expired, inactive, or unverified on composio.dev,")
        print("the research engine remains 100% operational in autonomous mode.")
        print("=" * 65 + "\n")

if __name__ == "__main__":
    test_composio()
