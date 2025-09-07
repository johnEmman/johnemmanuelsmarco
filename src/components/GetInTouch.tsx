"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
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

export default function GetInTouch() {
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: Hook up to email service (Resend, Nodemailer, Formspree, etc.)
    setForm({ email: "", message: "" });
  };

  return (
    <motion.footer
      id="contact"
      className="max-w-6xl mx-auto h-[45rem] flex flex-col gap-6 justify-center items-center px-6 text-center"
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

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeScaleUp}
        className="mt-8 w-full max-w-lg flex flex-col gap-4 text-left"
      >
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition-colors"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.footer>
  );
}
