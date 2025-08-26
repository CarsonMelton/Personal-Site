import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#F0EAD6]">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="flex-grow flex flex-col justify-center items-center px-6 pt-32 text-center">
        <Mail className="w-12 h-12 mb-6 text-[#F0EAD6]" />
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          Get In Touch
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
          Feel free to reach out if you’d like to collaborate, have questions, or just want to connect.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-12 text-[#F0EAD6] mb-12">
          <a href="mailto:carsonmelton5@gmail.com" className="hover:text-white transition-colors">
            <Mail className="w-10 h-10" />
          </a>
          <a href="https://linkedin.com/in/carson-melton-60536122a" className="hover:text-white transition-colors">
            <Linkedin className="w-10 h-10" />
          </a>
          <a href="https://github.com/CarsonMelton" className="hover:text-white transition-colors">
            <Github className="w-10 h-10" />
          </a>
        </div>

        {/* Back to Home Button */}
        <div>
          <a
            href="/"
            className="px-6 py-3 bg-[#F0EAD6] text-[#121212] rounded-md text-lg hover:bg-gray-300 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
