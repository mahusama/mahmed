'use client'

import { useState, useEffect } from "react";

const experiences = [
  {
    role: 'Full-Stack Engineer',
    company: 'MAXSOFT',
    location: 'Islamabad / Dubai',
    frontSummary: "C# .NET · SQL Server · Data Engineering",
    period: 'Oct 2020 – Jan 2025',
    backDetails: [
      'Collaborated with a cross-functional team and led a small group of developers to modernize healthcare lab reporting systems.',
      'Enhanced backend procedures and optimized database queries, improving processing efficiency and scalability.',
      'Built Python-based ETL pipelines for large-scale healthcare data processing.',
      'Deployed production systems used by 100+ labs, streamlining workflows and reducing manual errors.'
    ],
    badges: ['Production System', 'Team Lead', 'Backend Optimization']
  },
  {
    role: 'Lead Software Development Engineer (Volunteer)',
    company: 'Unify Giving',
    location: 'London, UK',
    frontSummary: "Frontend · API Integration · User Research",
    period: 'Jan 2025 – Jun 2025',
    backDetails: [
      'Led frontend design and coordinated API integration with backend engineers.',
      'Designed intuitive, analytics-driven UI flows to improve usability for volunteers and users.',
      'Documented user requirements and workflows to guide future development.'
    ],
    badges: ['Frontend Design', 'User Experience', 'Volunteer Project']
  },
  {
    role: 'Legacy Promotions Assistant',
    company: 'Macmillan Cancer Support',
    location: 'London, UK',
    frontSummary: "CRM Management · Event Support · Data Analysis",
    period: 'May 2025 – Dec 2025',
    backDetails: [
      'Managed CRM communications for 3 major events, tracking invitations, responses, and attendance.',
      'Analyzed event participation data to provide actionable insights.',
      'Supported team collaboration and ensured smooth event execution.'
    ],
    badges: ['CRM Management', 'Event Coordination', 'Data Analysis']
  },
  {
    role: 'Web Developer',
    company: 'Secure Finance Services',
    location: 'Norwest, Australia',
    frontSummary: "Frontend · Analytics · Dashboards",
    period: 'Jan 2023 – Dec 2023',
    backDetails: [
      'Built client-facing financial dashboards for real-time analytics.',
      'Translated complex financial metrics into actionable insights for customers.',
      'Enhanced frontend performance and improved user experience across the platform.'
    ],
    badges: ['Frontend', 'Analytics', 'Client-Facing']
  },
]

export default function ExperienceSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setIsDesktop(media.matches);
  }, []);

  return (
    <section id="experience" className="experience-section bg-[#0f1042] py-32 px-6 md:px-16 scroll-mt-20">
      <h2 className="section-title text-white text-3xl md:text-4xl font-bold mb-16 text-center">
        Experience
      </h2>

      <div className="timeline relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} mb-12`}
          >
            <div
              className={`flip-card ${isDesktop ? "hover-flip" : ""}`}
              onClick={() => {
                if (!isDesktop) setFlippedIndex(flippedIndex === index ? null : index);
              }}
            >
              <div
                className={`flip-card-inner ${!isDesktop && flippedIndex === index ? "flipped" : ""}`}
              >

                {/* FRONT */}
                <div className="flip-card-front bg-[#1a1a80] p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <span className="company text-gray-300">{exp.company} – {exp.location}</span>
                  <span className="period text-gray-400 block mt-1">{exp.period}</span>
                  <p className="summary text-gray-200 mt-2">{exp.frontSummary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.badges.map((badge, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                  {!isDesktop && <small className="text-gray-400 mt-2 block">Tap for details</small>}
                </div>

                {/* BACK */}
                <div className="flip-card-back bg-[#2626a0] p-6 rounded-2xl shadow-lg text-white">
                  <h4 className="font-semibold text-lg mb-2">Key Contributions</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.backDetails.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {!isDesktop && <small className="text-gray-300 mt-2 block">Tap to go back</small>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
