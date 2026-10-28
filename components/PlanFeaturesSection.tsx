"use client";

import { useState } from "react";

interface FeatureRow {
  name: string;
  category?: string;
  noRental: string | boolean;
  starter: string | boolean;
  basic: string | boolean;
  advanced: string | boolean;
}

const planRows: FeatureRow[] = [
  { name: "Campaigns (Unified & Follow Up)", noRental: true, starter: true, basic: true, advanced: true },
  { name: "Reports & Analytics", noRental: true, starter: true, basic: true, advanced: true },
  { name: "Unified Inbox", noRental: true, starter: true, basic: true, advanced: true },
  { name: "Admin Seats", noRental: "1", starter: "1", basic: "1", advanced: "1" },
  { name: "Agent Seats", noRental: false, starter: "2", basic: "6", advanced: "10" },
  { name: "Developer APIs", noRental: false, starter: true, basic: true, advanced: true },
  { name: "Chat Bot Builder", noRental: false, starter: "5 Nodes", basic: "50 Nodes", advanced: "Unlimited" },
  { name: "Team Settings", noRental: false, starter: false, basic: true, advanced: true },
  { name: "Advanced Inbox Rules", noRental: false, starter: false, basic: true, advanced: true },
  { name: "Connect API Webhook", noRental: false, starter: false, basic: true, advanced: true },
  { name: "Plugins & Connectors", noRental: false, starter: false, basic: true, advanced: true },
  { name: "AI Analyst", noRental: false, starter: false, basic: false, advanced: true },
  { name: "Data Backup", noRental: "60 days", starter: "60 days", basic: "90 days", advanced: "90 days" },
  { name: "Media Backup", noRental: "30 days", starter: "30 days", basic: "30 days", advanced: "30 days" },
  { name: "Customer Support", noRental: "Ticket Support", starter: "Ticket Support", basic: "Call & Ticket", advanced: "Dedicated Manager" },
  { name: "Automex AI Sales Agent", noRental: false, starter: false, basic: false, advanced: true },
  { name: "Platform Access", noRental: false, starter: false, basic: false, advanced: true },
  { name: "MCP Connectivity", noRental: false, starter: false, basic: false, advanced: true },
];

