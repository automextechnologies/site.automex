"use client";

import Link from "next/link";

export default function BlueTickSection() {
  return (
    <section id="bluetick" className="relative bg-[#030712] py-20 sm:py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Background glow and dot matrix */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D2FF]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 automex-dot-grid opacity-20 pointer-events-none hidden md:block"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Value Proposition from Page 2 */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1D9BF0]/30 bg-[#0c1830] px-4 py-1.5 text-xs font-bold tracking-wide text-white">
              <svg className="w-4 h-4 text-[#1D9BF0]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Meta Official Verification</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Get a <span className="text-[#1D9BF0]">Blue Tick</span> <br />
              <span className="text-gradient-cobalt">Verified Badge</span> <br />
              on WhatsApp
            </h2>

            {/* 3 Pillars from Brochure Page 2 */}
            <div className="space-y-6 pt-2 text-left">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b1324] border border-white/5 hover:border-[#1D9BF0]/40 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#050505] text-[#1D9BF0] border border-white/10 shadow-inner">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Boost your brand</h3>
                  <p className="mt-1 text-sm text-[#94A3B8] leading-relaxed">
                    With a professional business profile featuring your official brand logo, cover banner, and contact details.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b1324] border border-white/5 hover:border-[#1D9BF0]/40 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#050505] text-[#38bdf8] border border-white/10 shadow-inner">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Build trust</h3>
                  <p className="mt-1 text-sm text-[#94A3B8] leading-relaxed">
                    With Meta Verification for authentic, fraud-proof conversations that customers immediately recognize and trust.
                  </p>
                </div>
              </div>

              {/* Feature 3 (Resulting in High Open Rate & Low Spam Marking) */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#0757C8]/20 to-sky-950/20 border border-[#1D9BF0]/30 shadow-[0_0_25px_rgba(7,87,200,0.15)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1D9BF0]/20 text-[#38bdf8] border border-[#1D9BF0]/40">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Maximum Deliverability</h3>
                  <p className="mt-1 text-sm text-sky-200 leading-relaxed font-medium">
                    Resulting in <span className="text-emerald-400 font-bold">High Open Rate</span> and <span className="text-emerald-400 font-bold">Low Spam Marking</span>.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_25px_rgba(7,87,200,0.5)] inline-flex items-center gap-2"
              >
                <span>Apply for Meta Blue Tick</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>

          {/* Right Column: Phone Mockup Showing Verified Business Profile (Brochure Page 2) */}
          <div className="relative flex-1 w-full max-w-md mx-auto">
            {/* Glowing Pedestal */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-16 bg-[#00D2FF]/20 rounded-full blur-2xl"></div>

            {/* Phone Screen Mockup */}
            <div className="relative rounded-[40px] border-[5px] border-zinc-800 bg-[#111827] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(7,87,200,0.3)] overflow-hidden">
              
              {/* Top Status Bar */}
              <div className="bg-[#0b141a] px-6 pt-3 pb-2 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-semibold text-white">11:41</span>
                <div className="flex items-center gap-1.5">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Business Profile Header */}
              <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                <button className="text-zinc-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="text-sm font-semibold text-white truncate">Business Details</span>
                </div>
              </div>

              {/* Profile Body */}
              <div className="p-5 space-y-5 bg-[#0b141a]">
                
                {/* Hero Banner with Avatar */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-950 p-6 text-center border border-white/10">
                  <div className="mx-auto h-20 w-20 rounded-full bg-white p-2 shadow-xl flex items-center justify-center border-2 border-sky-400">
                    <span className="text-2xl font-black text-[#0757C8]">A</span>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1.5">
                    <h4 className="text-lg font-bold text-white">AUTOMEX</h4>
                    <svg className="w-5 h-5 text-[#1D9BF0]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-xs text-zinc-300 font-mono mt-0.5">+91 98765 43210</p>
                  <p className="text-[11px] text-sky-400 font-medium">E-commerce Shopping &amp; Automation</p>
                </div>

                {/* Action Buttons: Call, Message, Share */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-[#1f2c34] border border-white/5 flex flex-col items-center gap-1">
                    <span className="text-lg">📞</span>
                    <span className="text-xs text-zinc-300 font-medium">Call</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#1f2c34] border border-[#25D366]/30 flex flex-col items-center gap-1">
                    <span className="text-lg text-[#25D366]">💬</span>
                    <span className="text-xs text-[#25D366] font-bold">Message</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#1f2c34] border border-white/5 flex flex-col items-center gap-1">
                    <span className="text-lg">🔗</span>
                    <span className="text-xs text-zinc-300 font-medium">Share</span>
                  </div>
                </div>

                {/* Profile Information List (From Brochure Page 2) */}
                <div className="space-y-3 rounded-2xl bg-[#111b21] p-4 text-xs border border-white/5">
                  <div className="flex items-start gap-2.5">
                    <span className="text-base text-zinc-400">ℹ️</span>
                    <div>
                      <p className="text-white font-medium">Quality products for a better everyday life. Trendy, reliable and delivered to your doorstep.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-white/5">
                    <span className="text-base text-emerald-400">🕒</span>
                    <div>
                      <span className="text-emerald-400 font-semibold">Open now</span>
                      <span className="text-zinc-400 ml-2">9:00 AM - 9:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-white/5">
                    <span className="text-base text-sky-400">📍</span>
                    <span className="text-zinc-300">Kerala, India</span>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-white/5">
                    <span className="text-base text-[#1D9BF0]">🌐</span>
                    <span className="text-[#38bdf8] font-semibold">https://automextechnologies.com</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
