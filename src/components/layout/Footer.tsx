import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Areas We Serve", href: "/areas-we-service" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Coral Gables FL", href: "/areas-we-service/miami-dade-county/coral-gables" },
  { label: "Miami-Dade County FL", href: "/areas-we-service/miami-dade-county" },
];

const serviceLinks = [
  { label: "Sub-Zero Refrigerator Repair", href: "/services/refrigerator-repair" },
  { label: "Sub-Zero Freezer Repair", href: "/services/freezer-repair" },
  { label: "Sub-Zero Ice Maker Repair", href: "/services/icemaker-repair" },
  { label: "Sub-Zero Wine Cooler Repair", href: "/services/wine-cooler-repair" },
  { label: "Sub-Zero Marine Repair", href: "/services/sub-zero-marine-repair" },
];

const topServiceAreas = [
  { label: "Miami", href: "/areas-we-service/miami-dade-county/miami" },
  { label: "Miami Beach", href: "/areas-we-service/miami-dade-county/miami-beach" },
  { label: "Key Biscayne", href: "/areas-we-service/miami-dade-county/key-biscayne" },
  { label: "Pinecrest", href: "/areas-we-service/miami-dade-county/pinecrest" },
  { label: "Fisher Island", href: "/areas-we-service/miami-dade-county/fisher-island" },
  { label: "Indian Creek Village", href: "/areas-we-service/miami-dade-county/indian-creek-village" },
  { label: "Sunny Isles Beach", href: "/areas-we-service/miami-dade-county/sunny-isles-beach" },
  { label: "Key Largo", href: "/areas-we-service/monroe-county/key-largo" },
];

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Sub-Zero Repair Services"
              width={200}
              height={50}
              className="mb-4"
            />

            {/* Social Links */}
            <div className="flex gap-3 mb-4">
              <a
                href="https://facebook.com/subzeroservicecenters/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/SubZeroRepairFL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://share.google/BkcjqPpGmWdjZ43mR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Google Business Profile — see reviews and directions"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#EA4335" d="M12 10.8v3.59h5.02c-.22 1.2-1.47 3.53-5.02 3.53-3.02 0-5.49-2.5-5.49-5.58s2.47-5.58 5.49-5.58c1.72 0 2.87.73 3.53 1.36l2.4-2.31C16.36 4.35 14.38 3.5 12 3.5 7.3 3.5 3.5 7.3 3.5 12s3.8 8.5 8.5 8.5c4.91 0 8.17-3.45 8.17-8.31 0-.56-.06-.99-.14-1.39H12z" />
                </svg>
              </a>
            </div>

            <div className="border-t border-white/20 pt-4">
              <address className="not-italic space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00B4D8] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Coral Gables, FL 33134
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00B4D8] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+18006514528" className="hover:text-[#00B4D8] transition-colors">
                    (800) 651-4528
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00B4D8] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@fivestarappliancerepairpros.com" className="hover:text-[#00B4D8] transition-colors">
                    info@fivestarappliancerepairpros.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#00B4D8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#00B4D8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Top Service Areas</h3>
            <ul className="space-y-2">
              {topServiceAreas.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#00B4D8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-gray-600">
            &copy; 2026 Sub-Zero Repair Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
