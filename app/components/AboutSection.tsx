"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: "uvic-ta-2026",
    title: "Incoming Teaching Assistant",
    company: "University of Victoria",
    location: "Victoria, BC",
    dateRange: "September 2026 - December 2026",
    description: ["Incoming teaching assistant for Database Systems."],
    technologies: ["Database Systems"],
  },
  {
    id: "reliable-controls-developer-2026",
    title: "Software Developer Intern",
    company: "Reliable Controls",
    location: "Victoria, BC",
    dateRange: "January 2026 - August 2026",
    description: [
      "Reduced MFC GDI resource usage by approximately 75% during a critical workflow, eliminating native Windows resource leaks",
      "Built a C++/MFC connection-cancellation dialog that lets users immediately abort stalled connection attempts, eliminating 30-60 second timeout waits",
      "Built a CEF-powered HTML/SVG reporting system that generates high-resolution, print-ready controller I/O visualizations",
      "Prototyped an XML-to-SQLite configuration migration with Entity Framework Core, including schema migrations and data synchronization",
    ],
    technologies: [
      "C++",
      "MFC",
      "CEF",
      "HTML/SVG",
      "C#",
      ".NET",
      "EF Core",
      "SQLite",
    ],
  },
  {
    id: "one-nation-developer-2025",
    title: "Software Developer (Part-time)",
    company: "One Nation",
    location: "Remote (Vancouver, BC)",
    dateRange: "April 2025 - July 2025",
    description: [
      "Built a natural language-driven reporting pipeline with the OpenAI API and PostgreSQL, enabling custom insights in under 20 seconds",
      "Implemented a Laravel Filament password-reset workflow with token validation, expiration handling, and secure credential updates",
      "Developed custom WordPress plugins for third-party integrations and performance-tuned, client-specific functionality",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "Filament",
      "OpenAI",
      "PostgreSQL",
      "WordPress",
    ],
  },
  {
    id: "reliable-controls-qa-2024",
    title: "Software QA Analyst Intern",
    company: "Reliable Controls",
    location: "Victoria, BC",
    dateRange: "September 2024 - April 2025",
    description: [
      "Designed and optimized TestRail workflows while validating more than 100 functional and non-functional test cases",
      "Streamlined API and integration testing with Bruno, reducing API validation errors by 20%",
      "Reduced QA review-cycle time by 30% through workflow improvements and automation",
    ],
    technologies: ["TestRail", "Bruno", "API Testing", "Test Automation"],
  },
];

export const AboutSection = () => {
  return (
    <section className="bg-black px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                <span className="inline-block animate-bounce bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text py-1 text-5xl font-bold text-transparent">
                  Hey!
                </span>{" "}
                I&apos;m Nikhil Partap Singh Dhillon, a Computer Science Honours
                student at the University of Victoria graduating in April 2027.
                I build software across native Windows systems, full-stack web
                applications, mobile products, and backend services.
              </p>

              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                My recent work includes improving C++/MFC application
                performance, building print-ready reporting with CEF and SVG,
                prototyping .NET data migrations, and developing AI-powered
                reporting workflows. I&apos;m also building tools that turn complex
                planning and performance data into clear, useful decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Systems Development",
                  "Full-Stack Engineering",
                  "Performance Optimization",
                  "Applied AI",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute bottom-0 left-8 top-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500" />

              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <motion.article
                    key={experience.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-6 top-2 h-4 w-4 rounded-full border-4 border-black bg-blue-500 shadow-lg" />

                    <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600">
                      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="text-xl font-semibold text-white">
                          {experience.title}
                        </h3>
                        <span className="w-fit shrink-0 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
                          {experience.dateRange}
                        </span>
                      </div>
                      <p className="font-medium text-purple-400">
                        {experience.company}
                      </p>
                      <p className="mb-3 text-sm text-gray-500">
                        {experience.location}
                      </p>

                      <ul className="mb-4 space-y-2 text-sm leading-relaxed text-gray-400">
                        {experience.description.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-teal-500/30 bg-teal-500/20 px-3 py-1 text-xs font-medium text-teal-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
