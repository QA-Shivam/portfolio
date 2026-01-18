import React from "react";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

const experiences = [
  {
    role: "SDET Engineer",
    company: "AngelOne Limited",
    duration: "Mar 2024 - Present",
    description:
      "Developed and maintained automation frameworks, CI/CD pipelines, and end-to-end QA solutions.",
    achievements: [
      "Reduced regression testing time by 40% through automation framework optimization.",
      "Integrated CI/CD pipelines for faster deployments.",
      "Conduct manual and automation testing for web platform and mobile application (iOS, Android, and Mobile Web app), covering core customer journeys and trading functionalities.",
      "Design, develop, and maintain automation test cases and regression suites for end-to-end scenarios across web and mobile platforms.",
      "Maintain automation framework health: enhance existing frameworks, refactor poor code, and migrate Selenium-based web automation to Playwright for improved reliability and speed.",
      "Execute regression and E2E test suites, log defects, analyze test results, and prepare automation reports for release sign-offs.",
      "Handle complex testing challenges, reducing regression execution time and enabling faster release cycles.",
      "Integrate Grafana dashboards to monitor automation suite execution and performance metrics.",
      "Designed and implemented a Lighthouse-based performance automation framework to measure performance of all critical customer journeys (P0) web platform.",
      "Collaborate with development and QA teams to improve automation coverage, reduce flakiness, and enhance test efficiency.",
      "Leveraged MCP Server and Cursor AI to automatically generate test cases in plain English, improving automation coverage and accelerating test creation.",
      "Actively participate in Agile ceremonies and provide insights on release quality, testing risks, and framework improvements.",
      "Implemented auto-heal support in the automation framework using a local LLM to dynamically heal element locators at runtime, while keeping human validation in the loop to review and manage healed locators."
    ],
    icon: <img src="angelone.png" alt="AngelOne" />,
  },
  {
    role: "Software Quality Engineer",
    company: "Infosys Limited",
    duration: "Mar 2022 - Feb 2024",
    description:
      "Automated regression and API tests using Selenium, Playwright, and RestAssured.",
    achievements: [
      "Contributed as a Manual and Automation Tester across Enterprise Mobility (Android/iOS), IoT Analytics, Enterprise Software, Finance, and Cloud Infrastructure domains.",
      "Developed and maintained robust automated functional test suites using Python-based Robot Framework, ensuring coverage of both positive and negative scenarios.",
      "Automated functional test cases in Java using a Selenium-based hybrid framework with WebDriver and TestNG.",
      "Designed and contributed to a Java–Appium mobile automation framework from scratch, including tool evaluation, effort estimation, risk analysis, and ongoing maintenance.",
      "Performed manual and automation testing for mobile and web applications, including cross-platform, cross-browser, compatibility, and integration testing.",
      "Conducted API testing and maintained API automation suites using Postman, improving overall test coverage and reliability.",
      "Analyzed business and technical requirements to define test conditions, prepare accurate test data, and develop reliable test scripts.",
      "Executed functional and non-functional testing, managing defect identification, tracking, reporting, and resolution in collaboration with development teams.",
      "Actively supported automation initiatives by enhancing test frameworks to improve efficiency, stability, and execution reliability.",
      "Collaborated proactively with cross-functional teams to review requirements, validate planned tasks, and ensure timely and high-quality deliveries.",
      "Participated in Agile ceremonies including sprint planning, backlog refinement, retrospectives, and delivered release demos to stakeholders.",
      "Analyzed test results, troubleshot failures, and worked closely with developers to ensure effective defect resolution and continuous quality improvement."

    ],
    icon: <img src="infosys.png" alt="Infosys" />,
  },
  {
    role: "Web Development Intern",
    company: "The Sparks Foundation",
    duration: "Jan 2022 - Apr 2022",
    description:
      "Wrote well-designed, testable, and efficient code following best software development practices. Created website layouts and user interfaces using HTML, CSS, and JavaScript. Recommended improvements to new and existing web pages, layouts, and templates.",
    achievements: [
      "As an intern developed responsive and interactive web pages layouts using HTML, CSS, JavaScript, and PHP.",
      " Followed project requirements, coding standards, and timelines to deliver functional and responsive web pages.",
      "Optimized website layouts for better user experience and accessibility."
    ],
    icon: <img src="spark.png" alt="spark" />,
  },
];

export default function Experience() {
  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="experience-section py-20 px-6 relative">
      <h2 className="experience-title text-center">
        <span className="relative inline-block">
          Experience
          <motion.span
            className="experience-title-underline absolute left-0 bottom-0 h-[4px] w-full bg-[#10b981] rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "left" }}
          />
        </span>
      </h2>

      <div className="relative max-w-5xl mx-auto mt-12">
        {/* Vertical timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 w-1 bg-[#10b981] h-full transform -translate-x-1/2"
        />

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className={`relative flex w-full ${i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
            >
              {/* Card */}
              <div className="experience-card w-full md:w-9/12 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-3 gap-3 text-[#10b981] text-xl">
                  <span className="company-icon-wrapper">{exp.icon}</span>
                  <h3 className="text-xl md:text-xl font-semibold">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-gray-500 dark:text-gray-400 text-sm subtitle">
                  <FiCalendar className="text-[#10b981] flex-shrink-0" />
                  <span className="break-words">
                    {exp.company} • {exp.duration}
                  </span>
                </div>


                <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                  {exp.description}
                </p>

                <motion.ul
                  className="mt-4 space-y-2 text-gray-700 dark:text-gray-300"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {exp.achievements.map((item, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-2"
                    >
                      <FiCheckCircle
                        className="text-emerald-500 mt-1 shrink-0 w-4 h-4 sm:w-[14px] sm:h-[14px]"
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Timeline Dot */}
              <motion.span
                className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#10b981] rounded-full shadow-md"
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              ></motion.span>
            </motion.div>
          ))}
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
