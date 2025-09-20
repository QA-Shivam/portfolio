import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LiquidLoader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/skills";
import Experience from "./components/Experience";



export default function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderFinish = () => {
    // Wait a tiny moment to let loader exit animation play smoothly
    setLoading(false);
    setTimeout(() => setShowContent(true), 100); // 0.1s delay
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Loader */}
      <AnimatePresence>
        {loading && <LiquidLoader fullScreen onFinish={handleLoaderFinish} />}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative z-0"
          >
            <Navbar />
            <Hero />
            <About />
            <Skills/>
            <Experience/>
            <Projects />
            <Contact />
            <Footer/>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
