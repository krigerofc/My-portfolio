export type SectionId =
  | "about"
  | "journey"
  | "skills"
  | "footprint"
  | "projects"
  | "contact";

export const sections: {
  id: SectionId;
  label: string;
  color: string;
  x: number;
  y: number;
}[] = [
  { id: "about", label: "About", color: "#c084fc", x: 0.07, y: 0.24 },
  { id: "projects", label: "Projects", color: "#2dd4bf", x: 0.07, y: 0.5 },
  { id: "contact", label: "Contact", color: "#fb7185", x: 0.07, y: 0.76 },
  { id: "journey", label: "Journey", color: "#22d3ee", x: 0.93, y: 0.24 },
  { id: "skills", label: "Skills", color: "#60a5fa", x: 0.93, y: 0.5 },
  { id: "footprint", label: "Footprint", color: "#818cf8", x: 0.93, y: 0.76 },
];

export const profile = {
  name: "Pedro Henrique",
  eyebrow: "Full Stack Developer | Automation & Cybersecurity",
  bio:
    "Full-stack developer building APIs, automations and intelligent systems — from e-commerce and inventory platforms to Discord bots and a personal finance app, with a growing pull toward cybersecurity and how things actually break.",
  avatar: "/assets/Dev.png",
  resume: "/assets/doc/Pedro_dev.pdf",
  stats: [
    { value: "4+", label: "years building" },
    { value: "15+", label: "projects realized" },
    { value: "EdTech", label: "Backend dev @ +A Educação" },
  ],
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Basic" },
  ],
  code: {
    filename: "~/pedro/developer.py",
    lines: [
      "class Developer:",
      "  def __init__(self):",
      '    self.name  = "Pedro"',
      "    self.years = 4",
      "    self.stack = [",
      '      "TypeScript",',
      '      "Python",',
      '      "Java",',
      "    ]",
      '    self.degree = "Systems Analysis & Dev"',
      '    self.focus  = "Cybersecurity"',
      "",
      'if __name__ == "__main__":',
      "  Developer()",
    ],
  },
  social: {
    github: "https://github.com/krigerofc",
    linkedin: "https://www.linkedin.com/in/pedrokriger/",
    discord: "https://discord.gg/gzsv34RK8j",
  },
};

export const about = {
  eyebrow: "Off the clock",
  heading: "Beyond the code.",
  sub: "A few notes on what I build when nobody's asking.",
  cards: [
    {
      tag: "stack",
      title: "Full-stack, backend-leaning",
      body: "APIs, databases and system design pull me in more than pixels — though I ship the frontend too when a project needs it.",
    },
    {
      tag: "side project",
      title: "Modding Project Zomboid",
      body: "When I'm off the IDE I'm usually scripting Lua mods for Project Zomboid — passive skills, new jobs, vehicle maintenance.",
      link: { label: "View on Steam", href: "https://steamcommunity.com/id/devkriger/myworkshopfiles/?appid=108600" },
    },
    {
      tag: "new this year",
      title: "Building Nexa",
      body: "Started Nexa this year, a personal app for finance, habits and skills — React Native front, serverless AWS backend.",
    },
    {
      tag: "why I'm here",
      title: "Under the hood",
      body: "What keeps me curious is what happens underneath — APIs, data, architecture and the edge cases that break them.",
    },
    {
      tag: "focus",
      title: "Leaning into security",
      body: "Currently deepening my Cybersecurity studies alongside Systems Analysis & Development — breaking things to learn how to defend them.",
    },
  ],
};

export const journey = {
  eyebrow: "Flight log",
  heading: "The journey so far.",
  sub: "A short flight log of the milestones that shaped me as a developer.",
  items: [
    {
      date: "2022",
      title: "Started programming",
      body: "Wrote my first lines of code and got hooked on building things — the start of everything.",
    },
    {
      date: "2023",
      title: "First freelance clients",
      body: "Began taking freelance work and shipping personal projects end-to-end, from idea to deploy.",
    },
    {
      date: "2023",
      title: "Started modding Project Zomboid",
      body: "Picked up Lua to build gameplay mods — passive skills, jobs, vehicle maintenance — published on Steam Workshop.",
    },
    {
      date: "2024",
      title: "Systems Analysis & Development",
      body: "Paired hands-on experience with formal study, plus a technical course (JS Stack) on the side.",
    },
    {
      date: "2025",
      title: "Backend developer at +A Educação",
      body: "Joined one of Brazil's largest EdTech platforms, building backend systems for K-12 digital learning.",
    },
    {
      date: "2026",
      title: "Building Nexa",
      body: "Started Nexa, a personal app connecting finance, habits and skills in one place.",
    },
  ],
};

export const skills = {
  eyebrow: "Capability cluster",
  heading: "Full-stack, automation and a security mindset.",
  sub: "Tools I use to build APIs, bots, stores and production-minded applications.",
  items: [
    { name: "TypeScript", body: "Next.js, React and typed APIs end to end" },
    { name: "Python", body: "Automation, Discord bots and scripting" },
    { name: "Java", body: "OOP, CRUD systems and application structure" },
    { name: "Next.js", body: "Full-stack apps, routing and server actions" },
    { name: "Databases", body: "PostgreSQL, MongoDB, Prisma and query design" },
    { name: "REST APIs", body: "Routes, auth, payments and integrations" },
    { name: "React Native", body: "Cross-platform mobile apps with Expo" },
    { name: "Docker", body: "Containerized local environments" },
    { name: "Cybersecurity", body: "Secure-by-design habits, currently studying in depth" },
  ],
};

