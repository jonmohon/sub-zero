import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Sitemap | Sub-Zero Repair Services" },
  description:
    "Sitemap of Sub-Zero Repair Services. Browse all pages including services, areas we service, brands, blog, FAQ, and contact.",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/sitemap/",
  },
  openGraph: {
    title: "Sitemap - Sub-Zero Repair Services",
    description:
      "Sitemap of Sub-Zero Repair Services. Browse all pages including services, areas we service, brands, blog, FAQ, and contact.",
    url: "https://fivestarappliancerepairpros.com/sitemap/",
  },
};

const sections: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Areas We Service", href: "/areas-we-service" },
      { label: "Brands We Service", href: "/brands-we-service" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/frequently-asked-questions" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#020617] mb-4">Sitemap</h1>
        <p className="text-gray-700 mb-10">
          A directory of every page on our site. Use the links below to quickly
          navigate to the content you need.
        </p>

        {sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="text-2xl font-semibold text-[#020617] mb-4">
              {section.heading}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#0077B6] hover:text-[#00B4D8] underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
