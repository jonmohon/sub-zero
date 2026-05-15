import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.siteUrl}/about/`;

export const metadata: Metadata = {
  title: { absolute: "About Sub-Zero Repair Services | South Florida Since 1994" },
  description:
    "Sub-Zero Repair Services has provided premium appliance repair across South Florida since 1994. 24/7 service, factory-trained technicians, genuine parts, 7 counties served.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "About Sub-Zero Repair Services | South Florida Since 1994",
    description:
      "Sub-Zero appliance repair specialists serving Miami-Dade, Broward, Palm Beach, and 4 more South Florida counties since 1994.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Sub-Zero Repair Services",
    url: PAGE_URL,
    description:
      "Sub-Zero Repair Services is a South Florida appliance repair business founded in 1994, specializing in Sub-Zero, Wolf, Cove, Viking, Thermador, Bosch, and Miele service across 7 counties.",
    mainEntity: { "@id": `${BUSINESS.siteUrl}/#business` },
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.siteUrl },
    { name: "About", url: PAGE_URL },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">About</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Sub-Zero Repair Services
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            South Florida&apos;s trusted premium appliance repair specialists, serving homeowners
            across Miami-Dade and Broward since 1994.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[#334155] leading-relaxed mb-8">
            <strong className="text-[#0B1D33]">Sub-Zero Repair Services</strong> is a South Florida
            appliance repair service founded in 1994 in Coral Gables. We specialize in factory-trained service for Sub-Zero, Wolf, Cove,
            Viking, Thermador, Bosch, and Miele — the brands that built South Florida&apos;s luxury
            kitchens. Today we serve 82 cities across 7 counties, 24 hours a day, every day of the year.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 my-10">
            <Stat number="30+" label="Years in business" />
            <Stat number="82" label="Cities served" />
            <Stat number="24/7" label="Same-day availability" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mt-12 mb-4">What We Do</h2>
          <p className="text-[#334155] leading-relaxed mb-4">
            We focus on the appliances most South Florida service companies don&apos;t do well: built-in
            and integrated refrigeration, wine columns, ice systems, and marine refrigeration. Every
            technician on our team is trained specifically on premium sealed-system work and carries
            genuine OEM parts on the truck so most repairs finish in a single visit.
          </p>
          <ul className="space-y-2 text-[#334155] mb-8">
            <Bullet>Sub-Zero refrigerator repair (built-in, integrated, Pro 48, Designer, Classic)</Bullet>
            <Bullet>Sub-Zero freezer columns and standalone freezers</Bullet>
            <Bullet>Wine column and dual-zone wine cooler service</Bullet>
            <Bullet>Built-in ice maker repair and water-line diagnostics</Bullet>
            <Bullet>Marine refrigeration for yachts docked across South Florida</Bullet>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mt-12 mb-4">Where We Serve</h2>
          <p className="text-[#334155] leading-relaxed mb-4">
            We dispatch technicians to seven South Florida counties: Miami-Dade, Broward, Palm Beach,
            Monroe, Collier, Martin, and St. Lucie. Coverage includes Coral Gables, Miami Beach,
            Pinecrest, Aventura, Sunny Isles, Fisher Island, Indian Creek, Key Biscayne, Brickell, Bal
            Harbour, Fort Lauderdale, Hollywood, Boca Raton, Naples, Marco Island, and 60+ more cities.
          </p>
          <p className="text-[#334155] leading-relaxed mb-8">
            <Link href="/areas-we-service" className="text-[#0387cc] hover:text-[#0F3460] font-semibold">
              See the full list of cities we cover →
            </Link>
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mt-12 mb-4">What Makes Us Different</h2>
          <ul className="space-y-3 text-[#334155] mb-8">
            <Bullet>
              <strong className="text-[#0B1D33]">South Florida specialists, not a national chain.</strong> We
              know how Miami&apos;s humidity stresses condensers, how salt air corrodes coastal-home
              units, and how to plan around hurricane-season power outages — because we&apos;ve worked
              this market for 30+ years.
            </Bullet>
            <Bullet>
              <strong className="text-[#0B1D33]">Genuine parts on every truck.</strong> No waiting weeks for
              special-order components on common Sub-Zero failures. Most repairs finish in one visit.
            </Bullet>
            <Bullet>
              <strong className="text-[#0B1D33]">Real 24/7 availability.</strong> Same flat rate nights,
              weekends, holidays. No emergency surcharges.
            </Bullet>
            <Bullet>
              <strong className="text-[#0B1D33]">Workmanship warranty on every repair.</strong> If a
              repair we made fails, we come back and fix it.
            </Bullet>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mt-12 mb-4">Business Information</h2>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[#334155]">
            <Detail label="Business name">{BUSINESS.legalName}</Detail>
            <Detail label="Founded">1994</Detail>
            <Detail label="Headquarters">Coral Gables, FL</Detail>
            <Detail label="Phone">
              <a href={BUSINESS.phoneHref} className="text-[#0387cc] hover:text-[#0F3460]">{BUSINESS.phone}</a>
            </Detail>
            <Detail label="Email">
              <a href={`mailto:${BUSINESS.email}`} className="text-[#0387cc] hover:text-[#0F3460] break-all">
                {BUSINESS.email}
              </a>
            </Detail>
            <Detail label="Hours">{BUSINESS.hours}</Detail>
            <Detail label="Languages">{BUSINESS.languages.join(", ")}</Detail>
          </dl>

          <div className="mt-12 bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-[#0B1D33] mb-2">
              Need a Sub-Zero technician today?
            </h3>
            <p className="text-[#64748B] mb-4">
              Same-day service across South Florida. No emergency surcharges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Call {BUSINESS.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
      <div className="text-3xl font-bold text-[#0B1D33]">{number}</div>
      <div className="text-xs uppercase tracking-[0.15em] text-[#64748B] mt-1">{label}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#f89406] mt-2.5" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-100 pb-2">
      <dt className="text-xs uppercase tracking-[0.15em] text-[#64748B] mb-0.5">{label}</dt>
      <dd className="font-semibold text-[#0B1D33]">{children}</dd>
    </div>
  );
}
