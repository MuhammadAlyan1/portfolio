import About from "./_components/about";
import Contact from "./_components/contact";
import FAQ from "./_components/faq";
import HeroSection from "./_components/heroSection";
import Projects from "./_components/projects";
import Technologies from "./_components/technologies";
import JsonLd from "@/lib/jsonLd";
import { faqs } from "@/data/faq";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Projects by ${profile.name}`,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      url: project.url,
      keywords: project.technologies.join(", "),
      author: { "@id": `${profile.siteUrl}/#person` },
    },
  })),
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Technologies />
      <Projects />
      <FAQ />
      <Contact />
      <JsonLd data={faqSchema} />
      <JsonLd data={projectsSchema} />
    </div>
  );
}
