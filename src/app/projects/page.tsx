import React from "react";
import { Code } from "lucide-react";

import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#121212] text-[#F0EAD6]">
      {/* Navbar */}
      <Navbar />

      {/* Projects Section */}
      <section className="flex-grow flex flex-col justify-start px-6 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-16 tracking-tight">
            Projects
          </h1>

          <div className="space-y-16 text-left text-xl md:text-2xl leading-relaxed">
            {/* LiDAR Project */}
            <div>
              <h2 className="text-3xl font-semibold mb-2">LiDAR Phantom Point Simulation</h2>
              <p className="text-gray-400 italic mb-4">Capstone Project – Spring 2025</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Developed a simulation environment using CARLA 0.10.0 and Unreal Engine 5 for autonomous vehicle scenarios.</li>
                <li>Processed LiDAR point cloud data to implement object detection and adaptive braking methods.</li>
                <li>Introduced probabilistic phantom point generation affecting LiDAR sensor accuracy and safety measures.</li>
                <li>Visualized raw LiDAR data using Open3D and Numpy for sensor accuracy evaluation.</li>
              </ul>
            </div>

            {/* AI Phishing Project */}
            <div>
              <h2 className="text-3xl font-semibold mb-2">AI-Generated Phishing Email Detection</h2>
              <p className="text-gray-400 italic mb-4">Advanced Computer and Network Security – Spring 2025</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Generated phishing and legitimate datasets using OpenAI and Anthropic APIs with varied prompts.</li>
                <li>Developed preprocessing and vectorization methods to enhance machine learning inputs.</li>
                <li>Trained models (naïve Bayes, logistic regression, random forest) using sklearn and pandas.</li>
                <li>Measured model accuracy with custom test datasets for performance evaluation.</li>
              </ul>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-16">
            <a
              href="/"
              className="px-6 py-3 bg-[#F0EAD6] text-[#121212] rounded-md text-lg hover:bg-gray-300 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
