"use client";
import Home from "@/components/Home";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import "animate.css";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import GetInTouch from "@/components/GetInTouch";

export default function App() {
  const [showSkills, setShowSkills] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showEdu, setShowEdu] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showGetInTouch, setShowGetInTouch] = useState(false);
  return (
    <div>
      <main className="px-7  lg:px-80 text-gray-950 font-sans bg-[#FFFFFF]">
        <div id="home">
          <Home />
        </div>
        <Header />
        <section className="max-w-4xl text-justify mx-auto px-4 py-5 text-gray-800 leading-relaxed">
          {/* Profile Intro */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQF40U_E-6fU2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682683941506?e=1758153600&v=beta&t=b_Q-2Mb5cz6npatcH2b-VFZ4xl4_8E2aRM9ynMdhCpY"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full object-cover shadow-sm ring-1 ring-gray-200"
            />

            <div>
              <h3 className="text-lg font-semibold">Hi, I’m Emmanuel</h3>
              <p className="text-sm text-gray-600">
                Software Developer · 22 · Based in Philippines
              </p>
            </div>
          </motion.div>
          <div className="space-y-5">
            <p>
              {
                " Hi! 👋 I'm a Software Developer from the Philippines who loves turning ideas into reality through code."
              }
            </p>

            <p>
              My developer journey started with curiosity — tweaking small
              scripts, building little apps, and wondering “what else can I
              create?”. Over time, that curiosity grew into{" "}
              <button
                onClick={() => setShowSkills(!showSkills)}
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                a versatile skillset{" "}
                {showSkills ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              spanning modern frameworks, databases, and tools that help me
              solve real-world problems.
            </p>

            <AnimatePresence>
              {showSkills && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Skills />
                </motion.div>
              )}
            </AnimatePresence>

            <p>
              Along the way, I’ve gained{" "}
              <button
                onClick={() => setShowWork(!showWork)}
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                real-world experience{" "}
                {showWork ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              — seeing firsthand how an idea can grow into a solution that
              impacts people’s daily lives.
            </p>

            <AnimatePresence>
              {showWork && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Experience />
                </motion.div>
              )}
            </AnimatePresence>

            <p>
              My foundation was strengthened through{" "}
              <button
                onClick={() => setShowEdu(!showEdu)}
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                formal education{" "}
                {showEdu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              — giving me not just theory, but the discipline to keep learning
              and adapting in a fast-changing industry.
            </p>

            <AnimatePresence>
              {showEdu && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Education />
                </motion.div>
              )}
            </AnimatePresence>

            <p>
              I’ve also worked on{" "}
              <button
                onClick={() => setShowProjects(!showProjects)}
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                projects I’m proud of{" "}
                {showProjects ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              — from small passion builds to larger apps that bring real value.
              Each project taught me something new and fueled my drive to keep
              creating.
            </p>

            <AnimatePresence>
              {showProjects && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Projects />
                </motion.div>
              )}
            </AnimatePresence>

            <p>
              Beyond code, I love collaborating, exchanging ideas, and pushing
              creativity forward. For me, the most exciting part of development
              isn’t just writing clean code — it’s building something that makes
              life easier, faster, or a little more enjoyable 🚀.
            </p>
          </div>
          <div
            onClick={() => setShowGetInTouch(!showGetInTouch)}
            className="inline-flex text-center pt-8 cursor-pointer items-center text-blue-600 font-medium hover:underline"
          >
            {"Let's Work Togethere"}
            {showGetInTouch ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </div>
          <AnimatePresence>
            {showGetInTouch && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <GetInTouch />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="text-center pt-8 text-3xl "></div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
