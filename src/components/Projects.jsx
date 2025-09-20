import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import "../index.css";

const projectsData = [
  {
    id: 1,
    title: "SeleniumNG_Framework",
    subtitle: "Dockerized Selenium TestNG Framework",
    description:
      "End-to-end automation testing with Docker and CI/CD, built as part of a Udemy course. Enables fast, scalable, and repeatable test execution using containerized infrastructure and continuous integration workflows.",
    tags: ["Selenium", "Java", "Jenkins", "Docker"],
    repo: "https://github.com/QA-Shivam/SeleniumNG_Framework.git",
  },
  {
    id: 2,
    title: "SlackTaskAutomation",
    subtitle: "Slack Bot Team Task Automation",
    description:
      "Automated weekday Slack bot that posts team tasks from a shared Google Sheet, keeping members and managers instantly updated.",
    tags: ["Python", "Pandas", "OpenPyXL", "Slack SDK"],
    repo: "https://github.com/QA-Shivam/-SlackDailyTaskAutomation.git",
  },
  {
    id: 3,
    title: "chaintest-testng",
    subtitle: "Chaintest Integration with TestNG",
    description:
      "Integrated ChainTest Reports with TestNG to generate detailed execution reports, enabling comprehensive analysis and visualization of Selenium test results.",
    tags: ["Chain Test", "Docker", "TestNG"],
    repo: "https://github.com/QA-Shivam/chaintest-testng.git",
  },
  {
    id: 4,
    title: "Rest_API_Framework",
    subtitle: "API Testing + TestNG Reporting",
    description:
      "A Java-based BDD framework using Cucumber and RestAssured for automating API tests, integrated with TestNG for generating detailed test reports.",
    tags: ["Java", "RestAssured", "TestNG", "Cucumber"],
    repo: "https://github.com/QA-Shivam/RestAssured_API_Framework.git",
  },
  {
    id: 5,
    title: "allure-custom-report",
    subtitle: "Allure Single-File Custom Report Generator",
    description:
      "Generates a fully customized, single static Allure report with features like a custom logo, favicon, celebration animation, custom title, and footer. Automatically opens in the browser after test execution.",
    tags: ["HTML", "JavaScript", "Allure Report"],
    repo: "https://github.com/QA-Shivam/allure-custom-report.git",
  },
  {
    id: 6,
    title: "qa-knowledge-chatbot",
    subtitle: "AI Powered ChatBot",
    description:
      "An AI-powered chatbot tailored for QA professionals with interview prep and automation problem solving.",
    tags: ["Python", "LangChain", "LLM", "Streamlit"],
    repo: "#",
  },
];

const certsData = [
  {
    id: 1,
    title: "Rest API Testing with RestAssured",
    issuer: "Udemy",
    year: 2025,
    badge: "cert1.jpg",
    link: "https://www.udemy.com/certificate/UC-247e63a5-4bdc-4c25-8c18-822a9db7c32c/",
  },
  {
    id: 2,
    title: "Automation Testing with Docker and CI/CD",
    issuer: "Udemy",
    year: 2025,
    badge: "cert2.jpg",
    link: "https://www.udemy.com/certificate/UC-b0deb047-5cd5-4df9-8b4d-56d0f67772e0/",
  },
  {
    id: 3,
    title: "Selenium 101 Certification",
    issuer: "LambdaTest",
    year: 2025,
    badge: "cert3.png",
    link: "https://www.lambdatest.com/certifications/lambdatest-certified/S101-8ZB1ML.png",
  },
  {
    id: 4,
    title: "Selenium 101 Certification",
    issuer: "LambdaTest",
    year: 2025,
    badge: "/certs/selenium.png",
    link: "https://www.lambdatest.com/certifications/lambdatest-certified/S101-8ZB1ML.png",
  },
  {
    id: 5,
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    year: 2023,
    badge: "cert4.svg",
    link: "https://learn.microsoft.com/api/credentials/share/en-gb/ShivamKumar-1554/B6736E5293F247FF?sharingId=6CD55A3419016898",
  },
  {
    id: 6,
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    year: 2023,
    badge: "cert5.png",
    link: "https://drive.google.com/file/d/15IlpwUqIsKuNqmLIduZd2fmfa0LXD1Fo/view?usp=drive_link",
  },
];

export default function ProjectsAndCertifications() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projectsData.length));
  };

  const { ref: projectUnderlineRef, inView: projectUnderlineInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: certUnderlineRef, inView: certUnderlineInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Projects Header */}
        <div className="text-center">
          <h2 className="projects-section-heading">
            Projects
            <motion.span
              ref={projectUnderlineRef}
              className="project-section-underline"
              style={{ transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: projectUnderlineInView ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </h2>
          <p className="project-subtitle">
            Selected projects and case-studies showing architecture, automation and outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projectsData.slice(0, visibleCount).map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="project-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-subtitle">{p.subtitle}</p>
                </div>
                <div className="project-id">#{p.id}</div>
              </div>
              <p className="project-description">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={p.repo && p.repo !== "#" ? p.repo : undefined}
                  target={p.repo && p.repo !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`btn-repo flex items-center gap-2 ${
                    !p.repo || p.repo === "#" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={(e) => {
                    if (!p.repo || p.repo === "#") e.preventDefault();
                  }}
                >
                  <FaGithub size={16} /> GitHub Repo
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < projectsData.length && (
          <div className="flex justify-center mt-8">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleLoadMore}
              className="btn-viewall"
            >
              View All Projects <FiArrowRight />
            </motion.button>
          </div>
        )}

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="projects-section-heading">
            Certifications
            <motion.span
              ref={certUnderlineRef}
              className="cert-section-underline"
              style={{ transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: certUnderlineInView ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </h3>
          <p className="project-subtitle">Professional certifications — click badges to view.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certsData.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="cert-card"
              >
                <div className="cert-img">
                  <img src={c.badge} alt={`${c.title} badge`} />
                </div>
                <div className="flex flex-col items-center mt-2">
                  <h4 className="cert-title">{c.title}</h4>
                  <p className="cert-meta">
                    {c.issuer} • {c.year}
                  </p>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link mt-2 flex items-center gap-1"
                  >
                    View <FiExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
