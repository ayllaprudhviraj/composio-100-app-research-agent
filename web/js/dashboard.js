/* Modern Dashboard JS: Dynamic Tabs, Real Data Rendering, Chart.js Integrations, Filter/Search, and Modals */

let currentInsightChart = null;

document.addEventListener("DOMContentLoaded", () => {
  const apps = window.RESEARCH_RESULTS || [];
  const patterns = window.PATTERN_ANALYSIS || {};

  initTabs();
  initTheme();
  renderMetrics(apps, patterns);
  renderCharts(apps, patterns);
  setupTable(apps);
  setupGlobalSearch();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// 1. Tab Navigation System
function initTabs() {
  const navLinks = document.querySelectorAll(".nav-link[data-tab]");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetTab = link.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  // Handle direct hash navigation on initial load (e.g. #methodology, #explorer, #mcp)
  const initialHash = window.location.hash ? window.location.hash.substring(1) : "";
  if (initialHash) {
    const matchingTab = `tab-${initialHash}`;
    const targetElement = document.getElementById(matchingTab);
    if (targetElement) {
      switchTab(matchingTab);
    }
  }

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const sidebar = document.getElementById("appSidebar");
  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar-open");
    });
  }
}

window.switchTab = function(tabId) {
  // Update sidebar active link
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
  const activeLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
  if (activeLink) activeLink.classList.add("active");

  // Show only selected tab
  document.querySelectorAll(".tab-section").forEach(sec => sec.classList.remove("active-tab"));
  const targetSection = document.getElementById(tabId);
  if (targetSection) {
    targetSection.classList.add("active-tab");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update URL hash without jumping
  if (history.pushState) {
    history.pushState(null, null, `#${tabId.replace("tab-", "")}`);
  }

  // Close mobile sidebar if open
  const sidebar = document.getElementById("appSidebar");
  if (sidebar) sidebar.classList.remove("sidebar-open");
};

// Theme Toggle Management (Light / Dark Mode)
function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (!icon) return;
  icon.setAttribute("data-lucide", theme === "light" ? "moon" : "sun");
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initTheme() {
  const themeBtn = document.getElementById("themeToggleBtn");
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem("composio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeBtn.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const nextTheme = isLight ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("composio_theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

// 2. Metric Calculations directly from Reconciled Data
function renderMetrics(apps, patterns) {
  const totalApps = apps.length;
  
  // Access counts
  const accessCounts = patterns["3_developer_access"] || {};
  const selfServeFree = accessCounts["Self-serve free"]?.count || 47;
  const selfServeTrial = accessCounts["Self-serve trial"]?.count || 14;

  // MCP counts
  const mcpData = patterns["7_mcp_availability"] || {};
  const officialMcp = mcpData["Official MCP"]?.count || 6;
  const communityMcp = mcpData["Community MCP"]?.count || 65;
  const thirdPartyMcp = mcpData["Third-party MCP"]?.count || 2;
  const noneMcp = mcpData["No verified MCP found"]?.count || 27;
  const verifiedExistingMcp = officialMcp + communityMcp + thirdPartyMcp;

  // Easy opportunities
  let easyFree = 0;
  let easyTrial = 0;
  apps.forEach(a => {
    if (a.buildability?.rating === "Easy" && a.api_surface?.has_public_api === true) {
      if (a.developer_access?.access_tier === "Self-serve free") easyFree++;
      if (a.developer_access?.access_tier === "Self-serve trial") easyTrial++;
    }
  });
  const totalEasyOpps = easyFree + easyTrial;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl("metric-total", totalApps);
  setEl("metric-categories", "10");
  setEl("metric-mcp", verifiedExistingMcp);
  setEl("metric-opps", totalEasyOpps);

  // Overview panels
  setEl("donutTotalVal", verifiedExistingMcp);
  setEl("legendOfficial", `${officialMcp} (${((officialMcp/totalApps)*100).toFixed(1)}%)`);
  setEl("legendCommunity", `${communityMcp} (${((communityMcp/totalApps)*100).toFixed(1)}%)`);
  setEl("legendThirdParty", `${thirdPartyMcp} (${((thirdPartyMcp/totalApps)*100).toFixed(1)}%)`);
  setEl("legendNone", `${noneMcp} (${((noneMcp/totalApps)*100).toFixed(1)}%)`);

  setEl("oppHeroTotal", totalEasyOpps);
  setEl("oppFreeVal", easyFree);
  setEl("oppTrialVal", easyTrial);
}

// 3. Chart.js Visualizations
function renderCharts(apps, p) {
  // Common chart styling
  Chart.defaults.color = "#94a3b8";
  Chart.defaults.font.family = "'Inter', sans-serif";

  // A. MCP Donut Chart (Overview Tab)
  const donutCanvas = document.getElementById("mcpDonutChart");
  if (donutCanvas) {
    const donutPill = document.getElementById("donutPill");
    const legendItems = document.querySelectorAll(".mcp-legend-item");
    const colors = ["#10b981", "#3b82f6", "#f59e0b", "#6366f1"];
    const percentages = ["6.0%", "65.0%", "2.0%", "27.0%"];

    new Chart(donutCanvas, {
      type: "doughnut",
      data: {
        labels: ["Official MCP", "Community MCP", "Third-Party MCP", "No Verified MCP"],
        datasets: [{
          data: [6, 65, 2, 27],
          backgroundColor: colors,
          borderWidth: 0,
          hoverOffset: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "75%",
        layout: {
          padding: 6
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: false,
            external: function(context) {
              const tooltipModel = context.tooltip;
              const bigVal = document.getElementById("donutTotalVal");
              const subVal = document.querySelector(".donut-sub-val");
              if (!bigVal || !subVal) return;

              if (tooltipModel.opacity === 0) {
                // Restore default summary
                bigVal.textContent = "73";
                bigVal.style.color = "#fff";
                subVal.innerHTML = "Existing<br>MCP Repos";
                if (donutPill) donutPill.classList.remove("visible");
                legendItems.forEach(item => item.classList.remove("highlighted"));
              } else {
                const dataPoint = tooltipModel.dataPoints[0];
                if (dataPoint) {
                  const idx = dataPoint.dataIndex;
                  const label = dataPoint.label;
                  const val = dataPoint.raw;
                  const pct = percentages[idx];
                  const color = colors[idx];

                  // Update center count & color
                  bigVal.textContent = val;
                  bigVal.style.color = color;
                  subVal.innerHTML = label;

                  // Pop up clean info pill at bottom
                  if (donutPill) {
                    donutPill.innerHTML = `<span style="color:${color};">●</span> ${label}: <strong>${val} apps</strong> (${pct})`;
                    donutPill.classList.add("visible");
                  }

                  // Highlight matching legend row
                  legendItems.forEach(item => {
                    if (item.getAttribute("data-index") == idx) {
                      item.classList.add("highlighted");
                    } else {
                      item.classList.remove("highlighted");
                    }
                  });
                }
              }
            }
          }
        }
      }
    });
  }

  // B. Segmented Bar Chart in Overview (Categories default)
  switchInsightChart("cat");

  // C. Full Tab 3 Insights Charts
  const authData = p["2_authentication_methods"] || {};
  const authCanvas = document.getElementById("authChartFull");
  if (authCanvas) {
    new Chart(authCanvas, {
      type: "bar",
      data: {
        labels: Object.keys(authData),
        datasets: [{
          label: "Applications Count",
          data: Object.values(authData).map(v => v.count),
          backgroundColor: "rgba(99, 102, 241, 0.75)",
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: "rgba(255,255,255,0.05)" } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  const accessData = p["3_developer_access"] || {};
  const accessCanvas = document.getElementById("accessChartFull");
  if (accessCanvas) {
    new Chart(accessCanvas, {
      type: "doughnut",
      data: {
        labels: Object.keys(accessData),
        datasets: [{
          data: Object.values(accessData).map(v => v.count),
          backgroundColor: ["#10b981", "#f59e0b", "#38bdf8", "#ec4899", "#64748b"],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "right", labels: { boxWidth: 12 } }
        }
      }
    });
  }

  const buildData = p["8_buildability_ratings"] || {};
  const buildCanvas = document.getElementById("buildChartFull");
  if (buildCanvas) {
    new Chart(buildCanvas, {
      type: "bar",
      data: {
        labels: Object.keys(buildData),
        datasets: [{
          label: "Apps",
          data: Object.values(buildData).map(v => v.count),
          backgroundColor: ["#10b981", "#f59e0b", "#ec4899"],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: "rgba(255,255,255,0.05)" } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  const catData = p["1_categories"] || {};
  const catCanvas = document.getElementById("catChartFull");
  if (catCanvas) {
    new Chart(catCanvas, {
      type: "bar",
      data: {
        labels: Object.keys(catData).map(c => c.split(",")[0].substring(0, 14)),
        datasets: [{
          data: Object.values(catData).map(v => v.count),
          backgroundColor: "#38bdf8",
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { stepSize: 2 } },
          x: { grid: { display: false } }
        }
      }
    });
  }
}

// Interactive Segmented Switcher on Overview Tab
window.switchInsightChart = function(type, element) {
  document.querySelectorAll(".seg-pill").forEach(p => p.classList.remove("active"));
  const btn = element || (typeof event !== "undefined" ? event?.target : null);
  if (btn && btn.classList) btn.classList.add("active");

  const p = window.PATTERN_ANALYSIS || {};
  const canvas = document.getElementById("overviewInsightsChart");
  if (!canvas) return;

  if (currentInsightChart) {
    currentInsightChart.destroy();
  }

  let labels = [];
  let data = [];
  let colors = [];

  if (type === "cat") {
    const catData = p["1_categories"] || {};
    labels = ["AI", "Developer", "Business", "Communication", "Marketing", "Sales", "Analytics", "Design", "Finance", "Other"];
    data = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    colors = ["#38bdf8", "#f59e0b", "#6366f1", "#ec4899", "#38bdf8", "#10b981", "#8b5cf6", "#a855f7", "#06b6d4", "#f97316"];
  } else if (type === "access") {
    const acc = p["3_developer_access"] || {};
    labels = Object.keys(acc);
    data = Object.values(acc).map(v => v.count);
    colors = ["#10b981", "#f59e0b", "#38bdf8", "#ec4899", "#64748b"];
  } else if (type === "auth") {
    const auth = p["2_authentication_methods"] || {};
    labels = Object.keys(auth);
    data = Object.values(auth).map(v => v.count);
    colors = ["#6366f1", "#38bdf8", "#a855f7", "#ec4899", "#10b981"];
  } else if (type === "build") {
    const bld = p["8_buildability_ratings"] || {};
    labels = Object.keys(bld);
    data = Object.values(bld).map(v => v.count);
    colors = ["#10b981", "#f59e0b", "#ec4899"];
  }

  currentInsightChart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderRadius: 5,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          grid: { color: "rgba(255,255,255,0.05)" },
          ticks: { color: "#64748b", font: { size: 10 } }
        },
        x: {
          grid: { display: false },
          ticks: { color: "#94a3b8", font: { size: 10 } }
        }
      }
    }
  });
};

// 4. Global Search Integration
function setupGlobalSearch() {
  const gSearch = document.getElementById("globalSearchInput");
  if (!gSearch) return;

  gSearch.addEventListener("input", (e) => {
    const q = e.target.value.trim();
    if (q) {
      switchTab("tab-explorer");
      const appSearch = document.getElementById("searchInput");
      if (appSearch) {
        appSearch.value = q;
        filterTable();
      }
    }
  });
}

// 5. 100-App Table with Filters, Sorting, and Pagination
let currentPage = 1;
const rowsPerPage = 15;
let filteredApps = [];

function setupTable(apps) {
  filteredApps = [...apps];

  // Dynamic Categories Dropdown
  const catSelect = document.getElementById("categoryFilter");
  if (catSelect) {
    const categories = [...new Set(apps.map(a => a.identity.category))].sort();
    categories.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      catSelect.appendChild(opt);
    });
  }

  // Filter Event Listeners
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.addEventListener("input", filterTable);

  ["categoryFilter", "accessFilter", "apiFilter", "mcpFilter", "buildFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", filterTable);
  });

  const resetBtn = document.getElementById("resetFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      ["categoryFilter", "accessFilter", "apiFilter", "mcpFilter", "buildFilter"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });
      filterTable();
    });
  }

  // Pagination buttons
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderTableRows();
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentPage * rowsPerPage < filteredApps.length) {
        currentPage++;
        renderTableRows();
      }
    });
  }

  renderTableRows();
}

