# Pre-Deployment Integrity Audit Report

**Project**: Composio 100-App Research Agent  
**Date**: November 23, 2026  
**Auditor**: Antigravity Autonomous Research Verification Engine  
**Status**: Completed — Ready for User Approval (No Deployments / Pushes Executed)  

---

## 1. Primary Vendor Evidence Audit for the Six Official MCP Records

Each of the six applications previously classified as "Official MCP" was individually re-verified against primary vendor developer documentation, active production endpoints, and direct repository ownership records. Stale URLs, deprecated packages, and experimental tags were isolated and corrected.

| App ID & Name | Verified Status | Verified Repository / Documentation URL | Evidence Type | Maintainer / Owner | Date Checked | Verification Rationale & Evidence Audit |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| **#22 Twilio** | **Official MCP** | `https://www.twilio.com/docs/ai/mcp` | vendor documentation | Twilio | 2026-11-23 | Twilio officially supports and documents hosted MCP server integration directly within its primary developer documentation at `https://www.twilio.com/docs/ai/mcp`. The experimental repository `twilio-labs/mcp` was isolated and distinguished as an experimental preview, while the official status is grounded in Twilio's primary documentation. |
| **#56 Firecrawl** | **Official MCP** | `https://github.com/firecrawl/firecrawl-mcp-server` | vendor-owned repository | Firecrawl / Mendable | 2026-11-23 | Verified current vendor-maintained repository under the primary `firecrawl` GitHub organization (`https://github.com/firecrawl/firecrawl-mcp-server`), superseding the stale `mendableai/firecrawl-mcp-server` redirect. |
| **#61 GitHub** | **Official MCP** | `https://github.com/github/github-mcp-server` | vendor-owned repository | GitHub | 2026-11-23 | Verified official first-party repository maintained directly by GitHub under `github/github-mcp-server`. The stale reference pointing to `modelcontextprotocol/servers/tree/main/src/github` returned HTTP 404 and was replaced with GitHub's official repository. |
| **#65 Supabase** | **Official MCP** | `https://github.com/supabase/mcp` | vendor-owned repository | Supabase | 2026-11-23 | Verified official vendor-maintained repository directly under `supabase/mcp`. The legacy repository URL `supabase/mcp-server-supabase` returned HTTP 404 and has been retired by Supabase in favor of `supabase/mcp`. |
| **#81 Stripe** | **Official MCP** | `https://docs.stripe.com/mcp` | vendor documentation | Stripe | 2026-11-23 | Stripe officially documents and operates a hosted Model Context Protocol server directly at `https://docs.stripe.com/mcp`. This distinguishes Stripe's production hosted MCP service from the separate/deprecated `stripe/agent-toolkit` npm/python packages. |
| **#96 Devin** | **Official MCP** | `https://docs.devin.ai/mcp` | vendor documentation | Cognition | 2026-11-23 | Verified live, vendor-operated Model Context Protocol endpoint at `https://docs.devin.ai/mcp` returning valid JSON RPC server capability manifest (`{"server": {"name": "Devin Docs", "version": "1.0.0", "transport": "http"}}`). The unverified repository `cognition-labs/devin-mcp` returned HTTP 404 and was removed. |

*Original extraction fields (`original_extracted_status`, `original_extracted_repository_url`) are strictly preserved alongside these reconciled fields.*

---

## 2. Comprehensive Network Audit of the 67 Community MCP Entries

Every single repository URL claimed as a Community MCP was audited over the live network:
- **HTTP 200 Reachable & Valid Community Implementations**: **65 repositories**
- **Dead / HTTP 404 Links Identified & Downgraded**: **1 repository**
  - **#88 Brex**: The claimed URL `https://github.com/dennisonbertram/brex-mcp-server.git` returned **HTTP 404 Not Found**. In accordance with instructions to never invent replacement repositories, App #88 was downgraded to **`No verified MCP found`** (`repository_url: null`, `evidence_type: "unverified"`).
- **Directory / Aggregator Listings Reclassified**: **1 repository**
  - **#16 LiveAgent**: The claimed URL `https://github.com/vinkius-labs/mcp-database/blob/main/mcps/liveagent.md` points to a hosted directory/connector listing in the `vinkius-labs/mcp-database` registry rather than an independent open-source repository. Reclassified from Community MCP to **`Third-party MCP`**.

