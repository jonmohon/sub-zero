import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert tips and guides for Sub-Zero appliance repair, maintenance, and troubleshooting from our certified technicians.",
  alternates: { canonical: "https://fivestarappliancerepairpros.com/blog/" },
};

const posts = [
  { slug: "when-to-call-a-refrigerator-repair-technician", title: "When to Call a Refrigerator Repair Technician", excerpt: "Learn the key warning signs that your refrigerator needs professional attention before a minor issue becomes a major breakdown.", date: "2024-11-15" },
  { slug: "why-diy-refrigerator-repair-isnt-always-the-best-option", title: "Why DIY Refrigerator Repair Isn't Always the Best Option", excerpt: "While DIY projects can be rewarding, refrigerator repair is one area where professional expertise makes all the difference.", date: "2024-12-01" },
  { slug: "reliable-freezer-maintenance-quick-guide", title: "Reliable Freezer Maintenance: Quick Guide", excerpt: "Essential maintenance tips to keep your Sub-Zero freezer running efficiently and extend its lifespan.", date: "2025-01-10" },
  { slug: "refrigerator-troubleshooting-guide-fix-cooling-issues-now", title: "Refrigerator Troubleshooting Guide: Fix Cooling Issues Now", excerpt: "A comprehensive guide to troubleshooting common refrigerator cooling problems before calling for professional help.", date: "2025-01-25" },
  { slug: "refrigerator-compressor-repair-complete-diagnostic-and-repair", title: "Refrigerator Compressor Repair: Complete Diagnostic and Repair Guide", excerpt: "Understanding compressor issues in your refrigerator and why professional repair is essential.", date: "2025-02-05" },
  { slug: "refrigerator-leaking-water-causes-quick-fixes", title: "Refrigerator Leaking Water: Causes and Quick Fixes", excerpt: "Common causes of refrigerator water leaks and how to address them quickly.", date: "2025-02-15" },
  { slug: "emergency-fridge-repair-near-me-24-7-service", title: "Emergency Fridge Repair Near Me: 24/7 Service", excerpt: "When your refrigerator breaks down, you need fast, professional help. Our 24/7 emergency service is here for you.", date: "2025-02-20" },
  { slug: "ice-maker-repair-service-same-day-fixes-near-you", title: "Ice Maker Repair Service: Same-Day Fixes Near You", excerpt: "Fast, professional ice maker repair service available same-day throughout South Florida.", date: "2025-03-01" },
  { slug: "wine-cooler-repair-specialists-same-day-service", title: "Wine Cooler Repair Specialists: Same-Day Service", excerpt: "Protect your wine collection with our expert wine cooler repair service, available same-day.", date: "2025-03-10" },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-300">Expert tips, guides, and insights for Sub-Zero appliance owners.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <time className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                  <h2 className="text-lg font-semibold text-[#0387cc] mt-2 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#00B4D8] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-[#64748B] mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-[#00B4D8] hover:text-[#0387cc] text-sm font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
