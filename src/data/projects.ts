export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  url: string;
  github: string;
  video: string;
  thumbnail: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "lilia",
    video: "/lilia-dashboard.mp4",
    name: "Lilia",
    thumbnail: "/lilia-thumbnail.jpg",
    oneLiner:
      "Gamified cross-platform learning platform used by 4 organizations and 300+ students.",
    description:
      "Architected and built a gamified cross-platform learning platform utilized by 4 organizations and 300+ active students. Improved Core Web Vitals scores from 40 to 90 to maximize user experience, integrated secure PayPal payment tiers, and established automated CI/CD pipelines via GitHub Actions on AWS EC2 & Hetzner.",
    url: "https://lilia-frontend.vercel.app/",
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Material UI",
      "Node",
      "Express",
      "MongoDB",
      "PayPal",
    ],
    github: "",
  },
  {
    slug: "playsense",
    video: "/playsense.mp4",
    name: "PlaySense",
    thumbnail: "/playsense-thumbnail.png",
    oneLiner:
      "Full-stack eSports platform with real-time chat, match scoring, and gameplay insights.",
    description:
      "A dynamic full-stack eSports platform supporting customized user profiles, real-time chat, match scoring, and gameplay insights. Developed real-time transaction processing for user-to-user services, comprehensive game database management, and order handling.",
    url: "https://playsense.netlify.app/",
    technologies: [
      "React",
      "TypeScript",
      "SCSS",
      "Node",
      "Express",
      "MongoDB",
      "PayPal",
    ],
    github: "https://github.com/MuhammadAlyan1/playsense",
  },
  {
    slug: "deal-it",
    video: "/deal-it.mp4",
    name: "Deal It",
    thumbnail: "/deal-it-thumbnail.jpg",
    oneLiner:
      "Marketplace platform connecting users with verified negotiation experts.",
    description:
      "Designed and built a marketplace platform connecting users with verified negotiation experts. Implemented role-based access controls, robust multi-party authentication, dynamic content generation via an internal admin dashboard, and real-time interaction channels.",
    url: "https://deal-it.vercel.app/",
    technologies: ["Next", "JavaScript", "Firebase", "MaterialUI", "Stripe"],
    github: "",
  },
  {
    slug: "colossal-innovations",
    video: "/colossal-innovations.mp4",
    thumbnail: "/colossal-thumbnail.jpg",
    name: "Colossal Innovations",
    oneLiner:
      "Corporate website and internal admin dashboard with role-based access control.",
    description:
      "Built a full-stack corporate website and a secure internal admin dashboard with role-based access control. Enabled HR staff and content editors to manage blog posts and job applications directly through the UI. This streamlined content workflows and removed all manual database management overhead for non-technical team members.",
    url: "https://colossal-innovations.netlify.app/",
    technologies: ["React", "JavaScript", "CSS", "Node", "Express", "MongoDB"],
    github: "https://github.com/MuhammadAlyan1/colossal-innovations-website",
  },
];
