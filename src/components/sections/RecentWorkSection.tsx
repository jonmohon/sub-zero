import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const checkIns = [
  {
    title: "Ice Maker & Drain Line Fix",
    location: "Pinecrest, FL 33156",
    date: "March 30",
    description: "Addressed an ice maker failure and clogged drain line in a Sub-Zero unit.",
  },
  {
    title: "Ice Maker Repair and Sensor Replacement",
    location: "Pinecrest, FL 33156",
    date: "March 26",
    description: "Replaced a faulty ice maker sensor and restored full ice production in a Sub-Zero refrigerator.",
  },
  {
    title: "Refrigerator Door Gasket Replacement",
    location: "Sunny Isles Beach, FL 33160",
    date: "March 24",
    description: "Repaired a Sub-Zero refrigerator with a worn and damaged door gasket causing air leaks.",
  },
  {
    title: "Sub-Zero Compressor Repair",
    location: "Miami Dade, FL 33101",
    date: "March 20",
    description: "Diagnosed and repaired a failing compressor in a Sub-Zero refrigerator that was no longer cooling.",
  },
  {
    title: "Wine Cooler Temp Issue Resolved",
    location: "South Miami, FL 33143",
    date: "March 18",
    description: "Serviced a Sub-Zero wine cooler that was not maintaining proper temperature.",
  },
];

export default function RecentWorkSection() {
  return (
    <section className="relative bg-[#F8FAFC] py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0387cc 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

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
            <ScrollReveal key={item.title} animation="fade-up" delay={index * 100}>
              <div
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 pl-8 relative overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 group-hover:w-1.5 group-hover:bg-[#00B4D8] transition-all duration-300 rounded-l-2xl" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0B1D33] mb-1 group-hover:text-[#0F3460] transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-[#94a3b8] mb-3 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {item.location} - {item.date}
                    </p>
                    <p className="text-[#64748B] text-sm">{item.description} <Link href="/checkins" className="text-[#00B4D8] hover:underline font-medium">Read More &raquo;</Link></p>
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
