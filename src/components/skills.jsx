import React, { useEffect, useState } from "react";
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { SiSelenium, SiPlaywright, SiPostman, SiMicrosoftazure, SiGrafana, SiJenkins } from "react-icons/si";
import { motion, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.css";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-500 text-2xl" />, level: 90 },
  { name: "Python", icon: <FaPython className="text-blue-500 text-2xl" />, level: 80 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-2xl" />, level: 85 },
  { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" />, level: 70 },
  { name: "MySQL", icon: <FaDatabase className="text-blue-400 text-2xl" />, level: 80 },
  { name: "Selenium", icon: <SiSelenium className="text-green-500 text-2xl" />, level: 90 },
  { name: "Playwright", icon: <SiPlaywright className="text-green-400 text-2xl" />, level: 85 },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-2xl" />, level: 80 },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032] text-2xl" />, level: 85 },
  { name: "Jenkins", icon: <SiJenkins className="text-[#D33833] text-2xl" />, level: 85 },
  { name: "Appium", icon: <img src="appium.svg" alt="Appium" className="w-6 h-6" />, level: 80, },
  { name: "Docker", icon: <FaDocker className="text-blue-500 text-2xl" />, level: 85 },
  { name: "Grafana", icon: <SiGrafana className="text-[#F46800] text-2xl" />, level: 85 },
  { name: "Azure", icon: <SiMicrosoftazure className="text-[#0078D4] text-2xl" />, level: 85 }

];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Title + Underline */}
      <h2 className="skills-title text-center">
        <span className="relative inline-block">
          My <span className="highlight">Skills</span>
          <motion.span
            className="skills-title-underline absolute left-0 bottom-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "left" }}
          />
        </span>
      </h2>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} delay={index * 0.08} />
        ))}
      </div>

      <motion.div
        className="scroll-indicator absolute bottom-6 left-1/2 transform -translate-x-1/2"
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

function SkillCard({ skill, delay }) {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });

  useEffect(() => {
    let controls;
    if (inView) {
      controls = animate(0, skill.level, {
        duration: 1.5,
        ease: "easeInOut",
        onUpdate: (v) => setProgress(Math.round(v)),
      });
    } else {
      setProgress(0); // reset when out of view
    }
    return () => controls && controls.stop();
  }, [inView, skill.level]);

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="skill-icon">{skill.icon}</div>

      {/* Circular Progress */}
      <div className="circle-progress">
        <svg className="progress-ring" viewBox="0 0 120 120">
          <circle className="progress-ring-bg" cx="60" cy="60" r="54" />
          <motion.circle
            className="progress-ring-fill"
            cx="60"
            cy="60"
            r="54"
            strokeDasharray={2 * Math.PI * 54}
            strokeDashoffset={2 * Math.PI * 54 * (1 - progress / 100)}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </svg>
        <span className="progress-text">{progress}%</span>
      </div>

      <p className="text-sm text-gray-300">{skill.name}</p>
    </motion.div>
  );
}
