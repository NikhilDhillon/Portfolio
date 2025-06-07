"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export const SkillsSection = () => {
  const [selectedStack, setSelectedStack] = useState<
    "frontend" | "backend" | "devops" | null
  >(null);
  return (
    <section className="py-12 sm:py-20 px-4 bg-black">
      <div className="w-full max-w-7xl mx-auto relative px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Frontend Layer */}
          <div
            className={`p-8 md:p-10 rounded-lg transition-colors border-2 ${
              selectedStack === "frontend"
                ? "bg-blue-500/20 border-blue-500/50"
                : "bg-black/50 hover:bg-black/80 border-transparent"
            }`}
            onMouseEnter={() => setSelectedStack("frontend")}
            onMouseLeave={() => setSelectedStack(null)}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-400">
              Frontend Development
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                Crafting responsive, user-friendly interfaces with React &
                Next.js
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                Writing clean, scalable code with TypeScript and modern
                JavaScript
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                Designing sleek UIs with advanced CSS (Flexbox, Grid, Tailwind)
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                Enhancing UX through smooth animations and micro-interactions
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                Optimizing frontend performance with SSR, lazy loading &
                code-splitting
              </li>
            </ul>
          </div>

          {/* Backend Layer */}
          <div
            className={`p-8 md:p-10 rounded-lg transition-colors border-2 ${
              selectedStack === "backend"
                ? "bg-purple-500/20 border-purple-500/50"
                : "bg-black/50 hover:bg-black/80 border-transparent"
            }`}
            onMouseEnter={() => setSelectedStack("backend")}
            onMouseLeave={() => setSelectedStack(null)}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-purple-400">
              Backend Development
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0" />
                Designing scalable, RESTful and GraphQL APIs with Node.js
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0" />
                Structuring efficient, normalized database schemas
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0" />
                Implementing real-time features with WebSockets and event-driven
                architecture
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0" />
                Writing secure, testable backend logic with clean code
                principles
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0" />
                Ensuring data integrity and performance through optimized
                queries and indexing
              </li>
            </ul>
          </div>

          {/* DevOps Layer */}
          <div
            className={`p-8 md:p-10 rounded-lg transition-colors border-2 ${
              selectedStack === "devops"
                ? "bg-teal-500/20 border-teal-500/50"
                : "bg-black/50 hover:bg-black/80 border-transparent"
            }`}
            onMouseEnter={() => setSelectedStack("devops")}
            onMouseLeave={() => setSelectedStack(null)}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-teal-400">
              DevOps & Cloud
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2.5 flex-shrink-0" />
                Deploying and managing cloud-native applications on AWS (EC2,
                S3, RDS, etc.)
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2.5 flex-shrink-0" />
                Building robust CI/CD pipelines for automated testing and
                deployment
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2.5 flex-shrink-0" />
                Containerizing applications using Docker for consistent
                environments
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2.5 flex-shrink-0" />
                Monitoring and logging with tools like CloudWatch and
                third-party solutions
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2.5 flex-shrink-0" />
                Designing scalable, fault-tolerant infrastructure for high
                availability
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* 
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              category: "Frontend Development",
              skills: [
                { name: "React & Next.js", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Modern CSS", level: 95 },
                { name: "Web Animation", level: 85 },
              ],
              icon: "🎨",
              color: "from-blue-500 to-blue-700",
            },
            {
              category: "Backend & APIs",
              skills: [
                { name: "Node.js", level: 90 },
                { name: "RESTful APIs", level: 95 },
                { name: "GraphQL", level: 85 },
                { name: "Database Design", level: 88 },
              ],
              icon: "⚡",
              color: "from-green-500 to-green-700",
            },
            {
              category: "Performance & DevOps",
              skills: [
                { name: "Web Performance", level: 92 },
                { name: "CI/CD", level: 88 },
                { name: "Docker", level: 85 },
                { name: "AWS", level: 82 },
              ],
              icon: "🚀",
              color: "from-purple-500 to-purple-700",
            },
          ].map((category) => (
            <div
              key={category.category}
              className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};
