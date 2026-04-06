"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
          }`}
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Sub-Zero Repair Services"
              width={200}
              height={50}
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-8 lg:h-9" : "h-10 lg:h-12"
              }`}
              priority
            />
          </Link>

          <Navigation />

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,148,6,0.3)] whitespace-nowrap"
            >
              Request Service Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
