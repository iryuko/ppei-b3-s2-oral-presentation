export const projectMeta = {
  course: "PPEI_B3_S2",
  team: "Team B",
  group: "Group 4",
  title: "PPEI_B3_S2 Oral Presentation",
  subtitle: "Final project website for an international academic collaboration",
  description: "structured course-wiki style homepage documenting team work",
};

export const institutions = [
  {
    shortName: "HUST",
    fullName: "Huazhong University of Science and Technology",
    href: "https://www.hust.edu.cn/",
    logoSrc: "/icons/HUST.png",
    logoShape: "seal",
  },
  {
    shortName: "UPS",
    fullName: "Universite Evry Paris-Saclay",
    href: "https://www.univ-evry.fr/",
    logoSrc: "/icons/UPS.png",
    logoShape: "wordmark",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Team Stuff", href: "#team" },
  { label: "Gantt Chart", href: "#gantt" },
  { label: "Interactome & Database", href: "#database" },
  { label: "Summary & Advice", href: "#summary" },
  { label: "Proof of Professional Behavior", href: "#proof" },
];

export const teamMembers = [
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

export const ganttWeeks = ["3-Mar", "5-Mar", "7-Mar", "8-Mar", "9-Mar", "15-Mar", "18-Mar", "20-Mar", "27-Mar", "12-Apr", "17-Apr"];

export const ganttTasks = [
  { id: "learn-skills-plan", label: "Learn skills and plan", owner: "LIN, LU, WANG, SUI", startWeek: 1, endWeek: 2, tone: "green" },
  { id: "design-business-card", label: "Design business card", owner: "LIN, LU, WANG, SUI", startWeek: 2, endWeek: 7, tone: "amber" },
  { id: "design-questionnaire", label: "Design questionnaire", owner: "LIN, LU", startWeek: 2, endWeek: 4, tone: "green" },
  { id: "contact-company", label: "Contact company", owner: "LU", startWeek: 5, endWeek: 6, tone: "green" },
  { id: "interview-1", label: "Interview 1", owner: "LIN, LU, WANG, SUI", startWeek: 7, endWeek: 10, tone: "blue" },
  { id: "interview-2", label: "Interview 2", owner: "LIN, LU, WANG, SUI", startWeek: 7, endWeek: 10, tone: "green" },
  { id: "interview-3", label: "Interview 3", owner: "LIN, LU, WANG, SUI", startWeek: 7, endWeek: 10, tone: "violet" },
  { id: "speed-meeting", label: "Speed meeting", owner: "LIN, LU, WANG, SUI", startWeek: 9, endWeek: 10, tone: "amber" },
  { id: "organize-information", label: "Organize the information", owner: "LIN, WANG, SUI", startWeek: 9, endWeek: 11, tone: "blue" },
  { id: "report", label: "Report", owner: "LIN, LU, WANG, SUI", startWeek: 10, endWeek: 11, tone: "green" },
];

export const interactomeLegendItems = [
  { label: "Sales Director", tone: "blue" },
  { label: "Research & Development", tone: "violet" },
  { label: "Quality Control", tone: "green" },
  { label: "General Manager", tone: "amber" },
];

export const interactomeNote = [
  "Two of the interviewees, Mei YANG and Nianhua GONG, refused to provide more contacts in another context because of private security.",
  "As a result, some potential contacts are intentionally missing from this interactome.",
];

export const interactomeNodes = [
  { id: "group4", label: "Group4-TeamB\nBeichen LIN\nHaoyang LU\nChangxiao SUI\nZiche WANG", description: "Team B, Group 4 core interview group", x: 50, y: 62, size: 42, tone: "blue" },
  { id: "nianhua-gong", label: "Nianhua GONG", description: "Research & Development", x: 18, y: 78, size: 25, tone: "violet" },
  { id: "xianfa-tan", label: "Xianfa TAN", description: "Sales Director", x: 76, y: 54, size: 24, tone: "blue" },
  { id: "mei-yang", label: "Mei YANG", description: "Quality Control", x: 75, y: 78, size: 21, tone: "green" },
  { id: "kai-shen", label: "Kai SHEN", description: "General Manager", x: 93, y: 37, size: 22, tone: "amber" },
  { id: "weitao-du", label: "Weitao DU", description: "General Manager", x: 93, y: 64, size: 22, tone: "amber" },
];

export const interactomeEdges = [
  { source: "group4", target: "nianhua-gong" },
  { source: "group4", target: "xianfa-tan" },
  { source: "group4", target: "mei-yang" },
  { source: "xianfa-tan", target: "kai-shen", style: "dashed" },
  { source: "xianfa-tan", target: "weitao-du", style: "dashed" },
];

export const professionals = [
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
          { label: "Working experience", value: "Ever was a doctor, then worked at a medical-technology company for 15 years, and now established a company with friends" },
          { label: "Reasons for choosing the job", value: "To find a better platform enabling individuals to exert their own influence" },
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
          { label: "Working experience", value: "Ever worked at similar department, then entered the company now" },
          { label: "Reasons for choosing the job", value: "Colleagues cooperate with each other, and the atmosphere is very good." },
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
          { label: "Common troubles in the job", value: "The formula needs to be repeatedly tested and adjusted. The compatibility of different materials varies." },
        ],
      },
      {
        id: "experience",
        title: "Experience & motivation",
        fields: [
          { label: "Working experience", value: "Had two working experiences, and involved in the synthesis of organic chemistry" },
          { label: "Reasons for choosing the job", value: "It is rather difficult to work in a university for people with master degree, so she chose to work in enterprises." },
        ],
      },
    ],
  },
];

export const interviewSummaries = [
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

export const adviceItems = [
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

export const proofSlots = [
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
