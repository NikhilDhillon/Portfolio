// Single source for portfolio content. Facts come from the résumé
// (public/Nikhil Dhillon.pdf), the previous site copy, and each project's
// public README. Do not add metrics that are not in those sources.

export const profile = {
  name: "Nikhil Dhillon",
  role: "Software Developer",
  email: "nikhilpartapsinghd@uvic.ca",
  location: "Victoria, BC",
  resumeHref: "/Nikhil%20Dhillon.pdf?v=307da7f793c8",
  github: "https://github.com/NikhilDhillon",
  githubRepos: "https://github.com/NikhilDhillon?tab=repositories",
  linkedin: "https://www.linkedin.com/in/nikhil-dhillon-9747341a5/",
} as const;

export const navLinks = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export type ProjectLink = { label: string; href: string };

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** What the image is evidence of. Concepts must never be labelled as product UI. */
  evidence: string;
  caption: string;
};

export type ProjectFormula = {
  label: string;
  /** Rendered as a sequence of plain text and named terms. */
  expression: string;
  /** weight is the term's coefficient in percent, from the README formula. */
  terms: { name: string; meaning: string; weight: number }[];
  footnote: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Short description used in the project preview. */
  kind: string;
  summary: string;
  highlight: string;
  featured: boolean;
  scopeLabel?: string;
  context: string;
  /** Defaults to "Problem". */
  problemLabel?: string;
  problem: string;
  built: string[];
  /** A documented decision or architecture choice. Omit when the source has none. */
  note?: { label: string; text: string };
  formula?: ProjectFormula;
  /** A verified outcome. Omit when the source has none. */
  outcome?: string;
  stack: string[];
  links: ProjectLink[];
  /** Clarifies when the linked repository describes a different implementation. */
  sourceNote?: string;
  status?: string;
  image?: ProjectImage;
};

