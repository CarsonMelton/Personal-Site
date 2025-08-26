import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section className="flex-grow flex flex-col justify-center items-center text-center px-6 pt-32">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-[#F0EAD6]">
          About Me
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-6 leading-relaxed tracking-wide">
          I am a cybersecurity and software engineering professional with a foundation in computer science, 
          holding a Bachelor’s in Computer Science and Master’s in Cybersecurity Engineering from Auburn University. 
          My experience spans government and academic environments, with a focus on secure software development and systems protection.
        </p>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed tracking-wide">
          I am passionate about improving development processes through automation and security best practices. 
          My goal is to leverage my technical skills and collaborative mindset to strengthen cybersecurity efforts in critical sectors.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="px-6 py-3 bg-[#F0EAD6] text-[#121212] rounded-md text-lg hover:bg-gray-300 transition"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
}
