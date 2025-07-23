import React from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Shield,
  Award,
  Code,
  User,
  FileText,
  MessageCircle,
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-32 flex-grow animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I&apos;m <span className="text-purple-400">Carson Melton</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Cybersecurity Engineer with interests in cloud security, automation, and AI.
          </p>

          {/* Credentials */}
          <div className="flex items-center justify-center gap-8 mb-12 text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>Secret Clearance</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span>CompTIA Security+</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/projects"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-lg"
            >
              View My Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 px-8 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a href="https://github.com/CarsonMelton" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com/in/carson-melton-60536122a" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="mailto:carsonmelton5@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 bg-gray-800 animate-fadeIn">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Explore My Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/about"
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-purple-400 mb-4">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                About Me
              </h3>
              <p className="text-gray-400 text-sm">
                Learn about my education, experience, and journey in cybersecurity.
              </p>
            </a>

            <a
              href="/projects"
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-purple-400 mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Projects
              </h3>
              <p className="text-gray-400 text-sm">
                Explore my cybersecurity projects and technical implementations.
              </p>
            </a>

            <a
              href="/resume"
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-purple-400 mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Resume
              </h3>
              <p className="text-gray-400 text-sm">
                View my complete professional experience and qualifications.
              </p>
            </a>

            <a
              href="/contact"
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-purple-400 mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Contact
              </h3>
              <p className="text-gray-400 text-sm">
                Get in touch for potential opportunities.
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
