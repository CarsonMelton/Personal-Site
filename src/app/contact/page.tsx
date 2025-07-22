import React from 'react';
import { Mail } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
          <Navbar />
      <div className="min-h-screen bg-gray-900 py-32 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="mx-auto w-12 h-12 text-purple-400 mb-4" />
          <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-gray-300 text-lg mb-12">
            Feel free to reach out if you'd like to collaborate, have questions, or just want to connect.
          </p>

          <div className="space-y-6 text-gray-300">
            <p>
              <span className="text-purple-400">Email:</span>{' '}
              <a href="mailto:carsonmelton5@gmail.com" className="hover:text-purple-400 transition-colors">
                carsonmelton5@gmail.com
              </a>
            </p>
            <p>
              <span className="text-purple-400">LinkedIn:</span>{' '}
              <a href="https://linkedin.com/in/carson-melton-60536122a" className="hover:text-purple-400 transition-colors">
                linkedin.com/in/carson-melton
              </a>
            </p>
            <p>
              <span className="text-purple-400">GitHub:</span>{' '}
              <a href="https://github.com/CarsonMelton" className="hover:text-purple-400 transition-colors">
                github.com/CarsonMelton
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
