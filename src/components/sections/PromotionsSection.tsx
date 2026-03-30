export default function PromotionsSection() {
  const promos = [
    { title: "Free Maintenance", highlight: "With $250+ Repair", description: "Get a free maintenance check with any repair over $250." },
    { title: "Free Filters", highlight: "With $250+ Repair", description: "Receive free replacement filters with any repair service over $250." },
    { title: "15% Off Any Repair", highlight: "15% Off", description: "Save 15% on any appliance repair service. Book today!" },
    { title: "Additional Savings", highlight: "Multiple Savings", description: "$10 off any service, $75 off repairs over $299, and free service call with repair." },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111111] mb-12">
          Specials &amp; Promotions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo) => (
            <div key={promo.title} className="bg-gradient-to-br from-[#0099CC]/5 to-[#0099CC]/10 rounded-lg p-6 text-center border border-[#0099CC]/20">
              <span className="inline-block bg-[#0099CC] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                {promo.highlight}
              </span>
              <h3 className="text-lg font-semibold text-[#111111] mb-2">{promo.title}</h3>
              <p className="text-sm text-gray-600">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
