'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative w-screen bg-[#0F1042] py-24 overflow-hidden scroll-mt-20">

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center px-6 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Let’s Build Something Meaningful
        </h2>

        <p className="text-gray-300 mb-2">
          London, United Kingdom — Remote-friendly
        </p>

        <p className="text-gray-400 mb-12">
          Open to remote & on-site engineering opportunities
        </p>

        <div className="flex justify-center gap-8">

          <ContactIcon
            href="mailto:mahnoorahmed182@gmail.com"
            icon={<Mail size={22} />}
            label="Email"
            badge="Primary Contact"
          />

          <ContactIcon
            href="https://www.linkedin.com/in/mahnoor-ahmed-479287167"
            icon={<Linkedin size={22} />}
            label="LinkedIn"
            badge="Professional Profile"
            external
          />

          <ContactIcon
            href="https://github.com/mahusama"
            icon={<Github size={22} />}
            label="GitHub"
            badge="Code Samples"
            external
          />

        </div>
      </motion.div>
    </section>
  )
}

function ContactIcon({
  href,
  icon,
  label,
  badge,
  external = false,
}: {
  href: string
  icon: React.ReactNode
  label: string
  badge: string
  external?: boolean
}) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-white"
      aria-label={label}
    >
      <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-lg">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">{badge}</span>
    </motion.a>
  )
}
