import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.siteUrl}/history/`;

export const metadata: Metadata = {
  title: { absolute: "Our History | Sub-Zero Repair Services Since 1994" },
  description:
    "Three decades of South Florida appliance repair. The story of Sub-Zero Repair Services from 1994 founding to 82 cities served today.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Our History | Sub-Zero Repair Services Since 1994",
    description:
      "From a single-truck Coral Gables startup in 1994 to South Florida's 24/7 Sub-Zero specialists serving 7 counties today.",
    url: PAGE_URL,
    type: "website",
  },
};

const milestones = [
  {
    period: "1994",
    title: "Founded in Coral Gables",
    body: "Sub-Zero Repair Services opens for business in Coral Gables, focused exclusively on premium built-in refrigeration. From day one, the model is the same: factory-trained technicians, genuine parts, no general-appliance work that distracts from the specialty.",
  },
  {
    period: "Late 1990s",
    title: "Premium-only specialization takes hold",
    body: "Word of mouth in Coral Gables, Pinecrest, and Coconut Grove establishes the company as the go-to service for Sub-Zero, Wolf, Viking, and Thermador owners. The decision to skip lower-end brands and stay focused on luxury appliances becomes the defining business choice of the next 30 years.",
  },
  {
    period: "2000s",
    title: "Miami-Dade coverage expands",
    body: "Service area grows from Coral Gables outward to cover most of Miami-Dade — Miami Beach, Aventura, Sunny Isles, Bal Harbour, Fisher Island, Indian Creek, Key Biscayne. The team adds wine column expertise as Miami&apos;s luxury condo market matures.",
  },
  {
    period: "2010s",
    title: "Broward, marine, and 7-county service",
    body: "Coverage expands north into Broward, then into Palm Beach, Monroe, Collier, Martin, and St. Lucie counties. A dedicated marine refrigeration line launches, serving yachts and waterfront homes from Miami Beach Marina to Naples. Same-day service becomes the standard.",
  },
  {
    period: "2020s",
    title: "24/7 service, digital dispatch, 80+ cities",
    body: "True 24/7 coverage rolls out — same flat rate nights, weekends, and holidays. Online booking and dispatch tooling cut response times. The published service area now spans 82 cities across all 7 counties, with technicians trained on the latest Sub-Zero Designer, Pro, and Column lines alongside legacy Classic and Pro 48 systems.",
  },
  {
    period: "Today",
    title: "South Florida&apos;s premium-only specialists",
    body: "Three decades in, the focus is unchanged: only premium appliances, only South Florida, only factory-trained technicians, only genuine parts. Every job ends with the same workmanship warranty the company has offered since 1994.",
  },
];

export default function HistoryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.siteUrl },
    { name: "History", url: PAGE_URL },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">History</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            From a single-truck Coral Gables startup in 1994 to South Florida&apos;s 24/7 Sub-Zero
            specialists serving 82 cities today.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[#334155] leading-relaxed mb-12">
            Sub-Zero Repair Services was founded in 1994 in Coral Gables, Florida, with a single focus:
            premium built-in refrigeration done by factory-trained technicians. Three decades later,
            that focus has not changed — even as the service area has grown from one city to 82, and
            from one truck to a 24/7 dispatched team across seven counties.
          </p>

          <ol className="relative border-l-2 border-[#0387cc]/20 pl-8 space-y-10">
            {milestones.map((m) => (
              <li key={m.period} className="relative">
                <span
                  className="absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f89406] ring-4 ring-white"
                  aria-hidden="true"
                />
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0387cc] mb-1">
                  {m.period}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#0B1D33] mb-2">{m.title}</h2>
                <p
                  className="text-[#334155] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: m.body }}
                />
              </li>
            ))}
          </ol>

          <div className="mt-16 bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-[#0B1D33] mb-2">
              Three decades of trust, one service call away.
            </h3>
            <p className="text-[#64748B] mb-4">
              Same-day Sub-Zero repair across South Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Call {BUSINESS.phone}
              </a>
              <Link href="/about" className="inline-flex items-center justify-center border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
