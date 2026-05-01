import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { team } from "@/data/team";

const PAGE_URL = `${BUSINESS.siteUrl}/technicians/`;

export const metadata: Metadata = {
  title: { absolute: "Our Technicians | Sub-Zero Repair Company" },
  description:
    "Meet the factory-trained technicians behind Sub-Zero Repair Company in South Florida. Decades of premium-only refrigeration experience across Miami-Dade and Broward.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Our Technicians | Sub-Zero Repair Company",
    description:
      "Factory-trained Sub-Zero specialists serving South Florida since 1994.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function TechniciansPage() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@graph": team.map((m) => ({
      "@type": "Person",
      "@id": `${PAGE_URL}#${m.slug}`,
      name: m.name,
      jobTitle: m.role,
      description: m.bio,
      url: `${PAGE_URL}#${m.slug}`,
      worksFor: { "@id": `${BUSINESS.siteUrl}/#business` },
      knowsAbout: m.specialties,
    })),
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.siteUrl },
    { name: "About", url: `${BUSINESS.siteUrl}/about/` },
    { name: "Technicians", url: PAGE_URL },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Technicians</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Technicians</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            The factory-trained team behind every Sub-Zero, Wolf, and premium appliance repair we
            complete across South Florida.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[#334155] leading-relaxed mb-12">
            Every technician on our team is trained specifically on premium built-in refrigeration
            and sealed-system service. We don&apos;t hire generalists, and we don&apos;t take on
            general appliance work that pulls focus from the specialty. The result is fewer return
            visits and faster diagnostics on the brands South Florida luxury kitchens are built around.
          </p>

          <div className="space-y-8">
            {team.map((m) => (
              <article
                key={m.slug}
                id={m.slug}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <Avatar name={m.name} photo={m.photo} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#0B1D33] mb-1">{m.name}</h2>
                    <p className="text-[#0387cc] font-semibold mb-1">{m.role}</p>
                    <p className="text-sm text-[#64748B] mb-4">
                      {m.yearsExperience}+ years specializing in premium appliance repair
                    </p>
                    <p className="text-[#334155] leading-relaxed mb-5">{m.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {m.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#0387cc]/8 text-[#0387cc] border border-[#0387cc]/15"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-[#0B1D33] mb-2">
              Ready to schedule with our team?
            </h3>
            <p className="text-[#64748B] mb-4">
              24/7 same-day service across South Florida. No emergency surcharges.
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

function Avatar({ name, photo }: { name: string; photo?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  if (photo) {
    return (
      <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-100">
        <img src={photo} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0387cc] to-[#00B4D8] flex items-center justify-center text-white font-bold text-3xl"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
