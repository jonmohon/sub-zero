import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recent Work - Sub-Zero Repair Check-Ins",
  description:
    "See our recent Sub-Zero appliance repair work across South Florida. Real service calls from Miami-Dade, Broward, and Palm Beach counties.",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/checkins/",
  },
};

const checkins = [
  {
    id: 1,
    location: "Coral Gables, FL",
    county: "Miami-Dade County",
    service: "Sub-Zero Refrigerator Repair",
    description:
      "Diagnosed and repaired a compressor issue on a Sub-Zero BI-36U built-in refrigerator. Replaced the start relay and capacitor with genuine Sub-Zero parts. Unit restored to optimal cooling temperature within one visit.",
    image: "/images/checkins/checkin-coral-gables.webp",
    date: "March 2026",
  },
  {
    id: 2,
    location: "Fort Lauderdale, FL",
    county: "Broward County",
    service: "Sub-Zero Ice Maker Repair",
    description:
      "Serviced a Sub-Zero undercounter ice maker that stopped producing ice. Replaced the water inlet valve and cleaned the condenser coils. Ice production fully restored same day.",
    image: "/images/checkins/checkin-fort-lauderdale.webp",
    date: "March 2026",
  },
  {
    id: 3,
    location: "Boca Raton, FL",
    county: "Palm Beach County",
    service: "Sub-Zero Wine Cooler Repair",
    description:
      "Repaired temperature fluctuation issue on a Sub-Zero wine storage unit. Replaced the thermistor sensor and recalibrated the temperature control board. Both zones now maintaining proper temperatures.",
    image: "/images/checkins/checkin-boca-raton.webp",
    date: "February 2026",
  },
  {
    id: 4,
    location: "Naples, FL",
    county: "Collier County",
    service: "Sub-Zero Freezer Repair",
    description:
      "Addressed frost buildup in a Sub-Zero 700 series freezer column. Replaced the defrost timer and heater assembly. Freezer now cycling properly with no excess frost.",
    image: "/images/checkins/checkin-naples.webp",
    date: "February 2026",
  },
  {
    id: 5,
    location: "Key Largo, FL",
    county: "Monroe County",
    service: "Marine Refrigeration Repair",
    description:
      "Dockside service call for a Sub-Zero marine refrigeration system. Repaired a refrigerant leak and recharged the system. Unit tested and running at proper operating temperatures.",
    image: "/images/checkins/checkin-key-largo.webp",
    date: "January 2026",
  },
  {
    id: 6,
    location: "West Palm Beach, FL",
    county: "Palm Beach County",
    service: "Sub-Zero Refrigerator Maintenance",
    description:
      "Completed preventive maintenance on a dual Sub-Zero refrigerator and freezer column setup. Cleaned condenser coils, inspected door gaskets, checked temperature calibration, and replaced the water filter.",
    image: "/images/checkins/checkin-west-palm-beach.webp",
    date: "January 2026",
  },
];

export default function CheckinsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recent Work</h1>
          <p className="text-lg text-gray-300">
            See our latest Sub-Zero appliance repair check-ins from across South
            Florida.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {checkins.map((checkin) => (
              <article
                key={checkin.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={checkin.image}
                    alt={`${checkin.service} in ${checkin.location}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span>{checkin.date}</span>
                    <span>|</span>
                    <span>{checkin.county}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0387cc] mb-1">
                    {checkin.service}
                  </h2>
                  <p className="text-sm text-[#00B4D8] font-medium mb-3">
                    {checkin.location}
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {checkin.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white rounded-lg p-8 inline-block">
              <h2 className="text-xl font-bold mb-2">
                Need Sub-Zero Repair Service?
              </h2>
              <p className="text-gray-300 mb-4">
                Same-day service available across South Florida
              </p>
              <a
                href="tel:+18006514528"
                className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Call (800) 651-4528
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
