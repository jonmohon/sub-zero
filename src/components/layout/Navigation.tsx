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
              className="px-3 py-2 text-sm font-medium text-[#333333] hover:text-[#0099CC] transition-colors flex items-center"
            >
              {item.label === "Home" && (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
                </svg>
              )}
              {item.label}
              {item.children && (
                <svg className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            {item.children && openDropdown === item.label && (
              <ul className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 rounded-md py-2 min-w-[280px] z-50">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      className="block px-4 py-2 text-sm text-[#333333] font-medium hover:text-[#0099CC] hover:bg-gray-100 transition-colors"
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
        className="lg:hidden text-[#333333] p-2"
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute right-0 top-full bg-white shadow-lg border border-gray-200 rounded-md py-4 w-72 z-50">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-[#333333] hover:text-[#0099CC]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-6">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-1.5 text-xs text-[#333333] font-medium hover:text-[#0099CC]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
