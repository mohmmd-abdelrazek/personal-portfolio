import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 md:px-12 lg:px-28 xl:px-36 2xl:px-40 pb-8 pt-28">
      <Intro />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
      
    </main>
  );
}
