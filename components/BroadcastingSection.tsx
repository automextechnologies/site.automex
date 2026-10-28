"use client";

import { useState } from "react";
import Link from "next/link";

const campaignFeatures = [
  {
    title: "Monitor campaign performance",
    desc: "Track delivery, engagement, open, and response rates in real time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    badge: "Real-time Telemetry",
  },
  {
    title: "Build campaign audiences",
    desc: "Segment and target the right customers easily based on tags, behavior & purchase history.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    badge: "Smart Segmentation",
  },
  {
    title: "Setup one-time or recurring campaigns",
    desc: "Send promotional messages, festival blasts, and recurring reminders automatically.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    badge: "Scheduled Blasts",
  },
  {
    title: "Launch large scale WhatsApp campaigns",
    desc: "Broadcast to thousands of opt-in customers in seconds with high delivery rate.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badge: "High Throughput",
  },
];

const mediaTypes = [
  {
    id: "images",
    label: "Images",
    icon: "🖼️",
    title: "Sports Shoes 🔥",
    subtitle: "Step up your style with our new collection. Comfort meets performance.",
    btnText: "Shop Now",
    previewVisual: "👟",
    tag: "Visual Conversions",
  },
  {
    id: "videos",
    label: "Videos",
    icon: "🎬",
    title: "New Arrivals Are Here! ✨",
    subtitle: "Take a look at our latest collection and exclusive seasonal offers.",
    btnText: "Watch Now",
    previewVisual: "▶️ 0:28 Video",
    tag: "High Engagement",
  },
  {
    id: "documents",
    label: "Documents",
    icon: "📄",
    title: "Product Catalog 2026",
    subtitle: "Explore our complete product range, wholesale tier pricing, and technical details.",
    btnText: "View Document",
    previewVisual: "📕 PDF • 2.4 MB",
    tag: "B2B Catalogs",
  },
  {
    id: "carousels",
    label: "Carousels",
    icon: "🎠",
    title: "Discover Our Best Sellers",
    subtitle: "Swipe to explore more items. Interactive cards with dedicated buy actions.",
    btnText: "View Options",
    previewVisual: "🛍️ Multi-Card Swipe",
    tag: "Catalog Carousel",
  },
];

export default function BroadcastingSection() {
  const [activeMedia, setActiveMedia] = useState<number>(0);

  return (
    <section id="broadcasting" className="relative bg-[#020617] py-20 sm:py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0757C8]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-20 right-8 w-44 h-44 automex-dot-grid opacity-20 pointer-events-none hidden md:block"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Section Header (Page 3) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-[#0c1830] px-4 py-1.5 text-xs font-bold tracking-wide text-[#38bdf8]">
            <span>AUTOMATED CAMPAIGN SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Unlock the Power of <br />
            <span className="text-gradient-cobalt">WhatsApp Broadcasting</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Reach more customers, promote your products, and grow your business with automated WhatsApp campaigns.
          </p>
        </div>

        {/* 4 Feature Cards Grid (Page 3) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {campaignFeatures.map((feat, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-[#09101f]/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#0757C8] hover:bg-[#0e1933] hover:shadow-[0_12px_30px_rgba(7,87,200,0.2)] hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#030712] text-[#38bdf8] border border-white/10 group-hover:bg-[#0757C8] group-hover:text-white transition-all shadow-inner">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-full border border-sky-500/20">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Pillar 0{i + 1}</span>
                <span className="text-emerald-400 font-sans font-semibold">✓ Automated</span>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Elevate Your WhatsApp Broadcasting With Engaging Rich Media (Brochure Page 4) */}
        <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-b from-[#0b1426] to-[#040814] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(7,87,200,0.15)] relative overflow-hidden">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Media selector */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-bold text-emerald-400">
                <span>INTERACTIVE RICH MEDIA FORMATS</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Elevate Your WhatsApp Broadcasting With <br className="hidden sm:block" />
                <span className="text-gradient-cyan">Engaging Rich Media.</span>
              </h3>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Capture attention instantly. Send dynamic photos, video teasers, catalogs, and multi-product carousels with direct call-to-action buttons.
              </p>

              {/* 4 Format Selectors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {mediaTypes.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveMedia(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      activeMedia === idx
                        ? "border-[#00D2FF] bg-[#0757C8]/25 shadow-[0_0_20px_rgba(0,210,255,0.25)]"
                        : "border-white/10 bg-black/40 hover:border-white/25 hover:bg-white/5"
                    }`}
                  >
                    <div className="text-xl mb-1">{item.icon}</div>
                    <div className="text-sm font-bold text-white">{item.label}</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{item.tag}</div>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 text-sm shadow-[0_4px_20px_rgba(7,87,200,0.45)]"
                >
                  <span>Launch Rich Media Campaign</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>

            {/* Right Column: Live Phone Preview of Selected Media (Brochure Page 4) */}
            <div className="w-full max-w-sm sm:max-w-md mx-auto">
              <div className="rounded-[36px] border-[4px] border-zinc-700 bg-[#0b141a] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(7,87,200,0.3)] overflow-hidden">
                
                {/* Chat Header */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-full bg-[#0757C8] flex items-center justify-center text-white font-bold text-xs">
                      A
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white">Your Business</span>
                        <svg className="w-3 h-3 text-[#1D9BF0]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <span className="text-[10px] text-emerald-400">Online</span>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-400">11:41</div>
                </div>

                {/* Message Bubble Preview */}
                <div className="p-4 space-y-3 min-h-[360px] flex flex-col justify-end bg-[#0b141a]">
                  
                  {/* Incoming Chat Message */}
                  <div className="self-start max-w-[92%] rounded-2xl rounded-tl-sm bg-[#1f2c34] p-3 text-white shadow-md border border-white/5 space-y-2.5 animate-in fade-in duration-200">
                    
                    {/* Media Visual Block */}
                    <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-white/10 text-center flex flex-col items-center justify-center min-h-[140px]">
                      <div className="text-4xl mb-2">{mediaTypes[activeMedia].previewVisual}</div>
                      <span className="text-xs font-bold text-sky-300">{mediaTypes[activeMedia].label} Showcase</span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white">{mediaTypes[activeMedia].title}</h4>
                      <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                        {mediaTypes[activeMedia].subtitle}
                      </p>
                    </div>

                    <div className="text-[10px] text-right text-zinc-400">10:30 AM</div>

                    {/* Interactive CTA button inside chat bubble */}
                    <button className="w-full py-2 rounded-xl bg-white/10 hover:bg-[#0757C8] border border-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors">
                      <span>{mediaTypes[activeMedia].btnText}</span>
                      <span>→</span>
                    </button>
                  </div>

                  {/* WhatsApp Quick input bar */}
                  <div className="rounded-full bg-[#1f2c34] px-4 py-2 flex items-center justify-between text-xs text-zinc-400">
                    <span>Type a message...</span>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span>📎</span>
                      <span>📷</span>
                      <span className="text-emerald-400">🎙️</span>
                    </div>
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
