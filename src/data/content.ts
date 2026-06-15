// Single source of truth for site content.
// Copy is grounded in Juan_Gomez_Resume.pdf (2026-06-07). No firm/partner names; no family info.

export const profile = {
  name: "Juan Gomez",
  role: "Software Engineer",
  meta: "Full-stack · AI · Finance Systems",
  location: "Tampa, FL",
  email: "jjgomezswe@gmail.com",
  available: true,
  links: {
    github: "https://github.com/jjosegomez",
    linkedin: "https://www.linkedin.com/in/jjgomezswe/",
    resume: "/Juan_Gomez_Resume.pdf",
  },
  // employer-useful signals
  signals: ["Tampa, FL", "Permanent US Resident · no sponsorship", "Bilingual EN/ES"],
} as const;

export type StackGroup = { label: string; items: string[] };
export const stack: StackGroup[] = [
  { label: "Languages", items: ["SQL", "Python", "TypeScript", "JavaScript", "Java", "C#", "C++"] },
  { label: "Agentic AI / LLM", items: ["Snowflake Cortex", "AWS Bedrock", "Claude", "OpenAI", "Agent orchestration", "RAG", "Prompt & context design", "Eval frameworks", "DeepEval"] },
  { label: "AI-Assisted Dev", items: ["Claude Code", "Cursor", "GitHub Copilot", "Kiro"] },
  { label: "Frameworks & Cloud", items: ["Next.js", "FastAPI", "Streamlit", "React", "Node.js", "Supabase / PostgreSQL", "Snowflake", "AWS", "Azure", "Docker", "Okta"] },
  { label: "Quality & Delivery", items: ["Playwright", "Vitest", "AI eval suites", "Release validation", "Row-level access", "Agile / Scrum", "Git"] },
];

export type Project = {
  id: string;
  name: string;
  role: string;
  blurb: string;
  tags: string[];
  url?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Trinity",
    role: "Founding Engineer · 2025–Present",
    blurb:
      "A production multi-agent AI legal co-pilot for law firms. I architected the platform end to end: case intake & classification, RAG over Colombian jurisprudence, and grounded legal drafting under a strict propose-then-approve human-in-the-loop — every retrieval and prompt change gated by an LLM evaluation harness. Live with pilot firms.",
    tags: ["Next.js", "TypeScript", "Python", "LLMs", "RAG", "Multi-agent"],
    highlights: [
      "RAG over Colombian jurisprudence (tri-source) → grounded drafting",
      "Strict propose-then-approve human-in-the-loop control",
      "DeepEval harness — 13 cases × 6 metrics gate every retrieval/prompt change",
      "Hardened untrusted-doc ingestion against prompt injection",
    ],
  },
  {
    id: "02",
    name: "Mia Fit",
    role: "Design + Build",
    blurb:
      "A headless e-commerce storefront — a custom Next.js front end on a headless commerce backend, with a full product catalog, variants, and cart. Designed and built from scratch.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Headless commerce"],
    url: "https://miafit-store.netlify.app",
    highlights: [
      "Custom Next.js storefront on a headless commerce backend",
      "Full product catalog, variants, and cart",
      "Designed, built, and deployed end to end",
    ],
  },
  {
    id: "03",
    name: "Memex",
    role: "Open source",
    blurb:
      "An open-source npm package that gives AI agents persistent, encrypted long-term memory — shipping with an MCP server for plug-and-play use in Claude, ChatGPT, and other LLM tools.",
    tags: ["TypeScript", "Node.js", "npm", "MCP"],
    url: "https://getmemex.dev",
    highlights: [
      "Encrypted long-term memory for AI agents",
      "MCP server for Claude / ChatGPT / other LLM tools",
      "Shipped as an open-source npm package",
    ],
  },
  {
    id: "04",
    name: "Vilar Safety",
    role: "Design → Build → Deploy",
    blurb:
      "Brand and marketing site for a safety-consulting business — design, build, and deploy, with a working contact pipeline wired to email.",
    tags: ["Next.js", "Tailwind", "Forms"],
    url: "https://vilarsafetyconsulting.com",
    highlights: [
      "Brand + responsive marketing site",
      "Contact pipeline wired to email",
      "Designed → built → deployed",
    ],
  },
];