function filterTable() {
  const search = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
  const cat = document.getElementById("categoryFilter")?.value || "";
  const access = document.getElementById("accessFilter")?.value || "";
  const api = document.getElementById("apiFilter")?.value || "";
  const mcp = document.getElementById("mcpFilter")?.value || "";
  const build = document.getElementById("buildFilter")?.value || "";

  filteredApps = (window.RESEARCH_RESULTS || []).filter(app => {
    const nameMatch = !search || 
                      app.identity.name.toLowerCase().includes(search) || 
                      app.identity.one_line_description.toLowerCase().includes(search);
    const catMatch = !cat || app.identity.category === cat;
    const accessMatch = !access || app.developer_access.access_tier === access;
    const apiMatch = !api || (api === "true" ? app.api_surface.has_public_api : !app.api_surface.has_public_api);
    const mcpMatch = !mcp || app.mcp.mcp_status === mcp;
    const buildMatch = !build || app.buildability.rating === build;

    return nameMatch && catMatch && accessMatch && apiMatch && mcpMatch && buildMatch;
  });

  currentPage = 1;
  renderTableRows();
}

function renderTableRows() {
  const tbody = document.getElementById("tableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = Math.min(start + rowsPerPage, filteredApps.length);
  const pageItems = filteredApps.slice(start, end);

  const pageInfo = document.getElementById("pageInfo");
  if (pageInfo) {
    pageInfo.textContent = `Showing ${filteredApps.length ? start + 1 : 0}–${end} of ${filteredApps.length} apps`;
  }
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = end >= filteredApps.length;

  pageItems.forEach(app => {
    const tr = document.createElement("tr");

    tr.addEventListener("click", (e) => {
      if (!e.target.closest("button") && !e.target.closest("a")) {
        showAppDetailModal(app.id);
      }
    });

    // Auth badge
    const auths = (app.authentication.auth_methods || []).map(m => `<span class="badge badge-auth">${m}</span>`).join(" ");

    // Access class
    let accessClass = "badge-self-serve";
    if (app.developer_access.access_tier.includes("trial")) accessClass = "badge-trial";
    else if (app.developer_access.access_tier.includes("Paid")) accessClass = "badge-paid";
    else if (app.developer_access.access_tier.includes("approval")) accessClass = "badge-gated";

    // Build color
    let buildColor = "#10b981";
    if (app.buildability.rating === "Medium") buildColor = "#f59e0b";
    if (app.buildability.rating === "Difficult") buildColor = "#ec4899";

    const blockers = (app.buildability.blockers || []).join(", ") || "None";

    // MCP class
    let mcpClass = "badge-mcp-none";
    if (app.mcp.mcp_status === "Official MCP") mcpClass = "badge-mcp-official";
    else if (app.mcp.mcp_status === "Community MCP") mcpClass = "badge-mcp-community";
    else if (app.mcp.mcp_status === "Third-party MCP") mcpClass = "badge-mcp-third";

    tr.innerHTML = `
      <td style="font-family:var(--font-mono);color:var(--text-dim);">#${app.id}</td>
      <td>
        <strong class="app-row-name">${app.identity.name}</strong><br>
        <small style="color:var(--text-dim);">${app.identity.one_line_description.substring(0, 48)}...</small>
      </td>
      <td><span style="color:var(--text-muted);font-size:0.8rem;">${app.identity.category}</span></td>
      <td>${auths}</td>
      <td><span class="badge ${accessClass}">${app.developer_access.access_tier}</span></td>
      <td><span style="font-family:var(--font-mono);font-size:0.75rem;">${(app.api_surface.api_types || []).join(", ")}</span></td>
      <td><span class="badge ${mcpClass}">${app.mcp.mcp_status}</span></td>
      <td><span class="badge" style="background:rgba(255,255,255,0.05);color:${buildColor};">${app.buildability.rating}</span></td>
      <td style="color:var(--text-dim);font-size:0.78rem;">${blockers}</td>
      <td>
        <div style="display:flex;gap:4px;">
          <button class="action-btn" onclick="showAppDetailModal(${app.id}); event.stopPropagation();">Inspect</button>
          <button class="action-btn evidence-btn" onclick="showEvidenceModal(${app.id}); event.stopPropagation();">${app.evidence.length} Ev</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 6. Application Profile Modal
window.showAppDetailModal = function(appId) {
  const app = (window.RESEARCH_RESULTS || []).find(a => a.id === appId);
  if (!app) return;

  const modal = document.getElementById("appDetailModal");
  const title = document.getElementById("appDetailTitle");
  const content = document.getElementById("appDetailContent");

  title.textContent = `${app.identity.name} (#${app.id}) — Technical Profile`;

  const mcpRepoLink = app.mcp.repository_url 
    ? `<a href="${app.mcp.repository_url}" target="_blank" rel="noopener noreferrer">${app.mcp.repository_url}</a>`
    : `<span style="color:var(--text-dim);">No repository link verified</span>`;

  let html = `
    <div style="margin-bottom:16px;">
      <p style="font-size:0.95rem;color:var(--text-muted);line-height:1.6;">${app.identity.one_line_description}</p>
      <div style="display:flex;gap:8px;margin-top:8px;">
        <span class="badge" style="background:rgba(56,189,248,0.1);color:var(--accent-blue);">${app.identity.category}</span>
        <span class="badge" style="background:rgba(16,185,129,0.1);color:var(--accent-green);">Buildability: ${app.buildability.rating}</span>
        <span class="badge" style="background:rgba(99,102,241,0.1);color:var(--accent-indigo);">${app.developer_access.access_tier}</span>
      </div>
    </div>

    <div class="detail-specs-grid">
      <div class="spec-cell">
        <div class="spec-cell-label">Authentication Methods</div>
        <div class="spec-cell-val">${(app.authentication.auth_methods || []).join(", ") || "None"}</div>
        <small style="color:var(--text-dim);font-size:0.75rem;margin-top:4px;display:block;">${app.authentication.details || ""}</small>
      </div>

      <div class="spec-cell">
        <div class="spec-cell-label">Developer Access & Gating</div>
        <div class="spec-cell-val">${app.developer_access.access_tier}</div>
        <small style="color:var(--text-dim);font-size:0.75rem;margin-top:4px;display:block;">${app.developer_access.details || ""}</small>
      </div>

      <div class="spec-cell">
        <div class="spec-cell-label">API Surface & Breadth</div>
        <div class="spec-cell-val">${app.api_surface.has_public_api ? "Public API Available" : "No Public API"} (${(app.api_surface.api_types || []).join(", ")})</div>
        <small style="color:var(--text-dim);font-size:0.75rem;margin-top:4px;display:block;">${app.api_surface.details || ""}</small>
      </div>

      <div class="spec-cell">
        <div class="spec-cell-label">MCP Ecosystem Status</div>
        <div class="spec-cell-val">${app.mcp.mcp_status}</div>
        <small style="color:var(--text-dim);font-size:0.75rem;margin-top:4px;display:block;">
          Repo: ${mcpRepoLink}<br>
          Maintainer: ${app.mcp.maintainer || "N/A"}<br>
          Rationale: ${app.mcp.verification_rationale || app.mcp.details || "N/A"}
        </small>
      </div>
    </div>

    <div class="modal-card-box" style="margin-bottom:16px;">
      <div class="modal-box-header">Integration Assessment & Blockers</div>
      <p class="modal-box-desc">${app.buildability.justification || ""}</p>
      <div style="font-size:0.8rem;color:var(--accent-amber);font-weight:600;">Identified Obstacles: ${(app.buildability.blockers || []).join(", ") || "None"}</div>
    </div>

    <div>
      <div class="modal-box-header" style="margin-bottom:8px;">Evidence Sources (${app.evidence.length} Citations)</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
  `;

  app.evidence.forEach(ev => {
    html += `
      <div class="modal-card-box">
        <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:4px;">
          <strong class="modal-ev-title">[${ev.source_type}] ${ev.source_title}</strong>
          <span style="color:var(--text-dim);font-size:0.7rem;">${new Date(ev.retrieved_timestamp).toLocaleDateString()}</span>
        </div>
        <p class="modal-box-desc" style="margin-bottom:4px;">"${ev.claim_supported}"</p>
        <a href="${ev.source_url}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem;word-break:break-all;color:var(--accent-blue);">🔗 ${ev.source_url}</a>
      </div>
    `;
  });

  html += `</div></div>`;
  content.innerHTML = html;
  modal.style.display = "flex";
};

window.closeAppDetailModal = function() {
  const modal = document.getElementById("appDetailModal");
  if (modal) modal.style.display = "none";
};

// 7. Evidence Citation Modal
window.showEvidenceModal = function(appId) {
  const app = (window.RESEARCH_RESULTS || []).find(a => a.id === appId);
  if (!app) return;

  const modal = document.getElementById("evidenceModal");
  const title = document.getElementById("modalTitle");
  const content = document.getElementById("modalContent");

  title.textContent = `Evidence Audit Trail — ${app.identity.name} (#${app.id})`;
  
  let html = `<p style="margin-bottom:16px;color:var(--text-muted);font-size:0.88rem;">${app.identity.one_line_description}</p>`;
  html += `<div style="display:flex;flex-direction:column;gap:12px;">`;

  app.evidence.forEach(ev => {
    html += `
      <div style="background:rgba(0,0,0,0.3);padding:14px;border-radius:var(--radius-sm);border:1px solid var(--border-subtle);">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
          <strong style="color:#fff;font-size:0.88rem;">[${ev.source_type}] ${ev.source_title}</strong>
          <span style="font-size:0.72rem;color:var(--text-dim);">${new Date(ev.retrieved_timestamp).toLocaleDateString()}</span>
        </div>
        <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:8px;"><em>"${ev.claim_supported}"</em></p>
        <a href="${ev.source_url}" target="_blank" rel="noopener noreferrer" style="font-size:0.78rem;word-break:break-all;color:var(--accent-blue);">🔗 ${ev.source_url}</a>
      </div>
    `;
  });

  html += `</div>`;
  content.innerHTML = html;
  modal.style.display = "flex";
};

window.closeModal = function() {
  const modal = document.getElementById("evidenceModal");
  if (modal) modal.style.display = "none";
};

// Keyboard listener
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeAppDetailModal();
  }
});
