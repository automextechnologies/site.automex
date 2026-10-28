"use client";

import Link from "next/link";

export default function ClickToWhatsAppAdsSection() {
  return (
    <section id="ads" className="relative bg-[#030712] py-20 sm:py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Background glow and theme mesh */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-br from-pink-600/15 via-[#0757C8]/20 to-[#25D366]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-44 h-44 automex-dot-grid opacity-20 pointer-events-none hidden md:block"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-[#0c1830] px-4 py-1.5 text-xs font-bold tracking-wide text-[#38bdf8]">
            <span>META ADS TO CONVERSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Click to <br />
            <span className="text-gradient-cobalt">WhatsApp Ads</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Turn Facebook and Instagram ads into direct, high-intent WhatsApp conversations with zero drop-off.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: 3 Pillars from Brochure Page 8 */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            
            <div className="p-5 rounded-2xl bg-[#09101f] border border-white/10 hover:border-blue-500/40 transition-all text-left">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Connect social campaigns</h3>
                  <p className="mt-1 text-sm text-[#94A3B8] leading-relaxed">
                    Run Facebook and Instagram ads with a direct "Chat on WhatsApp" call-to-action button, seamlessly integrated with Meta Pixel.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#09101f] border border-white/10 hover:border-emerald-500/40 transition-all text-left">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600/20 text-[#25D366] border border-emerald-500/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Start WhatsApp chats instantly</h3>
                  <p className="mt-1 text-sm text-[#94A3B8] leading-relaxed">
                    Let interested customers message you with a single tap. Skip lengthy website forms and checkout friction.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#09101f] border border-white/10 hover:border-sky-500/40 transition-all text-left">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600/20 text-[#38bdf8] border border-sky-500/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Convert interest into sales</h3>
                  <p className="mt-1 text-sm text-[#94A3B8] leading-relaxed">
                    Turn ad clicks into real conversations and lifetime customers using automated product suggestions and 1-click WhatsApp checkout.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_25px_rgba(7,87,200,0.5)] inline-flex items-center gap-2"
              >
                <span>Setup Click-to-WhatsApp Ads</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Funnel from FB Ad -> WhatsApp Chat (Brochure Page 8) */}
          <div className="flex-1 w-full max-w-lg space-y-6">
            
            {/* Step 1: Facebook / Instagram Sponsored Ad Card */}
            <div className="rounded-2xl border border-white/15 bg-[#182234] p-4 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    f
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">AUTOMEX Store</div>
                    <span className="text-[10px] text-zinc-400">Sponsored • 📸 Instagram &amp; Facebook</span>
                  </div>
                </div>
                <span className="text-pink-500 font-bold text-lg">📷</span>
              </div>

              {/* Ad Creative */}
              <div className="rounded-xl overflow-hidden bg-gradient-to-r from-emerald-950 via-teal-900 to-sky-950 p-6 text-center border border-white/10">
                <div className="text-3xl mb-1">🧴✨</div>
                <div className="text-sm font-bold text-white">Premium Skincare Collection</div>
                <p className="text-[11px] text-teal-200 mt-1">Natural care for healthy, glowing skin. Shop now &amp; get exclusive offers.</p>
              </div>

              {/* Ad CTA Button */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-zinc-300 font-semibold">Limited stock available</span>
                <button className="px-4 py-2 rounded-lg bg-[#25D366] text-[#050505] font-extrabold text-xs flex items-center gap-1.5 shadow-[0_2px_10px_rgba(37,211,102,0.3)]">
                  <span>Chat on WhatsApp</span>
                  <span>💬</span>
                </button>
              </div>
            </div>

            {/* Connecting Flow Indicator */}
            <div className="flex items-center justify-center gap-3 text-xs text-sky-400 font-bold uppercase tracking-wider">
              <span>Instant 1-Click Transition</span>
              <span className="text-lg">↓</span>
            </div>

            {/* Step 2: Instant WhatsApp Chat Room */}
            <div className="rounded-2xl border border-emerald-500/30 bg-[#0b141a] p-4 shadow-2xl space-y-3">
              <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
                <div className="h-8 w-8 rounded-full bg-[#0757C8] flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-white">AUTOMEX Store</span>
                    <svg className="w-3 h-3 text-[#1D9BF0]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] text-emerald-400">Connected from Facebook Ad</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-2 text-xs">
                <div className="self-end ml-auto bg-[#005c4b] text-white p-2.5 rounded-xl rounded-tr-none max-w-[85%]">
                  Hi! I'm interested in your skincare collection.
                  <div className="text-[9px] text-right text-emerald-200 mt-0.5">10:24 AM ✓✓</div>
                </div>

                <div className="bg-[#1f2c34] text-white p-3 rounded-xl rounded-tl-none max-w-[90%] space-y-2">
                  <p>Hello! 😊 Thanks for your interest! Here is our premium skincare best-sellers:</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                      <div className="font-bold text-white">Hydrating Serum</div>
                      <div className="text-emerald-400 font-mono font-bold">$29.00</div>
                    </div>
                    <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                      <div className="font-bold text-white">Daily Moisturizer</div>
                      <div className="text-emerald-400 font-mono font-bold">$24.00</div>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-300">Would you like to place an order or need help choosing?</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
