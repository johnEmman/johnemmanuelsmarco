"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // stagger for sequential animations
    },
  },
};

const fadeSlideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
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
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "AMA Computer College Lucena City",
      location: "Lucena City",
      date: "08/2021 - 10/2025",
      img: "https://media.licdn.com/dms/image/v2/C4E0BAQGXzXKcw-vZcQ/company-logo_200_200/company-logo_200_200/0/1631373700189/amaes_alumni_logo?e=2147483647&v=beta&t=jutKOrRlsIavuG8HpDP9Gb1Z00jsFkjtmDC6q3RWKUc",
    },
    {
      degree: "Web Development & Data Analytics Bootcamp",
      school: "Refocus Digital Academy",
      location: "Remote",
      date: "05/2022 - 02/2023",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2pavjeVjg9dO4VvDHRkc4pLR8a_n3BzMpTtfjB7wN5Y_iLI_-IuWWfvPif_Qvxvbbjs&usqp=CAU",
    },
  ];

  return (
    <motion.section
      id="education"
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
        Education
      </motion.h2>

      {/* Education List */}
      <motion.div variants={container} className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeScaleUp}
            className="flex items-center gap-4 p-4"
          >
            {/* Image */}
            <motion.div
              variants={fadeScaleUp}
              className="w-16 h-16 flex-shrink-0"
            >
              <img
                src={edu.img}
                alt={edu.school}
                width={64}
                height={64}
                className="rounded-full"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              variants={fadeSlideLeft}
              className="flex flex-col md:flex-row md:justify-between w-full"
            >
              {/* Left side */}
              <div>
                <h3 className="font-semibold text-lg md:text-xl">
                  {edu.degree}
                </h3>
                <p className="italic text-gray-600">{edu.school}</p>
              </div>

              {/* Right side */}
              <motion.div
                variants={fadeSlideLeft}
                className="text-sm md:text-base text-gray-700 mt-2 md:mt-0 flex flex-col items-start md:items-end"
              >
                {edu.location && <span>{edu.location}</span>}
                <span className="italic">{edu.date}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
