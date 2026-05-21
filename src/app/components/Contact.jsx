"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 sm:py-20"
    >
      <div className="max-w-3xl w-full space-y-8 sm:space-y-10">
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
              Let's Connect
            </h2>
          </div>
          <div className="h-1 w-16 rounded-full bg-white"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          I'm currently seeking{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--foreground)" }}
          >
            junior frontend or web developer roles
          </span>
          . Feel free to reach out for opportunities or collaborations.
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Primary CTA */}
          <a
            href="mailto:neelp060@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-base font-semibold hover:scale-105 transition-transform"
          >
            <span>📧</span>
            neelp060@gmail.com
          </a>

          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "var(--muted)" }}
            >
              Find me on
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://github.com/Neel37389"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full border text-sm font-medium transition-all"
                style={{
                  borderColor: "var(--muted)",
                  color: "var(--foreground)",
                }}
              >
                GitHub →
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/neelpatel-dev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full border text-sm font-medium transition-all"
                style={{
                  borderColor: "var(--muted)",
                  color: "var(--foreground)",
                }}
              >
                LinkedIn →
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-6 border-t"
          style={{ borderColor: "var(--muted)" }}
        ></motion.div>
      </div>

      <footer className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © 2026 Neel Patel
          </p>
        </motion.div>
      </footer>
    </section>
  );
}
