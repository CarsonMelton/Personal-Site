import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Card({ href, icon, title, description }: CardProps) {
  return (
    <Link
      href={href}
      className="group bg-[#1a1a1a] rounded-xl p-6 border border-gray-700 hover:border-[#F0EAD6] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="text-[#F0EAD6] mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#F0EAD6] mb-3 group-hover:text-[#F0EAD6]/80 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </Link>
  );
}
