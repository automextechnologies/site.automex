"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        scrolled
          ? "glass-nav py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Brand Logo following clear space guidelines */}
        <Link href="/" className="flex items-center gap-2 group focus:outline-none">
          <Image
            src="/automexlogowhite.png"
            alt="Automex"
            width={140}
            height={38}
            priority
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-white/90 hover:text-[#0757C8] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href={getPath("#whatsapp")}
            className="text-sm font-semibold text-white/90 hover:text-[#0757C8] transition-colors duration-200"
          >
            WhatsApp API
          </Link>
          <Link
            href={getPath("#rcs")}
            className="text-sm font-semibold text-white/90 hover:text-[#0757C8] transition-colors duration-200"
          >
            RCS Messaging
          </Link>
        </nav>

        {/* CTA Button & Mobile Hamburger Trigger */}
        <div className="flex items-center gap-3">
          <Link
            href={getPath("#contact")}
            className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-semibold hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm !py-2.5 !px-5 rounded-xl shadow-[0_4px_20px_rgba(7,87,200,0.45)] transition-all group"
          >
            <span>Contact Us</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-[#1A1F2B] text-white hover:border-[#0757C8]/60 transition-colors focus:outline-none active:scale-95"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#0757C8] py-2 border-b border-white/5 transition-colors"
            >
              Home
            </Link>
            <Link
              href={getPath("#whatsapp")}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#0757C8] py-2 border-b border-white/5 transition-colors"
            >
              WhatsApp API
            </Link>
            <Link
              href={getPath("#rcs")}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#0757C8] py-2 border-b border-white/5 transition-colors"
            >
              RCS Messaging
            </Link>
            <div className="pt-2">
              <Link
                href={getPath("#contact")}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary bg-[#0757C8] hover:bg-[#0c6bf0] text-white font-semibold w-full text-center py-3.5 rounded-xl shadow-[0_4px_25px_rgba(7,87,200,0.5)] flex items-center justify-center gap-2 group"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
