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
  portraitSrc?: string;
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
  label: string;
  title: string;
  summary: string;
};

export type AdviceItem = {
  id: string;
  title: string;
  description: string;
};

export type AdviceMeta = {
  label: string;
  title: string;
};

export type ProofTimelineIcon = "contact" | "schedule" | "roles" | "refreshments" | "privacy";

export type ProofTimelineStep = {
  id: string;
  title: string;
  description: string;
  icon: ProofTimelineIcon;
};

export type TeamRoleAssignment = {
  role: string;
  member: string;
};

export type ProofEvidencePanel = {
  title: string;
  businessCardTitle: string;
  businessCardCaption: string;
  businessCardSrc?: string;
  rolesTitle: string;
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
    id: "haoyang-lu",
    initials: "HL",
    portraitSrc: publicAsset("images/Portrait_Haoyang LU.jpg"),
    name: "Haoyang LU",
    role: "Biological Sciences / 3rd year",
    basicInfo: "ryuko279@gmail.com · PPEI-B3_Group 4",
    jobsOfInterest: [
      "Biomedical Data Scientist focused on bioinformatics, programming, and data analysis.",
    ],
    fieldsOfActivity: [
      "Academic research, biotech, healthcare, and precision medicine.",
    ],
  },
  {
    id: "beichen-lin",
    initials: "BL",
    portraitSrc: publicAsset("images/Portrait_Beichen LIN.jpg"),
    name: "Beichen LIN",
    role: "Biological Sciences / 3rd year",
    basicInfo: "1046849373@qq.com · PPEI-B3_G4",
    jobsOfInterest: [
      "Teacher focused on student learning, lesson delivery, and classroom support.",
    ],
    fieldsOfActivity: [
      "Education and training, including schools and teaching institutions.",
    ],
  },
  {
    id: "changxiao-sui",
    initials: "CS",
    portraitSrc: publicAsset("images/Portrait_Changxiao SUI.jpg"),
    name: "Changxiao SUI",
    role: "Biological Sciences / 3rd year",
    basicInfo: "u202314223@hust.edu.cn · PPEI2-B3_G4",
    jobsOfInterest: [
      "Neurobiology Researcher focused on brain science and neurological disorders.",
    ],
    fieldsOfActivity: [
      "Neuroscience research in universities, hospitals, and biotech.",
    ],
  },
  {
    id: "ziche-wang",
    initials: "ZW",
    portraitSrc: publicAsset("images/Portait_Ziche WANG.jpg"),
    name: "Ziche WANG",
    role: "Biological Sciences / 3rd year",
    basicInfo: "3208652864@qq.com · PPEI-B3_g4",
    jobsOfInterest: [
      "Microbiologist focused on microbial research and applied microbiology.",
    ],
    fieldsOfActivity: [
      "Healthcare, biotech, food safety, and agriculture.",
    ],
  },
];

export const ganttWeeks = ["3-Mar", "5-Mar", "7-Mar", "8-Mar", "9-Mar", "15-Mar", "18-Mar", "20-Mar", "27-Mar", "12-Apr", "17-Apr"];

