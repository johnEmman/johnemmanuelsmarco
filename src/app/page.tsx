import { CiLocationOn } from "react-icons/ci";
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import "animate.css";

export default function App() {
  return (
    <>
      <main className="px-3 xl:px-80 text-gray-950 font-sans bg-[#FFFFFF]">
        <div id="home">
          <Home />
        </div>
        <Header />

        <div id="about">
          <About />
        </div>

        <div>
          <Skills />
        </div>

        <div id="experience">
          <Experience />
        </div>
        <div>
          <Education />
        </div>

        <div id="projects">
          <Projects />
        </div>
        <Footer />
      </main>
    </>
  );
}
