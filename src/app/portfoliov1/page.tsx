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
    </div>
  );
}
