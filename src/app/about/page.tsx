import React from 'react';
import { User } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
          <Navbar />
      <div className="min-h-screen bg-gray-900 py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <User className="mx-auto w-12 h-12 text-purple-400 mb-4" />
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I am a cybersecurity and software engineering professional with a strong foundation in computer science, holding both a Bachelor of Science and a Master of Science from Auburn University. My work spans cybersecurity analysis, secure software development, and academic research, with hands-on experience in both government and academic environments. I’m passionate about securing complex systems and improving development processes through automation, security best practices, and thoughtful engineering. My career focus is on leveraging my technical expertise and collaborative mindset to strengthen cybersecurity efforts in critical sectors.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
