"use client";

import { motion } from "framer-motion";
import { Code, Database, Layers, Zap, MapPin, Mail } from "lucide-react";

// --- Animation Variants (modular & reusable) ---
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
} as const;

const fadeSlideDown = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const fadeScaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const fadeSlideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

// --- Small building blocks ---
function InfoItem({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <motion.div
      variants={fadeSlideLeft}
      className="flex items-center gap-2 text-gray-700"
    >
      <Icon className="w-4 h-4 md:w-5 md:h-5" />
      <span className="text-sm md:text-base">{label}</span>
    </motion.div>
  );
}

function SkillCard({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ElementType;
  items: string[];
}) {
  return (
    <motion.div
      variants={fadeSlideLeft}
      className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6" />
        <h3 className="font-semibold text-lg md:text-xl text-gray-900">
          {title}
        </h3>
      </div>
      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
        {items.join(", ")}
      </p>
    </motion.div>
  );
}

// --- Main Component ---
export default function AnimatedSkills() {
  return (
    <motion.section
      id="skills"
      className="py-16 "
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          variants={fadeSlideDown}
          className="text-2xl  font-bold  text-gray-900 mb-4"
        >
          Skills
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeScaleUp}
          className="text-center text-gray-600 text-base md:text-lg"
        >
          A quick glance at the tools and technologies I use day to day.
        </motion.p>

        {/* Details Row (example: location / contact) */}
        <motion.div
          variants={container}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10"
        ></motion.div>

        {/* Grid of skill cards */}
        <motion.div variants={container} className="grid md:grid-cols-2 gap-8">
          <SkillCard
            title="Languages"
            icon={Code}
            items={[
              "Python",
              "JavaScript",
              "TypeScript",
              "C++",
              "C#",
              "PHP",
              "SQL",
            ]}
          />

          <SkillCard
            title="Databases & DevOps"
            icon={Database}
            items={[
              "MySQL",
              "PostgreSQL",
              "Git",
              "Linux",
              "Jest (unit testing)",
              "Postman",
            ]}
          />

          <SkillCard
            title="Frameworks"
            icon={Layers}
            items={[
              "Django",
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "Laravel",
              "WordPress",
              "Tailwind CSS",
            ]}
          />

          <SkillCard
            title="Technologies"
            icon={Zap}
            items={[
              "SEO Optimization",
              "Redux",
              "WebRTC",
              "RESTful APIs",
              "WebSocket",
              "Socket.IO",
              "Hugging Face",
              "Transformers.js",
              "Agile",
            ]}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
