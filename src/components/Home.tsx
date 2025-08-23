"use client";

import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white max-w-6xl mx-auto px-4 mb-4  ">
      <div className="pt-[5rem]">
        <div className="">
          {/* Name with fade + slide down */}
          <motion.div
            className="text-4xl mb-3 md:text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            John Emmanuel S. Marco
          </motion.div>

          {/* Title with fade + slight scale */}
          <motion.div
            className="text-lg md:text-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Full-Stack Developer | QA Tester | AI-Powered Web Solutions &
            Automation
          </motion.div>
          <motion.div
            className="text-sm md:text-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Enabling businesses to innovate and scale efficiently
          </motion.div>

          {/* Location with fade + slide from left */}
          <motion.div
            className="flex gap-1 items-center text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <CiLocationOn className="text-xl text-red-500" />
            <div>Manila, Philippines</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
