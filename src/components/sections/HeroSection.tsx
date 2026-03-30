import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF5F7] min-h-[650px] lg:min-h-[750px]">
      {/* Hero image - absolutely positioned, covering right ~70% of the section */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Orange accent circle */}
        <div
          className="absolute z-[1]"
          style={{
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "#f89406",
            top: "20%",
            left: "38%",
          }}
        />
        <div className="absolute inset-0 z-[2] flex items-end justify-center">
          <Image
            src="/images/hero.webp"
            alt="Sub-Zero Appliance Repair Technician"
            width={1200}
            height={850}
            className="object-contain object-bottom w-auto h-full max-h-[750px]"
            style={{ marginLeft: "20%" }}
            priority
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md lg:max-w-lg py-20 lg:py-32">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#152232] leading-[1.22]">
            Same-Day Sub-Zero Appliance Repair Across South Florida
          </h1>
          <p className="mt-5 text-[15px] text-[#555555] leading-relaxed">
            Fast, reliable repair services for Sub-Zero refrigerators, freezers,
            ice makers, and more.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-sm font-semibold text-sm transition-colors"
            >
              Request Service Call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-[#1C3A5E] text-[#1C3A5E] hover:bg-[#1C3A5E] hover:text-white px-6 py-3 rounded-sm font-semibold text-sm transition-colors"
            >
              View Services
            </Link>
          </div>

          {/* Divider */}
          <div className="mt-6 w-full max-w-sm border-t border-gray-300" />

          {/* Emergency Call Line */}
          <div className="mt-5 flex items-center gap-3">
            <span className="w-8 h-8 bg-[#f89406] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <div className="text-[16px] font-semibold">
              <span className="text-[#f89406] font-bold">
                Emergency Call:
              </span>{" "}
              <a
                href="tel:+18006514528"
                className="text-[#152232] font-bold hover:underline"
              >
                +1 800 651 4528
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom blue accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0099CC] to-[#00c6ff] z-20" />
    </section>
  );
}
