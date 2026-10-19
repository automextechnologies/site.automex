"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  const getPath = (id: string) => {
    return pathname === "/" ? id : `/${id}`;
  };

  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12 text-[#94A3B8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Logo & Brand Ownership */}
          <div className="space-y-3 text-center md:text-left">
            <Link href="/" className="inline-block py-1">
              <Image 
                src="/automexlogowhite.png" 
                alt="Automex" 
                width={130} 
                height={34} 
                className="h-8 w-auto object-contain mx-auto md:mx-0"
              />
            </Link>
            <p className="text-xs text-[#94A3B8]/90 font-medium leading-relaxed max-w-xs mx-auto md:mx-0">
              Automex is a brand owned and operated by{" "}
              <a 
                href="https://hypex.automextechnologies.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#38bdf8] underline underline-offset-2 transition-colors font-semibold"
              >
                Hypex
              </a>{" "}
              (
              <a 
                href="https://hypex.automextechnologies.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#38bdf8] hover:underline"
              >
                hypex.automextechnologies.com
              </a>
              ).
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-semibold text-[#94A3B8] pt-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href={getPath("#contact")} className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
          
          {/* Company Details */}
          <div className="text-center md:text-right space-y-1.5 text-xs text-[#94A3B8]">
            <div className="text-sm font-bold text-white">Automex Technologies</div>
            <p className="text-xs text-[#94A3B8]/80 max-w-sm mx-auto md:ml-auto md:mr-0 leading-relaxed">
              Omkaar tower, Thali Road, near Mariyamman Kovil, Palayam, Kozhikode, Keralam 673002
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 gap-y-1 pt-1">
              <a 
                href="mailto:connect@automextechnologies.com" 
                className="hover:text-white text-[#38bdf8] transition-colors"
              >
                connect@automextechnologies.com
              </a>
              <span>•</span>
              <a 
                href="tel:+918848927464" 
                className="hover:text-white transition-colors"
              >
                +91 884 892 7464
              </a>
            </div>
            <div className="text-[11px] text-[#94A3B8]/60 pt-2">
              © 2026 Automex Technologies. All rights reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
