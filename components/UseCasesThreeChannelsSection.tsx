"use client";

const channelUseCases = [
  {
    title: "Marketing campaigns",
    desc: "Launch offers, product drops and re-engagement campaigns to opted-in audiences — with rich images, buttons and analytics on every send.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Alerts & updates",
    desc: "Send order confirmations, shipping updates, appointment reminders and payment receipts the instant they happen — read within minutes, not hours.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "OTP & verification",
    desc: "Deliver one-time passcodes and login verification straight to the app your customers already trust, with faster, more reliable receipt than email.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function UseCasesThreeChannelsSection() {
  return (
    <section id="channels" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Telinfy Exact Layout) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00D2FF]">
            <span>MARKET · NOTIFY · VERIFY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            From marketing campaigns to OTPs — <br />
            <span className="text-laser-gradient">one WhatsApp channel</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            From the alert that has to land to the marketing campaign that has to convert — all on the app your customers open every day.
          </p>
        </div>

        {/* 3 Pillars Grid (Telinfy Exact 3-column Layout) */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {channelUseCases.map((channel, idx) => (
            <div
              key={idx}
              className="cyber-panel rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#02040a] text-[#00D2FF] border border-[#00D2FF]/30 shadow-[0_0_20px_rgba(0,210,255,0.2)] mb-6">
                  {channel.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {channel.title}
                </h3>
                
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {channel.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Channel 0{idx + 1}</span>
                <span className="text-[#00D2FF] font-sans font-semibold">✓ Official API</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
