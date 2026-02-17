"use client";
import Image from "next/image";   
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github } from 'lucide-react'
import icon from "./images/Hero.png";

export default function Intro() {
  return (
    <section className="hero-banner relative w-full min-h-screen flex items-center justify-center px-4">
      
      <div className="max-w-6xl w-full py-16 md:py-32 text-center md:text-left">
        
        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
>
  MAHNOOR AHMED
</motion.h1>

<p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300">
  Full-Stack Engineer building scalable web applications & data-driven systems
</p>

    <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg text-gray-200 leading-relaxed">
    Engineering scalable healthcare systems and data platforms that transform operational workflows and drive measurable business growth.
    </p>

        <div className="flex justify-center md:justify-start mt-8">
          <a href="#projects">
      <Button>
        View Projects
      </Button>
          </a>

          <a href="/Mahnoor_Ahmed.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              Download Resume
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
