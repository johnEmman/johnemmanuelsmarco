"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white px-4 text-black">
      {/* Wrapper Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Main Content */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-6">
            About
          </h2>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQF40U_E-6fU2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682683941506?e=1758153600&v=beta&t=b_Q-2Mb5cz6npatcH2b-VFZ4xl4_8E2aRM9ynMdhCpY"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />

            <div>
              <div className="text-xl font-semibold">
                Hi, I&apos;m John Emmanuel Marco
              </div>
              <div className="text-xs text-gray-600">22 Years Old</div>
            </div>
          </motion.div>

          <motion.div
            className="py-6 text-gray-700 text-justify pr-5 flex flex-col gap-3 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p>
              I&apos;m a passionate Software Developer who enjoys bringing ideas
              to life through technology. My focus is on building applications
              that are not only functional but also meaningful and
              user-friendly.
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
              ideas. I believe the best projects come from teamwork, creativity,
              and a drive to solve real problems with practical, innovative
              solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-10">
            Quotes
          </h2>
          <div className="flex flex-col gap-4">
            {[
              {
                quote: "Coding like poetry should be short and concise",
                author: "Santosh Kalwar",
              },
              {
                quote:
                  "It&apos;s not a bug; it&apos;s an undocumented feature.",
                author: "Anonymous",
              },
              {
                quote: "First, solve the problem. Then, write the code.",
                author: "John Johnson",
              },
              {
                quote:
                  "Clean code always looks like it was written by someone who cares.",
                author: "Robert C. Martin",
              },
              {
                quote:
                  "Most good programmers do programming not because they expect to get paid, but because it is fun to program.",
                author: "Linus Torvalds",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-sm text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="text-gray-600">&quot;{item.quote}&quot;</div>
                <div className="text-end text-[11px] text-gray-500">
                  – {item.author}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
