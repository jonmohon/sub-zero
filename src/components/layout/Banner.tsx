import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-[#0387cc] text-white py-2 px-4 text-xs border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/contact"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#C9A54E] opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C9A54E]" />
          </span>
          <span className="font-medium tracking-wide">
            Get 15% off any appliance repair—book today!
          </span>
        </Link>
        <a
          href="tel:+18006514528"
          className="hidden sm:flex items-center gap-2 font-semibold text-white hover:text-[#f89406] transition-colors tracking-wide"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +1 800 651 4528
        </a>
      </div>
    </div>
  );
}
