/* ============================================================
   OrbitWright — site content / data
   Single source of truth for copy so components stay lean.
   ============================================================ */

export const site = {
  name: "OrbitWright",
  domain: "orbitwright.com",
  url: "https://orbitwright.com",
  tagline: "We build it. We launch it. We keep it in orbit.",
  description:
    "OrbitWright is one senior engineering team that designs, builds, ships, and maintains your product — with AI built in. From idea to orbit, fast.",
  email: "hello@orbitwright.com",
  calendly: "#contact",
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Team", href: "/#team" },
];

/* The four pillars / satellites */
export const pillars = [
  {
    key: "design",
    label: "Design",
    color: "var(--color-violet)",
    title: "Design that converts",
    blurb:
      "Product & brand design, UX, and pixel-perfect UI systems. We design for the metric, not the mood board.",
    points: ["Product & UX design", "Design systems", "Brand & identity", "Prototypes"],
  },
  {
    key: "development",
    label: "Development",
    color: "var(--color-cyan)",
    title: "Full-stack engineering",
    blurb:
      "Web apps and APIs built by engineers from Meta, CRED, and MakeMyTrip. Clean, tested, scalable.",
    points: ["Web applications", "APIs & microservices", "Databases at scale", "Test coverage"],
  },
  {
    key: "devops",
    label: "DevOps",
    color: "var(--color-lime)",
    title: "Ship to production",
    blurb:
      "CI/CD, cloud infrastructure, and observability so your launch is boring — in the best way possible.",
    points: ["AWS / GCP infra", "CI/CD pipelines", "Monitoring & alerts", "Zero-downtime deploys"],
  },
  {
    key: "ai",
    label: "AI",
    color: "var(--color-coral)",
    title: "AI, actually integrated",
    blurb:
      "Not a chatbot bolted on. Real GenAI agents and ML features wired into your product and workflows.",
    points: ["GenAI agents", "RAG & search", "AI workflows", "Model integration"],
  },
] as const;

/* The orbit process */
export const process = [
  {
    n: "01",
    phase: "Ignition",
    title: "Discovery & blueprint",
    desc: "We pin down scope, success metrics, and a fixed plan. No vague hourly meters — you know the price before we start.",
  },
  {
    n: "02",
    phase: "Assembly",
    title: "Design & build",
    desc: "Design and engineering run in tight sprints. You see working software every week, not a status deck.",
  },
  {
    n: "03",
    phase: "Liftoff",
    title: "QA & deploy",
    desc: "Automated tests, a hardened pipeline, and a production launch handled end-to-end. You press go, we handle the rest.",
  },
  {
    n: "04",
    phase: "Orbit",
    title: "Maintain & scale",
    desc: "A monthly Care Plan keeps your product fast, secure, and evolving. We stay on the mission after launch.",
  },
];

/* Companies the founders have built at (factual pedigree, not endorsements) */
export const pedigree = [
  "Meta (via Turing)",
  "Infosys",
  "CRED",
  "MakeMyTrip",
  "Tata 1MG",
  "CleverTap",
];

/* Pricing packages */
export const packages = [
  {
    key: "build",
    name: "Product Build",
    tagline: "Idea → deployed product",
    price: "from $6k",
    per: "per project",
    highlight: true,
    features: [
      "Product & UX design",
      "Full-stack development",
      "AI features integrated",
      "QA + deploy to production",
      "Milestone billing · 50% to start",
    ],
    cta: "Start your build",
  },
  {
    key: "care",
    name: "Care Plan",
    tagline: "Stay in orbit",
    price: "from $900",
    per: "per month",
    highlight: false,
    features: [
      "Hosting & infra managed",
      "Monitoring & security patches",
      "Bug fixes & small changes",
      "Monthly improvements",
      "Cancel anytime",
    ],
    cta: "Keep it running",
  },
];

/* Founders — sourced from real résumés */
export const founders = [
  {
    name: "Ramdev Godara",
    role: "AI & Backend Lead",
    photo: "/team/ramdev.jpg",
    initials: "RG",
    accent: "var(--color-coral)",
    bio: "Built production GenAI agents at Turing (for Meta). Ex-Tata 1MG — scalable e-commerce microservices, 40% latency cuts.",
    stack: ["GenAI", "Python", "FastAPI", "React", "AWS"],
    links: { linkedin: "https://linkedin.com/in/ramdev-g-14781110a/", github: "https://github.com/ramdevji" },
  },
  {
    name: "Abhishek Sunda",
    role: "Frontend & UI Lead",
    photo: "/team/abhishek.jpg",
    initials: "AS",
    accent: "var(--color-cyan)",
    bio: "Led enterprise auth UI at Infosys serving 2M+ users. Ex-Happay/MakeMyTrip — React dashboards, 80% faster loads.",
    stack: ["React", "TypeScript", "Redux", "Spring Boot", "Docker"],
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Ravi Kishan",
    role: "Backend & DevOps Lead",
    photo: "/team/ravi.jpg",
    initials: "RK",
    accent: "var(--color-lime)",
    bio: "Fintech backends at TIPSTAT (KYC, loan engines). Ex-Happay/CRED — 6k msgs/min systems. AWS certified.",
    stack: ["Python", "Django", "Golang", "AWS", "Terraform"],
    links: { linkedin: "#", github: "#" },
  },
];

/* Case studies (starter set — swap for real client work as it lands) */
export const work = [
  {
    title: "GenAI support agent",
    tag: "AI Integration",
    result: "−80% support escalations",
    desc: "An AI agent wired into an existing helpdesk that resolves and routes tickets automatically.",
    accent: "var(--color-coral)",
  },
  {
    title: "Fintech KYC platform",
    tag: "Full-stack + DevOps",
    result: "Launched in 5 weeks",
    desc: "Document verification and onboarding flows with a hardened AWS pipeline.",
    accent: "var(--color-cyan)",
  },
  {
    title: "Analytics dashboard",
    tag: "Design + Frontend",
    result: "−70% manual reporting",
    desc: "A drill-down analytics product with real-time charts and lazy-loaded views.",
    accent: "var(--color-lime)",
  },
];

/* FAQ — marked up as FAQPage schema for SEO + AI Overviews */
export const faqs = [
  {
    q: "How is OrbitWright different from hiring freelancers?",
    a: "You get one accountable senior team across design, development, DevOps, and AI — instead of stitching together four freelancers who blame each other. One contract, one point of contact, one team that ships and maintains the whole thing.",
  },
  {
    q: "How much does a project cost?",
    a: "A full product build starts around $6k for a designed, developed, and deployed product. We quote a fixed price per scope before we start, so there are no surprise hourly bills. Ongoing maintenance runs on a Care Plan from $900/mo.",
  },
  {
    q: "How do payments work?",
    a: "Fixed-price projects are billed 50% upfront, ~30% at a mid-project milestone, and ~20% on deployment. We accept international payments via Wise, Payoneer, and card. Maintenance is billed monthly in advance.",
  },
  {
    q: "How fast can you deliver?",
    a: "A typical MVP ships in 4–6 weeks. Because the same senior team handles design through deployment, there are no hand-off delays between vendors.",
  },
  {
    q: "Can you add AI to my existing product?",
    a: "Yes — that's a core specialty. We integrate GenAI agents, RAG search, and ML features into products that already exist, not just greenfield builds.",
  },
];
