// Auto-generated empirical dataset for Composio 100-App Research Dashboard
window.RESEARCH_RESULTS = [
  {
    "id": 1,
    "identity": {
      "name": "Salesforce",
      "category": "CRM and Sales",
      "one_line_description": "A prominent enterprise CRM and cloud platform offering robust REST APIs, Apex programming capabilities, and integration frameworks."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "Basic authentication",
        "JWT or bearer token"
      ],
      "details": "Salesforce supports multiple authentication methods including OAuth 2.0, JWT Bearer flow, API keys, basic authentication (using passwords concatenated with security tokens), and custom credentials via Named and External Credentials.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Salesforce APIs and developer environments typically require a paid enterprise subscription or specific organization access to provision accounts and utilize integrations.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Salesforce offers an extensive public REST API and APEX API alongside third-party SDKs like simple-salesforce for Python.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/hansn74/mcp-server-salesforce",
      "maintainer": "hansn74, suraj20028, srinathsankara",
      "details": "Multiple community-built Model Context Protocol (MCP) servers exist on GitHub, including hansn74/mcp-server-salesforce and suraj20028/Salesforce-MCP, allowing AI interactions with Salesforce objects, records, and metadata.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/hansn74/mcp-server-salesforce",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/hansn74/mcp-server-salesforce",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/hansn74/mcp-server-salesforce).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access",
        "Authentication complexity"
      ],
      "justification": "Salesforce provides official, well-documented REST APIs and community MCP integrations, but configuring authentication credentials, connected apps, and maintaining paid subscription access introduces moderate complexity.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/simple-salesforce/simple-salesforce/commit/9e964768557a5f0c920dc2b53b9e9d1026deb73e",
        "source_title": "chore: update the link to the official Salesforce REST API Documentat\u2026 \u00b7 simple-salesforce/simple-salesforce@9e96476 \u00b7 GitHub",
        "claim_supported": "Salesforce provides official REST API documentation and low-level interfaces.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T11:46:15.326941+00:00"
      },
      {
        "source_url": "https://help.hellomongoose.com/salesforce-integration-api-authentication-page",
        "source_title": "Salesforce Integration - API Authentication Page",
        "claim_supported": "Salesforce uses Connected Apps, Client IDs, Consumer Secrets, usernames, and security tokens for API authentication.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:46:19.966789+00:00"
      },
      {
        "source_url": "https://success-craft.com/blog/salesforce-named-credentials/",
        "source_title": "Salesforce Named Credentials: API Authentication Best Practices",
        "claim_supported": "Salesforce supports OAuth 2.0, JWT Bearer Flow, API keys, and Basic Authentication via Named and External Credentials.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:46:23.283607+00:00"
      },
      {
        "source_url": "https://github.com/hansn74/mcp-server-salesforce",
        "source_title": "GitHub - hansn74/mcp-server-salesforce: Salesforce MCP Server \u00b7 GitHub",
        "claim_supported": "Community MCP server implementation integrates Claude with Salesforce for natural language interactions.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T11:46:26.249987+00:00"
      },
      {
        "source_url": "https://github.com/suraj20028/Salesforce-MCP",
        "source_title": "GitHub - suraj20028/Salesforce-MCP: MCP Server for Salesforce Operations \u00b7 GitHub",
        "claim_supported": "Community MCP server supports OAuth2 credentials for Salesforce operations.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T11:46:28.131217+00:00"
      },
      {
        "source_url": "https://github.com/srinathsankara/salesforce-http-mcp-server",
        "source_title": "GitHub - srinathsankara/salesforce-http-mcp-server: salesforce-http-mcp-server \u00b7 GitHub",
        "claim_supported": "Salesforce HTTP MCP server implementation exists for LangChain integration protected by API keys.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T11:46:30.319612+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 2,
    "identity": {
      "name": "HubSpot",
      "category": "CRM and Sales",
      "one_line_description": "HubSpot is a CRM platform providing tools, APIs, and developer capabilities for managing business relationships, customer records, and sales pipelines."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "Personal access token",
        "JWT or bearer token"
      ],
      "details": "HubSpot supports multiple authentication methods including OAuth 2.0 (for public apps and client credentials), static auth access tokens / private app access tokens, developer API keys, and personal access keys used via the HubSpot CLI.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can access HubSpot's developer platform, APIs, and Postman workspaces on a self-serve basis by creating a HubSpot account.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "HubSpot offers extensive REST APIs covering CRM objects, CRM properties, custom object schemas, webhooks, and local CLI tools.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/baryhuang/mcp-hubspot",
      "maintainer": "baryhuang / eribichesu",
      "details": "HubSpot provides a remote MCP server collection on Postman, but active open-source community/third-party Model Context Protocol servers exist on GitHub (such as baryhuang/mcp-hubspot and eribichesu/hubspot-mcp-server) for direct integration with AI assistants like Claude.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/baryhuang/mcp-hubspot",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/baryhuang/mcp-hubspot",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/baryhuang/mcp-hubspot).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "HubSpot has comprehensive public REST APIs, robust documentation, extensive Postman collections, and clear authentication guidelines, making integration straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.hubspot.com/docs/api-reference/latest/overview",
        "source_title": "2026-09 API reference - HubSpot docs",
        "claim_supported": "HubSpot uses a date-based versioning scheme for REST API endpoints rooted at https://api.hubapi.com/.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:46:42.408689+00:00"
      },
      {
        "source_url": "https://developers.hubspot.com/postman",
        "source_title": "HubSpot Developers | Postman",
        "claim_supported": "HubSpot provides public API workspaces on Postman including CRM, CMS collections, and a remote MCP server connection.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:46:44.589064+00:00"
      },
      {
        "source_url": "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/overview",
        "source_title": "Authentication overview - HubSpot docs",
        "claim_supported": "HubSpot supports OAuth 2.0, static access tokens, developer API keys, client credentials, and personal access keys.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:46:46.874866+00:00"
      },
      {
        "source_url": "https://github.com/baryhuang/mcp-hubspot",
        "source_title": "GitHub - baryhuang/mcp-hubspot",
        "claim_supported": "Third-party Model Context Protocol (MCP) servers exist for integrating HubSpot CRM with AI assistants like Claude.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T11:46:52.161652+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 3,
    "identity": {
      "name": "Pipedrive",
      "category": "CRM and Sales",
      "one_line_description": "Pipedrive is a CRM and sales platform providing a mature RESTful API surface across v1 and v2, webhooks, official SDKs, and developer support for sales workflow automation."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2"
      ],
      "details": "Pipedrive supports authentication using a personal API token (sent via the x-api-token header or query parameter) and OAuth 2.0 authorization code flow for marketplace apps (sent via Authorization: Bearer <access_token>).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Getting API access requires a paid Pipedrive account on any plan, starting from the entry-level Lite tier ($14/month per seat). Additionally, a free developer sandbox account can be requested for testing.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Pipedrive provides a mature REST API (v1 and v2), official SDKs for Node.js and PHP, OpenAPI 3 specifications, and event-based Webhooks v2 covering core CRM entities.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/comma-compliance/pipedrive-mcp",
      "maintainer": "Comma Compliance / Nubiia / Bratland (multiple open-source repositories)",
      "details": "Several community/third-party MCP servers exist for Pipedrive, such as comma-compliance/pipedrive-mcp, nubiia-dev/mcp-pipedrive, and bratland/pipedrive-mcp-server, providing natural language access and tools for Claude and other LLM applications.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/comma-compliance/pipedrive-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/comma-compliance/pipedrive-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/comma-compliance/pipedrive-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Pipedrive offers a comprehensive public REST API, published OpenAPI 3 specs, official Node.js and PHP SDKs, standard token/OAuth authentication, and clear developer documentation, making integration straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.pipedrive.com/docs/api/v1",
        "source_title": "Pipedrive API Reference and Documentation",
        "claim_supported": "Pipedrive provides a RESTful API with OpenAPI 3 specs, Node.js and PHP official client libraries, and sandbox accounts.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:47:09.880159+00:00"
      },
      {
        "source_url": "https://openpublicapis.com/api/pipedrive-api",
        "source_title": "Pipedrive API - Free Public APIs",
        "claim_supported": "API supports x-api-token header and OAuth 2.0 Bearer tokens over HTTPS with CORS.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T11:47:12.282549+00:00"
      },
      {
        "source_url": "https://pipeline.zoominfo.com/sales/pipedrive-api",
        "source_title": "Pipedrive API Review [August 2026]: Features & Limits",
        "claim_supported": "API access included on all plans including Lite ($14/month). Supports v1 and v2, OAuth 2.0, OpenAPI 3 specs, SDKs, and webhooks.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:47:19.490845+00:00"
      },
      {
        "source_url": "https://github.com/comma-compliance/pipedrive-mcp",
        "source_title": "GitHub - comma-compliance/pipedrive-mcp: Pipedrive CRM server for the Model Context Protocol (MCP)",
        "claim_supported": "Third-party MCP server implementation providing tool access to Pipedrive CRM.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T11:47:26.877525+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 4,
    "identity": {
      "name": "Attio",
      "category": "CRM and Sales",
      "one_line_description": "An AI-first CRM platform offering a comprehensive public REST API, flexible custom objects, and workspace access tokens or OAuth 2.0 authentication."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "Basic authentication"
      ],
      "details": "Workspace access tokens (API keys starting with sk_) are used for single-workspace integrations, and OAuth 2.0 (Authorization Code Grant) is used for multi-workspace applications. Basic authentication is also mentioned as supported but not recommended.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can register an app in Attio's developer console or sign up for a free trial workspace/developer account to get started with API keys and documentation without explicit contact sales gating.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Attio provides a public REST API under /v2/, webhooks with HMAC SHA-256 signing, an App SDK, and an OpenAPI specification.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/itsbrex/attio-mcp",
      "maintainer": "itsbrex / kesslerio",
      "details": "Multiple community GitHub repositories provide Model Context Protocol (MCP) server implementations for Attio (e.g., itsbrex/attio-mcp and kesslerio/attio-mcp-server).",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/itsbrex/attio-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/itsbrex/attio-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/itsbrex/attio-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Attio provides comprehensive public API documentation, clear OpenAPI specs, interactive explorers, and supports both standard API keys and OAuth 2.0 with straightforward REST endpoints.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://www.coffee.ai/articles/attio-crm-public-api-docs/",
        "source_title": "Attio API Review: Docs, Limits & How Coffee Compares",
        "claim_supported": "Attio ships comprehensive public API docs covering REST endpoints, workspace access tokens, OAuth 2.0, webhooks, and published rate limits.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:47:51.893653+00:00"
      },
      {
        "source_url": "https://hyperops.fr/en/blog/api-attio-developer-guide",
        "source_title": "Attio API: complete guide for developers",
        "claim_supported": "Attio provides a public REST API under /v2/ supporting standard and custom objects, records, lists, entries, attributes, and OAuth 2.0.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:47:56.033338+00:00"
      },
      {
        "source_url": "https://www.stacksync.com/blog/how-to-get-an-attio-developer-account-and-start-working-with-attios-api",
        "source_title": "Attio API: Keys, Auth, and Developer Setup",
        "claim_supported": "Details how to create workspace access tokens or use OAuth, and details rate limits (100 reads/s, 25 writes/s).",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:48:00.245757+00:00"
      },
      {
        "source_url": "https://www.trycaddi.com/integrations/attio/api",
        "source_title": "Attio API: Access, Auth & a No-Code Alternative | Caddi",
        "claim_supported": "Confirms REST (JSON) API, OAuth 2.0 / workspace API key authentication, and self-serve developer console registration.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:48:09.440828+00:00"
      },
      {
        "source_url": "https://github.com/itsbrex/attio-mcp",
        "source_title": "GitHub - itsbrex/attio-mcp: Attio Model Context Protocol (MCP) server implementation",
        "claim_supported": "Community Model Context Protocol (MCP) server implementation for Attio providing CRM surface coverage.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T11:48:12.399099+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 5,
    "identity": {
      "name": "Twenty",
      "category": "CRM and Sales",
      "one_line_description": "An open-source CRM that provides workspace-specific Core and Metadata APIs in REST and GraphQL formats."
    },
    "authentication": {
      "auth_methods": [
        "JWT or bearer token"
      ],
      "details": "Authentication requires an API key passed via the Authorization header using the format 'Authorization: Bearer YOUR_API_KEY'.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Twenty is an open-source CRM with APIs accessible directly from workspace settings after generating an API key.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "GraphQL"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Provides both Core and Metadata APIs in REST and GraphQL for CRUD records, custom objects, and schema management.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Third-party MCP",
      "repository_url": "https://githubsignals.io/repo/mhenry3164/twenty-crm-mcp-server/",
      "maintainer": "mhenry3164",
      "details": "A community/third-party Model Context Protocol server (mhenry3164/twenty-crm-mcp-server) exists for Twenty CRM integration, enabling natural language interactions.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://githubsignals.io/repo/mhenry3164/twenty-crm-mcp-server/",
      "verified_status": "Third-party MCP",
      "verified_repository_url": "https://githubsignals.io/repo/mhenry3164/twenty-crm-mcp-server/",
      "verification_rationale": "Third-party tool / registry listing on https://githubsignals.io/repo/mhenry3164/twenty-crm-mcp-server/.",
      "date_checked": "2026-11-23",
      "evidence_type": "directory listing"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Twenty offers clear documentation for its schema-per-tenant REST and GraphQL APIs, straightforward bearer token authentication, and readily available endpoints.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.twenty.com/developers/extend/api",
        "source_title": "APIs - Twenty Documentation",
        "claim_supported": "Provides Core API and Metadata API in REST and GraphQL using Bearer token authentication.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T11:48:30.900922+00:00"
      },
      {
        "source_url": "https://apis.io/apis/twenty/twenty-tasks-api",
        "source_title": "Twenty Tasks API \u2014 OpenAPI & Docs | APIs.io",
        "claim_supported": "Provides OpenAPI specifications and REST endpoints for tasks and CRM objects.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T11:48:33.109060+00:00"
      },
      {
        "source_url": "https://githubsignals.io/repo/mhenry3164/twenty-crm-mcp-server/",
        "source_title": "mhenry3164/twenty-crm-mcp-server \u2014 GitHub Signals",
        "claim_supported": "Third-party MCP server exists for Twenty CRM integration enabling natural language interaction.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T11:48:47.196423+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 6,
    "identity": {
      "name": "Podio",
      "category": "CRM and Sales",
      "one_line_description": "Podio is a flexible work management, project management, and collaboration platform providing a complete programmable API interface and Model Context Protocol (MCP) server integration."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "Basic authentication"
      ],
      "details": "Podio uses OAuth 2 for authentication and requires a registered application Client ID and Client Secret. It supports multiple authentication flows including server-side flow, client-side flow, username & password flow, and app authentication flow. Access tokens are typically valid for 8 hours and refresh tokens for 28 days.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can generate an API key immediately and get started straight from their account settings page without prior paid plan restrictions.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Podio provides a complete programmable REST API interface to all functionality, supported by official client libraries/wrappers for PHP, .NET, Ruby, Java, Python, Android, and Objective-C, along with webhook capabilities.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Progress Software / Podio",
      "details": "An official Podio MCP (Model Context Protocol) Server is hosted at https://mcp.podio.com, giving AI assistants direct access via 22 tools covering reading and writing workspaces, apps, and items using natural language.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Podio offers a well-documented public REST API, official SDKs in multiple languages, comprehensive developer guides, OAuth2 authentication, and an official MCP server with straightforward onboarding.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.podio.com",
        "source_title": "Developers - Podio API Documentation",
        "claim_supported": "Podio offers a complete programmable API interface with SDK wrappers and webhooks.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:31:21.800912+00:00"
      },
      {
        "source_url": "https://developers.podio.com/doc",
        "source_title": "Podio API Documentation - Podio API Documentation",
        "claim_supported": "Detailed functional areas of the Podio API including applications, items, hooks, OAuth, and tasks.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:31:23.182356+00:00"
      },
      {
        "source_url": "https://apis.io/providers/podio",
        "source_title": "Podio API \u2014 Docs, Endpoints & OpenAPI | APIs.io",
        "claim_supported": "Overview of Podio platform categorization under CRM and work management, currently part of Progress Software.",
        "source_type": "API Registry",
        "retrieved_timestamp": "2026-11-23T12:31:25.471507+00:00"
      },
      {
        "source_url": "http://podio.github.io/podio-dotnet/authentication/",
        "source_title": "Podio-dotnet \u2022 C# client for Podio",
        "claim_supported": "Authentication and client implementation patterns using client ID, secret, and app authentication flows.",
        "source_type": "Official SDK Docs",
        "retrieved_timestamp": "2026-11-23T12:31:32.556692+00:00"
      },
      {
        "source_url": "https://developers.podio.com/authentication",
        "source_title": "Authentication - Podio API Documentation",
        "claim_supported": "OAuth 2 token endpoints, expiry periods (8-hour access tokens, 28-day refresh tokens), and authorization scopes.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:31:37.424851+00:00"
      },
      {
        "source_url": "https://www.progress.com/podio/documentation/using-podio/ai-and-mcp/podio-mcp-server-integration-guide",
        "source_title": "Podio MCP Server Integration Guide",
        "claim_supported": "Official Podio Model Context Protocol (MCP) Server at https://mcp.podio.com providing 22 AI integration tools.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:32:05.663797+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 7,
    "identity": {
      "name": "Zoho CRM",
      "category": "CRM and Sales",
      "one_line_description": "A mature CRM suite offering an extensive REST API, server-side SDKs, COQL querying, and community MCP integrations."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "Other"
      ],
      "details": "Zoho CRM uses OAuth 2.0 exclusively for API authentication (authorization code grant flow, 1-hour access tokens, and long-lived refresh tokens), as well as legacy API tokens.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "API access is included on all plans, including a permanent free plan (up to 3 users and 5,000 API credits per day) with no enterprise gate or approval required.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "GraphQL",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides robust RESTful endpoints across version 8, GraphQL APIs, Notification APIs for webhooks, custom functions, widgets, and official SDKs for Java, Python, PHP, Node.js, C#, Ruby, and JavaScript.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/LokiMCPUniverse/zoho-crm-mcp-server",
      "maintainer": "LokiMCPUniverse / JunnAI (Community)",
      "details": "Multiple community-built MCP servers exist on GitHub (e.g., LokiMCPUniverse/zoho-crm-mcp-server and JunnServices/Zoho-CRM-MCP) wrapping Zoho CRM's REST APIs into structured LLM tools.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/LokiMCPUniverse/zoho-crm-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/LokiMCPUniverse/zoho-crm-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/LokiMCPUniverse/zoho-crm-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Zoho CRM provides a free tier with immediate self-serve developer access, extensive public documentation, official Postman collections, SDKs, and ready-to-use community MCP servers.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://www.zoho.com/crm/developer/docs/",
        "source_title": "Developer Resources | Zoho CRM",
        "claim_supported": "Provides core REST APIs, GraphQL, bulk APIs, notification APIs, COQL queries, and SDKs for Java, Python, PHP, Node.js, C#, Ruby, JavaScript, Android, and iOS.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:33:08.260390+00:00"
      },
      {
        "source_url": "https://pipeline.zoominfo.com/sales/zoho-crm-api",
        "source_title": "Zoho CRM API: Features, Limits & ZoomInfo [July 2026]",
        "claim_supported": "Confirms REST surface, OAuth 2.0 authentication, credit-based rate limits starting from free tier (5,000 credits/day), and no separate API pricing tier.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:33:11.972466+00:00"
      },
      {
        "source_url": "https://www.zoho.com/crm/developer/docs/api/v8/api-collection.html",
        "source_title": "API Collection | Zoho CRM API | V8",
        "claim_supported": "Documents the official Postman collection for the Zoho CRM V8 REST API.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:33:13.889092+00:00"
      },
      {
        "source_url": "https://www.zoho.com/developer/help/api/using-authentication-token.html",
        "source_title": "Zoho Developer API | Developer Help - Zoho CRM",
        "claim_supported": "Describes legacy authtoken generation and header usage.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:33:15.731309+00:00"
      },
      {
        "source_url": "https://github.com/LokiMCPUniverse/zoho-crm-mcp-server",
        "source_title": "GitHub - LokiMCPUniverse/zoho-crm-mcp-server",
        "claim_supported": "Provides a Model Context Protocol server exposing Zoho CRM v6 REST API as structured tools.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:33:21.306086+00:00"
      },
      {
        "source_url": "https://github.com/JunnServices/Zoho-CRM-MCP",
        "source_title": "GitHub - JunnServices/Zoho-CRM-MCP",
        "claim_supported": "Provides an open-source MCP server for Zoho CRM integration built by JunnAI.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:33:26.556180+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 8,
    "identity": {
      "name": "Close",
      "category": "CRM and Sales",
      "one_line_description": "Close is a CRM and sales developer platform offering REST APIs, webhooks, official API wrappers, and a remote MCP server for AI agents."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2"
      ],
      "details": "API keys use HTTP Basic Auth with the key as the username and an empty password. OAuth 2.0 uses client ID/secret and authorization codes. MCP server also supports MCP OAuth or API-key headers.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Whether a Close customer automating their sales process or a partner building an integration, the Close Developer Platform is designed for Close customers.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides a full REST API, webhooks with a 30-day event log, OpenAPI spec (experimental), and official wrappers for Python and Node.js plus various community client libraries.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Close",
      "details": "Close exposes a remote Model Context Protocol (MCP) server supporting streaming HTTP, MCP OAuth, or API-key headers to give AI tools direct access to Close data.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Close provides comprehensive developer documentation, standard REST API conventions, an OpenAPI spec, official SDKs, API keys, OAuth 2.0, and an official remote MCP server.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developer.close.com",
        "source_title": "Close Developer Platform | Close | Developer API Documentation",
        "claim_supported": "Close provides a REST API, API keys, OAuth 2.0, Webhooks, an MCP server, and official/community API clients.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:33:46.031342+00:00"
      },
      {
        "source_url": "https://developer.close.com/api/overview",
        "source_title": "API Overview | Close | Developer API Documentation",
        "claim_supported": "Base URL is https://api.close.com/api/v1, uses REST conventions, supports pagination, rate limiting, webhooks, and publishes an experimental OpenAPI spec.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:33:48.384091+00:00"
      },
      {
        "source_url": "https://developer.close.com/api/overview/api-clients",
        "source_title": "API Clients | Close | Developer API Documentation",
        "claim_supported": "Officially maintained Python and Node.js wrappers exist along with community wrappers for Ruby, PHP, C#, Elixir, and Go.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:33:50.467405+00:00"
      },
      {
        "source_url": "https://integrations.sh/close.com/",
        "source_title": "close.com \u2014 integrations",
        "claim_supported": "Close exposes a REST API and a remote MCP server with Basic auth/API keys or OAuth 2.0 support.",
        "source_type": "Integration Discovery",
        "retrieved_timestamp": "2026-11-23T12:33:53.640808+00:00"
      },
      {
        "source_url": "https://developer.close.com/api/overview/oauth-authentication",
        "source_title": "Authentication with OAuth | Close | Developer API Documentation",
        "claim_supported": "Detailed OAuth 2.0 flow documentation including authorization endpoint, token exchange, refresh tokens, and revocation.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:33:56.973119+00:00"
      },
      {
        "source_url": "https://developer.close.com/api/overview/api-key-authentication",
        "source_title": "Authentication with API keys | Close | Developer API Documentation",
        "claim_supported": "API keys use HTTP Basic client-side authentication with the key as username and empty password.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:33:59.591933+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 9,
    "identity": {
      "name": "Copper",
      "category": "CRM and Sales",
      "one_line_description": "Copper is a CRM and sales tool built for Google Workspace, offering contact management, pipelines, and a developer API."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2"
      ],
      "details": "The Copper Developer API supports token-based authentication via API keys sent in custom headers (or Authorization Bearer tokens for OAuth2) along with user email and application headers.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "The API is included with subscription plans (such as Professional and Business), but each plan has specific contact storage caps and requires an active paid subscription.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Copper provides a developer API covering leads, people, companies, opportunities, projects, tasks, activities, custom fields, tags, webhooks, and search endpoints.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": null,
      "details": "No official or third-party Model Context Protocol (MCP) server was found for Copper in the provided documentation.",
      "confidence": "High",
      "original_extracted_status": "No verified MCP found",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "No verified official, third-party, or community MCP repository discovered.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access",
        "Rate limits"
      ],
      "justification": "Copper provides a clear public REST API, documentation, and OAuth/API key authentication, but requires a paid plan and enforces strict rate limits (180 requests/minute, 3 requests/second on bulk endpoints).",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developer.copper.com/introduction/oauth/flow.html",
        "source_title": "Documentation - Copper Developer API",
        "claim_supported": "OAuth 2.0 authorization code grant flow details for Copper Developer API.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:34:22.217726+00:00"
      },
      {
        "source_url": "https://developer.copper.co/api-reference/getting-started",
        "source_title": "Getting started - Copper Developer Portal",
        "claim_supported": "API base URL, OpenAPI specs, response codes, and date/time formatting.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:34:25.237815+00:00"
      },
      {
        "source_url": "https://developer.copper.com/introduction/authentication.html",
        "source_title": "Overview - Copper Developer API",
        "claim_supported": "API Key authentication method and generation via system settings.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:34:28.154824+00:00"
      },
      {
        "source_url": "https://frontal.so/gtm-apis/crm-apis/copper-api-review",
        "source_title": "Copper API review: contact caps and 180 a minute",
        "claim_supported": "Pricing plans, rate limits of 180/min, contact limits, and API surface description.",
        "source_type": "Pricing Page",
        "retrieved_timestamp": "2026-11-23T12:34:32.667539+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 10,
    "identity": {
      "name": "DealCloud",
      "category": "CRM and Sales",
      "one_line_description": "DealCloud is a CRM and deal management platform providing a robust public API, SDKs, and data integration services for financial services and private equity."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "Authentication uses client credentials (Client ID and Secret) to fetch an OAuth token via a token URL (e.g., {baseUrl}/api/rest/v1/oauth/token).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Access to API credentials (Client ID and Secret) and environments requires provisioned system admin roles or active subscription accounts within DealCloud.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Provides an extensive REST API surface along with official Python and C# SDKs, covering core schemas, entry types, fields, users, data cells, lists, reports, files, and backups.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": null,
      "details": "Documentation lists a dedicated MCP section under API reference indicating an official MCP server capability (e.g., 'DealCloud MCP Server').",
      "confidence": "Medium",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Comprehensive public API documentation, multiple official SDKs (Python, C#, Elixir), and standard OAuth token/API key authentication make building integrations straightforward once credentials are acquired.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://api.docs.dealcloud.com/docs",
        "source_title": "Docs - DealCloud API Docs",
        "claim_supported": "Broad API surface covering entry types, fields, data cells, views, reports, files, backups, and publications.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:34:51.801965+00:00"
      },
      {
        "source_url": "https://dealcloud.hexdocs.pm/api-reference.html",
        "source_title": "API Reference \u2014 dealcloud v0.4.0",
        "claim_supported": "Existence of Elixir SDK and modular APIs for data manipulation, management, and marketing.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:34:54.719948+00:00"
      },
      {
        "source_url": "https://developers.anduintransact.com/docs/step-1-retrieve-credentials-of-3rd-party-apps-7",
        "source_title": "Getting DealCloud API key and secret",
        "claim_supported": "Authentication requires Client ID and Secret, token URL convention, and admin role provisioning.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:35:03.875893+00:00"
      },
      {
        "source_url": "https://api.docs.dealcloud.com/mcp",
        "source_title": "DealCloud MCP Server - DealCloud API Docs",
        "claim_supported": "Official MCP server support documented under the DealCloud API documentation.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:35:06.888063+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 11,
    "identity": {
      "name": "Zendesk",
      "category": "Support and Helpdesk",
      "one_line_description": "Zendesk provides customer service software with a public REST API covering ticketing, help center, voice, and live chat capabilities."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "Basic authentication",
        "JWT or bearer token"
      ],
      "details": "Zendesk supports OAuth access tokens, API tokens (via basic authentication), and global OAuth tokens for public apps. Sunshine Conversations API additionally supports basic authentication and JWTs.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Zendesk is a commercial SaaS product requiring a paid subscription or trial account to access live data and generate API credentials.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Extensive REST API covering Ticketing, Help Center, Voice, Talk, Chat, Custom Objects, and Webhooks, alongside official mobile and Unity SDKs.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/mattcoatsworth/zendesk-mcp-server",
      "maintainer": "mattcoatsworth and reminia",
      "details": "Multiple community and third-party Model Context Protocol (MCP) servers exist on GitHub for integrating Zendesk Support, Help Center, and ticketing capabilities.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/mattcoatsworth/zendesk-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/mattcoatsworth/zendesk-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/mattcoatsworth/zendesk-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Zendesk offers comprehensive public REST API documentation, Postman collections, and well-defined OAuth or API token authentication mechanisms, making integrations straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developer.zendesk.com/api-reference/",
        "source_title": "API Reference Home | Zendesk Developer Docs",
        "claim_supported": "Zendesk publishes APIs for ticketing, help center, live chat, voice, sales CRM, and custom data.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:11:48.616715+00:00"
      },
      {
        "source_url": "https://developer.zendesk.com/api-reference/introduction/security-and-auth/",
        "source_title": "Security and authentication | Zendesk Developer Docs",
        "claim_supported": "Zendesk supports OAuth access tokens, global OAuth tokens, and deprecated API tokens using basic auth.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:11:57.760592+00:00"
      },
      {
        "source_url": "https://apitracker.io/a/zendesk",
        "source_title": "Zendesk API - Documentation & Integration",
        "claim_supported": "Zendesk provides REST APIs, webhooks, and supports API keys, OAuth 2.0, and basic authentication.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T12:11:54.047159+00:00"
      },
      {
        "source_url": "https://github.com/mattcoatsworth/zendesk-mcp-server",
        "source_title": "GitHub - mattcoatsworth/zendesk-mcp-server \u00b7 GitHub",
        "claim_supported": "A third-party Model Context Protocol (MCP) server exists for interacting with Zendesk Support, Talk, Chat, and Guide.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:12:03.663217+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 12,
    "identity": {
      "name": "Intercom",
      "category": "Support and Helpdesk",
      "one_line_description": "Customer messaging platform and helpdesk connecting sales, marketing, and support."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "Supports Bearer tokens via private app access tokens or OAuth tokens provided in the Authorization header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developer workspaces are free and intended for development purposes only, allowing developers to create apps and get access tokens.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Exposes regional REST APIs at api.intercom.io, api.eu.intercom.io, and api.au.intercom.io, with official SDK helpers and webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Intercom",
      "details": "Intercom provides an official MCP implementation at mcp.intercom.com/mcp using Streamable HTTP with OAuth or bearer API tokens.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Intercom features a comprehensive REST API, official SDKs, free developer workspaces, and an official MCP implementation, making integration straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.intercom.com/docs/references/introduction",
        "source_title": "Introduction | Intercom and Fin Developer Platform",
        "claim_supported": "Intercom provides a versioned REST API reference with OpenAPI specifications.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:12:18.579148+00:00"
      },
      {
        "source_url": "https://apitracker.io/a/intercom",
        "source_title": "Intercom API - Docs, SDKs & Integration",
        "claim_supported": "Official MCP implementation available via Streamable HTTP at mcp.intercom.com/mcp.",
        "source_type": "API Catalog",
        "retrieved_timestamp": "2026-11-23T12:12:19.891582+00:00"
      },
      {
        "source_url": "https://developers.intercom.com/docs/references/rest-api/api.intercom.io",
        "source_title": "Intercom API | Intercom and Fin Developer Platform",
        "claim_supported": "Production API server endpoints exist for US, EU, and Australian regions.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:12:21.047325+00:00"
      },
      {
        "source_url": "https://integrations.sh/intercom.com/",
        "source_title": "intercom.com \u2014 integrations",
        "claim_supported": "Intercom exposes regional REST API and authenticated remote MCP servers authenticated by bearer tokens or OAuth.",
        "source_type": "Integrations Directory",
        "retrieved_timestamp": "2026-11-23T12:12:24.949568+00:00"
      },
      {
        "source_url": "https://developers.intercom.com/docs/build-an-integration/learn-more/authentication",
        "source_title": "Authentication | Intercom and Fin Developer Platform",
        "claim_supported": "Access tokens and OAuth 2.0 supported, passed via Authorization: Bearer header.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:12:26.127594+00:00"
      },
      {
        "source_url": "https://www.intercom.com/help/en/articles/9071694-intercom-developer-faqs",
        "source_title": "Intercom developer FAQs | Intercom Help",
        "claim_supported": "Developer workspaces are free and intended for development purposes only.",
        "source_type": "Official Help",
        "retrieved_timestamp": "2026-11-23T12:12:30.095826+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 13,
    "identity": {
      "name": "Freshdesk",
      "category": "Support and Helpdesk",
      "one_line_description": "Freshdesk is a cloud-based customer support and helpdesk software offering ticketing systems, contact management, knowledge bases, and a comprehensive developer API."
    },
    "authentication": {
      "auth_methods": [
        "API key"
      ],
      "details": "Authentication requires a Freshdesk API key which can be found in user Profile Settings.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Users can sign up for a free account/trial on the developer portal to access API credentials and documentation.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Freshdesk provides a comprehensive public REST API covering tickets, contacts, agents, companies, roles, groups, and admin settings.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/BrightSec/freshdesk_mcp",
      "maintainer": "Bright Security",
      "details": "Multiple third-party Model Context Protocol (MCP) servers exist for Freshdesk, including implementations by Bright Security, ArcaneSK, and Gotelz.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/BrightSec/freshdesk_mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/BrightSec/freshdesk_mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/BrightSec/freshdesk_mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Freshdesk features extensive REST API documentation, clear endpoint indexes, and multiple community-backed MCP servers that make building integrations straightforward using API key authentication.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.freshdesk.com/api/",
        "source_title": "Freshdesk",
        "claim_supported": "Freshdesk provides a comprehensive public REST API for tickets, contacts, agents, groups, and administration.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:35:31.654460+00:00"
      },
      {
        "source_url": "https://developers.freshdesk.com",
        "source_title": "Freshdesk Developers",
        "claim_supported": "Developers can sign up for a free Freshdesk account to access API documentation and tools.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:35:34.067798+00:00"
      },
      {
        "source_url": "https://github.com/BrightSec/freshdesk_mcp",
        "source_title": "GitHub - BrightSec/freshdesk_mcp",
        "claim_supported": "Authentication utilizes a Freshdesk API key from Profile Settings and third-party MCP servers are available.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:35:39.390334+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 14,
    "identity": {
      "name": "Front",
      "category": "Support and Helpdesk",
      "one_line_description": "Front is a customer operations platform unifying shared inboxes, chat, SMS, social, and CRM workflows."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "The Core API uses Bearer tokens to authenticate users via API tokens generated in settings or through an OAuth implementation. Official MCP uses OAuth 2.1 with PKCE compatibility and confidential client registration.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "You can create a developer account by signing up to get access to a free developer environment that provides everything needed to begin building with APIs.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Front exposes a Core API, Channels API, a Plugin SDK, a Chat Widget, Connectors, and an official MCP Server implementation.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Front",
      "details": "Front provides an official MCP implementation (Front MCP) supporting Streamable HTTP and OAuth 2.1 with PKCE, allowing AI assistants like Claude and ChatGPT to read and reply to conversations.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Front offers comprehensive developer documentation, a free developer sandbox account tier, multiple standard authentication methods including API tokens and OAuth, and well-documented REST APIs and official MCP servers.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apitracker.io/a/front-app",
        "source_title": "Front API - Docs, SDKs & Integration",
        "claim_supported": "Official MCP details including Streamable HTTP transport and OAuth 2.1 with PKCE requirements.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:35:56.897674+00:00"
      },
      {
        "source_url": "https://dev.frontapp.com/reference/introduction",
        "source_title": "Introduction",
        "claim_supported": "Core API overview, base URL (https://api2.frontapp.com), and authentication support.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:35:58.263110+00:00"
      },
      {
        "source_url": "https://apis.io/providers/front",
        "source_title": "Front API \u2014 Docs, Pricing & OpenAPI | APIs.io",
        "claim_supported": "Front exposes a Core API, Channels API, Plugin SDK, Chat Widget, and Connectors.",
        "source_type": "API Catalog",
        "retrieved_timestamp": "2026-11-23T12:36:00.473271+00:00"
      },
      {
        "source_url": "https://dev.frontapp.com/docs/authentication",
        "source_title": "Authentication",
        "claim_supported": "Bearer tokens can be obtained via API tokens or OAuth implementations, with scope and permission namespaces.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:36:01.662469+00:00"
      },
      {
        "source_url": "https://dev.frontapp.com/docs/welcome",
        "source_title": "Welcome",
        "claim_supported": "Developer accounts provide access to a free developer environment and platform feature descriptions like MCP Server, Plugin SDK, and Webhooks.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:36:02.793449+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 15,
    "identity": {
      "name": "Pylon",
      "category": "Support and Helpdesk",
      "one_line_description": "Pylon is a B2B customer support and customer operations platform offering a web API to programmatically manage issues, accounts, contacts, users, teams, tags, custom fields, and tasks/projects."
    },
    "authentication": {
      "auth_methods": [
        "JWT or bearer token"
      ],
      "details": "The Pylon API uses Bearer authentication, passing an API token in the header as 'Authorization: Bearer <token>'. Only Admins can create and manage API tokens in Pylon settings.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Using the API itself does not incur additional charges, but API access is managed via Team Settings in Pylon, and calls with an API key need a paid plan or active account subscription.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "Pylon provides a JSON-based web REST API supporting operations for accounts, contacts, issues, custom fields, tasks, projects, and webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/JustinBeckwith/pylon-mcp",
      "maintainer": "JustinBeckwith",
      "details": "A community/third-party MCP server exists on GitHub (JustinBeckwith/pylon-mcp) providing tools for Pylon customer support platform integration with Claude and other MCP hosts.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/JustinBeckwith/pylon-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/JustinBeckwith/pylon-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/JustinBeckwith/pylon-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API is fully documented with clear OpenAPI definitions, standard Bearer token authentication, and readily available community MCP wrappers and libraries.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apis.io/apis/pylon/pylon-custom-fields-api",
        "source_title": "Pylon Custom Fields API \u2014 OpenAPI & Docs | APIs.io",
        "claim_supported": "Pylon Custom Fields API OpenAPI specification and endpoint documentation details.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:36:24.006192+00:00"
      },
      {
        "source_url": "https://getpylon.com/developers/",
        "source_title": "Pylon Developer Hub",
        "claim_supported": "Pylon provides a JSON-based web API and webhooks with no additional charge for API usage itself.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:36:29.217892+00:00"
      },
      {
        "source_url": "https://docs.usepylon.com/pylon-docs/developer/api/authentication",
        "source_title": "Authentication | Pylon",
        "claim_supported": "Pylon API uses Bearer authentication with tokens generated by Admins.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:36:32.456107+00:00"
      },
      {
        "source_url": "https://github.com/JustinBeckwith/pylon-mcp",
        "source_title": "GitHub - JustinBeckwith/pylon-mcp: MCP server for Pylon customer support platform",
        "claim_supported": "Community MCP server implementation for Pylon by JustinBeckwith.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:36:38.937395+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 16,
    "identity": {
      "name": "LiveAgent",
      "category": "Support and Helpdesk",
      "one_line_description": "LiveAgent is a customer support and helpdesk application that provides ticketing, live chat, call center capabilities, and a REST API."
    },
    "authentication": {
      "auth_methods": [
        "API key"
      ],
      "details": "API keys are passed via custom header ('apikey') or query parameter for REST requests.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Developers can register a free trial account to test API commands and generate API keys.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "LiveAgent offers a public REST API (API v3 and API v1) with a Swagger/OpenAPI descriptor for generating SDK libraries.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Third-party MCP",
      "repository_url": "https://github.com/vinkius-labs/mcp-database/blob/main/mcps/liveagent.md",
      "maintainer": "Vinkius Labs / Vinkius Cloud",
      "details": "A third-party hosted Model Context Protocol server (LiveAgent MCP Server) is available to manage tickets, conversations, and calls.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/vinkius-labs/mcp-database/blob/main/mcps/liveagent.md",
      "verified_status": "Third-party MCP",
      "verified_repository_url": "https://github.com/vinkius-labs/mcp-database/blob/main/mcps/liveagent.md",
      "verification_rationale": "Repository URL points to a hosted directory/connector listing markdown in vinkius-labs/mcp-database rather than an independent standalone open-source code repository. Reclassified from Community MCP to Third-party MCP.",
      "evidence_type": "directory listing",
      "date_checked": "2026-11-23"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [],
      "justification": "LiveAgent provides a well-documented public REST API with swagger descriptors and clear authentication mechanisms, making integration achievable with standard development effort.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://support.liveagent.com/911737-API-v3",
        "source_title": "API v3",
        "claim_supported": "API v3 documentation location, testing capabilities, and swagger descriptor availability.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:37:09.929532+00:00"
      },
      {
        "source_url": "https://support.liveagent.com/802463-REST-API",
        "source_title": "REST API",
        "claim_supported": "API key usage and admin configuration for custom integrations.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:37:13.536711+00:00"
      },
      {
        "source_url": "https://support.liveagent.com/741982-API-key",
        "source_title": "API key",
        "claim_supported": "API key required in request header ('apikey').",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:37:15.594027+00:00"
      },
      {
        "source_url": "https://github.com/vinkius-labs/mcp-database/blob/main/mcps/liveagent.md",
        "source_title": "mcp-database/mcps/liveagent.md at main \u00b7 vinkius-labs/mcp-database \u00b7 GitHub",
        "claim_supported": "Availability of a third-party LiveAgent MCP server supporting tickets, conversations, and calls.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:37:28.509343+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 17,
    "identity": {
      "name": "Plain",
      "category": "Support and Helpdesk",
      "one_line_description": "Plain is an API-first customer support platform and infrastructure for B2B and technical SaaS companies, built entirely on its own public GraphQL API."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "API keys are created via machine users and passed in requests using a Bearer token format (Authorization: Bearer plainApiKey_xxx). OAuth apps are supported for calling the API as a user in a workspace.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Plain's Foundation pricing tier starts at $45/user/mo (billed annually) with verification showing standard access tied to paid plans.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "GraphQL",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Plain offers a Relay-style GraphQL API with full UI-API parity, typed TypeScript and Go SDKs, a CLI, and HMAC-signed webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Plain",
      "details": "Plain provides a hosted Model Context Protocol (MCP) server natively integrated into its platform offerings.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Plain provides a fully documented Relay-style GraphQL API with native schema introspection, typed SDKs, native MCP server support, and clear authentication guidelines making integrations straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apis.io/providers/plain",
        "source_title": "Plain API \u2014 Docs, Pricing & OpenAPI | APIs.io",
        "claim_supported": "Plain is a customer support platform built entirely on a public GraphQL API, supporting bearer API keys, TypeScript and Go SDKs, webhooks, and a hosted MCP server.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:37:49.683272+00:00"
      },
      {
        "source_url": "https://www.plain.com/blog/api-first-support-platforms",
        "source_title": "Plain \u2014 Best API-First Support Platforms for B2B Teams (2026)",
        "claim_supported": "Plain offers a GraphQL API, no restrictive rate limits, native MCP server support, customer cards, and pricing starting at $45/user/mo.",
        "source_type": "Pricing Page",
        "retrieved_timestamp": "2026-11-23T12:37:52.069771+00:00"
      },
      {
        "source_url": "https://www.plain.com/docs/graphql/authentication",
        "source_title": "Authentication - Plain Docs",
        "claim_supported": "API keys are created via machine users and used via Bearer tokens in headers.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:37:53.186171+00:00"
      },
      {
        "source_url": "https://www.plain.com/docs/graphql/introduction",
        "source_title": "Introduction - Plain Docs",
        "claim_supported": "Details the GraphQL API endpoint, POST requirements, and schema introspection capabilities.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:37:54.350635+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 18,
    "identity": {
      "name": "Help Scout",
      "category": "Support and Helpdesk",
      "one_line_description": "Help Scout provides an Inbox API and Docs API for reading and writing data to Help Scout inboxes and knowledge base documentation sites."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key"
      ],
      "details": "Help Scout Mailbox API v2 uses OAuth2 (Client Credentials or Authorization Code flows) returning a Bearer token. The separate Docs API v1 uses API keys passed via HTTP Basic Authentication where the API key is the username and a dummy password like 'X' is used.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "API access is available on paid plans (Standard, Plus, and Pro) with different rate limits per plan. The Free plan does not include access to the API or integrations.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides Mailbox API v2, Docs API v1, Webhooks, and open-source community/official tools including PHP, .NET, and Ruby clients.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/gravitykit/help-scout-mcp",
      "maintainer": "GravityKit (fork of Drew Burchfield)",
      "details": "Community-maintained MCP servers exist (such as GravityKit/help-scout-mcp and drewburchfield/help-scout-mcp-server) allowing AI assistants to search conversations, threads, inboxes, and Docs.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/gravitykit/help-scout-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/gravitykit/help-scout-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/gravitykit/help-scout-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "The API is fully documented and provides rich REST endpoints, SDKs, and community MCP integrations. However, API access requires a paid Help Scout plan (Standard, Plus, or Pro), as the Free plan lacks API access.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developer.helpscout.com/docs-api/",
        "source_title": "Docs API Overview",
        "claim_supported": "Docs API v1 uses API keys passed via HTTP Basic Authentication with a dummy password.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:38:13.248867+00:00"
      },
      {
        "source_url": "https://docs.helpscout.com/article/1140-mailbox-api",
        "source_title": "Help Scout's Inbox API, Docs API, Beacon JavaScript, Apps, and Open Source Tools - Help Scout Support",
        "claim_supported": "Each paid plan has API access levels (Standard, Plus, Pro), while the Free plan does not include access to the API.",
        "source_type": "Official Support Docs",
        "retrieved_timestamp": "2026-11-23T12:38:17.780767+00:00"
      },
      {
        "source_url": "https://developer.helpscout.com/mailbox-api/overview/authentication/",
        "source_title": "Authentication",
        "claim_supported": "Mailbox API uses OAuth 2.0 authorization, implementing Authorization Code and Client Credential flows.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:38:20.189422+00:00"
      },
      {
        "source_url": "https://www.getmacha.com/blog/how-to-use-the-help-scout-api",
        "source_title": "How to Use the Help Scout API (2026): Auth, Endpoints & Examples",
        "claim_supported": "Help Scout API authenticates with OAuth2, has no API access on the Free plan, and uses REST/JSON over HTTPS.",
        "source_type": "Blog / API Overview",
        "retrieved_timestamp": "2026-11-23T12:38:23.133322+00:00"
      },
      {
        "source_url": "https://github.com/GravityKit/help-scout-mcp",
        "source_title": "GitHub - GravityKit/help-scout-mcp: MCP server for Help Scout",
        "claim_supported": "Community MCP server implementation for connecting AI assistants to Help Scout data.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:38:25.660700+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 19,
    "identity": {
      "name": "Gorgias",
      "category": "Support and Helpdesk",
      "one_line_description": "Gorgias is a customer support and helpdesk platform purpose-built for ecommerce brands, featuring a REST API for tickets, customers, messages, and integrations."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "Basic authentication",
        "JWT or bearer token"
      ],
      "details": "The Gorgias REST API uses HTTP Basic Authentication with a base API URL, email address, and an API key, or OAuth2 for public apps.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "API credentials and access are available on all Helpdesk plans, requiring an active Gorgias helpdesk subscription.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "Gorgias provides an open REST API (version 2) with full CRUD access to tickets, customers, macros, integrations, and widgets, along with webhook support.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/mattcoatsworth/Gorgias-MCP-Server",
      "maintainer": "mattcoatsworth / Pipedream",
      "details": "Community and third-party Model Context Protocol (MCP) servers exist on GitHub (such as mattcoatsworth/Gorgias-MCP-Server and Pipedream integration) to interact with the Gorgias helpdesk API.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/mattcoatsworth/Gorgias-MCP-Server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/mattcoatsworth/Gorgias-MCP-Server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/mattcoatsworth/Gorgias-MCP-Server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API is well-documented with broad endpoint coverage, an OpenAPI spec, Postman collection support, and standard authentication (API keys/OAuth).",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apis.io/providers/gorgias",
        "source_title": "Gorgias API \u2014 Docs, Endpoints & OpenAPI | APIs.io",
        "claim_supported": "Gorgias REST API provides full CRUD access to tickets, customers, macros, integrations, and widgets using HTTP Basic authentication or OAuth2 for public apps.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:38:46.084652+00:00"
      },
      {
        "source_url": "https://www.ringly.io/blog/gorgias-developer",
        "source_title": "Gorgias for developers: what you can build on the API (2026)",
        "claim_supported": "Gorgias exposes an open REST API (V2) letting you read and write tickets, customers, messages, events, tags, integrations, and sidebar widgets.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:38:47.643629+00:00"
      },
      {
        "source_url": "https://docs.gorgias.com/en-US/rest-api-208286",
        "source_title": "Access your Gorgias REST API credentials",
        "claim_supported": "To authenticate API requests, Gorgias uses HTTP Basic Authentication with base API URL, email address, and API key. Available on all Helpdesk plans.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:38:50.320567+00:00"
      },
      {
        "source_url": "https://github.com/mattcoatsworth/Gorgias-MCP-Server",
        "source_title": "GitHub - mattcoatsworth/Gorgias-MCP-Server \u00b7 GitHub",
        "claim_supported": "MCP server implementation for interacting with the Gorgias helpdesk API supporting API key and OAuth token auth.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:38:55.885160+00:00"
      },
      {
        "source_url": "https://github.com/ever-works/awesome-mcp-servers/blob/master/details/gorgias-mcp-server.md",
        "source_title": "awesome-mcp-servers/details/gorgias-mcp-server.md at master \u00b7 ever-works/awesome-mcp-servers \u00b7 GitHub",
        "claim_supported": "Gorgias MCP Server provides a Model Context Protocol integration with the Gorgias ecommerce helpdesk platform via Pipedream.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:38:59.387084+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 20,
    "identity": {
      "name": "Gladly",
      "category": "Support and Helpdesk",
      "one_line_description": "A customer service platform designed around conversations rather than tickets, providing a REST API and Lookup API for enterprise system integration."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "Basic authentication"
      ],
      "details": "The Gladly REST API is authenticated using HTTP Basic auth where the username is the email of a Gladly user with the 'API User' permission and the password is an API token created by that user.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Gladly operates on a per-team-member seat and per-AI-resolution pricing model, requiring an active Gladly organization and account configuration to access permissions and generate API tokens.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "Provides a comprehensive REST API grouped across 21 resources, a Lookup API that Gladly calls against customer-hosted web services, and webhooks for outbound events.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": null,
      "details": "No official or third-party Model Context Protocol (MCP) server was found documented for Gladly in the provided sources.",
      "confidence": "High",
      "original_extracted_status": "No verified MCP found",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "No verified official, third-party, or community MCP repository discovered.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access",
        "Authentication complexity"
      ],
      "justification": "Gladly provides detailed REST API documentation and endpoints, but requires a paid organization account, specific user permission configuration ('API User'), and basic auth token generation.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://www.getmacha.com/blog/gladly-api-explained",
        "source_title": "Gladly API Explained: Auth, Rate Limits, Webhooks (2026)",
        "claim_supported": "Gladly uses HTTP Basic auth with agent email and API token, has a rate limit of 10 req/sec, and provides REST endpoints for conversations, items, notes, topics, and customers.",
        "source_type": "Official Docs / Blog Review",
        "retrieved_timestamp": "2026-11-23T12:39:14.470301+00:00"
      },
      {
        "source_url": "https://developer.gladly.com/rest/",
        "source_title": "Gladly API",
        "claim_supported": "Gladly provides REST API endpoints, Lookup API capabilities, and sandbox environments at https://{organization}.gladly.qa.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:39:18.960333+00:00"
      },
      {
        "source_url": "https://apis.apievangelist.com/store/gladly-organization-api",
        "source_title": "Gladly Organization Api - API Evangelist APIs",
        "claim_supported": "Gladly publishes multiple APIs including Organization, Lookup API, Chat SDK, and Webhooks via OpenAPI specifications.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T12:39:21.028247+00:00"
      },
      {
        "source_url": "https://www.lonti.com/integrations/gladly",
        "source_title": "Gladly Integration Guide: APIs, Webhooks, Data Sync and Automation | Martini",
        "claim_supported": "Gladly supports REST APIs and selected webhook notifications; bulk, GraphQL, SOAP, and general file APIs were not confirmed.",
        "source_type": "Integration Guide",
        "retrieved_timestamp": "2026-11-23T12:39:23.428040+00:00"
      }
    ],
    "research_status": "completed",
    "error_message": null
  },
  {
    "id": 21,
    "identity": {
      "name": "Slack",
      "category": "Communications and Messaging",
      "one_line_description": "Slack is a digital workspace platform where people, information, and tools come together through a robust suite of APIs and messaging capabilities."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "JWT or bearer token"
      ],
      "details": "Slack apps use v2 OAuth 2.0 authorization code flows, bearer tokens passed in the Authorization header (e.g., xoxp- or xoxb- tokens), and app configuration tokens for management/manifest APIs.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can sign up and create applications for free via api.slack.com/apps with self-serve tools and an App Manifest API.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Slack provides a robust Web API, Events API, Admin API, SCIM API, Audit Logs API, and supports incoming/outgoing webhooks as well as Socket Mode via WebSockets.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Slack",
      "details": "Slack provides an official Model Context Protocol (MCP) server supporting streamable HTTP and confidential OAuth with a registered Slack app.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://mcp.slack.com/mcp",
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Slack offers comprehensive developer documentation, standard OAuth flows, an App Manifest API for rapid provisioning, an official MCP server, and multiple SDKs/specifications.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.slack.dev/apis/",
        "source_title": "Slack APIs | Slack Developer Docs",
        "claim_supported": "Slack provides Web API, Events API, Admin API, SCIM API, and Audit Logs API.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:13:07.487691+00:00"
      },
      {
        "source_url": "https://apitracker.io/a/slack",
        "source_title": "Slack API - Docs, SDKs & Integration",
        "claim_supported": "Lists Slack API features, base endpoint, official MCP implementation, webhooks, and free pricing model.",
        "source_type": "API Catalog",
        "retrieved_timestamp": "2026-11-23T12:13:09.002856+00:00"
      },
      {
        "source_url": "https://docs.slack.dev/apis/web-api/",
        "source_title": "Slack Web API | Slack Developer Docs",
        "claim_supported": "Details HTTP RPC-style Web API methods, JSON and URL-encoded request bodies, and Bearer token usage.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:13:13.883066+00:00"
      },
      {
        "source_url": "https://apievangelist.com/2026/08/19/slack-app-manifest-api-creates-the-app/",
        "source_title": "Slack Can Actually Mint App Credentials From a Script, If You Survive the Bootstrap - API Evangelist",
        "claim_supported": "Slack supports an App Manifest API (apps.manifest.create) to programmatically provision apps and return credentials.",
        "source_type": "Industry Blog",
        "retrieved_timestamp": "2026-11-23T12:13:16.197359+00:00"
      },
      {
        "source_url": "https://docs.slack.dev/authentication/installing-with-oauth/",
        "source_title": "Installing via OAuth authorization code flow | Slack Developer Docs",
        "claim_supported": "Slack apps are installed using a v2 OAuth 2.0 authorization code flow.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:13:19.042031+00:00"
      },
      {
        "source_url": "https://github.com/dennisonbertram/mcp-slack",
        "source_title": "GitHub - dennisonbertram/mcp-slack: MCP (Model Context Protocol) server for Slack integration",
        "claim_supported": "Community MCP server implementation for Slack integration using Node.js.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:13:22.180904+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 22,
    "identity": {
      "name": "Twilio",
      "category": "Communications and Messaging",
      "one_line_description": "Twilio provides APIs and server-side SDKs for programmable communications including SMS, MMS, voice calling, phone numbers, and messaging services."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "Other"
      ],
      "details": "Twilio supports HTTP Basic authentication using an API key SID as the username and an API key secret as the password, or using an Account SID as the username and an Auth Token as the password.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Developers can create an account and access documentation, console tools, and create API keys directly via self-serve.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Twilio exposes a comprehensive set of REST APIs for Messaging, Voice, Phone Numbers, and more, accompanied by official server-side SDKs and webhook ingestion.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Official MCP",
      "repository_url": "https://www.twilio.com/docs/ai/mcp",
      "maintainer": "Twilio",
      "details": "Twilio Labs maintains an official Model Context Protocol (MCP) server repository providing an OpenAPI to MCP tool generator and exposing Twilio's APIs as MCP tools.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/twilio-labs/mcp",
      "verified_status": "Official MCP",
      "verified_repository_url": "https://www.twilio.com/docs/ai/mcp",
      "verification_rationale": "Twilio officially supports and documents hosted MCP server integration directly within its primary developer documentation at https://www.twilio.com/docs/ai/mcp. The experimental twilio-labs/mcp repo is distinguished as an experimental community-style preview, whereas the primary production status is vendor-documented.",
      "evidence_type": "vendor documentation",
      "date_checked": "2026-11-23"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Twilio provides broad public REST APIs, extensive documentation, SDKs in multiple languages, and an official MCP implementation with clear quickstart guides.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://www.twilio.com/docs/iam/api",
        "source_title": "Our API: the basics | Twilio",
        "claim_supported": "Twilio REST API base URL, HTTP Basic authentication using API key SID and secret, and coverage of Voice and Messaging APIs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:13:33.804966+00:00"
      },
      {
        "source_url": "https://www.twilio.com/docs",
        "source_title": "Docs: API Reference, Tutorials, and Integration | Twilio",
        "claim_supported": "Broad range of Twilio APIs including Messaging, Voice, Phone Numbers, Elastic SIP Trunking, and Verify.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:13:34.907296+00:00"
      },
      {
        "source_url": "https://www.twilio.com/docs/usage/api",
        "source_title": "Twilio API overview | Twilio",
        "claim_supported": "Twilio APIs are organized around REST and accessible directly over HTTPS or through official server-side SDKs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:13:35.924389+00:00"
      },
      {
        "source_url": "https://www.twilio.com/docs/glossary/what-is-an-api-key",
        "source_title": "API Key | Twilio",
        "claim_supported": "Authentication using API Keys as identifiers and secrets.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:13:36.927231+00:00"
      },
      {
        "source_url": "https://www.twilio.com/docs/messaging/api",
        "source_title": "Messaging API Overview | Twilio",
        "claim_supported": "Messaging REST API base URLs and HTTP Basic authentication for sending/receiving SMS and MMS.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:13:37.971918+00:00"
      },
      {
        "source_url": "https://www.twilio.com/docs/usage/requests-to-twilio",
        "source_title": "Twilio API requests | Twilio",
        "claim_supported": "Details on making requests using REST, SDKs, CLI, and HTTP Basic authentication with API keys or Account SID/Auth Token.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:13:39.066560+00:00"
      },
      {
        "source_url": "https://github.com/twilio-labs/mcp",
        "source_title": "GitHub - twilio-labs/mcp: Monorepo providing 1) OpenAPI to MCP Tool generator 2) Exposing all of Twilio's API as MCP Tools",
        "claim_supported": "Official monorepo by Twilio Labs providing an MCP server exposing all of Twilio's public API as MCP tools.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:13:40.896150+00:00"
      },
      {
        "source_url": "https://github.com/skbhati199/twilio-mcp-server",
        "source_title": "GitHub - skbhati199/twilio-mcp-server: Twilio MCP Server - Model Context Protocol server for SMS via Twilio",
        "claim_supported": "Community/Third-party MCP server implementation for Twilio SMS.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:13:42.770687+00:00"
      },
      {
        "source_url": "https://github.com/griffinwork40/twilio-mcp",
        "source_title": "GitHub - griffinwork40/twilio-mcp: Model Context Protocol (MCP) server for Twilio SMS messaging with intelligent conversation management",
        "claim_supported": "Community/Third-party MCP server implementation for Twilio SMS with conversation management.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:13:44.891565+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 23,
    "identity": {
      "name": "Zoho Cliq",
      "category": "Communications and Messaging",
      "one_line_description": "Zoho Cliq is a team collaboration and messaging application featuring extensive REST APIs, webhooks, and developer platform extensions."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2"
      ],
      "details": "Zoho Cliq secures its APIs using OAuth 2.0 supporting authorizationCode and implicit flows, with token endpoints typically hosted under accounts.zoho.com.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Unknown",
      "details": "Developer access requirements (e.g., free tier vs paid plan requirements) are not explicitly stated in the provided documentation, though registering an application via the Zoho API Console is required.",
      "confidence": "Low"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "Provides a comprehensive REST API (versions v2 and v3) covering channels, messages, chats, bots, slash commands, reminders, and more. Webhooks and OpenAPI Specifications (OAS) are supported.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/rohansen856/cliq-mcp",
      "maintainer": "rohansen856",
      "details": "A community-maintained Model Context Protocol (MCP) server exists (Cliq-Mcp: AI WorkBuddy for Zoho Cliq) providing AI-powered capabilities and webhook integration for Zoho Cliq.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/rohansen856/cliq-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/rohansen856/cliq-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/rohansen856/cliq-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [],
      "justification": "The application offers a well-documented public REST API with OpenAPI specifications and postman collections, alongside a community MCP server, though OAuth configuration and app registration through the Zoho Developer Console are required.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://www.zoho.com/cliq/help/restapi/v2/httpmethods/",
        "source_title": "HTTP Methods | Zoho Cliq | API Documentation",
        "claim_supported": "Provides a comprehensive REST API covering chats, messages, threads, channels, bots, etc.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:39:47.185384+00:00"
      },
      {
        "source_url": "https://www.zoho.com/cliq/help/restapi/v3/introduction/",
        "source_title": "Introduction | Zoho Cliq | API Documentation",
        "claim_supported": "Documents version 3 of the Zoho Cliq REST API and developer platform features.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:39:48.326108+00:00"
      },
      {
        "source_url": "https://apis.io/security/zoho-cliq/zoho-cliq-authentication",
        "source_title": "Zoho Cliq API Authentication | APIs.io",
        "claim_supported": "Zoho Cliq secures its APIs with OAuth 2.0 via authorizationCode and implicit flows.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:39:54.586031+00:00"
      },
      {
        "source_url": "https://github.com/rohansen856/cliq-mcp",
        "source_title": "GitHub - rohansen856/cliq-mcp \u00b7 GitHub",
        "claim_supported": "A community Model Context Protocol (MCP) server for Zoho Cliq exists on GitHub.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:39:56.353742+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 24,
    "identity": {
      "name": "Lark (Larksuite)",
      "category": "Communications and Messaging",
      "one_line_description": "A collaboration and workspace platform integrating messaging, documents, calendar, and wiki spaces, providing open platform developer tools and Model Context Protocol (MCP) servers."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "Personal access token"
      ],
      "details": "Authentication can be handled via Lark App ID and App Secret (credentials), user OAuth tokens, or via lark-cli OAuth token stores depending on the integration and MCP server used.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Admin approval required",
      "details": "Contact your workspace admin to obtain the Lark App ID and App Secret, or create your own app in the Lark Developer Console and request admin approval.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Lark provides an official OpenAPI MCP server (`@larksuiteoapi/lark-mcp`) offering 700+ tools, developer console apps, and `lark-cli` for interacting with its platform.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/larksuite/lark-samples/tree/main/mcp_quick_demo",
      "maintainer": "Larksuite",
      "details": "Larksuite publishes an official MCP server (@larksuiteoapi/lark-mcp) providing read and write capabilities with 700+ tools.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/larksuite/lark-samples/tree/main/mcp_quick_demo",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/larksuite/lark-samples/tree/main/mcp_quick_demo",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/larksuite/lark-samples/tree/main/mcp_quick_demo).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Partner access",
        "Authentication complexity"
      ],
      "justification": "Buildable using official MCP packages and developer console credentials, though it requires setting up a registered application, app ID, app secret, and workspace admin approval.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/yyu0310/lark-mcp",
        "source_title": "GitHub - yyu0310/lark-mcp: MCP server connecting Claude Desktop App to your Lark workspace, built on lark-cli \u00b7 GitHub",
        "claim_supported": "Larksuite publishes an official MCP server: @larksuiteoapi/lark-mcp requiring App ID and App Secret from Lark Developer Console.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:40:26.203835+00:00"
      },
      {
        "source_url": "https://github.com/junyuan-qi/lark-mcp-server",
        "source_title": "GitHub - junyuan-qi/lark-mcp-server \u00b7 GitHub",
        "claim_supported": "A registered Lark/Feishu application with appropriate permissions and user access tokens are needed.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:40:28.224827+00:00"
      },
      {
        "source_url": "https://github.com/larksuite/lark-samples/tree/main/mcp_quick_demo",
        "source_title": "lark-samples/mcp_quick_demo at main \u00b7 larksuite/lark-samples \u00b7 GitHub",
        "claim_supported": "Lark MCP Server connects via npx -y @larksuiteoapi/lark-mcp mcp using app credentials.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:40:30.035130+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 25,
    "identity": {
      "name": "Pumble",
      "category": "Communications and Messaging",
      "one_line_description": "A team communication and collaboration platform offering public and private channels, direct messages, calls, and file sharing from CAKE.com."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token"
      ],
      "details": "Authentication requires generating an API key via the Pumble API addon. The token is passed inside the HTTP header of every request as a bearer token or via an ApiKey header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "The Pumble API addon is available on all plans (including the free plan) to Owners, Admins, and Members.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "moderate",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Provides a public REST API via the API key addon with endpoints covering messaging, threads, reactions, channels, and scheduled posts. Official community SDKs/integrations exist on Make and npm (Model Context Protocol servers).",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/infralayers/pumble-mcp",
      "maintainer": "infralayers / shoutkol",
      "details": "Community-developed open-source Model Context Protocol (MCP) servers published on npm (@infralayers/pumble-mcp and @shoutkol/pumble-mcp-server) wrap Pumble's API Key add-on REST API.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/infralayers/pumble-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/infralayers/pumble-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/infralayers/pumble-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API is available on all plans, uses simple API key / bearer token authentication, and provides straightforward HTTP endpoints and Swagger documentation.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://pumble.com/help/integrations/automation-workflow-integrations/api-keys-integration/",
        "source_title": "Pumble API Overview - Pumble Help",
        "claim_supported": "Pumble API addon allows interaction via simple HTTP requests, available on all plans for Owners, Admins, and Members.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:40:46.470493+00:00"
      },
      {
        "source_url": "https://pumble.com/learn/pumble/ai-automation-guide/",
        "source_title": "How to Use AI & Automation in Pumble (API, MCP, AI Assistant)",
        "claim_supported": "API token must be passed inside the HTTP header of every request as a bearer token.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:40:51.480954+00:00"
      },
      {
        "source_url": "https://help.withpersona.com/articles/nBLp2ttHIYjnF2FCO5dOEr/",
        "source_title": "Pumble integration overview \u00b7 Persona Help Center",
        "claim_supported": "The free Pumble plan is enough to use the API Keys add-on.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:40:56.248023+00:00"
      },
      {
        "source_url": "https://github.com/infralayers/pumble-mcp",
        "source_title": "GitHub - infralayers/pumble-mcp",
        "claim_supported": "Open-source Model Context Protocol (MCP) server published on npm wrapping Pumble's official API Key add-on REST API.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:41:02.820772+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 26,
    "identity": {
      "name": "Discord",
      "category": "Communications and Messaging",
      "one_line_description": "Discord is a voice, video and text communication service used by hundreds of millions of people to interact with their communities and friends."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "Basic authentication"
      ],
      "details": "Authenticating with the Discord API can be done using a bot token, an OAuth2 bearer token, or basic authentication with credentials as the client ID and client secret (Base64 encoded) for OAuth2 token endpoints.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can create applications and bot tokens for free via the Discord Developer Portal without requiring admin approval or paid-plan dependency.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Discord exposes a comprehensive public API with numerous contracts covering guilds, channels, webhooks, users, OAuth2, and applications, alongside Webhooks and official/community SDKs.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/BrainDAO/mcp-discord",
      "maintainer": "BrainDAO / IQAI",
      "details": "Multiple third-party Model Context Protocol (MCP) servers exist to interact with Discord, such as BrainDAO/mcp-discord, astrelya/mcp-discord, and v-3/discordmcp.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/BrainDAO/mcp-discord",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/BrainDAO/mcp-discord",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/BrainDAO/mcp-discord).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Discord provides a robust public API, clear documentation, accessible self-serve bot token generation, and readily available open-source MCP servers.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apis.io/providers/discord",
        "source_title": "Discord API \u2014 Docs, Pricing & OpenAPI | APIs.io",
        "claim_supported": "Discord provides numerous API contracts for interactions, webhooks, applications, and general messaging.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:41:26.028239+00:00"
      },
      {
        "source_url": "https://docs.discord.com/developers/reference",
        "source_title": "API Reference - Documentation - Discord",
        "claim_supported": "Authentication options include bot tokens, OAuth2 bearer tokens, and basic auth client credentials.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:41:29.166037+00:00"
      },
      {
        "source_url": "https://github.com/BrainDAO/mcp-discord",
        "source_title": "GitHub - BrainDAO/mcp-discord: Model Context Protocol Server for interacting with Discord Servers",
        "claim_supported": "Third-party MCP server implementation enabling AI agents to interact with Discord platforms.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:41:36.652335+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 27,
    "identity": {
      "name": "Telegram",
      "category": "Communications and Messaging",
      "one_line_description": "Telegram is a communications and messaging service providing a Bot API for automation, a Core API (TDLib) for custom client applications, and a Gateway API for verification codes."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "Personal access token",
        "Other"
      ],
      "details": "Bot API uses a bot token supplied in the URL path (obtained via @BotFather). Core API/MTProto apps authenticate using API ID, API hash, and phone number sign-in with confirmation codes.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can self-serve and generate bot tokens via @BotFather or register an app at my.telegram.org using a phone number without paid subscription walls.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Telegram offers an HTTPS Bot API, a lower-level Core API/TDLib for client development, and a Gateway API for verification codes.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/IQAIcom/mcp-telegram",
      "maintainer": "BrainDAO / IQAI / chigwell / sparfenyuk",
      "details": "Several community and third-party Model Context Protocol servers exist, such as BrainDAO/mcp-telegram, chigwell/telegram-mcp, and sparfenyuk/mcp-telegram, providing tools to interact with Telegram chats, channels, and accounts.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/IQAIcom/mcp-telegram",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/IQAIcom/mcp-telegram",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/IQAIcom/mcp-telegram).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Telegram provides free public self-serve developer access via Bot tokens or API IDs, comprehensive documentation, official/community SDKs, and multiple open-source MCP integrations.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://sleekflow.io/blog/telegram-api",
        "source_title": "Telegram API guide 2026: features, limits and setup",
        "claim_supported": "Telegram offers a Bot API for bots, a core API for building full apps, and a Gateway API for verification codes; Bot API requests carry a bot token in the URL.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:41:56.430959+00:00"
      },
      {
        "source_url": "https://help.comm100.com/where-to-find-telegram-app-api-id-and-api-hash",
        "source_title": "Where to Find Telegram App API ID and API Hash",
        "claim_supported": "Connecting a Telegram account directly requires an App API ID and App API Hash obtained via my.telegram.org.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:42:03.286871+00:00"
      },
      {
        "source_url": "https://communalytic.org/docs/obtaining-telegram-api-key/",
        "source_title": "Telegram - Obtaining a Telegram API Key - Communalytic",
        "claim_supported": "Developers can request a Telegram Developer Account and obtain API keys (api_id and api_hash) via my.telegram.org/apps using their phone number.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:42:08.009941+00:00"
      },
      {
        "source_url": "https://github.com/BrainDAO/mcp-telegram",
        "source_title": "GitHub - BrainDAO/mcp-telegram: Model Context Protocol Server for interacting with Telegram Channels",
        "claim_supported": "An open-source Model Context Protocol server exists for interacting with Telegram bots and channels using the Telegraf library.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:42:10.119960+00:00"
      },
      {
        "source_url": "https://github.com/chigwell/telegram-mcp",
        "source_title": "GitHub - chigwell/telegram-mcp: Telegram MCP server powered by Telethon",
        "claim_supported": "A Telegram integration for MCP-compatible clients exposing account, chat, message, and media operations through Telethon.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:42:12.100130+00:00"
      },
      {
        "source_url": "https://github.com/sparfenyuk/mcp-telegram",
        "source_title": "GitHub - sparfenyuk/mcp-telegram: MCP server to work with Telegram through MTProto",
        "claim_supported": "An MCP server that bridges the Telegram API and AI assistants via MTProto.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:42:13.902173+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 28,
    "identity": {
      "name": "WhatsApp Business",
      "category": "Communications and Messaging",
      "one_line_description": "API platform enabling businesses to programmatically send and receive WhatsApp messages, manage templates, media, and webhooks via Meta's Graph API."
    },
    "authentication": {
      "auth_methods": [
        "JWT or bearer token",
        "API key"
      ],
      "details": "Every request carries a bearer token in the Authorization header (such as temporary user tokens or never-expiring system user tokens). HTTP endpoints on MCP servers may also use API key authentication via the X-API-Key header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can start building within minutes, test for free with access to test numbers, code samples, webhooks, and a sandbox.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "The WhatsApp Business Platform exposes core Graph API endpoints for messages, media, templates, phone numbers, business profiles, analytics, and flows, complemented by official SDKs and webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/tkhattar14/whatsapp-business-mcp",
      "maintainer": "Meta",
      "details": "Meta released an official WhatsApp Business MCP server enabling AI coding agents to automate account configuration, messaging template creation, webhook testing, and compliance verification.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/tkhattar14/whatsapp-business-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/tkhattar14/whatsapp-business-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/tkhattar14/whatsapp-business-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API is fully documented with extensive endpoint references, free sandbox access, official SDKs, and available MCP servers that simplify integration and setup.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://boldally.com/resources/whatsapp-business-api-documentation",
        "source_title": "WhatsApp Business API Documentation: A Practical Developer Map",
        "claim_supported": "Authentication uses bearer tokens in the Authorization header, and endpoints cover messages, media, templates, and profiles.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:42:31.474305+00:00"
      },
      {
        "source_url": "https://whatsappbusiness.com/developers/developer-hub/",
        "source_title": "Developer Hub | WhatsApp for Business",
        "claim_supported": "Free access to test numbers, code samples, webhooks, and a sandbox.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:42:42.205559+00:00"
      },
      {
        "source_url": "https://github.com/tkhattar14/whatsapp-business-mcp",
        "source_title": "GitHub - tkhattar14/whatsapp-business-mcp: MCP server for WhatsApp Business Cloud API",
        "claim_supported": "MCP server available with 50+ tools across messaging, templates, media, analytics, flows, and webhooks.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:42:54.616146+00:00"
      },
      {
        "source_url": "https://emergent.sh/news/meta-launches-ai-agent-server-whatsapp",
        "source_title": "Meta Launches AI Agent Server for WhatsApp Business Setup",
        "claim_supported": "Meta released a WhatsApp Business MCP server enabling AI coding agents to automate account configuration and template management.",
        "source_type": "News",
        "retrieved_timestamp": "2026-11-23T12:43:06.117718+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 29,
    "identity": {
      "name": "Aircall",
      "category": "Communications and Messaging",
      "one_line_description": "Cloud-based phone system and call center software offering a public REST API for managing telephony, contacts, users, webhooks, and conversation intelligence."
    },
    "authentication": {
      "auth_methods": [
        "Basic authentication",
        "OAuth2"
      ],
      "details": "Basic Auth uses an API ID and API token (Base64 encoded as api_id:api_token) generated from the Aircall Dashboard. OAuth 2.0 is supported for technology partners building marketplace apps.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Getting API access starts with a paid Aircall account (such as Essentials at $30/user/month), as API access is bundled with paid plans and specific API access tiers are not separately available for free self-serve use.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides a REST API at https://api.aircall.io/v1, robust webhook event coverage (50+ events), and one official front-end CTI JavaScript SDK (Aircall Everywhere).",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/themobilefirstco/aircall-mcp-server",
      "maintainer": "The Mobile First Company / Cassia Research",
      "details": "No official first-party MCP server exists, but community/third-party MCP servers are available (e.g., from The Mobile First Company and Cassia Research).",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/themobilefirstco/aircall-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/themobilefirstco/aircall-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/themobilefirstco/aircall-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "The API is well-documented with clear REST endpoints, flexible authentication, and available community MCP tools, but requires a paid Aircall subscription and lacks official server-side SDKs.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://pipeline.zoominfo.com/sales/aircall-api-review",
        "source_title": "Aircall API Review 2026: Features, Limits & Alternatives",
        "claim_supported": "Aircall's Public API is a REST surface served from https://api.aircall.io/v1, supporting Basic Auth and OAuth 2.0, with webhooks and a front-end CTI SDK.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:43:21.844299+00:00"
      },
      {
        "source_url": "https://developer.aircall.io/docs/basic-authentication",
        "source_title": "Authenticate with API Keys",
        "claim_supported": "Authentication uses API credentials (API ID and token) sent via HTTP Basic authentication (Base64 encoded).",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:43:29.446948+00:00"
      },
      {
        "source_url": "https://github.com/themobilefirstco/aircall-mcp-server",
        "source_title": "GitHub - themobilefirstco/aircall-mcp-server: Unofficial MCP server for Aircall",
        "claim_supported": "Existence of third-party community MCP server providing tools for Aircall API integration.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:43:32.247478+00:00"
      },
      {
        "source_url": "https://github.com/CassiaResearch/aircall-mcp-server",
        "source_title": "GitHub - CassiaResearch/aircall-mcp-server: Unofficial MCP server for Aircall",
        "claim_supported": "Third-party community MCP server maintained by Cassia Research with 83 tools.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:43:33.878715+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 30,
    "identity": {
      "name": "Vonage",
      "category": "Communications and Messaging",
      "one_line_description": "Vonage provides cloud communications APIs for SMS, Voice, Video, Messaging, and business communications."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token",
        "Other"
      ],
      "details": "Vonage APIs support API Key and Secret (sent via Basic auth or query/header parameters), JSON Web Tokens (JWT) bearer authentication, and Digest Authentication for specific services like SIP Trunking.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Developers can create a developer account and test Vonage APIs through self-serve options and trial resources documented in the developer guides.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Vonage offers a broad suite of communication APIs including Voice, Messages, SMS, Video, Application, and Business Communications (VBC) APIs, alongside webhooks and official server SDKs.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/Vonage/vonage-mcp-server-documentation",
      "maintainer": "Vonage",
      "details": "Vonage provides an official documentation Model Context Protocol (MCP) server repository (\"Vonage/vonage-mcp-server-documentation\") for AI assistants, as well as community and reference implementations like mobilebiz/vonage-mcp-server.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/Vonage/vonage-mcp-server-documentation",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/Vonage/vonage-mcp-server-documentation",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/Vonage/vonage-mcp-server-documentation).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Vonage provides comprehensive documentation, official SDKs, public APIs, Postman collections, and official MCP servers, making it easy to build integrations.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developer.vonage.com/en/voice/voice-api/overview",
        "source_title": "Vonage Voice API for Developers | Vonage API Documentation",
        "claim_supported": "Vonage provides APIs for voice interactions, messaging, web & mobile SDKs, and webhooks.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:43:50.422863+00:00"
      },
      {
        "source_url": "https://developer.vonage.com/en/verify/concepts/authentication",
        "source_title": "Authentication API Guide | Vonage API Documentation",
        "claim_supported": "Verify and other Vonage APIs support Basic Authentication and JWT Bearer authentication.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:43:55.151375+00:00"
      },
      {
        "source_url": "https://developer.vonage.com/en/getting-started/concepts/authentication",
        "source_title": "Authentication - API Concepts | Vonage API Documentation",
        "claim_supported": "Vonage APIs support API Key and Secret, JWT, and Digest Authentication for SIP Trunking.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:43:56.722332+00:00"
      },
      {
        "source_url": "https://github.com/Vonage/vonage-mcp-server-documentation",
        "source_title": "GitHub - Vonage/vonage-mcp-server-documentation: Bridging the Vonage Developer Documentation to LLMs",
        "claim_supported": "Vonage maintains an official documentation MCP server for AI assistants.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:44:02.069145+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 31,
    "identity": {
      "name": "Google Ads",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "A programmatic interface and advertising platform for managing Google Ads accounts, campaigns, keywords, and performance reporting at scale."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key"
      ],
      "details": "Requires a Google Ads developer_token, OAuth2 client_id, client_secret, and a refresh_token. Alternatively supports OAuth Service Account Flow with Google Workspace.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Admin approval required",
      "details": "New developer tokens can initially only access test accounts. To retrieve data from active production accounts, users must apply for Basic or Standard Access in the Google Ads API Center and await approval.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Provides a comprehensive Google Ads API utilizing services and resources queried via Google Ads Query Language (GAQL), supported by official client libraries for Java, .NET, PHP, Python, Ruby, and Perl.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/johnoconnor0/google-ads-mcp",
      "maintainer": "johnoconnor0",
      "details": "An open source Model Context Protocol (MCP) server for Google Ads API integration enabling AI assistants to analyze, manage, and optimize campaigns via natural language.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/johnoconnor0/google-ads-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/johnoconnor0/google-ads-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/johnoconnor0/google-ads-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access",
        "Authentication complexity"
      ],
      "justification": "While the API and client libraries are well-documented and provide a broad surface area, building requires setting up a Google Cloud project, obtaining OAuth2 credentials, and gaining explicit developer token approval for production accounts.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.google.com/google-ads/api/docs/concepts/api-structure",
        "source_title": "API structure \u00a0|\u00a0 Google Ads API \u00a0|\u00a0 Google for Developers",
        "claim_supported": "The Google Ads API consists of resources and services to retrieve and manipulate advertising entities.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:14:06.208054+00:00"
      },
      {
        "source_url": "https://developers.google.com/google-ads/api/docs/get-started/introduction",
        "source_title": "Introduction to the Google Ads API \u00a0|\u00a0 Google for Developers",
        "claim_supported": "Overview of Google Ads API use cases, GAQL, and supported client libraries.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:14:07.971997+00:00"
      },
      {
        "source_url": "https://github.com/google/ads-api-report-fetcher/blob/main/docs/how-to-authenticate-ads-api.md",
        "source_title": "ads-api-report-fetcher/docs/how-to-authenticate-ads-api.md at main \u00b7 google/ads-api-report-fetcher \u00b7 GitHub",
        "claim_supported": "Authentication requires developer_token, client_id, client_secret, and refresh_token.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:14:11.020521+00:00"
      },
      {
        "source_url": "https://docs.owox.com/packages/connectors/src/sources/google-ads/credentials/",
        "source_title": "Access Token for Google Ads Source",
        "claim_supported": "New developer tokens require application for Basic Access to query production accounts.",
        "source_type": "Partner Docs",
        "retrieved_timestamp": "2026-11-23T12:14:13.228908+00:00"
      },
      {
        "source_url": "https://github.com/johnoconnor0/google-ads-mcp",
        "source_title": "GitHub - johnoconnor0/google-ads-mcp: A Model Context Protocol (MCP) server for Google Ads API integration",
        "claim_supported": "Presence of a community Model Context Protocol server for Google Ads.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:14:17.290531+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 32,
    "identity": {
      "name": "Meta Ads",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "Meta Ads is Meta's Marketing API (Graph API structure) used to create, manage, and analyze advertising campaigns programmatically across Facebook and Instagram."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "JWT or bearer token"
      ],
      "details": "Authentication uses access tokens generated via a Meta Business app, including short-lived user tokens, long-lived user tokens (~60 days), and System User tokens for automated server-to-server interactions.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "You can start reading your own Meta ad accounts through the Marketing API without App Review by creating a business app in Meta's App Dashboard. Advanced Access (Full Access) requires App Review and Business Verification.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Exposes a comprehensive REST-based Graph API and Marketing API surface supporting ad accounts, campaigns, ad sets, creatives, insights reporting, and webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/pipeboard-co/meta-ads-mcp",
      "maintainer": "pipeboard-co",
      "details": "An open-source Model Context Protocol (MCP) server created by Pipeboard allowing AI assistants to run Meta Ads operations end-to-end.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/pipeboard-co/meta-ads-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/pipeboard-co/meta-ads-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/pipeboard-co/meta-ads-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [],
      "justification": "The API is fully documented with a public REST/Graph API surface and available MCP servers, but requires careful handling of token expiration (short-lived vs long-lived vs system user) and potential App Review requirements for managing external accounts.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://admanage.ai/blog/meta-ads-api",
        "source_title": "Meta Ads API: Setup, Pagination & Insights Guide (2026)",
        "claim_supported": "The Meta Ads API is Meta's Marketing API, used to create and manage ads and retrieve performance data.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:44:22.943755+00:00"
      },
      {
        "source_url": "https://unified.to/blog/how_to_get_your_meta_ads_api_key",
        "source_title": "How to Get Your Meta Ads API Key | Unified.to",
        "claim_supported": "Authentication uses tokens generated from a Meta Business app including short-lived, long-lived, and System User tokens.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:44:30.554624+00:00"
      },
      {
        "source_url": "https://tofuads.com/resources/meta-marketing-api-access-own-ad-accounts",
        "source_title": "Meta ads API access: how to get it for your own ad accounts | Tofu Ads Agent",
        "claim_supported": "You can start reading your own Meta ad accounts through the Marketing API without App Review by creating a business app.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:44:33.282969+00:00"
      },
      {
        "source_url": "https://github.com/pipeboard-co/meta-ads-mcp",
        "source_title": "GitHub - pipeboard-co/meta-ads-mcp",
        "claim_supported": "Model Context Protocol (MCP) server that lets AI assistants run Meta Ads end to end.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:44:42.820722+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 33,
    "identity": {
      "name": "LinkedIn Ads",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "A digital advertising platform powered by the LinkedIn Marketing API family that allows advertisers to create and manage campaigns, target specific professional demographics, and analyze ad performance."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "Requires 3-legged OAuth 2.0 (authorization code flow) acting on behalf of a member to obtain bearer tokens, with client credentials (2-legged flow) explicitly disallowed for marketing/ads endpoints.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Admin approval required",
      "details": "Access is gated; developers must create an application in the LinkedIn Developer Portal, request the Advertising API product via an access-request form detailing their use case, and undergo review by LinkedIn.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Exposes a broad set of APIs under the LinkedIn Marketing API banner including Advertising API, Reporting API, and Ad Targeting APIs, utilizing REST endpoints with Rest.li protocol and version headers.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/danielpopamd/linkedin-ads-mcp",
      "maintainer": "danielpopamd / getmcpads",
      "details": "Multiple community-maintained open-source Model Context Protocol (MCP) servers exist on GitHub (such as danielpopamd/linkedin-ads-mcp and get-mcp-ads/linkedin-ads-mcp-server) enabling AI agents to read and manage LinkedIn Ads data.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/danielpopamd/linkedin-ads-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/danielpopamd/linkedin-ads-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/danielpopamd/linkedin-ads-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Authentication complexity",
        "Paid access",
        "Partner access"
      ],
      "justification": "While robust REST APIs and community MCPs exist, building requires navigating an administrative access review process, strict 3-legged OAuth requirements, monthly versioning headers, and specific app scopes.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/ads-targeting?view=li-lms-2026-10",
        "source_title": "Ad Targeting - LinkedIn | Microsoft Learn",
        "claim_supported": "LinkedIn's Ad Targeting API enables advertisers to control ad placement using professional demographics via 3-legged access tokens.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:45:00.970393+00:00"
      },
      {
        "source_url": "https://apis.apievangelist.com/store/linkedin-ads-ad-targeting-entities-api",
        "source_title": "Linkedin Ads Ad Targeting Entities Api - API Evangelist APIs",
        "claim_supported": "API contract details using REST and OAuth 2.0 three-legged flow.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:45:03.143922+00:00"
      },
      {
        "source_url": "https://zenabm.com/blog/linkedin-ads-library-api",
        "source_title": "LinkedIn Ad Library API: How to Use It for Competitor Research",
        "claim_supported": "Ad Library API details, rest.li finders, headers, and gated access.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:45:05.566049+00:00"
      },
      {
        "source_url": "https://unified.to/blog/how_to_get_your_linkedin_ads_api_key",
        "source_title": "How to Get Your LinkedIn Ads API Key | Unified.to",
        "claim_supported": "Access review requirements, 3-legged OAuth requirements, and prohibition of 2-legged client credentials for ads.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:45:06.921702+00:00"
      },
      {
        "source_url": "https://zenabm.com/blog/linkedin-ads-api",
        "source_title": "LinkedIn Ads API: What It Is, How to Access It, and When to Use an MCP Server Instead",
        "claim_supported": "LinkedIn Marketing API family scope, gated approval steps, and development tier setup.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:45:07.986306+00:00"
      },
      {
        "source_url": "https://github.com/danielpopamd/linkedin-ads-mcp",
        "source_title": "GitHub - danielpopamd/linkedin-ads-mcp: LinkedIn Ads MCP server with full write access",
        "claim_supported": "Community-built MCP server implementation for LinkedIn Ads.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:45:09.831586+00:00"
      },
      {
        "source_url": "https://github.com/get-mcp-ads/linkedin-ads-mcp-server",
        "source_title": "GitHub - get-mcp-ads/linkedin-ads-mcp-server: LinkedIn Ads MCP server",
        "claim_supported": "Standalone open-source LinkedIn Ads MCP server configurations and tool distribution.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:45:11.893941+00:00"
      },
      {
        "source_url": "https://github.com/cdatasoftware/linkedin-ads-mcp-server-by-cdata",
        "source_title": "GitHub - CDataSoftware/linkedin-ads-mcp-server-by-cdata",
        "claim_supported": "CData-provided read-only LinkedIn Ads MCP wrapper (deprecated/archived).",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:45:13.893797+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 34,
    "identity": {
      "name": "GoHighLevel",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "A comprehensive platform offering marketing, sales, CRM, and automation tools for digital marketing agencies and businesses."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "JWT or bearer token"
      ],
      "details": "Supports OAuth 2.0 (including OAuth 2.0 with PKCE and client credentials flow) and Bearer Token authentication via Private Integrations API keys.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Access to API levels and advanced features varies depending on the subscription plan, with features like advanced API access unlocked via plans such as Agency Pro.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Exposes robust REST endpoints for contacts, messaging, workflows, calendars, payments, webhooks, metadata, and uploads via API v2 and v3.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/drausal/gohighlevel-mcp",
      "maintainer": "drausal, mastanley13, CryptoJym",
      "details": "Multiple community-maintained Model Context Protocol (MCP) servers exist on GitHub (e.g., drausal/gohighlevel-mcp, mastanley13/GoHighLevel-MCP, CryptoJym/gohighlevel-mcp) enabling integration with AI assistants like Claude and ChatGPT.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/drausal/gohighlevel-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/drausal/gohighlevel-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/drausal/gohighlevel-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Comprehensive public documentation, active API v2/v3 support, official SDK provisions, and multiple community MCP wrappers make building integrations straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/GoHighLevel/highlevel-api-docs",
        "source_title": "GitHub - GoHighLevel/highlevel-api-docs: This repo is our public documentation for API v2.",
        "claim_supported": "Official public documentation for GoHighLevel API V2 endpoints and specs.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:45:31.309228+00:00"
      },
      {
        "source_url": "https://hireghldeveloper.com/blog/post/gohighlevel-api-integration-guide",
        "source_title": "GoHighLevel API Integration: What Developers and Agencies Need to Know",
        "claim_supported": "GoHighLevel provides REST endpoints covering contacts, messaging, workflows, calendars, payments, and webhooks.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:45:33.455833+00:00"
      },
      {
        "source_url": "https://help.gohighlevel.com/support/solutions/articles/155000000136-how-to-get-started-with-the-developer-s-marketplace",
        "source_title": "How to get started with the Developer's Marketplace : HighLevel Support Portal",
        "claim_supported": "OAuth API for the CRM Marketplace offers Location Level and Agency Level Access.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:45:37.448741+00:00"
      },
      {
        "source_url": "https://ghlft.com/go-high-level-api-documentation/",
        "source_title": "Go High Level Api Documentation",
        "claim_supported": "Basic or Advanced API access varies by subscription plan, and daily limits are 200,000 requests.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:45:42.795701+00:00"
      },
      {
        "source_url": "https://marketplace.gohighlevel.com/docs/2023-02-21/Authorization/DeveloperGlossary/index.html",
        "source_title": "Developer's Glossary of Terms | HighLevel API",
        "claim_supported": "OAuth 2.0 authorization, SDKs, and access token implementation details.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:45:45.894167+00:00"
      },
      {
        "source_url": "https://github.com/drausal/gohighlevel-mcp",
        "source_title": "GitHub - drausal/gohighlevel-mcp: Model Context Protocol (MCP) server for GoHighLevel API",
        "claim_supported": "Community MCP server providing access to the GoHighLevel API for AI assistants.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:45:47.794912+00:00"
      },
      {
        "source_url": "https://github.com/mastanley13/GoHighLevel-MCP/blob/main/README-GITHUB.md",
        "source_title": "GoHighLevel-MCP/README-GITHUB.md at main \u00b7 mastanley13/GoHighLevel-MCP \u00b7 GitHub",
        "claim_supported": "Community MCP integration connecting ChatGPT/Claude to GoHighLevel via Private Integrations API keys.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:45:49.754179+00:00"
      }
    ],
    "research_status": "Completed",
    "error_message": null
  },
  {
    "id": 35,
    "identity": {
      "name": "Mailchimp",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "Mailchimp is an online marketing platform and email automation service providing APIs for audience management, campaigns, templates, reports, and transactional messaging."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "Basic authentication",
        "JWT or bearer token"
      ],
      "details": "Every request to the Marketing API carries a credential using either an API key or an OAuth 2 token. They can be sent via HTTP Basic Authentication (passing the token as the password with any string as the username) or Bearer Authentication in the Authorization header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can sign up for a Mailchimp account and immediately generate an API key from the account dashboard to begin testing requests.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Mailchimp provides a Marketing API following REST conventions, a Transactional API, official client libraries for Node.js, Python, PHP, and others, as well as webhook subscriptions for real-time events.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/damientilman/mailchimp-mcp-server",
      "maintainer": "damientilman",
      "details": "Multiple third-party Model Context Protocol (MCP) servers exist for Mailchimp, such as damientilman/mailchimp-mcp-server, mattcoatsworth/mailchip-mcp-server, and AgentX-ai/mailchimp-mcp, providing tools across campaigns, audiences, reports, and e-commerce.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/damientilman/mailchimp-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/damientilman/mailchimp-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/damientilman/mailchimp-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Mailchimp provides a clear public REST API, extensive official SDKs, public documentation, interactive API playgrounds, straightforward API key/OAuth authentication, and multiple third-party MCP servers.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://ones.com/blog/the-developers-roadmap-to-mailchimp-api-docs-2026-edition/",
        "source_title": "The Developer\u2019s Roadmap to Mailchimp API Docs (2026 Edition)",
        "claim_supported": "Mailchimp offers Marketing and Transactional APIs, SDKs, basic authentication using API keys, and endpoints for lists, campaigns, reports, and webhooks.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:14:37.450293+00:00"
      },
      {
        "source_url": "https://mailchimp.com/developer/marketing/api-concepts/api-structure",
        "source_title": "API structure | Mailchimp | Developer",
        "claim_supported": "The Marketing API follows REST conventions, uses JSON content types, and is described using OpenAPI Specifications.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:14:40.172695+00:00"
      },
      {
        "source_url": "https://mailchimp.com/developer/marketing/api-concepts/authentication",
        "source_title": "Authentication | Mailchimp | Developer",
        "claim_supported": "API keys and OAuth 2 tokens can be sent using HTTP Basic Authentication or Bearer Authentication.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:14:44.901751+00:00"
      },
      {
        "source_url": "https://github.com/damientilman/mailchimp-mcp-server",
        "source_title": "GitHub - damientilman/mailchimp-mcp-server",
        "claim_supported": "Third-party Model Context Protocol server offering comprehensive tools for Mailchimp Marketing API integration.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:14:52.998606+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 36,
    "identity": {
      "name": "Klaviyo",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "Klaviyo is a marketing automation and customer data platform built for ecommerce, enabling integrations across email, SMS, mobile push, and more."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2"
      ],
      "details": "Klaviyo supports private API keys for server-side endpoints, public API keys (company ID) for client-side tracking, and OAuth 2.0 with authorization code and mandatory PKCE for third-party integrations and marketplace apps.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can access the developer portal and use API keys or documentation freely through self-serve means.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Klaviyo provides broad REST endpoints covering profiles, events, lists, segments, campaigns, flows, catalogs, coupons, metrics, reviews, templates, webhooks, and reporting, alongside Mobile SDKs and AsyncAPI/OpenAPI specifications.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/mattcoatsworth/Klaviyo-MCP-Server",
      "maintainer": "mattcoatsworth",
      "details": "Multiple community-maintained Model Context Protocol (MCP) servers exist for Klaviyo, such as mattcoatsworth/Klaviyo-MCP-Server and GoodwordTeam/klaviyo-community-mcp, providing tools and resources for managing Klaviyo profiles, lists, campaigns, and more via LLMs.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/mattcoatsworth/Klaviyo-MCP-Server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/mattcoatsworth/Klaviyo-MCP-Server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/mattcoatsworth/Klaviyo-MCP-Server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Klaviyo features comprehensive public REST APIs, robust documentation, clear authentication mechanisms (API keys and OAuth), and readily available community MCP servers, making integration and building straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://academy.klaviyo.com/en-us/courses/interpret-api-documentation/lessons/navigate-the-developer-portal",
        "source_title": "Navigate the developer portal - Interpret API documentation | Klaviyo Academy",
        "claim_supported": "Klaviyo hosts all developer documentation on the Klaviyo developer portal containing API reference docs and guides, utilizing public API keys for client-side and private API keys for server-side calls.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:46:08.211839+00:00"
      },
      {
        "source_url": "https://apis.io/providers/klaviyo",
        "source_title": "Klaviyo API \u2014 Docs, Pricing & OpenAPI | APIs.io",
        "claim_supported": "The Klaviyo API exposes profiles, events, lists, segments, campaigns, flows, catalogs, coupons, metrics, reviews, templates, webhooks, and reporting endpoints across 23 API contracts.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:46:15.732825+00:00"
      },
      {
        "source_url": "https://apis.io/security/klaviyo/klaviyo-authentication",
        "source_title": "Klaviyo API Authentication | APIs.io",
        "claim_supported": "Klaviyo secures its APIs with API keys (header/query) and OAuth 2.0 authorizationCode flow with mandatory PKCE.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:46:17.593531+00:00"
      },
      {
        "source_url": "https://developers.klaviyo.com/en/docs/authenticate_",
        "source_title": "Authenticate API requests | Klaviyo Developers",
        "claim_supported": "Klaviyo provides 3 methods of authentication: private key authentication, OAuth, and public key authentication.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:46:19.350250+00:00"
      },
      {
        "source_url": "https://github.com/mattcoatsworth/Klaviyo-MCP-Server",
        "source_title": "GitHub - mattcoatsworth/Klaviyo-MCP-Server \u00b7 GitHub",
        "claim_supported": "A comprehensive Model Context Protocol (MCP) server exists for interacting with the Klaviyo API, providing tools and resources for profiles, lists, segments, campaigns, flows, etc.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:46:22.315404+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 37,
    "identity": {
      "name": "systeme.io",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "Systeme.io is an all-in-one marketing software platform offering funnels, email marketing, online courses, and automation rules."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token"
      ],
      "details": "Authenticates requests using a public API key, typically passed via an X-API-Key or Bearer token header, or an X-MCP-Key header/mcpKey parameter for MCP.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "A free plan is available that includes API and MCP access with limits such as 2,000 contacts and 3 funnels.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Exposes a public key-authenticated REST API covering contacts, tags, newsletters, campaigns, funnels, price plans, coupons, courses, communities, and automation rules.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "systeme.io",
      "details": "Systeme.io provides an official free-plan-included MCP server (at mcp.systeme.io/mcp) compatible with ChatGPT and Claude, supporting contacts, tags, newsletters, and opt-in funnels.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The platform offers a free plan with public API and MCP access, clear documentation, standard API key authentication, and broad endpoint coverage.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://help.systeme.io/article/2323-how-to-create-a-public-api-key-on-systeme-io",
        "source_title": "How to use the systeme.io public API (Application Programming Interface) | systeme.io Help Center",
        "claim_supported": "Public API actions include contacts, tags, custom fields, newsletters, campaigns, funnels, price plans, coupons, courses, communities, and automation rules.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:46:44.648478+00:00"
      },
      {
        "source_url": "https://thatmarketingbuddy.com/software/systeme-io",
        "source_title": "Systeme.io Review: Affordable Funnels and Automation",
        "claim_supported": "Official free-plan-included MCP server at mcp.systeme.io/mcp and key-authenticated REST API at developer.systeme.io.",
        "source_type": "Independent Review / Documentation",
        "retrieved_timestamp": "2026-11-23T12:46:48.064854+00:00"
      },
      {
        "source_url": "https://rollout.com/integration-guides/systeme.io/sdk/step-by-step-guide-to-building-a-systeme.io-api-integration-in-go",
        "source_title": "How to build a systeme.io API integration",
        "claim_supported": "API key authentication via Bearer header and REST endpoints for contacts.",
        "source_type": "Integration Guide",
        "retrieved_timestamp": "2026-11-23T12:46:53.439777+00:00"
      },
      {
        "source_url": "https://github.com/snzeeee/mcp-server-systemeio",
        "source_title": "GitHub - snzeeee/mcp-server-systemeio: MCP Server for Systeme.io \u2014 manage contacts, tags, courses, and subscriptions through Claude",
        "claim_supported": "Free plan includes API access and can be used to generate keys for custom integrations or MCP.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:46:57.078491+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 38,
    "identity": {
      "name": "Pinterest",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "Pinterest provides a REST API and developer platform for managing Pinterest user profiles, boards, and pins, alongside OAuth-based authentication."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key"
      ],
      "details": "Pinterest utilizes OAuth 2.0 with Authorization Code and Client Credentials grants, requiring a client_id and client_secret to obtain and refresh access tokens.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can register applications on the Pinterest Developer Platform and obtain app credentials without upfront costs.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Pinterest offers an official REST API with OpenAPI specifications (v3.0.3) managed in a public GitHub repository.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/collactivelabs/pinterest-mcp-server",
      "maintainer": "collactivelabs",
      "details": "Third-party and community-developed MCP servers exist, such as collactivelabs/pinterest-mcp-server which interfaces with the Pinterest API.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/collactivelabs/pinterest-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/collactivelabs/pinterest-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/collactivelabs/pinterest-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The official REST API is fully documented via OpenAPI specs, uses standard OAuth 2.0 authentication, and provides accessible self-serve developer registration.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/pinterest/api-description",
        "source_title": "GitHub - pinterest/api-description: OpenAPI descriptions for Pinterest's REST API \u00b7 GitHub",
        "claim_supported": "Pinterest provides OpenAPI descriptions for its REST API.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:47:19.196004+00:00"
      },
      {
        "source_url": "https://developers.pinterest.com/docs/getting-started/set-up-authentication-and-authorization/",
        "source_title": "Pinterest Developers",
        "claim_supported": "Pinterest uses OAuth 2.0 with App ID, client secret, and token generation steps.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:47:25.570865+00:00"
      },
      {
        "source_url": "https://github.com/collactivelabs/pinterest-mcp-server",
        "source_title": "GitHub - collactivelabs/pinterest-mcp-server: A Model Context Protocol (MCP) server for integrating the Pinterest API with AI agents and LLMs. \u00b7 GitHub",
        "claim_supported": "Community MCP server exists for integrating Pinterest API with AI agents.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:47:50.160648+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 39,
    "identity": {
      "name": "Threads (Meta)",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "Meta's official API for creating posts, retrieving media and profiles, managing replies, and accessing insights on Threads."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "API authentication is handled by Threads user access tokens that conform to the OAuth 2.0 protocol, starting with short-lived tokens (1 hour) exchangeable for long-lived tokens (60 days).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Admin approval required",
      "details": "Creating a Meta app and picking the Threads use case is self-serve, but permissions (threads_basic, threads_content_publish, etc.) require Meta App Review and app publication before working on non-tester accounts.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides RESTful endpoints hosted at graph.threads.net, webhooks for realtime events, and an official sample app.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/quinnjr/threads-mcp",
      "maintainer": "quinnjr",
      "details": "Third-party and community-developed MCP servers exist on GitHub (e.g., quinnjr/threads-mcp, tttn13/threads-mcp) to integrate Threads with Claude and AI assistants.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/quinnjr/threads-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/quinnjr/threads-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/quinnjr/threads-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Partner access"
      ],
      "justification": "Well-documented REST API with clear OAuth procedures, but requires Meta App Review for full permission scopes on production accounts.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.facebook.com/documentation/threads",
        "source_title": "Threads API | Meta for Developers",
        "claim_supported": "Use the Threads API to create and publish posts, retrieve media and profiles, moderate replies, and access insights.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:48:08.972629+00:00"
      },
      {
        "source_url": "https://developers.facebook.com/documentation/threads/get-started",
        "source_title": "Get started with the Threads API | Meta for Developers",
        "claim_supported": "API authentication is handled by Threads user access tokens that conform to the OAuth 2.0 protocol, app-scoped, and require App Review for production use.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:48:18.500204+00:00"
      },
      {
        "source_url": "https://social-api.ai/blog/threads-api-publishing-posts-developer-guide",
        "source_title": "Threads API: Publishing Posts via the API (2026 Developer Guide)",
        "claim_supported": "Publishing takes a two-step container model: creating a container via POST then publishing the ID.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:48:15.888083+00:00"
      },
      {
        "source_url": "https://github.com/quinnjr/threads-mcp",
        "source_title": "GitHub - quinnjr/threads-mcp: Production-ready Model Context Protocol server for Threads.com API",
        "claim_supported": "Community MCP server implementation for integrating Threads with LLMs like Claude and ChatGPT.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:48:38.832795+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 40,
    "identity": {
      "name": "SendGrid",
      "category": "Marketing, Ads, Email and Social",
      "one_line_description": "A cloud-based email delivery platform that provides transactional and marketing email at scale over an HTTP v3 REST API and an SMTP relay."
    },
    "authentication": {
      "auth_methods": [
        "API key"
      ],
      "details": "All APIs authenticate with a scoped bearer API key against api.sendgrid.com, with an EU data-residency host at api.eu.sendgrid.com.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "APIs.io profile and Twilio documentation indicate self-serve sign up and freemium availability.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks",
        "SDK",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides an HTTP v3 REST API, SMTP relay, Event Webhooks, and official SDKs for C#, Go, Java, Node.js, PHP, Python, and Ruby.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/garethcull/sendgrid-mcp",
      "maintainer": "garethcull",
      "details": "An open-source SendGrid MCP server exists to help pull email stats and save HTML templates via AI models.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/garethcull/sendgrid-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/garethcull/sendgrid-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/garethcull/sendgrid-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "SendGrid offers comprehensive REST APIs, official SDKs in multiple languages, detailed documentation, and clear API key authentication, making integration straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apis.io/providers/sendgrid",
        "source_title": "SendGrid API \u2014 Docs, Pricing & OpenAPI | APIs.io",
        "claim_supported": "SendGrid provides transactional and marketing email at scale over an HTTP v3 REST API and an SMTP relay.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:49:01.755759+00:00"
      },
      {
        "source_url": "https://www.twilio.com/docs/sendgrid/api-reference",
        "source_title": "SendGrid v3 API reference | SendGrid Docs | Twilio",
        "claim_supported": "The SendGrid v3 Web API provides a REST interface to send email at scale.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:49:02.790487+00:00"
      },
      {
        "source_url": "https://billionverify.com/blog/what-is-sendgrid",
        "source_title": "What Is SendGrid? Email API, Login and API Keys",
        "claim_supported": "The request carries an API key in an authorization header. Base URL is api.sendgrid.com.",
        "source_type": "Blog",
        "retrieved_timestamp": "2026-11-23T12:49:07.429341+00:00"
      },
      {
        "source_url": "https://rollout.com/integration-guides/sendgrid/api-essentials",
        "source_title": "SendGrid API Essentials",
        "claim_supported": "SendGrid provides client libraries for Ruby, Python, Node.js, C#, PHP, Go, and Java.",
        "source_type": "Integration Guide",
        "retrieved_timestamp": "2026-11-23T12:49:09.132025+00:00"
      },
      {
        "source_url": "https://github.com/garethcull/sendgrid-mcp",
        "source_title": "GitHub - garethcull/sendgrid-mcp: An open source Sendgrid MCP server",
        "claim_supported": "An open-source SendGrid MCP server helps users pull email stats and manage templates via AI models.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:49:11.137477+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 41,
    "identity": {
      "name": "Shopify",
      "category": "Ecommerce",
      "one_line_description": "A comprehensive commerce platform providing REST and GraphQL APIs, webhooks, official SDKs, and developer tools to build apps, storefronts, and manage store data."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "JWT or bearer token",
        "Personal access token"
      ],
      "details": "Shopify utilizes access tokens passed in request headers (e.g., X-Shopify-Access-Token, X-Shopify-Storefront-Access-Token), OAuth 2.0 flows, client credentials grants, and JWT ID tokens for customer account authentication.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Developers can create development stores and apps using the Dev Dashboard to test APIs and integrate.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "GraphQL",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Shopify offers broad public APIs including GraphQL Admin API, Storefront API, Partner API, Customer Account API, Ajax API, classic webhooks, and official libraries for Ruby, Node, PHP, Go, and .NET.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/antoineschaller/shopify-mcp-server",
      "maintainer": "antoineschaller / akson",
      "details": "Multiple community-maintained MCP servers exist (such as antoineschaller/shopify-mcp-server, miller-joe/shopify-mcp, and GeLi2001/shopify-mcp) enabling AI assistants like Claude to manage Shopify store data via natural language.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/antoineschaller/shopify-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/antoineschaller/shopify-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/antoineschaller/shopify-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Shopify provides comprehensive documentation, robust developer tools (Shopify CLI, Dev Dashboard), public GraphQL and REST APIs, and multiple community MCP servers for seamless integration.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://shopify.dev/docs/api",
        "source_title": "Shopify APIs, libraries, and tools",
        "claim_supported": "Shopify provides broad public APIs (Admin GraphQL, Storefront API, Partner API, Webhooks, Functions, etc.), libraries, and development tools.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:15:11.546801+00:00"
      },
      {
        "source_url": "https://shopify.dev/docs/api/usage/authentication",
        "source_title": "Shopify API authentication",
        "claim_supported": "Details on authentication mechanisms like OAuth, tokens, and headers across different Shopify APIs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:15:21.046469+00:00"
      },
      {
        "source_url": "https://ecomxagency.com/blogs/shopify/shopify-product-api-for-developers",
        "source_title": "Shopify Product API for Developers a Complete guide",
        "claim_supported": "REST and GraphQL endpoints for product catalog management and custom app authentication.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:15:18.747246+00:00"
      },
      {
        "source_url": "https://github.com/antoineschaller/shopify-mcp-server",
        "source_title": "GitHub - antoineschaller/shopify-mcp-server: A comprehensive Model Context Protocol (MCP) server for Shopify Admin API integration",
        "claim_supported": "Community MCP server available for Shopify Admin API integration.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:15:26.831281+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 42,
    "identity": {
      "name": "WooCommerce",
      "category": "Ecommerce",
      "one_line_description": "WooCommerce is a customizable, open-source ecommerce platform built on WordPress that provides robust programmatic APIs and extensions for managing online stores."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "Basic authentication"
      ],
      "details": "WooCommerce supports REST API keys (Consumer Key and Consumer Secret) generated via the WordPress admin interface or auto-generated through an application authentication endpoint, alongside HTTP Basic Auth over HTTPS.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "WooCommerce is a free, open-source WordPress plugin. Developers can freely enable the REST API under WordPress settings and generate API credentials without paid-plan dependencies or admin gating.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "WooCommerce provides a comprehensive REST API (v3), Store API for unauthenticated cart/checkout functionality, a Dual API (experimental GraphQL), and various PHP-based settings and gateway APIs.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/techspawn/woocommerce-mcp-server",
      "maintainer": "techspawn",
      "details": "Multiple community-maintained Model Context Protocol (MCP) servers exist on GitHub (e.g., techspawn/woocommerce-mcp-server, afarhadi99/WordPress-mcp-full, and opestro) allowing AI assistants to interact with WooCommerce stores via the REST API.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/techspawn/woocommerce-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/techspawn/woocommerce-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/techspawn/woocommerce-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "WooCommerce is open-source, free to install, and exposes a well-documented REST API with standard authentication methods (Consumer Key/Secret) and existing open-source MCP integrations.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developer.woocommerce.com/docs/apis/rest-api/v3",
        "source_title": "REST API v3 | WooCommerce developer docs",
        "claim_supported": "WooCommerce provides a comprehensive REST API v3 supporting products, orders, customers, webhooks, and more.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:15:56.142746+00:00"
      },
      {
        "source_url": "https://developer.woocommerce.com/docs/apis",
        "source_title": "Getting Started with WooCommerce APIs | WooCommerce developer docs",
        "claim_supported": "Lists WooCommerce API options including WC REST API, Store API, Dual API (code + GraphQL), and various PHP-based APIs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:15:57.510902+00:00"
      },
      {
        "source_url": "https://developer.woocommerce.com/docs/apis/rest-api/authentication",
        "source_title": "Authentication | WooCommerce developer docs",
        "claim_supported": "Authentication uses Consumer Keys and Secrets generated in the WordPress dashboard or via authentication endpoints, supporting HTTP Basic Auth.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:16:01.955141+00:00"
      },
      {
        "source_url": "https://github.com/techspawn/woocommerce-mcp-server",
        "source_title": "GitHub - techspawn/woocommerce-mcp-server: A WooCommerce (MCP) Model Context Protocol server",
        "claim_supported": "Community MCP server implementation for WooCommerce integration using the WordPress REST API.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:16:12.910305+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 43,
    "identity": {
      "name": "BigCommerce",
      "category": "Ecommerce",
      "one_line_description": "A commerce platform empowering brands and retailers to create apps, automate store processes, and build headless ecommerce solutions through robust REST and GraphQL APIs."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "JWT or bearer token"
      ],
      "details": "BigCommerce offers OAuth-based API accounts (store-level credentials, app-level credentials, and account-level credentials). Authentication utilizes tokens passed via headers such as X-Auth-Token or Bearer tokens for GraphQL.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Developers can sign up for a free BigCommerce trial store to test API calls and build integrations without affecting live data.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "GraphQL",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "Provides REST Store Management APIs, REST Storefront API, GraphQL Storefront API, Customer Login API, and Current Customer API with OpenAPI specifications available in JSON or YAML.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/isaacgounton/bigcommerce-api-mcp",
      "maintainer": "isaacgounton",
      "details": "An open-source, third-party Model Context Protocol (MCP) server for the BigCommerce REST API allowing read and write operations via community implementation.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/isaacgounton/bigcommerce-api-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/isaacgounton/bigcommerce-api-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/isaacgounton/bigcommerce-api-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "BigCommerce provides comprehensive API documentation, sandbox trial accounts, in-browser Request Runners, OpenAPI specification files, and standard OAuth/API token headers, making it straightforward to build integrations.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.bigcommerce.com/developer/api-reference/about-our-apis",
        "source_title": "About Our APIs | BigCommerce Docs",
        "claim_supported": "Available APIs include REST Store Management APIs, REST Storefront API, GraphQL Storefront API, Customer Login API, and Current Customer API.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:49:33.393807+00:00"
      },
      {
        "source_url": "https://docs.bigcommerce.com/developer/docs/overview/quick-start",
        "source_title": "BigCommerce Developers | BigCommerce Docs",
        "claim_supported": "Developers can sign up for a free trial sandbox store to test API calls and generate API credentials via the control panel.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:49:36.372968+00:00"
      },
      {
        "source_url": "https://docs.bigcommerce.com/developer/docs/overview/api-fundamentals/api-accounts",
        "source_title": "API Accounts | BigCommerce Docs",
        "claim_supported": "BigCommerce offers three types of OAuth-based API accounts: store-level credentials, app-level credentials, and account-level credentials using tokens like X-Auth-Token.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:49:53.358702+00:00"
      },
      {
        "source_url": "https://github.com/isaacgounton/bigcommerce-api-mcp",
        "source_title": "GitHub - isaacgounton/bigcommerce-api-mcp: BigCommerce MCP Server",
        "claim_supported": "Third-party MCP server implementation for BigCommerce REST API integration supporting products, customers, and orders.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:49:57.080788+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 44,
    "identity": {
      "name": "Salesforce Commerce Cloud",
      "category": "Ecommerce",
      "one_line_description": "Enterprise commerce platform supporting B2C and B2B storefronts, order management, and headless commerce through the Salesforce Commerce API (SCAPI) and legacy Open Commerce API (OCAPI)."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key"
      ],
      "details": "Salesforce Commerce Cloud secures its APIs with OAuth 2.0 via SLAS (Shopper APIs) or Salesforce Account Manager (Data and Admin APIs), sent as Authorization: Bearer <token>.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Access to Salesforce Commerce Cloud APIs and instances requires an active enterprise instance or subscription (e.g., configuring Business Manager and tenant credentials).",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Exposes REST API products including the modern Salesforce Commerce API (SCAPI) and legacy Open Commerce API (OCAPI), alongside an official Node.js SDK (commerce-sdk).",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/brinzl/commercecloud-mcp-server",
      "maintainer": "brinzl",
      "details": "Third-party community MCP servers exist (such as commercecloud-mcp-server by brinzl and salesforce-commerce-mcp by vinkius-labs), but there is no official Salesforce-maintained MCP server.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/brinzl/commercecloud-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/brinzl/commercecloud-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/brinzl/commercecloud-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "APIs and SDKs are thoroughly documented with OpenAPI specs and Node.js SDKs, but integration requires a provisioned Salesforce Commerce Cloud tenant/instance, making it dependent on paid enterprise access.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://rhino-inquisitor.com/salesforce-b2c-commerce-cloud-documentation/",
        "source_title": "Salesforce B2C Commerce Cloud Documentation",
        "claim_supported": "Salesforce Commerce Cloud developer documentation structure, developer center, and SCAPI/OCAPI details.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:50:16.815495+00:00"
      },
      {
        "source_url": "https://github.com/salesforcecommercecloud/commerce-sdk",
        "source_title": "GitHub - SalesforceCommerceCloud/commerce-sdk \u00b7 GitHub",
        "claim_supported": "Official Node.js SDK for Salesforce B2C Commerce platform APIs.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:50:18.753101+00:00"
      },
      {
        "source_url": "https://apis.io/security/salesforce-commerce-cloud/salesforce-commerce-cloud-authentication",
        "source_title": "Salesforce Commerce Cloud API Authentication | APIs.io",
        "claim_supported": "Authentication scheme details using OAuth 2.0 access tokens from SLAS or Salesforce Account Manager.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:50:20.531708+00:00"
      },
      {
        "source_url": "https://apis.io/providers/salesforce-commerce-cloud",
        "source_title": "Salesforce Commerce Cloud API \u2014 Docs, Endpoints & OpenAPI | APIs.io",
        "claim_supported": "Overview of SCAPI and OCAPI REST APIs, developer resources, and platform description.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T12:50:22.649542+00:00"
      },
      {
        "source_url": "https://github.com/brinzl/commercecloud-mcp-server",
        "source_title": "GitHub - brinzl/commercecloud-mcp-server: \ud83e\udd16 An MCP server that helps connect your AI applications with your Salesforce Commerce Cloud instance",
        "claim_supported": "Community MCP server connecting AI applications to Salesforce Commerce Cloud via OCAPI.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:50:25.830000+00:00"
      },
      {
        "source_url": "https://github.com/vinkius-labs/salesforce-commerce-mcp",
        "source_title": "GitHub - vinkius-labs/salesforce-commerce-mcp: Vinkius Edge enterprise Model Context Protocol (MCP) server for Salesforce B2C Commerce Cloud integration.",
        "claim_supported": "Community/third-party MCP server for Salesforce B2C Commerce Cloud integration.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:50:27.613988+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 45,
    "identity": {
      "name": "Magento (Adobe Commerce)",
      "category": "Ecommerce",
      "one_line_description": "Enterprise-grade eCommerce platform offering comprehensive REST and GraphQL APIs for catalog, orders, customers, and inventory management."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "JWT or bearer token",
        "Other"
      ],
      "details": "Adobe Commerce REST APIs support OAuth 1.0a, tokens for mobile apps, and login credentials for administrators and customers. Adobe Commerce as a Cloud Service uses Adobe Identity Management Service (IMS) requiring IMS Access Tokens. Bearer tokens are also used for MCP integration modules.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Magento Open Source is free and downloadable, and APIs can be tested locally or via self-managed developer instances without paid plan dependencies.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "GraphQL"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Provides extensive REST and GraphQL APIs covering catalog management, orders, customers, inventory, shipping, and payments.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/magendooro/magemcp",
      "maintainer": "Magendoo, Codexpect, and Magebit",
      "details": "Multiple third-party open source Model Context Protocol (MCP) servers exist for Magento 2 / Adobe Commerce, such as Magegle/MageMCP, Codexpect adobe-commerce-mcp, and Magebit magento2-mcp-module.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/magendooro/magemcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/magendooro/magemcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/magendooro/magemcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Well-documented REST and GraphQL endpoints alongside available third-party MCP modules make building integrations straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developer.adobe.com/commerce/webapi/rest/",
        "source_title": "REST API Overview",
        "claim_supported": "Adobe Commerce provides REST API endpoints supporting OAuth 1.0a, tokens, login credentials, and Adobe IMS.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:50:44.767111+00:00"
      },
      {
        "source_url": "https://apis.io/apis/magento/magento-orders-api",
        "source_title": "magento Orders API \u2014 OpenAPI & Docs | APIs.io",
        "claim_supported": "Magento REST Orders API provides endpoints for order retrieval, status updates, cancellation, and item management.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:50:46.836481+00:00"
      },
      {
        "source_url": "https://github.com/magendooro/magemcp",
        "source_title": "GitHub - magendooro/magemcp",
        "claim_supported": "MageMCP connects AI agents to Magento 2 via REST and GraphQL APIs.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:50:57.519429+00:00"
      },
      {
        "source_url": "https://github.com/magebitcom/magento2-mcp-module",
        "source_title": "GitHub - magebitcom/magento2-mcp-module",
        "claim_supported": "Extensible Model Context Protocol server module for Magento 2.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:51:01.280522+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 46,
    "identity": {
      "name": "Squarespace",
      "category": "Ecommerce",
      "one_line_description": "All-in-one website building, hosting, and e-commerce platform exposing Commerce REST APIs for products, orders, inventory, and transactions."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "Squarespace Commerce APIs accept two credential types over the Authorization: Bearer <token> wire format: merchant-generated API keys or OAuth 2.0 access tokens.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "API keys require the Commerce Advanced plan (at about $52/mo), while OAuth extensions need developer-partner approval.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks"
      ],
      "api_breadth": "moderate",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "Exposes Commerce REST APIs covering products, orders, inventory, and transactions, along with a Webhook Subscriptions API.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/BusyBee3333/squarespace-mcp-2026-complete",
      "maintainer": "BusyBee3333",
      "details": "Squarespace has not published an official MCP server; however, third-party repositories such as squarespace-mcp-2026-complete wrap the Squarespace API.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/BusyBee3333/squarespace-mcp-2026-complete",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/BusyBee3333/squarespace-mcp-2026-complete",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/BusyBee3333/squarespace-mcp-2026-complete).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access",
        "Partner access",
        "Weak documentation"
      ],
      "justification": "API keys are gated behind the Commerce Advanced plan (~$52/mo), OAuth extensions require manual review and developer-partner approval, and there is no official SDK.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.squarespace.com/commerce-apis/overview",
        "source_title": "Squarespace Developer Platform: APIs, Apps, and Docs",
        "claim_supported": "Squarespace exposes Commerce REST APIs for analytics, contacts, discounts, inventory, orders, products, profiles, transactions, and webhooks.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:51:18.594702+00:00"
      },
      {
        "source_url": "https://supergood.ai/api-report-card/squarespace",
        "source_title": "Squarespace API: Grade C+ | The API Report Card",
        "claim_supported": "API keys require the Commerce Advanced plan at about $52/mo, OAuth extensions need developer-partner approval, and there is no official SDK.",
        "source_type": "API Report Card",
        "retrieved_timestamp": "2026-11-23T12:51:26.536828+00:00"
      },
      {
        "source_url": "https://apis.io/security/squarespace/squarespace-authentication",
        "source_title": "Squarespace API Authentication | APIs.io",
        "claim_supported": "Every request carries Authorization: Bearer <token>, using either a merchant-generated API key or an OAuth 2.0 access token.",
        "source_type": "API Security Profile",
        "retrieved_timestamp": "2026-11-23T12:51:28.543732+00:00"
      },
      {
        "source_url": "https://github.com/BusyBee3333/squarespace-mcp-2026-complete",
        "source_title": "GitHub - BusyBee3333/squarespace-mcp-2026-complete: MCP server for Squarespace API",
        "claim_supported": "Third-party MCP server exists for Squarespace API integration.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:51:35.619728+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 47,
    "identity": {
      "name": "Ecwid",
      "category": "Ecommerce",
      "one_line_description": "Ecwid provides a JSON REST API for managing online store data including products, categories, orders, customers, discount coupons, payment and shipping methods, application data, and storefront settings."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key"
      ],
      "details": "Uses OAuth 2.0 authorization for external and native apps, and API tokens (Secret token / access tokens) generated via custom app settings for store authentication.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Requires access to the Ecwid Admin Panel and app creation, typically requiring an active Ecwid store subscription or plan to configure custom apps and retrieve tokens.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Offers a comprehensive JSON REST API supporting batch requests, storefront JavaScript SDK, and management endpoints for store profile, orders, products, categories, customers, and discounts.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/HelpCode-ai/ecommerce-mcp-server",
      "maintainer": "HelpCode-ai",
      "details": "Found in a third-party open source ecommerce MCP server adapter repository (ecommerce-mcp-server) which integrates Ecwid via environment variables ECWID_STORE_ID and ECWID_TOKEN.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/HelpCode-ai/ecommerce-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/HelpCode-ai/ecommerce-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/HelpCode-ai/ecommerce-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Clear REST API documentation, standard OAuth2/Token authentication mechanisms, and availability of community/third-party MCP adapters make building integrations straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/Ecwid/ecwid-api-docs/blob/master/README.md",
        "source_title": "ecwid-api-docs/README.md at master \u00b7 Ecwid/ecwid-api-docs \u00b7 GitHub",
        "claim_supported": "Ecwid REST API documentation and endpoints overview.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:51:55.837043+00:00"
      },
      {
        "source_url": "https://docs.ecwid.com/api-reference",
        "source_title": "REST API overview | REST API Reference | Ecwid Documentation",
        "claim_supported": "Ecwid REST API allows access and management of store data using OAuth 2.0 and rate limits of up to 600 requests per minute per token.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:51:58.302063+00:00"
      },
      {
        "source_url": "https://apis.io/apis/ecwid/rest-api",
        "source_title": "Ecwid REST API (Ecwid by Lightspeed) \u2014 OpenAPI & Docs | APIs.io",
        "claim_supported": "JSON REST API for managing Ecwid store data authenticated via OAuth 2.0 access tokens.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:52:00.187919+00:00"
      },
      {
        "source_url": "https://github.com/Ecwid/ecwid-api-docs/blob/master/includes/_authentication.md",
        "source_title": "ecwid-api-docs/includes/_authentication.md at master \u00b7 Ecwid/ecwid-api-docs \u00b7 GitHub",
        "claim_supported": "Details on native and external apps using OAuth2 and JavaScript SDK for authentication.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:52:05.398456+00:00"
      },
      {
        "source_url": "https://litextension.com/migration-guide/get-api-ecwid.html",
        "source_title": "Ecwid API Integration: How to Get Your API Key | 2026 Update",
        "claim_supported": "Instructions to log in to Ecwid Admin Panel, create a custom app, configure permissions, and retrieve the secret token.",
        "source_type": "Migration Guide",
        "retrieved_timestamp": "2026-11-23T12:52:07.208813+00:00"
      },
      {
        "source_url": "https://github.com/HelpCode-ai/ecommerce-mcp-server/blob/main/satellite.json",
        "source_title": "ecommerce-mcp-server/satellite.json at main \u00b7 HelpCode-ai/ecommerce-mcp-server \u00b7 GitHub",
        "claim_supported": "Ecwid MCP server configuration using ECWID_STORE_ID and ECWID_TOKEN.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:52:08.800718+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 48,
    "identity": {
      "name": "Gumroad",
      "category": "Ecommerce",
      "one_line_description": "Gumroad provides a REST API and webhooks allowing creators to manage products, offer codes, variants, sales notifications, licenses, and custom fields."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key"
      ],
      "details": "The API uses OAuth 2.0 for authentication and requires an access token (generated via app registration under account settings > Advanced or via OAuth device login).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can register applications or generate access tokens directly from their Gumroad account settings under the Advanced tab without needing explicit paid subscription gating for API access.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Gumroad exposes a v2 REST API (https://api.gumroad.com/v2/) covering products, sales, subscribers, licenses, and offer codes, along with webhook support and community/third-party CLI or MCP packages.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/rmarescu/gumroad-mcp",
      "maintainer": "rmarescu",
      "details": "Multiple third-party Model Context Protocol (MCP) server implementations exist (e.g., rmarescu/gumroad-mcp and LiZhuBin/gumroad-mcp) enabling MCP-compatible clients like Claude Desktop to interact with the Gumroad API.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/rmarescu/gumroad-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/rmarescu/gumroad-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/rmarescu/gumroad-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Gumroad provides a well-documented REST API v2 with straightforward OAuth token authentication, standard JSON error responses, webhook support, and existing CLI/MCP tools.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://rollout.com/integration-guides/gumroad/api-essentials",
        "source_title": "Gumroad API Essentials",
        "claim_supported": "Gumroad uses a v2 REST API with OAuth 2.0 authentication, JSON responses, and webhook support.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:52:28.139431+00:00"
      },
      {
        "source_url": "https://nocodeapi.com/docs/gumroad-api/",
        "source_title": "Gumroad API - NoCodeAPI",
        "claim_supported": "Endpoints include list products, sales, subscribers, verify license, and enable/disable license.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:52:37.313482+00:00"
      },
      {
        "source_url": "https://github.com/antiwork/gumroad-cli",
        "source_title": "GitHub - antiwork/gumroad-cli: CLI for the Gumroad API \u00b7 GitHub",
        "claim_supported": "Gumroad CLI supports seller and admin authentication, products, sales, subscribers, files, payouts, licenses, and offercodes.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:52:42.028010+00:00"
      },
      {
        "source_url": "https://github.com/rmarescu/gumroad-mcp",
        "source_title": "GitHub - rmarescu/gumroad-mcp: A Model Context Protocol (MCP) server implementation for Gumroad API \u00b7 GitHub",
        "claim_supported": "A third-party Model Context Protocol server implementation enables Claude Desktop to interact with Gumroad products, sales, and offer codes using an access token generated from account settings > Advanced.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:52:43.722389+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 49,
    "identity": {
      "name": "Amazon Selling Partner",
      "category": "Ecommerce",
      "one_line_description": "The Amazon Selling Partner API (SP-API) is a REST-based API enabling sellers and vendors to programmatically access their store data for orders, shipments, payments, listings, and more."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key"
      ],
      "details": "Authentication uses Login with Amazon (LWA), Amazon's implementation of OAuth 2.0, utilizing client ID, client secret, and refresh tokens to acquire LWA access tokens or Restricted Data Tokens (RDT).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "To create an SP-API developer profile and access Developer Central, users must have a Professional selling account which costs $39.99/month plus selling fees.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides a comprehensive REST-based API covering orders, inventory, pricing, catalog, reporting, and fulfillment with official SDK generation support and notifications/webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/amzn/selling-partner-api-samples",
      "maintainer": "Amazon Selling Partner Developer Services (Tong S., Solutions Architect)",
      "details": "Amazon provides an official Local MCP for SP-API via npm package @amazon-sp-api-release/sp-api-dev-mcp, featuring development assistants and workflow servers for AI coding assistants.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/amzn/selling-partner-api-samples",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/amzn/selling-partner-api-samples",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/amzn/selling-partner-api-samples).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access",
        "Authentication complexity"
      ],
      "justification": "While robust documentation, official SDKs, and an official MCP are available, integration requires a paid Professional selling account, approval via Developer Central, and complex LWA OAuth 2.0 token management.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://sell.amazon.com/developers",
        "source_title": "Selling Partner API (SP-API) | Sell on Amazon",
        "claim_supported": "SP-API is a REST-based API that requires a Professional selling account ($39.99/month + selling fees) and access via Developer Central.",
        "source_type": "Official Docs / Pricing Page",
        "retrieved_timestamp": "2026-11-23T12:53:09.951230+00:00"
      },
      {
        "source_url": "https://developer-docs.amazon/sp-api/docs/connecting-to-the-selling-partner-api",
        "source_title": "Connect to the SP-API",
        "claim_supported": "Authentication is performed via Login with Amazon (LWA) OAuth 2.0 tokens, client credentials, and refresh tokens.",
        "source_type": "Official API Reference",
        "retrieved_timestamp": "2026-11-23T12:53:21.367089+00:00"
      },
      {
        "source_url": "https://github.com/amzn/selling-partner-api-samples/discussions/382",
        "source_title": "Now Available: Local MCP for SP-API \u2014 AI-powered Selling Partner API development",
        "claim_supported": "Official Amazon release of Local MCP for SP-API packages (@amazon-sp-api-release/sp-api-dev-mcp) providing dev assistant and workflow servers.",
        "source_type": "Official GitHub Discussion / Release",
        "retrieved_timestamp": "2026-11-23T12:53:32.942353+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 50,
    "identity": {
      "name": "FanBasis",
      "category": "Ecommerce",
      "one_line_description": "A comprehensive creator economy platform that provides membership and subscription management, digital product sales, payment processing, and monetization tools for content creators, influencers, and digital entrepreneurs."
    },
    "authentication": {
      "auth_methods": [
        "API key"
      ],
      "details": "API keys can be created by going to Account > API Keys in the platform.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Unknown",
      "details": "Developer documentation is protected by a password login prompt, so exact self-serve versus gated signup terms for the API are not explicitly detailed outside of account dashboard access.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks"
      ],
      "api_breadth": "moderate",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "FanBasis offers API keys and supports webhook handling for subscription and payment events, as evidenced by integrations with Emergent and Tarvent.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": null,
      "details": "No Model Context Protocol servers or references specifically for FanBasis were found in the provided documentation.",
      "confidence": "High",
      "original_extracted_status": "No verified MCP found",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "No verified official, third-party, or community MCP repository discovered.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [],
      "justification": "FanBasis provides API keys and webhooks enabling connections with external systems like Zapier, Make, and custom applications, though developer documentation is locked behind a password wall.",
      "confidence": "Medium"
    },
    "evidence": [
      {
        "source_url": "https://dev-docs.fanbasis.com/login.html",
        "source_title": "Login - FanBasis API Docsv3",
        "claim_supported": "FanBasis developer documentation requires a password login.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:53:50.877058+00:00"
      },
      {
        "source_url": "https://emergent.sh/integrations/fanbasis",
        "source_title": "FanBasis Integration with Emergent",
        "claim_supported": "FanBasis provides creator monetization workflows, subscription data, payments, and webhook handlers for events.",
        "source_type": "Integration Partner",
        "retrieved_timestamp": "2026-11-23T12:53:52.327923+00:00"
      },
      {
        "source_url": "https://tarvent.com/integrations/fanbasis",
        "source_title": "Tarvent | FanBasis Integration",
        "claim_supported": "FanBasis allows users to generate API keys under Account > API Keys to connect with external platforms.",
        "source_type": "Integration Partner",
        "retrieved_timestamp": "2026-11-23T12:53:56.765558+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 51,
    "identity": {
      "name": "DataForSEO",
      "category": "Data, SEO and Scraping",
      "one_line_description": "DataForSEO provides comprehensive SEO and digital marketing data APIs, covering SERP results, keyword metrics, backlink data, on-page audits, and domain analytics."
    },
    "authentication": {
      "auth_methods": [
        "Basic authentication",
        "OAuth2"
      ],
      "details": "The v3 REST API uses HTTP Basic Authentication exclusively via an API login and password encoded in Base64 passed in the Authorization header. OAuth 2.0 exists on the hosted MCP server (https://mcp.dataforseo.com), supporting the authorizationCode flow.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "New accounts can sign up through self-serve and receive a $1 trial credit covering initial calls before requiring a paid top-up.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Provides a comprehensive REST API across 12 distinct API modules (SERP, Keywords, Backlinks, OnPage, etc.), an official Python client, and Model Context Protocol (MCP) servers.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "DataForSEO",
      "details": "DataForSEO provides an official Model Context Protocol server via a hosted endpoint at https://mcp.dataforseo.com/mcp and publishes a TypeScript package on npm (dataforseo-mcp-server).",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Clear REST API documentation, standard Basic Authentication, official Python and npm client libraries, and official MCP support make integration straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/dataforseo/PythonClient",
        "source_title": "GitHub - dataforseo/PythonClient: Official DataForSEO python client",
        "claim_supported": "Official Python client and REST API design covering 12 sections.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:16:37.578284+00:00"
      },
      {
        "source_url": "https://apis.io/security/dataforseo/dataforseo-authentication",
        "source_title": "DataForSEO API Authentication | APIs.io",
        "claim_supported": "Basic authentication details for REST API and OAuth2 details for MCP server.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:16:39.648906+00:00"
      },
      {
        "source_url": "https://dataforseo.com/help-center/how-to-authenticate-with-dataforseo-google-search-serp-api-api-key-setup-and-code-examples",
        "source_title": "How to Authenticate with DataForSEO Google Search SERP API: API Key Setup and Code Examples \u2013 DataForSEO",
        "claim_supported": "Self-serve trial details ($1 trial credit) and Base64 basic authentication setup.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:16:44.315842+00:00"
      },
      {
        "source_url": "https://docs.dataforseo.com/v3/auth/",
        "source_title": "Authentication \u2013 DataForSEO API v.3",
        "claim_supported": "HTTP Basic Authentication specification and header formatting.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:16:47.869898+00:00"
      },
      {
        "source_url": "https://easymcpai.com/blog/dataforseo-mcp",
        "source_title": "DataForSEO MCP: Connect SEO Data to Claude and Any AI (2026 Guide)",
        "claim_supported": "Official MCP server implementation, hosted endpoint URL, and npm package details.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:16:53.316537+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 52,
    "identity": {
      "name": "SE Ranking",
      "category": "Data, SEO and Scraping",
      "one_line_description": "SE Ranking is a comprehensive SEO platform providing keyword research, competitor analysis, website audits, backlink monitoring, and search visibility tracking through a unified API."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token"
      ],
      "details": "Authenticated via an API key passed either in the Authorization header using the 'Token YOUR_API_KEY' scheme or via the 'apikey' query parameter.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "All Essential, Pro, Business, Core, Growth, and Enterprise plans include Data API access with a monthly credit allowance. Additional credits can be purchased via pay-as-you-go packs, API add-ons, or standalone plans.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Provides a unified API covering Data API and Project API endpoints across 22 resources and 225 operations, along with official community node support such as the n8n integration.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/TeamDay-AI/se-ranking-mcp",
      "maintainer": "SE Ranking / Community",
      "details": "Official SE Ranking MCP server with Docker support connecting AI assistants (Claude, Gemini, ChatGPT) to SE Ranking's SEO data and project management APIs.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/TeamDay-AI/se-ranking-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/TeamDay-AI/se-ranking-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/TeamDay-AI/se-ranking-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API is well-documented with clear endpoint specifications, supports standard token authentication, provides an official Postman collection, and has robust integration support including an official MCP server and n8n nodes.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://seranking.com/api/data/keyword-research/",
        "source_title": "Keyword Research - SE Ranking API Documentation",
        "claim_supported": "Provides endpoint specifications, credit costs, and request parameters for keyword metrics.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:54:16.929626+00:00"
      },
      {
        "source_url": "https://seranking.com/api/data/getting-started/",
        "source_title": "Getting started - SE Ranking Data API Documentation",
        "claim_supported": "Details API authentication using the Authorization header (Token scheme) or apikey query parameter, and lists per-request and per-record credit costs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:54:18.967157+00:00"
      },
      {
        "source_url": "https://seranking.com/api/how-to-get-api/",
        "source_title": "Getting API access - SE Ranking API Documentation",
        "claim_supported": "Explains the two API layers (Data API and Project API) and outlines credit inclusions per subscription plan.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:54:20.996676+00:00"
      },
      {
        "source_url": "https://github.com/seranking/n8n-nodes-seranking",
        "source_title": "GitHub - seranking/n8n-nodes-seranking",
        "claim_supported": "Official n8n community node supporting SE Ranking's unified API with 225 operations across 22 resources.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:54:22.922376+00:00"
      },
      {
        "source_url": "https://github.com/TeamDay-AI/se-ranking-mcp",
        "source_title": "GitHub - TeamDay-AI/se-ranking-mcp",
        "claim_supported": "Official/forked MCP server connecting AI assistants to SE Ranking's APIs.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:54:27.167579+00:00"
      },
      {
        "source_url": "https://github.com/fastmcp-me/best-seo-mcp",
        "source_title": "GitHub - fastmcp-me/best-seo-mcp",
        "claim_supported": "Lists SE Ranking MCP features, Docker support, and client compatibility.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:54:28.958902+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 53,
    "identity": {
      "name": "Ahrefs",
      "category": "Data, SEO and Scraping",
      "one_line_description": "SEO data provider offering API v3 endpoints and model context protocol (MCP) servers for backlinks, organic search, keywords, and domain metrics."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "Ahrefs API v3 uses a bearer token format (Authorization: Bearer YOUR_API_KEY) created in Account settings / API keys. MCP auth uses an OAuth consent flow or manually minted MCP keys.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Ahrefs API and remote MCP are available on paid plans (Lite and up) and consume monthly API units from the user's active subscription, with no permanently free general API tier outside of limited test queries.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Ahrefs exposes a REST API (API v3) and webhook management, with official local and remote MCP integrations and client libraries.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/ahrefs/ahrefs-mcp-server",
      "maintainer": "Ahrefs",
      "details": "Ahrefs provides a remote hosted MCP server as well as a local npm package (@ahrefs/mcp) designed for AI assistants like Claude and ChatGPT.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/ahrefs/ahrefs-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/ahrefs/ahrefs-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/ahrefs/ahrefs-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access",
        "Restricted API scopes"
      ],
      "justification": "API v3 and MCP servers are fully documented and functional, but require an active paid Ahrefs workspace subscription, API units, and correct workspace admin scopes.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.ahrefs.com/en/ahrefs-connect/docs/api-guide",
        "source_title": "API guide | Ahrefs for Developers",
        "claim_supported": "API v3 lets you pull organic and backlinks data, keyword metrics, and consumes API units.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:54:45.142019+00:00"
      },
      {
        "source_url": "https://apitracker.io/a/ahrefs",
        "source_title": "Ahrefs API - Documentation & Integration",
        "claim_supported": "Ahrefs API v3 exposes SEO data such as backlinks, organic search and keyword metrics, with webhook support.",
        "source_type": "API Catalog",
        "retrieved_timestamp": "2026-11-23T12:54:46.556901+00:00"
      },
      {
        "source_url": "https://mindcloud.co/docs/universal/rest/ahrefs/latest",
        "source_title": "Ahrefs API Documentation - Universal API for 3,400+ Apps",
        "claim_supported": "Comprehensive list of Ahrefs actions available through API integration wrappers.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:54:49.293681+00:00"
      },
      {
        "source_url": "https://integrations.sh/ahrefs.com/",
        "source_title": "ahrefs.com \u2014 integrations",
        "claim_supported": "Ahrefs exposes a REST API at api.ahrefs.com/v3 authenticated with bearer API keys and a hosted OAuth-capable MCP server.",
        "source_type": "Integration Registry",
        "retrieved_timestamp": "2026-11-23T12:54:51.683122+00:00"
      },
      {
        "source_url": "https://docs.ahrefs.com/en/api/docs/api-keys-creation-and-management",
        "source_title": "API keys creation and management | Ahrefs for Developers",
        "claim_supported": "API key usage requires Authorization: Bearer YOUR_API_KEY header, created in workspace settings by owners and admins.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:54:52.687174+00:00"
      },
      {
        "source_url": "https://www.scalekit.com/blog/ahrefs-mcp-vs-api",
        "source_title": "Ahrefs MCP vs API for AI Agents: Which to Build Against",
        "claim_supported": "Ahrefs runs a hosted remote MCP server and REST API v3, available on paid plans from Lite and up.",
        "source_type": "Blog / Technical Analysis",
        "retrieved_timestamp": "2026-11-23T12:54:53.824406+00:00"
      },
      {
        "source_url": "https://github.com/universal-mcp/ahrefs",
        "source_title": "GitHub - universal-mcp/ahrefs \u00b7 GitHub",
        "claim_supported": "Implementation of an Ahrefs Universal MCP server using the Universal MCP framework.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:54:55.655799+00:00"
      },
      {
        "source_url": "https://github.com/ahrefs/ahrefs-mcp-server",
        "source_title": "GitHub - ahrefs/ahrefs-mcp-server: Official Ahrefs MCP Server \u00b7 GitHub",
        "claim_supported": "Official Ahrefs local MCP server repository for connecting AI assistants via npm install @ahrefs/mcp.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:54:57.455119+00:00"
      },
      {
        "source_url": "https://github.com/fastmcp-me/ahrefs-mcp-server-ahrefs/blob/main/README.md",
        "source_title": "ahrefs-mcp-server-ahrefs/README.md at main \u00b7 fastmcp-me/ahrefs-mcp-server-ahrefs \u00b7 GitHub",
        "claim_supported": "Instructions for installing the local Ahrefs Model Context Protocol server.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:54:59.397825+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 54,
    "identity": {
      "name": "MrScraper",
      "category": "Data, SEO and Scraping",
      "one_line_description": "MrScraper is a web scraping API and platform offering web page retrieval (HTML, Markdown, screenshots), brand/JSON extraction, web search, and account management tools."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "The API uses token authentication passed via the x-api-token header or standard RFC 6750 Authorization Bearer headers for marketplace endpoints. The hosted MCP server supports OAuth 2.1 browser sign-in and bearer token authorization.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Users can sign up directly on mrscraper.com and obtain API tokens from the dashboard. Subscription plans and billing details are managed self-serve.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides REST API endpoints for web search, scraper operations, and platform management, along with official Python and Node.js SDKs, CLI tools, and webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/mrscraper-com/mrscraper-mcp",
      "maintainer": "MrScraper Team",
      "details": "MrScraper provides an official Model Context Protocol server exposing seven services through hosted HTTP or local stdio, supporting OAuth 2.1 and API token authentication.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/mrscraper-com/mrscraper-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/mrscraper-com/mrscraper-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/mrscraper-com/mrscraper-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "MrScraper features comprehensive public documentation, official SDKs, an official MCP server, clear API key and OAuth authentication instructions, and self-serve onboarding.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.mrscraper.com/docs/api/overview",
        "source_title": "API Overview | MrScraper Documentation",
        "claim_supported": "The MrScraper API is built on REST principles, accepts JSON payloads, and returns JSON responses.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:55:21.544017+00:00"
      },
      {
        "source_url": "https://docs.mrscraper.com/docs/api/authentication",
        "source_title": "Authentication | MrScraper Documentation",
        "claim_supported": "All API endpoints require authentication using an API token passed in the x-api-token header or via Authorization Bearer headers for marketplace endpoints.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:55:23.615504+00:00"
      },
      {
        "source_url": "https://docs.mrscraper.com/docs/getting-started/overview",
        "source_title": "Overview | MrScraper Documentation",
        "claim_supported": "MrScraper provides CLI tools, Python SDK, Node.js SDK, MCP server, webhooks, and integrations for automation.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:55:27.514675+00:00"
      },
      {
        "source_url": "https://github.com/mrscraper-com/mrscraper-mcp",
        "source_title": "GitHub - mrscraper-com/mrscraper-mcp: Official MrScraper MCP server",
        "claim_supported": "The official MrScraper MCP server exposes seven services (status, scrapeHtml, scrapeMarkdown, getScreenshot, scrapeBrand, scrapeJson, webSearch) via hosted HTTP or local stdio.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:55:37.207024+00:00"
      },
      {
        "source_url": "https://docs.mrscraper.com/docs/getting-started/mcp-server",
        "source_title": "MCP Server | MrScraper Documentation",
        "claim_supported": "The hosted MCP endpoint supports OAuth 2.1 browser sign-in and tool scopes like scrape:read and account:read.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:55:39.722506+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 55,
    "identity": {
      "name": "Apify",
      "category": "Data, SEO and Scraping",
      "one_line_description": "Cloud platform for web scraping, data extraction, and browser automation providing pre-made scrapers (Actors) and custom automation tools via a comprehensive REST API and official client libraries."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "Authentication is performed using a secret API token passed via the Authorization HTTP header (as Bearer <token>) or as a query parameter (?token=<token>). The MCP server also supports OAuth2 authentication.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Users can create a free account without requiring a credit card, allowing them to access the platform and run API calls or test tools under free tier limits.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Apify offers a comprehensive REST API, official client libraries for JavaScript/Node.js, Python, Go, and experimental clients for PHP, Java, .NET, and Rust, as well as webhook notifications and OpenAPI schema definitions.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/apify/apify-mcp-server",
      "maintainer": "Apify",
      "details": "Apify provides an official Model Context Protocol (MCP) server available at https://mcp.apify.com which connects AI agents to thousands of pre-made scrapers and tools from the Apify Store.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/apify/apify-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/apify/apify-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/apify/apify-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Apify provides public REST endpoints, complete OpenAPI specifications, official SDKs in multiple languages, and an official MCP server with clear documentation and self-serve access, making integration extremely straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.apify.com/api",
        "source_title": "Apify Documentation",
        "claim_supported": "Apify API is built around HTTP REST and offers official client libraries for JavaScript, Python, Go, and experimental ones.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:55:58.293262+00:00"
      },
      {
        "source_url": "https://docs.apify.com/api/v2",
        "source_title": "Apify API | Apify Documentation",
        "claim_supported": "Authentication details via Bearer token in the Authorization header or token query parameter.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:55:59.641033+00:00"
      },
      {
        "source_url": "https://github.com/apify/apify-docs",
        "source_title": "GitHub - apify/apify-docs",
        "claim_supported": "Home of Apify documentation and client repositories.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:56:01.460656+00:00"
      },
      {
        "source_url": "https://docs.apify.com/integrations/api",
        "source_title": "API integration | Platform | Apify Documentation",
        "claim_supported": "Details on managing personal and organization API tokens and permission scopes.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:56:02.877029+00:00"
      },
      {
        "source_url": "https://docs.apify.com/api/v2/getting-started",
        "source_title": "Get started with Apify API | Apify Documentation",
        "claim_supported": "API workflow, endpoints for running actors synchronously and asynchronously, datasets, and key-value stores.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:56:04.106068+00:00"
      },
      {
        "source_url": "https://github.com/apify/apify-mcp-server",
        "source_title": "GitHub - apify/apify-mcp-server",
        "claim_supported": "Official Apify Model Context Protocol (MCP) server hosted at https://mcp.apify.com supporting OAuth and Bearer tokens.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:56:05.847192+00:00"
      },
      {
        "source_url": "https://github.com/apify/tester-mcp-client",
        "source_title": "GitHub - apify/tester-mcp-client",
        "claim_supported": "Free tier accessibility without credit card and pricing details for running MCP tools.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:56:07.800498+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 56,
    "identity": {
      "name": "Firecrawl",
      "category": "Data, SEO and Scraping",
      "one_line_description": "The web crawling, scraping, and search API for AI agents that turns the live web into clean Markdown or structured JSON."
    },
    "authentication": {
      "auth_methods": [
        "JWT or bearer token",
        "OAuth2"
      ],
      "details": "Authentication uses an Authorization header with a Bearer token (e.g., Authorization: Bearer fc-YOUR-API-KEY). OAuth is also supported for letting users connect their own accounts.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Users can create a free account to get direct API access with free tier credits (e.g., 500 credits), and certain endpoints also support keyless access without an account.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Firecrawl provides a comprehensive public API, official Python and Node SDKs, and supports webhooks/monitoring.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Official MCP",
      "repository_url": "https://github.com/firecrawl/firecrawl-mcp-server",
      "maintainer": "Firecrawl / Mendable",
      "details": "Official Firecrawl MCP server (firecrawl-mcp-server) brings search, scrape, interact, parse, crawl, map, and agent capabilities to any MCP-compatible client.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/firecrawl/firecrawl-mcp-server",
      "verified_status": "Official MCP",
      "verified_repository_url": "https://github.com/firecrawl/firecrawl-mcp-server",
      "verification_rationale": "Updated stale mendableai repository URL to the current official vendor repository under the firecrawl organization at https://github.com/firecrawl/firecrawl-mcp-server.",
      "evidence_type": "vendor-owned repository",
      "date_checked": "2026-11-23"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Firecrawl provides clear documentation, self-serve free tier access, official SDKs, an official Model Context Protocol (MCP) server, and keyless endpoints to get started immediately without complex setups.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.firecrawl.dev/api-reference/v2-introduction",
        "source_title": "Introduction - Firecrawl Docs",
        "claim_supported": "Base URL, authentication scheme using Bearer token, and keyless endpoints.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:17:06.808365+00:00"
      },
      {
        "source_url": "https://docs.firecrawl.dev/introduction",
        "source_title": "Introduction | Firecrawl",
        "claim_supported": "Keyless starting options, Python and Node SDKs, CLI, and MCP server features.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:17:08.634071+00:00"
      },
      {
        "source_url": "https://zackproser.com/blog/firecrawl-api-guide-2026",
        "source_title": "Firecrawl API Reference and Usage Guide (2026)",
        "claim_supported": "Free tier credits, endpoint details like /v1/scrape, /v1/batch/scrape, /v1/crawl, /v1/extract.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:17:11.043775+00:00"
      },
      {
        "source_url": "https://github.com/firecrawl/firecrawl-mcp-server",
        "source_title": "GitHub - firecrawl/firecrawl-mcp-server",
        "claim_supported": "Official Firecrawl MCP server details and hosted keyless/OAuth support.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:17:13.858290+00:00"
      },
      {
        "source_url": "https://github.com/firecrawl",
        "source_title": "Firecrawl \u00b7 GitHub",
        "claim_supported": "Core open-source repository, cloud API, CLI, skills, and ecosystem overview.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:17:17.710376+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 57,
    "identity": {
      "name": "Bright Data",
      "category": "Data, SEO and Scraping",
      "one_line_description": "A web data platform providing a global proxy network, pre-built Web Scraper APIs, SERP API, Web Unlocker, ready-made Datasets, and a Scraping Browser."
    },
    "authentication": {
      "auth_methods": [
        "API key"
      ],
      "details": "Bright Data platform utilizes an API key/token passed via the Authorization Bearer header or via proxy credentials.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Bright Data offers a recurring monthly free tier with 5,000 free requests per month and no credit card required.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Bright Data provides a REST platform API, a WebSocket API (Chrome DevTools Protocol endpoint for scraping browsers), official Python and Node.js SDKs, and an MCP server.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/brightdata/brightdata-mcp",
      "maintainer": "Bright Data",
      "details": "Bright Data maintains an official TypeScript Model Context Protocol (MCP) server providing web search, page scraping, structured data extraction, and browser automation.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/brightdata/brightdata-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/brightdata/brightdata-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/brightdata/brightdata-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Bright Data has an extensive public API, official SDKs in Python and Node.js, an official MCP server, and a self-serve free tier with documentation and quickstarts available.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/api-evangelist/brightdata",
        "source_title": "GitHub - api-evangelist/brightdata",
        "claim_supported": "Bright Data is a web data platform providing global proxy networks, Web Scraper APIs, SERP API, Web Unlocker, Datasets, and a Scraping Browser.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:56:23.312589+00:00"
      },
      {
        "source_url": "https://apis.io/providers/bright-data",
        "source_title": "Bright Data API \u2014 Docs, Pricing & OpenAPI | APIs.io",
        "claim_supported": "Bright Data combines proxy infrastructure with web-access APIs, a 350-dataset marketplace, and an MCP server exposing 60+ web-access tools.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T12:56:25.732319+00:00"
      },
      {
        "source_url": "https://docs.brightdata.com/introduction",
        "source_title": "Bright Data documentation - Bright Data Docs",
        "claim_supported": "Provides 5,000 free credits per month, no credit card required, and lists quickstarts for Python, Node.js, cURL, and MCP.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:56:29.154079+00:00"
      },
      {
        "source_url": "https://docs.brightdata.com/api-reference/authentication",
        "source_title": "Authentication - Bright Data Docs",
        "claim_supported": "Authentication uses API keys/tokens or native proxy credentials via Authorization Bearer headers.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:56:30.326636+00:00"
      },
      {
        "source_url": "https://github.com/brightdata/brightdata-mcp",
        "source_title": "GitHub - brightdata/brightdata-mcp",
        "claim_supported": "Bright Data provides an official Model Context Protocol server giving AI agents access to public web data.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:56:33.799818+00:00"
      },
      {
        "source_url": "https://www.mcpserverspot.com/servers/bright-data",
        "source_title": "Bright Data MCP Server - Features, Setup & Integration Guide | MCP Server Spot",
        "claim_supported": "Bright Data is an officially maintained MCP server developed by Bright Data in the Web category.",
        "source_type": "Directory",
        "retrieved_timestamp": "2026-11-23T12:56:39.739446+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 58,
    "identity": {
      "name": "Sherlock",
      "category": "Data, SEO and Scraping",
      "one_line_description": "Sherlock is an open-source command-line tool designed to find usernames across a wide range of social networks and websites."
    },
    "authentication": {
      "auth_methods": [
        "Unknown"
      ],
      "details": "Sherlock does not require API keys or login credentials for the sites it checks.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Sherlock is available as an open-source tool on GitHub and can be installed freely via PyPI, Docker, or various package managers.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "narrow",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "There is a community/project-associated REST API repository built on top of Django REST Framework (DRF) for the sherlock module, alongside CLI usage.",
      "confidence": "Medium"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/Burnsedia/sherlock-mcp",
      "maintainer": "Burnsedia",
      "details": "Community integrations exist such as Burnsedia/sherlock-mcp which provides a FastMCP integration for social media username searches using the Model Context Protocol.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/Burnsedia/sherlock-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/Burnsedia/sherlock-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/Burnsedia/sherlock-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Sherlock is open source, freely accessible, does not require API keys, and can be run locally via CLI or integrated using community MCP servers easily.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/sherlock-project/api",
        "source_title": "GitHub - sherlock-project/api: Api for sherlock module",
        "claim_supported": "A REST API built on top of Django REST Framework exists for the sherlock module.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:56:54.644713+00:00"
      },
      {
        "source_url": "https://bellingcat.gitbook.io/toolkit/more/all-tools/sherlock",
        "source_title": "Sherlock | Bellingcat's Online Investigation Toolkit",
        "claim_supported": "Sherlock is an open-source tool to find usernames across 400+ websites and does not require API keys or login credentials.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:56:58.987611+00:00"
      },
      {
        "source_url": "https://github.com/Burnsedia/sherlock-mcp",
        "source_title": "GitHub - Burnsedia/sherlock-mcp: Sherlock MCP Server",
        "claim_supported": "Community MCP server implementation exists for running Sherlock via Model Context Protocol.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:57:07.265671+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 59,
    "identity": {
      "name": "Waterfall.io",
      "category": "Data, SEO and Scraping",
      "one_line_description": "A B2B data API for go-to-market workflows combining 30+ data vendors to find people, enrich records, match emails, find phone numbers, verify email addresses, and check job changes."
    },
    "authentication": {
      "auth_methods": [
        "API key"
      ],
      "details": "Authenticate data and account API requests with your Waterfall API key in the x-api-key header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Documentation specifies to contact the team for API access and pricing, and error responses indicate account quotas and master key upgrades managed via account managers.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "Provides a comprehensive REST API covering search, enrichment, verification, webhooks, and account management endpoints.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": null,
      "details": "No official MCP server exists for Waterfall.io. (Note: Found third-party repositories like outreach-prospector-mcp, but they utilize Apollo, Snov, and Hunter rather than Waterfall.io).",
      "confidence": "High",
      "original_extracted_status": "No verified MCP found",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "No verified official, third-party, or community MCP repository discovered.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "The API is well-documented with clear endpoints and straightforward x-api-key authentication, but requires contacting sales/support for paid access and pricing.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://waterfall.mintlify.app/v1/authentication",
        "source_title": "Authentication - Waterfall.io API Documentation",
        "claim_supported": "Authentication uses the x-api-key header and requires contacting the team for access and pricing.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:57:29.624607+00:00"
      },
      {
        "source_url": "https://docs.waterfall.io/v1/introduction",
        "source_title": "Waterfall API introduction - Waterfall.io API Documentation",
        "claim_supported": "Lists endpoints available for prospector, contact sync, company sync, contact enrichment, and verification.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:57:33.159004+00:00"
      },
      {
        "source_url": "https://docs.waterfall.io/v1/faq",
        "source_title": "Waterfall API FAQ - Waterfall.io API Documentation",
        "claim_supported": "Describes Waterfall.io as a B2B data API combining 30+ vendors through one API for GTM workflows.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:57:34.179069+00:00"
      },
      {
        "source_url": "https://docs.waterfall.io/v1/api-keys-create",
        "source_title": "API Keys - Create - Waterfall.io API Documentation",
        "claim_supported": "Shows API endpoints for creating API keys and error codes like over quota and missing master key.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:57:36.679716+00:00"
      },
      {
        "source_url": "https://github.com/andrew4522-cr/outreach-prospector-mcp",
        "source_title": "GitHub - andrew4522-cr/outreach-prospector-mcp",
        "claim_supported": "Contains a third-party outreach prospector MCP server utilizing Apollo, Snov, and Hunter rather than Waterfall.io.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:57:41.144952+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 60,
    "identity": {
      "name": "Clay",
      "category": "Data, SEO and Scraping",
      "one_line_description": "Clay is a GTM data orchestration and workflow platform that enables users to combine data from 150+ providers, build enrichment tables, trigger webhooks, and interact via a public API and MCP servers."
    },
    "authentication": {
      "auth_methods": [
        "API key"
      ],
      "details": "Clay's Public API and programmatic surfaces authenticate using a Clay API key passed via the 'clay-api-key' header (or workspace API key / CLAY_API_KEY environment variable).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "While basic CLI and inbound webhooks are available across plans including free/trial, key programmatic features like the HTTP API column require Growth ($495/mo) or Enterprise tiers, and full developer platform Public API capabilities are gated behind paid or Enterprise plans depending on workspace configuration.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "moderate",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Clay exposes a public API at https://api.clay.com/public/v0 featuring an OpenAPI 3.1.0 spec with 13 operations, alongside inbound/outbound webhooks and a CLI tool.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/anthropics/knowledge-work-plugins",
      "maintainer": "Clay / Anthropic",
      "details": "Clay provides an official remote HTTP Model Context Protocol (MCP) server at https://api.clay.com/v3/mcp (and related packages like @clayhq/clay-mcp) enabling AI assistants like Claude to interact with Clay workflows and data.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/anthropics/knowledge-work-plugins",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/anthropics/knowledge-work-plugins",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/anthropics/knowledge-work-plugins).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "Clay offers a fully documented OpenAPI specification and public API endpoints, but full programmatic access and advanced capabilities require paid plan tiers (Growth/Enterprise).",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://pipeline.zoominfo.com/sales/clay-api",
        "source_title": "Clay API Review [August 2026]: Can You Build on It?",
        "claim_supported": "Overview of Clay's programmatic access points, inbound webhooks, and limitations.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:57:57.202998+00:00"
      },
      {
        "source_url": "https://enrow.io/en/blog/clay-api-integrations",
        "source_title": "Clay API and Integrations: Getting Data In, Out and Wired by Hand",
        "claim_supported": "Clay ships a public API at https://api.clay.com/public/v0 with a clay-api-key header and OpenAPI 3.1.0 spec.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:57:58.994013+00:00"
      },
      {
        "source_url": "https://developers.clay.com/quickstart",
        "source_title": "Quickstart - Clay docs",
        "claim_supported": "Developer access instructions and key creation using the clay CLI or UI.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:58:00.193168+00:00"
      },
      {
        "source_url": "https://developers.clay.com/public-api/authentication",
        "source_title": "Authentication - Clay docs",
        "claim_supported": "Every request to the Clay Public API requires a personal API key passed in the clay-api-key header.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:58:01.085303+00:00"
      },
      {
        "source_url": "https://frontal.so/gtm-apis/enrichment-apis/clay-api-review",
        "source_title": "Clay API review: what it is, and what it costs",
        "claim_supported": "Pricing and tier structures across Free, Launch, Growth, and Enterprise plans.",
        "source_type": "Pricing Page",
        "retrieved_timestamp": "2026-11-23T12:58:02.679508+00:00"
      },
      {
        "source_url": "https://explainx.ai/mcp-servers/clay",
        "source_title": "Clay \u2014 MCP server | explainx.ai | explainx.ai",
        "claim_supported": "Official Clay MCP server details using remote HTTP endpoint https://api.clay.com/v3/mcp.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:58:03.852737+00:00"
      },
      {
        "source_url": "https://mcp.so/servers/clay-mcp",
        "source_title": "Clay MCP Server: Tools, Setup & Config",
        "claim_supported": "Clay MCP Server configuration via npx @clayhq/clay-mcp@latest using CLAY_API_KEY.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:58:07.074917+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 61,
    "identity": {
      "name": "GitHub",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "GitHub provides a robust developer platform with a comprehensive REST API and Model Context Protocol (MCP) support for GitHub Copilot."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token",
        "Basic authentication"
      ],
      "details": "Token-based authentication is required for all authenticated API operations, using personal access tokens (classic or fine-grained), OAuth tokens, GitHub App installation tokens, or built-in GITHUB_TOKEN. Basic authentication is used for specific endpoints for GitHub Apps and OAuth apps (client ID and client secret).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can self-serve access the GitHub REST API and create personal access tokens or use GitHub CLI without prior approval.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "GitHub offers a versioned REST API fully described by an OpenAPI compliant document, supported by official SDKs (like Octokit.js) and GitHub CLI.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Official MCP",
      "repository_url": "https://github.com/github/github-mcp-server",
      "maintainer": "GitHub",
      "details": "GitHub provides built-in and verified official MCP servers (such as the GitHub MCP server for Copilot cloud agent and CLI) and reference implementations for Git and repository integrations.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/modelcontextprotocol/servers",
      "verified_status": "Official MCP",
      "verified_repository_url": "https://github.com/github/github-mcp-server",
      "verification_rationale": "Official first-party GitHub-maintained MCP server repository located at https://github.com/github/github-mcp-server (updating the stale reference under modelcontextprotocol/servers/tree/main/src/github).",
      "evidence_type": "vendor-owned repository",
      "date_checked": "2026-11-23"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "GitHub provides extensive documentation, self-serve developer access, public REST APIs described by OpenAPI specs, official SDKs like Octokit.js, and native Model Context Protocol integration.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.github.com/en/rest",
        "source_title": "GitHub REST API documentation - GitHub Docs",
        "claim_supported": "The GitHub REST API is fully described in an OpenAPI compliant document and offers robust integration capabilities.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:17:33.175129+00:00"
      },
      {
        "source_url": "https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api",
        "source_title": "Getting started with the REST API - GitHub Docs",
        "claim_supported": "Detailed instructions on HTTP methods, paths, headers, and media types for the REST API.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:17:35.550154+00:00"
      },
      {
        "source_url": "https://apis.apievangelist.com/store/github-git-api",
        "source_title": "Github Git Api - API Evangelist APIs",
        "claim_supported": "OpenAPI specification details for GitHub APIs including base URLs and operation paths.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:17:40.063691+00:00"
      },
      {
        "source_url": "https://github.blog/news-insights/company-news/token-authentication-requirements-for-api-and-git-operations/",
        "source_title": "Token authentication requirements for API and Git operations - The GitHub Blog",
        "claim_supported": "Requirement of token-based authentication (personal access, OAuth, or GitHub App) for API operations.",
        "source_type": "Official Blog",
        "retrieved_timestamp": "2026-11-23T12:17:43.265058+00:00"
      },
      {
        "source_url": "https://docs.github.com/en/rest/quickstart?apiVersion=2026-03-10",
        "source_title": "Quickstart for GitHub REST API - GitHub Docs",
        "claim_supported": "Self-serve quickstart guides using GitHub CLI, curl, and Octokit.js.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:17:44.556847+00:00"
      },
      {
        "source_url": "https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api",
        "source_title": "Authenticating to the REST API - GitHub Docs",
        "claim_supported": "Authentication headers, bearer tokens, personal access tokens, and basic authentication details.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:17:45.778911+00:00"
      },
      {
        "source_url": "https://docs.github.com/en/copilot/concepts/customizations/mcp",
        "source_title": "Model Context Protocol (MCP) - GitHub Docs",
        "claim_supported": "GitHub Copilot integrates with external tools and data through Model Context Protocol (MCP) servers and GitHub-verified MCP connectors.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:17:48.730236+00:00"
      },
      {
        "source_url": "https://github.com/modelcontextprotocol/servers",
        "source_title": "GitHub - modelcontextprotocol/servers: Model Context Protocol Reference Servers \u00b7 GitHub",
        "claim_supported": "Collection of official reference implementations and SDKs for Model Context Protocol servers.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:17:50.549408+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 62,
    "identity": {
      "name": "Vercel",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "Vercel is a cloud platform for frontend teams enabling developers to deploy web applications, manage custom domains, and automate deployments and infrastructure via a robust REST API and serverless functions."
    },
    "authentication": {
      "auth_methods": [
        "JWT or bearer token",
        "Other"
      ],
      "details": "Vercel Access Tokens are required to authenticate and use the Vercel API, included in the Authorization header as Bearer <TOKEN>. Vercel Connect also supports Vercel OIDC tokens and dashboard/CLI session tokens.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "The platform and API can be accessed via self-serve account registration.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Vercel provides a comprehensive REST API exposed over HTTP/1 and HTTP/2 under https://api.vercel.com, accompanied by SDKs, CLI commands, and webhook support.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/mind-protocol/model-context-protocol-mcp-with-vercel-functions",
      "maintainer": "mind-protocol / community",
      "details": "Community templates and integrations exist for running Model Context Protocol (MCP) servers using Vercel functions, but there is no native official Vercel MCP server maintained directly by Vercel.",
      "confidence": "Medium",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/mind-protocol/model-context-protocol-mcp-with-vercel-functions",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/mind-protocol/model-context-protocol-mcp-with-vercel-functions",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/mind-protocol/model-context-protocol-mcp-with-vercel-functions).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Vercel offers an extensive REST API, official CLI command support for direct API execution, thorough endpoint documentation, and clear authentication mechanisms, making building integrations straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://vercel.com/docs/rest-api",
        "source_title": "Vercel REST API Reference",
        "claim_supported": "Vercel REST API details, base URL (https://api.vercel.com), bearer token authentication, and endpoint breadth.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:58:20.796788+00:00"
      },
      {
        "source_url": "https://vercel.com/docs/cli/api",
        "source_title": "vercel api",
        "claim_supported": "Vercel CLI provides direct authenticated HTTP requests to the Vercel API.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:58:22.234107+00:00"
      },
      {
        "source_url": "https://marketplace.apilayer.com/vercel-api",
        "source_title": "Vercel API - APILayer",
        "claim_supported": "Vercel REST API provides programmatic access for deployments, projects, teams, and automation.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:58:25.206268+00:00"
      },
      {
        "source_url": "https://vercel.com/docs/connect/concepts/authentication",
        "source_title": "Authentication in Vercel Connect",
        "claim_supported": "Authentication methods include OIDC tokens, access tokens, and dashboard/CLI session tokens.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:58:26.657592+00:00"
      },
      {
        "source_url": "https://github.com/mind-protocol/model-context-protocol-mcp-with-vercel-functions",
        "source_title": "GitHub - mind-protocol/model-context-protocol-mcp-with-vercel-functions \u00b7 GitHub",
        "claim_supported": "Community MCP server templates deployed using Vercel functions.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:58:30.066591+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 63,
    "identity": {
      "name": "Netlify",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "Netlify is a developer platform that provides infrastructure, CI/CD, and serverless hosting to build, deploy, and manage modern web sites and applications."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "JWT or bearer token"
      ],
      "details": "Netlify uses OAuth2 and Personal Access Tokens (PAT) passed via a Bearer token in the Authorization header (e.g., Authorization: Bearer YOUR_OAUTH2_ACCESS_TOKEN).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can self-serve sign up and access the Netlify API and developer tools without explicit admin approval.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Offers a comprehensive REST API at https://api.netlify.com/api/v1/, official TypeScript/JavaScript client libraries ('netlify-api'), Go client libraries, and outgoing webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/netlify/netlify-mcp",
      "maintainer": "Netlify",
      "details": "Netlify provides an official Model Context Protocol (MCP) server (@netlify/mcp) allowing code agents to manage Netlify projects, build, deploy, and access resources using natural language prompts.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/netlify/netlify-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/netlify/netlify-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/netlify/netlify-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Netlify features a robust public REST API, official SDKs, clear documentation on authentication via Bearer tokens, and an official MCP server, making it straightforward to build integrations.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://open-api.netlify.com",
        "source_title": "Netlify API documentation",
        "claim_supported": "Comprehensive list of Netlify API endpoints covering sites, deploys, builds, environment variables, DNS, and more.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:58:51.455550+00:00"
      },
      {
        "source_url": "https://docs.netlify.com/api-and-cli-guides/api-guides/get-started-with-api/",
        "source_title": "Get started with the Netlify API | Netlify Docs",
        "claim_supported": "Base API URL (https://api.netlify.com/api/v1/), OAuth2 and Personal Access Token (PAT) authentication details, and available Go/JS clients.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:58:53.691554+00:00"
      },
      {
        "source_url": "https://openapi-clients.vercel.app/netlify-api",
        "source_title": "Netlify API TypeScript client: netlify-api",
        "claim_supported": "Official TypeScript/JavaScript client installation and usage for the Netlify API.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:58:59.178333+00:00"
      },
      {
        "source_url": "https://github.com/netlify/netlify-mcp",
        "source_title": "GitHub - netlify/netlify-mcp: Netlify's Official MCP server \u00b7 GitHub",
        "claim_supported": "Netlify provides an official MCP server (@netlify/mcp) to enable code agents to use the Netlify API and CLI.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:59:00.948293+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 64,
    "identity": {
      "name": "Cloudflare",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "Cloudflare exposes a public website discovery API, a main authenticated REST API at api.cloudflare.com/client/v4, a remote Model Context Protocol (MCP) server, and the wrangler CLI."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "Personal access token"
      ],
      "details": "Cloudflare supports API tokens, global API keys paired with email addresses, and OAuth 2.0 (including dynamic client registration for MCP servers and Wrangler login sessions).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can self-onboard and acquire credentials through the Cloudflare dashboard or via OAuth/Wrangler CLI login.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Cloudflare offers a broad REST API spanning roughly 2,500 endpoints, official SDKs/libraries in TypeScript, Python, and Go, plus Terraform provider support.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/cloudflare/mcp",
      "maintainer": "Cloudflare",
      "details": "Cloudflare maintains an official Model Context Protocol (MCP) server at bindings.mcp.cloudflare.com/mcp or mcp.cloudflare.com/mcp, exposing the entire Cloudflare API via Code Mode.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/cloudflare/mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/cloudflare/mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/cloudflare/mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Comprehensive public API, official SDKs, extensive OpenAPI documentation, and an official remote MCP server make building against Cloudflare straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://blog.cloudflare.com/building-a-better-developer-experience-through-api-documentation",
        "source_title": "Iteration isn't just for code: here are our latest API docs | Cloudflare Blog",
        "claim_supported": "Cloudflare uses the OpenAPI specification and provides comprehensive API documentation and endpoints.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:59:25.926950+00:00"
      },
      {
        "source_url": "https://developers.cloudflare.com/api/",
        "source_title": "API Reference | Cloudflare API",
        "claim_supported": "Provides official SDKs and API reference endpoints for TypeScript, Python, Go, and Terraform.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:59:29.336461+00:00"
      },
      {
        "source_url": "https://integrations.sh/cloudflare.com/",
        "source_title": "cloudflare.com \u2014 integrations",
        "claim_supported": "Exposes a public website discovery API, main REST API at api.cloudflare.com/client/v4, and remote MCP server at bindings.mcp.cloudflare.com/mcp.",
        "source_type": "Integrations Registry",
        "retrieved_timestamp": "2026-11-23T12:59:33.454450+00:00"
      },
      {
        "source_url": "https://developers.cloudflare.com/fundamentals/api/get-started/",
        "source_title": "Get started \u00b7 Cloudflare Fundamentals docs",
        "claim_supported": "Authentication uses API tokens, API keys, or origin CA keys.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:59:36.954469+00:00"
      },
      {
        "source_url": "https://github.com/cloudflare/mcp",
        "source_title": "GitHub - cloudflare/mcp: MCP server for the Cloudflare API \u00b7 GitHub",
        "claim_supported": "Official Cloudflare MCP server exposing ~2,500 endpoints using code mode via mcp.cloudflare.com/mcp.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:59:42.301391+00:00"
      }
    ],
    "research_status": "completed",
    "error_message": null
  },
  {
    "id": 65,
    "identity": {
      "name": "Supabase",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "Supabase auto-generates a REST API and management tools directly from your database schema, offering backend services, authentication, and a remote Model Context Protocol (MCP) server."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "Management API requests require an access token using Bearer authentication (Personal Access Tokens or OAuth2). Project data APIs use publishable keys, secret keys, or legacy JWT keys (anon and service_role).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Supabase provides accessible starting configurations, local CLI instances, and standard platform tools.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Supabase provides an auto-generated Data REST API via PostgREST, a Management API for organizations and projects, and the official supabase-js client library.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Official MCP",
      "repository_url": "https://github.com/supabase/mcp",
      "maintainer": "Supabase",
      "details": "Supabase hosts an official remote HTTP Model Context Protocol server at https://mcp.supabase.com/mcp with support for browser-based OAuth 2 or Personal Access Tokens via Authorization headers.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/supabase/mcp",
      "verified_status": "Official MCP",
      "verified_repository_url": "https://github.com/supabase/mcp",
      "verification_rationale": "Updated stale mcp-server-supabase repository URL to the official Supabase repository at https://github.com/supabase/mcp, maintained directly by Supabase.",
      "evidence_type": "vendor-owned repository",
      "date_checked": "2026-11-23"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Supabase provides extensive documentation, clear API references for REST and Management APIs, official JavaScript SDKs, and ready-to-use remote MCP integrations.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://supabase.com/docs/guides/api",
        "source_title": "Data REST API | Supabase Docs",
        "claim_supported": "Supabase auto-generates an API directly from a database schema providing a RESTful interface via PostgREST.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:18:09.972902+00:00"
      },
      {
        "source_url": "https://supabase.com/docs/reference/javascript/v1",
        "source_title": "JavaScript API Reference | Supabase Docs",
        "claim_supported": "Provides the official supabase-js client library for interacting with Postgres and auth functions.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:18:11.653106+00:00"
      },
      {
        "source_url": "https://supabase.com/docs/reference/api/introduction",
        "source_title": "Introduction | Management API Reference | Supabase Docs",
        "claim_supported": "Management API requests require an access token using Personal Access Tokens (PAT) or OAuth2 via Bearer tokens.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:18:12.752679+00:00"
      },
      {
        "source_url": "https://supabase.com/docs/guides/getting-started/api-keys",
        "source_title": "API keys | Supabase Docs",
        "claim_supported": "Supabase uses publishable keys, secret keys, and legacy anon and service_role JWT keys for project requests.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:18:13.882205+00:00"
      },
      {
        "source_url": "https://github.com/orgs/supabase/discussions/39434",
        "source_title": "Supabase Remote MCP server \u00b7 supabase \u00b7 Discussion #39434 \u00b7 GitHub",
        "claim_supported": "The official Supabase remote MCP server is hosted at https://mcp.supabase.com/mcp supporting browser-based OAuth 2 or Personal Access Tokens.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:18:18.114671+00:00"
      },
      {
        "source_url": "https://github.com/supabase/mcp",
        "source_title": "GitHub - supabase/mcp: Connect Supabase to your AI assistants \u00b7 GitHub",
        "claim_supported": "Official repository for connecting Supabase projects to AI assistants using the Model Context Protocol.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:18:19.972418+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 66,
    "identity": {
      "name": "Neo4j",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "Neo4j is a graph database platform providing HTTP, Query, and Aura cloud APIs alongside official drivers and GraphQL libraries for connected data applications."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token",
        "Basic authentication",
        "Other"
      ],
      "details": "Both basic and bearer authentication are supported via the Authorization header. Neo4j-Realm header can also be defined for Basic and Bearer authentication contexts.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Neo4j offers free-to-try access tiers and self-serve options for its cloud and developer platforms as noted on APIs.io and documentation.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "GraphQL",
        "SDK",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Provides HTTP REST APIs, Query API, Aura cloud APIs, Bolt protocol, and official drivers for Python, Java, and JavaScript, plus a GraphQL library.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/neo4j/mcp",
      "maintainer": "Neo4j",
      "details": "Neo4j maintains an official MCP server (neo4j/mcp) giving AI assistants and LLM-powered tools direct, structured access to Neo4j graph databases.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/neo4j/mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/neo4j/mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/neo4j/mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Neo4j provides robust official documentation, multiple SDKs/drivers, standard HTTP/Query APIs, explicit authentication patterns, and an official Model Context Protocol (MCP) server, making integration straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://neo4j.com/docs/rest-docs/current/",
        "source_title": "The Neo4j REST API Documentation v3.5 - Neo4j REST API Documentation",
        "claim_supported": "Neo4j provides REST and HTTP APIs to interact with graph data.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:59:58.064937+00:00"
      },
      {
        "source_url": "https://apis.io/providers/neo4j",
        "source_title": "Neo4j API \u2014 Docs, Pricing & OpenAPI | APIs.io",
        "claim_supported": "Developer platform provides HTTP, Query, and Aura cloud APIs alongside official drivers and GraphQL libraries.",
        "source_type": "Pricing Page",
        "retrieved_timestamp": "2026-11-23T13:00:00.336712+00:00"
      },
      {
        "source_url": "https://github.com/api-evangelist/neo4j",
        "source_title": "GitHub - api-evangelist/neo4j: Neo4j \u2014 independent third-party profile of a public API surface",
        "claim_supported": "Overview of published API endpoints and drivers like Python, Java, and JavaScript.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:00:02.329720+00:00"
      },
      {
        "source_url": "https://neo4j.com/docs/query-api/2/authentication-authorization/",
        "source_title": "Authorize requests - Query API",
        "claim_supported": "Both basic and bearer authentication are supported via the Authorization header, with optional Neo4j-Realm header support.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:00:05.377321+00:00"
      },
      {
        "source_url": "https://github.com/neo4j/mcp",
        "source_title": "GitHub - neo4j/mcp: Neo4j official MCP Server",
        "claim_supported": "Official Neo4j MCP server implementation exists to bridge MCP clients and Neo4j instances.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:00:10.042861+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 67,
    "identity": {
      "name": "Snowflake",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "Snowflake is a cloud data platform that provides a data warehouse, data lakehouse, and data engineering capabilities with broad REST, SQL, and Python API support."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "Basic authentication",
        "JWT or bearer token"
      ],
      "details": "Snowflake supports multiple authentication mechanisms including Key Pair (JWT signed with RSA private keys), OAuth 2.0, Programmatic Access Tokens (PAT), and Basic authentication.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Snowflake requires an active Snowflake account and warehouse resources to interact with its databases and APIs, which are typically tied to paid enterprise plans or trials that convert to paid subscriptions.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Snowflake offers an extensive public REST API (including a dedicated SQL API and numerous resource APIs), an official Snowpark library / Python API, and multiple community and third-party Model Context Protocol (MCP) integrations.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/yuly3/mcp-snowflake",
      "maintainer": "yuly3 / davidamom",
      "details": "Multiple community and third-party Model Context Protocol (MCP) servers exist for connecting AI models and clients like Claude Desktop directly to Snowflake databases (e.g., yuly3/mcp-snowflake and davidamom/snowflake-mcp).",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/yuly3/mcp-snowflake",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/yuly3/mcp-snowflake",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/yuly3/mcp-snowflake).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [],
      "justification": "Snowflake provides rich public REST and SQL APIs, official Python libraries, and documented authentication schemes (Key-Pair JWT and OAuth), making integration straightforward once valid account credentials and roles are provisioned.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/reference",
        "source_title": "Snowflake REST APIs reference | Snowflake Documentation",
        "claim_supported": "Snowflake provides a wide array of public REST APIs for managing accounts, alerts, databases, warehouses, and executing queries.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:00:31.918130+00:00"
      },
      {
        "source_url": "https://docs.snowflake.com/en/developer",
        "source_title": "Developer - Snowflake Documentation",
        "claim_supported": "Snowflake provides official Snowpark libraries and Python APIs for data engineering, ML, and application development.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:00:34.105746+00:00"
      },
      {
        "source_url": "https://docs.snowflake.com/en/developer-guide/sql-api/index",
        "source_title": "Snowflake SQL API | Snowflake Documentation",
        "claim_supported": "Snowflake offers a SQL REST API to query data, execute DDL/DML statements, and manage deployments.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:00:36.064299+00:00"
      },
      {
        "source_url": "https://docs.snowflake.com/en/user-guide/api-authentication",
        "source_title": "External API authentication and secrets | Snowflake Documentation",
        "claim_supported": "Snowflake supports basic authentication and OAuth with various flows for external API connections.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:00:38.811339+00:00"
      },
      {
        "source_url": "https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/authentication",
        "source_title": "Authenticating Snowflake REST APIs with Snowflake | Snowflake Documentation",
        "claim_supported": "Snowflake REST APIs support key-pair authentication, OAuth, programmatic access tokens, and workload identity federation.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:00:41.056956+00:00"
      },
      {
        "source_url": "https://apis.io/security/snowflake/snowflake-authentication",
        "source_title": "Snowflake API Authentication | APIs.io",
        "claim_supported": "Snowflake secures its APIs with HTTP Bearer and OAuth2 across multiple security schemes.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:00:43.202715+00:00"
      },
      {
        "source_url": "https://github.com/yuly3/mcp-snowflake",
        "source_title": "GitHub - yuly3/mcp-snowflake: Model Context Protocol (MCP) server for Snowflake database connectivity",
        "claim_supported": "Model Context Protocol (MCP) server integration exists for Snowflake database connectivity and SQL execution.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:00:44.987289+00:00"
      },
      {
        "source_url": "https://github.com/davidamom/snowflake-mcp",
        "source_title": "GitHub - davidamom/snowflake-mcp: MCP server implementation for Snowflake integration",
        "claim_supported": "Third-party MCP server implementation allows AI clients to execute SQL queries on Snowflake databases.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:00:46.966393+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 68,
    "identity": {
      "name": "MongoDB Atlas",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "A fully managed cloud database service that provides programmatic administration and data access via REST APIs, SDKs, and MCP servers."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key"
      ],
      "details": "The Atlas Administration API supports OAuth2 Service Accounts (using client ID and secret via client credentials flow) and HTTP Digest-based API keys (public and private key pair).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Changes made through the Atlas Administration API are subject to Atlas billing, requiring a valid credit card on file.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Offers a versioned REST-based Administration API, the Atlas Go SDK, Terraform providers, Kubernetes Operator, CLI, and official Model Context Protocol (MCP) servers.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/mongodb-js/mongodb-mcp-server",
      "maintainer": "mongodb-js",
      "details": "MongoDB provides an official Model Context Protocol (MCP) server (mongodb-mcp-server) for connecting to MongoDB databases and Atlas clusters.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/mongodb-js/mongodb-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/mongodb-js/mongodb-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/mongodb-js/mongodb-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Comprehensive official REST documentation, official SDKs, and official Model Context Protocol (MCP) servers make building integrations straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://www.mongodb.com/docs/atlas/api/atlas-admin-api-ref/",
        "source_title": "Atlas Administration API Reference - Atlas - MongoDB Docs",
        "claim_supported": "The Atlas Administration API follows REST principles, uses JSON entities, and changes are subject to Atlas billing.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:01:05.931244+00:00"
      },
      {
        "source_url": "https://www.mongodb.com/docs/atlas/api/",
        "source_title": "Atlas Programmatic Access - Atlas - MongoDB Docs",
        "claim_supported": "Atlas provides programmatic access resources including the Administration API, Go SDK, CLI, Terraform provider, and Kubernetes Operator.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:01:08.479812+00:00"
      },
      {
        "source_url": "https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2",
        "source_title": "Atlas Admin API v2 documentation",
        "claim_supported": "Supports OAuth2 Service Accounts and HTTP Digest-based API keys.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:01:11.278397+00:00"
      },
      {
        "source_url": "https://github.com/mongodb-js/mongodb-mcp-server",
        "source_title": "GitHub - mongodb-js/mongodb-mcp-server: A Model Context Protocol server to connect to MongoDB databases and MongoDB Atlas Clusters.",
        "claim_supported": "Official MongoDB MCP Server exists for interacting with MongoDB Databases and MongoDB Atlas.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:01:20.792108+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 69,
    "identity": {
      "name": "Datadog",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "Datadog is a monitoring and security platform for cloud-scale applications, providing observability of servers, databases, tools, and services through a REST API and MCP server implementations."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "Personal access token",
        "JWT or bearer token",
        "OAuth2"
      ],
      "details": "All requests to the Datadog API must be authenticated. Write requests require an API key (header DD-API-KEY). Read requests require an application key (header DD-APPLICATION-KEY) in addition to the API key. Datadog also provides modern options including Personal Access Tokens (PATs), Service Access Tokens (SATs), workload identity federation, and customer-managed OAuth clients.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Datadog is a commercial monitoring platform requiring a Datadog account and subscription credentials (API key/application key) to access the API.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "The Datadog API is an HTTP REST API with over 2,000 documented operations covering metrics, logs, events, monitors, dashboards, and APM. Official client libraries are provided in Java, Python, Ruby, Go, TypeScript, and Rust.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Datadog",
      "details": "Datadog provides an official Model Context Protocol (MCP) server accessible via Streamable HTTP and OAuth or API/application keys, enabling query of logs, metrics, monitors, and dashboards.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://apitracker.io/a/datadog",
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Datadog provides extensive REST APIs, official client libraries in multiple languages, comprehensive documentation, and an official MCP server, making integration straightforward given valid API and application keys.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.datadoghq.com/api/latest",
        "source_title": "Datadog API Reference",
        "claim_supported": "The Datadog API is an HTTP REST API with official client libraries for Java, Python, Ruby, Go, TypeScript, and Rust.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:01:36.277747+00:00"
      },
      {
        "source_url": "https://docs.datadoghq.com/api/latest/using-the-api",
        "source_title": "Using the API - Datadog API",
        "claim_supported": "API can be used to send integrations data, metrics, events, logs, traces, and manage dashboards, users, and roles.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:01:38.923398+00:00"
      },
      {
        "source_url": "https://apitracker.io/a/datadog",
        "source_title": "Datadog API - Docs, SDKs & Integration",
        "claim_supported": "Datadog publishes an official MCP implementation using Streamable HTTP supporting metrics, logs, monitors, and dashboards.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T13:01:40.214916+00:00"
      },
      {
        "source_url": "https://apis.io/security/datadog/datadog-authentication",
        "source_title": "Datadog API Authentication | APIs.io",
        "claim_supported": "Write requests require API key (DD-API-KEY) and read requests require application key (DD-APPLICATION-KEY). OAuth 2.0 authorization-code flow is also supported.",
        "source_type": "API Security Profile",
        "retrieved_timestamp": "2026-11-23T13:01:45.105178+00:00"
      },
      {
        "source_url": "https://www.datadoghq.com/blog/datadog-api-authentication/",
        "source_title": "Modernize Datadog API authentication with scoped credentials | Datadog",
        "claim_supported": "Introduction of Personal Access Tokens (PATs), Service Access Tokens (SATs), workload identity federation, and customer-managed OAuth clients.",
        "source_type": "Official Blog",
        "retrieved_timestamp": "2026-11-23T13:01:46.548328+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 70,
    "identity": {
      "name": "Sentry",
      "category": "Developer, Infra and Data Platforms",
      "one_line_description": "An error tracking and performance monitoring platform that helps developers identify, triage, and resolve application issues in real-time."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token",
        "Personal access token"
      ],
      "details": "Authentication options include Organization Tokens, API tokens, OAuth2 device flows, bearer tokens for SCIM, and DSN authentication for crons/SDK events.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Sentry offers self-serve signup with free tier capabilities and published contracts/APIs accessible on the APIs.io network.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Sentry provides a broad web API (v0) covering issues, events, releases, alerts, dashboards, SCIM 2.0, service hooks, and official SDKs for over 20 platforms.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Sentry",
      "details": "Sentry runs a first-party remote MCP server at https://mcp.sentry.dev/mcp alongside community and standalone variants.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://mcp.sentry.dev/mcp",
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Sentry provides an extensive public REST API, official SDKs, official remote MCP support, comprehensive documentation, and straightforward token/OAuth authentication.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.sentry.io/api/",
        "source_title": "API Reference | Sentry Docs",
        "claim_supported": "Sentry web API (v0) is used to access account-level resources, manage data, and use region-specific base domains.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:02:06.044378+00:00"
      },
      {
        "source_url": "https://apis.io/providers/sentry-system",
        "source_title": "Sentry API \u2014 Docs, Pricing & OpenAPI | APIs.io",
        "claim_supported": "Web API covers issues and events, releases, alerting, dashboards, cron monitors, SCIM 2.0, and a first-party remote MCP server at https://mcp.sentry.dev/mcp.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T13:02:08.380904+00:00"
      },
      {
        "source_url": "https://github.com/getsentry/sentry/blob/master/api-docs/openapi.json",
        "source_title": "sentry/api-docs/openapi.json at master \u00b7 getsentry/sentry \u00b7 GitHub",
        "claim_supported": "Public API specification v0 with paths for projects, hooks, teams, organizations, events, and SCIM bearer tokens.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:02:10.561499+00:00"
      },
      {
        "source_url": "https://cli.sentry.dev/commands/auth",
        "source_title": "auth | Sentry CLI",
        "claim_supported": "Sentry CLI supports OAuth device flow, API tokens, read-only scopes, and token management.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:02:14.887666+00:00"
      },
      {
        "source_url": "https://docs.sentry.io/cli/configuration/",
        "source_title": "Configuration and Authentication | Sentry Docs",
        "claim_supported": "Authentication can be set up via CLI login or manually using Organization Tokens and DSNs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:02:16.311508+00:00"
      },
      {
        "source_url": "https://github.com/mcp-100/mcp-sentry",
        "source_title": "GitHub - MCP-100/mcp-sentry: A Model Context Protocol server for retrieving and analyzing issues from Sentry.io",
        "claim_supported": "Community MCP server implementation for Sentry issue analysis and retrieval.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:02:18.345423+00:00"
      },
      {
        "source_url": "https://github.com/getsentry/sentry-mcp-stdio",
        "source_title": "GitHub - getsentry/sentry-mcp-stdio: Model Context Protocol (MCP) server for Sentry",
        "claim_supported": "Standalone Sentry MCP server implementation supersedable by the remote MCP server.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:02:20.197196+00:00"
      },
      {
        "source_url": "https://github.com/ddfourtwo/sentry-selfhosted-mcp",
        "source_title": "GitHub - ddfourtwo/sentry-selfhosted-mcp: An MCP server for self-hosted sentry.",
        "claim_supported": "Self-hosted MCP server integration for Sentry instance interaction.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:02:24.179474+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 71,
    "identity": {
      "name": "Notion",
      "category": "Productivity and Project Management",
      "one_line_description": "A productivity and knowledge management tool built on a block-based editor and database engine, providing a public REST API for workspace integrations."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "Personal access token",
        "JWT or bearer token"
      ],
      "details": "Supports internal connection tokens, personal access tokens (PATs), and OAuth 2.0 protocol for public and scoped integrations, passed via the Authorization: Bearer header along with a Notion-Version header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Notion has a wide range of subscription tiers from a free plan to enterprise services, and developers can sign up for free accounts and create personal access tokens or internal connections in the developer portal depending on plan defaults.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Offers an official REST API for managing pages, databases, blocks, users, and comments, with official SDKs such as the JavaScript/TypeScript client (@notionhq/client).",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/suekou/mcp-notion-server",
      "maintainer": "suekou",
      "details": "Multiple community-maintained Model Context Protocol servers exist to bridge AI assistants with Notion, including @suekou/mcp-notion-server, ramidecodes/mcp-server-notion, and janetrzhy/notion-mcp-server.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/suekou/mcp-notion-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/suekou/mcp-notion-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/suekou/mcp-notion-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Notion provides comprehensive developer documentation, clear authentication options via personal access tokens or internal connections, and official SDKs that allow quick integration setup.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://www.pynotion.com/notion-basics-for-developers",
        "source_title": "Notion Basics for Developers",
        "claim_supported": "Notion is a productivity tool with an official REST API supporting pages, blocks, databases, and internal/public integrations.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:18:38.964879+00:00"
      },
      {
        "source_url": "https://developers.notion.com/guides/notion-api/quick-start",
        "source_title": "Notion API quickstart",
        "claim_supported": "Details personal access token creation, header requirements, and the official JavaScript SDK (@notionhq/client).",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:18:42.937115+00:00"
      },
      {
        "source_url": "https://developers.notion.com/reference/intro",
        "source_title": "Introduction - Notion Docs",
        "claim_supported": "API requests require HTTPS to api.notion.com with Authorization: Bearer and Notion-Version headers.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T12:18:43.922367+00:00"
      },
      {
        "source_url": "https://developers.notion.com/guides/authorization/overview",
        "source_title": "Notion API authorization",
        "claim_supported": "Details internal connections, personal access tokens, and OAuth 2.0 public integration authentication workflows.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:18:44.978750+00:00"
      },
      {
        "source_url": "https://notionsolutions.net/notion-api-key/",
        "source_title": "Notion API Key: How to Get, Store and Check a Token",
        "claim_supported": "Provides context on token policies across Free, Plus, Business, and Enterprise plans.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:18:46.681273+00:00"
      },
      {
        "source_url": "https://github.com/suekou/mcp-notion-server",
        "source_title": "GitHub - suekou/mcp-notion-server",
        "claim_supported": "A Model Context Protocol server targeting the Notion API for connecting Notion to MCP clients.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:18:48.534025+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 72,
    "identity": {
      "name": "Airtable",
      "category": "Productivity and Project Management",
      "one_line_description": "Airtable is a cloud collaboration and database platform that provides a public API and personal access tokens or OAuth2 for developer integrations."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "Personal access token"
      ],
      "details": "Airtable supports authentication using Personal Access Tokens (PAT) and OAuth2.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Users can create an Airtable account and generate personal access tokens or OAuth apps from the developer portal / Builder Hub.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Airtable provides a public REST API supporting bases, tables, fields, and records management.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/domdomegg/airtable-mcp-server",
      "maintainer": "domdomegg / sulaiman013 / felores",
      "details": "Multiple community-maintained Model Context Protocol (MCP) servers exist for Airtable, allowing AI assistants to interact with bases via natural language.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/domdomegg/airtable-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/domdomegg/airtable-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/domdomegg/airtable-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Airtable offers straightforward developer access via Personal Access Tokens and OAuth2, extensive documentation, and multiple existing community MCP servers.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://composio.dev/auth/airtable",
        "source_title": "How to connect Airtable to Composio with your own OAuth app | Composio",
        "claim_supported": "Airtable supports OAuth2 developer integrations and a developer portal.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:02:45.782827+00:00"
      },
      {
        "source_url": "https://developer.transmitsecurity.com/guides/automated-workflows/integrations/builtin/credentials/airtable",
        "source_title": "Airtable credentials",
        "claim_supported": "Airtable supports Personal Access Token (PAT) and OAuth2 authentication methods.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:02:49.661299+00:00"
      },
      {
        "source_url": "https://github.com/domdomegg/airtable-mcp-server",
        "source_title": "GitHub - domdomegg/airtable-mcp-server",
        "claim_supported": "Community MCP server exists for Airtable providing database schema inspection and record reading/writing.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:02:53.767919+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 73,
    "identity": {
      "name": "Linear",
      "category": "Productivity and Project Management",
      "one_line_description": "Linear is an issue tracking and project management tool that provides a public GraphQL API, webhooks, and an official Model Context Protocol (MCP) server for extending functionality and building integrations."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "JWT or bearer token"
      ],
      "details": "Linear supports personal API keys, OAuth2 (including Authorization Code flow with PKCE and Client Credentials grant), and Bearer tokens for both its GraphQL API and MCP server.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can sign up and access developer documentation, API keys, and SDKs directly through the self-serve platform.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "GraphQL",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Linear provides a public GraphQL API at api.linear.app/graphql, supports webhooks for various event types, and offers an official TypeScript/JavaScript SDK.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Linear",
      "details": "Linear hosts an official remote MCP server at https://mcp.linear.app/mcp built with Cloudflare and Anthropic, supporting issue, comment, project, milestone, initiative, and project-update operations.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://mcp.linear.app/mcp",
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Linear provides comprehensive developer documentation, a public GraphQL API with schema introspection, an official SDK, and a hosted official MCP server with flexible authentication options.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://linear.app/docs/api-and-webhooks",
        "source_title": "API and Webhooks \u2013 Linear Docs",
        "claim_supported": "Linear provides a public GraphQL API, webhooks, API keys, and third-party apps.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:19:07.116888+00:00"
      },
      {
        "source_url": "https://apitracker.io/a/linear-app",
        "source_title": "Linear API - Documentation & Integration",
        "claim_supported": "Linear provides a public GraphQL API, SDKs, and official MCP server implementation.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T12:19:08.512806+00:00"
      },
      {
        "source_url": "https://linear.app/developers/graphql",
        "source_title": "Getting started \u2013 Linear Developers",
        "claim_supported": "GraphQL endpoint details, personal API keys, and official Linear SDK in TypeScript.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:19:10.415713+00:00"
      },
      {
        "source_url": "https://www.scalekit.com/blog/linear-mcp-vs-api",
        "source_title": "Linear MCP vs Linear API: Choosing the Right Path for AI Agents",
        "claim_supported": "Details on the official hosted MCP server at mcp.linear.app/mcp and GraphQL API differences.",
        "source_type": "Blog Analysis",
        "retrieved_timestamp": "2026-11-23T12:19:14.568293+00:00"
      },
      {
        "source_url": "https://linear.app/developers/oauth-2-0-authentication",
        "source_title": "OAuth 2.0 authentication \u2013 Linear Developers",
        "claim_supported": "OAuth 2.0 implementation details including scopes, PKCE, and token lifetimes.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:19:16.658587+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 74,
    "identity": {
      "name": "Jira",
      "category": "Productivity and Project Management",
      "one_line_description": "Jira is a proprietary issue tracking and project management product that allows bug tracking, issue management, and agile project management."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "Other"
      ],
      "details": "Jira supports authentication via API token (using username/email and token), OAuth 2.0, and basic authentication depending on Cloud or Server configuration.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "The Jira API requires authentication, which typically indicates paid or tiered access.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Jira provides comprehensive REST APIs for cloud and server editions, along with webhook capabilities and community/official integrations.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/redhat-community-ai-tools/jira-mcp-server",
      "maintainer": "redhat-community-ai-tools / Warzuponus / OrenGrinker",
      "details": "Multiple community and third-party Model Context Protocol (MCP) servers exist for Jira integration, such as redhat-community-ai-tools/jira-mcp-server and Warzuponus/mcp-jira.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/redhat-community-ai-tools/jira-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/redhat-community-ai-tools/jira-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/redhat-community-ai-tools/jira-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Jira has well-documented REST APIs, available community MCP servers, and robust examples using curl, Python, and JavaScript.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developer.atlassian.com/server/jira/platform/jira-rest-api-examples/",
        "source_title": "Jira REST API examples",
        "claim_supported": "Jira provides REST APIs to query, create, and edit issues.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:03:16.548150+00:00"
      },
      {
        "source_url": "https://public-api.org/api/421/jira",
        "source_title": "JIRA API - Documentation, Review & Integration Guide | Public API",
        "claim_supported": "Jira API uses OAuth 2.0 authentication and requires authentication indicating paid or tiered access.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T13:03:19.441583+00:00"
      },
      {
        "source_url": "https://developer.transmitsecurity.com/guides/automated-workflows/integrations/builtin/credentials/jira",
        "source_title": "Jira credentials",
        "claim_supported": "Supported authentication methods include SW Cloud API token and SW Server account.",
        "source_type": "Integration Guide",
        "retrieved_timestamp": "2026-11-23T13:03:33.142742+00:00"
      },
      {
        "source_url": "https://composio.dev/auth/jira",
        "source_title": "How to connect Jira to Composio with your own OAuth app | Composio",
        "claim_supported": "Jira supports OAuth2 and API key authentication methods and specific scopes like read:jira-work.",
        "source_type": "Integration Guide",
        "retrieved_timestamp": "2026-11-23T13:03:34.486249+00:00"
      },
      {
        "source_url": "https://github.com/redhat-community-ai-tools/jira-mcp-server",
        "source_title": "GitHub - redhat-community-ai-tools/jira-mcp-server",
        "claim_supported": "Model Context Protocol (MCP) server exists for Jira integration enabling natural language interaction.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:03:36.757669+00:00"
      },
      {
        "source_url": "https://github.com/Warzuponus/mcp-jira",
        "source_title": "GitHub - Warzuponus/mcp-jira",
        "claim_supported": "Jira integration server built on Jira REST API v3 for Model Context Protocol.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:03:38.796574+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 75,
    "identity": {
      "name": "Asana",
      "category": "Productivity and Project Management",
      "one_line_description": "Asana is a work management platform that helps teams organize, track, and manage projects and tasks."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "Personal access token"
      ],
      "details": "Asana supports OAuth 2.0 (Authorization Code Grant) for third-party applications and Personal Access Tokens (PATs) for scripts and private integrations, sent via the Authorization: Bearer <token> header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can sign up and create applications or personal access tokens directly through the Asana Developer Console without needing approval.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Asana exposes a comprehensive RESTful API at https://app.asana.com/api/1.0 generated from an OpenAPI specification, supporting app components, audit logs, and webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Asana",
      "details": "Asana exposes an OAuth-protected streamable HTTP MCP server at https://mcp.asana.com/v2/mcp.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API is well-documented with an OpenAPI spec, straightforward OAuth/PAT authentication, open developer access, and available official MCP support.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.asana.com/reference/rest-api-reference",
        "source_title": "Overview",
        "claim_supported": "Asana API is a RESTful interface with predictable resource-oriented URLs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:03:52.460888+00:00"
      },
      {
        "source_url": "https://asana.com/developers",
        "source_title": "Asana Developers - API, Documentation & Community Support \u2022 Asana",
        "claim_supported": "Provides developer tools, documentation, API guides, and app components.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:03:53.769486+00:00"
      },
      {
        "source_url": "https://integrations.sh/asana.com/",
        "source_title": "asana.com \u2014 integrations",
        "claim_supported": "Asana exposes a REST API authenticated by personal access tokens or OAuth 2.0, plus an OAuth-protected streamable HTTP MCP server at https://mcp.asana.com/v2/mcp.",
        "source_type": "API Discovery",
        "retrieved_timestamp": "2026-11-23T13:04:14.964354+00:00"
      },
      {
        "source_url": "https://apispine.com/asana/authentication",
        "source_title": "Asana Authentication: Methods, Setup, and Security (2026) \u00b7 apispine",
        "claim_supported": "Asana API supports OAuth 2.0 and Personal Access Tokens (PATs) for authentication.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:04:17.764078+00:00"
      },
      {
        "source_url": "https://docs.nexla.com/user-guides/connectors/asana_api",
        "source_title": "Asana | Nexla Docs",
        "claim_supported": "Bi-directional Asana connector uses OAuth 2.0 and interacts with endpoints like tasks and projects.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:04:21.505572+00:00"
      },
      {
        "source_url": "https://github.com/roychri/mcp-server-asana",
        "source_title": "GitHub - roychri/mcp-server-asana \u00b7 GitHub",
        "claim_supported": "Community Model Context Protocol server implementation for Asana allowing interaction with Asana API from MCP clients.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:04:24.867842+00:00"
      },
      {
        "source_url": "https://github.com/wwwaldo/mcp-asana",
        "source_title": "GitHub - wwwaldo/mcp-asana: use claude as your project manager \u00b7 GitHub",
        "claim_supported": "MCP integration server providing tools for managing Asana tasks and projects using personal access tokens.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:04:26.643612+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 76,
    "identity": {
      "name": "Monday.com",
      "category": "Productivity and Project Management",
      "one_line_description": "monday.com powers teams to run processes, workflows, and projects in one digital workspace, unleashing their potential to achieve extraordinary results in all aspects of their work."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2"
      ],
      "details": "The platform API utilizes personal V2 API tokens (API keys) passed in the Authorization header to authenticate requests. For official MCP connections, OAuth authentication or a monday.com API token is used.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Users can create a free developer account or sign up on monday.com to get an API token and start testing.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "GraphQL",
        "SDK",
        "Other"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Provides a native GraphQL schema API and exposes 335 documented operations, along with an official API and data access MCP server.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/mondaycom/mcp",
      "maintainer": "monday.com AI team",
      "details": "Maintained by the monday.com AI team, providing a hosted MCP service (https://mcp.monday.com/mcp) and an open framework for connecting AI agents.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/mondaycom/mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/mondaycom/mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/mondaycom/mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Monday.com provides clear developer documentation, personal V2 API tokens, hosted and local Model Context Protocol (MCP) servers, and an extensive GraphQL API making it straightforward to build integrations.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apitracker.io/a/monday",
        "source_title": "monday.com API - Docs, SDKs & Integration",
        "claim_supported": "Provides official MCP server, 335 documented GraphQL operations, and developer documentation.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:04:43.906618+00:00"
      },
      {
        "source_url": "https://developer.monday.com/api-reference/docs/authentication",
        "source_title": "Authentication",
        "claim_supported": "API uses personal V2 API tokens passed in the Authorization header. Free developer accounts can be created.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:04:56.383540+00:00"
      },
      {
        "source_url": "https://github.com/mondaycom/mcp",
        "source_title": "GitHub - mondaycom/mcp",
        "claim_supported": "Official monday.com MCP server maintained by monday.com AI team with hosted MCP support.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:05:03.092095+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 77,
    "identity": {
      "name": "ClickUp",
      "category": "Productivity and Project Management",
      "one_line_description": "ClickUp is a work management platform offering tasks, Lists, Folders, Spaces, Docs, Chat, Goals, time tracking, dashboards, and automations in one Workspace."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "Requires an API token using either a Personal API Key (Authorization: pk_...) or an OAuth2 Access Token (Authorization: Bearer {access_token}) in the Authorization header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can self-serve by generating a Personal API Token directly from ClickUp settings under 'Apps' or by registering an OAuth application.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "ClickUp ships a public REST API in two concurrent versions (v2 with 138 operations and v3 with 35 operations) published as first-party OpenAPI documents. Webhooks are HMAC-SHA256 signed.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "ClickUp",
      "details": "ClickUp runs a remote MCP server at mcp.clickup.com with its own OAuth authorization server, PKCE and dynamic client registration, exposing 48 documented tools.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "ClickUp provides comprehensive public REST APIs (v2 and v3) with OpenAPI specifications, straightforward Personal API Key or OAuth2 authentication, webhooks, and an official remote MCP server.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apis.io/providers/clickup",
        "source_title": "Clickup API \u2014 Docs, Pricing & OpenAPI | APIs.io",
        "claim_supported": "ClickUp ships public REST API v2 and v3, remote MCP server at mcp.clickup.com with 48 tools, and HMAC-SHA256 signed webhooks.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:05:19.097449+00:00"
      },
      {
        "source_url": "https://developer.clickup.com/reference/createfolder",
        "source_title": "ClickUp API (websites/developer_clickup_reference) | Context7",
        "claim_supported": "Requires an API token using either a Personal API Key or an OAuth2 Access Token in the Authorization header.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:05:23.889488+00:00"
      },
      {
        "source_url": "https://apis.apievangelist.com/store/clickup-authorization-api",
        "source_title": "Clickup Authorization Api - API Evangelist APIs",
        "claim_supported": "Details on API key and HTTP Bearer security schemes for ClickUp Authorization API.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:05:25.587216+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 78,
    "identity": {
      "name": "Coda",
      "category": "Productivity and Project Management",
      "one_line_description": "A productivity and collaboration platform providing a REST API to programmatically interact with documents, tables, pages, and account information."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token"
      ],
      "details": "The API requires an 'Authorization' header with the value 'Bearer <api_token>' where the token is generated via the Coda account settings page.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Coda API tokens can be generated directly via self-service through the Coda account settings page (coda.io/account).",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Provides a comprehensive REST API and Python wrappers/libraries (e.g., codaio, dlt source) covering docs, pages, tables, rows, formulas, and account information.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/vish288/mcp-coda",
      "maintainer": "vish288 (and other community contributors like orellazri, TJC-LP)",
      "details": "Multiple community-maintained Model Context Protocol (MCP) servers exist for Coda, such as mcp-coda, coda-mcp, and coda-mcp-server.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/vish288/mcp-coda",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/vish288/mcp-coda",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/vish288/mcp-coda).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API is fully public, uses straightforward Bearer token authentication generated via self-serve settings, has official and community toolkits, and provides comprehensive documentation.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://codaio.readthedocs.io/en/latest/",
        "source_title": "codaio documentation \u2014 codaio documentation",
        "claim_supported": "Python wrapper for coda.io API and basic raw client functionality.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:05:47.715718+00:00"
      },
      {
        "source_url": "https://dlthub.com/context/source/coda-docs-migration",
        "source_title": "Coda Python API Docs | dltHub",
        "claim_supported": "Coda provides a REST API base URL at https://coda.io/apis/v1 requiring a Bearer token in the Authorization header generated via Coda account settings.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:05:50.756539+00:00"
      },
      {
        "source_url": "https://github.com/vish288/mcp-coda",
        "source_title": "GitHub - vish288/mcp-coda: MCP server for the Coda API",
        "claim_supported": "Community MCP server implementation for Coda API supporting tools, resources, and prompts.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:06:02.723990+00:00"
      }
    ],
    "research_status": "completed",
    "error_message": null
  },
  {
    "id": 79,
    "identity": {
      "name": "Smartsheet",
      "category": "Productivity and Project Management",
      "one_line_description": "The Smartsheet API enables programmatic access and management of organization resources including sheets, rows, columns, and workspaces."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2"
      ],
      "details": "Smartsheet offers two authentication methods: Direct Access Tokens (API keys generated in the Smartsheet UI passed via the Bearer header) and OAuth 2.0 (3-legged flow for user consent).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Required plan for API access is Business, Enterprise, or Advanced Work Management.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides a comprehensive REST API covering sheets, folders, users, attachments, and comments. Official SDKs are provided for JavaScript / Node.js, Python, Java, and C#.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/mattjhughes/mcp-smartsheet",
      "maintainer": "mattjhughes",
      "details": "Community and third-party repositories exist for Model Context Protocol (MCP) servers integrating with Smartsheet, such as mattjhughes/mcp-smartsheet and terilios/smartsheet-server.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/mattjhughes/mcp-smartsheet",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/mattjhughes/mcp-smartsheet",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/mattjhughes/mcp-smartsheet).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API is fully documented with a RESTful structure, straightforward token generation, and official client SDKs in multiple languages, making it easy to build integrations.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.smartsheet.com/api/smartsheet/introduction",
        "source_title": "Smartsheet API introduction",
        "claim_supported": "Required plan: Business, Enterprise, or Advanced Work Management; Base URL and SDK languages available.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:06:27.832368+00:00"
      },
      {
        "source_url": "https://dev.to/zuplo/a-developers-guide-to-the-smartsheet-api-23k9",
        "source_title": "A Developer\u2019s Guide to the Smartsheet API - DEV Community",
        "claim_supported": "Authentication methods: Direct Access Tokens and OAuth 2.0.",
        "source_type": "Community Guide",
        "retrieved_timestamp": "2026-11-23T13:06:29.124188+00:00"
      },
      {
        "source_url": "https://developers.smartsheet.com/api/smartsheet/guides/basics/authentication",
        "source_title": "Authentication",
        "claim_supported": "API authenticates using access tokens passed as Bearer values in the authorization header or via OAuth 2.0.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:06:30.755388+00:00"
      },
      {
        "source_url": "https://github.com/mattjhughes/mcp-smartsheet",
        "source_title": "GitHub - mattjhughes/mcp-smartsheet: Model Context Protocol server for Smartsheet API integration",
        "claim_supported": "Community MCP server implementation for Smartsheet API integration.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:06:35.165899+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 80,
    "identity": {
      "name": "Harvest",
      "category": "Productivity and Project Management",
      "one_line_description": "Harvest provides an API for tracking time, managing projects, clients, tasks, invoices, and expenses."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "Personal access token"
      ],
      "details": "Harvest API v2 supports Personal Access Tokens and full OAuth 2.0 Authorization Code and Implicit flows.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Requires a Harvest account with API access and personal access tokens or OAuth credentials.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Harvest provides a comprehensive REST API v2 covering time tracking, projects, tasks, clients, users, invoices, estimates, expenses, and reports.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/ianaleck/harvest-mcp-server",
      "maintainer": "ianaleck",
      "details": "Several third-party Model Context Protocol (MCP) servers exist for Harvest, such as ianaleck/harvest-mcp-server, standardbeagle/harvest-mcp, and mayank2424/mcp-server-harvest.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/ianaleck/harvest-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/ianaleck/harvest-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/ianaleck/harvest-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Harvest features a well-documented REST API v2 with support for Personal Access Tokens and OAuth 2.0, along with existing third-party MCP implementations.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://help.getharvest.com/api-v2/",
        "source_title": "Harvest API V2 Documentation",
        "claim_supported": "Harvest API v2 overview and endpoint categories",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:06:57.206771+00:00"
      },
      {
        "source_url": "https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/",
        "source_title": "Authentication \u2013 Harvest API V2 Documentation",
        "claim_supported": "Authentication methods including Personal Access Tokens and OAuth2",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:07:05.895346+00:00"
      },
      {
        "source_url": "https://github.com/ianaleck/harvest-mcp-server",
        "source_title": "GitHub - ianaleck/harvest-mcp-server",
        "claim_supported": "Third-party MCP server for Harvest API v2",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:07:13.018823+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 81,
    "identity": {
      "name": "Stripe",
      "category": "Finance and Fintech",
      "one_line_description": "Stripe provides APIs for payments and related business workflows, with separate test and live credentials."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "Basic authentication",
        "JWT or bearer token",
        "Other"
      ],
      "details": "Stripe uses API keys to authenticate requests, supporting HTTP Basic Auth (providing the API key as the username value) or Bearer auth (Authorization: Bearer). It also supports Workload Identity Federation to exchange short-lived cloud provider identity tokens for Stripe access tokens.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can sign up and use Stripe in sandboxes and test mode with test API keys without affecting live data or interacting with banking networks.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "The Stripe API is organized around REST with predictable resource-oriented URLs, accepts form-encoded request bodies, and returns JSON-encoded responses. Official client libraries include Ruby, Python, PHP, Java, Node.js, Go, and .NET.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Official MCP",
      "repository_url": "https://docs.stripe.com/mcp",
      "maintainer": "Stripe",
      "details": "Stripe provides an official MCP server at https://mcp.stripe.com which can be added to an MCP client as a Streamable HTTP server.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "Official MCP",
      "verified_repository_url": "https://docs.stripe.com/mcp",
      "verification_rationale": "Stripe officially documents its hosted Model Context Protocol server at https://docs.stripe.com/mcp, distinguishing the production-hosted MCP service from the separate/deprecated stripe/agent-toolkit repository.",
      "evidence_type": "vendor documentation",
      "date_checked": "2026-11-23"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Stripe has comprehensive documentation, a broad REST API, official SDKs in multiple languages, free sandbox/test mode access, and an official MCP server.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.stripe.com/api",
        "source_title": "Stripe API Reference",
        "claim_supported": "Stripe API is organized around REST, uses API keys via HTTP Basic Auth or Bearer auth, and provides official client libraries (Ruby, Python, PHP, Java, Node.js, Go, .NET).",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:19:38.470324+00:00"
      },
      {
        "source_url": "https://apitracker.io/a/stripe",
        "source_title": "Stripe API - Documentation & Integration",
        "claim_supported": "Stripe provides an official MCP implementation at https://mcp.stripe.com and supports REST and Webhooks.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T12:19:39.870284+00:00"
      },
      {
        "source_url": "https://docs.stripe.com/keys",
        "source_title": "API keys | Stripe Documentation",
        "claim_supported": "Stripe supports publishable keys, restricted API keys, secret API keys, and organisation API keys, along with test mode sandboxes.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:19:42.100667+00:00"
      }
    ],
    "research_status": "completed",
    "error_message": null
  },
  {
    "id": 82,
    "identity": {
      "name": "Plaid",
      "category": "Finance and Fintech",
      "one_line_description": "Financial data infrastructure company that connects applications to bank accounts through an API and client-side linking components."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "Other"
      ],
      "details": "Almost all Plaid API endpoints require a client_id and secret, passed either in the request body or in headers (PLAID-CLIENT-ID and PLAID-SECRET).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Users can create an account on the Plaid Dashboard and obtain Sandbox credentials immediately for free testing. Production access requires approval and migration.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Plaid offers a comprehensive JSON over HTTPS REST API with hundreds of paths, an OpenAPI definition, postman collections, and official client libraries.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/ymcrcat/plaid-mcp-server",
      "maintainer": "ymcrcat",
      "details": "Third-party and community MCP servers exist for integrating Plaid banking services with AI tools like Claude and ChatGPT.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/ymcrcat/plaid-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/ymcrcat/plaid-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/ymcrcat/plaid-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Sandbox environment provides instant free credentials and documentation/Postman collections allow fast onboarding and testing.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://plaid.com/docs/api/",
        "source_title": "API - Overview | Plaid Docs",
        "claim_supported": "Plaid API is JSON over HTTPS, uses client_id and secret headers or body, and provides Sandbox/Production environments.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:20:14.636308+00:00"
      },
      {
        "source_url": "https://www.apideck.com/blog/how-to-get-your-plaid-api-key",
        "source_title": "How to Get Your Plaid API Key",
        "claim_supported": "Users can sign up for a free Plaid account via dashboard.plaid.com and immediately obtain Sandbox credentials for testing.",
        "source_type": "Guides & Tutorials",
        "retrieved_timestamp": "2026-11-23T12:20:23.566289+00:00"
      },
      {
        "source_url": "https://github.com/ymcrcat/plaid-mcp-server",
        "source_title": "GitHub - ymcrcat/plaid-mcp-server \u00b7 GitHub",
        "claim_supported": "Community MCP server exists for Plaid banking services integration with Claude and ChatGPT.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:20:29.226003+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 83,
    "identity": {
      "name": "Binance",
      "category": "Finance and Fintech",
      "one_line_description": "Binance is a cryptocurrency exchange offering spot, margin, and futures trading, market data, and account management capabilities."
    },
    "authentication": {
      "auth_methods": [
        "API key"
      ],
      "details": "Requires Binance API key and API secret credentials configured as environment variables.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Users can sign up for a Binance account and generate API credentials or testnet API keys self-serve.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Offers extensive exchange APIs covering market data, trading, wallet management, futures, and margin services.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/nirholas/Binance-MCP",
      "maintainer": "nirholas",
      "details": "Multiple community and third-party Model Context Protocol (MCP) servers exist for Binance, such as ethancod1ng/binance-mcp-server, nirholas/Binance-MCP, and py7hagoras/binance-mcp.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/nirholas/Binance-MCP",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/nirholas/Binance-MCP",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/nirholas/Binance-MCP).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Third-party open source MCP servers are readily available with clear installation instructions and standard environment variable authentication using Binance API keys.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/ethancod1ng/binance-mcp-server",
        "source_title": "GitHub - ethancod1ng/binance-mcp-server: A Model Context Protocol (MCP) server for integrating AI assistants with Binance cryptocurrency exchange APIs",
        "claim_supported": "Provides a Binance Spot MCP server requiring Node.js and API credentials.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:07:39.252130+00:00"
      },
      {
        "source_url": "https://github.com/nirholas/Binance-MCP",
        "source_title": "GitHub - nirholas/Binance-MCP: MCP server for the Binance exchange API with spot market data, orders, earn, staking, wallet and more.",
        "claim_supported": "Offers comprehensive Binance MCP server with 478+ tools covering the Binance.com API.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:07:41.268813+00:00"
      },
      {
        "source_url": "https://github.com/py7hagoras/binance-mcp",
        "source_title": "GitHub - py7hagoras/binance-mcp: Binance MCP Server",
        "claim_supported": "MCP server implementation requiring Binance API key and API secret environment variables.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:07:43.212655+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 84,
    "identity": {
      "name": "Paygent Connect",
      "category": "Finance and Fintech",
      "one_line_description": "Paygent provides a cost control and runtime layer for AI agents, offering real-time usage tracking, spending limits, soft/hard gates, and automated billing."
    },
    "authentication": {
      "auth_methods": [
        "JWT or bearer token"
      ],
      "details": "Authentication uses a Bearer token in the 'Authorization: Bearer pg_live_...' header, with the exception of the product creation endpoint (POST /products) which requires no authentication and returns the initial API key.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can sign up and create a product/tenant directly via the unauthenticated POST /products endpoint to obtain an API key.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "moderate",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Paygent exposes a REST API at https://api.paygent.to/api/v1 for managing products, plans, and users, along with official SDKs (Python, TypeScript, Node.js, Go) and webhook alerts.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": null,
      "details": "No Model Context Protocol (MCP) server integration or mention was found in the retrieved official Paygent documentation.",
      "confidence": "High",
      "original_extracted_status": "No verified MCP found",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "No verified official, third-party, or community MCP repository discovered.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Clear backend API documentation, explicit SDK installation instructions, and an unauthenticated self-serve onboarding endpoint make integration straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.paygent.to/reference/api-reference",
        "source_title": "Backend API Reference - Paygent Documentation",
        "claim_supported": "Paygent exposes a REST API with bearer token authentication and an unauthenticated product creation endpoint.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:08:00.941425+00:00"
      },
      {
        "source_url": "https://docs.withpaygent.com/documentation/getting-started/quick-start",
        "source_title": "Quick Start | Paygent Documentation",
        "claim_supported": "SDKs are available for Python, Node.js, and Go, enabling automatic usage tracking and order/billing setup.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:08:04.808484+00:00"
      },
      {
        "source_url": "https://www.paygent.to",
        "source_title": "Paygent \u2014 Cost Control for AI Agents | Visibility, Limits & Alerts",
        "claim_supported": "Provides cost visibility, spending limits, real-time webhooks, and dashboard metrics for AI agents.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:08:11.996772+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 85,
    "identity": {
      "name": "iPayX",
      "category": "Finance and Fintech",
      "one_line_description": "iPayX is a financial technology platform providing tools to audit foreign exchange (FX) fees, compare currency conversion margins, score cross-border payment invoices, and retrieve mid-market rates."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token"
      ],
      "details": "Available without an API key under limited shared allowance or via a Bearer API key (e.g. optional IPAYX_API_KEY environment variable for live provider quotes).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "The tool can be installed via npx without an API key for basic functions like mid-market rates, and free API keys are available from ipayx.ai.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "moderate",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Exposes tools and functions via MCP servers such as @ipayx/mcp-fx-audit.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Ipayx-stellar",
      "details": "Exposes an official/supported MCP server package named @ipayx/mcp-fx-audit with four tools: audit_fx_fee, compare_providers, score_invoice, and get_mid_market_rate.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The MCP server can be installed easily using npx (@ipayx/mcp-fx-audit) with optional free API keys for extended live provider capabilities.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://glama.ai/mcp/connectors/co.supabase.hvujzsdwcoweirroubeh/i-pay-x-fx-audit/tools/full_forensic_fx_report",
        "source_title": "full_forensic_fx_report - iPayX FX Audit | Glama",
        "claim_supported": "Available without an API key within shared allowance or with valid Bearer API keys.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:08:31.350812+00:00"
      },
      {
        "source_url": "https://mcp.so/servers/mcp-fx-audit-ipayx-stellar",
        "source_title": "Ipayx Fx Audit MCP Server: Tools, Setup & Config",
        "claim_supported": "Ipayx Fx Audit MCP server exposes four tools (audit_fx_fee, compare_providers, score_invoice, get_mid_market_rate) via npx -y @ipayx/mcp-fx-audit using optional IPAYX_API_KEY.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:08:33.148928+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 86,
    "identity": {
      "name": "QuickBooks",
      "category": "Finance and Fintech",
      "one_line_description": "QuickBooks is an accounting and financial management platform by Intuit that provides a cloud-based REST API for programmatic access to financial data, invoices, customers, and payments."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2"
      ],
      "details": "The QuickBooks API uses OAuth 2.0 exclusively via the Authorization Code flow, utilizing Client IDs, Client Secrets, access tokens (expiring in 60 minutes), and refresh tokens.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can sign in to the Intuit Developer Portal for free, create an app, and automatically provision sandbox QuickBooks Online companies pre-loaded with sample data.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Exposes a cloud-based REST API at developer.intuit.com supporting CRUD operations for accounting entities, query endpoints, reports, change data capture, and webhooks.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/intuit/quickbooks-online-mcp-server",
      "maintainer": "Intuit",
      "details": "Intuit provides an official QuickBooks Online MCP Server that exposes QBO features and CRUD tools via the Model Context Protocol.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/intuit/quickbooks-online-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/intuit/quickbooks-online-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/intuit/quickbooks-online-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "QuickBooks provides clear developer documentation, a free developer portal with sandbox companies, standard OAuth 2.0 authentication, official MCP servers, and comprehensive SDKs/APIs.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://dev.to/zuplo/quickbooks-api-complete-developers-guide-2026-3l77",
        "source_title": "QuickBooks API: Complete Developer's Guide (2026) - DEV Community",
        "claim_supported": "QuickBooks offers a REST API using OAuth 2.0 authentication and allows creating free developer accounts with automatic sandbox provisioning.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:09:02.465636+00:00"
      },
      {
        "source_url": "https://www.activepieces.com/blog/quickbooks-api-setup-pricing-and-errors-2026-guide",
        "source_title": "QuickBooks API: Setup, Pricing and Errors (2026 Guide)",
        "claim_supported": "Details QuickBooks API plans, request rate limits (500 requests per minute), and OAuth token lifespans.",
        "source_type": "Pricing Page",
        "retrieved_timestamp": "2026-11-23T13:09:35.356579+00:00"
      },
      {
        "source_url": "https://github.com/intuit/quickbooks-online-mcp-server",
        "source_title": "GitHub - intuit/quickbooks-online-mcp-server: The QuickBooks MCP Server lets AI assistants access QuickBooks data via a standard interface.",
        "claim_supported": "Intuit provides an official Model Context Protocol server for QuickBooks Online integrations.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:09:48.135174+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 87,
    "identity": {
      "name": "Xero",
      "category": "Finance and Fintech",
      "one_line_description": "Xero is an online accounting software platform that provides a public REST API for core financials, invoices, contacts, bank transactions, payroll, assets, and project tracking."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2"
      ],
      "details": "Xero requires OAuth 2.0 with PKCE or Authorization Code flow for all API access. Each request also requires the Xero-Tenant-Id header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Developers can register an app at the Xero developer portal for free to obtain client IDs and secrets and begin sandbox testing.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Xero provides six distinct APIs (Accounting, Assets, Projects, Payroll, Files, BankFeeds), official SDKs for Python, Node.js, .NET, Java, Ruby, Go, and PHP, and webhook capabilities.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/xeroapi/xero-mcp-server",
      "maintainer": "XeroAPI",
      "details": "Xero provides an official Model Context Protocol (MCP) server repository maintained by XeroAPI that integrates with the MCP protocol for standardized access to Xero's accounting and business features.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/xeroapi/xero-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/xeroapi/xero-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/xeroapi/xero-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Comprehensive official documentation, official SDKs, clear OAuth 2.0 guidelines, sandbox/demo environments, and an official MCP server make building integrations straightforward.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://satvasolutions.com/blog/xero-api-integration-guide",
        "source_title": "Xero API Guide 2026: Endpoints, OAuth, Limits & Integration Tips | Satva Solutions",
        "claim_supported": "Xero API uses RESTful JSON over HTTPS, OAuth 2.0 with PKCE, and has six distinct APIs with official SDKs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:10:03.911553+00:00"
      },
      {
        "source_url": "https://www.merge.dev/blog/xero-api",
        "source_title": "Xero API integration: everything you need to know",
        "claim_supported": "Xero exposes publicly available endpoints for resources like purchase orders, bank transactions, and invoices using GET, PUT, and POST.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:10:09.381475+00:00"
      },
      {
        "source_url": "https://www.activepieces.com/blog/xero-api-setup-authentication-and-limits-2026",
        "source_title": "Xero API: Setup, Authentication and Limits (2026)",
        "claim_supported": "Xero API is an OAuth 2.0 REST API where developers register an app to receive a client ID and secret, carrying a bearer token plus tenant ID.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:10:12.427521+00:00"
      },
      {
        "source_url": "https://github.com/xeroapi/xero-mcp-server",
        "source_title": "GitHub - XeroAPI/xero-mcp-server: An MCP server that integrates with the MCP protocol",
        "claim_supported": "XeroAPI maintains an official MCP server integrating with the Model ContextProtocol, supporting OAuth2 custom connections and bearer tokens.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:10:19.369456+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 88,
    "identity": {
      "name": "Brex",
      "category": "Finance and Fintech",
      "one_line_description": "Brex is an AI-native corporate-card and spend-management platform offering corporate cards, expense tracking, and spend controls with a public REST API."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "Personal access token",
        "Basic authentication"
      ],
      "details": "Authentication uses user tokens (API keys/Bearer tokens) generated from the Brex dashboard under Settings > Developer, or via OAuth 2.0 with granular scopes and basic authentication where supported.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "To use the Brex developer API and generate credentials, users must have an active Brex account, accept the developer API agreement, and adhere to subscription requirements.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks",
        "SOAP"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Brex provides a documented REST API covering expenses, payments, transactions, budgets, team, and travel at developer.brex.com, alongside official and community-maintained SDKs (such as TypeScript libraries) and webhook support.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": null,
      "details": "No official MCP server exists from Brex, but community servers for the Brex API covering expense, transaction, and financial resource management are published on GitHub and npm.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/dennisonbertram/brex-mcp-server.git",
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Audit check revealed the claimed repository https://github.com/dennisonbertram/brex-mcp-server.git returns HTTP 404 Not Found. Downgraded to No verified MCP found without inventing replacement repositories.",
      "evidence_type": "unverified",
      "date_checked": "2026-11-23"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "The API is fully documented with OpenAPI specs, TypeScript client libraries, and REST endpoints, but requires an active paid Brex account and API credentials to test and integrate.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://supergood.ai/api-report-card/brex",
        "source_title": "Brex API: Grade C | The API Report Card",
        "claim_supported": "A documented REST API at developer.brex.com covers expenses, payments, transactions, budgets, team, travel, and webhooks with OAuth 2.0 and user tokens.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:10:36.395639+00:00"
      },
      {
        "source_url": "https://apitracker.io/a/brex",
        "source_title": "Brex API - Docs, SDKs & Integration",
        "claim_supported": "Details API styles as REST, SOAP, supported webhooks, OpenAPI specifications, and base endpoint https://platform.brexapis.com/",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:10:40.825591+00:00"
      },
      {
        "source_url": "https://developer.brex.com/guides/authentication",
        "source_title": "Authentication",
        "claim_supported": "User tokens are generated from dashboard.brex.com under Developer > Settings and passed via Authorization: Bearer headers.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:10:45.874620+00:00"
      },
      {
        "source_url": "https://apps.make.com/brex?position=5",
        "source_title": "Brex - Apps Documentation",
        "claim_supported": "Requires an active Brex account and API credentials obtained from Settings > Developer in the dashboard.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:10:51.127477+00:00"
      },
      {
        "source_url": "https://ubos.tech/mcp/brex-mcp-server/",
        "source_title": "Brex MCP Server \u2013 README | MCP Marketplace",
        "claim_supported": "Community MCP server bridges AI agents and the Brex financial platform for accounts, expenses, budgets, and team resources.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:10:54.216072+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 89,
    "identity": {
      "name": "Ramp",
      "category": "Finance and Fintech",
      "one_line_description": "Enterprise corporate cards and finance automation platform offering corporate cards, expense management, bill pay, and a Developer API."
    },
    "authentication": {
      "auth_methods": [
        "OAuth2",
        "API key",
        "JWT or bearer token"
      ],
      "details": "Every request carries Authorization: Bearer <access token>, issued through OAuth 2.0 Client Credentials or Authorization Code flow.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Admin access is required within the Ramp app to create developer apps and obtain API credentials or sandbox credentials.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "Provides a REST Developer API with an OpenAPI schema, webhooks, and extensive coverage of transactions, bills, vendors, cards, users, and reimbursements.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Ramp",
      "details": "Ramp hosts an official Model Context Protocol (MCP) server at https://mcp.ramp.com/mcp with sample data at https://demo-mcp.ramp.com/mcp supporting OAuth sign-in.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://mcp.ramp.com/mcp",
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Ramp provides clear developer documentation, self-serve developer credential creation, sandbox environments, and an official MCP server.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://support.ramp.com/accessing-the-developer-api/",
        "source_title": "Ramp Help Center",
        "claim_supported": "Setup guide, admin access requirement, sandbox base URL, and developer app creation workflow.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:11:15.162969+00:00"
      },
      {
        "source_url": "https://apitracker.io/a/ramp",
        "source_title": "Ramp API - Docs, SDKs & Integration",
        "claim_supported": "Official MCP server implementation details and endpoint structure.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:11:16.467905+00:00"
      },
      {
        "source_url": "https://www.scalekit.com/blog/ramp-mcp-vs-api",
        "source_title": "Ramp MCP vs Ramp API for AI Agents: Which to Build On",
        "claim_supported": "Ramp MCP URLs, OAuth token generation details, endpoints, and OpenAPI schema availability.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:11:19.631367+00:00"
      },
      {
        "source_url": "https://docs.nexla.com/user-guides/connectors/ramp_api",
        "source_title": "Ramp | Nexla Docs",
        "claim_supported": "OAuth 2.0 Client Credentials grant flow and prerequisite settings in Ramp UI.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:11:22.248617+00:00"
      }
    ],
    "research_status": "Complete",
    "error_message": null
  },
  {
    "id": 90,
    "identity": {
      "name": "PitchBook",
      "category": "Finance and Fintech",
      "one_line_description": "PitchBook is a market intelligence platform providing a RESTful API and Model Context Protocol (MCP) server for private and public capital market data such as companies, deals, investors, and funds."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2"
      ],
      "details": "PitchBook supports static API key authentication passed via the Authorization header using 'PB-Token {API_KEY}', as well as remote MCP OAuth authentication depending on the access channel.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "API access is a paid, contract-gated add-on layered on top of a paid platform subscription, with no self-serve developer signup or free trial available.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "PitchBook provides a RESTful JSON API covering core entity types like companies, deals, investors, funds, people, limited partners, and service providers, alongside integrations such as dlt for Python pipelines.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "PitchBook",
      "details": "PitchBook offers an official remote Model Context Protocol (MCP) server endpoint at https://premium.mcp.pitchbook.com/mcp utilizing Streamable HTTP transport and OAuth authentication.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://premium.mcp.pitchbook.com/mcp",
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Difficult",
      "blockers": [
        "Paid access",
        "Partner access",
        "Authentication complexity"
      ],
      "justification": "While robust developer tooling and MCP endpoints exist, building on PitchBook is difficult because API access is strictly contract-gated, requires a sales conversation with the Direct Data team, incurs high subscription costs, and lacks a fully public self-serve sandbox or open endpoint documentation prior to signing.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://investordatarooms.com/pitchbook-api/",
        "source_title": "PitchBook API: Access, Pricing, and What You Get (2026 Guide)",
        "claim_supported": "API access requires a separate contract with PitchBook's Direct Data team and is a premium add-on to a paid platform subscription.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:11:45.873397+00:00"
      },
      {
        "source_url": "https://dlthub.com/context/source/pitchbook-api",
        "source_title": "PitchBook Python API Docs | dltHub",
        "claim_supported": "REST API base URL is https://api.pitchbook.com, authenticating requests using a static API key in the Authorization header with the format 'PB-Token {API_KEY}'.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:11:48.484431+00:00"
      },
      {
        "source_url": "https://emasterlabs.com/pitchbook-api-review",
        "source_title": "PitchBook API Review: Can You Build on It? [2026]",
        "claim_supported": "There is no developer portal, self-serve key generator, or free trial for the API itself.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:11:52.493673+00:00"
      },
      {
        "source_url": "https://developers.frontegg.com/agen-for-work/connectors/marketplace/pitchbook",
        "source_title": "PitchBook integration",
        "claim_supported": "PitchBook API requests use a static API key sent as the Authorization: PB-Token <key> header and charges credits per request.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:11:55.685852+00:00"
      },
      {
        "source_url": "https://mcp.so/servers/pitchbook",
        "source_title": "PitchBook MCP Server: Tools, Setup & Config",
        "claim_supported": "PitchBook provides an official remote MCP server at https://premium.mcp.pitchbook.com/mcp using OAuth authentication and Streamable HTTP transport.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:12:02.125670+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 91,
    "identity": {
      "name": "NotebookLM",
      "category": "AI, Research and Media-native",
      "one_line_description": "NotebookLM (rebranded to Gemini Notebook) is a Google AI-powered note-taking and research assistant tool that provides grounded, citation-backed answers and content generation from user-supplied document sources."
    },
    "authentication": {
      "auth_methods": [
        "Other"
      ],
      "details": "NotebookLM has no official public API and relies on browser automation (such as Chromium/CDP or reading browser cookie stores directly) and user session cookies from Google login.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Access is available via personal consumer accounts and standard user login workflows without requiring a paid API developer tier, because there is no official public API and wrappers use personal browser sessions.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": false,
      "api_types": [],
      "api_breadth": "narrow",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Google NotebookLM does not offer an official public API; community-driven wrappers and MCP servers automate internal web APIs and browser DOM interactions.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/jacob-bd/gemini-notebook-mcp-cli",
      "maintainer": "Community developers",
      "details": "Multiple community-maintained Model Context Protocol (MCP) servers and CLI tools exist (e.g., gemini-notebook-mcp-cli, notebooklm-mcp) enabling AI agents to connect to NotebookLM.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/jacob-bd/gemini-notebook-mcp-cli",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/jacob-bd/gemini-notebook-mcp-cli",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/jacob-bd/gemini-notebook-mcp-cli).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "No public API"
      ],
      "justification": "While there is no official public API, robust community REST API wrappers and MCP servers exist that allow programmatic integration and agent workflows through browser session authentication.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/gnh1201/notebooklm-rest-api",
        "source_title": "GitHub - gnh1201/notebooklm-rest-api: A REST API wrapper for Google NotebookLM powered by notebooklm-py",
        "claim_supported": "NotebookLM lacks an official API; wrappers rely on unofficial Python libraries and browser sessions.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:12:24.576537+00:00"
      },
      {
        "source_url": "https://github.com/jacob-bd/gemini-notebook-mcp-cli/blob/main/docs/AUTHENTICATION.md",
        "source_title": "gemini-notebook-mcp-cli/docs/AUTHENTICATION.md at main \u00b7 jacob-bd/gemini-notebook-mcp-cli",
        "claim_supported": "Gemini Notebook uses browser cookies for authentication as there is no official API.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:12:26.517524+00:00"
      },
      {
        "source_url": "https://github.com/teng-lin/notebooklm-py",
        "source_title": "GitHub - teng-lin/notebooklm-py: Unofficial Python API and agentic skill for Google Gemini Notebook",
        "claim_supported": "Google rebranded NotebookLM to Gemini Notebook and un \u043e\u0444\u0456\u0446\u0456\u0439\u043d\u0430 Python API provides programmatic access.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:12:28.246959+00:00"
      },
      {
        "source_url": "https://github.com/PleasePrompto/notebooklm-mcp",
        "source_title": "GitHub - PleasePrompto/notebooklm-mcp: MCP server for NotebookLM",
        "claim_supported": "Community MCP servers allow AI agents to research documentation directly via browser automation.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:12:29.851104+00:00"
      },
      {
        "source_url": "https://github.com/kkaminsk/NotebookLM-MCP",
        "source_title": "GitHub - kkaminsk/NotebookLM-MCP: Building another MCP.",
        "claim_supported": "Python-based Model Context Protocol servers bridge AI clients with Google NotebookLM.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:12:31.739914+00:00"
      },
      {
        "source_url": "https://github.com/jacob-bd/gemini-notebook-mcp-cli",
        "source_title": "GitHub - jacob-bd/gemini-notebook-mcp-cli: Programmatic access to Gemini Notebook",
        "claim_supported": "NotebookLM has no API, leading to community-built CLI and MCP options.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:12:33.441243+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 92,
    "identity": {
      "name": "Otter AI",
      "category": "AI, Research and Media-native",
      "one_line_description": "Otter.ai provides conversation recording, meeting notes, transcription, summaries, action items, and insights."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token"
      ],
      "details": "Requires an Otter API key or Bearer Token obtained from an Otter Enterprise workspace developer tab.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Otter offers its Public API and developer settings only to Enterprise workspaces.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "narrow",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Uses an unofficial or Enterprise-restricted API surface with endpoints for listing conversations, fetching transcripts, getting user details, and searching.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/DarrenZal/otter-mcp",
      "maintainer": "DarrenZal / HelpCode team",
      "details": "There are third-party/community MCP servers available such as DarrenZal/otter-mcp and AnythingMCP's connector that connect to Otter.ai transcripts and tools.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/DarrenZal/otter-mcp",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/DarrenZal/otter-mcp",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/DarrenZal/otter-mcp).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "The API requires an Enterprise plan to access developer keys, but third-party MCP implementations and unofficial APIs allow building integrations given valid enterprise credentials.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apitracker.io/a/otter-ai",
        "source_title": "Otter.ai API - Docs, SDKs & Integration",
        "claim_supported": "Otter.ai general overview and integration details summary.",
        "source_type": "API Directory",
        "retrieved_timestamp": "2026-11-23T12:20:53.829522+00:00"
      },
      {
        "source_url": "https://anythingmcp.com/guides/connect-otter-to-cursor",
        "source_title": "Connect Otter.ai to Cursor via MCP | AnythingMCP",
        "claim_supported": "Otter offers its Public API only to Enterprise workspaces; uses OTTER_API_KEY with Bearer token authentication.",
        "source_type": "Guide",
        "retrieved_timestamp": "2026-11-23T12:21:01.545238+00:00"
      },
      {
        "source_url": "https://github.com/DarrenZal/otter-mcp",
        "source_title": "GitHub - DarrenZal/otter-mcp: MCP server for Otter.ai transcript search and retrieval",
        "claim_supported": "Third-party MCP implementation using unofficial Otter.ai API endpoints for search and retrieval.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:21:03.310095+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 93,
    "identity": {
      "name": "Fathom",
      "category": "AI, Research and Media-native",
      "one_line_description": "Fathom provides a public API and meeting intelligence platform enabling developers to access meeting summaries, transcripts, and action items."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "REST API resources are authenticated using API keys generated via the Fathom website's settings area or via OAuth credentials. SDK documentation explicitly references apiKeyAuth and bearerAuth security schemes.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Anyone can browse the API docs and start building; API keys are generated at the user level in settings.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Fathom offers a public REST API, official TypeScript and Python SDKs, webhooks, and OAuth app registration capabilities.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/jonathanwsloan/fathom-mcp-server",
      "maintainer": "jonathanwsloan, jerichosequitin, luminarylane",
      "details": "Multiple community-maintained Model Context Protocol (MCP) servers exist on GitHub (e.g., fathom-mcp-server, fathom-ai-mcp) to integrate Fathom with Claude Desktop and other MCP clients.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/jonathanwsloan/fathom-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/jonathanwsloan/fathom-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/jonathanwsloan/fathom-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API is self-serve, fully documented with quickstart guides, offers official SDKs (TypeScript and Python), and has readily available community MCP servers for rapid integration.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://help.fathom.video/en/articles/8368641",
        "source_title": "Public API",
        "claim_supported": "Fathom has a public API that allows developers to access meeting insights, summaries, transcripts, and action items. Anyone can browse docs and start building.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:12:53.772963+00:00"
      },
      {
        "source_url": "https://developers.fathom.ai",
        "source_title": "Introduction - Fathom API",
        "claim_supported": "Official documentation outlines quickstart guides, API endpoints, webhooks, TypeScript/Python SDKs, and OAuth support.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:12:55.704115+00:00"
      },
      {
        "source_url": "https://developers.fathom.ai/api-overview",
        "source_title": "Api overview - Fathom API",
        "claim_supported": "REST API resources are authenticated with API keys generated via the Fathom website settings area. Details global rate limits (60 calls/min).",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:12:56.668201+00:00"
      },
      {
        "source_url": "https://developers.fathom.ai/sdks/authentication",
        "source_title": "Authentication - Fathom API",
        "claim_supported": "API Key and Bearer Token authentication methods are available for TypeScript and Python SDKs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:12:59.205350+00:00"
      },
      {
        "source_url": "https://github.com/jonathanwsloan/fathom-mcp-server",
        "source_title": "GitHub - jonathanwsloan/fathom-mcp-server \u00b7 GitHub",
        "claim_supported": "Community MCP server integrating Fathom's meeting intelligence platform with MCP clients.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:13:04.076587+00:00"
      },
      {
        "source_url": "https://github.com/jerichosequitin/fathom-ai-mcp",
        "source_title": "GitHub - jerichosequitin/fathom-ai-mcp",
        "claim_supported": "Alternative community MCP server for the Fathom AI meeting intelligence API.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:13:05.963105+00:00"
      },
      {
        "source_url": "https://github.com/luminarylane/fathom-mcp-server",
        "source_title": "GitHub - luminarylane/fathom-mcp-server \u00b7 GitHub",
        "claim_supported": "Additional community MCP server providing tool integrations for Fathom meeting data.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:13:07.958296+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 94,
    "identity": {
      "name": "Consensus",
      "category": "AI, Research and Media-native",
      "one_line_description": "An AI research platform and API that helps find and synthesize peer-reviewed scientific literature and citations at scale."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2",
        "JWT or bearer token"
      ],
      "details": "Consensus exposes a REST API using an x-api-key header security scheme and an OAuth-enabled MCP server. Enterprise API key access is also documented for MCP, sent as Authorization: Bearer YOUR_API_KEY.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Developer access is available through a request access flow for enterprise/API access or via integration credentials tied to accounts.",
      "confidence": "Medium"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "narrow",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Consensus exposes a REST API at api.consensus.app for paper search, supported by an OpenAPI specification and an OAuth-enabled MCP server.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Consensus",
      "details": "Consensus provides an OAuth-enabled Model Context Protocol (MCP) server at https://mcp.consensus.app/mcp supporting OAuth Dynamic Client Registration and enterprise API key access.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "Consensus provides a well-documented public REST API and an official MCP server with OAuth support, but requires requesting enterprise/API access.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://agentsapis.com/consensus-api/",
        "source_title": "Consensus API - Complete Developer Guide",
        "claim_supported": "Consensus API provides programmatic access to Consensus Search via a v1 quick search endpoint at api.consensus.app.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:13:25.234668+00:00"
      },
      {
        "source_url": "https://integrations.sh/consensus.app/",
        "source_title": "consensus.app \u2014 integrations",
        "claim_supported": "Consensus exposes a REST API at https://api.consensus.app, an OAuth-enabled MCP server at https://mcp.consensus.app/mcp, and supports x-api-key and Bearer token authentication.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:13:30.252364+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 95,
    "identity": {
      "name": "Reducto",
      "category": "AI, Research and Media-native",
      "one_line_description": "An agentic document platform API that parses, extracts, classifies, splits, and edits complex documents such as PDFs, Word files, spreadsheets, and scanned images."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token"
      ],
      "details": "API key passed as a Bearer token in the Authorization header (e.g., Bearer REDUCTO_API_KEY).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "Users can sign up for a free account/tier without a form or credit card to get an API key.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Provides REST API endpoints for parse, extract, classify, split, edit, along with official SDKs for Python, Node.js, and Go.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/franckyo/mcp-server-reducto",
      "maintainer": "Reducto / Community",
      "details": "Offers an MCP server setup connecting AI agents to Reducto via the Model Context Protocol, supporting hosted options or local setups.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "https://github.com/franckyo/mcp-server-reducto",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/franckyo/mcp-server-reducto",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/franckyo/mcp-server-reducto).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Clear documentation, official SDKs in multiple languages, straightforward API key generation, and available OpenAPI specifications make building with Reducto easy.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://apis.io/apis/reducto/reducto-version-api",
        "source_title": "Reducto Version API \u2014 OpenAPI & Docs | APIs.io",
        "claim_supported": "Provides REST API specs, OpenAPI URL, and Bearer token security scheme.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:13:56.996556+00:00"
      },
      {
        "source_url": "https://docs.reducto.ai/v/legacy/quickstart",
        "source_title": "API Quickstart | Reducto Documentation",
        "claim_supported": "Details Python and Node.js SDK installation, endpoints, and Bearer authentication headers.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:14:02.415587+00:00"
      },
      {
        "source_url": "https://reducto.ai/developers",
        "source_title": "Developers | Reducto \u2014 The Agentic Document Platform API",
        "claim_supported": "Describes core functionalities like parse, extract, classify, split, and edit across 30+ file types.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:14:05.390276+00:00"
      },
      {
        "source_url": "https://docs.reducto.ai/agent-guide",
        "source_title": "Reducto API Reference for Coding Agents | Reducto Documentation",
        "claim_supported": "Details endpoints such as /parse, /extract, /split, /classify, /edit, and /upload with payload properties.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:14:07.819913+00:00"
      },
      {
        "source_url": "https://docs.reducto.ai/quickstart",
        "source_title": "API Quickstart | Reducto Documentation",
        "claim_supported": "Prerequisites outline free account sign-up and key generation in Studio.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:14:10.125741+00:00"
      },
      {
        "source_url": "https://github.com/franckyo/mcp-server-reducto",
        "source_title": "GitHub - franckyo/mcp-server-reducto \u00b7 GitHub",
        "claim_supported": "Details Model Context Protocol server configuration and usage options with Reducto.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:14:13.709038+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 96,
    "identity": {
      "name": "Devin",
      "category": "AI, Research and Media-native",
      "one_line_description": "Devin is an autonomous AI developer platform enabling automated workflows, coding sessions, and software integrations through a public API and CLI."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "JWT or bearer token"
      ],
      "details": "Modern Devin API keys associated with Service Users start with the cog_ prefix, passed as a Bearer token in the Authorization header. Personal access tokens are also supported.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Devin provides enterprise accounts and standard plans with billing handled through standard Devin pricing models and trials requiring valid cards or specific plans.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK"
      ],
      "api_breadth": "broad",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Devin provides a comprehensive REST API organized into Organization and Enterprise scopes, alongside a CLI and various open-source integrations.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Official MCP",
      "repository_url": "https://docs.devin.ai/mcp",
      "maintainer": "Cognition",
      "details": "Community-maintained MCP server repositories exist to let Claude Code delegate implementation tasks to Devin, alongside Devin's own support for connecting external tool servers via MCP in Devin CLI.",
      "confidence": "High",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": "https://github.com/iainmck29/devin-mcp",
      "verified_status": "Official MCP",
      "verified_repository_url": "https://docs.devin.ai/mcp",
      "verification_rationale": "Cognition officially provides and operates a hosted Model Context Protocol server endpoint at https://docs.devin.ai/mcp (HTTP transport version 1.0.0) providing tool and search retrieval capabilities for Devin documentation.",
      "evidence_type": "vendor documentation",
      "date_checked": "2026-11-23"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "Developers can easily interact with Devin's REST API and service user API keys, but access is tied to a paid or enterprise plan.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://docs.devin.ai/api-reference/overview",
        "source_title": "API Overview - Devin Docs",
        "claim_supported": "The API is organized into Organization and Enterprise scopes using Bearer tokens with service user credentials.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:21:24.335660+00:00"
      },
      {
        "source_url": "https://fast.io/resources/devin-ai-api-key/",
        "source_title": "How to Generate and Use a Devin AI API Key | Fastio",
        "claim_supported": "Devin API keys associated with Service Users start with the cog_ prefix.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:21:32.096242+00:00"
      },
      {
        "source_url": "https://github.com/iainmck29/devin-mcp",
        "source_title": "GitHub - iainmck29/devin-mcp \u00b7 GitHub",
        "claim_supported": "Community MCP server implementation enabling integration with Devin.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T12:21:36.036808+00:00"
      },
      {
        "source_url": "https://docs.devin.ai/cli/extensibility/mcp/overview",
        "source_title": "MCP Overview - Devin Docs",
        "claim_supported": "MCP lets you connect external tool servers to Devin CLI.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T12:21:34.299937+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 97,
    "identity": {
      "name": "higgsfield",
      "category": "AI, Research and Media-native",
      "one_line_description": "Higgsfield provides an application programming interface for programmatic generation across image, video, and audio models, drawing directly from standard account credit pools."
    },
    "authentication": {
      "auth_methods": [
        "API key",
        "OAuth2"
      ],
      "details": "The Higgsfield API authenticates requests using a custom authorization header combining a key identifier and an API secret in the format 'Authorization: Key id:secret'. The official hosted MCP uses OAuth 2.1 via browser sign-in.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Paid-plan dependent",
      "details": "Higgsfield plans are paid and API usage draws from account credit pools. Unlimited web plan benefits do not apply to automated code calls, CLI, or MCP usage.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "SDK",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": true,
      "details": "Offers a REST API at api.higgsfield.ai with official Python and TypeScript/Node.js SDKs, webhook support, and asynchronous job polling.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "Higgsfield",
      "details": "Higgsfield runs a hosted, remote Model Context Protocol (MCP) server launched in spring 2026, documented on Higgsfield's official MCP page at higgsfield.ai/mcp.",
      "confidence": "High",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": "mcp.higgsfield.ai/mcp",
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Medium",
      "blockers": [
        "Paid access"
      ],
      "justification": "The API is fully documented with official SDKs and endpoints, but requires paid account credits or a paid subscription since web unlimited tiers do not apply.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://higgsfield.ai/creator-hub/help-center/getting-started/official-higgsfield-platforms",
        "source_title": "What are the official Higgsfield platforms?",
        "claim_supported": "Official platforms include open.higgsfield.ai, docs.higgsfield.ai, and the official Higgsfield MCP at mcp.higgsfield.ai/mcp.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:14:31.174223+00:00"
      },
      {
        "source_url": "https://www.layer3labs.io/guides/higgsfield-api",
        "source_title": "Higgsfield API: Key Setup, Docs, Endpoints, and Costs",
        "claim_supported": "API uses base URL api.higgsfield.ai, Authorization: Key id:secret header, and Python/TypeScript SDKs.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:14:33.766417+00:00"
      },
      {
        "source_url": "https://www.scalekit.com/blog/higgsfield-mcp-vs-api",
        "source_title": "Higgsfield MCP vs Higgsfield API for AI Agents",
        "claim_supported": "MCP uses browser OAuth and spends user credits; REST API uses key pair and bills balance with webhooks.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:14:35.035264+00:00"
      },
      {
        "source_url": "https://github.com/higgsfield-ai/higgsfield-client",
        "source_title": "GitHub - higgsfield-ai/higgsfield-client: Python SDK for Higgsfield API \u00b7 GitHub",
        "claim_supported": "Official Python SDK supports sync and async usage with environment variable credentials.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:14:36.717101+00:00"
      },
      {
        "source_url": "https://open.higgsfield.ai/quick-start",
        "source_title": "Quick start | Higgsfield API",
        "claim_supported": "API workflow involves POST submit, GET poll status, and POST cancel.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:14:38.173541+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 98,
    "identity": {
      "name": "Mermaid CLI",
      "category": "AI, Research and Media-native",
      "one_line_description": "Command line tool and package for the Mermaid library that takes a mermaid definition file as input and generates an SVG, PNG, or PDF file as output."
    },
    "authentication": {
      "auth_methods": [],
      "details": "Mermaid CLI is an open-source local command-line utility and does not utilize cloud authentication mechanisms or API keys.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Mermaid CLI is open-source under the MIT license and freely installable via npm or homebrew without registration or fees.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": false,
      "api_types": [
        "SDK",
        "Other"
      ],
      "api_breadth": "narrow",
      "has_webhooks": false,
      "has_official_sdk": true,
      "details": "Mermaid CLI provides a command-line executable (mmdc) and can be used as a package/library dependency, but does not offer a cloud REST or GraphQL API.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "Community MCP",
      "repository_url": "https://github.com/andrewginns/mermaid-mcp-server",
      "maintainer": "Andrew Ginns / Peng Shawn / Ryuhei-So",
      "details": "There are multiple community/third-party Model Context Protocol (MCP) servers built to wrap the official mermaid-cli for validation and image generation.",
      "confidence": "High",
      "original_extracted_status": "Third-party MCP",
      "original_extracted_repository_url": "https://github.com/andrewginns/mermaid-mcp-server",
      "verified_status": "Community MCP",
      "verified_repository_url": "https://github.com/andrewginns/mermaid-mcp-server",
      "verification_rationale": "Verified genuine open-source community MCP repository on GitHub (https://github.com/andrewginns/mermaid-mcp-server).",
      "date_checked": "2026-11-23",
      "evidence_type": "community repository"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Mermaid CLI is open source, free to install locally via npm or homebrew, and has clear usage documentation for command line and container execution.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://github.com/mermaid-js/mermaid-cli",
        "source_title": "GitHub - mermaid-js/mermaid-cli: Command line tool for the Mermaid library",
        "claim_supported": "Mermaid CLI is a command-line interface for mermaid that generates SVG/PNG/PDF files from mermaid definitions.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:15:00.623920+00:00"
      },
      {
        "source_url": "https://formulae.brew.sh/formula/mermaid-cli",
        "source_title": "Homebrew Formulae: mermaid-cli",
        "claim_supported": "Mermaid CLI is open-source under MIT license and available via Homebrew/npm.",
        "source_type": "Official Package Manager",
        "retrieved_timestamp": "2026-11-23T13:15:16.957738+00:00"
      },
      {
        "source_url": "https://github.com/andrewginns/mermaid-mcp-server",
        "source_title": "GitHub - andrewginns/mermaid-mcp-server",
        "claim_supported": "Third-party MCP server wrapping mermaid-cli exists.",
        "source_type": "GitHub Repo",
        "retrieved_timestamp": "2026-11-23T13:15:18.846954+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 99,
    "identity": {
      "name": "YouTube Transcript",
      "category": "AI, Research and Media-native",
      "one_line_description": "A YouTube transcript API that provides transcripts, video search, channel browsing, and playlist extraction via REST API, MCP support, and AI agent skills."
    },
    "authentication": {
      "auth_methods": [
        "JWT or bearer token"
      ],
      "details": "The API uses Bearer token authentication by including an API key in the Authorization header (e.g., Authorization: Bearer YOUR_API_KEY).",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve trial",
      "details": "TranscriptAPI offers 100 free credits to start with a freemium tier and paid pro options.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST"
      ],
      "api_breadth": "moderate",
      "has_webhooks": false,
      "has_official_sdk": false,
      "details": "Provides REST API endpoints under https://transcriptapi.com/api/v2 such as GET /youtube/transcript and GET /youtube/info, backed by an OpenAPI specification.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": "TranscriptAPI",
      "details": "TranscriptAPI provides built-in YouTube MCP support for ChatGPT, Claude, and AI agent skills.",
      "confidence": "Medium",
      "original_extracted_status": "Official MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "The API provides clear documentation, an interactive Swagger UI, a self-serve trial tier with free credits, straightforward Bearer token authentication, and a clean OpenAPI contract.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://transcriptapi.com/docs/api/#youtube-transcript",
        "source_title": "YouTube Transcript API Reference | TranscriptAPI.com",
        "claim_supported": "Base URL, endpoints, quick start curl commands, and Bearer token authentication details for the public REST API.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:15:39.856714+00:00"
      },
      {
        "source_url": "https://aiindigo.com/tool/transcriptapi",
        "source_title": "TranscriptAPI Review, Pricing & Alternatives 2026 | AI Indigo",
        "claim_supported": "Freemium pricing model offering 100 free credits to start, and support for YouTube MCP.",
        "source_type": "Pricing Page",
        "retrieved_timestamp": "2026-11-23T13:15:48.486341+00:00"
      },
      {
        "source_url": "https://apis.apievangelist.com/store/transcriptapi-com-youtube-transcript-api",
        "source_title": "Transcriptapi Com Youtube Transcript Api - API Evangelist APIs",
        "claim_supported": "OpenAPI specification details, operations, paths, and HTTP Bearer authentication schemes.",
        "source_type": "API Reference",
        "retrieved_timestamp": "2026-11-23T13:15:51.727697+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  },
  {
    "id": 100,
    "identity": {
      "name": "Grain",
      "category": "AI, Research and Media-native",
      "one_line_description": "Grain is a meeting notes and recording platform that provides a public API to read meeting data, manage recordings, upload external files, and receive real-time webhooks."
    },
    "authentication": {
      "auth_methods": [
        "Personal access token",
        "OAuth2",
        "Other"
      ],
      "details": "Grain supports Personal Access Tokens (PAT), Workspace Access Tokens (WAT), and OAuth2. Requests require an Authorization Bearer token header and a Public-Api-Version header.",
      "confidence": "High"
    },
    "developer_access": {
      "access_tier": "Self-serve free",
      "details": "Personal API access is available on every plan, including Free. Workspace API access requires Business or Enterprise plans and admin privileges.",
      "confidence": "High"
    },
    "api_surface": {
      "has_public_api": true,
      "api_types": [
        "REST",
        "Webhooks"
      ],
      "api_breadth": "broad",
      "has_webhooks": true,
      "has_official_sdk": false,
      "details": "Provides a comprehensive public API supporting meeting data retrieval, recording uploads, metadata updates, and webhook event streaming.",
      "confidence": "High"
    },
    "mcp": {
      "mcp_status": "No verified MCP found",
      "repository_url": null,
      "maintainer": null,
      "details": "A third-party/community listing mentions a Grain Model Context Protocol (MCP) server for Cursor IDE, but no official first-party MCP repository is documented in the developer guides.",
      "confidence": "Medium",
      "original_extracted_status": "Community MCP",
      "original_extracted_repository_url": null,
      "verified_status": "No verified MCP found",
      "verified_repository_url": null,
      "verification_rationale": "Original claim based on hypothetical endpoint or AI announcement without a verifiable vendor-maintained MCP repository.",
      "date_checked": "2026-11-23",
      "evidence_type": "unverified"
    },
    "buildability": {
      "rating": "Easy",
      "blockers": [],
      "justification": "Grain features a well-documented public REST API with personal access tokens available on free plans and clear endpoint specifications.",
      "confidence": "High"
    },
    "evidence": [
      {
        "source_url": "https://developers.grain.com",
        "source_title": "Overview \u2014 Grain Developers",
        "claim_supported": "Grain API uses Personal Access Tokens and requires a Public-Api-Version header.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:16:09.886507+00:00"
      },
      {
        "source_url": "https://support.grain.com/en/articles/15507288-grain-api",
        "source_title": "Grain API | Grain",
        "claim_supported": "Authentication methods include PAT, WAT, and OAuth2. Personal access is available on every plan including Free. Webhooks and rate limits are supported.",
        "source_type": "Official Docs",
        "retrieved_timestamp": "2026-11-23T13:16:12.665337+00:00"
      },
      {
        "source_url": "https://mcpcursor.com/server/grain-mcp",
        "source_title": "Grain MCP - Model Context Protocol Integration for Cursor IDE | MCPCursor",
        "claim_supported": "Presence of Grain MCP integration for Cursor IDE.",
        "source_type": "Community / Third-party",
        "retrieved_timestamp": "2026-11-23T13:16:20.798143+00:00"
      }
    ],
    "research_status": "complete",
    "error_message": null
  }
];
window.PATTERN_ANALYSIS = {
  "dataset_summary": {
    "total_apps": 100
  },
  "1_categories": {
    "CRM and Sales": {
      "count": 10,
      "percentage": 10.0
    },
    "Support and Helpdesk": {
      "count": 10,
      "percentage": 10.0
    },
    "Communications and Messaging": {
      "count": 10,
      "percentage": 10.0
    },
    "Marketing, Ads, Email and Social": {
      "count": 10,
      "percentage": 10.0
    },
    "Ecommerce": {
      "count": 10,
      "percentage": 10.0
    },
    "Data, SEO and Scraping": {
      "count": 10,
      "percentage": 10.0
    },
    "Developer, Infra and Data Platforms": {
      "count": 10,
      "percentage": 10.0
    },
    "Productivity and Project Management": {
      "count": 10,
      "percentage": 10.0
    },
    "Finance and Fintech": {
      "count": 10,
      "percentage": 10.0
    },
    "AI, Research and Media-native": {
      "count": 10,
      "percentage": 10.0
    }
  },
  "2_authentication_methods": {
    "API key": {
      "count": 79,
      "percentage": 79.0
    },
    "OAuth2": {
      "count": 67,
      "percentage": 67.0
    },
    "JWT or bearer token": {
      "count": 51,
      "percentage": 51.0
    },
    "Basic authentication": {
      "count": 16,
      "percentage": 16.0
    },
    "Personal access token": {
      "count": 13,
      "percentage": 13.0
    },
    "Other": {
      "count": 12,
      "percentage": 12.0
    },
    "Unknown": {
      "count": 1,
      "percentage": 1.0
    }
  },
  "3_developer_access": {
    "Self-serve free": {
      "count": 47,
      "percentage": 47.0
    },
    "Paid-plan dependent": {
      "count": 33,
      "percentage": 33.0
    },
    "Self-serve trial": {
      "count": 14,
      "percentage": 14.0
    },
    "Admin approval required": {
      "count": 4,
      "percentage": 4.0
    },
    "Unknown": {
      "count": 2,
      "percentage": 2.0
    }
  },
  "4_public_api_availability": {
    "has_public_api": {
      "count": 98,
      "percentage": 98.0
    },
    "no_public_api": {
      "count": 2,
      "percentage": 2.0
    }
  },
  "5_api_architectures": {
    "REST": {
      "count": 98,
      "percentage": 98.0
    },
    "SDK": {
      "count": 78,
      "percentage": 78.0
    },
    "Webhooks": {
      "count": 63,
      "percentage": 63.0
    },
    "Other": {
      "count": 24,
      "percentage": 24.0
    },
    "GraphQL": {
      "count": 9,
      "percentage": 9.0
    },
    "SOAP": {
      "count": 1,
      "percentage": 1.0
    }
  },
  "6_documentation_coverage": {
    "documented_with_verified_evidence": {
      "count": 100,
      "percentage": 100.0
    },
    "missing_or_undocumented": {
      "count": 0,
      "percentage": 0.0
    }
  },
  "7_mcp_availability": {
    "Community MCP": {
      "count": 65,
      "percentage": 65.0
    },
    "No verified MCP found": {
      "count": 27,
      "percentage": 27.0
    },
    "Official MCP": {
      "count": 6,
      "percentage": 6.0
    },
    "Third-party MCP": {
      "count": 2,
      "percentage": 2.0
    }
  },
  "8_buildability_ratings": {
    "Easy": {
      "count": 73,
      "percentage": 73.0
    },
    "Medium": {
      "count": 26,
      "percentage": 26.0
    },
    "Difficult": {
      "count": 1,
      "percentage": 1.0
    }
  },
  "9_common_technical_blockers": {
    "Paid access": {
      "count": 19,
      "percentage": 19.0
    },
    "Authentication complexity": {
      "count": 7,
      "percentage": 7.0
    },
    "Partner access": {
      "count": 5,
      "percentage": 5.0
    },
    "Rate limits": {
      "count": 1,
      "percentage": 1.0
    },
    "Weak documentation": {
      "count": 1,
      "percentage": 1.0
    },
    "Restricted API scopes": {
      "count": 1,
      "percentage": 1.0
    },
    "No public API": {
      "count": 1,
      "percentage": 1.0
    }
  },
  "10_partnership_outreach_targets": {
    "total_requiring_outreach": 4,
    "percentage_of_catalog": 4.0,
    "apps": [
      {
        "id": 24,
        "name": "Lark (Larksuite)",
        "category": "Communications and Messaging",
        "access_tier": "Admin approval required",
        "details": "Contact your workspace admin to obtain the Lark App ID and App Secret, or create your own app in the Lark Developer Console and request admin approval."
      },
      {
        "id": 31,
        "name": "Google Ads",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Admin approval required",
        "details": "New developer tokens can initially only access test accounts. To retrieve data from active production accounts, users must apply for Basic or Standard Access in the Google Ads API Center and await approval."
      },
      {
        "id": 33,
        "name": "LinkedIn Ads",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Admin approval required",
        "details": "Access is gated; developers must create an application in the LinkedIn Developer Portal, request the Advertising API product via an access-request form detailing their use case, and undergo review by LinkedIn."
      },
      {
        "id": 39,
        "name": "Threads (Meta)",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Admin approval required",
        "details": "Creating a Meta app and picking the Threads use case is self-serve, but permissions (threads_basic, threads_content_publish, etc.) require Meta App Review and app publication before working on non-tester accounts."
      }
    ]
  }
};
window.INTEGRATION_OPPORTUNITIES = {
  "easy_wins": {
    "count": 57,
    "description": "Public APIs, documented authentication, and instant self-serve access (ideal for immediate Composio toolkit building).",
    "apps": [
      {
        "id": 2,
        "name": "HubSpot",
        "category": "CRM and Sales",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 4,
        "name": "Attio",
        "category": "CRM and Sales",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 5,
        "name": "Twenty",
        "category": "CRM and Sales",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Third-party MCP",
        "blockers": []
      },
      {
        "id": 6,
        "name": "Podio",
        "category": "CRM and Sales",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 7,
        "name": "Zoho CRM",
        "category": "CRM and Sales",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 12,
        "name": "Intercom",
        "category": "Support and Helpdesk",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 13,
        "name": "Freshdesk",
        "category": "Support and Helpdesk",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 14,
        "name": "Front",
        "category": "Support and Helpdesk",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 21,
        "name": "Slack",
        "category": "Communications and Messaging",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 22,
        "name": "Twilio",
        "category": "Communications and Messaging",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Official MCP",
        "blockers": []
      },
      {
        "id": 25,
        "name": "Pumble",
        "category": "Communications and Messaging",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 26,
        "name": "Discord",
        "category": "Communications and Messaging",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 27,
        "name": "Telegram",
        "category": "Communications and Messaging",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 28,
        "name": "WhatsApp Business",
        "category": "Communications and Messaging",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 30,
        "name": "Vonage",
        "category": "Communications and Messaging",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 35,
        "name": "Mailchimp",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 36,
        "name": "Klaviyo",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 37,
        "name": "systeme.io",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 38,
        "name": "Pinterest",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 40,
        "name": "SendGrid",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 41,
        "name": "Shopify",
        "category": "Ecommerce",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 42,
        "name": "WooCommerce",
        "category": "Ecommerce",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 43,
        "name": "BigCommerce",
        "category": "Ecommerce",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 45,
        "name": "Magento (Adobe Commerce)",
        "category": "Ecommerce",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 48,
        "name": "Gumroad",
        "category": "Ecommerce",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 51,
        "name": "DataForSEO",
        "category": "Data, SEO and Scraping",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 54,
        "name": "MrScraper",
        "category": "Data, SEO and Scraping",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 55,
        "name": "Apify",
        "category": "Data, SEO and Scraping",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 56,
        "name": "Firecrawl",
        "category": "Data, SEO and Scraping",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Official MCP",
        "blockers": []
      },
      {
        "id": 57,
        "name": "Bright Data",
        "category": "Data, SEO and Scraping",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 58,
        "name": "Sherlock",
        "category": "Data, SEO and Scraping",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 61,
        "name": "GitHub",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Official MCP",
        "blockers": []
      },
      {
        "id": 62,
        "name": "Vercel",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 63,
        "name": "Netlify",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 64,
        "name": "Cloudflare",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 65,
        "name": "Supabase",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Official MCP",
        "blockers": []
      },
      {
        "id": 66,
        "name": "Neo4j",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 70,
        "name": "Sentry",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 71,
        "name": "Notion",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 72,
        "name": "Airtable",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 73,
        "name": "Linear",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 75,
        "name": "Asana",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 76,
        "name": "Monday.com",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 77,
        "name": "ClickUp",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 78,
        "name": "Coda",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 81,
        "name": "Stripe",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Official MCP",
        "blockers": []
      },
      {
        "id": 82,
        "name": "Plaid",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 83,
        "name": "Binance",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 84,
        "name": "Paygent Connect",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 85,
        "name": "iPayX",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 86,
        "name": "QuickBooks",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 87,
        "name": "Xero",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 89,
        "name": "Ramp",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 93,
        "name": "Fathom",
        "category": "AI, Research and Media-native",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 95,
        "name": "Reducto",
        "category": "AI, Research and Media-native",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 99,
        "name": "YouTube Transcript",
        "category": "AI, Research and Media-native",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 100,
        "name": "Grain",
        "category": "AI, Research and Media-native",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      }
    ]
  },
  "medium_opportunities": {
    "count": 41,
    "description": "Public APIs requiring paid plans, developer tier subscriptions, or complex OAuth scopes.",
    "apps": [
      {
        "id": 1,
        "name": "Salesforce",
        "category": "CRM and Sales",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access",
          "Authentication complexity"
        ]
      },
      {
        "id": 3,
        "name": "Pipedrive",
        "category": "CRM and Sales",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 8,
        "name": "Close",
        "category": "CRM and Sales",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 9,
        "name": "Copper",
        "category": "CRM and Sales",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access",
          "Rate limits"
        ]
      },
      {
        "id": 10,
        "name": "DealCloud",
        "category": "CRM and Sales",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 11,
        "name": "Zendesk",
        "category": "Support and Helpdesk",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 15,
        "name": "Pylon",
        "category": "Support and Helpdesk",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 16,
        "name": "LiveAgent",
        "category": "Support and Helpdesk",
        "access_tier": "Self-serve trial",
        "buildability": "Medium",
        "mcp_status": "Third-party MCP",
        "blockers": []
      },
      {
        "id": 17,
        "name": "Plain",
        "category": "Support and Helpdesk",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 18,
        "name": "Help Scout",
        "category": "Support and Helpdesk",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 19,
        "name": "Gorgias",
        "category": "Support and Helpdesk",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 20,
        "name": "Gladly",
        "category": "Support and Helpdesk",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access",
          "Authentication complexity"
        ]
      },
      {
        "id": 23,
        "name": "Zoho Cliq",
        "category": "Communications and Messaging",
        "access_tier": "Unknown",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 24,
        "name": "Lark (Larksuite)",
        "category": "Communications and Messaging",
        "access_tier": "Admin approval required",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Partner access",
          "Authentication complexity"
        ]
      },
      {
        "id": 29,
        "name": "Aircall",
        "category": "Communications and Messaging",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 31,
        "name": "Google Ads",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Admin approval required",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access",
          "Authentication complexity"
        ]
      },
      {
        "id": 32,
        "name": "Meta Ads",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Self-serve free",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 33,
        "name": "LinkedIn Ads",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Admin approval required",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Authentication complexity",
          "Paid access",
          "Partner access"
        ]
      },
      {
        "id": 34,
        "name": "GoHighLevel",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 39,
        "name": "Threads (Meta)",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Admin approval required",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Partner access"
        ]
      },
      {
        "id": 44,
        "name": "Salesforce Commerce Cloud",
        "category": "Ecommerce",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 46,
        "name": "Squarespace",
        "category": "Ecommerce",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access",
          "Partner access",
          "Weak documentation"
        ]
      },
      {
        "id": 47,
        "name": "Ecwid",
        "category": "Ecommerce",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 49,
        "name": "Amazon Selling Partner",
        "category": "Ecommerce",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access",
          "Authentication complexity"
        ]
      },
      {
        "id": 50,
        "name": "FanBasis",
        "category": "Ecommerce",
        "access_tier": "Unknown",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 52,
        "name": "SE Ranking",
        "category": "Data, SEO and Scraping",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 53,
        "name": "Ahrefs",
        "category": "Data, SEO and Scraping",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access",
          "Restricted API scopes"
        ]
      },
      {
        "id": 59,
        "name": "Waterfall.io",
        "category": "Data, SEO and Scraping",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 60,
        "name": "Clay",
        "category": "Data, SEO and Scraping",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 67,
        "name": "Snowflake",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 68,
        "name": "MongoDB Atlas",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 69,
        "name": "Datadog",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 74,
        "name": "Jira",
        "category": "Productivity and Project Management",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 79,
        "name": "Smartsheet",
        "category": "Productivity and Project Management",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 80,
        "name": "Harvest",
        "category": "Productivity and Project Management",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "Community MCP",
        "blockers": []
      },
      {
        "id": 88,
        "name": "Brex",
        "category": "Finance and Fintech",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 90,
        "name": "PitchBook",
        "category": "Finance and Fintech",
        "access_tier": "Paid-plan dependent",
        "buildability": "Difficult",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access",
          "Partner access",
          "Authentication complexity"
        ]
      },
      {
        "id": 92,
        "name": "Otter AI",
        "category": "AI, Research and Media-native",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 94,
        "name": "Consensus",
        "category": "AI, Research and Media-native",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 96,
        "name": "Devin",
        "category": "AI, Research and Media-native",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Official MCP",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 97,
        "name": "higgsfield",
        "category": "AI, Research and Media-native",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access"
        ]
      }
    ]
  },
  "difficult_opportunities": {
    "count": 0,
    "description": "High barrier APIs with mandatory sales approval, restricted scopes, or high auth friction.",
    "apps": []
  },
  "outreach_opportunities": {
    "count": 6,
    "description": "SaaS ecosystems requiring formal partnership agreements or sales approvals before API credentials are granted.",
    "apps": [
      {
        "id": 24,
        "name": "Lark (Larksuite)",
        "category": "Communications and Messaging",
        "access_tier": "Admin approval required",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Partner access",
          "Authentication complexity"
        ]
      },
      {
        "id": 31,
        "name": "Google Ads",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Admin approval required",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access",
          "Authentication complexity"
        ]
      },
      {
        "id": 33,
        "name": "LinkedIn Ads",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Admin approval required",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Authentication complexity",
          "Paid access",
          "Partner access"
        ]
      },
      {
        "id": 39,
        "name": "Threads (Meta)",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Admin approval required",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Partner access"
        ]
      },
      {
        "id": 46,
        "name": "Squarespace",
        "category": "Ecommerce",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "Community MCP",
        "blockers": [
          "Paid access",
          "Partner access",
          "Weak documentation"
        ]
      },
      {
        "id": 90,
        "name": "PitchBook",
        "category": "Finance and Fintech",
        "access_tier": "Paid-plan dependent",
        "buildability": "Difficult",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access",
          "Partner access",
          "Authentication complexity"
        ]
      }
    ]
  },
  "mcp_white_space_opportunities": {
    "count": 26,
    "description": "High-value applications with documented APIs but ZERO verified existing MCP servers (high Composio differentiation).",
    "apps": [
      {
        "id": 6,
        "name": "Podio",
        "category": "CRM and Sales",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 8,
        "name": "Close",
        "category": "CRM and Sales",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 9,
        "name": "Copper",
        "category": "CRM and Sales",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access",
          "Rate limits"
        ]
      },
      {
        "id": 10,
        "name": "DealCloud",
        "category": "CRM and Sales",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 12,
        "name": "Intercom",
        "category": "Support and Helpdesk",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 14,
        "name": "Front",
        "category": "Support and Helpdesk",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 17,
        "name": "Plain",
        "category": "Support and Helpdesk",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 20,
        "name": "Gladly",
        "category": "Support and Helpdesk",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access",
          "Authentication complexity"
        ]
      },
      {
        "id": 21,
        "name": "Slack",
        "category": "Communications and Messaging",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 37,
        "name": "systeme.io",
        "category": "Marketing, Ads, Email and Social",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 51,
        "name": "DataForSEO",
        "category": "Data, SEO and Scraping",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 59,
        "name": "Waterfall.io",
        "category": "Data, SEO and Scraping",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 69,
        "name": "Datadog",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Paid-plan dependent",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 70,
        "name": "Sentry",
        "category": "Developer, Infra and Data Platforms",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 73,
        "name": "Linear",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 75,
        "name": "Asana",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 77,
        "name": "ClickUp",
        "category": "Productivity and Project Management",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 84,
        "name": "Paygent Connect",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 85,
        "name": "iPayX",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 88,
        "name": "Brex",
        "category": "Finance and Fintech",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 89,
        "name": "Ramp",
        "category": "Finance and Fintech",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 90,
        "name": "PitchBook",
        "category": "Finance and Fintech",
        "access_tier": "Paid-plan dependent",
        "buildability": "Difficult",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access",
          "Partner access",
          "Authentication complexity"
        ]
      },
      {
        "id": 94,
        "name": "Consensus",
        "category": "AI, Research and Media-native",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 97,
        "name": "higgsfield",
        "category": "AI, Research and Media-native",
        "access_tier": "Paid-plan dependent",
        "buildability": "Medium",
        "mcp_status": "No verified MCP found",
        "blockers": [
          "Paid access"
        ]
      },
      {
        "id": 99,
        "name": "YouTube Transcript",
        "category": "AI, Research and Media-native",
        "access_tier": "Self-serve trial",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      },
      {
        "id": 100,
        "name": "Grain",
        "category": "AI, Research and Media-native",
        "access_tier": "Self-serve free",
        "buildability": "Easy",
        "mcp_status": "No verified MCP found",
        "blockers": []
      }
    ]
  }
};
window.ACCURACY_AUDIT = {
  "benchmark_summary": {
    "total_sampled_apps": 20,
    "apps_with_100pct_accuracy": 6,
    "app_level_accuracy": 0.3,
    "total_claims_audited": 100,
    "claims_correct": 81,
    "overall_claim_level_accuracy": 0.81,
    "field_level_accuracies": {
      "authentication": 1.0,
      "developer_access": 0.6,
      "has_public_api": 1.0,
      "api_types": 1.0,
      "mcp_status": 0.45
    }
  },
  "audited_applications": [
    {
      "app_id": 1,
      "app_name": "Salesforce",
      "category": "CRM and Sales",
      "all_fields_correct": true,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "OAuth2",
            "API key",
            "Basic authentication",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "OAuth2",
            "JWT or bearer token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Paid-plan dependent",
          "human_confirmed": "Paid-plan dependent",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Other"
          ],
          "human_confirmed": [
            "REST",
            "SOAP"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Community MCP",
          "human_confirmed": "Community MCP",
          "correct": true,
          "error_type": null
        }
      },
      "evidence_url": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm"
    },
    {
      "app_id": 2,
      "app_name": "HubSpot",
      "category": "CRM and Sales",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "OAuth2",
            "API key",
            "Personal access token",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "OAuth2",
            "Personal access token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Self-serve trial",
          "correct": false,
          "error_type": "developer_gating_misclassification"
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Third-party MCP",
          "human_confirmed": "Community MCP",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://developers.hubspot.com/docs/api/overview"
    },
    {
      "app_id": 11,
      "app_name": "Zendesk",
      "category": "Support and Helpdesk",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "OAuth2",
            "API key",
            "Basic authentication",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "OAuth2",
            "API key",
            "Basic authentication"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Paid-plan dependent",
          "human_confirmed": "Self-serve trial",
          "correct": false,
          "error_type": "developer_gating_misclassification"
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "Webhooks",
            "SDK"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Third-party MCP",
          "human_confirmed": "Community MCP",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://developer.zendesk.com/api-reference/"
    },
    {
      "app_id": 12,
      "app_name": "Intercom",
      "category": "Support and Helpdesk",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "OAuth2",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "OAuth2",
            "Personal access token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Paid-plan dependent",
          "correct": false,
          "error_type": "developer_gating_misclassification"
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Official MCP",
          "human_confirmed": "Community MCP",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/"
    },
    {
      "app_id": 21,
      "app_name": "Slack",
      "category": "Communications and Messaging",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "OAuth2",
            "API key",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "OAuth2",
            "JWT or bearer token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Self-serve free",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks",
            "Other"
          ],
          "human_confirmed": [
            "REST",
            "Webhooks"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Official MCP",
          "human_confirmed": "Community MCP",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://api.slack.com/authentication"
    },
    {
      "app_id": 22,
      "app_name": "Twilio",
      "category": "Communications and Messaging",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "Other"
          ],
          "human_confirmed": [
            "Basic authentication",
            "API key"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve trial",
          "human_confirmed": "Self-serve trial",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Official MCP",
          "human_confirmed": "Community MCP",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://www.twilio.com/docs/usage/api"
    },
    {
      "app_id": 31,
      "app_name": "Google Ads",
      "category": "Marketing, Ads, Email and Social",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "OAuth2",
            "API key"
          ],
          "human_confirmed": [
            "OAuth2"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Admin approval required",
          "human_confirmed": "Admin approval required",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Other"
          ],
          "human_confirmed": [
            "REST",
            "gRPC"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Community MCP",
          "human_confirmed": "No verified MCP found",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://developers.google.com/google-ads/api/docs/first-call/overview"
    },
    {
      "app_id": 35,
      "app_name": "Mailchimp",
      "category": "Marketing, Ads, Email and Social",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "OAuth2",
            "Basic authentication",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "API key",
            "OAuth2"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Self-serve free",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Third-party MCP",
          "human_confirmed": "Community MCP",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://mailchimp.com/developer/marketing/guides/quick-start/"
    },
    {
      "app_id": 41,
      "app_name": "Shopify",
      "category": "Ecommerce",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "OAuth2",
            "API key",
            "JWT or bearer token",
            "Personal access token"
          ],
          "human_confirmed": [
            "OAuth2",
            "JWT or bearer token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve trial",
          "human_confirmed": "Self-serve free",
          "correct": false,
          "error_type": "developer_gating_misclassification"
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "GraphQL",
            "SDK",
            "Webhooks",
            "Other"
          ],
          "human_confirmed": [
            "REST",
            "GraphQL"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Community MCP",
          "human_confirmed": "Community MCP",
          "correct": true,
          "error_type": null
        }
      },
      "evidence_url": "https://shopify.dev/docs/api/admin-rest"
    },
    {
      "app_id": 42,
      "app_name": "WooCommerce",
      "category": "Ecommerce",
      "all_fields_correct": true,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "Basic authentication"
          ],
          "human_confirmed": [
            "Basic authentication",
            "OAuth2"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Self-serve free",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks",
            "Other"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Community MCP",
          "human_confirmed": "Community MCP",
          "correct": true,
          "error_type": null
        }
      },
      "evidence_url": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
    },
    {
      "app_id": 51,
      "app_name": "DataForSEO",
      "category": "Data, SEO and Scraping",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "Basic authentication",
            "OAuth2"
          ],
          "human_confirmed": [
            "Basic authentication"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve trial",
          "human_confirmed": "Self-serve trial",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Official MCP",
          "human_confirmed": "No verified MCP found",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://docs.dataforseo.com/v3/"
    },
    {
      "app_id": 56,
      "app_name": "Firecrawl",
      "category": "Data, SEO and Scraping",
      "all_fields_correct": true,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "JWT or bearer token",
            "OAuth2"
          ],
          "human_confirmed": [
            "API key",
            "JWT or bearer token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Self-serve free",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "REST",
            "SDK"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Official MCP",
          "human_confirmed": "Official MCP",
          "correct": true,
          "error_type": null
        }
      },
      "evidence_url": "https://docs.firecrawl.dev/api-reference"
    },
    {
      "app_id": 61,
      "app_name": "GitHub",
      "category": "Developer, Infra and Data Platforms",
      "all_fields_correct": true,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "OAuth2",
            "JWT or bearer token",
            "Basic authentication"
          ],
          "human_confirmed": [
            "Personal access token",
            "OAuth2"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Self-serve free",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks",
            "Other"
          ],
          "human_confirmed": [
            "REST",
            "GraphQL"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Official MCP",
          "human_confirmed": "Official MCP",
          "correct": true,
          "error_type": null
        }
      },
      "evidence_url": "https://docs.github.com/en/rest"
    },
    {
      "app_id": 65,
      "app_name": "Supabase",
      "category": "Developer, Infra and Data Platforms",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "OAuth2",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "API key",
            "JWT or bearer token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve trial",
          "human_confirmed": "Self-serve free",
          "correct": false,
          "error_type": "developer_gating_misclassification"
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "REST",
            "GraphQL"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Official MCP",
          "human_confirmed": "Official MCP",
          "correct": true,
          "error_type": null
        }
      },
      "evidence_url": "https://supabase.com/docs/guides/api"
    },
    {
      "app_id": 71,
      "app_name": "Notion",
      "category": "Productivity and Project Management",
      "all_fields_correct": true,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "OAuth2",
            "Personal access token",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "OAuth2",
            "JWT or bearer token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Self-serve free",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Community MCP",
          "human_confirmed": "Community MCP",
          "correct": true,
          "error_type": null
        }
      },
      "evidence_url": "https://developers.notion.com/docs/getting-started"
    },
    {
      "app_id": 73,
      "app_name": "Linear",
      "category": "Productivity and Project Management",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "OAuth2",
            "API key",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "Personal access token",
            "OAuth2"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Self-serve free",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "GraphQL",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "GraphQL"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Official MCP",
          "human_confirmed": "Community MCP",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://developers.linear.app/docs/graphql/working-with-the-graphql-api"
    },
    {
      "app_id": 81,
      "app_name": "Stripe",
      "category": "Finance and Fintech",
      "all_fields_correct": true,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "Basic authentication",
            "JWT or bearer token",
            "Other"
          ],
          "human_confirmed": [
            "API key",
            "JWT or bearer token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve free",
          "human_confirmed": "Self-serve free",
          "correct": true,
          "error_type": null
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK",
            "Webhooks"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Official MCP",
          "human_confirmed": "Official MCP",
          "correct": true,
          "error_type": null
        }
      },
      "evidence_url": "https://docs.stripe.com/api"
    },
    {
      "app_id": 82,
      "app_name": "Plaid",
      "category": "Finance and Fintech",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "Other"
          ],
          "human_confirmed": [
            "API key"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Self-serve trial",
          "human_confirmed": "Self-serve free",
          "correct": false,
          "error_type": "developer_gating_misclassification"
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Community MCP",
          "human_confirmed": "Community MCP",
          "correct": true,
          "error_type": null
        }
      },
      "evidence_url": "https://plaid.com/docs/api/"
    },
    {
      "app_id": 92,
      "app_name": "Otter AI",
      "category": "AI, Research and Media-native",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "API key",
            "Unknown"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Paid-plan dependent",
          "human_confirmed": "Partner/contact-sales gated",
          "correct": false,
          "error_type": "developer_gating_misclassification"
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Third-party MCP",
          "human_confirmed": "No verified MCP found",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://help.otter.ai"
    },
    {
      "app_id": 96,
      "app_name": "Devin",
      "category": "AI, Research and Media-native",
      "all_fields_correct": false,
      "claims": {
        "authentication": {
          "first_pass_predicted": [
            "API key",
            "JWT or bearer token"
          ],
          "human_confirmed": [
            "API key",
            "JWT or bearer token"
          ],
          "correct": true,
          "error_type": null
        },
        "developer_access": {
          "first_pass_predicted": "Paid-plan dependent",
          "human_confirmed": "Self-serve trial",
          "correct": false,
          "error_type": "developer_gating_misclassification"
        },
        "has_public_api": {
          "first_pass_predicted": true,
          "human_confirmed": true,
          "correct": true,
          "error_type": null
        },
        "api_types": {
          "first_pass_predicted": [
            "REST",
            "SDK"
          ],
          "human_confirmed": [
            "REST"
          ],
          "correct": true,
          "error_type": null
        },
        "mcp_status": {
          "first_pass_predicted": "Community MCP",
          "human_confirmed": "Official MCP",
          "correct": false,
          "error_type": "mcp_attribution_miss"
        }
      },
      "evidence_url": "https://docs.devin.ai"
    }
  ]
};
