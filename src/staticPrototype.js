import {
  adviceItems,
  adviceMeta,
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
  proofEvidencePanel,
  proofTeamRoles,
  proofTimelineSteps,
  teamMembers,
} from "./data/siteData.static.js";

const root = document.getElementById("root");
const nodeById = new Map(interactomeNodes.map((node) => [node.id, node]));
const X_SCALE = 8.2;
const Y_SCALE = 5.2;

function nodeRadius(node) {
  return node.id === "group4" ? 108 : 52;
}

function edgeCoordinates(source, target) {
  const sourceX = source.x * X_SCALE;
  const sourceY = source.y * Y_SCALE;
  const targetX = target.x * X_SCALE;
  const targetY = target.y * Y_SCALE;
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const length = Math.hypot(dx, dy) || 1;
  const unitX = dx / length;
  const unitY = dy / length;
  const sourceRadius = nodeRadius(source);
  const targetRadius = nodeRadius(target);

  return {
    x1: sourceX + unitX * sourceRadius,
    y1: sourceY + unitY * sourceRadius,
    x2: targetX - unitX * targetRadius,
    y2: targetY - unitY * targetRadius,
  };
}

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

function proofIcon(icon) {
  if (icon === "contact") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 6.5h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"></path>
        <path d="m6 8 6 4.7L18 8"></path>
      </svg>
    `;
  }

  if (icon === "schedule") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 5.5v3M16.5 5.5v3"></path>
        <path d="M6.5 7.5h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"></path>
        <path d="M4.5 11.5h15"></path>
      </svg>
    `;
  }

  if (icon === "roles") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 6.5a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Z"></path>
        <path d="M6.8 9.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10.4 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
        <path d="M8.5 17c.5-1.8 2-2.8 3.5-2.8s3 .9 3.5 2.8"></path>
        <path d="M4.8 17c.2-1.1 1.1-1.9 2.3-1.9m9.8 1.9c-.2-1.1-1.1-1.9-2.3-1.9"></path>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4.8 18.3 7v4.8c0 3.6-2.1 6.5-6.3 7.9-4.2-1.4-6.3-4.3-6.3-7.9V7L12 4.8Z"></path>
      <path d="m9.5 12 1.7 1.7 3.3-3.5"></path>
    </svg>
  `;
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
          const coords = edgeCoordinates(source, target);
          return `<line class="interactome__edge ${edge.style === "dashed" ? "interactome__edge--dashed" : ""}" x1="${coords.x1}" y1="${coords.y1}" x2="${coords.x2}" y2="${coords.y2}"></line>`;
        })
        .join("")}
      ${interactomeNodes
        .map(
          (node) => `
            <g class="interactome__node interactome__node--${node.tone} ${node.id === "group4" ? "interactome__node--core" : "interactome__node--leaf"}" transform="translate(${node.x * X_SCALE} ${node.y * Y_SCALE})">
              <circle r="${nodeRadius(node)}"></circle>
              <text y="${node.id === "group4" ? -54 : -8}">
                ${node.label
                  .split("\n")
                  .map((line, index) => `<tspan x="0" dy="${index === 0 ? 0 : node.id === "group4" ? 24 : 22}">${line}</tspan>`)
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
                    ${panelLabel(summary.label)}
                    <h3>${summary.title}</h3>
                    <p>${summary.summary}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
          <article class="advice-panel">
            ${panelLabel(adviceMeta.label)}
            <h3>${adviceMeta.title}</h3>
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
          "Professional process and supporting evidence",
          "A documented process showing preparation, coordination, respectful conduct, and privacy-aware evidence.",
        )}
        <div class="proof-layout">
          <article class="proof-panel proof-panel--timeline">
            <div class="panel-heading panel-heading--compact">
              <div>
                ${panelLabel("Process Timeline")}
                <h3>Interview preparation and conduct</h3>
              </div>
            </div>
            <div class="proof-timeline">
              ${proofTimelineSteps
                .map(
                  (step, index) => `
                    <article class="proof-step">
                      <div class="proof-step__rail" aria-hidden="true">
                        <span class="proof-step__dot"></span>
                        ${index < proofTimelineSteps.length - 1 ? `<span class="proof-step__line"></span>` : ""}
                      </div>
                      <div class="proof-step__card">
                        <div class="proof-step__icon">${proofIcon(step.icon)}</div>
                        <div class="proof-step__body">
                          <h4>${step.title}</h4>
                          <p>${step.description}</p>
                        </div>
                      </div>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </article>
          <article class="proof-panel proof-panel--evidence">
            <div class="panel-heading panel-heading--compact">
              <div>
                ${panelLabel("Supporting Evidence")}
                <h3>${proofEvidencePanel.title}</h3>
              </div>
            </div>
            <div class="proof-evidence__stack">
              <section class="proof-evidence__card">
                <div class="proof-evidence__card-head">
                  <h4>${proofEvidencePanel.businessCardTitle}</h4>
                </div>
                <div class="proof-evidence__image" role="img" aria-label="Business card evidence placeholder">
                  ${
                    proofEvidencePanel.businessCardSrc
                      ? `<img src="${proofEvidencePanel.businessCardSrc}" alt="Business card evidence" />`
                      : `<div class="proof-evidence__placeholder"><span>Business card evidence</span><p>${proofEvidencePanel.businessCardCaption}</p></div>`
                  }
                </div>
              </section>
              <section class="proof-evidence__card proof-evidence__note">
                <h4>${proofEvidencePanel.privacyTitle}</h4>
                <p>${proofEvidencePanel.privacyNote}</p>
              </section>
              <section class="proof-evidence__card">
                <h4>${proofEvidencePanel.rolesTitle}</h4>
                <div class="proof-roles">
                  ${proofTeamRoles
                    .map(
                      (assignment) => `
                        <div class="proof-role">
                          <span>${assignment.role}</span>
                          <strong>${assignment.member}</strong>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
              </section>
            </div>
          </article>
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
