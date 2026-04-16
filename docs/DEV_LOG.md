# Development Log

## 2026-04-15

### Initial Planning

- Confirmed that Figma will be bypassed for the current implementation phase.
- Selected Vite + React + TypeScript for a maintainable single-page frontend prototype.
- Defined documentation requirements before coding.
- Planned a restrained research-lab / tech-company visual direction.
- Planned centralized placeholder content in `src/data/siteData.ts`.

### Implementation Notes

- Created the requested documentation set in `docs/`.
- Built the Vite + React + TypeScript project skeleton.
- Added structured placeholder data in `src/data/siteData.ts`.
- Implemented section components for Home, Team Stuff, Gantt Chart, Database & Interactome, Resume / Summary + Main Advice, and Proof of Professional Behavior.
- Implemented global fixed institutional links and top-right floating navigation with a rotating triangular trigger.
- Wrote a restrained research-lab visual system in `src/styles/global.css`.
- Added a no-build static preview at `public/prototype.html` because this environment has no Node/npm executable.
- Mirrored placeholder data for the static preview in `src/data/siteData.static.js`.
- Verified over HTTP that `public/prototype.html`, `src/styles/global.css`, `src/staticPrototype.js`, and `src/data/siteData.static.js` return `200 OK` from a Python local server.

### Open Questions

- Real names and portraits for the four team members.
- Exact Gantt source data and timeline range.
- Real interactome structure and node labels.
- Final 20 interview dimensions per professional.
- Official institutional logos and exact Paris-Saclay / Evry naming preference.
- Whether the final project should keep both React/Vite and static preview paths, or use React/Vite only after Node is installed.

### Environment Limitation

The machine originally had no `node`, `npm`, `pnpm`, `yarn`, or `bun` command available.

### Tooling Installation

- Installed portable Node.js `v24.14.1` locally under `.tools/node`.
- npm version available through the portable install: `11.11.0`.
- Installed project dependencies with `npm install`.
- Added missing React type packages: `@types/react` and `@types/react-dom`.
- Installed Playwright test tooling and Chromium.
- Ran `npm run build`; TypeScript and Vite production build pass.
- Started Vite dev server at `http://127.0.0.1:5173/`.
- Ran Playwright visual smoke checks:
  - page loads on desktop and mobile
  - floating navigation opens
  - database navigation scroll works
  - Professional 2 tab can be selected
  - screenshots saved under `artifacts/screenshots/`
- Adjusted mobile H1 typography after screenshot review so the hero title wraps more cleanly.
- Reworked the Home right-side panel from a decorative "Project Knowledge System" into a functional "Presentation Map" with six equal clickable section links, removing the unexplained Workflow highlight.
- Removed the Home right-side Presentation Map after user feedback because it duplicated the fixed navigation function; the right side is intentionally blank for now.
- Replaced small text-only institutional placeholders with uploaded HUST and Universite Evry / Paris-Saclay image assets.
- Removed the redundant blue Home eyebrow, shortened the Home description, removed the separate PPEI_B3_S2 pill, and merged Team B + Group 4 into a larger single pill.
- Moved the institutional logo dock from the top-left to the top-right, immediately left of the floating navigation trigger, so it does not block page content.
- Corrected the Evry institution link to the Universite Evry Paris-Saclay website.
- Enlarged all blue section eyebrows consistently and simplified section headings/subtext according to user feedback.
- Lowered the floating navigation dropdown so it opens below the top-right institutional logo dock instead of being visually covered by it.
- Added a short visual QA wait after opening navigation so screenshots capture the final expanded state rather than the transition frame.
- Enlarged the floating navigation trigger to match the short side of the institutional logo frames, aligned its centerline with the logo frames, and moved the logo dock left to preserve spacing.
- Increased the internal navigation triangle size so it scales visually with the larger circular trigger.
- Renamed floating navigation items to match the visible blue section eyebrows.
- Prepared GitHub Pages deployment by adding a Pages workflow and configuring Vite's repository base path.
- Rebuilt the interactome section to follow the provided source image structure: legend in the upper left, contextual note in the upper right, and a named relationship map in the center.
- Rolled the interactome visual language back to the site's cleaner UI system while keeping the source image's actual names, relationship content, and explanatory sentence.
- Replaced the placeholder database content with the three interviewees' actual table data and updated the Gantt section with the dated task sequence and responsible members from the provided chart.
