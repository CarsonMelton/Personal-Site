import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-[#121212] px-8 py-4 flex justify-center items-center z-50">
        <div className="space-x-8 text-2xl">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/resume" className="hover:text-white transition-colors">Resume</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </nav>
  );
}
