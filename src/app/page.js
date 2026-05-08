import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Qualification from "@/components/Qualification";
import Workflow from "@/components/Workflow";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><SectionReveal><About /></SectionReveal></div>
      <div id="skills"><SectionReveal><Technologies /></SectionReveal></div>
      <div id="experience"><SectionReveal><Qualification /></SectionReveal></div>
      <div id="workflow"><SectionReveal><Workflow /></SectionReveal></div>
      <div id="projects"><SectionReveal><Projects /></SectionReveal></div>
      <div id="contact"><SectionReveal><Contact /></SectionReveal></div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
