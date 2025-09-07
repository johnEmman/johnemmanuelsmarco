"use client";
import { Variants } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectItem {
  name: string;
  techStack: string;
  description: string[];
  link?: string;
  image?: string;
}

const projects: ProjectItem[] = [
  {
    name: "AMA Facial Recognition: Digital Record-logs Management System",

    techStack:
      "React, Node.js, Express.js, MySQL, Python, OpenCV, Machine Learning",

    description: [
      "Developed a digital record-logs system to replace manual logbooks at AMA Computer College.",

      "Implemented facial recognition with OpenCV and ML models to automate log-in/log-out processes.",

      "Designed a secure backend with Node.js and MySQL to store records and manage access.",

      "Built an admin dashboard for monitoring, reporting, and record retrieval.",

      "Improved accuracy, reduced record-keeping time, and enhanced security of student and staff logs.",
    ],

    image: "/img/capstone1.png",
  },

  {
    name: "Whisper WebGPU (Real-Time Transcription & Communication System)",

    techStack:
      "TypeScript, React, Express, Node.js, WebRTC, PostgreSQL, Transformers.js, Whisper AI",

    description: [
      "Developed a real-time speech-to-text transcription system using Transformers.js, cutting trainee feedback cycle by 50%.",

      "Built WebRTC-based audio streaming for peer-to-peer role-play training simulations.",

      "Integrated Whisper AI for high-accuracy transcription in real-time training environments.",
    ],

    link: "https://github.com/johnEmman/webrtc-client-server",

    image: "/img/roleplay.png",
  },

  {
    name: "Automatic License Plate Recognition (ALPR) System",

    techStack:
      "React, Node.js, PostgreSQL, Machine Learning Models (Hugging Face)",

    description: [
      "Collaborated with AI engineers to integrate machine learning models for accurate plate recognition.",

      "Built a responsive UI for real-time plate detection, reducing detection time by 40%.",

      "Labeled and processed 5,000+ images for AI training, improving model accuracy by 15%.",
    ],

    image: "/img/alr.png",
  },

  {
    name: "Business Cost Calculator (Universal Pricing & Profit Tool)",

    techStack: "React, TypeScript, TailwindCSS, Chart.js, CSV Export",

    description: [
      "Built a professional business cost calculator tailored for restaurants, bakeries, and food entrepreneurs.",

      "Implemented VAT-registered business logic with automatic VAT-inclusive/exclusive pricing support.",

      "Designed multiple pricing strategies with dynamic target profit margin (10–50%) calculations.",

      "Added cost analysis module: unit cost breakdown, raw materials, labor, and overhead tracking.",

      "Integrated discount calculator for common Philippine business scenarios (PWD/Senior Citizen, bulk, loyalty, and custom discounts).",

      "Developed performance analysis tools including margin, markup, and profitability insights with real-time charts.",

      "Enabled CSV export for business reports and financial tracking.",
    ],

    link: "https://biz-calc-hub.vercel.app/",

    image: "/img/costCalc.png",
  },

  {
    name: "Business Analytics Dashboard",

    techStack: "React, Recharts, Chart.js, Prisma ORM, TypeScript",

    description: [
      "Displays key financial and operational metrics",

      "Interactive data visualization with charts",
    ],

    link: "https://tableau-tonic.vercel.app/",

    image: "/img/datavisualpng.png",
  },

  {
    name: "Backend API Docs",

    techStack: " TypeScript, React, Tailwind",

    description: [
      "Built production-ready backend API documentation covering setup, database design, REST API endpoints, authentication, and deployment.",

      "Implemented relational database schema with Prisma and MySQL, including ER diagrams and SQL optimization examples.",

      "Developed Express.js REST APIs with JWT authentication, error handling, and OpenAPI 3.0 documentation.",

      "Configured CI/CD pipeline, Docker deployment, and testing strategy with Vitest and Supertest.",

      "Outlined security best practices and observability for monitoring in production systems.",
    ],

    link: "https://api-crafting-kit.vercel.app/",

    image: "/img/docsProject.png",
  },
];
// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay children animations
    },
  },
};

const fadeSlideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeScaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto pb-8">
      {/* Heading with fade + slide down */}
      <motion.h2
        className="text-lg font-bold border-b border-gray-300 pb-2 mb-6"
        variants={fadeSlideDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Projects
      </motion.h2>

      {/* Container with staggered children */}
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {projects.map((project, index) => {
          const isExpanded = expanded === index;

          return (
            <motion.div
              key={index}
              className="flex items-start gap-4 rounded-md border border-gray-200 bg-white p-4 shadow-sm hover:shadow transition"
              variants={fadeScaleUp}
            >
              {/* Thumbnail Image with slide in */}
              {project.image && (
                <motion.div
                  className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md"
                  variants={fadeSlideLeft}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {/* Content */}
              <motion.div className="flex-1" variants={fadeSlideLeft}>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                  {project.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {project.techStack}
                </p>

                {/* Expandable description */}
                {isExpanded && (
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Actions */}
                <div className="mt-2 flex items-center gap-3">
                  {project.description.length > 0 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      {isExpanded ? "See less" : "See more"}
                    </button>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition"
                    >
                      View
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
