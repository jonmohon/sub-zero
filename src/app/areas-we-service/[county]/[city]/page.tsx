import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { counties } from "@/data/areas";
import { getCityContent, getNearbyAreas, SERVICE_LINKS } from "@/data/city-content";
import { BUSINESS } from "@/lib/constants";
import {
  generateLocalBusinessSchemaForCity,
  generateCityServicesSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

const countiesBySlug = Object.fromEntries(
  counties.map((c) => [c.slug, c])
);

export async function generateStaticParams() {
  const params: { county: string; city: string }[] = [];
  for (const county of counties) {
    for (const city of county.cities) {
      params.push({ county: county.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string; city: string }>;
}): Promise<Metadata> {
  const { county, city } = await params;
  const countyData = countiesBySlug[county];
  if (!countyData) return {};
  const cityData = countyData.cities.find((c) => c.slug === city);
  if (!cityData) return {};
  const title = `Sub-Zero Repair in ${cityData.name}, FL | Same-Day Service`;
  const description = `Sub-Zero repair in ${cityData.name}, FL. Refrigerators, freezers, ice makers & wine coolers. Same-day service. Call (800) 651-4528.`;
  const url = `${BUSINESS.siteUrl}/areas-we-service/${county}/${city}/`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": `${cityData.name}, FL`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ county: string; city: string }>;
}) {
  const { county, city } = await params;
  const countyData = countiesBySlug[county];
  if (!countyData) notFound();
  const cityData = countyData.cities.find((c) => c.slug === city);
  if (!cityData) notFound();

  const services = [
    { name: "Refrigerator Repair", slug: "refrigerator-repair", icon: "M4 6h16M4 10h16M4 14h16M4 18h16", desc: "Built-in, integrated, and freestanding models" },
    { name: "Freezer Repair", slug: "freezer-repair", icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z", desc: "Columns, side-by-side, and standalone units" },
    { name: "Ice Maker Repair", slug: "icemaker-repair", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", desc: "Built-in, undercounter, and standalone ice makers" },
    { name: "Wine Cooler Repair", slug: "wine-cooler-repair", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", desc: "Single-zone, dual-zone, and wine columns" },
    { name: "Marine Refrigeration", slug: "sub-zero-marine-repair", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", desc: "Dockside service for boats and yachts" },
  ];

  const cityUrl = `${BUSINESS.siteUrl}/areas-we-service/${county}/${city}/`;
  const cityContent = getCityContent(city, cityData.name, countyData.name);
  const nearbyAreas = getNearbyAreas(city, county);

  const localBusinessSchema = generateLocalBusinessSchemaForCity(
    cityData.name,
    countyData.name,
    cityUrl
  );
  const servicesSchema = generateCityServicesSchema(
    cityData.name,
    SERVICE_LINKS.map((s) => ({
      name: `Sub-Zero ${s.name} in ${cityData.name}`,
      description: `Expert Sub-Zero ${s.name.toLowerCase()} in ${cityData.name}, FL. Same-day service with genuine parts.`,
      url: `${BUSINESS.siteUrl}/services/${s.slug}/`,
    }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.siteUrl },
    { name: "Areas We Service", url: `${BUSINESS.siteUrl}/areas-we-service/` },
    { name: countyData.name, url: `${BUSINESS.siteUrl}/areas-we-service/${county}/` },
    { name: cityData.name, url: cityUrl },
  ]);
  const faqSchema = generateFAQSchema([
    { question: `How fast can you get to ${cityData.name}?`, answer: `We offer same-day service throughout ${cityData.name} and ${countyData.name}. In most cases, a certified technician can be at your home within hours of your call.` },
    { question: "Do you charge extra for weekends or holidays?", answer: "Never. Our standard service rates apply 24/7, including nights, weekends, and all holidays. No emergency surcharges." },
    { question: "What Sub-Zero appliances do you repair?", answer: "We repair all Sub-Zero products: refrigerators, freezers, ice makers, wine coolers, and marine refrigeration systems. All models are covered." },
    { question: "Do you use genuine Sub-Zero parts?", answer: "Yes, exclusively. Every replacement part is factory-authorized and backed by the manufacturer warranty." },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/90 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/areas-we-service" className="hover:text-white transition-colors">Areas We Service</Link>
            <span className="mx-2">/</span>
            <Link href={`/areas-we-service/${county}`} className="hover:text-white transition-colors">{countyData.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{cityData.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Appliance Repair in {cityData.name}, FL
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Same-day Sub-Zero repair service in {cityData.name} and throughout {countyData.name}. Certified technicians, genuine parts, no extra weekend charges.
          </p>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-200">
            {[
              { value: "30+", label: "Years Experience" },
              { value: "24/7", label: "Availability" },
              { value: "Same Day", label: "Service" },
              { value: "100%", label: "Parts Warranty" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 text-center">
                <div className="text-2xl font-bold text-[#0B1D33]">{stat.value}</div>
                <div className="text-xs text-[#64748B] uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0B1D33]">
                  Expert Sub-Zero Repair in {cityData.name}
                </h2>
                <p className="text-[#64748B] leading-relaxed text-lg">
                  Looking for expert Sub-Zero appliance repair in {cityData.name},
                  Florida? Our certified technicians provide fast, reliable
                  service for all Sub-Zero refrigerators, freezers, ice makers,
                  wine coolers, and marine refrigeration systems. We know {cityData.name} and {countyData.name} well, so we arrive quickly and get to work immediately.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  We offer same-day service in {cityData.name} and throughout{" "}
                  {countyData.name} with no extra charges for weekends or
                  holidays. Our factory-trained technicians carry genuine Sub-Zero
                  parts on every service call, so most repairs are completed in a
                  single visit. When your Sub-Zero appliance breaks down, every hour counts — that is why {cityData.name} homeowners trust us for fast, dependable repairs.
                </p>
              </div>

              {/* Services Cards */}
              <div>
                <h2 className="text-2xl font-bold text-[#0B1D33] mb-6">
                  Sub-Zero Services Available in {cityData.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0387cc]/30 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#0387cc]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#0B1D33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0B1D33] group-hover:text-[#0B1D33] transition-colors">{s.name}</h3>
                          <p className="text-xs text-[#64748B] mt-1">{s.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-2xl font-bold text-[#0B1D33] mb-6">
                  Why {cityData.name} Residents Choose Us
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "24/7 Availability", detail: "No extra charges for nights, weekends, or holidays. We are always ready." },
                    { title: "Same-Day Service", detail: "We arrive the same day with genuine parts ready to complete the repair." },
                    { title: "Certified Technicians", detail: "30+ years experience with factory training on all Sub-Zero models." },
                    { title: "Transparent Pricing", detail: "Written estimates before work begins. No hidden fees or surprise charges." },
                    { title: "Genuine Sub-Zero Parts", detail: "Factory-authorized replacement parts backed by manufacturer warranty." },
                    { title: "Full Warranty", detail: "Every repair is backed by a complete warranty on parts and labor." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 bg-[#F8FAFC] rounded-xl p-4">
                      <svg className="w-5 h-5 text-[#0B1D33] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-[#0B1D33] text-sm">{item.title}</span>
                        <p className="text-xs text-[#64748B] mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0387cc] text-white rounded-2xl p-6 text-center sticky top-24">
                <h3 className="font-bold text-xl mb-2">
                  Schedule Repair in {cityData.name}
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Same-day service available today
                </p>
                <a
                  href="tel:+18006514528"
                  className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-lg font-bold transition-colors w-full text-lg mb-3"
                >
                  (800) 651-4528
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0B1D33] px-6 py-3 rounded-lg font-semibold transition-colors w-full"
                >
                  Request Service Call
                </Link>
              </div>

              {/* Quick Info Box */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0B1D33] mb-4">Service Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-[#64748B]">Location</span>
                    <span className="font-semibold text-[#0B1D33]">{cityData.name}, FL</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-[#64748B]">County</span>
                    <span className="font-semibold text-[#0B1D33]">{countyData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-[#64748B]">Response Time</span>
                    <span className="font-semibold text-[#0B1D33]">Same Day</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-[#64748B]">Availability</span>
                    <span className="font-semibold text-[#0B1D33]">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Weekend Surcharge</span>
                    <span className="font-semibold text-green-600">None</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-10">
            Sub-Zero Repair Services in {cityData.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cityContent.map((item) => (
              <div key={item.slug} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0B1D33] mb-3">
                  {item.heading}
                </h3>
                <p className="text-[#64748B] leading-relaxed text-sm mb-4">
                  {item.paragraph}
                </p>
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex items-center gap-1 text-[#0B1D33] hover:text-[#0B1D33]/80 font-semibold text-sm transition-colors"
                >
                  View {item.service} details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-10">
            Sub-Zero Repair FAQ for {cityData.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: `How fast can you get to ${cityData.name}?`, a: `We offer same-day service throughout ${cityData.name} and ${countyData.name}. In most cases, a certified technician can be at your home within hours of your call.` },
              { q: "Do you charge extra for weekends or holidays?", a: "Never. Our standard service rates apply 24/7, including nights, weekends, and all holidays. No emergency surcharges." },
              { q: "What Sub-Zero appliances do you repair?", a: "We repair all Sub-Zero products: refrigerators, freezers, ice makers, wine coolers, and marine refrigeration systems. All models are covered." },
              { q: "Do you use genuine Sub-Zero parts?", a: "Yes, exclusively. Every replacement part is factory-authorized and backed by the manufacturer warranty." },
            ].map((faq) => (
              <div key={faq.q} className="bg-[#F8FAFC] rounded-xl p-6">
                <h3 className="font-bold text-[#0B1D33] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyAreas.length > 0 && (
        <section className="py-12 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0B1D33] mb-6">
              Nearby Service Areas
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas-we-service/${area.countySlug}/${area.slug}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-[#64748B] hover:text-[#0B1D33] hover:border-[#0387cc]/30 transition-colors font-medium text-sm"
                >
                  {area.name}, FL
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#0387cc] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Sub-Zero Repair in {cityData.name}?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Call now for same-day service with certified technicians and genuine Sub-Zero parts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+18006514528"
              className="inline-flex items-center bg-white text-[#0B1D33] px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:bg-gray-100"
            >
              Call (800) 651-4528
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request Service Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
