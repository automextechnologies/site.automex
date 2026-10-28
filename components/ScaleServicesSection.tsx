"use client";

import Link from "next/link";

const scaleServices = [
  {
    title: "Business manager verification support",
    desc: "Complete documentation assistance to verify your Meta Business Manager quickly and eliminate API rate limits.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Integration support",
    desc: "Dedicated engineering assistance to hook AUTOMEX APIs into your CRM, ERP, Shopify, WooCommerce, or custom databases.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Blue Tick verification support",
    desc: "End-to-end guidance and direct Meta submission to achieve official Green/Blue Tick verification status on WhatsApp.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Build WhatsApp E-Commerce platform",
    desc: "Turn WhatsApp into a full digital storefront with catalogs, product collections, interactive shopping carts, and 1-click buy.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Chatbot development",
    desc: "Custom AI & rule-based chatbot architecture designed by conversational experts tailored to your business workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Payment Gateway integration",
    desc: "Seamless UPI, Razorpay, Cashfree, Stripe, and credit card integration directly inside WhatsApp conversations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function ScaleServicesSection() {
  return (
    <section id="services" className="relative bg-[#030712] py-20 sm:py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Background glow and theme mesh */}
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[550px] bg-[#0757C8]/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-44 h-44 automex-dot-grid opacity-20 pointer-events-none hidden md:block"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Section Header (Brochure Page 12) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-[#0c1830] px-4 py-1.5 text-xs font-bold tracking-wide text-[#38bdf8]">
            <span>END-TO-END IMPLEMENTATION PARTNER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Connect With Our Team And <br />
            <span className="text-gradient-cobalt">Scale Your Business On WhatsApp</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Our specialized engineers provide full onboarding, API integration, and official Meta verification to get your brand running at scale.
          </p>
        </div>

        {/* 6 Services Grid (Brochure Page 12) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {scaleServices.map((svc, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-[#081021]/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00D2FF] hover:bg-[#0e1a38] hover:shadow-[0_15px_35px_rgba(7,87,200,0.25)] hover:-translate-y-1"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#030712] text-[#38bdf8] border border-white/10 group-hover:bg-[#0757C8] group-hover:text-white transition-all shadow-inner mb-5">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Service 0{idx + 1}</span>
                <span className="text-sky-400 font-sans font-semibold group-hover:underline">Explore →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact Highlight Banner Matching Brochure Page 12 Footer */}
        <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-blue-950/80 via-[#0a1630] to-blue-950/80 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Ready to deploy official WhatsApp Business API?
          </h3>
          <p className="text-sm text-sky-200 mb-6 max-w-lg mx-auto">
            Speak directly with our technical deployment team in Kerala, India for quick onboarding.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-semibold text-white">
            <a
              href="mailto:connect@automextechnologies.com"
              className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors"
            >
              <span>✉️</span>
              <span>connect@automextechnologies.com</span>
            </a>
            <span className="text-white/20 hidden sm:inline">•</span>
            <a
              href="tel:+918921847262"
              className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors"
            >
              <span>📞</span>
              <span>+91 8921847262</span>
            </a>
            <span className="text-white/20 hidden sm:inline">•</span>
            <a
              href="tel:+918848927464"
              className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors"
            >
              <span>📞</span>
              <span>+91 8848927464</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
