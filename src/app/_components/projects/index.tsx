import React from "react";
import ProjectLink from "./ProjectLink";
import ProjectMedia from "./ProjectMedia";

export const metadata = {
  title: "Projects",
  description:
    "Projects built by Alyan Hanif including Next.js, React, React Native, TypeScript and full stack applications.",
};

const Projects = () => {
  return (
    <section id="projects" className="mx-auto mt-20 max-w-screen-2xl px-8 pt-8">
      <h1 className="mb-14 text-center text-5xl font-medium md:text-7xl">
        Projects
      </h1>
      <div className="mx-auto flex w-fit flex-col gap-12">
        {projects.map((project, index) => {
          return (
            <div
              key={project.name}
              className={`flex flex-col-reverse gap-4 lg:gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} `}
            >
              <ProjectMedia
                thumbnail={project.thumbnail}
                video={project.video}
                name={project.name}
              />
              <div className="w-fit">
                <p className="my-4 text-3xl font-medium text-accent sm:text-4xl md:mt-0 md:text-3xl">
                  {project.name}
                </p>
                <p className="text-justify text-base text-secondaryText sm:text-lg md:max-w-[90ch]">
                  {project.description}
                </p>
                <div className="my-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => {
                    return (
                      <p className="rounded-md bg-secondaryBackground px-2 py-1 text-sm">
                        {technology}
                      </p>
                    );
                  })}
                </div>
                <div className="my-4 flex items-center gap-4">
                  <ProjectLink href={project.github} label="Source Code" />
                  <ProjectLink href={project.url} label="Live Site" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

const projects = [
  {
    video: "/lilia-dashboard.mp4",
    name: "Lilia",
    thumbnail: "/lilia-thumbnail.jpg",
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
    video: "/playsense.mp4",
    name: "PlaySense",
    thumbnail: "/playsense-thumbnail.png",
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
    video: "/deal-it.mp4",
    name: "Deal It",
    thumbnail: "/deal-it-thumbnail.jpg",
    description:
      "Designed and built a marketplace platform connecting users with verified negotiation experts. Implemented role-based access controls, robust multi-party authentication, dynamic content generation via an internal admin dashboard, and real-time interaction channels.",
    url: "https://deal-it.vercel.app/",
    technologies: ["Next", "JavaScript", "Firebase", "MaterialUI", "Stripe"],
    github: "",
  },
  {
    video: "/colossal-innovations.mp4",
    thumbnail: "/colossal-thumbnail.jpg",
    name: "Colossal Innovations",
    description:
      "Built a full-stack corporate website and a secure internal admin dashboard with role-based access control. Enabled HR staff and content editors to manage blog posts and job applications directly through the UI. This streamlined content workflows and removed all manual database management overhead for non-technical team members.",
    url: "https://colossal-innovations.netlify.app/",
    technologies: ["React", "JavaScript", "CSS", "Node", "Express", "MongoDB"],
    github: "https://github.com/MuhammadAlyan1/colossal-innovations-website",
  },
];
