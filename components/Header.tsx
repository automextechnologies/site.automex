"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPath = (id: string) => {
    return pathname === "/" ? id : `/${id}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-zinc-200/50 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/automexlogoblack.png" 
            alt="Automex" 
            width={150} 
            height={40} 
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-primary hover:opacity-70"
          >
            Home
          </Link>
          <Link
            href={getPath("#whatsapp")}
            className="text-sm font-semibold text-brand-primary hover:opacity-70"
          >
            WhatsApp API
          </Link>
          <Link
            href={getPath("#rcs")}
            className="text-sm font-semibold text-brand-primary hover:opacity-70"
          >
            RCS Messaging
          </Link>
        </nav>

        <Link
          href={getPath("#contact")}
          className="btn-primary flex items-center gap-2"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
