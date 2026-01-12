import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScrollToContact = () => {
    const isMobile = window.innerWidth < 768; // Tailwind md breakpoint
    const sectionId = isMobile ? "form" : "contact";
    const section = document.getElementById(sectionId);

    if (section) {
      const navbarHeight = 64; // adjust to your navbar height in px
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full relative bg-[#e5e7ebe6] text-gray-700 dark:bg-[#1f2937d9] dark:text-gray-400 shadow-sm">
      <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-8 px-4">
        {/* Left: Text & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm">© {year} Shivam Kumar – SDET</p>
          <p className="text-xs italic text-gray-500 dark:text-gray-400">
            “Automating quality, one test at a time.”
          </p>

        </div>

        {/* Middle: Navigation Links */}
        <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
          <li><a href="#about" className="hover:text-emerald-500 transition-colors duration-200">About</a></li>
          <li><a href="#skills" className="hover:text-emerald-500 transition-colors duration-200">Skills</a></li>
          <li><a href="#experience" className="hover:text-emerald-500 transition-colors duration-200">Experience</a></li>
          <li><a href="#projects" className="hover:text-emerald-500 transition-colors duration-200">Projects</a></li>
          <li><a href="#contact" className="hover:text-emerald-500 transition-colors duration-200">Contact</a></li>
        </ul>

        {/* Right: Social Icons + Hire Me button */}
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            {/* GitHub */}
            <a href="https://github.com/QA-Shivam/My-Profile.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub
                size={20}
                className="text-gray-700 dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200"
              />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/qashivam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin
                size={20}
                className="text-gray-700 dark:text-white hover:text-[#0077B5] dark:hover:text-[#0A66C2] transition-colors duration-200"
              />
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram
                size={20}
                className="text-gray-700 dark:text-white hover:text-[#C13584] dark:hover:text-[#E1306C] transition-colors duration-200"
              />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/7599665318" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp
                size={20}
                className="text-gray-700 dark:text-white hover:text-[#25D366] dark:hover:text-[#25D366] transition-colors duration-200"
              />
            </a>
          </div>

          {/* Hire Me button */}
          <button
            onClick={handleScrollToContact}
            className="px-5 py-2 bg-emerald-500 text-white text-[14px] rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-300"
          >
            Hire Me
          </button>
        </div>
      </div>
    </footer>
  );
}
