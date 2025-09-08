"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-2">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Emmanuel. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex gap-5">
          <a
            href="https://github.com/johnEmman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/john-emmanuel-marco-ba7558274/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="ty.johnemmanuel@gmail.com"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
