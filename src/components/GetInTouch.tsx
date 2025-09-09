"use client";

import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";

// --- Animation Variants ---
// --- Animation Variants ---
const fadeSlideDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const fadeScaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // ✅ valid
    },
  },
};

export default function GetInTouch() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  // Reset status after short delay
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <footer
      id="contact"
      className="flex flex-col gap-6 justify-center  items-center pt-8 text-center"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeSlideDown}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-extrabold text-gray-900"
        >
          {"Let's Work Together"}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeScaleUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg md:text-lg text-gray-700 max-w-2xl mx-auto mt-4"
        >
          Got an idea brewing? 💡 Let’s turn it into something awesome. Drop me
          an email — whether it’s a project, a collab, or just to say hi!
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={fadeSlideLeft}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 mt-6 justify-center"
        >
          {/* Download CV */}
          <a
            href="/cv/Marco_John_Emmanuel_S_cv.docx"
            target="_blank"
            rel="noopener noreferrer"
            download
            aria-label="Download CV"
            className="flex items-center gap-2 px-3 py-1 rounded-xl border border-gray-200 shadow-sm 
               bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 
               transition-all duration-300 ease-out text-base md:text-lg font-medium"
          >
            <span className="text-blue-500 text-lg">📍</span>
            Download CV
          </a>

          {/* Email */}
          <a
            href="mailto:ty.johnemmanuel@gmail.com"
            className="flex items-center gap-2 px-3 py-1 rounded-xl border border-gray-200 shadow-sm 
               bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 
               transition-all duration-300 ease-out text-base md:text-lg font-medium"
          >
            <span className="text-red-500 text-lg">✉️</span>
            ty.johnemmanuel@gmail.com
          </a>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mt-4">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeSlideLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-lg p-3 flex flex-col h-full shadow-sm"
          >
            <div className="flex flex-col space-y-3">
              {/* Email Field */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-start text-sm font-medium dark:text-gray-100 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-2.5 py-2 rounded-md border border-gray-200 dark:border-gray-700 
              bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20
              transition-all duration-200 outline-none
              hover:border-gray-300 dark:hover:border-gray-600"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-3.5 h-3.5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium dark:text-gray-100"
                  >
                    Message
                  </label>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">
                    {form.message?.length || 0}/500
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share your thoughts..."
                  rows={4}
                  maxLength={500}
                  required
                  className="w-full px-2.5 py-2 rounded-md border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20
            transition-all duration-200 outline-none resize-none
            hover:border-gray-300 dark:hover:border-gray-600"
                />
              </div>
            </div>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-600 font-medium mt-2 text-xs">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium mt-2 text-xs">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-3 px-3 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 text-xs"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin h-3.5 w-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message ✉️"
              )}
            </button>
          </motion.form>

          {/* Why Choose Me Card */}
          <motion.div
            variants={fadeScaleUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-lg  p-3  w-full text-left shadow-sm"
          >
            <h2 className="text-base font-semibold mb-3">Why Choose Me</h2>
            <div className="space-y-8 text-xs">
              <Feature
                icon="⚡"
                color="text-blue-500"
                title="Full-Stack Expertise"
                desc="Frontend, backend, real-time, and AI."
              />
              <Feature
                icon="🎯"
                color="text-purple-500"
                title="Results-Driven"
                desc="Impact-first mindset with outcomes."
              />
              <Feature
                icon="🤝"
                color="text-green-500"
                title="Great Collaboration"
                desc="Clear communication & iteration."
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}

// --- Subcomponents ---
function Feature({
  icon,
  color,
  title,
  desc,
}: {
  icon: string;
  color: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={fadeSlideLeft}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-start gap-4"
    >
      <span className={`${color} text-2xl`}>{icon}</span>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
