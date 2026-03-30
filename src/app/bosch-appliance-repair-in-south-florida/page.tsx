import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bosch Appliance Repair in South Florida",
  description:
    "Expert Bosch appliance repair in South Florida. Professional service for all Bosch refrigerators and appliances. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/bosch-appliance-repair-in-south-florida/",
  },
  openGraph: {
    title:
      "Bosch Appliance Repair in South Florida - Sub-Zero Repair Services",
    description:
      "Expert Bosch appliance repair in South Florida. Professional service for all Bosch refrigerators and appliances. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/bosch-appliance-repair-in-south-florida/",
  },
};

const brandServices = [
  "Refrigerator Repair",
  "Freezer Repair",
  "Dishwasher Repair",
  "Oven Repair",
  "Cooktop Repair",
];

export default function BoschBrandPage() {
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
            <span className="text-gray-200">Bosch</span>
          </nav>
          <div className="flex items-center gap-6">
            <Image
              src="/images/brands/bosch-logo.webp"
              alt="Bosch Logo"
              width={120}
              height={60}
              className="h-16 w-auto bg-white/10 rounded-lg p-2"
            />
            <h1 className="text-4xl md:text-5xl font-bold">
              Bosch Appliance Repair in South Florida
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#555555] leading-relaxed">
                Bosch appliances are renowned for their German engineering,
                precision craftsmanship, and innovative technology. When your
                Bosch appliance needs repair, you deserve technicians who
                understand the sophisticated systems that make Bosch products
                exceptional. Our factory-trained team provides expert Bosch
                repair service throughout South Florida.
              </p>
              <p className="text-[#555555] leading-relaxed">
                From Bosch refrigerators with VitaFresh technology to their
                whisper-quiet dishwashers and precision cooking appliances, we
                have the knowledge and genuine Bosch parts to restore your
                appliance to peak performance. Our technicians stay current with
                the latest Bosch models and repair techniques.
              </p>
              <h2 className="text-2xl font-bold text-[#111111] mt-8">
                Services We Offer for Bosch
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
                <h3 className="font-semibold mb-2">Schedule Bosch Repair</h3>
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
