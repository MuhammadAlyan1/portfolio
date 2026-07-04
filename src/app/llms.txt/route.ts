import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export function GET() {
  const skills = Object.entries(profile.skills)
    .map(([group, items]) => `- ${group}: ${items.join(", ")}`)
    .join("\n");

  const projectList = projects
    .map(
      (project) => `- [${project.name}](${project.url}): ${project.oneLiner}`,
    )
    .join("\n");

  const socials = profile.socials
    .map((social) => `- [${social.name}](${social.url})`)
    .join("\n");

  const content = `# ${profile.name}

> ${profile.name} is ${profile.titleWithArticle} with ${profile.yearsOfExperience} years of experience shipping production web and AI systems for startups, currently working at ${profile.employer}.

## About

${profile.bio}

- Email: ${profile.email}
- Location: ${profile.location.city}, ${profile.location.country} — ${profile.location.remoteNote}
- Website: ${profile.siteUrl}
- Resume: ${profile.siteUrl}${profile.resumePath}

## Skills

${skills}

## Projects

${projectList}

## Links

${socials}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
