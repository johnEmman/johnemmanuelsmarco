import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import React from "react";

export default function page() {
  return (
    <div>
      <>
        <main className="px-7 lg:px-80 text-gray-950 font-sans bg-[#FFFFFF]">
          <div id="home">
            <Home />
          </div>
          <Header />

          <div className="pt-8" id="about">
            <About />
          </div>

          <div className="pt-8">
            <Skills />
          </div>

          <div className="pt-8" id="experience">
            <Experience />
          </div>
          <div className="pt-8">
            <Education />
          </div>

          <div className="pt-8" id="projects">
            <Projects />
          </div>
          <GetInTouch />
          <Footer />
        </main>
      </>
    </div>
  );
}
