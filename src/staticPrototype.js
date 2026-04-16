import {
  adviceItems,
  ganttTasks,
  ganttWeeks,
  institutions,
  interactomeEdges,
  interactomeLegendItems,
  interactomeNote,
  interactomeNodes,
  interviewSummaries,
  navItems,
  professionals,
  projectMeta,
  proofSlots,
  teamMembers,
} from "./data/siteData.static.js";

const root = document.getElementById("root");
const nodeById = new Map(interactomeNodes.map((node) => [node.id, node]));

function sectionHeader(eyebrow, title, description) {
  return `
    <div class="section-header">
      <span class="eyebrow">${eyebrow}</span>
      <h2>${title}</h2>
      ${description ? `<p>${description}</p>` : ""}
    </div>
  `;
}

function panelLabel(label) {
  return `<span class="panel-label">${label}</span>`;
}

function renderInstitutionDock() {
  return `
    <aside class="institution-dock" aria-label="Institutional links">
      ${institutions
        .map(
          (institution, index) => `
            <div class="institution-dock__item">
              ${index > 0 ? '<span class="institution-dock__divider" aria-hidden="true"></span>' : ""}
              <a
                class="institution-link institution-link--${institution.logoShape}"
                href="${institution.href}"
                target="_blank"
                rel="noreferrer"
                aria-label="${institution.fullName}"
                title="${institution.fullName}"
              ><img src="${institution.logoSrc}" alt="" aria-hidden="true"><span class="sr-only">${institution.shortName}</span></a>
            </div>
          `,
        )
        .join("")}
    </aside>
  `;
}

function renderNavigation() {
  return `
    <div class="floating-nav" id="floatingNav">
      <button
        class="floating-nav__trigger"
        type="button"
        aria-label="Open navigation"
        aria-expanded="false"
        aria-controls="floating-navigation-panel"
        id="floatingNavTrigger"
      >
        <span class="floating-nav__arrow" aria-hidden="true"></span>
      </button>
      <nav id="floating-navigation-panel" class="floating-nav__panel" aria-label="Page sections">
        ${navItems
          .map(
            (item, index) => `
              <a href="${item.href}">
                <span>${item.label}</span>
                <span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
              </a>
            `,
          )
          .join("")}
      </nav>
    </div>
  `;
}

