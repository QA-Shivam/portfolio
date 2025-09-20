import React from "react";
import { FaCertificate } from "react-icons/fa";

// TODO: Replace with your actual certifications
const certifications = [
  {
    title: "ISTQB Certified Tester",
    issuer: "ISTQB",
    year: "2022",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    title: "Selenium WebDriver Advanced",
    issuer: "Udemy",
    year: "2021",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transform transition"
          >
            <div className="text-yellow-400 text-4xl mb-4 flex justify-center">
              <FaCertificate />
            </div>
            <h3 className="text-xl font-semibold text-center">{cert.title}</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
              {cert.issuer} • {cert.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
