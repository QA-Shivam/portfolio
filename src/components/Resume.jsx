import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-6">Resume</h2>
      <div className="text-center">
        {/* TODO: Replace resume.pdf with your actual resume */}
        <a href="/resume.pdf" download className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:scale-105 transition">
          <FaDownload className="mr-2" /> Download Resume
        </a>
      </div>
    </section>
  );
}
