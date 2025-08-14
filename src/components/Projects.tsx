"use client";
import { useState } from "react";

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

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        Projects
      </h2>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => {
          const isExpanded = expanded === index;
          const visibleDescription = isExpanded
            ? project.description
            : project.description.slice(0, 2);

          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.date}</p>
              <p className="mt-2 text-sm text-gray-600">{project.techStack}</p>

              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                {visibleDescription.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {project.description.length > 2 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-2 text-blue-600 hover:underline text-sm font-medium"
                >
                  {isExpanded ? "See less" : "See more"}
                </button>
              )}

              {project.link && (
                <div className="mt-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
