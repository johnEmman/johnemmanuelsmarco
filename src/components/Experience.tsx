"use client";
import { useState } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  location: string;
  techStack: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Intern Software Developer QA Tester | Innovation Technology",
    company: "SP Madrid & Associates",
    date: "Oct 2024 – Dec 2024",
    location: "PITX Parañaque City",
    techStack:
      "Python, TypeScript, Node.js, React, Express, Socket.io, PostgreSQL, Hugging Face, WebRTC, Postman",
    description: [
      "Developed a real-time speech-to-text transcription system with Transformers.js, cutting trainee feedback cycle by 50%.",
      "Built a WebRTC peer-to-peer audio solution, streamlining communication workflows and reducing response time in role-play simulations by 40%.",
      "Integrated Whisper, WebRTC, and PostgreSQL into a secure pipeline, boosting transcription accuracy and usability in training simulations.",
      "Coordinated with AI engineers to integrate and fine-tune machine learning models for ALPR, ensuring accurate and efficient license plate recognition.",
      "Engineered and deployed a responsive UI for the ALPR system, reducing plate detection time by 40% and increasing operator throughput by 30%.",
      "Labeled, cleaned, and organized 5,000+ images for AI training, improving model accuracy by 15%.",
      "Collaborated with developers and UI/UX designers to identify, track, and resolve 90% of high-severity defects prior to production release.",
      "Served as the sole QA tester for the company’s website, performing functional, usability, regression, and cross-browser testing to achieve 100% release readiness.",
      "Wrote and updated QA documentation including test plans, defect logs, and validation reports, accelerating bug resolution speed by 35%.",
    ],
  },
  {
    role: "QA Tester | Frontend Developer",
    company: "Carpet Cleaning Doctor Fabric",
    date: "Jan 2023 – Jul 2023",
    location: "Remote",
    techStack: "HTML, CSS, JavaScript, jQuery, Bootstrap",
    description: [
      "Resolved 100% of cross-device compatibility issues and tested on 3+ browsers and 15+ screen sizes, lowering defect rates by 35%.",
      "Fixed critical mobile bugs (videos not playing, disappearing components) and optimized performance, raising mobile engagement by 25%.",
      "Conducted manual and responsive design testing, eliminating 20+ defects, increasing stability, and improving UI consistency by 40%.",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="max-w- 3xl mx-auto pt-8 pb-14">
      <h2 className="pb-8">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const isExpanded = expanded === index;
          const visibleDescription = isExpanded
            ? exp.description
            : exp.description.slice(0, 2);

          return (
            <div key={index} className="  flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                {index !== experiences.length - 1 && (
                  <div className="w-[2px] bg-gray-300 flex-1"></div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500">
                  {exp.date} • {exp.location}
                </p>
                <p className="mt-2 text-sm text-gray-600">{exp.techStack}</p>

                <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                  {visibleDescription.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* See more / less */}
                {exp.description.length > 2 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-2 text-gray-600 hover:underline text-sm font-medium"
                  >
                    {isExpanded ? "See less" : "See more"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
