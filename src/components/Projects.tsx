"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

interface ProjectItem {
  name: string;
  date: string;
  techStack: string;
  description: string[];
  link?: string;
}

const projects: ProjectItem[] = [
  {
    name: "Whisper WebGPU (Real-Time Transcription & Communication System)",
    date: "Nov 2024",
    techStack:
      "TypeScript, React, Node.js, WebRTC, PostgreSQL, Transformers.js, Whisper AI",
    description: [
      "Developed a real-time speech-to-text transcription system using Transformers.js, cutting trainee feedback cycle by 50%.",
      "Built WebRTC-based audio streaming for peer-to-peer role-play training simulations.",
      "Integrated Whisper AI for high-accuracy transcription in real-time training environments.",
    ],
    link: "https://github.com/yourusername/whisper-webgpu",
  },
  {
    name: "Automatic License Plate Recognition (ALPR) System",
    date: "Oct 2024",
    techStack:
      "React, Node.js, PostgreSQL, Machine Learning Models (Hugging Face)",
    description: [
      "Collaborated with AI engineers to integrate machine learning models for accurate plate recognition.",
      "Built a responsive UI for real-time plate detection, reducing detection time by 40%.",
      "Labeled and processed 5,000+ images for AI training, improving model accuracy by 15%.",
    ],
  },
  {
    name: "Responsive Business Website",
    date: "Jun 2023",
    techStack: "HTML, CSS, JavaScript, jQuery, Bootstrap",
    description: [
      "Developed a fully responsive business website compatible with mobile, tablet, and desktop.",
      "Optimized for SEO and performance, improving page load speed by 30%.",
      "Implemented cross-browser testing and fixed 20+ UI bugs.",
    ],
    link: "https://yourlivewebsite.com",
  },
];

// --- Framer Motion Variants ---
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const fadeSlideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeScaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 pt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
    >
      {/* Heading */}
      <motion.h2
        variants={fadeSlideDown}
        className="text-lg   border-b border-gray-300 pb-2 mb-6  font-bold  text-gray-900 "
      >
        Projects
      </motion.h2>

      {/* Projects List */}
      <motion.div variants={container} className="space-y-1">
        {projects.map((project, index) => {
          const isExpanded = expanded === index;

          return (
            <motion.div
              key={index}
              variants={fadeScaleUp}
              className="p-5 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition"
            >
              {/* Project Name */}
              <motion.h3
                variants={fadeSlideLeft}
                className="font-semibold text-lg md:text-xl"
              >
                {project.name}
              </motion.h3>

              {/* Date */}
              <motion.p
                variants={fadeSlideLeft}
                className="text-sm text-gray-500"
              >
                {project.date}
              </motion.p>

              {/* Tech Stack */}
              <motion.p
                variants={fadeSlideLeft}
                className="mt-2 text-sm text-gray-600"
              >
                {project.techStack}
              </motion.p>

              {/* Expandable content */}
              {isExpanded && (
                <>
                  {/* Description */}
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className="mt-3 list-disc pl-5 text-gray-700 space-y-1"
                  >
                    {project.description.map((point, i) => (
                      <motion.li key={i} variants={fadeSlideLeft}>
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </>
              )}
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => toggleExpand(index)}
                  className="mt-2 text-blue-600 hover:underline text-sm font-medium"
                  variants={fadeSlideLeft}
                >
                  {isExpanded ? "See less" : "See more"}
                </motion.button>
                {/* Project Link */}
                {project.link && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeSlideLeft}
                    className="mt-3"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
                    >
                      View Project
                    </a>
                  </motion.div>
                )}
              </div>
              {/* Expand Button (always visible) */}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
