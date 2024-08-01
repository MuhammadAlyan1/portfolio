import React from "react";
import { FiExternalLink } from "react-icons/fi";

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
              className={`flex flex-col-reverse gap-4 lg:gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} `}
            >
              <video
                width="100%"
                height="fit-content"
                autoPlay
                muted
                loop
                className="aspect-video overflow-hidden rounded-md lg:max-w-[750px]"
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
                  <a
                    href={project.github}
                    target="_blank"
                    className={`group flex w-fit items-center gap-2 rounded-md border border-accent bg-primaryBackground px-3 py-1 uppercase text-accent ${project.github === "" ? "pointer-events-none" : ""}`}
                  >
                    Source Code
                    <FiExternalLink className="relative transition-all duration-200 ease-in-out group-hover:translate-x-[2px] group-hover:translate-y-[-2px]" />
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    className={`group flex w-fit items-center gap-2 rounded-md border border-accent bg-primaryBackground px-3 py-1 uppercase text-accent`}
                  >
                    Live Site
                    <FiExternalLink className="relative transition-all duration-200 ease-in-out group-hover:translate-x-[2px] group-hover:translate-y-[-2px]" />
                  </a>
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
    video: "/colossal-innovations-homepage.mp4",
    name: "Colossal Innovations",
    description: `Colossal Innovations is a web application designed for a software company in Islamabad. The site effectively showcases the company's leadership, core services, and values, providing visitors with a comprehensive overview of what the company offers. It features a range of sections, including client testimonials, a blog with industry insights and updates, a portfolio of projects, and career opportunities. This platform highlights the company's expertise and commitment to excellence while offering a user-friendly experience for potential clients and job seekers alike.`,
    url: "https://colossal-innovations.netlify.app/",
    technologies: ["React", "JavaScript", "CSS", "Node", "Express", "MongoDB"],
    github: "https://github.com/MuhammadAlyan1/colossal-innovations-website",
  },
  {
    video: "/colossal-dashboard.mp4",
    name: "Colossal Innovations Dashboard",
    description: `Colossal Innovations Dashboard is a powerful management tool designed to support the web application for a software company. It provides a centralized interface for managing users, blog content, portfolio projects, career applications, and email communications. The dashboard streamlines administrative tasks and facilitates efficient oversight of various aspects of the web application, ensuring that all elements from user interactions to content updates are handled seamlessly and effectively. This tool enhances operational efficiency and helps maintain the site's dynamic features and up-to-date information.`,
    url: "https://colossal-innovations-dashboard.netlify.app/",
    technologies: ["React", "TypeScript", "SCSS", "Node", "Express", "MongoDB"],
    github: "https://github.com/MuhammadAlyan1/colossal-innovations-dashboard",
  },
  {
    video: "/deal-it.mp4",
    name: "Deal It",
    description: `Deal-It redefines negotiation by connecting users with verified expert negotiators to facilitate and simplify price discussions. The platform features detailed negotiator profiles, showcases top experts, and categorizes negotiations for easy navigation. It includes a blog with industry insights, a referral program, and chat functionality for direct interaction. With options for subscriptions, feedback, and streamlined order management, Deal-It offers a comprehensive and efficient solution for all negotiation needs, ensuring a smooth and effective negotiation experience.`,
    url: "https://deal-it.vercel.app/",
    technologies: ["Next", "JavaScript", "Firebase", "MaterialUI", "Stripe"],
    github: "",
  },
  {
    video: "/playsense.mp4",
    name: "PlaySense",
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
];
