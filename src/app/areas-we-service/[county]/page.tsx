import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { counties } from "@/data/areas";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import AnswerBlock from "@/components/AnswerBlock";

const countiesBySlug = Object.fromEntries(
  counties.map((c) => [c.slug, c])
);

export async function generateStaticParams() {
  return counties.map((county) => ({ county: county.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string }>;
}): Promise<Metadata> {
  const { county } = await params;
  const data = countiesBySlug[county];
  if (!data) return {};
  const topCityNames = data.cities.slice(0, 3).map((c) => c.name).join(", ");
  const description = `Sub-Zero appliance repair in ${data.name}, FL. Same-day service in ${topCityNames} & more. Call (800) 651-4528.`;
  const url = `${BUSINESS.siteUrl}/areas-we-service/${county}/`;
  return {
    title: { absolute: data.metaTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: data.metaTitle,
      description,
      url,
    },
  };
}

export default async function CountyPage({
  params,
}: {
  params: Promise<{ county: string }>;
}) {
  const { county } = await params;
  const data = countiesBySlug[county];
  if (!data) notFound();

  const countyUrl = `${BUSINESS.siteUrl}/areas-we-service/${county}/`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.siteUrl },
    { name: "Areas We Service", url: `${BUSINESS.siteUrl}/areas-we-service/` },
    { name: data.name, url: countyUrl },
  ]);
  const webPageSchema = generateWebPageSchema(
    `Sub-Zero Appliance Repair in ${data.name}, FL`,
    data.metaDescription,
    countyUrl
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas-we-service" className="hover:text-white">
              Areas We Service
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{data.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Appliance Repair in {data.name}, FL
          </h1>
        </div>
      </section>

      <AnswerBlock
        question={`Where can I get Sub-Zero appliances repaired in ${data.name}?`}
        answer={`We provide same-day Sub-Zero appliance repair across ${data.name}, Florida — refrigerators, freezers, ice makers, wine columns, and marine refrigeration. Three decades on the Sub-Zero product line since 1994, factory-trained technicians, OEM parts on every truck. Coverage includes ${data.cities.slice(0, 5).map((c) => c.name).join(", ")}, and ${data.cities.length - 5}+ more cities throughout ${data.name}. No surcharge nights, weekends, or holidays.`}
        stats={[
          { value: "Same-day", label: "Most appointments" },
          { value: `${data.cities.length}`, label: `Cities in ${data.name}` },
          { value: "30+", label: "Years on Sub-Zero" },
          { value: "OEM", label: "Parts on every truck" },
        ]}
        sources={[
          { label: "Sub-Zero Use & Care Guides", url: "https://www.subzero-wolf.com/owners/use-and-care-guides" },
          { label: "Our service warranty", url: "/warranty/" },
          { label: "Meet our technicians", url: "/technicians/" },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-[#64748B] leading-relaxed mb-6">
                We provide expert Sub-Zero appliance repair services throughout{" "}
                {data.name}, Florida. Our certified technicians offer same-day
                service with genuine Sub-Zero parts for refrigerators, freezers,
                ice makers, wine coolers, and marine refrigeration systems.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-8">
                With over 30 years of experience and 24/7 availability,
                we&apos;re the trusted choice for Sub-Zero repairs in{" "}
                {data.name}. No extra charges for weekends or holidays — just
                fast, reliable service when you need it most.
              </p>

              <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
                Sub-Zero Services We Provide in {data.name}
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-4">
                Our factory-trained technicians handle every type of Sub-Zero
                appliance repair across {data.name}. Whether you own a built-in
                column refrigerator, an integrated wine cellar, or a marine
                refrigeration unit, we diagnose and fix the issue on the first
                visit whenever possible.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#64748B] mb-8">
                <li>
                  <strong>Sub-Zero refrigerator repair</strong> — cooling
                  problems, compressor failures, thermostat issues, ice in the
                  fresh-food compartment, noisy operation, and door seal
                  replacement.
                </li>
                <li>
                  <strong>Sub-Zero freezer repair</strong> — units not freezing,
                  excessive frost buildup, defrost system failures, and
                  temperature-control board replacement.
                </li>
                <li>
                  <strong>Sub-Zero ice maker repair</strong> — no ice
                  production, small or cloudy cubes, water-line leaks, and
                  inlet-valve replacement.
                </li>
                <li>
                  <strong>Sub-Zero wine cooler repair</strong> — temperature
                  drift, humidity control issues, compressor replacement, and
                  LED-panel diagnostics on dual-zone units.
                </li>
                <li>
                  <strong>Sub-Zero marine refrigeration</strong> — dockside
                  service for yachts and boats throughout {data.name}, including
                  corrosion-resistant repairs and power-system diagnostics.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
                Why {data.name} Residents Choose Us
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-8">
                We have been repairing Sub-Zero appliances in South Florida
                since 1994, so we know the specific challenges {data.name}{" "}
                throws at refrigeration — coastal humidity, salt air, hurricane
                power fluctuations, and busy summer schedules. Every technician
                arrives in a fully-stocked van with genuine Sub-Zero parts so
                most repairs are completed in a single visit. Pricing is
                transparent with a written estimate before any work begins, and
                every repair is backed by a full parts-and-labor warranty.
              </p>

              <h2 className="text-2xl font-bold text-[#0B1D33] mb-6">
                Cities We Serve in {data.name}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {data.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas-we-service/${county}/${city.slug}`}
                    className="bg-gray-50 hover:bg-[#00B4D8]/5 border border-gray-200 hover:border-[#00B4D8]/30 rounded-lg p-3 text-sm text-center text-slate-700 hover:text-[#00B4D8] transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#0387cc] text-white rounded-lg p-6 text-center sticky top-24">
                <h3 className="font-semibold mb-2">
                  Schedule Repair in {data.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Same-day service available
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
