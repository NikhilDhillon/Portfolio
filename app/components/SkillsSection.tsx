"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    id: "systems",
    title: "Systems & Applications",
    titleClass: "text-blue-400",
    dotClass: "bg-blue-500",
    selectedClass: "border-blue-500/50 bg-blue-500/20",
    skills: [
      "C++, C#, C, Java, and Python",
      "Native Windows development with MFC",
      ".NET and Entity Framework Core",
      "CEF-powered HTML and SVG interfaces",
      "Performance analysis and resource-leak debugging",
    ],
  },
  {
    id: "web",
    title: "Web, Mobile & APIs",
    titleClass: "text-purple-400",
    dotClass: "bg-purple-500",
    selectedClass: "border-purple-500/50 bg-purple-500/20",
    skills: [
      "React, React Native, Next.js, and TypeScript",
      "Node.js, Express.js, FastAPI, and Django",
      "PHP, Laravel, Filament, and WordPress",
      "REST APIs and third-party integrations",
      "AI-powered product workflows with the OpenAI API",
    ],
  },
  {
    id: "data-cloud",
    title: "Data, Cloud & Delivery",
    titleClass: "text-teal-400",
    dotClass: "bg-teal-500",
    selectedClass: "border-teal-500/50 bg-teal-500/20",
    skills: [
      "PostgreSQL, SQLite, Supabase, and SQL",
      "Docker, Linux, Git, and CI/CD",
      "AWS, Microsoft Azure, and Google Cloud Platform",
      "TestRail, Bruno, Jira, and Confluence",
      "Agile, Scrum, testing, and collaborative delivery",
    ],
  },
] as const;

type SkillGroupId = (typeof skillGroups)[number]["id"];

export const SkillsSection = () => {
  const [selectedGroup, setSelectedGroup] = useState<SkillGroupId | null>(null);

  return (
    <section className="bg-black px-4 py-12 sm:py-20">
      <div className="relative mx-auto w-full max-w-7xl px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold">Technical Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className={`rounded-lg border-2 p-8 transition-colors md:p-10 ${
                selectedGroup === group.id
                  ? group.selectedClass
                  : "border-transparent bg-black/50 hover:bg-black/80"
              }`}
              onMouseEnter={() => setSelectedGroup(group.id)}
              onMouseLeave={() => setSelectedGroup(null)}
            >
              <h3
                className={`mb-4 text-xl font-semibold md:mb-6 md:text-2xl ${group.titleClass}`}
              >
                {group.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-400 md:space-y-3 md:text-base">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span
                      className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${group.dotClass}`}
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
