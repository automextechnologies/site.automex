"use client";

import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Verify your business with Meta",
    desc: "Complete official Meta Business Manager verification with our guided onboarding team to unlock higher messaging tiers.",
    badge: "Step 1",
  },
  {
    step: "02",
    title: "Connect a number and claim your display name",
    desc: "Bring your existing landline, toll-free, or new mobile number. Set your official verified business display name.",
    badge: "Step 2",
  },
  {
    step: "03",
    title: "Submit message templates for approval",
    desc: "Submit rich promotional, utility, and authentication templates directly through the AUTOMEX dashboard with instant approvals.",
    badge: "Step 3",
  },
  {
    step: "04",
    title: "Build a no-code chatbot and inbox routing",
    desc: "Set up drag-and-drop conversational flows, trigger keywords, and assign round-robin team member queues.",
    badge: "Step 4",
  },
  {
    step: "05",
    title: "Launch broadcasts and track delivery & replies",
    desc: "Broadcast personalized messages to thousands of opt-in contacts in seconds with per-campaign delivery, open, and response telemetry.",
    badge: "Step 5",
  },
];

export default function HowItWorksStepsSection() {
  return (
    <section id="how-it-works" className="relative bg-[#020617] py-20 sm:py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Background glow and theme mesh */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0757C8]/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-44 h-44 automex-dot-grid opacity-20 pointer-events-none hidden md:block"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-[#0c1830] px-4 py-1.5 text-xs font-bold tracking-wide text-[#38bdf8]">
            <span>FAST ONBOARDING TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Live in a Day — <br />
            <span className="text-gradient-cobalt">5 Simple Steps to Launch</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            From Meta registration to your first high-volume broadcast — our technical deployment specialists handle every technical hurdle for you.
          </p>
        </div>

        {/* 5 Steps Linear Flow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-14">
          {steps.map((st, idx) => (
            <div
              key={st.step}
              className="group relative rounded-2xl border border-white/10 bg-[#081021]/80 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#00D2FF] hover:bg-[#0e1a38] hover:shadow-[0_10px_25px_rgba(7,87,200,0.25)] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#0757C8]">
                    {st.step}
                  </span>
                  <span className="text-[10px] font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/25">
                    {st.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Phase {st.step}</span>
                <span className="text-emerald-400 font-sans font-semibold">Ready ✓</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-bold px-8 py-4 rounded-xl shadow-[0_4px_25px_rgba(7,87,200,0.5)] inline-flex items-center gap-2 text-base"
          >
            <span>Start Now — Live in a Day</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
