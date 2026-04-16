# Design System

## Visual Direction

The prototype uses a modern research-lab / restrained tech-company homepage direction. The design should feel serious, international, and academically credible, while still looking like a contemporary web product.

Core qualities:

- Clean academic professionalism
- Strong typography and spacing
- Subtle analytical visual language
- Minimal decoration
- Refined interaction states

## Color Logic

The palette is intentionally restrained:

- Background: cool off-white for an academic paper-like base
- Surface: white cards and panels for content clarity
- Text: deep ink for high readability
- Muted text: cool gray for hierarchy
- Border: pale blue-gray for subtle structure
- Blue: primary action / navigation / institutional-tech accent
- Green: progress, collaboration, interview signal
- Amber: planning / schedule / milestone signal
- Violet: network / interactome / synthesis signal

Avoid:

- Large cheap gradients
- Random accent colors
- Heavy borders
- Overly saturated backgrounds

## Typography Logic

Preferred fonts:

- Inter
- SF Pro
- IBM Plex Sans
- system sans-serif fallback

Type hierarchy:

- Hero title: large, confident, compact line-height
- Section heading: clear and presentation-friendly
- Body: readable, not tiny
- Labels: uppercase only for metadata and small UI labels

Letter spacing should remain neutral. Do not use negative tracking.

## Spacing Rules

- Main content width: approximately 1180px
- Desktop section rhythm: generous vertical spacing
- Cards use consistent padding and radius
- Avoid stacking too many framed panels inside each other
- Fixed UI should stay small and unobtrusive

## Component Style Rules

- Cards: 8-16px radius, fine border, soft shadow only on hover or key panels
- Navigation panel: floating, glass-like but readable
- Team cards: equal dimensions, balanced content zones
- Gantt: grid-based, clear timeline columns, restrained color bars
- Database: person switcher plus accordions, not raw table
- Interactome: analytical SVG network with hover states
- Empty state: intentionally prepared, not unfinished

## Interaction Style

Interactions should feel subtle:

- Navigation trigger rotates 90 degrees on open
- Dropdown fades and translates slightly
- Team cards scale minimally on hover
- Gantt bars lift slightly on hover
- Interactome nodes highlight without excessive animation
- Accordions open/close using native details behavior

