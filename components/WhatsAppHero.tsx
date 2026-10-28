"use client";

import Link from "next/link";

export default function WhatsAppHero() {
  return (
    <section
      id="whatsapp"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28"
    >
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main 2-Column Hero Grid Matching Telinfy Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* WhatsApp Icon Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#061810]/80 px-4 py-1.5 text-xs font-semibold text-emerald-400 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
              <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.086.087-.176.182-.075.355.101.173.45 0.742.965 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.505.549-.679.116-.173.231-.144.39-.087.159.058 1.011.477 1.184.563.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
              </svg>
              <span>Official WhatsApp Business API</span>
            </div>

            {/* Exact Telinfy Headline with Laser Accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              AI-driven WhatsApp marketing &amp; automation on the <br className="hidden sm:block" />
              <span className="text-laser-gradient">official Business API</span>
            </h1>

            {/* Exact Telinfy Description */}
            <p className="mx-auto max-w-xl text-base sm:text-lg text-[#94A3B8] leading-relaxed lg:mx-0">
              Run marketing campaigns, broadcasts and automated messages on the channel your customers actually open. The official WhatsApp Business API with AI chatbots, a shared team inbox, rich templates and analytics.
            </p>

            {/* Exact Telinfy CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#contact"
                className="btn-laser w-full sm:w-auto text-sm sm:text-base"
              >
                <span>Book a Meeting</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href="https://wa.me/918921847262?text=Hi%2C%20I%20would%20like%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-cyber w-full sm:w-auto text-sm sm:text-base"
              >
                <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.086.087-.176.182-.075.355.101.173.45 0.742.965 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.505.549-.679.116-.173.231-.144.39-.087.159.058 1.011.477 1.184.563.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Fidelity Phone Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Cyber Phone Mockup */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] rounded-[40px] border-2 border-white/15 bg-[#050914] p-3.5 shadow-[0_0_50px_rgba(0,102,255,0.25)] backdrop-blur-2xl">
              
              {/* Phone Inner Screen */}
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0b141a]">
                
                {/* WhatsApp Chat Top Header */}
                <div className="flex items-center justify-between border-b border-white/10 bg-[#1f2c34] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#00D2FF]/20 text-white font-bold border border-[#00D2FF]/40 text-xs">
                      <span>AM</span>
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#1f2c34]"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-white text-xs">
                        <span>Automex Official</span>
                        <svg className="w-3.5 h-3.5 text-[#00D2FF]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div className="text-[10px] text-emerald-400">Official Business Account</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400 text-xs">
                    <span>📞</span>
                    <span>⋮</span>
                  </div>
                </div>

                {/* Message Stream */}
                <div className="p-4 space-y-3 bg-[#0b141a] text-xs">
                  
                  {/* Order notification */}
                  <div className="self-start max-w-[90%] rounded-2xl rounded-tl-sm bg-[#1f2c34] p-3 text-white shadow-md border border-white/5 space-y-1">
                    <div className="text-[10px] text-[#00D2FF] font-bold uppercase tracking-wider">Order Dispatched</div>
                    <p className="font-bold text-white text-xs">Your order #2847 is on its way 📦</p>
                    <p className="text-[11px] text-zinc-300">Arriving Thursday · ShopMart</p>
                    <div className="text-[9px] text-right text-zinc-400">10:30 AM</div>
                  </div>

                  {/* Customer Reply */}
                  <div className="self-end ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#005c4b] p-2.5 text-white shadow-md text-right">
                    <p className="text-xs">Perfect, thanks! 🙌</p>
                    <div className="text-[9px] text-emerald-200 mt-0.5">10:31 AM ✓✓</div>
                  </div>

                  {/* Abandoned Cart Quick recovery card */}
                  <div className="self-start max-w-[92%] rounded-2xl bg-[#1f2c34] p-3 text-white border border-white/5 space-y-2">
                    <p className="text-[11px] text-zinc-200">Flash Sale Alert: 25% off unlocked for your cart!</p>
                    <div className="py-2 px-3 rounded-lg bg-[#0066FF]/20 text-[#00D2FF] font-bold text-center border border-[#00D2FF]/30 text-[11px]">
                      Claim Discount &amp; Check Out →
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
