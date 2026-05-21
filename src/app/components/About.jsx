"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "REST APIs",
  "Git",
  "Jest",
  "Shadcn UI",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 sm:py-20"
    >
      <div className="max-w-3xl w-full space-y-8 sm:space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl">✦</span>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              About Me
            </h2>
          </div>
          <div className="h-1 w-16 rounded-full bg-white"></div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            I'm a frontend developer with{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              5 years of coding experience
            </span>
            , a BS in Information Science and Technology from Temple University,
            and an Associate's degree in Computer Science from Bucks County
            Community College.
          </p>

          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            I build modern,{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              AI-powered web applications
            </span>{" "}
            and I'm currently looking for a junior frontend or web developer
            role where I can keep growing and shipping real products.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3
            className="text-sm uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 text-xs sm:text-sm rounded-full border bg-white/5 cursor-default"
                style={{
                  borderColor: "var(--muted)",
                  color: "var(--foreground)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Optional: Add a fun fact or current focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-4 border-t"
          style={{ borderColor: "var(--muted)" }}
        >
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm">
            <div>
              <p
                className="uppercase tracking-wide text-xs mb-1"
                style={{ color: "var(--muted)" }}
              >
                Currently
              </p>
              <p className="font-medium" style={{ color: "var(--foreground)" }}>
                Open to opportunities
              </p>
            </div>
            <div>
              <p
                className="uppercase tracking-wide text-xs mb-1"
                style={{ color: "var(--muted)" }}
              >
                Location
              </p>
              <p className="font-medium" style={{ color: "var(--foreground)" }}>
                Philadelphia, PA
              </p>
            </div>
            <div>
              <p
                className="uppercase tracking-wide text-xs mb-1"
                style={{ color: "var(--muted)" }}
              >
                Focus
              </p>
              <p className="font-medium" style={{ color: "var(--foreground)" }}>
                Full-stack Development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
