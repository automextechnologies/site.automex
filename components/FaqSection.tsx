"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What is the WhatsApp Business API?",
    a: "It is the official, enterprise way to message customers on WhatsApp at scale — programmatic sending, automation, a shared team inbox and rich, pre-approved templates. Unlike the single-device Business app, the API is built for whole teams and high volumes.",
  },
  {
    q: "How is the WhatsApp Business API different from the WhatsApp Business app?",
    a: "The free app suits one person on one phone. The API runs on cloud infrastructure for entire teams — automation, broadcasting to thousands, chatbots, CRM integration and analytics — with no handset tied to your account.",
  },
  {
    q: "Can I send marketing messages on the WhatsApp Business API?",
    a: "Yes — to opted-in contacts, using pre-approved templates. Marketing, utility and authentication templates each have their own rules, and AUTOMEX helps you stay within WhatsApp's policies so your delivery and quality rating stay healthy.",
  },
  {
    q: "How do WhatsApp marketing broadcasts work?",
    a: "Yes. Use marketing message templates to send promotions, product launches and re-engagement broadcasts to opted-in audiences — with images, buttons, click tracking and per-campaign delivery and read analytics. AUTOMEX keeps every send inside WhatsApp's marketing-template rules so your quality rating stays healthy.",
  },
  {
    q: "Can I send automated messages through the API?",
    a: "Yes. Trigger automated messages — order updates, reminders, welcome flows and follow-up sequences — straight from your CRM, store or backend through the API, and let the no-code chatbot reply 24/7. No agent has to press send.",
  },
  {
    q: "What is a WhatsApp broadcast?",
    a: "A WhatsApp broadcast sends a single message to many opted-in contacts at once — each delivered as a private one-to-one chat, not a visible group. On the Business API you broadcast with pre-approved templates and get delivery, read and reply analytics for every send.",
  },
  {
    q: "How do I broadcast messages on WhatsApp?",
    a: "Import or segment your opted-in contacts, choose a pre-approved template, then schedule or send. On the API there is no 256-contact ceiling like the consumer app — AUTOMEX handles list management, template approval and opt-in compliance so campaigns go out cleanly.",
  },
  {
    q: "Can I send bulk WhatsApp messages?",
    a: "Bulk messages run through the official API using pre-approved templates to opted-in contacts — up to thousands per minute, with per-message delivery and read tracking. Marketing, utility and authentication templates each follow WhatsApp's rules, which AUTOMEX manages for you.",
  },
  {
    q: "How does WhatsApp message templating work?",
    a: "Outside an open conversation you send pre-approved template messages. Once a customer replies, a 24-hour window opens in which you can exchange free-form messages. AUTOMEX manages template submission and approval for you.",
  },
  {
    q: "What do I need to get started with the WhatsApp Business API?",
    a: "A registered business, a phone number that is not active on a personal WhatsApp account, and Meta Business verification. AUTOMEX handles onboarding, number setup, template approval and the green-tick application end to end.",
  },
  {
    q: "How does WhatsApp Business API pricing work?",
    a: "Meta bills per 24-hour conversation, priced by category — marketing, utility or authentication — and by destination country. AUTOMEX gives you transparent rates in your local currency and one dashboard to track usage; talk to us for a plan matched to your volume.",
  },
  {
    q: "Can I get a WhatsApp green tick / blue tick verified badge?",
    a: "The green/blue tick is granted by Meta for notable, verified businesses. AUTOMEX completes your business verification and raises the request, though the final decision always rests with Meta.",
  },
  {
    q: "Can I connect WhatsApp to my CRM or backend systems?",
    a: "Yes. Clean REST APIs, webhooks and ready integrations connect WhatsApp to your CRM, e-commerce store and backend, so messages fire automatically from the systems you already run.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Exact Copy from Telinfy Page) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00D2FF]">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            WhatsApp Business API, <br />
            <span className="text-laser-gradient">answered</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Everything you need to know about official WhatsApp API policies, broadcasts, pricing, and verification.
          </p>
        </div>

        {/* Accordion List (Telinfy Exact Layout) */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#00D2FF]/50 bg-[#050e24]/90 shadow-[0_0_25px_rgba(0,210,255,0.2)]"
                    : "cyber-panel hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white transition-colors">
                    {faq.q}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#00D2FF] transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#00D2FF]/20" : ""}`}>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-white/5 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
