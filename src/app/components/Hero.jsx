"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-semibold tracking-tight text-white"
        >
          Neel Patel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-(--muted)]"
        >
          Frontend developer focused on building AI-powered web applications
          with clean UI and real-world functionality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#project"
            className="px-6 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-(--muted)] text-(--muted)] text-sm font-medium hover:border-white hover:text-white hover:bg-(--muted) transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
