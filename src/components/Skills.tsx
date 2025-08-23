"use client";
import { motion, Variants, easeOut } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiSharp,
  SiPostgresql,
  SiJest,
  SiPostman,
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiWebrtc,
  SiSocketdotio,
  SiHuggingface,
} from "react-icons/si";

// Variants
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeSlideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
};

const fadeScaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
};

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
};

// Skills data object
const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
      {
        name: "JavaScript / TypeScript",
        icon: <SiTypescript className="text-blue-500" />,
      },
      { name: "C++ / C#", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-gray-600" /> },
    ],
  },
  {
    category: "Databases & DevOps",
    items: [
      {
        name: "MySQL / PostgreSQL",
        icon: <SiPostgresql className="text-sky-700" />,
      },
      { name: "Git & Linux", icon: <FaGitAlt className="text-orange-500" /> },
      {
        name: "Jest (unit testing)",
        icon: <SiJest className="text-red-500" />,
      },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "React / Next.js", icon: <FaReact className="text-sky-500" /> },
      {
        name: "Node.js / Express.js",
        icon: <FaNodeJs className="text-green-600" />,
      },
      {
        name: "Laravel / WordPress",
        icon: <FaLaravel className="text-red-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],
  },
  {
    category: "Technologies",
    items: [
      {
        name: "SEO Optimization",
        icon: <FaDatabase className="text-gray-600" />,
      }, // placeholder
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "WebRTC", icon: <SiWebrtc className="text-green-500" /> },
      { name: "RESTful APIs", icon: <FaDatabase className="text-gray-600" /> }, // placeholder
      {
        name: "WebSocket / Socket.IO",
        icon: <SiSocketdotio className="text-black" />,
      },
      {
        name: "Hugging Face / Transformers.js",
        icon: <SiHuggingface className="text-yellow-400" />,
      },
      { name: "Agile", icon: <FaReact className="text-blue-500" /> }, // placeholder
    ],
  },
];

export default function AnimatedSkills() {
  return (
    <motion.section
      id="skills"
      className="pt-8  max-w-6xl mx-auto px-6 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={container}
    >
      {/* Heading */}
      <motion.h2
        variants={fadeSlideDown}
        className="text-lg   border-b border-gray-300 pb-2 mb-6  font-bold  text-gray-900 "
      >
        Skills
      </motion.h2>

      {/* Subheading */}
      <motion.p
        variants={fadeScaleUp}
        className="text-gray-700  text-base md:text-lg max-w-3xl"
      >
        A quick glance at the tools and technologies I use day to day.
      </motion.p>

      {/* Skills mapped */}
      <motion.div variants={container} className="grid ">
        {skills.map((skillGroup, index) => (
          <motion.div key={index} variants={fadeSlideLeft} className="pl-3 p-1">
            {/* Category */}
            <h3 className="font-semibold text-gray-900 mb-1 text-lg">
              {skillGroup.category}
            </h3>

            {/* Skill pills */}
            <ul className="flex flex-wrap gap-2 text-sm md:text-base text-gray-800">
              {skillGroup.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white"
                >
                  {item.icon}
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
