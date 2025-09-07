"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 pt-10">
      {/* Title */}
      <motion.h2
        className="text-lg font-bold border-b border-gray-200 pb-2 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

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

      {/* Description */}
      <motion.div
        className="text-gray-700 flex flex-col gap-4 leading-relaxed text-[15px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p>
          I’m a passionate Software Developer who enjoys bringing ideas to life
          through technology.
        </p>
        <p>
          I specialize in full-stack development, real-time systems, and AI
          integration, with hands-on experience in Python, JavaScript,
          TypeScript, React, Node.js, and WebRTC. I love exploring how these
          tools can work together to create smooth, impactful digital
          experiences.
        </p>
        <p>
          Beyond coding, I’m always eager to learn, collaborate, and share
          ideas. I believe the best projects come from teamwork, creativity, and
          a drive to solve real problems with practical, innovative solutions.
        </p>
      </motion.div>
    </section>
  );
}
