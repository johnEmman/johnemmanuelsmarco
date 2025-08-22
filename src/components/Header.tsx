"use client";
import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { TbBrandLinkedin } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white z-50 px-6 py-4 rounded-md shadow-md">
        <ul className="flex gap-6 text-2xl font-bold">
          <li>
            <Link href="/" aria-label="Home">
              <HiOutlineHome className="hover:text-blue-500 transition-colors" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <TbBrandLinkedin className="hover:text-blue-600 transition-colors" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <BsGithub className="hover:text-gray-700 transition-colors" />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
