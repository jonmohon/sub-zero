"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Sub-Zero Refrigerator Repair", href: "/services/refrigerator-repair" },
      { label: "Sub-Zero Freezer Repair", href: "/services/freezer-repair" },
      { label: "Sub-Zero Ice Maker Repair", href: "/services/icemaker-repair" },
      { label: "Sub-Zero Wine Cooler Repair", href: "/services/wine-cooler-repair" },
      { label: "Sub-Zero Marine Repair", href: "/services/sub-zero-marine-repair" },
    ],
  },
  {
    label: "Areas We Service",
    href: "/areas-we-service",
    children: [
      { label: "Broward County", href: "/areas-we-service/broward-county" },
      { label: "Miami Dade County", href: "/areas-we-service/miami-dade-county" },
      { label: "Monroe County", href: "/areas-we-service/monroe-county" },
      { label: "Palm Beach County", href: "/areas-we-service/palm-beach-county" },
    ],
  },
  {
    label: "Brands We Service",
    href: "/brands-we-service",
    children: [
      { label: "Sub-Zero", href: "/sub-zero-appliance-repair-in-south-florida" },
      { label: "Bosch", href: "/bosch-appliance-repair-in-south-florida" },
      { label: "Viking", href: "/viking-appliance-repair-in-south-florida" },
      { label: "Thermador", href: "/thermador-appliance-repair-in-south-florida" },
      { label: "Miele", href: "/expert-miele-appliance-repair-in-south-florida" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Recent Work", href: "/checkins" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            className="relative group"
            onMouseEnter={() => item.children && setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-[#0A2540] hover:text-[#00B4D8] transition-colors flex items-center"
            >
              {item.label === "Home" && (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
                </svg>
              )}
              {item.label}
              {item.children && (
                <svg className="inline-block ml-1 w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            {item.children && openDropdown === item.label && (
              <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-xl py-2 min-w-[280px] z-50 shadow-xl">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[#0A2540] font-medium hover:text-[#00B4D8] hover:bg-gray-50 transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-[#0A2540] p-2 relative z-[60]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Full-screen mobile menu overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-in panel */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-50 shadow-2xl overflow-y-auto animate-[slideIn_0.3s_ease-out]">
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-lg font-bold text-[#0A2540]">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-[#0A2540] active:scale-95 transition-transform"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <div className="py-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-50 last:border-0">
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpandedItem(
                            mobileExpandedItem === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full px-6 py-4 text-base font-medium text-[#0A2540] active:bg-gray-50 transition-colors"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 text-[#64748B] transition-transform duration-200 ${
                            mobileExpandedItem === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpandedItem === item.label && (
                        <div className="bg-gray-50 py-2">
                          <Link
                            href={item.href}
                            className="block px-8 py-3 text-sm font-semibold text-[#00B4D8]"
                            onClick={() => setMobileOpen(false)}
                          >
                            View All {item.label}
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-8 py-3 text-sm text-[#64748B] active:text-[#00B4D8] transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-6 py-4 text-base font-medium text-[#0A2540] active:bg-gray-50 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA in mobile menu */}
            <div className="px-6 py-6 mt-auto border-t border-gray-100">
              <a
                href="tel:+18006514528"
                className="flex items-center justify-center gap-2 w-full bg-[#0A2540] text-white py-4 rounded-xl font-semibold text-sm mb-3 active:scale-95 transition-transform"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (800) 651-4528
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full bg-[#f89406] text-white py-4 rounded-xl font-semibold text-sm active:scale-95 transition-transform"
                onClick={() => setMobileOpen(false)}
              >
                Request Service Call
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
