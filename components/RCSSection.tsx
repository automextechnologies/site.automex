import Image from "next/image";

const stats = [
  { label: "Higher Read Rate", value: "200%" },
  { label: "Better Engagement", value: "150%" },
  { label: "More Conversations", value: "40%" },
];

export default function RCSSection() {
  return (
    <section id="rcs" className="bg-brand-primary py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              RCS Messaging: <br />
              <span className="text-blue-400">Branded, Interactive Conversations</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-zinc-300 lg:mx-0">
              Deliver an app-like experience directly in the SMS inbox. RCS (Rich Communication Services) 
              offers verified branding, rich media, and interactive suggested replies for unparalleled engagement.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-2xl bg-white/10 p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 md:text-3xl">{stat.value}</div>
                  <div className="text-[10px] font-bold tracking-wider uppercase text-zinc-400 md:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-block w-full rounded-full bg-white px-8 py-4 text-center text-lg font-bold text-brand-primary transition-all hover:bg-zinc-200 sm:w-auto">
              Contact Us
            </a>
          </div>
          
          <div className="relative flex-1">
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="relative z-10 w-full overflow-hidden rounded-3xl bg-zinc-900/50 p-2 border border-white/10 shadow-2xl">
              <Image
                src="/rcs_mockup.png"
                alt="RCS Messaging Mockup"
                width={800}
                height={600}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
