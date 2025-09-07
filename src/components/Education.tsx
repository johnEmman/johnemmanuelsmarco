"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
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
      className="max-w-6xl mx-auto pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
    >
      {/* Heading */}
      <motion.h2
        variants={fadeSlideDown}
        className="text-lg font-bold border-b border-gray-300 pb-2 "
      >
        Education
      </motion.h2>

      {/* Timeline */}
      <div className="relative  flex flex-col gap-5">
        {education.map((edu, index) => (
          <motion.div key={index} variants={fadeScaleUp} className="relative  ">
            {/* Timeline Dot */}
            {/* <span className="absolute -left-[10px] top-6 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></span> */}

            {/* Card */}
            <div className="bg-white  rounded-lg py-6 px-2  transition">
              <div className="flex items-start gap-3">
                {/* Logo */}
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="  md:h-12 h-[4rem] rounded-full object-cover"
                />

                {/* School Info */}
                <div className="lg:flex justify-between w-full ">
                  <div>
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-sm text-gray-600">{edu.school}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{edu.location}</p>
                    <p className="text-xs text-gray-500 italic">{edu.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
