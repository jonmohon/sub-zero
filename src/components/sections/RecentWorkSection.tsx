import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import fs from "fs";
import path from "path";

const CACHE_PATH = path.join(process.cwd(), "checkins-cache.json");

interface EZLocalCheckin {
  page_item_url: string;
  data: {
    Title: string;
    Body: string;
    FeaturedImageURL: string;
    CityStateZip: string;
    CreateDate: string;
  };
}

interface CheckinCache {
  lastUpdate: string;
  checkins: EZLocalCheckin[];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function loadCheckins(): EZLocalCheckin[] {
  try {
    const raw = fs.readFileSync(CACHE_PATH, "utf-8");
    const cache = JSON.parse(raw) as CheckinCache;
    return cache.checkins.slice(0, 5);
  } catch {
    return [];
  }
}

export default function RecentWorkSection() {
  const checkIns = loadCheckins();
  return (
    <section className="relative bg-[#F8FAFC] py-24 overflow-hidden">

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <p className="text-[#00B4D8] font-semibold uppercase tracking-wider text-sm text-center mb-3">
            Our Track Record
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1D33] mb-14">
            Recent Work
          </h2>
        </ScrollReveal>

        <div className="space-y-5">
          {checkIns.map((item, index) => (
            <ScrollReveal key={item.page_item_url} animation="fade-up" delay={index * 100}>
              <div
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 pl-8 relative overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 group-hover:w-1.5 group-hover:bg-[#00B4D8] transition-all duration-300 rounded-l-2xl" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0B1D33] mb-1 group-hover:text-[#0F3460] transition-colors duration-300">{item.data.Title}</h3>
                    <p className="text-sm text-[#94a3b8] mb-3 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {item.data.CityStateZip} - {item.data.CreateDate}
                    </p>
                    <p className="text-[#64748B] text-sm line-clamp-2">{stripHtml(item.data.Body)} <Link href="/checkins" className="text-[#00B4D8] hover:underline font-medium">Read More &raquo;</Link></p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
