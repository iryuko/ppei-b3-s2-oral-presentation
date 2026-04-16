export type Tone = "blue" | "green" | "amber" | "violet";

export type ProjectMeta = {
  course: string;
  team: string;
  group: string;
  title: string;
  subtitle: string;
  description: string;
};

export type Institution = {
  shortName: string;
  fullName: string;
  href: string;
  logoSrc: string;
  logoShape: "seal" | "wordmark";
};

export type NavItem = {
  label: string;
  href: string;
};

export type TeamMember = {
  id: string;
  initials: string;
  name: string;
  role: string;
  basicInfo: string;
  jobsOfInterest: string[];
  fieldsOfActivity: string[];
};

export type GanttTask = {
  id: string;
  label: string;
  owner: string;
  startWeek: number;
  endWeek: number;
  tone: Tone;
  milestone?: string;
};

export type InteractomeNode = {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  size: number;
  tone: Tone;
};

export type InteractomeEdge = {
  source: string;
  target: string;
  style?: "solid" | "dashed";
};

export type InteractomeLegendItem = {
  label: string;
  tone: Tone;
};

export type DatabaseField = {
  label: string;
  value: string;
};

export type DatabaseCategory = {
  id: string;
  title: string;
  fields: DatabaseField[];
};

export type Professional = {
  id: string;
  name: string;
  headline: string;
  categories: DatabaseCategory[];
};

export type InterviewSummary = {
  id: string;
  title: string;
  person: string;
  summary: string;
};

export type AdviceItem = {
  id: string;
  title: string;
  description: string;
};

export type ProofSlot = {
  id: string;
  label: string;
  description: string;
};

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projectMeta: ProjectMeta = {
  course: "PPEI_B3_S2",
  team: "Team B",
  group: "Group 4",
  title: "PPEI_B3_S2 Oral Presentation",
  subtitle: "Final project website for an international academic collaboration",
  description: "structured course-wiki style homepage documenting team work",
};

export const institutions: Institution[] = [
  {
    shortName: "HUST",
    fullName: "Huazhong University of Science and Technology",
    href: "https://www.hust.edu.cn/",
    logoSrc: publicAsset("icons/HUST.png"),
    logoShape: "seal",
  },
  {
    shortName: "UPS",
    fullName: "Universite Evry Paris-Saclay",
    href: "https://www.univ-evry.fr/",
    logoSrc: publicAsset("icons/UPS.png"),
    logoShape: "wordmark",
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Team Stuff", href: "#team" },
  { label: "Gantt Chart", href: "#gantt" },
  { label: "Interactome & Database", href: "#database" },
  { label: "Summary & Advice", href: "#summary" },
  { label: "Proof of Professional Behavior", href: "#proof" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    initials: "M1",
    name: "Member Name",
    role: "Research coordination",
    basicInfo: "Program background and role summary placeholder.",
    jobsOfInterest: ["Research engineer", "Project coordinator"],
    fieldsOfActivity: ["Biotechnology", "Data interpretation", "Team communication"],
  },
  {
    id: "member-2",
    initials: "M2",
    name: "Member Name",
    role: "Interview preparation",
    basicInfo: "Program background and role summary placeholder.",
    jobsOfInterest: ["Clinical specialist", "Scientific consultant"],
    fieldsOfActivity: ["Healthcare", "Ethics", "Professional communication"],
  },
  {
    id: "member-3",
    initials: "M3",
    name: "Member Name",
    role: "Data and interactome",
    basicInfo: "Program background and role summary placeholder.",
    jobsOfInterest: ["Data scientist", "Product analyst"],
    fieldsOfActivity: ["Databases", "Network analysis", "AI-supported research"],
  },
  {
    id: "member-4",
    initials: "M4",
    name: "Member Name",
    role: "Presentation synthesis",
    basicInfo: "Program background and role summary placeholder.",
    jobsOfInterest: ["R&D coordinator", "Academic liaison"],
    fieldsOfActivity: ["Research strategy", "Public speaking", "Documentation"],
  },
];

export const ganttWeeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];

export const ganttTasks: GanttTask[] = [
  {
    id: "topic-framing",
    label: "Topic framing & role allocation",
    owner: "All members",
    startWeek: 1,
    endWeek: 2,
    tone: "blue",
  },
  {
    id: "interview-prep",
    label: "Professional interview preparation",
    owner: "Interview group",
    startWeek: 2,
    endWeek: 4,
    tone: "green",
    milestone: "Guide validated",
  },
  {
    id: "database",
    label: "Database structure & information entry",
    owner: "Data group",
    startWeek: 3,
    endWeek: 5,
    tone: "amber",
  },
  {
    id: "interactome",
    label: "Interactome analysis and visual redesign",
    owner: "Analysis group",
    startWeek: 4,
    endWeek: 6,
    tone: "violet",
  },
  {
    id: "website",
    label: "Website prototype and presentation rehearsal",
    owner: "Full team",
    startWeek: 5,
    endWeek: 8,
    tone: "blue",
    milestone: "Final rehearsal",
  },
];

export const interactomeLegendItems: InteractomeLegendItem[] = [
  { label: "Sales Director", tone: "blue" },
  { label: "Research & Development", tone: "violet" },
  { label: "Quality Control", tone: "green" },
  { label: "General Manager", tone: "amber" },
];

export const interactomeNote = [
  "Two of the interviewees, Mei YANG and Nianhua GONG, refused to provide more contacts in another context because of private security.",
  "As a result, some potential contacts are intentionally missing from this interactome.",
];

