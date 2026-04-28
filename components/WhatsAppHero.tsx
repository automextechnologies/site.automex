import Image from "next/image";

export default function WhatsAppHero() {
  return (
    <section id="whatsapp" className="relative overflow-hidden bg-brand-secondary pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-wider text-brand-primary uppercase shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
              Meta Certified Provider
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-primary md:text-6xl">
              Unlock the Power of <br />
              <span className="text-accent">WhatsApp Business API</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-brand-primary/80 lg:mx-0">
              Scale your business with Meta-certified WhatsApp API. Automate conversations, 
              broadcast to unlimited users, and provide 24/7 support through the world's most popular messaging app.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href="#contact" className="btn-primary w-full px-8 py-4 text-center text-lg sm:w-auto">
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"></div>
            <div className="relative z-10 w-full overflow-hidden rounded-3xl bg-white p-2 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/whatsapp_mockup.png"
                alt="WhatsApp API Mockup"
                width={800}
                height={600}
                className="h-auto w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
