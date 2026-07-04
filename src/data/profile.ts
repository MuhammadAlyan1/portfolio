const name = "Alyan Hanif";
const title = "AI Full Stack Engineer";
const siteUrl = "https://alyan.dev";
const yearsOfExperience = 4;
const employer = "RevOps.ai";

// "an AI Full Stack Engineer" vs "a Distributed Backend Engineer"
const titleWithArticle = `${/^[aeiou]/i.test(title) ? "an" : "a"} ${title}`;

export type Social = {
  name: string;
  url: string;
};

export const profile = {
  name,
  alternateNames: ["Muhammad Alyan", "Alyan"],
  title,
  titleWithArticle,
  tagline: `${title} helping startups automate and ship faster.`,
  heroIntro:
    "I build AI-powered systems, automation workflows, and scalable web applications that reduce manual work and improve business operations.",
  bio: `I'm ${name}, ${titleWithArticle} with ${yearsOfExperience} years of experience building production systems for startups. I design and build AI automation pipelines, RAG systems, and scalable web applications using Next.js, Node.js, and Python. I focus on turning manual, time-consuming processes into fast, reliable, automated systems that improve how startups operate.`,

  siteUrl,
  siteName: `${name} Portfolio`,
  siteDescription: `${name} is ${titleWithArticle} specializing in Next.js, React, TypeScript, and Node.js. View projects, experience, and portfolio.`,
  shortDescription: `${title} specializing in Next.js, React, TypeScript and Node.js.`,

  keywords: [
    "Alyan Hanif",
    "Muhammad Alyan",
    title,
    "AI Fullstack Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Pakistan Developer",
    "Islamabad Developer",
    "AI Engineer",
    "AI Fullstack Developer",
  ],
  twitterHandle: "@AlyanDeveloper",

  email: "alyan0332@gmail.com",
  phone: "+92 333 3511136",
  phoneHref: "tel:+923333511136",
  location: {
    city: "Islamabad",
    country: "Pakistan",
    countryCode: "PK",
    remoteNote: "works remotely with clients worldwide (CET-aligned)",
  },
  employer,
  education: "Iqra University",
  yearsOfExperience,

  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/alyan-hanif" },
    { name: "GitHub", url: "https://github.com/MuhammadAlyan1" },
    { name: "Twitter", url: "https://x.com/AlyanDeveloper" },
    { name: "Fiverr", url: "https://www.fiverr.com/alyan_hanif" },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~01bf5a1ce43634bf45",
    },
  ] as Social[],

  skills: {
    Frontend: ["React", "Next.js", "React Native", "TypeScript", "Tailwind"],
    Backend: ["Node.js", "Express", "Python", "FastAPI"],
    Databases: ["PostgreSQL", "MongoDB", "Supabase"],
    Infra: ["AWS", "Docker", "GitHub Actions", "N8N"],
    AI: ["LangChain", "RAG", "Agentic Workflows", "OpenAI API", "Claude API"],
  } as Record<string, string[]>,

  knowsAbout: [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "AI Full Stack Engineering",
    "Full Stack Development",
    "RAG Systems",
    "AI Automation",
    "LangChain",
    "Agentic Workflows",
    "Product Engineering",
    "Large Distributed Backends",
    "Microservices Architecture",
  ],

  resumePath: "/alyan-resume.pdf",
  portraitPath: "/alyan.jpg",

  colors: {
    background: "#010B13",
    secondaryBackground: "#1E2121",
    accent: "#FCE179",
    text: "#FFF",
  },
};

export type Profile = typeof profile;
