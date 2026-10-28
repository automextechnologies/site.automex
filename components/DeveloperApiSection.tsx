"use client";

import Link from "next/link";

const integrations = [
  { name: "Zoho CRM", category: "CRM & Pipelines", color: "#E42528", icon: "🔴" },
  { name: "LeadSquared", category: "Lead Management", color: "#1E88E5", icon: "🔷" },
  { name: "Shopify", category: "E-Commerce", color: "#96BF48", icon: "🛍️" },
  { name: "Kylas CRM", category: "Growth Engine", color: "#00ACC1", icon: "🔺" },
  { name: "WooCommerce", category: "Online Store", color: "#96588A", icon: "🛒" },
  { name: "Salesforce", category: "Enterprise CRM", color: "#00A1E0", icon: "☁️" },
  { name: "Google Sheets", category: "Data Sync", color: "#0F9D58", icon: "📊" },
  { name: "Custom Webhooks", category: "REST API", color: "#00D2FF", icon: "⚡" },
];

export default function DeveloperApiSection() {
  return (
    <section id="integrations" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Brochure Page 10) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00D2FF]">
            <span>ENTERPRISE CONNECTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Developer <br />
            <span className="text-laser-gradient">API &amp; Plugins</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Connect your business tools with the AUTOMEX API. Plug into your favorite CRMs, ERPs, and e-commerce stores in minutes.
          </p>
        </div>

        {/* Central Hub Visualization Matching Brochure Page 10 */}
        <div className="cyber-panel rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Central WhatsApp API Node (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#02040a]/90 border border-[#00D2FF]/30 shadow-xl">
              <div className="relative mb-6">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-[0_0_35px_rgba(37,211,102,0.5)] border-2 border-white/20">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.086.087-.176.182-.075.355.101.173.45 0.742.965 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.505.549-.679.116-.173.231-.144.39-.087.159.058 1.011.477 1.184.563.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
                  </svg>
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#02040a] text-[#25D366] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#25D366]/40 uppercase tracking-wider">
                  Cloud API v2.0
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white">WhatsApp Business API</h3>
              <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed max-w-xs">
                Official high-speed Meta Cloud API with bi-directional webhooks and 99.99% uptime SLA.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[#0066FF]/20 border border-[#00D2FF]/30 text-[#00D2FF] font-mono">REST JSON</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono">Webhooks</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono">Node / Python</span>
              </div>
            </div>

            {/* Right: Branching Integration Connectors (7 cols) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5">
              {integrations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-[#02040a]/80 hover:border-[#00D2FF]/40 hover:bg-[#050e24] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00D2FF] transition-colors">{item.name}</h4>
                      <p className="text-[11px] text-zinc-400">{item.category}</p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">✓ Ready</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Code Snippet Preview */}
        <div className="rounded-2xl border border-white/10 bg-[#02040a]/90 p-5 max-w-3xl mx-auto font-mono text-xs text-zinc-300 overflow-x-auto shadow-xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-zinc-400 text-[11px]">
            <span>POST /api/v1/messages/send</span>
            <span className="text-emerald-400">Content-Type: application/json</span>
          </div>
          <pre className="text-sky-300">
{`curl -X POST https://api.automextechnologies.com/v1/messages/send \\
  -H "Authorization: Bearer YOUR_AUTOMEX_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+918921847262",
    "type": "template",
    "template": {
      "name": "welcome_automation",
      "language": { "code": "en_US" }
    }
  }'`}
          </pre>
        </div>

      </div>
    </section>
  );
}
