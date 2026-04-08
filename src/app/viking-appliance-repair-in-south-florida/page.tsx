import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Viking Appliance Repair in South Florida",
  description:
    "Professional Viking appliance repair in South Florida. Expert technicians for all Viking refrigerators and appliances. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/viking-appliance-repair-in-south-florida/",
  },
  openGraph: {
    title:
      "Viking Appliance Repair in South Florida - Sub-Zero Repair Services",
    description:
      "Professional Viking appliance repair in South Florida. Expert technicians for all Viking refrigerators and appliances. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/viking-appliance-repair-in-south-florida/",
  },
};

const brandServices = [
  "Refrigerator Repair",
  "Freezer Repair",
  "Range Repair",
  "Oven Repair",
  "Dishwasher Repair",
];

export default function VikingBrandPage() {
  return (
    <>
      <section className="bg-[#0387cc] text-white py-16">
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
            <span className="text-gray-200">Viking</span>
          </nav>
          <div className="flex items-center gap-6">
            <Image
              src="/images/brands/viking-logo.webp"
              alt="Viking Logo"
              width={120}
              height={60}
              className="h-16 w-auto bg-white/10 rounded-lg p-2"
            />
            <h1 className="text-4xl md:text-5xl font-bold">
              Viking Appliance Repair in South Florida
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#64748B] leading-relaxed">
                Viking appliances are built for performance, delivering
                professional-grade cooking and refrigeration to discerning
                homeowners. When your Viking appliance needs service, our
                experienced technicians provide the expert care these
                high-performance machines demand. We service all Viking models
                throughout South Florida.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                From Viking Professional Series ranges with their powerful
                burners to Viking refrigerators designed for optimal food
                preservation, our team has the training and genuine Viking parts
                to handle any repair. We understand the engineering behind
                Viking&apos;s commercial-grade components and deliver repairs
                that restore full performance.
              </p>
              <h2 className="text-2xl font-bold text-[#0B1D33] mt-8">
                Services We Offer for Viking
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {brandServices.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[#64748B]">
                    <svg
                      className="w-5 h-5 text-[#00B4D8]"
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
              <div className="bg-[#0387cc] text-white rounded-lg p-6 text-center sticky top-24">
                <h3 className="font-semibold mb-2">Schedule Viking Repair</h3>
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
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#00B4D8] px-6 py-3 rounded-md font-semibold transition-colors w-full"
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
