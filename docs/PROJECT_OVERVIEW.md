# Project Overview

## Purpose

This website is the first frontend prototype for the final Oral Presentation of PPEI_B3_S2, created by Team B, Group 4. It is intended to function as a polished academic project homepage / course wiki for a live oral presentation.

The site should help presenters move through the project story clearly: project identity, team structure, work management, interview data, interactome analysis, synthesized advice, and proof of professional behavior.

## Audience

- PPEI_B3_S2 instructors and evaluators
- Classmates and presentation attendees
- Team B, Group 4 members maintaining the project
- Future collaborators who need to understand the project quickly

## Current Scope

The current scope is a single-page frontend prototype with placeholder-friendly content and clean interaction. All real content can be inserted later without redesigning the information architecture.

Included sections:

1. Home
2. Team Stuff
3. Gantt Chart of Team Work Management
4. Database & Interactome
5. Resume / Summary of the Professionals Interviewed + Main Advice
6. Proof of Professional Behavior

## Constraints

- The website must look academically credible and presentation-ready.
- It should not look like a generic classroom assignment page or default Bootstrap template.
- Placeholder content is acceptable, but the structure must support real data later.
- Data should be separated from layout components.
- Fixed institutional identity links and fixed navigation trigger are required.

## Current Implementation Approach

- Stack: Vite + React + TypeScript
- Styling: global CSS with design tokens and scoped component classes
- Content: structured TypeScript data in `src/data/siteData.ts`
- Static preview fallback: `public/prototype.html` + `src/staticPrototype.js` + `src/data/siteData.static.js`
- Documentation: maintained in `docs/`

## Local Preview

```bash
export PATH="$PWD/.tools/node/bin:$PATH"
npm run dev -- --port 5173
```

Then open:

```text
http://127.0.0.1:5173/
```

The no-build static preview remains available as a fallback:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

```text
http://127.0.0.1:4173/public/prototype.html
```

## Installed Local Tooling

- Portable Node.js is installed under `.tools/node`.
- npm dependencies are installed in `node_modules/`.
- Playwright Chromium is installed in the user Playwright cache.
- `npm run build` passes.
- `npm run qa:visual` can run screenshot checks when the Vite dev server is active.
