"use client";

const industries = [
  {
    title: "E-commerce & Retail",
    desc: "Confirm orders, recover abandoned carts, and let shoppers browse a catalogue and check out without ever leaving the chat.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 6h15l-1.5 9h-12z" />
        <path d="M6 6 5 3H2" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Banking & Finance",
    desc: "Send secure OTPs, transaction alerts and payment reminders on a verified, branded number customers know they can trust.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10 12 4l9 6" />
        <path d="M5 10v8M19 10v8M9 10v8M15 10v8M3 21h18" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    desc: "Confirm appointments, flag reports as ready, and run follow-up reminders — without tying up front-desk staff.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Travel & Hospitality",
    desc: "Share booking confirmations, boarding and itinerary updates, and handle check-in or rebooking in a single ongoing thread.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.1-2 .7l-.5.7 6.4 3.7-3.4 3.4-2.8-.7-.9.9 2.5 1.8 1.8 2.5.9-.9-.7-2.8 3.4-3.4 3.7 6.4.7-.5c.6-.4.9-1.2.7-2z" />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    desc: "Reply to leads in seconds, send listing details and photos, and book site visits before the interest cools.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V7l8-4v18M13 10h4v11M9 10h.01M9 14h.01M9 18h.01" />
      </svg>
    ),
  },
  {
    title: "Education",
    desc: "Answer admissions queries, send fee reminders, and keep students and parents updated on attendance, exams and events.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export default function IndustrySolutionsSection() {
  return (
    <section id="industries" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Telinfy Exact Layout & Typography) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00D2FF]">
            <span>BUILT FOR YOUR INDUSTRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            WhatsApp that works the way <br />
            <span className="text-laser-gradient">your business does</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            However you sell or support, the WhatsApp Business API turns everyday outreach into conversations people actually answer.
          </p>
        </div>

        {/* 2x3 Grid of 6 Industry Cards (Telinfy Exact Layout) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="cyber-panel rounded-2xl p-6 sm:p-7 flex items-start gap-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#02040a] text-[#00D2FF] border border-[#00D2FF]/30 shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                {ind.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {ind.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
