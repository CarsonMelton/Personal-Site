import React from 'react';
import { Code } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      <section className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-purple-400 mb-12 text-center">Projects</h1>

          <div className="space-y-12 text-gray-300">
            {/* LiDAR Project */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">LiDAR Phantom Point Simulation</h2>
              <p className="text-gray-400 italic mb-2">Capstone Project – Spring 2025</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Developed a simulation environment using CARLA 0.10.0 and Unreal Engine 5 to replicate scenarios for autonomous vehicles.</li>
                <li>Processed LiDAR point cloud data to implement object detection and adaptive braking methods.</li>
                <li>Introduced probabilistic phantom point generation affecting LiDAR sensor accuracy and safety measures.</li>
                <li>Visualized raw LiDAR data using Open3D and Numpy for sensor accuracy evaluation.</li>
              </ul>
            </div>

            {/* AI Phishing Project */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">AI-Generated Phishing Email Detection</h2>
              <p className="text-gray-400 italic mb-2">Advanced Computer and Network Security – Spring 2025</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Generated phishing and legitimate datasets using OpenAI and Anthropic APIs with varied prompts.</li>
                <li>Developed preprocessing and vectorization methods to enhance machine learning inputs.</li>
                <li>Trained models (naïve Bayes, logistic regression, random forest) using sklearn and pandas.</li>
                <li>Measured model accuracy with custom test datasets for performance evaluation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

