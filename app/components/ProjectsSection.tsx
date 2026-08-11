import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "DoNext",
    description:
      "An adaptive semester-planning platform that models courses, deadlines, commitments, goals, sleep, and availability to support dynamic scheduling.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    highlights: [
      "Built a planning model for courses, deadlines, commitments, goals, sleep, and availability",
      "Engineered a PDF, DOCX, and TXT ingestion pipeline that converts course documents into structured planning data",
      "Developed a FastAPI and PostgreSQL backend with user-scoped APIs and persistent planning data",
    ],
    image: "/DoNext.png",
    imageAlt: "DoNext semester setup screen showing a saved Fall 2026 academic window",
    status: null,
    links: [
      {
        label: "View Source",
        href: "https://github.com/NikhilDhillon/DoNext",
      },
    ],
  },
  {
    title: "GROWTH",
    description:
      "A live strength-analytics platform for workout logging, personal-record tracking, and long-term performance analysis.",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase"],
    highlights: [
      "Launched a live platform with 7 active users tracking workouts, PRs, and strength progression",
      "Developed a custom scoring engine combining estimated 1RM, training volume, and fatigue resistance",
      "Implemented Supabase authentication, persistent workout data, friend leaderboards, PR tracking, and progress visualizations",
    ],
    image: "/GROWTH.png",
    imageAlt: "GROWTH workout logging screen with exercise and working-set controls",
    status: null,
    links: [
      {
        label: "Visit Live App",
        href: "https://growth-lift-tracker.vercel.app",
      },
      {
        label: "View Source",
        href: "https://github.com/NikhilDhillon/GROWTH",
      },
    ],
  },
  {
    title: "Returnly",
    description:
      "A multi-sided returns and pickup platform with customer and driver mobile apps, an operations dashboard, and a production-oriented backend.",
    techStack: [
      "React Native",
      "Node.js",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
      "Stripe",
    ],
    highlights: [
      "Built separate customer and driver apps plus a React operations dashboard for end-to-end return pickup workflows",
      "Implemented real-time order updates, driver tracking, and chat with Socket.IO and Redis-backed coordination",
      "Integrated Stripe payments, PostgreSQL persistence, BullMQ background jobs, and S3-backed uploads",
    ],
    image: "/Returnly.jpg",
    imageAlt: "Returnly mobile application login screen",
    status: "Private Repository",
    links: [],
  },
  {
    title: "Wearlyze",
    description:
      "An AI-driven outfit recommendation platform that identifies clothing in user-uploaded images and retrieves visually similar retail products.",
    techStack: [
      "Python",
      "PyTorch",
      "Django",
      "Next.js",
      "DeepLabV3+",
      "EfficientNetV2",
    ],
    highlights: [
      "Fine-tuned DeepLabV3+ with a ResNet-101 backbone on DeepFashion2, achieving more than 85% mIoU for apparel segmentation",
      "Integrated EfficientNetV2 feature extraction to improve visual product-similarity matching",
      "Built modular APIs for image upload, segmentation, and retail-product retrieval",
    ],
    image: "/Wearlyze-3.png",
    imageAlt: "Wearlyze clothing detection and outfit recommendation interface",
    status: null,
    links: [
      {
        label: "View Source",
        href: "https://github.com/NishantSaiChalla/WEARLYZE",
      },
    ],
  },
] as const;

const otherProjects = [
  {
    title: "SpendLens",
    description:
      "A sandbox-first personal finance app that unifies accounts and transactions, analyzes monthly spending, supports category corrections, and includes a constrained read-only AI assistant.",
    techStack: ["TypeScript", "Cloudflare D1", "Plaid", "Vercel AI SDK"],
    sourceUrl: "https://github.com/NikhilDhillon/SpendLens",
    liveUrl: null,
  },
  {
    title: "Chat Room",
    description:
      "A real-time chat application with a Flask and Socket.IO backend and a responsive browser interface for instant conversations.",
    techStack: ["Python", "Flask", "Socket.IO", "JavaScript"],
    sourceUrl: "https://github.com/NikhilDhillon/Chat_Room",
    liveUrl: null,
  },
  {
    title: "Path Finder",
    description:
      "A Python maze solver that uses breadth-first search to find the shortest route from start to finish.",
    techStack: ["Python", "Breadth-First Search", "Algorithms"],
    sourceUrl: "https://github.com/NikhilDhillon/Path-Finder",
    liveUrl: null,
  },
  {
    title: "To-Do List",
    description:
      "A lightweight browser-based task manager built with vanilla web technologies.",
    techStack: ["HTML", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/NikhilDhillon/To-Do-List",
    liveUrl: null,
  },
] as const;

const ExternalLinkIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h4m0 0v4m0-4L10 14M8 7H7a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1"
    />
  </svg>
);

export const ProjectsSection = () => {
  return (
    <section id="work" className="scroll-mt-20 bg-black px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-5xl font-bold sm:mb-12">
          Selected Projects
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-lg border border-gray-800 bg-[#21262D]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="space-y-4 p-4 sm:space-y-6 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-bold text-glow-purple-600 sm:text-3xl">
                      {project.title}
                    </h3>
                    {project.status ? (
                      <span className="w-fit rounded-full border border-gray-600 bg-gray-800/70 px-4 py-2 text-sm font-medium text-gray-300">
                        {project.status}
                      </span>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition-colors hover:border-blue-400 hover:bg-blue-500/20 hover:text-white"
                          >
                            {link.label}
                            <ExternalLinkIcon />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-gray-700/50 bg-gray-800/50 px-3 py-1 text-xs text-gray-300 transition-colors duration-200 hover:border-blue-500 hover:bg-gray-700/50 hover:text-white sm:text-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
                      Highlights
                    </h4>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className={`object-cover ${
                      project.title === "DoNext"
                        ? "object-left !top-[6%] !h-[88%]"
                        : "object-center"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#21262D] via-transparent to-transparent lg:bg-gradient-to-r lg:via-[#21262D]/20 lg:to-[#21262D]/20" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-8 flex flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                More from GitHub
              </p>
              <h3 className="text-3xl font-bold sm:text-4xl">Other Projects</h3>
            </div>
            <a
              href="https://github.com/NikhilDhillon?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              View all repositories
              <ExternalLinkIcon />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-xl border border-gray-800 bg-[#161B22] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-[#1C2128]"
              >
                <h4 className="mb-3 text-xl font-bold text-white">
                  {project.title}
                </h4>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.techStack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-700 bg-gray-800/70 px-2.5 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 border-t border-gray-800 pt-4 text-sm font-medium">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-300 transition-colors hover:text-white"
                    >
                      Live Site
                      <ExternalLinkIcon />
                    </a>
                  ) : null}
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                  >
                    GitHub
                    <ExternalLinkIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
