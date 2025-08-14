import { CiLocationOn } from "react-icons/ci";
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import "animate.css";

export default function App() {
  return (
    <>
      <main className="px-5 lg:px-70 text-gray-950  font-mono bg-[#ffffff]">
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Projects />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