export const footprint = {
  eyebrow: "Field notes",
  heading: "What I build outside a single job.",
  sub: "A day job, freelance work, a personal product, and games on the side.",
  highlight: {
    badge: "Backend developer",
    name: "+A Educação",
    body: "Working on one of Brazil's largest EdTech platforms, building backend systems for K-12 digital learning.",
  },
  items: [
    {
      title: "Freelance & personal projects",
      body: "Client work and self-initiated builds — inventory systems, e-commerce, Discord bots.",
    },
    {
      title: "Nexa",
      body: "A personal app for finance, habits and skills, built end-to-end with Expo and serverless AWS.",
    },
    {
      title: "Game modding",
      body: "Project Zomboid mods on Steam Workshop — passive skills, new jobs, vehicle maintenance.",
      link: { label: "Steam Workshop", href: "https://steamcommunity.com/id/devkriger/myworkshopfiles/?appid=108600" },
    },
  ],
  extra: { label: "Technical course", name: "JS Stack" },
};

export type Project = {
  id: string;
  title: string;
  live?: boolean;
  summary: string;
  description: string;
  impact?: string;
  tags: string[];
  icon: string;
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "nexa",
    title: "Nexa",
    summary: "A personal app connecting finance, habits and skills — built end-to-end.",
    description:
      "Nexa is a personal finance, habits and skills tracker. Mobile app in Expo/React Native talking to a serverless API — AWS Lambda behind API Gateway, with Aurora DSQL as the database.",
    impact: "Built and maintained solo, from database migrations to the mobile UI. Private project, not open-sourced yet.",
    tags: ["React Native", "Expo", "AWS Lambda", "Aurora DSQL"],
    icon: "Wallet",
  },
  {
    id: "fabrics",
    title: "Fabrics",
    summary: "Full-stack management platform for small stores.",
    description:
      "Fabrics integrates product catalog, batch control, sales by unit or by meter, and subscriptions with recurring billing for small stores. Built with Next.js, Prisma and PostgreSQL, with Mercado Pago handling payments.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Supabase", "Mercado Pago", "shadcn/ui"],
    icon: "Store",
    repo: "https://github.com/krigerofc/fabrics",
  },
  {
    id: "etiqueta-facil",
    title: "Etiqueta Fácil",
    summary: "Digital label system for restaurant kitchens.",
    description:
      "A system built for a real kitchen-inventory problem: digital labels, expiry control and restock alerts for restaurant supplies, cutting manual tracking and waste.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "AI"],
    icon: "Tag",
  },
  {
    id: "shoesstore",
    title: "ShoesStore",
    summary: "E-commerce MVP for sneakers.",
    description:
      "An MVP e-commerce platform for sneakers and sportswear — product catalog, cart, payment flow and an admin panel for inventory and orders.",
    tags: ["Next.js", "Redis", "PostgreSQL", "REST API"],
    icon: "ShoppingBag",
    repo: "https://github.com/krigerofc/Shoes_ecommerce",
  },
  {
    id: "bot-kriger",
    title: "Bot Kriger",
    summary: "Discord bot with moderation, economy and mini-games.",
    description:
      "A custom Discord bot focused on automating admin tasks and keeping servers engaged: automated moderation, a virtual economy with ranks, mini-games and a leveling system.",
    tags: ["Python", "MongoDB", "REST API"],
    icon: "Bot",
    repo: "https://github.com/krigerofc/krigerbot_site",
  },
  {
    id: "passive-skills",
    title: "Passive Skills Mod",
    summary: "Project Zomboid mod adding passive skill progression.",
    description:
      "A Project Zomboid mod that adds a new progression layer: skills level up passively by reading magazines and books found around the map, instead of only through repetitive actions.",
    tags: ["Lua", "Modding", "Project Zomboid"],
    icon: "Gamepad2",
    demo: "https://steamcommunity.com/id/devkriger/myworkshopfiles/?appid=108600",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    summary: "A neural-network-styled portfolio, built from scratch.",
    description:
      "This very site — a canvas-based neural map background, section panels and a small exploration-mode easter egg, built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Canvas"],
    icon: "Code2",
    repo: "https://github.com/krigerofc/My-portfolio",
  },
];

export const contact = {
  eyebrow: "Open channel",
  heading: "Let's talk.",
  sub: "Full-stack developer open to freelance projects, collaborations and full-time opportunities — backend, automation and AI included.",
  title: "Full-stack developer · Backend & Automation",
  available: true,
  fields: [
    { label: "Email", value: "Dev.kriger@gmail.com", href: "mailto:Dev.kriger@gmail.com", icon: "Mail" },
    { label: "LinkedIn", value: "Pedro Henrique", href: "https://www.linkedin.com/in/pedrokriger/", icon: "Linkedin" },
    { label: "GitHub", value: "@krigerofc", href: "https://github.com/krigerofc", icon: "Github" },
    { label: "Discord", value: "Join the community", href: "https://discord.gg/gzsv34RK8j", icon: "MessageCircle" },
    { label: "WhatsApp", value: "+55 33 99857-3352", href: "https://wa.me/5533998573352", icon: "Phone" },
  ],
};
