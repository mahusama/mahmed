'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const SKILLS = [
  'SQL & Databases',
  'C# & ASP.NET',
  'Data Engineering (Pandas, NumPy, PySpark)',
  'React & Next.js',
  'REST APIs & System Integration',
  'CI/CD & DevOps',
]

export default function Skills() {
  return (
    <section className="relative w-screen  py-24 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-black mb-12 text-center"
        >
          Core Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card
                className="
                  rounded-2xl
                  bg-[rgb(123,177,143)]
                  backdrop-blur-md
                  border border-white/10
                  text-black
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:bg-white/10
                  hover:shadow-xl
                "
              >
                <CardContent className="p-6 text-center font-medium">
                  {skill}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