export type Archived = { name: string; note: string; tags: string[] };
export const archive: Archived[] = [
  { name: "Prometheus AITutor", note: "NLP tutoring platform that finds knowledge gaps and generates personalized slides.", tags: ["Django", "React", "NLP"] },
  { name: "FirstLand", note: "Real-estate platform with a GPT-4 realtor assistant (MERN + Google Places).", tags: ["MERN", "OpenAI"] },
  { name: "Pac-Man AI", note: "Reinforcement-learning agent that learns and adapts in real time.", tags: ["Python", "RL"] },
  { name: "Facial Recognition", note: "ML classifier on the ORL dataset (SVM/KNN/PCA/LDA).", tags: ["Python", "scikit-learn"] },
  { name: "SupremeBot", note: "Selenium automation for scraping + automated checkout.", tags: ["Python", "Selenium"] },
  { name: "Technical Analysis App", note: "C#/.NET data-visualization tool for pattern analysis.", tags: ["C#", ".NET"] },
];

export type Job = {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Jabil",
    title: "Financial Systems Developer II",
    location: "Tampa, FL",
    dates: "Apr 2025 — Present",
    bullets: [
      "Sole architect & developer of Jabil Finance's first production AI agent (Snowflake Cortex) — 9 views, 8 semantic models, orchestration and an evaluation framework — serving 6 global analysts at 96% accuracy against SAP/Cognos source reports.",
      "Built an AI evaluation suite (53+ test cases) that gates every release against source-of-truth financial reports.",
      "Authored A.G.E.N.T., a repeatable playbook for deploying LLM agents — now consulting internally as other teams adopt agentic systems.",
      "Shipped three additional production/MVP apps concurrently: a Pillar II tax app (zero cutover incidents, 10,835-row migration), an AI File Manager (Claude Haiku via AWS Bedrock), and a Next.js/FastAPI finance platform.",
      "Own end-to-end delivery: release checklists, credential rotation, rollback criteria, row-level access — Okta, Docker, Azure CI/CD.",
    ],
  },
  {
    company: "Medtronic",
    title: "Software Engineer I",
    location: "Minneapolis, MN",
    dates: "Mar 2024 — Apr 2025",
    bullets: [
      "Built full-stack apps and manufacturing-equipment integrations (Python, Ignition), automating data collection via the SECS/GEM protocol.",
      "Wrote a custom OPC UA device module in Java (Ignition SDK) for seamless equipment-to-software communication.",
      "Architected a Microsoft SQL Server normalization redesign for performance; led Validation Plans to FDA/Medtronic quality standards.",
    ],
  },
  {
    company: "Google Developer Student Club — USF",
    title: "Tech Lead",
    location: "Tampa, FL",
    dates: "2023 — 2024",
    bullets: [
      "Led the chapter — delivered 10+ technical workshops to 500+ students on web development, version control, and shipping real projects.",
      "Mentored 10+ students on personal projects and ran university hackathons.",
    ],
  },
  {
    company: "Eversana Intouch",
    title: "Software Development Intern",
    location: "Kansas City, KS",
    dates: "Jun — Aug 2023",
    bullets: [
      "Redesigned live client sites (HTML/CSS/JS) for responsiveness and accessibility.",
      "Built a React + Node.js app that lifted traffic and retention across concurrent projects.",
    ],
  },
];

export const education = [
  { school: "Georgia Institute of Technology", detail: "M.S. Computer Science (OMSCS), Machine Learning — starting Fall 2026" },
  { school: "University of South Florida", detail: "B.S. Computer Science · 2020–2023 · GPA 3.49" },
];

export const about = {
  lead:
    "I'm Juan — a Colombian-American software engineer in Tampa. I like building things end to end: the data underneath, the AI in the middle, and the interface people actually touch.",
  body:
    "Right now I'm the sole engineer behind an AI-driven finance platform at Jabil, and I ship my own products on nights and weekends. This fall I start my M.S. in Computer Science (Machine Learning) at Georgia Tech. Outside the editor: bilingual EN/ES, a cyclist, and a former Google Developer Student Club Tech Lead who taught 500+ students.",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
