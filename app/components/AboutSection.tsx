"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const experiences = [
    {
      year: "2024",
      title: "Junior Software Developer",
      company: "One Nation",
      dateRange: "March 2025 - July 2025",
      description: [
        "Built an AI-powered reporting module in Laravel to generate dynamic, natural language-based reports from a PostgreSQL database",
        "Designed and implemented a secure, user-friendly password reset workflow using Filament and Laravel",
        "Optimized application performance by asynchronously dispatching intensive tasks via Laravel Jobs and Queues, significantly reducing page response times by 100x",
      ],
      technologies: ["PHP", "Laravel", "Filament", "OpenAI", "AWS"],
    },
    {
      year: "2022",
      title: "Software QA Analyst",
      company: "Reliable Controls",
      dateRange: "Sept 2024 - April 2025",
      description: [
        "Built end-to-end and regression test frameworks with Playwright, cutting manual testing by 30% and covering 40% of core workflows",
        "Improved API testing reliability using Postman, reducing validation errors and ensuring spec adherence",
        "Cut QA review cycle time by 40% and boosted sprint velocity by 15% through test automation and process optimization",
      ],
      technologies: ["TestRail", "Postman", "Javascript", "PostgreSQL"],
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Centered About Me Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-5xl lg:text-5xl font-bold">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          {/* About Me Text - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-bounce inline-block py-1">
                  Hey!
                </span>{" "}
                I’m Nikhil Partap Singh Dhillon, a Computer Science Honours
                student at the University of Victoria with a strong passion for
                full-stack development and building practical, impactful
                software. I’m experienced with a wide range of technologies
                including Laravel, React Native, React.js, Node.js, Express,
                PostgreSQL, Sequelize, AWS, Redis, Tailwind CSS, and Playwright.
                I enjoy working on both the frontend and backend, and I’m
                particularly interested in performance optimization, automation,
                and integrating AI into real-world applications.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Outside of coding, I’m big on fitness — you’ll often find me at
                the gym pushing my limits. I also love unwinding with a good TV
                show or getting lost in side projects that let me experiment
                with new tools and frameworks. For me, development is as much
                about creativity and curiosity as it is about problem-solving.
                I’m always eager to take on new challenges, collaborate with
                others, and build things that are both fun and functional.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Problem Solving",
                  "Teamwork",
                  "Innovation",
                  "Fitness Enthusiast",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-2 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500"></div>

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black shadow-lg"></div>{" "}
                    {/* Content */}
                    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h4>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                          {exp.dateRange}
                        </span>
                      </div>
                      <p className="text-purple-400 font-medium mb-3">
                        {exp.company}
                      </p>
                      <ul className="text-gray-400 text-sm mb-4 leading-relaxed space-y-1">
                        {exp.description.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-md text-xs font-medium border border-teal-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
