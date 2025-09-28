import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../index.css";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, sent: false, error: "" });

  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: underlineRef, inView: underlineInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Vite env vars (fallback strings if not set)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  // Email validation
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ sending: false, sent: false, error: "Please fill all fields." });
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus({ sending: false, sent: false, error: "Please enter a valid email." });
      return;
    }

    setStatus({ sending: true, sent: false, error: "" });

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus({ sending: false, sent: true, error: "" });
      setForm({ name: "", email: "", message: "" });

      // auto-hide success after 3.5s
      setTimeout(() => setStatus((s) => ({ ...s, sent: false })), 3500);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ sending: false, sent: false, error: "Failed to send. Please try again." });
    }
  };

  return (
    <section id="contact" className="contact-section relative overflow-hidden">
      <div className="floating-bubbles" aria-hidden="true">
        <span className="bubble b1" />
        <span className="bubble b2" />
        <span className="bubble b3" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="contact-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <motion.span
            ref={underlineRef}
            className="contact-underline"
            style={{ transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: underlineInView ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <p className="contact-subtitle mt-3">
            I’m available for freelance projects and full-time opportunities — or just to say hi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact card + socials */}
          <motion.div
            ref={leftRef}
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="contact-card">
              <h3 className="card-title">Get in touch</h3>
              <p className="card-desc">Prefer email? Or message me below — I reply within 24–48 hrs.</p>

              <div className="contact-info mt-6">
                <div className="info-row">
                  <div className="info-icon-wrap" tabIndex={0} aria-hidden>
                    <FiMail className="info-icon" />
                  </div>
                  <div className="info-text">
                    <div className="info-label">Email</div>
                    <a className="info-value" href="mailto:shivamkumar16399@gmail.com">shivamkumar16399@gmail.com</a>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon-wrap" tabIndex={0} aria-hidden>
                    <FiPhone className="info-icon" />
                  </div>
                  <div className="info-text">
                    <div className="info-label">Phone</div>
                    <a className="info-value" href="tel:+917599665318">+91 7599665318</a>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon-wrap" tabIndex={0} aria-hidden>
                    <FiMapPin className="info-icon" />
                  </div>
                  <div className="info-text">
                    <div className="info-label">Location</div>
                    <div className="info-value">Bengaluru, India</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="info-small">───── Follow Me ─────</p>
                <div className="social-icons mt-3">
                  <a className="social-btn github" href="#" aria-label="Github"><FaGithub className="w-5 h-5" /></a>
                  <a className="social-btn linkedin" href="#" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5" /></a>
                  <a className="social-btn whatsapp" href="#" aria-label="Whatsapp"><FaWhatsapp className="w-5 h-5" /></a>
                  <a className="social-btn instagram" href="#" aria-label="Instagram"><FaInstagram className="w-5 h-5" /></a>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                <strong>Availability:</strong> Open to opportunities · Remote friendly
              </div>
            </div>
          </motion.div>

          {/* Right: Form + Map */}
          <motion.div
            ref={rightRef}
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form id="form" className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.label className="field" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                  <span className="field-label">Your name</span>
                  <input className="input" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" aria-label="Your name" required />
                </motion.label>
                <motion.label className="field" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <span className="field-label">Email</span>
                  <input className="input" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" type="email" aria-label="Email" required />
                </motion.label>
              </div>

              <motion.label className="field mt-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <span className="field-label">Message</span>
                <textarea className="textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project, timeline, and budget..." rows="6" aria-label="Message" required />
              </motion.label>

              <div className="mt-5 flex items-center gap-4">
                <motion.button whileTap={{ scale: 0.98 }} type="submit" className="btn-send" aria-live="polite" disabled={status.sending}>
                  {!status.sending ? <FiSend className="btn-icon" /> : <span className="btn-loading"><span className="spinner" /> Sending...</span>}
                </motion.button>

                <div className="status-area" aria-live="polite">
                  {status.error && <div className="status-error">{status.error}</div>}
                  {status.sent && <div className="status-success">Thanks — message sent!</div>}
                </div>
              </div>
            </form>

            {/* Map Section */}
            <motion.div className="map-card mt-8 rounded-xl overflow-hidden shadow-md" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.5 }}>
              <iframe
                title="Bengaluru Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.934729926243!2d77.59456607488106!3d12.971598591308077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d6c8c1f3%3A0x7a0a2c7d9f3d7!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1695291234567!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-caption p-3 text-center text-sm text-gray-500 dark:text-gray-400">
                Available for remote and on-site (Bengaluru / India)
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
