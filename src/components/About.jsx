import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  Briefcase, Award, Wrench, FolderGit2  // ✅ Lucide icons
} from "lucide-react";
import "../index.css";

export default function About() {
  const stats = [
    { title: "Projects", value: 15, suffix: "+", icon: <FolderGit2 size={18} className="stat-icon" /> },
    { title: "Years Exp.", value: 3, suffix: "+", icon: <Briefcase size={18} className="stat-icon" /> },
    { title: "Certifications", value: 8, suffix: "+", icon: <Award size={18} className="stat-icon" /> },
    { title: "Tools", value: 12, suffix: "+", icon: <Wrench size={18} className="stat-icon" /> },
  ];

  const tags = ["#Selenium", "#Playwright", "#Java", "#TestNG", "#APITesting", "#CI/CD", "#Maven", "#SQL"];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* LEFT - Profile + Buttons + Socials */}
        <motion.div
          className="about-left w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-image w-48 h-48 sm:w-56 sm:h-56">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          <div className="hero-buttons mt-4 flex gap-4">
            <a href="#contact" className="primary">Hire Me</a>
            <a href="#projects" className="secondary">My Work</a>
          </div>

          {/* Desktop Socials */}
          <div className="about-socials mt-4 flex gap-4 hidden md:flex">
            <a className="social-btn github" href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a className="social-btn linkedin" href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a className="social-btn leetcode" href="https://leetcode.com/yourleetcode" target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </a>
          </div>
        </motion.div>

        {/* RIGHT - About Content */}
        <motion.div
          className="about-content w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title hero-title">
            About  <span className="highlight">Me</span>
            <motion.span
              className="about-underline"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
            />
          </h2>

          <p className="about-description hero-subtitle mt-4">
            I am a passionate <span className="highlight">SDET</span> with
            <strong> 3+ years of professional experience</strong> in automation testing,
            web development, and quality engineering. Currently, I work at
            <span className="highlight"> Angel One</span> focusing on ensuring product quality,
            streamlining test automation processes, and collaborating with cross-functional teams
            to deliver high-quality software.
          </p>

          <p className="about-quote mt-4">
            "My goal is to blend technical expertise with creativity to deliver reliable
            solutions that drive excellence in software delivery."
          </p>

          {/* Stats with Counter Animation */}
          <div className="about-stats">
            {stats.map((stat, i) => (
              <CounterCard key={i} stat={stat} delay={i * 0.3} />
            ))}
          </div>

          {/* Tags */}
          <motion.div
            className="about-tags"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {tags.map((tag) => (
              <span key={tag} className="about-tag">{tag}</span>
            ))}
          </motion.div>

          {/* Mobile Socials */}
          <div className="about-socials mt-6 flex gap-4 justify-center md:hidden">
            <a className="social-btn github" href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a className="social-btn linkedin" href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a className="social-btn leetcode" href="https://leetcode.com/yourleetcode" target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2"
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

/* Counter Component */
function CounterCard({ stat, delay = 0 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    let animation;
    if (inView) {
      animation = animate(0, stat.value, {
        duration: 1.8,
        ease: [0.42, 0, 0.58, 1],
        onUpdate(value) {
          setCount(Math.round(value));
        },
      });
    } else {
      setCount(0);
    }
    return () => {
      if (animation && typeof animation.stop === "function") animation.stop();
    };
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="about-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="stat-badge">{stat.icon}</div>
      <motion.h3 className="text-3xl font-bold text-emerald-400">
        {count}{stat.suffix}
      </motion.h3>
      <p className="text-sm text-gray-300">{stat.title}</p>
    </motion.div>
  );
}
