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
      className="flex flex-col gap-6 justify-center items-center pt-8 text-center"
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
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          Get in Touch
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeScaleUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mt-4"
        >
          Got an idea brewing? 💡 Let’s turn it into something awesome together.
          Drop me an email — whether it’s a project, a collab, or just to say
          hi!
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={fadeSlideLeft}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 text-gray-600 mt-6 justify-center"
        >
          <span className="text-base md:text-lg">📍 Manila, Philippines</span>
          <a
            href="mailto:ty.johnemmanuel@gmail.com"
            className="text-base md:text-lg hover:text-blue-600 transition-colors"
          >
            ✉️ ty.johnemmanuel@gmail.com
          </a>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4 mt-10">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeSlideLeft}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white rounded-2xl lg:p-8 flex flex-col h-full shadow-md"
          >
            <div className="flex-1 flex flex-col gap-4">
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
                rows={6}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-600 font-medium mt-4">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium mt-4">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white rounded-2xl lg:p-6 max-w-md w-full text-left shadow-md"
          >
            <h2 className="text-xl font-semibold mb-6">Why Choose Me</h2>
            <div className="space-y-6">
              <Feature
                icon="⚡"
                color="text-blue-500"
                title="Full-Stack Expertise"
                desc="Strong fundamentals across frontend, backend, real-time, and AI technologies."
              />
              <Feature
                icon="🎯"
                color="text-purple-500"
                title="Results-Driven"
                desc="Impact-first mindset with measurable outcomes and performance improvements."
              />
              <Feature
                icon="🤝"
                color="text-green-500"
                title="Great Collaboration"
                desc="Clear communication, rapid iteration, and comprehensive testing practices."
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
