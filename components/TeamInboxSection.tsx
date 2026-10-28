"use client";

import { useState } from "react";
import Link from "next/link";

const inboxFeatures = [
  {
    title: "Control multiple conversations in a single dashboard",
    desc: "Unify customer chats across multiple numbers into one synchronized omnichannel inbox.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Admin / manager / agent wise login",
    desc: "Granular role-based access control with manager supervision and permission tiers.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Tag conversations",
    desc: "Categorize chats with custom color-coded tags like VIP, Payment Pending, High Priority.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Agent performance analytics",
    desc: "Monitor first response time (FRT), resolution speeds, and customer CSAT scores per agent.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Analytical dashboard",
    desc: "Comprehensive charts tracking conversation volumes, peak hours, and conversion funnels.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Back up chats",
    desc: "Enterprise-grade cloud encryption storing all chat logs and media safely for 60 to 90 days.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

const teamHierarchy = [
  { id: 1, role: "Agent 1", name: "Rahul Sharma", load: "12 active chats", status: "Online" },
  { id: 2, role: "Agent 2", name: "Priya Nair", load: "8 active chats", status: "In Call" },
  { id: 3, role: "Agent 3", name: "Sneha Patel", load: "15 active chats", status: "Online" },
  { id: 4, role: "Agent 4", name: "Amit Kumar", load: "6 active chats", status: "Online" },
];

export default function TeamInboxSection() {
  const [selectedAgent, setSelectedAgent] = useState(0);

  return (
    <section id="inbox" className="relative bg-[#030712] py-20 sm:py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Background glow and theme mesh */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0757C8]/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-12 left-10 w-44 h-44 automex-dot-grid opacity-20 pointer-events-none hidden md:block"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Section Header (Brochure Pages 5 & 6) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-[#0c1830] px-4 py-1.5 text-xs font-bold tracking-wide text-[#38bdf8]">
            <span>TEAM MANAGEMENT &amp; WHATSAPP CRM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            One Inbox for <br />
            <span className="text-gradient-cobalt">Your Entire Team</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Complete team management and WhatsApp CRM for your business. Collaborate effortlessly, assign conversations, and monitor customer satisfaction in real time.
          </p>
        </div>

        {/* Top Interactive Team Hierarchy & Routing Showcase (Page 6) */}
        <div className="rounded-3xl border border-sky-500/25 bg-[#0a1122]/90 p-6 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(7,87,200,0.2)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Hierarchy Tree (Left Column - 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-green"></span>
                <span>Live Multi-Agent Routing Tree</span>
              </div>

              {/* Manager Node */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-950/80 to-[#0757C8]/20 border border-[#00D2FF]/40 shadow-lg">
                <div className="relative">
                  <div className="h-14 w-14 rounded-full bg-indigo-900 border-2 border-amber-400 flex items-center justify-center text-white text-xl font-bold shadow-md">
                    👨‍💼
                  </div>
                  <span className="absolute -top-1 -right-1 text-sm">👑</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Team Manager (Admin)</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-500/30">Super Admin</span>
                  </div>
                  <p className="text-xs text-zinc-300">Oversees 4 agents • Smart auto-load distribution active</p>
                </div>
              </div>

              {/* Tree Lines and Agent Nodes */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/30 space-y-3.5 my-2">
                {teamHierarchy.map((agent, idx) => (
                  <div
                    key={agent.id}
                    onClick={() => setSelectedAgent(idx)}
                    className={`cursor-pointer flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                      selectedAgent === idx
                        ? "border-[#00D2FF] bg-[#0757C8]/30 shadow-[0_0_20px_rgba(0,210,255,0.2)]"
                        : "border-white/10 bg-[#060c18] hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-white border border-white/15">
                          {agent.id === 1 ? "👨" : agent.id === 2 ? "👩" : agent.id === 3 ? "👩‍🦰" : "🧑"}
                        </div>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#25D366] border-2 border-zinc-900"></span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{agent.role}: {agent.name}</span>
                          <span className="text-[10px] text-emerald-400 font-medium">● {agent.status}</span>
                        </div>
                        <span className="text-[11px] text-zinc-400">{agent.load}</span>
                      </div>
                    </div>

                    <div className="text-xs text-sky-400 font-medium flex items-center gap-1">
                      <span>View</span>
                      <span>→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 3 Core Highlights from Page 6 (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-5 rounded-2xl bg-[#080e1c] border border-white/10 hover:border-emerald-500/40 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      👥
                    </div>
                    <h3 className="text-base font-bold text-white">Manage All Teams</h3>
                  </div>
                  <span className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                </div>
                <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                  Organize, group, and control support, sales, and operations teams from a unified control panel.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#080e1c] border border-white/10 hover:border-sky-500/40 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-[#38bdf8] border border-sky-500/20">
                      💬
                    </div>
                    <h3 className="text-base font-bold text-white">Monitor Chats</h3>
                  </div>
                  <span className="h-6 w-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs font-bold">✓</span>
                </div>
                <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                  Track customer conversations in real time, view agent typing status, and intervene with private whispers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#080e1c] border border-white/10 hover:border-indigo-500/40 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      🔄
                    </div>
                    <h3 className="text-base font-bold text-white">Assign Leads Automatically</h3>
                  </div>
                  <span className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">✓</span>
                </div>
                <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                  Route customer inquiries to the right agents efficiently using round-robin, skill tags, or current workload.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom 6 CRM Capabilities Grid (Brochure Page 5) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inboxFeatures.map((feat, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-white/10 bg-[#09101f]/80 hover:border-[#0757C8] hover:bg-[#0f1b36] transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#030712] text-[#38bdf8] border border-white/10 group-hover:bg-[#0757C8] group-hover:text-white transition-all shadow-inner mb-4">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-2">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_25px_rgba(7,87,200,0.5)] inline-flex items-center gap-2"
          >
            <span>Set Up Team CRM</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
