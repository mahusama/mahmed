'use client'

import { useState } from "react";
import { useEffect } from "react";
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const experiences = [
  {
    role: 'Full-Stack Engineer',
    company: 'MAXSOFT',
    location: 'Islamabad / Dubai',
    frontSummary: "C# .NET · SQL Server · Data Engineering",
    period: 'Oct 2020 – Jan 2025',
    backDetails: [
      'Enhanced and modernized healthcare lab reporting systems using C#, .NET, and SQL Server',
      'Reverse-engineered legacy stored procedures to extract business logic and improve scalability',
      'Built Python-based ETL pipelines using Pandas for healthcare data processing',
    ],
  },
  {
    role: 'Lead Software Development Engineer (Volunteer)',
    company: 'Unify Giving',
    location: 'London, UK',
    frontSummary: "Frontend · API Integration · User Research",
    period: 'Jan 2025 – Jun 2025',
    backDetails: [
      'Led frontend development and coordinated API integrations with backend engineers',
      'Gathered user requirements and documented workflows',
      'Improved analytics-driven UI flows',
    ],
  },
  {
    role: 'Legacy Promotions Assistant',
    company: 'Macmillan Cancer Support',
    location: 'London, UK',
    frontSummary: "CRM Management · Event Support · Data Analysis",
    period: 'May 2025 – Dec 2025',
    backDetails: [
      'Managed CRM data to support organisational growth',
      'Delivered Power BI insights for events',
      'Led event execution and team collaboration',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Secure Finance Services',
    location: 'Norwest, Australia',
    frontSummary: "Frontend · Analytics · Dashboards",
    period: 'Jan 2023 – Dec 2023',
    backDetails: [
      'Built responsive financial web applications',
      'Created interactive dashboards with real-time analytics',
      'Translated financial metrics into actionable insights',
    ],
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
    <section className="experience-section bg-[#0f1042]">
      <h2 className="section-title text-white">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div
              className={`flip-card ${isDesktop ? "hover-flip" : ""}`}
              onClick={() => {
                if (!isDesktop) {
                  setFlippedIndex(flippedIndex === index ? null : index);
                }
              }}
            >
              <div
                className={`flip-card-inner ${
                  !isDesktop && flippedIndex === index ? "flipped" : ""
                }`}
              >

                {/* FRONT */}
                <div className="flip-card-front">
                  <h3>{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                  <p className="summary">{exp.frontSummary}</p>
                  {!isDesktop && <small>Tap for details</small>}
                </div>

                {/* BACK */}
                <div className="flip-card-back">
                  <h4>Key Contributions</h4>
                  <ul>
                    {exp.backDetails.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {!isDesktop && <small>Tap to go back</small>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
