"use client";
import Image from "next/image";   
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github } from 'lucide-react'
import icon from "./images/Hero.png";

export default function Intro() {
return (
<section className="hero-banner relative w-full h-screen flex items-center justify-center">
  
  <div className="overlay  items-center ">  
    <div className="justify-between max-w-6xl py-32 px-16">  

<motion.h1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className=" hero-text text-7xl md:text-6xl font-bold text-white">
    
MAHNOOR AHMED

</motion.h1>

<p className="hero-text mt-4 text-3xl ">
Full-Stack Software Engineer & Data Engineer
</p>
<p className=" hero-text mt-6 max-w-3xl text-lg ">
I have 5+ years building scalable healthcare systems, analytics platforms,
and data pipelines.I am passionate about creating efficient, user-friendly applications that solve real-world problems and drive business success. I love looking at problems and finding the most efficient way to solve them. I am always looking for new challenges and opportunities to learn and grow as a developer.
</p>
<div className="flex gap-4 px-4 mt-8">

<a href="/Mahnoor_Ahmed.pdf" target="_blank" rel="noopener noreferrer">
  <Button variant="outline">
    Download Resume
  </Button>
</a>
</div>
</div>
  </div>
</section>
)
}
