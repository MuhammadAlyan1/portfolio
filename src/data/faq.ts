import { profile } from "./profile";
import { projects } from "./projects";

export type FaqLine = {
  label?: string;
  text: string;
};

export type Faq = {
  question: string;
  answer: string;
  lines?: FaqLine[];
};

const linesToText = (lines: FaqLine[]) =>
  lines
    .map((line) => (line.label ? `${line.label}: ${line.text}` : line.text))
    .join("\n");

const stackLines: FaqLine[] = Object.entries(profile.skills).map(
  ([group, items]) => ({
    label: group,
    text: items.join(", "),
  }),
);

const projectLines: FaqLine[] = projects.map((project) => ({
  label: project.name,
  text: project.oneLiner,
}));

export const faqs: Faq[] = [
  {
    question: `Who is ${profile.name}?`,
    answer: `${profile.name} is ${profile.titleWithArticle} with ${profile.yearsOfExperience} years of experience shipping production web and AI systems for startups, currently working at ${profile.employer}.`,
  },
  {
    question: `What does ${profile.name} specialize in?`,
    answer: `${profile.name} specializes in AI automation pipelines, RAG systems, and scalable full-stack web applications built with Next.js, Node.js, Python, and PostgreSQL.`,
  },
  {
    question: `What is ${profile.name}'s tech stack?`,
    answer: linesToText(stackLines),
    lines: stackLines,
  },
  {
    question: `Where is ${profile.name} based?`,
    answer: `${profile.name} is based in ${profile.location.city}, ${profile.location.country}, and ${profile.location.remoteNote}.`,
  },
  {
    question: `How can I contact ${profile.name}?`,
    answer: `Email ${profile.email}, or reach out via LinkedIn, Upwork, or Fiverr.`,
  },
  {
    question: `What projects has ${profile.name} built?`,
    answer: linesToText(projectLines),
    lines: projectLines,
  },
];
