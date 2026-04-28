"use client";

import { useState } from "react";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
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
    <section id="contact" className="bg-zinc-50 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-primary md:text-5xl">
                Let's Build Something <br />
                <span className="text-brand-primary">Extraordinary</span>
              </h2>
              <p className="mt-6 text-lg text-brand-primary/60">
                Ready to transform your customer engagement? Reach out to our team of experts today.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <span className="text-brand-primary"><PhoneIcon /></span>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-semibold text-brand-primary">+91 884 892 7464</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <span className="text-brand-primary"><MailIcon /></span>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Email</p>
                  <p className="text-lg font-semibold text-brand-primary">automextechnologies@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <span className="text-brand-primary"><MapPinIcon /></span>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Address</p>
                  <p className="text-lg font-semibold text-brand-primary">Palayam, Kozhikode</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <form onSubmit={handleSubmit} className="relative rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl lg:p-12">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-brand-primary">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none focus:border-brand-primary transition-all"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-brand-primary">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 000 000 0000"
                    required
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none focus:border-brand-primary transition-all"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-brand-primary">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none focus:border-brand-primary transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`btn-primary flex items-center justify-center gap-2 py-4 ${
                    status === "loading" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                  ) : (
                    <SendIcon />
                  )}
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-center text-sm font-semibold text-green-600">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-center text-sm font-semibold text-red-600">
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
