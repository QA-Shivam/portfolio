import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  // Load theme preference on first mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  const handleNavClick = (item) => {
    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
      return;
    }
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      const yOffset = -70;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "Home";
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      navItems.forEach((item, index) => {
        const section = document.getElementById(item.toLowerCase());
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          current = item;
        }
        if (
          index === navItems.length - 1 &&
          scrollPos + windowHeight >= scrollHeight - 5
        ) {
          current = item;
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar border-b border-gray-200 dark:border-gray-700">
      {/* Logo */}
      <div className="logo-text" onClick={() => handleNavClick("Home")}>
        PORTFOLIO •
      </div>

      {/* Desktop Nav */}
      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`nav-link group relative ${
              activeLink === item ? "text-emerald-500" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item);
            }}
          >
            {item}
            <span
              className={`${
                activeLink === item ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        ))}
      </div>

      {/* Right Controls */}
      <div className="controls">
        {/* Theme toggle */}
        <div className="relative group">
          <button
            aria-pressed={dark}
            aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            onClick={toggleTheme}
            className="theme-btn"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="tooltip">
            {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </div>
        </div>

        {/* Desktop socials */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative group">
            <a
              href="https://github.com/QA-Shivam/My-Profile.git"
              target="_blank"
              rel="noreferrer"
              className="social-btn github"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <div className="tooltip">GitHub</div>
          </div>

          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/kumar-shivam16399"
              target="_blank"
              rel="noreferrer"
              className="social-btn linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <div className="tooltip">LinkedIn</div>
          </div>

          <div className="relative group">
            <a
              href="https://leetcode.com/u/qashivam/"
              target="_blank"
              rel="noreferrer"
              className="social-btn leetcode"
              aria-label="LeetCode"
            >
              <SiLeetcode className="w-5 h-5" />
            </a>
            <div className="tooltip">LeetCode</div>
          </div>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`nav-item ${activeLink === item ? "text-emerald-500" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item);
            }}
          >
            {item}
          </a>
        ))}

        {/* Mobile Socials */}
        <div className="mobile-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn github"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn leetcode"
            aria-label="LeetCode"
          >
            <SiLeetcode className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
