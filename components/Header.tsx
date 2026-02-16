"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        <Link href="/" className="text-lg font-semibold">
          Hi, I’m Mahnoor. Let’s build impactful solutions.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#skills" className="text-[#3c8bc0] hover:text-white">
            Skills
          </Link>
          <Link href="#experience" className="text-[#3c8bc0] hover:text-white">
            Experience
          </Link>
          <Link href="#projects" className="text-[#3c8bc0] hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="text-[#3c8bc0] hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-black transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 pb-4 space-y-3">
          <Link href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
