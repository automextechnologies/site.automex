const features = [
  {
    title: "Shared Team Inbox",
    description: "Manage all customer conversations from a single shared number with multi-agent support and smart routing.",
    icon: "📥",
  },
  {
    title: "Campaign Broadcast",
    description: "Send automated alerts, OTPs, and promotional messages with high delivery rates and detailed analytics.",
    icon: "📣",
  },
  {
    title: "Automated Chatbots",
    description: "Build interactive chatbots with quick nodes and click-to-action buttons to handle FAQs 24/7.",
    icon: "🤖",
  },
  {
    title: "WhatsApp Calling",
    description: "Initiate voice calls directly within the chat interface for personalized and immediate customer service.",
    icon: "📞",
  },
];

export default function WhatsAppFeatures() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-primary md:text-5xl">
            Everything you need to <span className="text-accent">scale</span>
          </h2>
          <p className="mt-4 text-lg text-brand-primary/60">
            Powerful tools to transform your customer engagement on WhatsApp.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-zinc-100 bg-zinc-50 p-8 transition-all hover:border-brand-primary/30 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-brand-primary">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-brand-primary/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