export const projects: Project[] = [
  {
    slug: "donext",
    kind: "Semester planner",
    name: "DoNext",
    featured: true,
    highlight: "A draft is never the plan. Students review and edit a proposal before accepting it.",
    summary: "A semester planner that helps students decide what to do next.",
    context: "Solo project, in active development",
    problem:
      "Course outlines, class times, deadlines, and the rest of a student’s week live in different places. DoNext models them together so a plan reflects real capacity.",
    built: [
      "A planning model for courses, deadlines, commitments, goals, sleep, and availability.",
      "A PDF, DOCX, and TXT ingestion pipeline that turns course outlines into structured assessments and deadlines.",
      "A FastAPI and PostgreSQL backend with user-scoped APIs and persistent planning data.",
    ],
    note: {
      label: "Key decision",
      text: "Outlines are parsed locally by a deterministic parser and never sent to an AI provider. Generated schedules stay a separate, editable draft until the student accepts them.",
    },
    outcome:
      "Implemented: editable 14-day proposals, an accepted weekly calendar, and a daily loop for timers, check-ins, and logged time.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    links: [{ label: "Source", href: "https://github.com/NikhilDhillon/DoNext" }],
    image: {
      src: "/work/donext-week.jpg",
      alt: "DoNext weekly calendar with classes, deadlines, study blocks, and personal commitments fitted around one another.",
      width: 1280,
      height: 1086,
      evidence: "Product screenshot",
      caption: "Accepted weekly calendar, demo account",
    },
  },
  {
    slug: "growth",
    kind: "Strength analytics",
    name: "GROWTH",
    featured: true,
    scopeLabel: "Project scope",
    highlight: "A scoring engine combines strength, training volume, and fatigue resistance to make progress comparable.",
    summary: "A live strength-analytics app for logging workouts and tracking progression.",
    context: "Built with a collaborator, live",
    problem:
      "A workout log records what you lifted. GROWTH is built to show whether each exercise is actually getting stronger.",
    built: [
      "A custom scoring engine that combines estimated 1RM, training volume, and fatigue resistance.",
      "Supabase authentication and persistent workout data.",
      "Friend leaderboards, exercise-specific PR tracking, and progress visualizations.",
    ],
    formula: {
      label: "Performance Points",
      expression: "100 \u00d7 (0.45 strength + 0.35 volume + 0.20 resistance)",
      terms: [
        { name: "strength", meaning: "best estimated 1RM, weight \u00d7 (1 + reps / 30)", weight: 45 },
        { name: "volume", meaning: "failure-set volume", weight: 35 },
        { name: "resistance", meaning: "fatigue resistance", weight: 20 },
      ],
      footnote: "Normalized against the previous best-strength session.",
    },
    outcome: "Live app for logging workouts, tracking exercise-specific PRs, and comparing strength progression.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase"],
    links: [
      { label: "Live app", href: "https://growth-lift-tracker.vercel.app" },
      { label: "Source", href: "https://github.com/NikhilDhillon/GROWTH" },
    ],
    image: {
      src: "/GROWTH.png",
      alt: "GROWTH log screen with chest exercises listed, Barbell Bench Press selected, and two working sets at 165 lb.",
      width: 2528,
      height: 1378,
      evidence: "Product screenshot",
      caption: "Workout logging",
    },
  },
  {
    slug: "returnly",
    kind: "Returns platform",
    name: "Returnly",
    featured: true,
    highlight: "Customer, driver, and operations workflows share live order state, with background jobs for slower work.",
    summary:
      "A returns and pickup platform with customer and driver apps and an operations dashboard.",
    context: "Private codebase",
    problem:
      "A return pickup involves a customer, a driver, and an operations team, and all three need the same order status in real time.",
    built: [
      "Separate customer and driver apps, plus a React operations dashboard for end-to-end pickup workflows.",
      "Real-time order updates, driver tracking, and chat with Socket.IO and Redis-backed coordination.",
      "Stripe payments, PostgreSQL persistence, BullMQ background jobs, and S3-backed uploads.",
    ],
    note: {
      label: "Architecture",
      text: "Live state (orders, driver location, chat) moves over Socket.IO with Redis coordination, while slower work runs as BullMQ background jobs.",
    },
    stack: ["React Native", "Node.js", "Socket.IO", "PostgreSQL", "Redis", "Stripe"],
    links: [],
    status: "Private repository",
  },
  {
    slug: "wearlyze",
    kind: "Computer vision",
    name: "Wearlyze",
    featured: false,
    scopeLabel: "Project scope",
    highlight: "Garment segmentation and feature extraction connect a photo to visually similar retail items.",
    summary:
      "A computer-vision prototype that finds clothing in photos and retrieves visually similar products.",
    context: "Team project",
    problemLabel: "Goal",
    problem:
      "Identify each garment in a user’s photo, then match it to visually similar retail items.",
    built: [
      "Fine-tuned DeepLabV3+ with a ResNet-101 backbone on DeepFashion2 for apparel segmentation.",
      "Integrated EfficientNetV2 feature extraction to improve visual product-similarity matching.",
      "Built modular APIs for image upload, segmentation, and retail-product retrieval.",
    ],
    // The résumé reports >85% mIoU, but the dataset split, checkpoint, and
    // evaluation output are not available. Restore the metric with that context.
    stack: ["Python", "PyTorch", "Django", "Next.js", "DeepLabV3+", "EfficientNetV2"],
    links: [{ label: "Team source", href: "https://github.com/NishantSaiChalla/WEARLYZE" }],
    sourceNote: "This write-up covers the DeepLab/Django prototype. The public team repository documents YOLOv8, CLIP, and FAISS experiments; the prototype code is private.",
    image: {
      src: "/work/wearlyze-concept-v2.png",
      alt: "Wearlyze design concept: an editorial outfit photo with three detected garments highlighted, similar sage tank tops, and everyday and evening outfit suggestions.",
      width: 1742,
      height: 903,
      evidence: "Design concept",
      caption: "Not a product screenshot",
    },
  },
];

export const otherProjects = [
  {
    name: "SpendLens",
    description:
      "A sandbox-first personal finance app that unifies accounts and transactions, analyzes monthly spending, and supports category corrections. Its AI assistant is read-only.",
    stack: ["TypeScript", "Cloudflare D1", "Plaid", "Vercel AI SDK"],
    href: "https://github.com/NikhilDhillon/SpendLens",
  },
  {
    name: "Chat Room",
    description:
      "A real-time chat application with a Flask and Socket.IO backend and a responsive browser interface.",
    stack: ["Python", "Flask", "Socket.IO", "JavaScript"],
    href: "https://github.com/NikhilDhillon/Chat_Room",
  },
  {
    name: "Path Finder",
    description: "A Python maze solver that uses breadth-first search to find the shortest route.",
    stack: ["Python", "Breadth-first search"],
    href: "https://github.com/NikhilDhillon/Path-Finder",
  },
  {
    name: "To-Do List",
    description: "A lightweight browser task manager built with vanilla HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/NikhilDhillon/To-Do-List",
  },
] as const;

export type Readout = { value: string; label: string };

export type Role = {
  id: string;
  title: string;
  org: string;
  location: string;
  /** ISO year-month, formatted at render time with Intl.DateTimeFormat. */
  start: string;
  end: string;
  points: string[];
  readouts: Readout[];
  tech: string[];
};

