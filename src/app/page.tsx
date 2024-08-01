import About from "./_components/about";
import Contact from "./_components/contact";
import HeroSection from "./_components/heroSection";
import Projects from "./_components/projects";
import Technologies from "./_components/technologies";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}
