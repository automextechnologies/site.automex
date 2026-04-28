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
    <footer className="border-t border-zinc-100 bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Image 
              src="/automexlogoblack.png" 
              alt="Automex" 
              width={120} 
              height={30} 
              className="h-8 w-auto object-contain"
            />
          </div>
          
          <div className="flex gap-8 text-sm font-semibold text-brand-primary/60">
            <Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
            <Link href={getPath("#contact")} className="hover:text-brand-primary transition-colors">Contact Us</Link>
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-sm font-bold text-brand-primary">Automex Technologies</div>
            <div className="text-xs text-brand-primary/60">Palayam, Kozhikode | +91 884 892 7464</div>
            <div className="mt-1 text-[10px] text-brand-primary/40">
              © 2026 Automex Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
