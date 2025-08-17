"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white shadow-md z-50">
        <nav className="flex justify-between items-center px-6 py-4">
          {/* Logo / Brand */}
          <div className="text-xl font-bold">Hello, World</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 font-semibold">
            <a href="#home" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md font-semibold">
            <a
              href="#home"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </div>
        )}
      </header>

      {/* Spacer so sticky doesn't overlap */}
      <div className="h-[5rem]" />
    </>
  );
}
