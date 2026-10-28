"use client";

import Link from "next/link";

const aiCapabilities = [
  {
    title: "Smart CRM Integration",
    desc: "Syncs customer records, conversational transcripts, and purchase intents directly into your CRM in real time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    badge: "Auto Sync",
  },
  {
    title: "Real-Time Analytics",
    desc: "Tracks AI resolution rate, sentiment score, lead quality score, and conversions with live telemetry.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    badge: "Live Telemetry",
  },
  {
    title: "Instant Responses",
    desc: "Sub-second response speeds with zero wait times. Answers product FAQs and resolves issues around the clock.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badge: "< 1 Sec FRT",
  },
  {
    title: "Multilingual Conversations",
    desc: "Speaks 50+ languages fluently including English, Hindi, Malayalam, Arabic, Spanish, and local dialects.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: "50+ Languages",
  },
  {
    title: "24/7 Customer Engagement",
    desc: "Never miss a sale while your human team sleeps. Handles inquiries, bookings, and payments 365 days a year.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: "Always On",
  },
  {
    title: "AI-Powered Lead Qualification",
    desc: "Asks intelligent discovery questions, calculates budget & intent, and routes VIP leads to sales closers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    badge: "Smart Qualification",
  },
];

export default function AutomexAiSection() {
  return (
    <section id="ai-agent" className="relative bg-[#020617] py-20 sm:py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Background glow and theme mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#0757C8]/25 via-[#00D2FF]/20 to-purple-600/15 rounded-full blur-[170px] pointer-events-none"></div>
      <div className="absolute top-12 left-12 w-44 h-44 automex-dot-grid opacity-20 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-12 right-12 w-44 h-44 automex-dot-grid opacity-20 pointer-events-none hidden md:block"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Section Header (Brochure Page 9) */}
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-4 py-1.5 text-xs font-bold tracking-wide text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400 pulse-badge"></span>
            <span>NEXT-GEN AUTONOMOUS COMMERCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Meet <span className="text-gradient-cobalt">AUTOMEX AI</span> — <br />
            Your 24/7 AI Sales Agent
          </h2>

          <p className="text-lg sm:text-2xl font-bold text-sky-300">
            Turn Every Conversation into a Sales Opportunity
          </p>

          <p className="max-w-2xl mx-auto text-base text-[#94A3B8] leading-relaxed">
            AUTOMEX AI responds instantly, qualifies leads intelligently, and keeps your business selling around the clock, across WhatsApp, SMS &amp; RCS.
          </p>
        </div>

        {/* 6 AI Capabilities Grid (Page 9) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aiCapabilities.map((cap, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-[#081021]/80 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#00D2FF] hover:bg-[#0e1a38] hover:shadow-[0_15px_35px_rgba(7,87,200,0.25)] hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#030712] text-[#38bdf8] border border-white/10 group-hover:bg-[#0757C8] group-hover:text-white transition-all shadow-inner">
                    {cap.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/25">
                    {cap.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>AI Module 0{i + 1}</span>
                <span className="text-emerald-400 font-sans font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Omnichannel Banner Strip */}
        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-r from-blue-950/60 via-purple-950/40 to-blue-950/60 p-6 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">Cross-Channel Continuity</h4>
            <p className="text-xs text-zinc-400">One AI engine seamlessly powering your WhatsApp, SMS, and RCS communication channels.</p>
          </div>
          <Link
            href="#contact"
            className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-bold px-6 py-2.5 rounded-xl shadow-[0_4px_20px_rgba(7,87,200,0.5)] shrink-0 text-xs sm:text-sm"
          >
            Deploy AUTOMEX AI
          </Link>
        </div>

      </div>
    </section>
  );
}
