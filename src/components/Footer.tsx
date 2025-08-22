"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // sequential delay
    },
  },
};

const fadeSlideDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const fadeScaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className=" max-w-6xl mx-auto h-[40rem] flex flex-col gap-6 justify-center items-center px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
    >
      {/* Heading */}
      <motion.h2
        variants={fadeSlideDown}
        className="text-4xl md:text-6xl font-extrabold text-gray-900"
      >
        Get in Touch
      </motion.h2>

      {/* Subheading */}
      <motion.p
        variants={fadeScaleUp}
        className="text-lg md:text-2xl text-gray-700 max-w-2xl"
      >
        Got an idea brewing? 💡 Let’s turn it into something awesome together.
        Drop me an email — whether it’s a project, a collab, or just to say hi!
      </motion.p>

      {/* Contact details */}
      <motion.div
        variants={fadeSlideLeft}
        className="flex flex-col md:flex-row gap-4 mt-6 text-gray-600"
      >
        <span className="text-base md:text-lg">📍 Manila, Philippines</span>
        <a
          href="mailto:ty.johnemmanuel@gmail.com"
          className="text-base md:text-lg hover:text-blue-600 transition-colors"
        >
          ✉️ ty.johnemmanuel@gmail.com
        </a>
      </motion.div>
    </motion.footer>
  );
}
