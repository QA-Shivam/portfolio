import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaUserTie, FaRocket, FaSmile } from "react-icons/fa";

export default function LiquidLoader({ fullScreen = true, onFinish }) {
  const prefersReducedMotion = useReducedMotion();
  const [showLoader, setShowLoader] = useState(true);

  const dots = Array.from({ length: 6 }, (_, i) => i);
  const duration = prefersReducedMotion ? 0 : 1.2; // faster
  const gapDelay = prefersReducedMotion ? 0 : 0.1; // tighter gap
  const width = 240;
  const height = 80;

  const messages = [
    { text: "Loading...", icon: <FaRocket className="text-emerald-500" /> },
    { text: "Almost There...", icon: <FaSmile className="text-emerald-500" /> },
    { text: "Welcome To My Portfolio", icon: <FaUserTie className="text-emerald-500" /> },
  ];

  const [index, setIndex] = useState(0);

  // Rotate messages, freeze last message
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === messages.length - 1 ? prev : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Auto-hide loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      if (onFinish) onFinish();
    }, 5200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={[
            fullScreen ? "fixed inset-0 z-[9999] flex items-center justify-center" : "inline-flex",
            "bg-white dark:bg-gray-900",
          ].join(" ")}
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="flex flex-col items-center">
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="
                      1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 22 -10"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
                <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
                </filter>
              </defs>

              <g filter="url(#goo)">
                {dots.map((i) => (
                  <motion.circle
                    key={i}
                    r="6" // smaller
                    cy={height / 2}
                    cx="28"
                    fill={i % 2 === 0 ? "rgb(16 185 129 / 1)" : "#ffffff"}
                    filter="url(#softShadow)"
                    initial={{ x: -20, opacity: 0.8, scale: 0.95 }}
                    animate={
                      prefersReducedMotion
                        ? { opacity: 0.8 }
                        : {
                            x: [-20, width - 28 + 20],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.95, 1.05, 0.95],
                          }
                    }
                    transition={{
                      duration,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: i * gapDelay,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </g>
            </svg>

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="mt-6 flex items-center gap-2 text-base md:text-lg font-medium tracking-wide
                         text-gray-700 dark:text-gray-200"
            >
              {messages[index].icon}
              <span>{messages[index].text}</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
