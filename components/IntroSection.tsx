"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4">
      
      <div className="max-w-6xl w-full py-16 md:py-32 text-center md:text-left">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
        >
          MAHNOOR AHMED
        </motion.h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white">
          Full-Stack Software Engineer & Data Engineer
        </p>

        <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-base sm:text-lg text-white leading-relaxed">
          I have 5+ years building scalable healthcare systems, analytics platforms,
          and data pipelines. I am passionate about creating efficient, user-friendly
          applications that solve real-world problems and drive business success.
          I love looking at problems and finding the most efficient way to solve them.
          I am always looking for new challenges and opportunities to learn and grow
          as a developer.
        </p>

        <div className="flex justify-center md:justify-start mt-8">
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
