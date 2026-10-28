"use client";

import { useState } from "react";
import Link from "next/link";

const capabilitiesList = [
  {
    id: "broadcast",
    eyebrow: "MARKETING BROADCASTS",
    title: "Reach thousands at once.",
    highlight: "All opted in.",
    desc: "Send marketing campaigns, offers and updates at up to 3,000 messages a minute, with per-campaign analytics tracking each delivery, read and reply.",
    cta: "Plan a broadcast →",
    href: "#contact",
  },
  {
    id: "automation",
    eyebrow: "AUTOMATED MESSAGING & SEQUENCES",
    title: "Set up once.",
    highlight: "Fires on autopilot.",
    desc: "Fire automated messages — order updates, reminders, welcome flows and follow-up sequences — straight from your CRM, store or backend through the API. No agent has to press send.",
    cta: "See automation →",
    href: "#contact",
  },
  {
    id: "inbox",
    eyebrow: "SHARED TEAM INBOX",
    title: "One number.",
    highlight: "Your whole team.",
    desc: "Rule-based routing auto-assigns each conversation to the right agent. Tags, labels, notes and quick replies keep the whole team in sync — on web, Android and iOS.",
    cta: "Tour the inbox →",
    href: "#contact",
  },
  {
    id: "chatbot",
    eyebrow: "AI SALES AGENT",
    title: "Answers in seconds.",
    highlight: "Closes in chat.",
    desc: "The AI chatbot greets customers, resolves FAQs and hands off to a live agent when it matters — answering the questions a script can't handle.",
    cta: "Explore AI Chatbot →",
    href: "#contact",
  },
  {
    id: "voice",
    eyebrow: "WHATSAPP VOICE",
    title: "Real-time calls.",
    highlight: "Zero dial-in.",
    desc: "Customers escalate from chat to a real-time, end-to-end encrypted voice call — without ever dialing an unknown number.",
    cta: "Explore voice →",
    href: "#contact",
  },
];

const stats = [
  { value: "<100ms", label: "API response time" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "180+", label: "Countries supported" },
];

const trustItems = [
  "Free for 14 days",
  "Dedicated account manager",
  "CRM, Shopify & third-party integrations",
  "No-code chatbot, live in minutes",
];

export default function CoreCapabilitiesSection() {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <section id="capabilities" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Top Part: Left Lead with Title & Stats, Right Lobe with Order Update & Code (Telinfy Exact Layout) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16">
          
          {/* Left Lead: Title, Subtitle & 4 Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00D2FF]">
              <span>OFFICIAL WHATSAPP BUSINESS API</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Everything you need for <br />
              <span className="text-laser-gradient">WhatsApp marketing and automation</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Marketing broadcasts, automated messages and AI replies on enterprise-grade infrastructure — built for reliability, compliance and speed at any volume.
            </p>

            {/* Key Metrics Grid */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10">
              {stats.map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-[#94A3B8]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Lobe: Glass Order Chat Preview & Code Snippet Box */}
          <div className="lg:col-span-6">
            <div className="cyber-panel rounded-3xl p-6 sm:p-7 space-y-4">
              
              {/* Terminal Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 font-mono text-[11px] text-zinc-400">WhatsApp · order_update</span>
                </div>
                <span className="text-[10px] font-mono text-[#00D2FF] bg-[#0066FF]/20 px-2 py-0.5 rounded border border-[#00D2FF]/30">
                  Live Stream
                </span>
              </div>

              {/* Chat Simulation Out/In */}
              <div className="rounded-2xl border border-white/10 bg-[#0b141a]/90 p-4 text-xs space-y-3">
                <div className="self-start max-w-[85%] rounded-2xl rounded-tl-sm bg-[#1f2c34] p-3 text-white space-y-1 shadow-md">
                  <p className="font-bold text-white text-sm">Your order #2847 is on its way 📦</p>
                  <p className="text-zinc-300 text-xs">Arriving Thursday · ShopMart</p>
                  <div className="text-[9px] text-right text-zinc-400">12:31 pm ✓✓</div>
                  <div className="mt-2 pt-2 border-t border-white/10 text-center">
                    <span className="text-xs font-bold text-[#00D2FF]">Track order</span>
                  </div>
                </div>

                <div className="self-end ml-auto max-w-[70%] rounded-2xl rounded-tr-sm bg-[#005c4b] p-2.5 text-white text-right shadow-md">
                  <p className="text-xs">Perfect, thanks! 🙌</p>
                  <div className="text-[9px] text-emerald-200 mt-0.5">12:32 pm</div>
                </div>
              </div>

              {/* Exact Telinfy Code Snippet */}
              <div className="rounded-2xl border border-white/10 bg-[#02040a]/90 p-4 font-mono text-xs text-zinc-300">
                <div className="text-zinc-500 mb-1">// Fire and go</div>
                <div className="text-sky-300 leading-relaxed">
                  <span className="text-purple-400 font-bold">await</span> client.messages.<span className="text-amber-300">bulk</span>({`{`}
                  <div className="pl-4 text-zinc-300">
                    to: <span className="text-emerald-400">contacts</span>,
                  </div>
                  <div className="pl-4 text-zinc-300">
                    template: <span className="text-emerald-300">"order_update"</span>
                  </div>
                  {`});`}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Part: Interactive Accordion Panel with Exact Telinfy Headers & Text */}
        <div className="max-w-4xl mx-auto space-y-3.5 mb-14">
          {capabilitiesList.map((item, idx) => {
            const isOpen = activeItem === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(idx)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 p-5 sm:p-6 ${
                  isOpen
                    ? "border-[#00D2FF]/60 bg-[#050e24]/90 shadow-[0_0_30px_rgba(0,210,255,0.25)]"
                    : "cyber-panel hover:border-white/25"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#00D2FF]">
                      {item.eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-white transition-colors">
                      {item.title} <span className="text-[#00D2FF]">{item.highlight}</span>
                    </h3>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#00D2FF]">
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 pt-3 border-t border-white/10 text-sm text-[#94A3B8] leading-relaxed">
                    <p>{item.desc}</p>
                    <div className="mt-3">
                      <Link
                        href={item.href}
                        className="text-xs font-bold text-[#00D2FF] hover:text-white inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{item.cta}</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust Highlights Strip (Telinfy Exact Layout) */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
