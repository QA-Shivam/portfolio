import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "../index.css";

export default function Hero() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Create 50 random bubbles
  const bubbles = Array.from({ length: 50 }).map((_, i) => {
    const size = Math.random() * 8 + 4; // 4px - 12px
    const left = Math.random() * 100; // %
    const duration = Math.random() * 20 + 10; // 10s - 30s
    const delay = Math.random() * 10; // stagger start
    return { id: i, size, left, duration, delay };
  });

  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      {/* Realistic Green Bubbles */}
      <div className="bubble-container">
        {bubbles.map((b) => (
          <span
            key={b.id}
            className="bubble"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 relative z-10">
        {/* LEFT: Text */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-6 self-center"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="hero-title">
            <h1>Hi, I’m <span>Shivam Kumar👋</span></h1>
          </div>
          <p className="hero-tagline">
            Automation QA | SDET | DevOps Enthusiast
          </p>
          <p className="hero-subtitle">
            <Typewriter
              words={[
                "Building automation frameworks 🖥️",
                "Creating CI/CD pipelines ⚡",
                "Designing scalable QA solutions ✅",
                "Turning vision into reality 🎯",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={1200}
            />
          </p>

          <div className="hero-buttons flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-2">
            <a href="/Shivam_Kumar_CV.pdf" download className="primary">
              Download CV
            </a>
            <a href="#projects" className="secondary">
              View Work
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Profile Image */}
        <motion.div
          className="w-full flex justify-center md:justify-end self-center"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative">
            <div className="hero-image w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <img src="profile.jpeg" alt="Shivam Kumar" />
            </div>
            {/* Glowing Ring Animation */}
            <div className="absolute inset-0 rounded-full border-4 border-emerald-500 animate-pulse opacity-60"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator-hero absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="w-6 h-10 border-2 border-emerald-500 rounded-full flex items-start justify-center p-1">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></span>
        </span>
      </motion.div>
    </section>
  );
}
