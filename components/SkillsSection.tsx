'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const SKILLS = {
  "Frontend": [
    { name: 'React & Next.js', level: 'Advanced', badge: 'Production' }
  ],
  "Backend": [
    { name: 'C# & ASP.NET', level: 'Advanced', badge: 'Production' },
    { name: 'REST APIs & System Integration', level: 'Advanced', badge: 'Production' },
    { name: 'SQL & Databases', level: 'Advanced', badge: 'Production' }
  ],
  "Data Engineering": [
    { name: 'Python (Pandas, NumPy)', level: 'Advanced', badge: 'Production' }
  ],
  "DevOps / Tools": [
    { name: 'GitHub', level: 'Advanced', badge: 'Production' },
    { name: 'Vercel', level: 'Intermediate', badge: 'Production' },
    { name: 'CI/CD', level: 'Intermediate', badge: 'Core' }
  ]
}

export default function Skills() {
  return (
    <section className="relative w-screen py-24 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-black mb-16 text-center"
        >
          Core Skills
        </motion.h2>

        {Object.entries(SKILLS).map(([category, skills], catIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-700">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + catIndex * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="
                      rounded-2xl
                      bg-white
                      border border-gray-200
                      text-black
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-xl
                    "
                  >
                    <CardContent className="p-6 text-center font-medium flex flex-col items-center gap-2">
                      <span>{skill.name}</span>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                          {skill.level}
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                          {skill.badge}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
