"""Demonstration of how an external MCP-compatible client consumes Composio MCP sessions."""
import json
from loguru import logger
from integrations.composio_client import ComposioIntegrationClient

def demonstrate_mcp_client_consumption():
    """Demonstrates how an MCP client (such as Claude Desktop, Cursor, or an AI Agent)
    connects to Composio-hosted MCP servers using the retrieved session credentials.
    """
    print("=" * 70)
    print(" COMPOSIO MCP SESSION ARCHITECTURE DEMONSTRATION")
    print("=" * 70)

    client = ComposioIntegrationClient()
    conn_result = client.check_connection()

    print(f"\n[1] Configuration Check:")
    print(f"  • API Key Configured: {conn_result.get('api_key_configured')}")
    print(f"  • Masked Key: {conn_result.get('masked_key')}")
    print(f"  • Authenticated: {conn_result.get('authenticated')}")
    if not conn_result.get("authenticated"):
        print(f"  • Notice: {conn_result.get('message')}")

    print("\n[2] How MCP Clients Consume Composio Sessions:")
    print("""
  In modern Composio architecture:
  1. A session is spawned via `client.sessions.create(user_id='...', mcp=True)`.
  2. Composio spins up a remote, hosted MCP gateway scoped specifically to that user.
  3. Composio returns two connection parameters:
     - `session.mcp.url`: Hosted MCP stream/SSE endpoint
     - `session.mcp.headers`: Scoped session token for the client
  4. Any standard Model Context Protocol client connects directly via standard transport.
    """)

    # Demonstration MCP client config structure
    mock_url = conn_result.get("mcp_url") or "https://mcp.composio.dev/sse/session_sample_123"
    mcp_config = {
        "mcpServers": {
            "composio": {
                "url": mock_url,
                "headers": {
                    "x-composio-session": "cmp_sess_***masked***"
                },
                "transport": "sse"
            }
        }
    }

    print("[3] Sample MCP Client Configuration (`claude_desktop_config.json`):")
    print(json.dumps(mcp_config, indent=2))

    print("\n[4] Execution Boundary & Safety Rules:")
    print("  • Research Engine Status: Autonomous read-only discovery & structured extraction.")
    print("  • Composio Integration Status: Configured for MCP session discovery.")
    print("  • No write actions or unauthorized login executions are permitted against 3rd party apps.")
    print("=" * 70)

if __name__ == "__main__":
    demonstrate_mcp_client_consumption()
