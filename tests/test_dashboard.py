"""Test suite 5: Dashboard and browser DOM verification using Playwright."""
import pytest
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT_DIR = Path(__file__).resolve().parent.parent
HTML_FILE = ROOT_DIR / "web" / "index.html"

def test_dashboard_browser_loading_and_table_pagination():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Track browser console errors
        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        
        # Load dashboard directly via file URL
        page.goto(HTML_FILE.as_uri())
        page.locator('.nav-link[data-tab="tab-explorer"]').click()
        page.wait_for_selector("#tableBody tr", timeout=5000)
        
        # 1. Title and Hero Checks
        assert "100 Apps. One AI Research Pipeline." in page.title() or "Composio" in page.title()
        assert page.locator("#metric-total").text_content() == "100"
        
        # 2. Table Row Count Checks (15 per page)
        rows = page.locator("#tableBody tr")
        assert rows.count() == 15, f"Expected 15 rows on page 1, found {rows.count()}"
        
        # 3. Search Filter Test
        page.fill("#searchInput", "Stripe")
        page.wait_for_timeout(300)
        filtered_rows = page.locator("#tableBody tr")
        assert filtered_rows.count() >= 1
        assert "Stripe" in filtered_rows.first.text_content()
        
        # Reset search
        page.fill("#searchInput", "")
        page.wait_for_timeout(300)
        assert page.locator("#tableBody tr").count() == 15
        
        # 4. Evidence Modal Click Test
        first_evidence_btn = page.locator(".evidence-btn").first
        first_evidence_btn.click()
        page.wait_for_selector("#evidenceModal", state="visible")
        assert page.locator("#modalTitle").text_content() != ""
        page.click("#evidenceModal button")  # Close modal
        
        # 5. Mobile Viewport Check
        page.set_viewport_size({"width": 375, "height": 667})
        page.wait_for_timeout(200)
        assert page.is_visible("header.site-header")
        
        browser.close()
        
        # Verify no critical syntax or unhandled errors in console
        critical_errors = [e for e in console_errors if "favicon" not in e]
        assert len(critical_errors) == 0, f"Browser console errors detected: {critical_errors}"
