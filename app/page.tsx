import Image from "next/image"; 
import Intro from "../components/IntroSection";
import Skills from "../components/SkillsSection";
import Experience from "../components/ExperienceSection";
import Projects from "../components/ProjectsSection";
import Contact from "../components/ContactSection";
import Header from "../components/Header"; 
export default function Home() {
  return (
    
    <div className="flex min-h-screen items-center justify-center font-inter ">
        <main className="flex min-h-screen w-full flex-col">
  <Header />

  <section id="intro">
    <Intro />
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="experience">
    <Experience />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <Contact />
  </section>
</main>

    </div>
  );
}