---

## 3. Recalculated MCP Totals & Reconciliation Parity

Following the primary evidence audit and live URL verification across all 100 applications:

$$\text{Official MCP (6)} + \text{Community MCP (65)} + \text{Third-party MCP (2)} + \text{No verified MCP found (27)} = 100$$
$$\text{Total Existing Verified MCP Repositories} = 6 + 65 + 2 = \mathbf{73}$$

| MCP Status Category | Count | Percentage | Definition & Evidence Standard |
| :--- | :---: | :---: | :--- |
| **Official MCP** | **6** | 6.0% | Grounded in vendor-owned repositories or primary vendor documentation endpoints (*Twilio, Firecrawl, GitHub, Supabase, Stripe, Devin*). |
| **Community MCP** | **65** | 65.0% | Verified open-source GitHub repositories with active commit histories and identifiable community maintainers. |
| **Third-Party MCP** | **2** | 2.0% | Connector registries and third-party aggregator listings (*Twenty* on `githubsignals.io`, *LiveAgent* in `vinkius-labs/mcp-database`). |
| **No verified MCP found** | **27** | 27.0% | Applications without verifiable MCP repositories (including *Brex*, down from 67 community apps). |
| **Total Catalog** | **100** | **100.0%** | **Total Existing MCP Servers / Listings: 73** |

---

## 4. Resolution of Easy Opportunities Inconsistency

Recalculating strictly from the 100 raw records using:
$$\text{buildability.rating} == \text{"Easy"} \quad \wedge \quad \text{api\_surface.has\_public\_api} == \text{true} \quad \wedge \quad \text{access\_tier} \in \{\text{"Self-serve free"}, \text{"Self-serve trial"}\}$$

- **Exact Free Opportunities**: **44 applications** (out of 47 `Self-serve free` apps, 93.6%)
- **Exact Trial Opportunities**: **13 applications** (out of 14 `Self-serve trial` apps, 92.9%)
- **Exact Total Strict Easy Opportunities**: **57 applications** ($44 + 13 = 57$)

### Roster by Group:
- **Easy Free (44 Apps)**: *#2 HubSpot, #4 Attio, #5 Twenty, #6 Podio, #7 Zoho CRM, #12 Intercom, #14 Front, #21 Slack, #25 Pumble, #26 Discord, #27 Telegram, #28 WhatsApp Business, #35 Mailchimp, #36 Klaviyo, #37 systeme.io, #38 Pinterest, #40 SendGrid, #42 WooCommerce, #45 Magento, #48 Gumroad, #55 Apify, #56 Firecrawl, #57 Bright Data, #58 Sherlock, #61 GitHub, #62 Vercel, #63 Netlify, #64 Cloudflare, #70 Sentry, #71 Notion, #72 Airtable, #73 Linear, #75 Asana, #77 ClickUp, #78 Coda, #81 Stripe, #83 Binance, #84 Paygent Connect, #85 iPayX, #86 QuickBooks, #87 Xero, #89 Ramp, #93 Fathom, #100 Grain.*
- **Easy Trial (13 Apps)**: *#13 Freshdesk, #22 Twilio, #30 Vonage, #41 Shopify, #43 BigCommerce, #51 DataForSEO, #54 MrScraper, #65 Supabase, #66 Neo4j, #76 Monday.com, #82 Plaid, #95 Reducto, #99 YouTube Transcript.*

### Non-Easy or Gated Applications:
- **Free/Trial excluded (4 apps)**: *#16 LiveAgent* (`Medium` buildability), *#32 Meta Ads* (`Medium` buildability / app review gating), *#91 NotebookLM* (`has_public_api: false`), *#98 Mermaid CLI* (`has_public_api: false` / local binary).
- **Easy Public API excluded due to paid gating (15 apps)**: *#3 Pipedrive, #8 Close, #10 DealCloud, #11 Zendesk, #15 Pylon, #17 Plain, #19 Gorgias, #34 GoHighLevel, #47 Ecwid, #52 SE Ranking, #68 MongoDB Atlas, #69 Datadog, #74 Jira, #79 Smartsheet, #80 Harvest* (all require paid subscriptions).

---

## 5. Post-Reconciliation Benchmark Accuracy & Disambiguation

