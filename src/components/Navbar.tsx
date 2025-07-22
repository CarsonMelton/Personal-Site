import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-gray-900 py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
          C M
        </Link>

        <nav className="flex items-center space-x-6 text-gray-400">
          <Link href="/about" className="hover:text-purple-400 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
          <Link href="/resume" className="hover:text-purple-400 transition-colors">Resume</Link>
          <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
