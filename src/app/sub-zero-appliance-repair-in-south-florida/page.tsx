import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sub-Zero Appliance Repair in South Florida",
  description:
    "Certified Sub-Zero appliance repair in South Florida. Expert service for refrigerators, freezers, ice makers, wine coolers, and marine units. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/sub-zero-appliance-repair-in-south-florida/",
  },
  openGraph: {
    title:
      "Sub-Zero Appliance Repair in South Florida - Sub-Zero Repair Services",
    description:
      "Certified Sub-Zero appliance repair in South Florida. Expert service for refrigerators, freezers, ice makers, wine coolers, and marine units. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/sub-zero-appliance-repair-in-south-florida/",
  },
};

const brandServices = [
  "Refrigerator Repair",
  "Freezer Repair",
  "Ice Maker Repair",
  "Wine Cooler Repair",
  "Marine Refrigeration Repair",
];

export default function SubZeroBrandPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/brands-we-service" className="hover:text-white">
              Brands We Service
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Sub-Zero</span>
          </nav>
          <div className="flex items-center gap-6">
            <Image
              src="/images/brands/sub-zero-logo.webp"
              alt="Sub-Zero Logo"
              width={120}
              height={60}
              className="h-16 w-auto bg-white/10 rounded-lg p-2"
            />
            <h1 className="text-4xl md:text-5xl font-bold">
              Sub-Zero Appliance Repair in South Florida
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#555555] leading-relaxed">
                As South Florida&apos;s premier Sub-Zero repair specialists, we
                provide expert service for the full range of Sub-Zero appliances.
                Our factory-trained technicians have over 30 years of experience
                maintaining and repairing Sub-Zero refrigeration equipment.
              </p>
              <p className="text-[#555555] leading-relaxed">
                We service all Sub-Zero models including built-in refrigerators,
                freestanding units, wine coolers, ice makers, and marine
                refrigeration systems. Every repair uses genuine Sub-Zero parts
                to maintain your appliance&apos;s performance and warranty.
              </p>
              <h2 className="text-2xl font-bold text-[#111111] mt-8">
                Services We Offer for Sub-Zero
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {brandServices.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[#555555]">
                    <svg
                      className="w-5 h-5 text-[#0099CC]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] text-white rounded-lg p-6 text-center sticky top-24">
                <h3 className="font-semibold mb-2">Schedule Sub-Zero Repair</h3>
                <p className="text-sm text-gray-300 mb-4">
                  24/7 availability with same-day service
                </p>
                <a
                  href="tel:+18006514528"
                  className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors w-full mb-3"
                >
                  (800) 651-4528
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0099CC] px-6 py-3 rounded-md font-semibold transition-colors w-full"
                >
                  Request Service Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
