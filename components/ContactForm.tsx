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
        mode: "no-cors" // Standard for Google Script submissions
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#050505] py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 sm:w-96 sm:h-96 blue-flare blur-3xl pointer-events-none opacity-25"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-12 sm:gap-16 lg:flex-row">
          
          {/* Left Column: Contact Information */}
          <div className="flex-1 space-y-8 sm:space-y-12 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Let's Build Something <br />
                <span className="text-gradient-cobalt">Extraordinary</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Ready to transform your customer engagement? Reach out to our team of experts today.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
              <a
                href="tel:+918848927464"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1A1F2B]/80 p-4 transition-all hover:border-[#0757C8]/50 hover:bg-[#1A1F2B] group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#050505] text-[#38bdf8] border border-white/10 group-hover:bg-[#0757C8] group-hover:text-white transition-all">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Phone</p>
                  <p className="text-base sm:text-lg font-semibold text-white group-hover:text-[#38bdf8] transition-colors">+91 884 892 7464</p>
                </div>
              </a>

              <a
                href="mailto:connect@automextechnologies.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1A1F2B]/80 p-4 transition-all hover:border-[#0757C8]/50 hover:bg-[#1A1F2B] group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#050505] text-[#38bdf8] border border-white/10 group-hover:bg-[#0757C8] group-hover:text-white transition-all">
                  <MailIcon />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Email</p>
                  <p className="text-base sm:text-lg font-semibold text-white group-hover:text-[#38bdf8] transition-colors truncate">connect@automextechnologies.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#1A1F2B]/80 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#050505] text-[#38bdf8] border border-white/10">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Address</p>
                  <p className="text-sm sm:text-base font-semibold text-white leading-snug">
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
              className="relative rounded-3xl border border-white/10 bg-[#1A1F2B]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
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
                    placeholder="John Doe"
                    required
                    className="rounded-xl border border-white/10 bg-[#050505] px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-500 outline-none focus:border-[#0757C8] focus:ring-1 focus:ring-[#0757C8] transition-all"
                  />
                </div>
                
                <div className="grid gap-2 text-left">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 000 000 0000"
                    required
                    className="rounded-xl border border-white/10 bg-[#050505] px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-500 outline-none focus:border-[#0757C8] focus:ring-1 focus:ring-[#0757C8] transition-all"
                  />
                </div>
                
                <div className="grid gap-2 text-left">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="rounded-xl border border-white/10 bg-[#050505] px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-500 outline-none focus:border-[#0757C8] focus:ring-1 focus:ring-[#0757C8] transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white w-full py-4 text-base font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(7,87,200,0.5)] transition-all ${
                    status === "loading" ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                  ) : (
                    <SendIcon />
                  )}
                  <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                </button>

                {status === "success" && (
                  <p className="text-center text-sm font-semibold text-emerald-400">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-center text-sm font-semibold text-red-400">
                    Something went wrong. Please try again later.
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
