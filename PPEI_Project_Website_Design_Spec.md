# PPEI_B3_S2 Oral Presentation Website Design Spec

## 0. Language Rule

- User prompts may be written in English.
- Assistant feedback, design rationale, and implementation notes should be written in Chinese.
- Website interface copy can remain in English because it is intended for an international academic presentation.

## 1. Information Architecture

This is a single-page academic project website for the final Oral Presentation of PPEI_B3_S2, created by Team B, Group 4. The structure should feel like a polished course wiki / research project homepage rather than a commercial landing page.

Primary scroll sections:

1. Home
2. Team Stuff
3. Gantt Chart of Team Work Management
4. Database & Interactome
5. Resume / Summary of the Professionals Interviewed + Main Advice
6. Proof of Professional Behavior

Global fixed elements:

- Institutional identity cluster: fixed at top left, containing two clickable logo/icon buttons for Huazhong University of Science and Technology and Universite Paris-Saclay / Evry.
- Navigation trigger: fixed at top right. Initial state is a right-pointing triangle. Active state rotates 90 degrees clockwise to point downward and opens a floating navigation panel.
- Website opens on Home by default.

Recommended information architecture for complex content:

- Use section-level anchor navigation for presentation flow.
- Use person-based tabs for interview database browsing.
- Within each person tab, group the 20 database dimensions into 5 accordion categories:
  - Identity & role
  - Career path
  - Skills & methods
  - Collaboration & ethics
  - Advice & resources
- Keep raw data out of the first view; reveal details only when the presenter needs them.

## 2. Section-by-Section Layout Proposal

### Home

Goal: establish project identity immediately.

Layout:

- Full first-screen hero section with a restrained academic-tech composition.
- Large project title: "PPEI_B3_S2 Oral Presentation".
- Supporting identity line: "Final Project Website / Team B / Group 4".
- Compact metadata strip for course, group, and presentation purpose.
- Subtle abstract research diagram in the background, not a decorative marketing hero.

### Team Stuff

Goal: present four members evenly and professionally.

Layout:

- Four parallel rectangular profile cards.
- Each card includes:
  - portrait placeholder or headshot area
  - name / role placeholder
  - basic information
  - jobs of interest
  - fields of activity / interest
- Hover state:
  - card scales slightly
  - border becomes accent colored
  - shadow increases modestly

### Gantt Chart of Team Work Management

Goal: redesign the source Gantt chart as an integrated web component.

Layout:

- Timeline header with weekly columns.
- Left column lists tasks / workstreams.
- Right side uses horizontal task bars with color-coded ownership or phase.
- Include milestone markers for interview preparation, data synthesis, website build, and rehearsal.
- Avoid embedding a screenshot of the original chart.

### Database & Interactome

Goal: combine analytical network view with structured interview data.

Layout:

- Two visually distinct subareas inside one section.
- Left / upper area: Interactome network.
  - Nodes and links shown as a web-native SVG-style network.
  - Central concepts use larger nodes.
  - Hover state highlights node and connected links.
- Right / lower area: Database explorer.
  - Person tabs switch among three interviewed professionals.
  - Accordion categories prevent the 60 cells from feeling like a dense raw table.
  - Each category contains compact key-value chips or rows.

### Resume / Summary + Main Advice

Goal: separate source summaries from final synthesis.

Layout:

- Two-column composition.
- Left column: three stacked interview summary blocks.
- Right column: one larger synthesized advice block.
- Right column should be visually more prominent because it is the final takeaway.

### Proof of Professional Behavior

Goal: clean placeholder for later evidence.

Layout:

- Empty-state upload/evidence panel.
- Contains a clear title, short note, and four empty slots for future text, screenshots, emails, meeting records, or certificates.
- Should look intentionally prepared, not unfinished.

## 3. Interaction Suggestions

Navigation:

- Fixed top-right triangle button.
- On click:
  - rotate icon 90 degrees clockwise
  - reveal dropdown panel below
  - clicking a menu item scrolls to the relevant section

Institutional icons:

- Fixed top-left cluster.
- Each icon should have hover state and be treated as a clickable external-link control.

Team cards:

- Hover scale: 1.02 to 1.04.
- Border changes from neutral to accent.
- Shadow becomes slightly stronger.

Gantt:

- Task bar hover reveals tooltip or small note with owner / date / status.
- Milestones use small diamonds or vertical tick marks.

Interactome:

- Node hover increases node size or stroke weight.
- Connected links become darker and unrelated links fade.
- Node labels remain readable.

Database:

- Person tabs for three professionals.
- Accordions for grouped dimensions.
- Optional later enhancement: search or "show all" toggle.

Proof section:

- Empty slots should be clickable placeholders in the coded website.
- Later content types can include screenshots, signed notes, email evidence, or behavior checklist.

## 4. Visual Style Directions

### Direction A: Research Lab Minimal

Character:

- White / off-white background.
- Ink, cool gray, and restrained blue accents.
- Fine borders, compact metadata, generous spacing.
- Best for a serious university presentation.

Use when:

- The group wants the safest academic-professional result.
- Content clarity matters more than visual drama.

### Direction B: Classic Tech Homepage

Character:

- Light surface with high-contrast typography.
- More polished UI components, stronger shadows, accent buttons, refined cards.
- Inspired by modern product and platform homepages, but without sales language.

Use when:

- The final website should feel more finished and interactive.
- The presenter wants the page to look like a real public project site.

### Direction C: Data Observatory

Character:

- Deep charcoal header / analytical panels with light content areas.
- Network visual and Gantt chart become stronger visual anchors.
- Uses cyan, green, and amber accents for data categories.

Use when:

- Database and interactome are the intellectual center of the presentation.
- The team wants a more technical research-dashboard mood.

Recommended final direction:

- Direction A with selected details from Direction B.
- Reason: it is academic, presentation-friendly, readable, and still polished enough for a final product website. It avoids looking too commercial while keeping the interface modern.

## 5. Figma Build Notes

Frame setup:

- Desktop frame: 1440 px wide.
- Suggested page height: about 5200-6200 px depending on final content.
- Use a 12-column grid, 80 px margins, 24 px gutters.
- Main content max width: 1180 px.

Suggested tokens:

- Background: #F7F8FA
- Surface: #FFFFFF
- Text primary: #172033
- Text secondary: #667085
- Border: #DDE3EA
- Accent blue: #1E5EFF
- Accent green: #1E9B73
- Accent amber: #C98216
- Accent violet: #6D5BD0
- Radius: 8 px for cards and panels
- Shadow: soft low-opacity shadow only for floating elements and hover states

Suggested typography:

- Font: Inter, SF Pro, or IBM Plex Sans.
- H1: 64 / 72
- H2: 40 / 48
- H3: 24 / 32
- Body: 16 / 26
- Caption: 13 / 18

Figma interaction prototypes:

- Navigation trigger:
  - variant 1: collapsed / arrow right
  - variant 2: expanded / arrow down
  - on click: change to expanded + open overlay panel
- Menu items:
  - on click: scroll to section anchor
- Team card:
  - while hovering: scale card to 102%, change stroke and shadow
- Accordions:
  - on click: expand / collapse category
- Person tabs:
  - on click: switch active database panel

