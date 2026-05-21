"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Animated greeting */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="text-3xl sm:text-4xl">👋</span>
          <p
            className="text-sm sm:text-base tracking-wide"
            style={{ color: "var(--muted)" }}
          >
            Hey, I'm
          </p>
        </motion.div>

        {/* Name with underline effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          Neel Patel
          <div className="h-1 w-24 bg-white mt-4 rounded-full"></div>
        </motion.h1>

        {/* Description with highlighted words */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          Frontend developer focused on building{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--foreground)" }}
          >
            AI-powered web applications
          </span>{" "}
          with clean UI and real-world functionality.
        </motion.p>

        {/* Stats or highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-6 sm:gap-8 text-sm"
          style={{ color: "var(--muted)" }}
        >
          <div>
            <p
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              2+
            </p>
            <p>Projects Built</p>
          </div>
          <div>
            <p
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              5+
            </p>
            <p>Technologies</p>
          </div>
          <div>
            <p
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              100%
            </p>
            <p>Passion</p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <a
            href="#project"
            className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform text-center"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border text-sm font-medium hover:scale-105 transition-transform text-center"
            style={{
              borderColor: "var(--muted)",
              color: "var(--foreground)",
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              Scroll to explore
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 border-2 rounded-full flex items-start justify-center p-1"
              style={{ borderColor: "var(--muted)" }}
            >
              <div
                className="w-1 h-2 rounded-full"
                style={{ backgroundColor: "var(--foreground)" }}
              ></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
