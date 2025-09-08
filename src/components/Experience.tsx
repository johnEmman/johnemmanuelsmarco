"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  img: string;
  role: string;
  company: string;
  date: string;
  location: string;
  techStack: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    img: "https://media.licdn.com/dms/image/v2/D560BAQFVDj2BfpOc-A/company-logo_200_200/company-logo_200_200/0/1698729536883/spmadrid_logo?e=1758758400&v=beta&t=byd-nhowHNiEd-HT4QRhNQIH31PCdTIN3QDhE3a0_3Q",
    role: "Intern Software Developer & QA Tester | Innovation Technology",
    company: "SP Madrid & Associates",
    date: "Oct 2024 – Dec 2024",
    location: "PITX Parañaque City",
    techStack:
      "Python, TypeScript, Node.js, React, Express, Socket.io, PostgreSQL, Hugging Face, WebRTC, Postman",
    description: [
      "Developed a real-time speech-to-text transcription system with Transformers.js, cutting trainee feedback cycle by 50%.",
      "Engineered and deployed a responsive UI for the ALPR system, reducing plate detection time by 40% and increasing operator throughput by 30%.",
      "Collaborated with developers and UI/UX designers to identify, track, and resolve 90% of high-severity defects prior to production release.",
    ],
  },
  {
    img: "https://www.carpetcleaningdoctorfabric.com/wp-content/uploads/2023/06/New-logo-dark.png",
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
    <section className=" pb-8 max-w-6xl mx-auto text-justify">
      <h2 className="text-lg   border-b border-gray-300 pb-2 mb-6  font-bold  text-gray-900 ">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const isExpanded = expanded === index;

          return (
            <motion.div
              key={index}
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-3 h-3 bg-gray-600 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: false }}
                />
                {index !== experiences.length - 0 && (
                  <motion.div
                    className="w-[2px] bg-gray-300 flex-1"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: false }}
                  />
                )}
              </div>

              {/* Content */}
              <div>
                <div className="mb-2  flex justify-start items-start gap-3">
                  <img
                    src={`${exp.img}`}
                    className="md:h-12 h-[4rem] rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  {exp.date} • {exp.location}
                </p>

                <p className="mt-2 text-sm text-gray-600">{exp.techStack}</p>

                <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                  <AnimatePresence>
                    {(isExpanded
                      ? exp.description
                      : exp.description.slice(0, 0)
                    ).map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>

                {/* See more / less */}
                {exp.description.length > 1 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-2 text-gray-600 hover:underline text-sm font-medium"
                  >
                    {isExpanded ? "See less" : "See more"}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
