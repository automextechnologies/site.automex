const features = [
  {
    title: "Shared Team Inbox",
    description:
      "Manage all customer conversations from a single shared number with multi-agent support and smart routing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    ),
  },
  {
    title: "Campaign Broadcast",
    description:
      "Send automated alerts, OTPs, and promotional messages with high delivery rates and detailed analytics.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Automated Chatbots",
    description:
      "Build interactive chatbots with quick nodes and click-to-action buttons to handle FAQs 24/7.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Calling",
    description:
      "Initiate voice calls directly within the chat interface for personalized and immediate customer service.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function WhatsAppFeatures() {
  return (
    <section className="bg-[#050505] py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.06]">
      {/* Background flare */}
      <div className="absolute top-1/2 left-0 w-80 h-80 blue-flare blur-3xl pointer-events-none opacity-20"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Everything you need to <span className="text-gradient-cobalt">scale</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Powerful tools to transform your customer engagement on WhatsApp.
          </p>
        </div>

        {/* Features Grid following Brandkit Surfaces */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* 2px stroke icon container according to brandkit style guide */}
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-[#1A1F2B] text-[#38bdf8] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0757C8] group-hover:text-white group-hover:border-[#0757C8]">
                  {feature.icon}
                </div>
                
                <h3 className="mb-3 text-lg sm:text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  {feature.description}
                </p>
              </div>

              {/* Brandkit surface card action arrow */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-500 font-mono">0{index + 1}</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#050505] text-[#94A3B8] border border-white/10 group-hover:bg-[#0757C8] group-hover:text-white group-hover:border-[#0757C8] transition-all">
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
