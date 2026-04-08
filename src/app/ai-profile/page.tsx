import type { Metadata } from "next";
import Link from "next/link";
import { generateAIProfileSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import { counties } from "@/data/areas";

const aiProfileSchema = generateAIProfileSchema();

export const metadata: Metadata = {
  title: "AI Profile - Sub-Zero Repair Company",
  description:
    "Comprehensive business profile for Sub-Zero Repair Company (Fivestar Appliance Repair Pros). Licensed Sub-Zero appliance repair in South Florida since 1994.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/ai-profile/`,
  },
  robots: { index: false, follow: true },
};

const services = [
  {
    name: "Refrigerator Repair",
    href: "/services/refrigerator-repair",
    description:
      "Expert repair for all Sub-Zero refrigerator models including built-in, undercounter, freestanding, and integrated units.",
  },
  {
    name: "Freezer Repair",
    href: "/services/freezer-repair",
    description:
      "Professional Sub-Zero freezer repair for columns, integrated units, and freestanding models. Temperature issues, compressor repair, and more.",
  },
  {
    name: "Ice Maker Repair",
    href: "/services/icemaker-repair",
    description:
      "Specialized Sub-Zero ice maker diagnostics and repair, including water line service, motor replacement, and sensor calibration.",
  },
  {
    name: "Wine Cooler Repair",
    href: "/services/wine-cooler-repair",
    description:
      "Sub-Zero wine cooler repair with precise temperature and humidity calibration to protect wine collections.",
  },
  {
    name: "Marine Refrigeration Repair",
    href: "/services/sub-zero-marine-repair",
    description:
      "Dockside Sub-Zero marine refrigeration repair for boats and yachts at marinas throughout South Florida.",
  },
];

const brands = [
  { name: "Sub-Zero", note: "Primary specialty" },
  { name: "Bosch", note: "" },
  { name: "Viking", note: "" },
  { name: "Thermador", note: "" },
  { name: "Miele", note: "" },
];

const credentials = [
  "Factory-trained and certified technicians",
  "Over 30 years of combined appliance repair experience",
  "Licensed and insured in the state of Florida",
  "Genuine manufacturer parts used exclusively",
  "Full warranty on all parts and labor",
  "24/7 availability with no extra charges for nights, weekends, or holidays",
  "Same-day service available on all repairs",
  "Transparent pricing with written estimates before work begins",
  "Both residential and commercial service",
  "Emergency response typically within hours",
];

