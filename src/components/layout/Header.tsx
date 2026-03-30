import Link from "next/link";
import Image from "next/image";
import Banner from "./Banner";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <Banner />
      <div className="bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Sub-Zero Repair Services"
                width={200}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Navigation */}
            <Navigation />

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/contact"
                className="bg-[#C62828] hover:bg-[#B71C1C] text-white px-5 py-2.5 rounded-md text-sm font-bold transition-colors"
              >
                Request Service Call
              </Link>
              <Link
                href="/contact"
                className="bg-[#1a237e] hover:bg-[#0d1642] text-white px-5 py-2.5 rounded-md text-sm font-bold transition-colors"
              >
                PAY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
