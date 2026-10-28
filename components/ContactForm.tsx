"use client";

import { useState } from "react";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    
    const formData = new FormData(form);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbygJUF6BOoR3J2Qdud1pBs7EmSnLmPddy7bDaEJIdCD/exec";
    
    try {
      await fetch(scriptUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10">
        <div className="flex flex-col gap-12 sm:gap-16 lg:flex-row">
          
          {/* Left Column: Contact Information */}
          <div className="flex-1 space-y-8 sm:space-y-12 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-3.5 py-1 text-xs font-bold text-[#00D2FF] mb-4">
                <span>CONNECT WITH OUR TEAM</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Scale Your Business <br />
                <span className="text-laser-gradient">On WhatsApp</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Ready to transform your customer engagement? Talk directly to our technical implementation team today.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
              
              {/* Phone Numbers */}
              <div className="cyber-panel rounded-2xl p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#02040a] text-[#00D2FF] border border-[#00D2FF]/30 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                    <PhoneIcon />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Phone Support (Direct)</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1">
                      <a href="tel:+918921847262" className="text-sm sm:text-base font-semibold text-white hover:text-[#00D2FF] transition-colors">
                        +91 8921847262
                      </a>
                      <span className="text-zinc-500 hidden sm:inline">|</span>
                      <a href="tel:+918848927464" className="text-sm sm:text-base font-semibold text-white hover:text-[#00D2FF] transition-colors">
                        +91 8848927464
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:connect@automextechnologies.com"
                className="cyber-panel flex items-center gap-4 rounded-2xl p-4 block"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#02040a] text-[#00D2FF] border border-[#00D2FF]/30 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                  <MailIcon />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Official Email</p>
                  <p className="text-sm sm:text-base font-semibold text-white hover:text-[#00D2FF] transition-colors truncate">
                    connect@automextechnologies.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="cyber-panel flex items-start gap-4 rounded-2xl p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#02040a] text-[#00D2FF] border border-[#00D2FF]/30 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Office Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    Omkaar tower, Thali Road, near Mariyamman Kovil, Palayam, Kozhikode, Keralam 673002
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none">
            <form
              onSubmit={handleSubmit}
              className="cyber-panel rounded-3xl p-6 sm:p-10 shadow-2xl relative"
            >
              <div className="grid gap-5">
                <div className="grid gap-2 text-left">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Arun Kumar"
                    required
                    className="rounded-xl border border-white/10 bg-[#02040a]/90 px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-500 outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all"
                  />
                </div>
                
                <div className="grid gap-2 text-left">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="rounded-xl border border-white/10 bg-[#02040a]/90 px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-500 outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all"
                  />
                  <input type="hidden" name="interest" value="WhatsApp Business API" />
                  <input type="hidden" name="message" value="Requested callback via website form" />
                </div>
                
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`btn-laser w-full py-4 text-base font-bold rounded-xl justify-center ${
                    status === "loading" ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                  ) : (
                    <SendIcon />
                  )}
                  <span>{status === "loading" ? "Connecting..." : "Schedule Onboarding Call"}</span>
                </button>

                {status === "success" && (
                  <p className="text-center text-sm font-semibold text-emerald-400">
                    Thank you! An AUTOMEX specialist will contact you shortly.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-center text-sm font-semibold text-red-400">
                    Something went wrong. Please call us directly at +91 8921847262.
                  </p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