function renderHero() {
  return `
    <section class="section hero-section" id="home">
      <div class="section__inner hero-section__grid">
        <div class="hero-section__copy">
          <h1><span>PPEI_B3_S2</span><span>Oral Presentation</span></h1>
          <p>${projectMeta.description}</p>
          <div class="hero-section__meta" aria-label="Project metadata">
            <span class="hero-section__team-pill">${projectMeta.team} · ${projectMeta.group}</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTeam() {
  return `
    <section class="section section--quiet" id="team">
      <div class="section__inner">
        ${sectionHeader(
          "Team Stuff",
          "Four contributors",
        )}
        <div class="team-grid">
          ${teamMembers
            .map(
              (member) => `
                <article class="team-card">
                  <div class="team-card__portrait" aria-label="${member.name} portrait">
                    ${member.portraitSrc ? `<img src="${member.portraitSrc}" alt="${member.name} portrait" />` : member.initials}
                  </div>
                  <div class="team-card__identity">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                  </div>
                  <div class="team-card__body">
                    <div>${panelLabel("Basic Info")}<p>${member.basicInfo}</p></div>
                    <div>${panelLabel("Job(s) of Interest")}<p>${member.jobsOfInterest.join(" / ")}</p></div>
                    <div>${panelLabel("Field(s) of Activity")}<p>${member.fieldsOfActivity.join(" / ")}</p></div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderGantt() {
  return `
    <section class="section" id="gantt">
      <div class="section__inner">
        ${sectionHeader(
          "Gantt Chart",
          "Timeline for Team work management",
        )}
        <div class="gantt" aria-label="Gantt chart placeholder">
          <div class="gantt__header">
            <div>Task</div>
            ${ganttWeeks.map((week) => `<div>${week}</div>`).join("")}
          </div>
          ${ganttTasks
            .map(
              (task) => `
                <div class="gantt__row">
                  <div class="gantt__task"><strong>${task.label}</strong><span>${task.owner}</span></div>
                  <div class="gantt__timeline">
                    ${ganttWeeks
                      .map(
                        (_week, index) => `
                          <span class="gantt__week-cell" aria-hidden="true">
                            ${task.milestone && index + 1 === task.endWeek ? `<span class="gantt__milestone" title="${task.milestone}"></span>` : ""}
                          </span>
                        `,
                      )
                      .join("")}
                    <span class="gantt__bar gantt__bar--${task.tone}" style="grid-column: ${task.startWeek} / ${task.endWeek + 1}" title="${task.label}: ${task.owner}"></span>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderInteractome() {
  return `
    <div class="interactome-board">
      <div class="interactome-board__legend" aria-label="Interactome legend">
        <span class="interactome-board__caption">Legend</span>
        <div class="interactome-legend">
          ${interactomeLegendItems
            .map(
              (item) => `
                <div class="interactome-legend__item">
                  <span class="interactome-legend__dot interactome-legend__dot--${item.tone}" aria-hidden="true"></span>
                  <span>${item.label}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
      <svg class="interactome" viewBox="0 0 920 540" role="img" aria-label="Interview interactome network">
      ${interactomeEdges
        .map((edge) => {
          const source = nodeById.get(edge.source);
          const target = nodeById.get(edge.target);
          if (!source || !target) return "";
          return `<line class="interactome__edge ${edge.style === "dashed" ? "interactome__edge--dashed" : ""}" x1="${source.x * 8.2}" y1="${source.y * 5.2}" x2="${target.x * 8.2}" y2="${target.y * 5.2}"></line>`;
        })
        .join("")}
      ${interactomeNodes
        .map(
          (node) => `
            <g class="interactome__node interactome__node--${node.tone} ${node.id === "group4" ? "interactome__node--core" : "interactome__node--leaf"}" transform="translate(${node.x * 8.2} ${node.y * 5.2})">
              <circle r="${node.id === "group4" ? 96 : 44}"></circle>
              <text y="${node.id === "group4" ? -46 : -6}">
                ${node.label
                  .split("\n")
                  .map((line, index) => `<tspan x="0" dy="${index === 0 ? 0 : 21}">${line}</tspan>`)
                  .join("")}
              </text>
              <title>${node.description}</title>
            </g>
          `,
        )
        .join("")}
      </svg>
    </div>
  `;
}

function renderAccordion(categories) {
  return `
    <div class="accordion-stack">
      ${categories
        .map(
          (category, index) => `
            <details class="accordion" ${index === 0 ? "open" : ""}>
              <summary>${category.title}</summary>
              <div class="accordion__grid">
                ${category.fields
                  .map(
                    (field) => `
                      <div class="data-field">
                        <span>${field.label}</span>
                        <strong>${field.value}</strong>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </details>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderDatabaseInteractome() {
  return `
    <section class="section section--quiet" id="database">
      <div class="section__inner">
        ${sectionHeader(
          "Interactome & Database",
          "Analytical network and Interview database",
        )}
        <div class="analysis-grid">
          <article class="analysis-panel">
            <div class="panel-heading">
              <div>
                ${panelLabel("Interactome")}
                <h3>Interview relationship map</h3>
                <p>${interactomeNote[0]}</p>
              </div>
              <span class="panel-badge">Network</span>
            </div>
            ${renderInteractome()}
          </article>
          <article class="analysis-panel database-panel">
            <div class="panel-heading">
              <div>
                ${panelLabel("Database")}
                <h3>Interview database explorer</h3>
                <p>Three professionals, grouped categories, and expandable fields.</p>
              </div>
              <span class="panel-badge">60 cells ready</span>
            </div>
            <div class="professional-tabs" role="tablist" aria-label="Interviewed professionals">
              ${professionals
                .map(
                  (professional, index) => `
                    <button class="${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0}" data-professional="${professional.id}">
                      ${professional.name}
                    </button>
                  `,
                )
                .join("")}
            </div>
            <div id="professionalPanel"></div>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderProfessionalPanel(professional) {
  return `
    <div class="professional-card">
      <span>${professional.headline}</span>
      <h4>${professional.name}</h4>
    </div>
    ${renderAccordion(professional.categories)}
  `;
}

function renderSummaryAdvice() {
  return `
    <section class="section" id="summary">
      <div class="section__inner">
        ${sectionHeader(
          "Summary & Advice",
          "Interview Summary and Professional Advice",
        )}
        <div class="summary-grid">
          <div class="summary-stack">
            ${interviewSummaries
              .map(
                (summary) => `
                  <article class="summary-card">
                    ${panelLabel(summary.title)}
                    <h3>${summary.person}</h3>
                    <p>${summary.summary}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
          <article class="advice-panel">
            ${panelLabel("Synthesis")}
            <h3>Main advice / recommendations</h3>
            <p>This block is reserved for the team's final synthesis. It is visually larger because it should carry the conclusion of the interview work during the oral presentation.</p>
            <div class="advice-list">
              ${adviceItems
                .map(
                  (item, index) => `
                    <div class="advice-item">
                      <span>${index + 1}</span>
                      <div><strong>${item.title}</strong><p>${item.description}</p></div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderProof() {
  return `
    <section class="section section--final section--quiet" id="proof">
      <div class="section__inner">
        ${sectionHeader(
          "Proof of Professional Behavior",
          "A prepared evidence area that does not feel unfinished.",
          "The current version is intentionally empty but structured for future screenshots, text evidence, images, or behavior records.",
        )}
        <div class="proof-panel">
          <div class="proof-panel__intro">
            <span aria-hidden="true">+</span>
            <h3>Evidence area prepared</h3>
            <p>Add proof of punctuality, meeting organization, professional communication, interview etiquette, or documented collaboration here.</p>
          </div>
          <div class="proof-grid">
            ${proofSlots
              .map(
                (slot) => `
                  <article class="proof-slot">
                    <strong>${slot.label}</strong>
                    <p>${slot.description}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function bindNavigation() {
  const floatingNav = document.getElementById("floatingNav");
  const trigger = document.getElementById("floatingNavTrigger");
  const panel = document.getElementById("floating-navigation-panel");

  trigger?.addEventListener("click", () => {
    const open = floatingNav?.classList.toggle("is-open") ?? false;
    trigger.setAttribute("aria-expanded", String(open));
    trigger.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  panel?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      floatingNav?.classList.remove("is-open");
      trigger?.setAttribute("aria-expanded", "false");
      trigger?.setAttribute("aria-label", "Open navigation");
    });
  });
}

function bindProfessionalTabs() {
  const panel = document.getElementById("professionalPanel");
  const buttons = document.querySelectorAll("[data-professional]");

  function setActive(professionalId) {
    const professional = professionals.find((item) => item.id === professionalId) ?? professionals[0];
    if (panel) panel.innerHTML = renderProfessionalPanel(professional);
    buttons.forEach((button) => {
      const isActive = button.getAttribute("data-professional") === professional.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const professionalId = button.getAttribute("data-professional");
      if (professionalId) setActive(professionalId);
    });
  });

  setActive(professionals[0].id);
}

root.innerHTML = `
  ${renderInstitutionDock()}
  ${renderNavigation()}
  <main>
    ${renderHero()}
    ${renderTeam()}
    ${renderGantt()}
    ${renderDatabaseInteractome()}
    ${renderSummaryAdvice()}
    ${renderProof()}
  </main>
  <footer class="site-footer">PPEI_B3_S2 / Team B / Group 4 / Final Oral Presentation</footer>
`;

bindNavigation();
bindProfessionalTabs();
