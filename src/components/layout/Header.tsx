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
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="bg-[#C41414] hover:bg-[#a81212] text-white text-[13px] font-semibold px-5 py-1.5 rounded transition-colors text-center whitespace-nowrap"
              >
                Request Service Call
              </Link>
              <Link
                href="/contact"
                className="bg-[#1C3A5E] hover:bg-[#152d4a] text-white text-[13px] font-semibold px-5 py-1.5 rounded transition-colors text-center whitespace-nowrap"
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
