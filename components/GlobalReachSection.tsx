"use client";

import Link from "next/link";

const countryPills = [
  { name: "Nigeria", flag: "🇳🇬", href: "#contact" },
  { name: "Indonesia", flag: "🇮🇩", href: "#contact" },
  { name: "South Africa", flag: "🇿🇦", href: "#contact" },
  { name: "Brazil", flag: "🇧🇷", href: "#contact" },
  { name: "UAE", flag: "🇦🇪", href: "#contact" },
  { name: "Mexico", flag: "🇲🇽", href: "#contact" },
  { name: "India", flag: "🇮🇳", href: "#contact" },
  { name: "Global", flag: "🌐", href: "#contact" },
];

export default function GlobalReachSection() {
  return (
    <section id="countries" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Telinfy Exact Layout) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00D2FF]">
            <span>AVAILABLE WORLDWIDE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            WhatsApp API <span className="text-laser-gradient">by country</span>
          </h2>
        </div>

        {/* Horizontal Country Links / Pills (Telinfy Exact Layout) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-20">
          {countryPills.map((c, i) => (
            <Link
              key={i}
              href={c.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-[#050914]/80 hover:border-[#00D2FF] hover:bg-[#071330] text-sm font-semibold text-white transition-all shadow-sm hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:-translate-y-0.5"
            >
              <span>{c.flag}</span>
              <span>{c.name}</span>
            </Link>
          ))}
        </div>

        {/* Banner 1: 👋 Ready to streamline your communications? (Telinfy aicta Layout) */}
        <div className="cyber-panel rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl mb-12 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              👋 Ready to streamline your communications?
            </h3>
            <div>
              <Link
                href="#contact"
                className="btn-laser px-9 py-4 rounded-full text-base sm:text-lg"
              >
                <span>Start 14 Days Free Trial</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Banner 2: Experience the AUTOMEX platform (Telinfy Exact Layout) */}
        <div className="cyber-panel rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Experience the AUTOMEX platform
          </h3>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto mb-8 leading-relaxed">
            WhatsApp Business API, RCS, SMS and voice in one platform — with an AI sales agent that qualifies leads and closes 24/7. Start free, no code needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="btn-laser px-8 py-3.5 rounded-xl text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Start Free Trial</span>
            </Link>

            <a
              href="https://wa.me/918921847262?text=Hi%2C%20I%20would%20like%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-cyber px-6 py-3.5 rounded-xl text-sm sm:text-base w-full sm:w-auto"
            >
              <span>💬 Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
