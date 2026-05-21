"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AI News Dashboard",
    year: "2026",
    shortDescription: "Full stack news aggregator with AI",
    description:
      "A full stack news aggregator with AI powered search, saved articles, and user authentication.",
    tags: [
      "Next.js",
      "Supabase",
      "Tailwind",
      "REST API",
      "Shadcn UI",
      "Jest",
      "News API",
      "OpenAI API",
    ],
    image: "/ai-news-dashboard.png",
    liveUrl: "https://ai-news-intelligence-dashboard.vercel.app",
    githubUrl:
      "https://github.com/Neel37389/ai-news-intelligence-dashboard.git",
  },
  {
    id: 2,
    title: "GitHub Analyzer",
    year: "2026",
    shortDescription: "AI powered repository analyzer",
    description:
      "An AI powered tool that scores and gives improvement points on all your GitHub repositories.",
    tags: ["React.js", "Tailwind", "OpenAI API", "GitHub API"],
    image: "/github-analyzer.png",
    liveUrl: "https://ai-resume-builder-five-nu.vercel.app",
    githubUrl: "https://github.com/Neel37389/AI-Resume-Builder.git",
  },
];

export default function Projects() {
  const scrollToProject = (id) => {
    const element = document.getElementById(`project-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="project"
      className="min-h-screen flex flex-col px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-6xl w-full mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="text-xl sm:text-2xl">✦</span>
            <h2
              className="text-xs sm:text-sm uppercase tracking-widest"
              style={{ color: "var(--foreground)" }}
            >
              Selected Works
            </h2>
          </div>

          {/* Horizontal Project List */}
          <div className="flex gap-6 sm:gap-8 flex-wrap">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => scrollToProject(project.id)}
                className="text-left group cursor-pointer"
              >
                <div className="space-y-0.5">
                  <p
                    className="text-[10px] sm:text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    {project.year}
                  </p>
                  <h3
                    className="text-sm sm:text-base font-semibold group-hover:opacity-70 transition-opacity"
                    style={{ color: "var(--foreground)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[10px] sm:text-xs max-w-[180px] sm:max-w-[200px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {project.shortDescription}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-xl overflow-hidden border border-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-3 sm:space-y-4">
                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full border bg-white/5"
                      style={{
                        borderColor: "var(--muted)",
                        color: "var(--foreground)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-colors text-center"
                  >
                    View Project →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2 sm:py-3 rounded-full border text-xs sm:text-sm font-medium transition-colors text-center"
                    style={{
                      borderColor: "var(--muted)",
                      color: "var(--foreground)",
                    }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