export const experience: Role[] = [
  {
    id: "uvic-ta-2026",
    title: "Teaching Assistant, Database Systems",
    org: "University of Victoria",
    location: "Victoria, BC",
    start: "2026-09",
    end: "2026-12",
    points: ["Mentor 13 student teams through a term-long database project, reviewing proposals for scope and schema complexity and advising on data modelling, SQL, transactions, and authentication."],
    readouts: [],
    tech: ["Database Systems"],
  },
  {
    id: "reliable-controls-developer-2026",
    title: "Software Developer Intern",
    org: "Reliable Controls",
    location: "Victoria, BC",
    start: "2026-01",
    end: "2026-08",
    points: [
      "Reduced MFC GDI resource usage by about 75% during a critical workflow, from 8,000+ objects to about 2,000, eliminating native Windows resource leaks.",
      "Built a C++/MFC connection-cancellation dialog that lets users abort stalled connection attempts immediately instead of waiting out 30-60 second timeouts.",
      "Built a CEF-powered HTML/SVG reporting system that generates high-resolution, print-ready controller I/O visualizations.",
      "Prototyped an XML-to-SQLite configuration migration with Entity Framework Core, including schema migrations and data synchronization.",
    ],
    readouts: [
      { value: "−75%", label: "GDI objects in a critical workflow" },
      { value: "30-60\u00a0s", label: "timeout waits eliminated" },
    ],
    tech: ["C++", "MFC", "CEF", "HTML/SVG", "C#", ".NET", "EF Core", "SQLite"],
  },
  {
    id: "one-nation-developer-2025",
    title: "Software Developer (Part-time)",
    org: "One Nation",
    location: "Remote (Vancouver, BC)",
    start: "2025-04",
    end: "2025-07",
    points: [
      "Built a natural language-driven reporting pipeline with the OpenAI API and PostgreSQL, enabling custom insights in under 20 seconds.",
      "Implemented a Laravel Filament password-reset workflow with token validation, expiration handling, and secure credential updates.",
      "Developed custom WordPress plugins for third-party integrations and performance-tuned, client-specific functionality.",
    ],
    readouts: [{ value: "<\u00a020\u00a0s", label: "to a custom insight" }],
    tech: ["PHP", "Laravel", "Filament", "OpenAI", "PostgreSQL", "WordPress"],
  },
  {
    id: "reliable-controls-qa-2024",
    title: "Software QA Analyst Intern",
    org: "Reliable Controls",
    location: "Victoria, BC",
    start: "2024-09",
    end: "2025-04",
    points: [
      "Designed and optimized TestRail workflows while validating more than 100 functional and non-functional test cases.",
      "Streamlined API and integration testing with Bruno, reducing API validation errors by 20%.",
      "Reduced QA review-cycle time by 30% through workflow improvements and automation.",
    ],
    readouts: [
      { value: "100+", label: "test cases validated" },
      { value: "−20%", label: "API validation errors" },
      { value: "−30%", label: "QA review-cycle time" },
    ],
    tech: ["TestRail", "Bruno", "API Testing", "Test Automation"],
  },
];

// Every item below already appears in the résumé, experience, or project stacks.
export const stackRibbon = {
  systems: ["C++", "MFC", "CEF", "C#", ".NET", "EF Core", "SQLite", "Python", "PyTorch", "FastAPI", "Django", "PostgreSQL"],
  product: ["TypeScript", "React", "React Native", "Expo", "Next.js", "Node.js", "Socket.IO", "Redis", "Supabase", "Docker", "AWS", "Azure"],
} as const;

export const facts = [
  { term: "Based in", detail: "Victoria, BC" },
  { term: "Studying", detail: "BSc Computer Science (Honours), University of Victoria" },
  { term: "Graduating", detail: "April 2027" },
  {
    term: "Coursework",
    detail: "Data Structures & Algorithms, Communication & Networking, Database Systems, Data Mining",
  },
] as const;

export const toolbox = [
  {
    id: "systems",
    title: "Systems & applications",
    items: [
      "C++, C#, C, Java, and Python",
      "Native Windows development with MFC",
      ".NET and Entity Framework Core",
      "CEF-powered HTML and SVG interfaces",
      "Performance analysis and resource-leak debugging",
    ],
  },
  {
    id: "web",
    title: "Web, mobile & APIs",
    items: [
      "React, React Native, Next.js, and TypeScript",
      "Node.js, Express.js, FastAPI, and Django",
      "PHP, Laravel, Filament, and WordPress",
      "REST APIs and third-party integrations",
      "AI-powered product workflows with the OpenAI API",
    ],
  },
  {
    id: "data-cloud",
    title: "Data, cloud & delivery",
    items: [
      "PostgreSQL, SQLite, Supabase, and SQL",
      "Docker, Linux, Git, and CI/CD",
      "AWS, Microsoft Azure, and Google Cloud Platform",
      "TestRail, Bruno, Jira, and Confluence",
      "Agile, Scrum, testing, and collaborative delivery",
    ],
  },
] as const;
