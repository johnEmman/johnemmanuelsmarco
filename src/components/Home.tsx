"use client";

import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { Code2, Cpu, Mail, Sparkles, Workflow } from "lucide-react";

// ✅ Custom Pill component
function Pill({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium bg-white text-slate-700 shadow ${className}`}
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto pb-5 border-b-2 px-4 pt-10">
      <div className="pt-[5rem]">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent"
          >
            John Emmanuel S. Marco
          </motion.h1>

          <p className="mt-4 text-2xl text-slate-600 max-w-prose">
            Full-Stack Developer focused on real-time, AI-powered web apps &
            Automation.
          </p>
          <p className="text-sm text-slate-600">
            Enabling businesses to innovate and scale efficiently
          </p>

          {/* ✅ Pills section */}
          <div className="mt-2 flex flex-wrap gap-3">
            <Pill>
              <Code2 className="h-4 text-red-500 w-4" /> Full-Stack (React ·
              Node)
            </Pill>
            <Pill>
              <Cpu className="h-4 w-4" /> AI/ML (Whisper · HF)
            </Pill>
            <Pill>
              <Workflow className="h-4 w-4" /> Realtime (WebRTC · WS)
            </Pill>
          </div>

          {/* ✅ Buttons */}
        </div>
      </div>
    </div>
  );
}
