import Image from "next/image";
import Link from "next/link";
import BrandThemeBackground from "./BrandThemeBackground";

export default function RCSSection() {
  return (
    <section id="rcs" className="bg-[#050505] py-20 sm:py-28 text-white relative overflow-hidden border-t border-white/[0.06]">
      {/* Main Theme Background from Reference Image: Flowing Blue Ribbon Waves & Glow Flare */}
      <BrandThemeBackground variant="rcs" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-16">
          
          {/* Text Column */}
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left z-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12]">
              RCS Messaging: <br />
              <span className="text-gradient-cobalt">Branded, Interactive Conversations</span>
            </h2>
            
            <p className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-[#94A3B8] lg:mx-0">
              Deliver an app-like experience directly in the SMS inbox. RCS (Rich Communication Services) 
              offers verified branding, rich media, and interactive suggested replies for unparalleled engagement.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#contact"
                className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-bold px-8 py-4 rounded-xl shadow-[0_4px_25px_rgba(7,87,200,0.5)] hover:shadow-[0_8px_35px_rgba(7,87,200,0.8)] transition-all duration-300 flex items-center justify-center gap-2.5 group w-full sm:w-auto text-base"
              >
                <span>Contact Us</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Phone Only (No Image BG, No Container Box) */}
          <div className="relative flex-1 w-full flex items-center justify-center z-10">
            {/* Soft radiant ambient glow underneath the phone */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#0757C8]/30 blur-[100px] pointer-events-none"></div>

            <div className="relative transition-transform duration-700 hover:scale-[1.03]">
              <Image
                src="/rcs_dark_phone_only.png"
                alt="RCS Messaging Phone Mockup"
                width={700}
                height={850}
                priority
                className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_0_60px_rgba(7,87,200,0.35)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
