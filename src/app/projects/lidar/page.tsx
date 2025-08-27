import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function LiDARProjectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#F0EAD6]">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Project Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-center">
          LiDAR Phantom Point Simulation
        </h1>
        <p className="text-gray-400 italic text-center mb-12">
          Capstone Project – Spring 2025
        </p>

        {/* Project Description */}
        <section className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300">
          <p>
            Developed a simulation environment using CARLA 0.10.0 and Unreal Engine 5 to replicate scenarios for autonomous vehicles.
          </p>
          <p>
            Processed LiDAR point cloud data to implement object detection and adaptive braking methods. Introduced probabilistic phantom point generation affecting LiDAR sensor accuracy and safety measures.
          </p>
          <p>
            Visualized raw LiDAR data using Open3D and Numpy for sensor accuracy evaluation.
          </p>
          {/* Add more unique content, images, diagrams, etc. */}
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
