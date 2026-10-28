"use client";

import { useState } from "react";
import Link from "next/link";

const chatbotFeatures = [
  "Drag & drop chatbot flows",
  "Multiple chatbots in one account",
  "Automatically assign agents",
  "Flexible workflow nodes",
  "Seamless live-agent handoff",
  "WhatsApp CRM integration",
];

export default function ChatbotBuilderSection() {
  const [activeStep, setActiveStep] = useState<"greeting" | "products" | "support" | "track">("greeting");

  return (
    <section id="chatbot" className="relative bg-[#020617] py-20 sm:py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Background glow and dot matrix */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#00D2FF]/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-16 right-12 w-48 h-48 automex-dot-grid opacity-20 pointer-events-none hidden md:block"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-[#0c1830] px-4 py-1.5 text-xs font-bold tracking-wide text-[#38bdf8]">
            <span>VISUAL AUTOMATION STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            No-Code <br />
            <span className="text-gradient-cobalt">Chatbot Builder</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Build your chatbot in minutes — no coding required. Automate answers, guide purchase decisions, and route complex cases to live human agents.
          </p>
        </div>

        {/* Visual Studio Canvas + Live Phone Simulation (Brochure Page 7) */}
        <div className="rounded-3xl border border-sky-500/25 bg-[#080f1e]/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(7,87,200,0.2)] mb-14">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Workflow Canvas Mockup (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500/70"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500/70"></div>
                  <span className="text-xs font-mono text-zinc-400 ml-2">Chatbot Builder: "Lead Qualification Bot"</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Active &amp; Published
                </span>
              </div>

              {/* Canvas Nodes with Visual Connectors */}
              <div className="space-y-4 relative py-2">
                
                {/* Node 1: Trigger */}
                <div className="p-4 rounded-xl border border-sky-500/30 bg-[#0c162c] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                      ⚡
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-emerald-400">Trigger</span>
                      <p className="text-xs sm:text-sm font-semibold text-white">When a customer sends a message</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Any Keyword</span>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-2 text-sky-400 font-bold">↓</div>

                {/* Node 2: Send Message with Buttons */}
                <div className="p-4 rounded-xl border border-sky-400/50 bg-[#0d1a36] shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-9 w-9 rounded-lg bg-[#0757C8]/40 text-[#38bdf8] flex items-center justify-center font-bold text-xs border border-sky-400/40">
                      💬
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-sky-400">Send Message &amp; Options</span>
                      <p className="text-xs text-zinc-200">"Hello! Welcome to AUTOMEX. How can we help you today?"</p>
                    </div>
                  </div>

                  {/* Interactive Button Nodes */}
                  <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-xs">
                    <button
                      onClick={() => setActiveStep("products")}
                      className={`p-2 rounded-lg font-semibold transition-all border text-center ${
                        activeStep === "products"
                          ? "bg-[#0757C8] text-white border-sky-400"
                          : "bg-black/40 text-zinc-300 border-white/10 hover:border-white/30"
                      }`}
                    >
                      🛍️ View Products
                    </button>
                    <button
                      onClick={() => setActiveStep("support")}
                      className={`p-2 rounded-lg font-semibold transition-all border text-center ${
                        activeStep === "support"
                          ? "bg-[#0757C8] text-white border-sky-400"
                          : "bg-black/40 text-zinc-300 border-white/10 hover:border-white/30"
                      }`}
                    >
                      👨‍💼 Talk to Support
                    </button>
                    <button
                      onClick={() => setActiveStep("track")}
                      className={`p-2 rounded-lg font-semibold transition-all border text-center ${
                        activeStep === "track"
                          ? "bg-[#0757C8] text-white border-sky-400"
                          : "bg-black/40 text-zinc-300 border-white/10 hover:border-white/30"
                      }`}
                    >
                      📦 Track Order
                    </button>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-2 text-sky-400 font-bold">↓</div>

                {/* Node 3: Condition / Action Result */}
                <div className="p-4 rounded-xl border border-indigo-500/30 bg-[#0c162c] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs border border-indigo-500/30">
                      🔀
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-indigo-400">Branching Logic</span>
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {activeStep === "products" && "Branch: Send Interactive Product Catalog"}
                        {activeStep === "support" && "Branch: Seamless Live-Agent Handoff & Alert"}
                        {activeStep === "track" && "Branch: Query Shipping API & Return Live Status"}
                        {activeStep === "greeting" && "Select any option to test branching logic"}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Auto Executed</span>
                </div>

              </div>
            </div>

            {/* Right Column: Live Chat Simulation Phone (5 cols) */}
            <div className="lg:col-span-5 max-w-sm mx-auto w-full">
              <div className="rounded-[36px] border-[4px] border-zinc-700 bg-[#0b141a] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(7,87,200,0.3)] overflow-hidden">
                
                {/* Header */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-2.5 border-b border-white/5">
                  <div className="h-8 w-8 rounded-full bg-[#0757C8] flex items-center justify-center text-white font-bold text-xs">
                    🤖
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-white">AUTOMEX Bot</span>
                      <svg className="w-3 h-3 text-[#1D9BF0]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-[10px] text-emerald-400">Always Active</span>
                  </div>
                </div>

                {/* Chat Stream */}
                <div className="p-4 space-y-3 min-h-[380px] bg-[#0b141a] flex flex-col justify-end text-xs">
                  
                  {/* User Question */}
                  <div className="self-end bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                    Hi, I'm interested in your platform!
                    <div className="text-[9px] text-right text-emerald-200 mt-1">10:24 AM ✓✓</div>
                  </div>

                  {/* Bot Greeting */}
                  <div className="self-start bg-[#1f2c34] text-white p-3.5 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm space-y-2 border border-white/5">
                    <p>Hello! 👋 Welcome to AUTOMEX. How can we help you today?</p>
                    
                    <div className="space-y-1.5 pt-1">
                      <button
                        onClick={() => setActiveStep("products")}
                        className={`w-full py-1.5 px-3 rounded-lg border text-left flex items-center justify-between text-xs transition-colors ${
                          activeStep === "products" ? "bg-[#0757C8] text-white border-sky-400" : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <span>🛍️ View Products</span>
                        <span>→</span>
                      </button>
                      <button
                        onClick={() => setActiveStep("support")}
                        className={`w-full py-1.5 px-3 rounded-lg border text-left flex items-center justify-between text-xs transition-colors ${
                          activeStep === "support" ? "bg-[#0757C8] text-white border-sky-400" : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <span>👨‍💼 Talk to Support</span>
                        <span>→</span>
                      </button>
                      <button
                        onClick={() => setActiveStep("track")}
                        className={`w-full py-1.5 px-3 rounded-lg border text-left flex items-center justify-between text-xs transition-colors ${
                          activeStep === "track" ? "bg-[#0757C8] text-white border-sky-400" : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <span>📦 Track Order</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Response based on selected option */}
                  {activeStep === "products" && (
                    <div className="self-start bg-[#1f2c34] text-white p-3 rounded-2xl rounded-tl-sm max-w-[90%] border border-emerald-500/30 animate-in fade-in duration-200">
                      <p className="font-bold text-emerald-400">Here is our digital catalog! 🚀</p>
                      <p className="text-[11px] text-zinc-300 mt-1">Browse our top-rated collections and check out directly on WhatsApp.</p>
                    </div>
                  )}

                  {activeStep === "support" && (
                    <div className="self-start bg-[#1f2c34] text-white p-3 rounded-2xl rounded-tl-sm max-w-[90%] border border-sky-500/30 animate-in fade-in duration-200">
                      <p className="font-bold text-sky-400">Connecting you to Agent Rahul...</p>
                      <p className="text-[11px] text-zinc-300 mt-1">An executive will join this chat in less than 30 seconds.</p>
                    </div>
                  )}

                  {activeStep === "track" && (
                    <div className="self-start bg-[#1f2c34] text-white p-3 rounded-2xl rounded-tl-sm max-w-[90%] border border-amber-500/30 animate-in fade-in duration-200">
                      <p className="font-bold text-amber-400">Order #ATM-9821</p>
                      <p className="text-[11px] text-zinc-300 mt-1">Status: Out for delivery today via BlueDart.</p>
                    </div>
                  )}

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 6 Feature Checkpoints from Brochure Page 7 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chatbotFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#09101f]/80 hover:border-sky-500/40 transition-all"
            >
              <div className="h-7 w-7 rounded-full bg-[#0757C8]/30 border border-sky-400 text-sky-300 flex items-center justify-center text-xs font-bold shrink-0">
                ✓
              </div>
              <span className="text-sm font-semibold text-white">{feat}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_25px_rgba(7,87,200,0.5)] inline-flex items-center gap-2"
          >
            <span>Create Your First Chatbot</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
