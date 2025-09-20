import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Text & Tagline */}
        <div>
          <p className="text-center md:text-left text-sm">© {year} Shivam Kumar – SDET Portfolio</p>
          <p className="text-center text-gray-400 text-xs mt-1 md:mt-0">
            “Automating quality, one test at a time.”
          </p>
        </div>

        {/* Middle: Navigation Links */}
        <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm my-4 md:my-0">
          <li><a href="#about" className="hover:text-emerald-400 transition-colors duration-200">About</a></li>
          <li><a href="#skills" className="hover:text-emerald-400 transition-colors duration-200">Skills</a></li>
          <li><a href="#experience" className="hover:text-emerald-400 transition-colors duration-200">Experience</a></li>
          <li><a href="#projects" className="hover:text-emerald-400 transition-colors duration-200">Projects</a></li>
          <li><a href="#contact" className="hover:text-emerald-400 transition-colors duration-200">Contact</a></li>
        </ul>

        {/* Right: Social Icons & CTA */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110 hover:text-emerald-400">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110 hover:text-emerald-400">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110 hover:text-emerald-400">
              <FaTwitter size={20} />
            </a>
          </div>

          <button
            onClick={handleScrollToContact}
            className="mt-2 md:mt-0 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>
      </div>
    </footer>
  );
}
