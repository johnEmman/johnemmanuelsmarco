"use client";

import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white pt-[10rem] ">
      <div className="grid grid-cols-3 grid-rows-5 gap-4">
        <div className="col-span-3 row-span-2 row-start-4 flex flex-col gap-2">
          {/* Name with fade + slide down */}
          <motion.div
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            EJ S. Marco
          </motion.div>

          {/* Title with fade + slight scale */}
          <motion.div
            className="text-lg md:text-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Full-Stack Developer | Computer Science Graduate
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
