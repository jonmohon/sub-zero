import Link from "next/link";

export default function Banner() {
  return (
    <>
      {/* Green promo banner */}
      <div className="bg-[#4CAF50] text-white text-center py-2 px-4 text-sm font-medium">
        <Link href="/contact" className="hover:underline">
          Get 15% off any appliance repair—book today!
        </Link>
      </div>
      {/* Blue info bar */}
      <div className="bg-[#0099CC] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-sm md:text-base">
          <span className="font-medium">Available 365 Days a Year: Nights, Weekends &amp; Holidays</span>
          <a href="tel:+18006514528" className="flex items-center gap-2 font-bold hover:text-gray-100 transition-colors">
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            +1 800 651 4528
          </a>
        </div>
      </div>
    </>
  );
}
