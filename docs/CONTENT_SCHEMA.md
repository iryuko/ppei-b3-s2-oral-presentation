# Content Schema

All placeholder content for the React prototype is centralized in `src/data/siteData.ts`. Components should consume this structured data instead of hardcoding copy into layout files.

Because the current machine does not have Node/npm installed, the project also includes a no-build static preview. Its mirrored JavaScript data lives in `src/data/siteData.static.js`. When Node is available, keep `siteData.ts` as the canonical source and either remove or regenerate the static mirror.

## Project Metadata

```ts
type ProjectMeta = {
  course: string;
  team: string;
  group: string;
  title: string;
  subtitle: string;
  description: string;
};
```

## Institutions

```ts
type Institution = {
  shortName: string;
  fullName: string;
  href: string;
};
```

## Navigation

```ts
type NavItem = {
  label: string;
  href: string;
};
```

## Team Members

```ts
type TeamMember = {
  id: string;
  initials: string;
  name: string;
  role: string;
  basicInfo: string;
  jobsOfInterest: string[];
  fieldsOfActivity: string[];
};
```

## Gantt Tasks

```ts
type GanttTask = {
  id: string;
  label: string;
  owner: string;
  startWeek: number;
  endWeek: number;
  tone: "blue" | "green" | "amber" | "violet";
  milestone?: string;
};
```

## Interactome

```ts
type InteractomeNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  tone: "blue" | "green" | "amber" | "violet";
};

type InteractomeEdge = {
  source: string;
  target: string;
};
```

## Professional Database

```ts
type DatabaseField = {
  label: string;
  value: string;
};

type DatabaseCategory = {
  id: string;
  title: string;
  fields: DatabaseField[];
};

type Professional = {
  id: string;
  name: string;
  headline: string;
  categories: DatabaseCategory[];
};
```

## Interview Summaries And Advice

```ts
type InterviewSummary = {
  id: string;
  title: string;
  person: string;
  summary: string;
};

type AdviceItem = {
  id: string;
  title: string;
  description: string;
};
```

## Proof Placeholders

```ts
type ProofSlot = {
  id: string;
  label: string;
  description: string;
};
```
