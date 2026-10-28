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
    <footer className="bg-[#02040a]/85 backdrop-blur-xl pt-16 pb-12 text-[#94A3B8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/automexlogowhite.png" 
                alt="Automex" 
                width={140} 
                height={38} 
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Official WhatsApp Business API platform for marketing, broadcasts, and automated customer messaging. Built on enterprise-grade infrastructure with AI chatbots, shared team inboxes, and global reach.
            </p>
            <p className="text-xs text-[#94A3B8]/80 font-medium">
              Automex is a brand owned and operated by{" "}
              <a 
                href="https://hypex.automextechnologies.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#38bdf8] underline underline-offset-2 transition-colors font-semibold"
              >
                Hypex
              </a>{" "}
              (hypex.automextechnologies.com).
            </p>
          </div>

          {/* Product Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href={getPath("#whatsapp")} className="hover:text-white transition-colors">
                  WhatsApp Business API
                </Link>
              </li>
              <li>
                <Link href={getPath("#capabilities")} className="hover:text-white transition-colors">
                  Marketing Broadcasts
                </Link>
              </li>
              <li>
                <Link href={getPath("#capabilities")} className="hover:text-white transition-colors">
                  Automated Messaging
                </Link>
              </li>
              <li>
                <Link href={getPath("#capabilities")} className="hover:text-white transition-colors">
                  Shared Team Inbox
                </Link>
              </li>
              <li>
                <Link href={getPath("#capabilities")} className="hover:text-white transition-colors">
                  AI Sales Chatbot
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels & Solutions Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Channels &amp; Solutions</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href={getPath("#channels")} className="hover:text-white transition-colors">
                  Marketing Campaigns
                </Link>
              </li>
              <li>
                <Link href={getPath("#channels")} className="hover:text-white transition-colors">
                  Alerts &amp; Updates
                </Link>
              </li>
              <li>
                <Link href={getPath("#channels")} className="hover:text-white transition-colors">
                  OTP &amp; Verification
                </Link>
              </li>
              <li>
                <Link href={getPath("#industries")} className="hover:text-white transition-colors">
                  Industry Playbooks
                </Link>
              </li>
              <li>
                <Link href={getPath("#how-it-works")} className="hover:text-white transition-colors">
                  Live in a Day Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact &amp; Location</h4>
            <div className="space-y-2 text-xs">
              <p className="text-white font-medium">Automex Technologies</p>
              <p className="text-zinc-400 leading-relaxed">
                Omkaar tower, Thali Road, near Mariyamman Kovil, Palayam, Kozhikode, Keralam 673002
              </p>
              <div className="pt-1 space-y-1">
                <div>
                  <a href="mailto:connect@automextechnologies.com" className="text-[#38bdf8] hover:underline font-mono">
                    connect@automextechnologies.com
                  </a>
                </div>
                <div className="flex flex-col gap-1 font-mono text-zinc-300">
                  <a href="tel:+918921847262" className="hover:text-white">+91 8921847262</a>
                  <a 
                    href="https://wa.me/918921847262?text=Hi%2C%20I%20would%20like%20to%20know%20more" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-sans text-[11px] font-semibold"
                  >
                    <span>💬 WhatsApp Us</span>
                  </a>
                  <a href="tel:+918848927464" className="hover:text-white">+91 8848927464</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2025 – 2026 Automex Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href={getPath("#contact")} className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