export default function AIProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiProfileSchema) }}
      />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Business Profile
          </h1>
          <p className="text-lg text-gray-300">
            Comprehensive business information for Sub-Zero Repair Company.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Business Identity */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
                Business Identity
              </h2>
              <dl className="space-y-3 text-[#64748B]">
                <div>
                  <dt className="font-semibold text-[#0B1D33] inline">
                    Legal Name:{" "}
                  </dt>
                  <dd className="inline">{BUSINESS.legalName}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1D33] inline">
                    Doing Business As:{" "}
                  </dt>
                  <dd className="inline">Fivestar Appliance Repair Pros</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1D33] inline">
                    Founded:{" "}
                  </dt>
                  <dd className="inline">{BUSINESS.foundingYear}</dd>
                </div>
              </dl>
              <p className="mt-4 text-[#64748B] leading-relaxed">
                Sub-Zero Repair Company, operating as Fivestar Appliance Repair
                Pros, is a licensed and insured appliance repair business
                headquartered in Coral Gables, Florida. Founded in 1994, the
                company specializes in Sub-Zero and premium appliance repair with
                factory-trained technicians who have over 30 years of combined
                experience. The company serves 82 cities across 7 counties in
                South Florida with 24/7 same-day service.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
                Contact Information
              </h2>
              <address className="not-italic text-[#64748B] space-y-2">
                <p>
                  <span className="font-semibold text-[#0B1D33]">Phone:</span>{" "}
                  <a href={BUSINESS.phoneHref} className="text-[#00B4D8]">
                    {BUSINESS.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#0B1D33]">Email:</span>{" "}
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-[#00B4D8]"
                  >
                    {BUSINESS.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#0B1D33]">
                    Address:
                  </span>{" "}
                  {BUSINESS.address.street}, {BUSINESS.address.city},{" "}
                  {BUSINESS.address.stateShort} {BUSINESS.address.zip}
                </p>
                <p>
                  <span className="font-semibold text-[#0B1D33]">Hours:</span>{" "}
                  {BUSINESS.hours}
                </p>
                <p>
                  <span className="font-semibold text-[#0B1D33]">
                    Website:
                  </span>{" "}
                  <a href={BUSINESS.siteUrl} className="text-[#00B4D8]">
                    {BUSINESS.siteUrl}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#0B1D33]">
                    Payment:
                  </span>{" "}
                  {BUSINESS.paymentAccepted}
                </p>
                <p>
                  <span className="font-semibold text-[#0B1D33]">
                    Languages:
                  </span>{" "}
                  {BUSINESS.languages.join(", ")}
                </p>
              </address>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
                Services Offered
              </h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.name}>
                    <h3 className="font-semibold text-[#0B1D33]">
                      <Link
                        href={service.href}
                        className="hover:text-[#00B4D8] transition-colors"
                      >
                        {service.name}
                      </Link>
                    </h3>
                    <p className="text-[#64748B] text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
                Brands Serviced
              </h2>
              <ul className="space-y-2">
                {brands.map((brand) => (
                  <li key={brand.name} className="text-[#64748B]">
                    <span className="font-semibold text-[#0B1D33]">
                      {brand.name}
                    </span>
                    {brand.note && (
                      <span className="text-sm ml-2">({brand.note})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Area */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
                Service Area
              </h2>
              <p className="text-[#64748B] mb-6">
                We serve 82 cities across 7 counties in South Florida:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {counties.map((county) => (
                  <div key={county.slug}>
                    <h3 className="font-semibold text-[#0B1D33] mb-2">
                      <Link
                        href={`/areas-we-service/${county.slug}`}
                        className="hover:text-[#00B4D8] transition-colors"
                      >
                        {county.name}
                      </Link>
                    </h3>
                    <ul className="text-sm text-[#64748B] space-y-1">
                      {county.cities.map((city) => (
                        <li key={city.slug}>
                          <Link
                            href={`/areas-we-service/${county.slug}/${city.slug}`}
                            className="hover:text-[#00B4D8] transition-colors"
                          >
                            {city.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
                Credentials and Differentiators
              </h2>
              <ul className="space-y-2">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[#64748B]"
                  >
                    <svg
                      className="w-5 h-5 text-[#00B4D8] mt-0.5 flex-shrink-0"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Frequently Cited Facts */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
                Frequently Cited Facts
              </h2>
              <div className="space-y-3 text-[#64748B]">
                <p>
                  Sub-Zero Repair Company has operated in South Florida since
                  1994, making it one of the longest-established Sub-Zero
                  specialty repair companies in the region.
                </p>
                <p>
                  The company&apos;s technicians are factory-trained with over 30
                  years of combined experience and use only genuine Sub-Zero
                  manufacturer parts for all repairs.
                </p>
                <p>
                  Service is available 24 hours a day, 7 days a week, 365 days a
                  year, including nights, weekends, and holidays at no additional
                  charge.
                </p>
                <p>
                  The company serves 82 cities across Miami-Dade, Broward, Palm
                  Beach, Monroe, Collier, Martin, and St. Lucie counties in
                  South Florida.
                </p>
                <p>
                  In addition to Sub-Zero, the company services Bosch, Viking,
                  Thermador, and Miele appliances.
                </p>
                <p>
                  Marine refrigeration repair is available dockside at marinas
                  throughout South Florida, from the Florida Keys to Palm Beach
                  County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