export default function PlanFeaturesSection() {
  const [activePlan, setActivePlan] = useState<"noRental" | "starter" | "basic" | "advanced">("basic");

  const getWhatsAppPricingUrl = (planName?: string) => {
    const text = planName
      ? `Hi, please share the ${planName} plan pricing details with me`
      : "Hi, please share the plan pricing details with me";
    return `https://wa.me/918921847262?text=${encodeURIComponent(text)}`;
  };

  const renderVal = (val: string | boolean) => {
    if (val === true) {
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">
          ✓
        </span>
      );
    }
    if (val === false) {
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-zinc-500 font-bold text-xs">
          ✕
        </span>
      );
    }
    return <span className="font-semibold text-white text-xs sm:text-sm">{val}</span>;
  };

  return (
    <section id="plans" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Brochure Page 11) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00D2FF]">
            <span>TRANSPARENT PLANS &amp; MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Plan <span className="text-laser-gradient">Features</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Compare features and choose the right plan for your business. Contact us on WhatsApp for transparent volume pricing.
          </p>

          {/* Mobile Plan Selector Tabs */}
          <div className="flex md:hidden justify-center bg-[#02040a]/90 p-1 rounded-xl border border-white/10 mt-6 max-w-sm mx-auto">
            <button
              onClick={() => setActivePlan("noRental")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activePlan === "noRental" ? "bg-[#0066FF] text-white" : "text-zinc-400"
              }`}
            >
              No Rental
            </button>
            <button
              onClick={() => setActivePlan("starter")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activePlan === "starter" ? "bg-[#0066FF] text-white" : "text-zinc-400"
              }`}
            >
              Starter
            </button>
            <button
              onClick={() => setActivePlan("basic")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activePlan === "basic" ? "bg-[#0066FF] text-white" : "text-zinc-400"
              }`}
            >
              Basic
            </button>
            <button
              onClick={() => setActivePlan("advanced")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activePlan === "advanced" ? "bg-[#0066FF] text-white" : "text-zinc-400"
              }`}
            >
              Advanced
            </button>
          </div>
        </div>

        {/* 4 Plan Hero Cards (Desktop Grid) */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          
          {/* Plan 1: No Rental */}
          <div className="cyber-panel p-5 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-xl mb-1">👤</div>
              <h3 className="text-base font-bold text-white">No Rental</h3>
              <p className="text-xs text-zinc-400 mt-1">Pay-as-you-go broadcasting for starters.</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <span className="text-xs text-[#00D2FF] font-semibold">1 Admin • 0 Agents</span>
              <a
                href={getWhatsAppPricingUrl("No Rental")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center py-2.5 rounded-xl bg-white/5 hover:bg-[#25D366]/20 hover:text-[#25D366] text-xs font-bold text-white border border-white/10 hover:border-[#25D366]/40 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Get Pricing on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Plan 2: Starter */}
          <div className="cyber-panel p-5 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-xl mb-1">👥</div>
              <h3 className="text-base font-bold text-white">Starter</h3>
              <p className="text-xs text-zinc-400 mt-1">Essential tools for small sales teams.</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <span className="text-xs text-[#00D2FF] font-semibold">1 Admin • 2 Agents • 5 Nodes</span>
              <a
                href={getWhatsAppPricingUrl("Starter")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center py-2.5 rounded-xl bg-white/5 hover:bg-[#25D366]/20 hover:text-[#25D366] text-xs font-bold text-white border border-white/10 hover:border-[#25D366]/40 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Get Pricing on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Plan 3: Basic (Featured) */}
          <div className="cyber-panel p-5 rounded-2xl flex flex-col justify-between relative border-2 border-[#00D2FF] shadow-[0_0_30px_rgba(0,210,255,0.25)]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
              Most Popular
            </span>
            <div>
              <div className="text-xl mb-1">🌟</div>
              <h3 className="text-base font-bold text-white">Basic</h3>
              <p className="text-xs text-sky-200 mt-1">Complete WhatsApp CRM &amp; automated flows.</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-xs text-emerald-400 font-bold">1 Admin • 6 Agents • 50 Nodes</span>
              <a
                href={getWhatsAppPricingUrl("Basic")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center py-2.5 rounded-xl btn-laser text-xs font-bold text-white justify-center shadow-lg transition-all"
              >
                <span>Get Pricing on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Plan 4: Advanced */}
          <div className="cyber-panel p-5 rounded-2xl flex flex-col justify-between border border-purple-500/40">
            <div>
              <div className="text-xl mb-1">👑</div>
              <h3 className="text-base font-bold text-white">Advanced</h3>
              <p className="text-xs text-purple-300 mt-1">Full AI Sales Agent &amp; MCP Connectivity.</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <span className="text-xs text-purple-400 font-semibold">1 Admin • 10 Agents • Unlimited Nodes</span>
              <a
                href={getWhatsAppPricingUrl("Advanced")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-lg transition-all flex items-center justify-center gap-1.5"
              >
                <span>Get Pricing on WhatsApp →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Full Comparison Table (Brochure Page 11) */}
        <div className="cyber-panel rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#02040a]/90 text-xs uppercase tracking-wider text-zinc-300">
                  <th className="py-4 px-4 sm:px-6 font-bold text-white w-2/5">Feature</th>
                  <th className="py-4 px-3 sm:px-4 text-center font-bold">No Rental</th>
                  <th className="py-4 px-3 sm:px-4 text-center font-bold">Starter</th>
                  <th className="py-4 px-3 sm:px-4 text-center font-bold text-[#00D2FF] bg-[#0066FF]/20">Basic</th>
                  <th className="py-4 px-3 sm:px-4 text-center font-bold text-purple-300">Advanced</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {planRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-white/[0.02] ${
                      idx % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
                    }`}
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-white flex items-center gap-2">
                      <span className="text-[#00D2FF]/60 font-mono text-xs">•</span>
                      <span>{row.name}</span>
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">{renderVal(row.noRental)}</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">{renderVal(row.starter)}</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center bg-[#0066FF]/10">{renderVal(row.basic)}</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">{renderVal(row.advanced)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Card Redirecting to WhatsApp with Prefilled Message */}
        <div className="mt-12 text-center cyber-panel rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Need Transparent Plan Pricing for Your Team?
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Contact us directly on WhatsApp to receive the complete pricing brochure, volume discounts, and custom enterprise SLA options.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppPricingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-laser px-8 py-4 text-sm sm:text-base font-bold rounded-xl inline-flex items-center gap-2.5 shadow-[0_0_30px_rgba(0,210,255,0.4)]"
            >
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.086.087-.176.182-.075.355.101.173.45 0.742.965 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.505.549-.679.116-.173.231-.144.39-.087.159.058 1.011.477 1.184.563.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
              </svg>
              <span>Get Plan Pricing on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