The 20-app stratified manual benchmark (100 discrete claims across 5 core dimensions) was evaluated without manufacturing or altering ground-truth records:

| Dimension / Metric | First-Pass (Raw LLM) | Post-Reconciliation | Delta |
| :--- | :---: | :---: | :---: |
| **Authentication Methods** | 20/20 (100.0%) | 20/20 (100.0%) | 0.0% |
| **Public API Availability** | 20/20 (100.0%) | 20/20 (100.0%) | 0.0% |
| **API Protocols (REST/GraphQL)** | 20/20 (100.0%) | 20/20 (100.0%) | 0.0% |
| **Developer Access Gating** | 12/20 (60.0%) | 12/20 (60.0%) | 0.0% |
| **MCP Server Classification** | 9/20 (45.0%) | **14/20 (70.0%)** | **+25.0%** |
| **Overall Benchmark Accuracy** | **81/100 (81.0%)** | **86/100 (86.0%)** | **+5.0%** |

### Metric Separation
1. **Evidence Link Coverage (96.2%)**: 385/400 documentation links verified reachable (non-404).
2. **Automated Rule-Based Validation (87.5%)**: 350/400 claims passed heuristic regex pattern checks against documentation excerpts. *(Explicitly flagged as regex/syntax checks, not equivalent to independent human review).*
3. **Manual Ground-Truth Accuracy (86.0% Post-Reconciliation / 81.0% First-Pass)**: Evaluated directly by human inspection across the 20-app ground truth benchmark.

---

## 6. Access Tiers & Unknown Applications

- **Self-serve free**: 47
- **Paid-plan dependent**: 33
- **Self-serve trial**: 14
- **Admin approval required**: 4
- **Unknown**: **2** (*App #23 Zoho Cliq* due to rate-tier ambiguity and *App #50 FanBasis* due to developer portal login wall).

---

## 7. Automated Test Suite Execution

All 16 automated tests in `pytest` passed cleanly:

```text
============================= test session starts =============================
platform win32 -- Python 3.12.10, pytest-8.4.2, pluggy-1.6.0
rootdir: C:\Users\prudh\.gemini\antigravity\scratch\composio-100-app-research-agent
configfile: pytest.ini
testpaths: tests
plugins: anyio-4.10.0, dash-2.18.2, playwright-0.10.0, timeout-2.4.0
collected 16 items

tests/test_analytics.py::test_analytics_metrics_parity PASSED            [  6%]
tests/test_analytics.py::test_integration_opportunities_counts PASSED    [ 12%]
tests/test_dashboard.py::test_dashboard_browser_loading_and_table_pagination PASSED [ 18%]
tests/test_dataset.py::test_apps_json_count_and_uniqueness PASSED        [ 25%]
tests/test_dataset.py::test_all_ten_categories_represented PASSED        [ 31%]
tests/test_dataset.py::test_apps_csv_parity PASSED                       [ 37%]
tests/test_reconciliation.py::test_mcp_count_reconciliation PASSED       [ 43%]
tests/test_reconciliation.py::test_access_tier_reconciliation_including_unknown PASSED [ 50%]
tests/test_reconciliation.py::test_easy_opportunities_strict_reconciliation PASSED [ 56%]
tests/test_reconciliation.py::test_original_research_data_preserved PASSED [ 62%]
tests/test_research.py::test_research_results_json_schema PASSED         [ 68%]
tests/test_research.py::test_research_results_csv_parity PASSED          [ 75%]
tests/test_research.py::test_no_api_keys_exposed_in_research_outputs PASSED [ 81%]
tests/test_verification.py::test_verification_report_exists_and_valid PASSED [ 87%]
tests/test_verification.py::test_human_review_queue_preservation PASSED  [ 93%]
tests/test_verification.py::test_human_ground_truth_benchmark PASSED     [100%]

============================= 16 passed in 5.93s ==============================
```

---

## 8. Guardrails & Compliance Check

- [x] Zero Git pushes or remote cloud deployments executed.
- [x] UI design, CSS styling, and dashboard layouts preserved without redesign.
- [x] All 100 raw extraction fields preserved in data records.
- [x] Brex repository downgraded without inventing replacement repositories.
- [x] LiveAgent reclassified to Third-party MCP based on registry evidence.
- [x] Complete mathematical parity maintained across JSON, CSV, analytics, and dashboard.