export const interactomeNodes: InteractomeNode[] = [
  {
    id: "group4",
    label: "Group4-TeamB\nBeichen LIN\nHaoyang LU\nChangxiao SUI\nZiche WANG",
    description: "Team B, Group 4 core interview group",
    x: 50,
    y: 62,
    size: 42,
    tone: "blue",
  },
  {
    id: "nianhua-gong",
    label: "Nianhua GONG",
    description: "Research & Development",
    x: 18,
    y: 78,
    size: 25,
    tone: "violet",
  },
  {
    id: "xianfa-tan",
    label: "Xianfa TAN",
    description: "Sales Director",
    x: 76,
    y: 54,
    size: 24,
    tone: "blue",
  },
  {
    id: "mei-yang",
    label: "Mei YANG",
    description: "Quality Control",
    x: 75,
    y: 78,
    size: 21,
    tone: "green",
  },
  {
    id: "kai-shen",
    label: "Kai SHEN",
    description: "General Manager",
    x: 93,
    y: 37,
    size: 22,
    tone: "amber",
  },
  {
    id: "weitao-du",
    label: "Weitao DU",
    description: "General Manager",
    x: 93,
    y: 64,
    size: 22,
    tone: "amber",
  },
];

export const interactomeEdges: InteractomeEdge[] = [
  { source: "group4", target: "nianhua-gong" },
  { source: "group4", target: "xianfa-tan" },
  { source: "group4", target: "mei-yang" },
  { source: "xianfa-tan", target: "kai-shen", style: "dashed" },
  { source: "xianfa-tan", target: "weitao-du", style: "dashed" },
];

const sharedCategories: DatabaseCategory[] = [
  {
    id: "identity",
    title: "Identity & role",
    fields: [
      { label: "Current position", value: "Placeholder role title" },
      { label: "Organization type", value: "Placeholder organization" },
      { label: "Main responsibility", value: "Placeholder responsibility" },
      { label: "International exposure", value: "Placeholder experience" },
    ],
  },
  {
    id: "career-path",
    title: "Career path",
    fields: [
      { label: "Entry route", value: "Placeholder route into the field" },
      { label: "Key transition", value: "Placeholder career transition" },
      { label: "Decision factor", value: "Placeholder decision factor" },
      { label: "Future outlook", value: "Placeholder future view" },
    ],
  },
  {
    id: "skills",
    title: "Skills & methods",
    fields: [
      { label: "Core skills", value: "Placeholder skill cluster" },
      { label: "Tools", value: "Placeholder tools and methods" },
      { label: "Soft skills", value: "Placeholder communication point" },
      { label: "Learning habit", value: "Placeholder learning strategy" },
    ],
  },
  {
    id: "collaboration",
    title: "Collaboration & ethics",
    fields: [
      { label: "Teamwork", value: "Placeholder teamwork insight" },
      { label: "Professional conduct", value: "Placeholder conduct principle" },
      { label: "Cross-cultural work", value: "Placeholder collaboration note" },
      { label: "Risk awareness", value: "Placeholder risk or ethics note" },
    ],
  },
  {
    id: "advice",
    title: "Advice & resources",
    fields: [
      { label: "Main advice", value: "Placeholder main advice" },
      { label: "Recommended resource", value: "Placeholder resource" },
      { label: "Common mistake", value: "Placeholder caution" },
      { label: "Next step", value: "Placeholder next step" },
    ],
  },
];

export const professionals: Professional[] = [
  {
    id: "professional-1",
    name: "Professional 1",
    headline: "Research-oriented professional placeholder",
    categories: sharedCategories,
  },
  {
    id: "professional-2",
    name: "Professional 2",
    headline: "Industry-oriented professional placeholder",
    categories: sharedCategories,
  },
  {
    id: "professional-3",
    name: "Professional 3",
    headline: "Interdisciplinary professional placeholder",
    categories: sharedCategories,
  },
];

export const interviewSummaries: InterviewSummary[] = [
  {
    id: "summary-1",
    title: "Interview 01",
    person: "Professional 1",
    summary:
      "Concise placeholder summary for the first professional interview, focusing on role, pathway, practical constraints, and advice relevant to PPEI_B3_S2.",
  },
  {
    id: "summary-2",
    title: "Interview 02",
    person: "Professional 2",
    summary:
      "Concise placeholder summary for the second interview, designed to keep source evidence balanced and comparable across all professionals.",
  },
  {
    id: "summary-3",
    title: "Interview 03",
    person: "Professional 3",
    summary:
      "Concise placeholder summary for the third interview, ready to be replaced by final notes, selected patterns, and relevant quotations.",
  },
];

export const adviceItems: AdviceItem[] = [
  {
    id: "advice-1",
    title: "Build transferable professional skills.",
    description:
      "Connect technical knowledge with communication, organization, ethics, and decision-making under real constraints.",
  },
  {
    id: "advice-2",
    title: "Use interviews as evidence, not decoration.",
    description:
      "Compare patterns across professionals and synthesize the implications instead of listing raw notes.",
  },
  {
    id: "advice-3",
    title: "Make collaboration visible.",
    description:
      "Show planning, respectful communication, role distribution, reliability, and documented follow-through.",
  },
];

export const proofSlots: ProofSlot[] = [
  {
    id: "screenshot",
    label: "Screenshot",
    description: "Future image evidence from meetings, coordination, or shared work.",
  },
  {
    id: "message",
    label: "Email / Message",
    description: "Future communication record or professional contact proof.",
  },
  {
    id: "meeting-note",
    label: "Meeting Note",
    description: "Future agenda, minutes, or documented decision trail.",
  },
  {
    id: "checklist",
    label: "Behavior Checklist",
    description: "Future punctuality, etiquette, and preparation evidence.",
  },
];
