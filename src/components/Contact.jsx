import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="contact-title">
          Let’s <span className="highlight">Connect</span>
          <motion.span
            className="contact-underline"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </h2>

        {/* Subtitle */}
        <p className="contact-subtitle">
          Reach out for collaborations, opportunities, or just to say hi! 🚀
        </p>

        {/* Social Icons */}
        <div className="contact-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
