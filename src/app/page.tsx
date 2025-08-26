import React from "react";
import Navbar from "@/components/Navbar"
import { Github, Linkedin, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section id="home" className="flex-grow flex flex-col justify-center items-center text-center px-6 pt-32">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          Carson Melton
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Cybersecurity Engineer with a passion for Cloud Security, DevSecOps, and AI.
        </p>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/CarsonMelton" className="hover:text-white">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/carson-melton-60536122a" className="hover:text-white">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:carsonmelton5@gmail.com" className="hover:text-white">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </section>
    </div>
  );
}
