import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import ProjectLink from "@/app/_components/projects/ProjectLink";
import ProjectMedia from "@/app/_components/projects/ProjectMedia";
import JsonLd from "@/lib/jsonLd";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  const pageUrl = `${profile.siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.name} — ${project.oneLiner.replace(/\.$/, "")}`,
    description: project.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${project.name} | ${profile.name}`,
      description: project.oneLiner,
      url: pageUrl,
      siteName: profile.siteName,
      locale: "en_US",
      type: "website",
    },
  };
}

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const pageUrl = `${profile.siteUrl}/projects/${project.slug}`;

  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: pageUrl,
        sameAs: project.url,
        keywords: project.technologies.join(", "),
        author: { "@id": `${profile.siteUrl}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: profile.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${profile.siteUrl}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-screen-lg px-8 pb-24 pt-16">
      <Link
        href="/#projects"
        className="flex w-fit items-center gap-2 text-secondaryText transition-colors duration-200 ease-in-out hover:text-accent"
      >
        <IoArrowBack />
        All projects
      </Link>
      <h1 className="mt-8 text-4xl font-medium text-accent md:text-6xl">
        {project.name}
      </h1>
      <p className="mt-4 max-w-[90ch] text-lg text-secondaryText">
        {project.oneLiner}
      </p>
      <div className="mt-10">
        <ProjectMedia
          thumbnail={project.thumbnail}
          video={project.video}
          name={project.name}
          wide
        />
      </div>
      <h2 className="mt-12 text-2xl font-medium md:text-3xl">
        About this project
      </h2>
      <p className="mt-4 max-w-[90ch] text-justify text-base text-secondaryText sm:text-lg">
        {project.description}
      </p>
      <h2 className="mt-12 text-2xl font-medium md:text-3xl">Built with</h2>
      <div className="mt-4 flex flex-wrap gap-2">
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
      <div className="mt-12 flex items-center gap-4">
        <ProjectLink href={project.github} label="Source Code" />
        <ProjectLink href={project.url} label="Live Site" />
      </div>
      <JsonLd data={projectSchema} />
    </main>
  );
};

export default ProjectPage;