export const ganttTasks: GanttTask[] = [
  {
    id: "learn-skills-plan",
    label: "Learn skills and plan",
    owner: "LIN, LU, WANG, SUI",
    startWeek: 1,
    endWeek: 2,
    tone: "green",
  },
  {
    id: "design-business-card",
    label: "Design business card",
    owner: "LIN, LU, WANG, SUI",
    startWeek: 2,
    endWeek: 7,
    tone: "amber",
  },
  {
    id: "design-questionnaire",
    label: "Design questionnaire",
    owner: "LIN, LU",
    startWeek: 2,
    endWeek: 4,
    tone: "green",
  },
  {
    id: "contact-company",
    label: "Contact company",
    owner: "LU",
    startWeek: 5,
    endWeek: 6,
    tone: "green",
  },
  {
    id: "interview-1",
    label: "Interview 1",
    owner: "LIN, LU, WANG, SUI",
    startWeek: 7,
    endWeek: 10,
    tone: "blue",
  },
  {
    id: "interview-2",
    label: "Interview 2",
    owner: "LIN, LU, WANG, SUI",
    startWeek: 7,
    endWeek: 10,
    tone: "green",
  },
  {
    id: "interview-3",
    label: "Interview 3",
    owner: "LIN, LU, WANG, SUI",
    startWeek: 7,
    endWeek: 10,
    tone: "violet",
  },
  {
    id: "speed-meeting",
    label: "Speed meeting",
    owner: "LIN, LU, WANG, SUI",
    startWeek: 9,
    endWeek: 10,
    tone: "amber",
  },
  {
    id: "organize-information",
    label: "Organize the information",
    owner: "LIN, WANG, SUI",
    startWeek: 9,
    endWeek: 11,
    tone: "blue",
  },
  {
    id: "report",
    label: "Report",
    owner: "LIN, LU, WANG, SUI",
    startWeek: 10,
    endWeek: 11,
    tone: "green",
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

export const adviceMeta: AdviceMeta = {
  label: "SYNTHESIS",
  title: "Main advice / recommendations",
};

export const professionals: Professional[] = [
  {
    id: "xianfa-tan",
    name: "Xianfa TAN",
    headline: "Sales Director · Sales departments",
    categories: [
      {
        id: "profile",
        title: "Personal profile",
        fields: [
          { label: "Age", value: "40-" },
          { label: "Gender", value: "male" },
          { label: "Marital status", value: "married" },
          { label: "Birthplace / Country", value: "Hubei, China" },
        ],
      },
      {
        id: "education",
        title: "Education & entry",
        fields: [
          { label: "Major in college", value: "medical" },
          { label: "Education background", value: "bachelor" },
          { label: "College of graduation", value: "Tongji Medical College" },
          { label: "Hire date", value: "2021" },
        ],
      },
      {
        id: "role",
        title: "Company & role",
        fields: [
          { label: "Company", value: "Not specified in the source table" },
          { label: "Department", value: "sales departments" },
          { label: "Duty of job", value: "sales director" },
          { label: "Wages monthly", value: "-" },
        ],
      },
      {
        id: "work",
        title: "Work conditions",
        fields: [
          { label: "Working hours", value: "Relatively flexible" },
          { label: "Characteristics", value: "aspirant" },
          { label: "Common troubles in the job", value: "How to adapt the changing medical environment" },
        ],
      },
      {
        id: "experience",
        title: "Experience & motivation",
        fields: [
          {
            label: "Working experience",
            value: "Ever was a doctor, then worked at a medical-technology company for 15 years, and now established a company with friends",
          },
          {
            label: "Reasons for choosing the job",
            value: "To find a better platform enabling individuals to exert their own influence",
          },
        ],
      },
    ],
  },
  {
    id: "mei-yang",
    name: "Mei YANG",
    headline: "Manager · Quality control department",
    categories: [
      {
        id: "profile",
        title: "Personal profile",
        fields: [
          { label: "Age", value: "30-" },
          { label: "Gender", value: "female" },
          { label: "Marital status", value: "married" },
          { label: "Birthplace / Country", value: "Hubei, China" },
        ],
      },
      {
        id: "education",
        title: "Education & entry",
        fields: [
          { label: "Major in college", value: "pharmaceutical engineering" },
          { label: "Education background", value: "bachelor" },
          { label: "College of graduation", value: "-" },
          { label: "Hire date", value: "2009" },
        ],
      },
      {
        id: "role",
        title: "Company & role",
        fields: [
          { label: "Company", value: "Renfu Pharmaceutical Company" },
          { label: "Department", value: "quality control department" },
          { label: "Duty of job", value: "manager" },
          { label: "Wages monthly", value: "-" },
        ],
      },
      {
        id: "work",
        title: "Work conditions",
        fields: [
          { label: "Working hours", value: "Eight hours and five days" },
          { label: "Characteristics", value: "Precise, meticulous and resilient" },
          { label: "Common troubles in the job", value: "The materials provided by suppliers sometimes are below standard" },
        ],
      },
      {
        id: "experience",
        title: "Experience & motivation",
        fields: [
          {
            label: "Working experience",
            value: "Ever worked at similar department, then entered the company now",
          },
          {
            label: "Reasons for choosing the job",
            value: "Colleagues cooperate with each other, and the atmosphere is very good.",
          },
        ],
      },
    ],
  },
  {
    id: "nianhua-gong",
    name: "Nianhua GONG",
    headline: "Manager · Research & Development",
    categories: [
      {
        id: "profile",
        title: "Personal profile",
        fields: [
          { label: "Age", value: "30-" },
          { label: "Gender", value: "female" },
          { label: "Marital status", value: "married" },
          { label: "Birthplace / Country", value: "Hubei, China" },
        ],
      },
      {
        id: "education",
        title: "Education & entry",
        fields: [
          { label: "Major in college", value: "Organic chemistry" },
          { label: "Education background", value: "Master" },
          { label: "College of graduation", value: "-" },
          { label: "Hire date", value: "2016" },
        ],
      },
      {
        id: "role",
        title: "Company & role",
        fields: [
          { label: "Company", value: "Renfu Pharmaceutical Company" },
          { label: "Department", value: "Research & Development" },
          { label: "Duty of job", value: "manager" },
          { label: "Wages monthly", value: "-" },
        ],
      },
      {
        id: "work",
        title: "Work conditions",
        fields: [
          { label: "Working hours", value: "Eight hours and five days" },
          { label: "Characteristics", value: "Detailed enough, good at identifying problems and solving them promptly" },
          {
            label: "Common troubles in the job",
            value: "The formula needs to be repeatedly tested and adjusted. The compatibility of different materials varies.",
          },
        ],
      },
      {
        id: "experience",
        title: "Experience & motivation",
        fields: [
          {
            label: "Working experience",
            value: "Had two working experiences, and involved in the synthesis of organic chemistry",
          },
          {
            label: "Reasons for choosing the job",
            value: "It is rather difficult to work in a university for people with master degree, so she chose to work in enterprises.",
          },
        ],
      },
    ],
  },
];

export const interviewSummaries: InterviewSummary[] = [
  {
    id: "01",
    label: "INTERVIEW 01",
    title: "Mr. Xianfa TAN, Medical Device Sales Director",
    summary:
      "From clinician to enterprise leader, he chose industry for faster growth, broader impact, and larger platforms. His experience highlights policy pressure, compliance, new technology adoption, and the need to align technical value with market execution.",
  },
  {
    id: "02",
    label: "INTERVIEW 02",
    title: "Ms. Mei YANG, Quality & Registration, Humanwell Pharma",
    summary:
      "She has stayed in one company for 17 years, showing that long-term accumulation can build strong professional ability. Her work emphasizes rigor, resilience, process coordination, and the value of stable teams and compliant corporate systems.",
  },
  {
    id: "03",
    label: "INTERVIEW 03",
    title: "Ms. Nianhua GONG, R&D, Humanwell Pharma",
    summary:
      "She entered pharmaceutical R&D after her master’s degree and focuses on product development through repeated testing and problem-solving. Her experience shows that enterprise R&D values patience, technical depth, and the ability to solve practical formulation challenges.",
  },
];

export const adviceItems: AdviceItem[] = [
  {
    id: "advice-1",
    title: "Choose a path that matches both your abilities and your tolerance for the work rhythm.",
    description:
      "Sales, quality, and R&D require very different lifestyles, pressures, and strengths. Career fit matters more than job title alone.",
  },
  {
    id: "advice-2",
    title: "Build long-term professional value through compliance, problem-solving, and continuous learning.",
    description:
      "Across all three interviews, sustainable growth comes from discipline, technical improvement, and adapting to policy, regulation, and real industry needs.",
  },
  {
    id: "advice-3",
    title: "Use stable platforms to accumulate skills, then turn experience into wider opportunities.",
    description:
      "A good company, strong teamwork, and real project experience help transform early jobs into long-term career capital.",
  },
];

export const proofTimelineSteps: ProofTimelineStep[] = [
  {
    id: "company-contact",
    title: "Company Contact",
    description:
      "We contacted Bokang Pharmaceutical Technology and Renfu Pharmaceutical to request professional interviews with relevant employees.",
    icon: "contact",
  },
  {
    id: "interview-arrangement",
    title: "Interview Arrangement",
    description:
      "We coordinated the available time and place in advance and conducted the interviews on March 18 and March 20.",
    icon: "schedule",
  },
  {
    id: "role-allocation",
    title: "Role Allocation",
    description: "We assigned clear internal roles to keep the interviews organized and efficient.",
    icon: "roles",
  },
  {
    id: "refreshments",
    title: "Refreshments",
    description: "We prepared basic refreshments for interviewees as a simple and respectful sign of professional courtesy.",
    icon: "refreshments",
  },
  {
    id: "privacy-security",
    title: "Privacy and Security",
    description:
      "We respected the interviewees' privacy and security concerns. Since they did not agree to photos or video recordings, we used business cards as supporting evidence instead.",
    icon: "privacy",
  },
];

export const proofTeamRoles: TeamRoleAssignment[] = [
  { role: "Interviewer / Moderator", member: "Haoyang LU" },
  { role: "Scribe", member: "Changxiao SUI" },
  { role: "Timekeeper", member: "Ziche WANG" },
  { role: "Final synthesis", member: "Beichen LIN" },
];

export const proofEvidencePanel: ProofEvidencePanel = {
  title: "Supporting Evidence",
  businessCardTitle: "Business card image area",
  businessCardCaption: "Placeholder-friendly area reserved for business card images or later replacements.",
  businessCardSrc: publicAsset("images/Bussiness card.png"),
  rolesTitle: "Team role distribution",
};
