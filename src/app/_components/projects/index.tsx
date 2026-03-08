import React from "react";
import ProjectLink from "./ProjectLink";

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
              <video
                width="100%"
                height="fit-content"
                autoPlay
                muted
                loop
                className="aspect-video overflow-hidden rounded-md lg:max-w-[750px]"
                poster={project.thumbnail}
              >
                <source src={project.video} type="video/mp4" />
              </video>
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
    thumbnail: "/lilia-dashboard-thumbnail.jpg",
    description:
      "Lilia is a cross-platform learning app that helps students explore and identify plants through interactive quizzes, leaderboards, and gamified lessons. I led the full development of the web and mobile apps, designed the complete user experience, and implemented free and premium access with PayPal payment integration. The platform supports English and German, tracks progress and performance, and delivers a fast, engaging experience that motivates learners and encourages long-term learning.",
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
    thumbnail: "/playsense-thumbnail.jpg",
    description: `PlaySense is a dynamic platform designed for eSport enthusiasts, offering a range of features to enhance the gaming experience. Users can create and customize profiles, connect with friends, and engage in real-time chat. The platform includes functionality for providing feedback, browsing a comprehensive game database, and buying or selling services with other users. PlaySense allows users to enter match scores and gain valuable gameplay insights, while also offering tools for reporting content, managing users, and handling orders.`,
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
    description: `Deal-It redefines negotiation by connecting users with verified expert negotiators to facilitate and simplify price discussions. The platform features detailed negotiator profiles, showcases top experts, and categorizes negotiations for easy navigation. It includes a blog with industry insights, a referral program, and chat functionality for direct interaction. With options for subscriptions, feedback, and streamlined order management, Deal-It offers a comprehensive and efficient solution for all negotiation needs, ensuring a smooth and effective negotiation experience.`,
    url: "https://deal-it.vercel.app/",
    technologies: ["Next", "JavaScript", "Firebase", "MaterialUI", "Stripe"],
    github: "",
  },
  {
    video: "/colossal-innovations.mp4",
    thumbnail: "/colossal-thumbnail.jpg",
    name: "Colossal Innovations",
    description: `Colossal Innovations is a web application designed for a software company in Islamabad. The site effectively showcases the company's leadership, core services, and values, providing visitors with a comprehensive overview of what the company offers. It features a range of sections, including client testimonials, a blog with industry insights and updates, a portfolio of projects, and career opportunities. This platform highlights the company's expertise and commitment to excellence while offering a user-friendly experience for potential clients and job seekers alike.`,
    url: "https://colossal-innovations.netlify.app/",
    technologies: ["React", "JavaScript", "CSS", "Node", "Express", "MongoDB"],
    github: "https://github.com/MuhammadAlyan1/colossal-innovations-website",
  },
];
