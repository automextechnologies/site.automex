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

  const navLinks = [
    { name: "Platform", href: getPath("#whatsapp") },
    { name: "Capabilities", href: getPath("#capabilities") },
    { name: "Channels", href: getPath("#channels") },
    { name: "Solutions", href: getPath("#industries") },
    { name: "Case Study", href: getPath("#case-study") },
    { name: "Integrations", href: getPath("#integrations") },
    { name: "Plans", href: getPath("#plans") },
    { name: "FAQ", href: getPath("#faq") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Brand Logo */}
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

        {/* Desktop Navigation Links (Telinfy style) */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-semibold text-white/80 hover:text-[#00D2FF] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Hamburger Trigger */}
        <div className="flex items-center gap-3">
          <Link
            href={getPath("#contact")}
            className="btn-laser !py-2.5 !px-5 rounded-full text-xs sm:text-sm group"
          >
            <span>Book a Meeting</span>
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
            className="lg:hidden p-2 rounded-xl border border-white/10 bg-[#050914] text-white hover:border-[#00D2FF]/60 transition-colors focus:outline-none active:scale-95"
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
        <div className="lg:hidden glass-nav border-t border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-white/90 hover:text-[#00D2FF] py-2 transition-colors border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href={getPath("#contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-laser w-full text-center py-3 text-sm rounded-xl"
            >
              <span>Book a Meeting</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
