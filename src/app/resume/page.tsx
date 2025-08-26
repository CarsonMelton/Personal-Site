import React from "react";
import {
  Award,
  Cpu,
  User,
  CheckCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#F0EAD6]">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Page Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-10 text-center tracking-tight">
          Resume
        </h1>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Education
          </h2>
          <ul className="space-y-3 text-lg md:text-xl leading-relaxed text-gray-300">
            <li>
              <strong>Master of Science in Cybersecurity Engineering</strong>, Auburn University — Summa Cum Laude <br />
              <span className="italic text-gray-400 text-sm">Aug 2023 – May 2025</span>
            </li>
            <li>
              <strong>Bachelor of Science in Computer Science</strong>, Auburn University — Cum Laude <br />
              <span className="italic text-gray-400 text-sm">Aug 2020 – Aug 2023</span>
            </li>
            <li>
              <strong>Dual Enrollment Program</strong>, Alpharetta High School & Georgia State University <br />
              <span className="italic text-gray-400 text-sm">Aug 2016 – Aug 2020</span>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl space-y-1 leading-relaxed">
            <li><strong>Programming:</strong> Java, Python, SQL, Bash, C++</li>
            <li><strong>Platforms:</strong> Linux (Ubuntu, Debian, CentOS Stream, Kali), OpenStack, Proxmox, AWS, VMWare</li>
            <li><strong>Hardware:</strong> MicroTik, Cisco, RFID/NFC</li>
            <li><strong>Software & Tools:</strong> GitHub, Vercel, MySQL Workbench, BurpSuite, Autopsy, MITRE ATT&CK Framework</li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Certifications
          </h2>
          <ul className="space-y-3 text-lg md:text-xl leading-relaxed text-gray-300">
            <li>
              <strong>CompTIA Security+</strong><br />
              <span className="italic text-gray-400 text-sm">Issued July 2025</span>
            </li>
            <li>
              <strong>AWS Certified Cloud Practitioner</strong><br />
              <span className="italic text-gray-400 text-sm">Issued August 2025</span>
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5" />
            Professional Experience
          </h2>

          <div className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-[#F0EAD6]">Cybersecurity/Software Intern</h3>
              <p className="italic mb-1">PEO Aviation, PM FLRAA | Huntsville, AL</p>
              <span className="text-gray-400 text-sm">June 2025 – Present (Completion September 2025)</span>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Engaged in discussions on improving government efficiency and streamlining software development processes.</li>
                <li>Shadowed cyber leadership on risk management, vulnerability scanning, and Authority to Operate (ATO) declarations.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F0EAD6]">Cybersecurity/Software Intern</h3>
              <p className="italic mb-1">PEO Aviation, PM FLRAA | Huntsville, AL</p>
              <span className="text-gray-400 text-sm">June – August 2024</span>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Acquired project management skills in schedule management, risk mitigation, and problem-solving.</li>
                <li>Learned Model-Based Systems Engineering and NIST policy compliance principles.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F0EAD6]">Graduate Assistant</h3>
              <p className="italic mb-1">Auburn University RFID Lab | Auburn, AL</p>
              <span className="text-gray-400 text-sm">Aug 2023 – May 2025</span>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Maintained and secured websites; implemented one-time passwords and protected against SQL injections.</li>
                <li>Automated database updates and email responses with PHP and JavaScript.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F0EAD6]">RFID Validation Tester</h3>
              <p className="italic mb-1">Auburn University RFID Lab | Auburn, AL</p>
              <span className="text-gray-400 text-sm">Oct 2022 – Aug 2023</span>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Validated RFID tags functionality for large retail environments, surpassing efficiency metrics.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F0EAD6]">Cybersecurity Analyst Intern</h3>
              <p className="italic mb-1">PeopleTec | Huntsville, AL</p>
              <span className="text-gray-400 text-sm">June – August 2022</span>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Configured simulated home networks using MicroTik routers, gaining hands-on network security experience.</li>
                <li>Automated tasks via Python3 and Bash scripts to improve efficiency.</li>
                <li>Participated in industry meetings on incident response and cybersecurity best practices.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Back to Home Button */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="px-6 py-3 bg-[#F0EAD6] text-[#121212] rounded-md text-lg hover:bg-gray-300 transition"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
