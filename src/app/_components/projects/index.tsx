import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ProjectLink from "./ProjectLink";
import ProjectMedia from "./ProjectMedia";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto mt-20 max-w-screen-2xl px-8 pt-8">
      <h2 className="mb-14 text-center text-5xl font-medium md:text-7xl">
        Projects
      </h2>
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
                <h3 className="my-4 text-3xl font-medium text-accent sm:text-4xl md:mt-0 md:text-3xl">
                  {project.name}
                </h3>
                <p className="text-justify text-base text-secondaryText sm:text-lg md:max-w-[90ch]">
                  {project.description}
                </p>
                <div className="my-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => {
                    return (
                      <p
                        key={technology}
                        className="rounded-md bg-secondaryBackground px-2 py-1 text-sm"
                      >
                        {technology}
                      </p>
                    );
                  })}
                </div>
                <div className="my-4 flex flex-wrap items-center gap-4">
                  <ProjectLink href={project.github} label="Source Code" />
                  <ProjectLink href={project.url} label="Live Site" />
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex w-fit items-center gap-2 rounded-md bg-accent px-3 py-1 uppercase text-primaryBackground"
                  >
                    Case Study
                    <FiArrowRight className="transition-transform duration-200 ease-in-out group-hover:translate-x-[2px]" />
                  </Link>
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
