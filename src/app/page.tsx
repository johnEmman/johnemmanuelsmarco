import { CiLocationOn } from "react-icons/ci";
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import "animate.css";

export default function App() {
  return (
    <>
      <main className="px-5 lg:px-70 text-gray-950 font-mono bg-[#FFFFFF]">
        <div id="home">
          <Home />
        </div>
        <Header />

        <div className="pt-[3rem]" id="about">
          <About />
        </div>

        <div className="pt-[3rem]">
          <Skills />
        </div>

        <div className="pt-[3rem]" id="experience">
          <Experience />
        </div>

        <div className="pt-[3rem]" id="projects">
          <Projects />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
