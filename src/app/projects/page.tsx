import React from "react";
import { Cpu, Shield, Code } from "lucide-react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#121212] text-[#F0EAD6]">
      {/* Navbar */}
      <Navbar />

      {/* Projects Section */}
      <section className="flex-grow flex flex-col justify-start px-6 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-16 tracking-tight">
            Projects
          </h1>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              href="/projects/lidar"
              icon={<Cpu className="w-10 h-10" />}
              title="LiDAR Phantom Point Simulation"
              description="Capstone project simulating autonomous vehicle scenarios in CARLA and Unreal Engine, with LiDAR phantom point generation and Open3D visualization."
            />

            <Card
              href="/projects/phishing-detection"
              icon={<Shield className="w-10 h-10" />}
              title="AI-Generated Phishing Detection"
              description="Built ML models to detect AI-generated phishing emails using datasets from OpenAI/Anthropic, with preprocessing and sklearn training."
            />
          </div>

          {/* Back to Home Button */}
          <div className="mt-16">
            <Link
              href="/"
              className="px-6 py-3 bg-[#F0EAD6] text-[#121212] rounded-md text-lg hover:bg-gray-300 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
