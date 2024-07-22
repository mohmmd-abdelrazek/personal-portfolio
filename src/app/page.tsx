import About from "@/components/about";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import SectionDivider from "@/components/section-divider";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12  items-center justify-between px-2 sm:px-8 md:px-12 lg:px-20 xl:px-28 pb-8 pt-20 sm:pt-28">
      <Intro />
      <SectionDivider />
      <About />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
