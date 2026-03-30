import Link from "next/link";

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
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#152232] mb-12">
          Recent Work
        </h2>
        <div className="space-y-4">
          {checkIns.map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#152232] mb-1">{item.title}</h3>
              <p className="text-sm text-[#888888] mb-3">{item.location} - {item.date}</p>
              <p className="text-[#555555] text-sm">{item.description} <Link href="/checkins" className="text-[#0099CC] hover:underline font-medium">Read More &raquo;</Link></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
