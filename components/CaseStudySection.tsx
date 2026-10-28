"use client";

import Link from "next/link";

const launchSteps = [
  "Verify your business with Meta",
  "Connect a number and claim your display name",
  "Submit message templates for approval",
  "Build a no-code chatbot and inbox routing",
  "Launch broadcasts and track delivery & replies",
];

export default function CaseStudySection() {
  return (
    <section id="case-study" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Pill Row */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00D2FF]">
            E-COMMERCE · USE CASE
          </span>
        </div>

        {/* 2-Column Split: Case Study Left + 5-Step Tutorial Card Right (Telinfy Exact Layout) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Lead Story & 98% Stat */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-[1.18]">
              Online retailers turn WhatsApp into their{" "}
              <span className="text-laser-gradient">highest-converting</span> sales and support channel
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              A growing online retailer moved order updates, abandoned-cart reminders and customer support onto the WhatsApp Business API. With the vast majority of messages opened — most within minutes — cart recovery and repeat purchases climbed, while a single shared inbox let the support team handle more conversations in less time.
            </p>

            {/* 98% Open Rate Stat Block */}
            <div className="pt-2 flex items-center gap-4">
              <span className="text-5xl sm:text-6xl font-black text-[#00D2FF] tracking-tighter text-cyan-glow">
                98%
              </span>
              <span className="text-sm sm:text-base font-semibold text-white/90 leading-snug">
                of WhatsApp messages <br />
                are opened
              </span>
            </div>
          </div>

          {/* Right Column: Quick Start Tutorial Card (Telinfy Exact Card) */}
          <div className="lg:col-span-6">
            <div className="cyber-panel rounded-3xl p-7 sm:p-9 shadow-2xl space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#00D2FF]">
                  QUICK START TUTORIAL
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Go live on WhatsApp Business API in a day
                </h3>
              </div>

              {/* 5 Steps List */}
              <div className="space-y-3.5 divide-y divide-white/5">
                {launchSteps.map((step, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0 flex items-center gap-3.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0066FF] text-white text-xs font-mono font-bold shadow-md">
                      {idx + 1}
                    </div>
                    <span className="text-sm sm:text-base text-zinc-200 font-medium">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="btn-laser w-full text-center py-3.5 rounded-xl justify-center"
                >
                  <span>Start now →</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
