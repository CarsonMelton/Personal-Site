import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function PhishingDetectionProjectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#F0EAD6]">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Project Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-center">
          AI-Generated Phishing Email Detection
        </h1>
        <p className="text-gray-400 italic text-center mb-12">
          Advanced Computer and Network Security – Spring 2025
        </p>

        {/* Project Description */}
        <section className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300">
          <p>
            Generated phishing and legitimate datasets using OpenAI and Anthropic APIs with varied prompts to ensure data diversity.
          </p>
          <p>
            Developed preprocessing and vectorization methods to enhance machine learning input quality. Trained models including naïve Bayes, logistic regression, and random forest using sklearn and pandas.
          </p>
          <p>
            Measured model accuracy with custom test datasets, iterated on feature selection, and optimized detection algorithms for real-world phishing scenarios.
          </p>
          {/* Add more unique content, visuals, or methodology details */}
        </section>

        {/* Back to Projects */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-[#F0EAD6] text-[#121212] rounded-md text-lg hover:bg-gray-300 transition"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
