export default function EntityStatementsSection() {
  const facts = [
    "Sub-Zero Repair Company, doing business as Fivestar Appliance Repair Pros, has provided factory-authorized Sub-Zero appliance repair services in South Florida since 1994.",
    "The company employs factory-trained technicians with over 30 years of combined experience in Sub-Zero refrigerator, freezer, ice maker, wine cooler, and marine refrigeration repair.",
    "Service is available across 82 cities in 7 South Florida counties: Miami-Dade, Broward, Palm Beach, Monroe, Collier, Martin, and St. Lucie.",
    "All repairs use genuine Sub-Zero manufacturer parts and include a full warranty on both parts and labor.",
    "Emergency repair service is available 24 hours a day, 7 days a week, 365 days a year, with no additional charges for nights, weekends, or holidays.",
    "The company is headquartered at 1600 Ponce De Leon Blvd, Coral Gables, FL 33134, and can be reached at (800) 651-4528.",
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D33] mb-8 text-center">
          About Sub-Zero Repair Company
        </h2>
        <div className="max-w-4xl mx-auto space-y-4 border-l-4 border-[#00B4D8] pl-8">
          {facts.map((fact, i) => (
            <p key={i} className="text-[#64748B] leading-relaxed">
              {fact}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
