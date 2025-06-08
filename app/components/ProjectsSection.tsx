import React from "react";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section id="work" className="py-12 sm:py-20 px-4 bg-black scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">
          Projects
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: "Returnly",
              description:
                "A cross-platform full-stack application with a React Native front-end and a Node.js/Express back-end",
              techStack: [
                "React Native",
                "Node.js",
                "Express",
                "Redis",
                "Stripe",
                "Passport.js",
                "OAuth",
              ],
              metrics: {
                // performance: 98,
                // accessibility: 100,
                // seo: 100,
              },
              techDetails: [
                "Optimized API performance by 30% via query restructuring, Nginx load balancing, and Redis caching",
                "Integrated Stripe for secure payments, supporting card management and real-time transactions",
                "Implemented secure authentication using Passport.js with JWT and OAuth, reducing login failures by 50%",
                "Engineered real-time driver tracking with GPS, live updates, and route optimization, improving delivery accuracy by 20%",
              ],
              image: "/Returnly.jpg",
            },
            {
              title: "Wearlyze",
              description:
                "An AI-driven outfit recommendation platform that identifies clothing items in user-uploaded images and retrieves matching retail products from an ever-updating database",
              techStack: [
                "Python",
                "PyTorch",
                "Django",
                "Next.js",
                "DeepLabV3+",
                "ResNet-101",
                "EfficientNetV2",
              ],
              metrics: {
                // performance: 95,
                // accessibility: 98,
                // seo: 100,
              },
              techDetails: [
                "Achieved 85%+ mIoU by fine-tuning DeepLabV3+ (ResNet-101) on DeepFashion2 for apparel segmentation",
                "Integrated EfficientNetV2 for visual feature extraction to improve product similarity matching",
                "Developed image preprocessing and filtering pipelines to enhance model accuracy and inference speed",
                "Designed modular APIs for image upload, segmentation, and product retrieval",
              ],
              image: "/Wearlyze-3.png",
            },
            {
              title: "Budget Buddy",
              description:
                "An automated web scraping application in Python operating the BeautifulSoup library to extract product information from Amazon",
              techStack: ["Python", "Selenium", "BeautifulSoup4", "SMTP"],
              metrics: {
                // performance: 95,
                // accessibility: 98,
                // seo: 100,
              },
              techDetails: [
                "BeautifulSoup to extract product data from Amazon.ca",
                "Automated price tracking with scheduled checks and email alerts based on user-defined budgets",
                "Enabled real-time deal monitoring by sending up to 15 weekly notifications when price targets are met",
              ],
              image: "/Budget-Buddy2.png",
            },
            {
              title: "Full Stack Chat App",
              description:
                "A real-time chat application with Flask-SocketIO, featuring user authentication, low-latency messaging, and dynamic room management",
              techStack: [
                "Python",
                "Flask",
                "SocketIO",
                "HTML",
                "CSS",
                "JavaScript",
              ],
              metrics: {
                // performance: 95,
                // accessibility: 98,
                // seo: 100,
              },
              techDetails: [
                "Real-time chat app with Flask-SocketIO, maintaining sub-200ms message latency",
                "	Implemented secure user authentication and session handling for 30+ concurrent users",
                "Developed dynamic room management supporting 25+ unique chat rooms",
              ],
              image: "/ChatRoom.png",
            },
            {
              title: "To Do List",
              description:
                "A fun and responsive to-do list web app using vanilla HTML, CSS, and JavaScript",
              techStack: ["HTML", "CSS", "JavaScript"],
              metrics: {
                // performance: 95,
                // accessibility: 98,
                // seo: 100,
              },
              techDetails: [
                "Minimalist UI focused on ease of use and distraction-free task management",
                "Applied modular JavaScript structure for maintainability and scalability",
                "Designed custom checkbox animations and subtle hover effects to enhance interactivity.",
              ],
              image: "/To-do.png",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-[#21262D] rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <h3 className="text-xl text-glow-purple-600 sm:text-3xl font-bold">
                    {project.title}
                  </h3>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs sm:text-sm bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 hover:bg-gray-700/50 hover:border-blue-500 hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-gray-400">
                    {project.description}
                  </p>

                  {/* Performance Metrics */}
                  {/* <div className="space-y-3"> */}
                  {/* <h4 className="text-base sm:text-lg font-semibold"> */}
                  {/* Performance Metrics */}
                  {/* </h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-400">
                            {value}
                          </div>
                          <div className="text-sm text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}

                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover rounded-lg 
                      ${
                        project.title === "Wearlyze"
                          ? "object-[20%_center]"
                          : ""
                      }
                    ${
                      project.title === "Budget Buddy"
                        ? "object-[10%_center]"
                        : ""
                    }
                        ${
                          project.title === "Full Stack Chat App"
                            ? "object-[10%_center]"
                            : ""
                        }`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
