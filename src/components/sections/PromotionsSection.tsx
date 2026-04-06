import Link from "next/link";

export default function PromotionsSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B4D8]/[0.03] rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0A2540]/[0.03] rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#00B4D8] font-semibold uppercase tracking-wider text-center text-sm mb-2">
          Current Offers
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2540] mb-14">
          Specials &amp; Promotions
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-8">
          {/* Free Maintenance Services */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-[#00B4D8] to-[#0A2540]" />
            <div className="p-7 text-center flex flex-col flex-1">
              <h3 className="text-lg font-bold text-[#0A2540] mb-3">Free Maintenance Services</h3>
              <p className="text-sm text-[#64748B] mb-3 flex-1">
                For any Sub-Zero repair of $250 or more, receive up to two free maintenance services per year.
                <br /><span className="text-xs text-gray-400">(not to be combined with other offers).</span>
              </p>
              <p className="text-xs text-gray-400 mb-5">Maximum of two services per household annually.</p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#0A2540] hover:bg-[#0F3460] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg">
                Get Started
              </Link>
            </div>
          </div>

          {/* Free Filters */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-[#00B4D8] to-[#0A2540]" />
            <div className="p-7 text-center flex flex-col flex-1">
              <h3 className="text-lg font-bold text-[#0A2540] mb-3">Free Filters</h3>
              <p className="text-sm text-[#64748B] mb-3 flex-1">
                For any Sub-Zero repair of $250 or more, get two free water filters and two free air filters per year, applicable to Sub-Zero models with built-in filters.
                <br /><span className="text-xs text-gray-400">(not to be combined with other offers).</span>
              </p>
              <p className="text-xs text-gray-400 mb-5">Maximum of two sets of filters per household annually, while supplies last.</p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#0A2540] hover:bg-[#0F3460] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg">
                Get Started
              </Link>
            </div>
          </div>

          {/* 15% Off Any Repair */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-[#00B4D8] to-[#0A2540]" />
            <div className="p-7 text-center flex flex-col flex-1">
              <h3 className="text-lg font-bold text-[#0A2540] mb-3">15% Off Any Repair</h3>
              <p className="text-sm text-[#64748B] mb-3 flex-1">
                Receive a 15% discount on any Sub-Zero repair or maintenance. Excludes repairs involving doors, panels, shelves, drawers, or similar components. Offer is for new jobs only and must be mentioned at time of sale.
                <br /><span className="text-xs text-gray-400">(not to be combined with any other offers).</span>
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#0A2540] hover:bg-[#0F3460] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg">
                Get Started
              </Link>
            </div>
          </div>

          {/* Additional Offers */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-[#00B4D8] to-[#0A2540]" />
            <div className="p-7 text-center flex flex-col flex-1">
              <h3 className="text-lg font-bold text-[#0A2540] mb-3">Additional Offers:</h3>
              <div className="text-sm text-[#64748B] text-left space-y-2 mb-3 flex-1">
                <p><span className="font-bold">$10 Off:</span> Any repair (not to be combined with other offers).</p>
                <p><span className="font-bold">$75 Off:</span> Any repair over $299 (not to be combined with other offers).</p>
                <p><span className="font-bold">Free Service Call:</span> Receive a free service call with any repair.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#0A2540] hover:bg-[#0F3460] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-400 italic">
          Promotions apply to current and future jobs, but not to past jobs.
        </p>
      </div>
    </section>
  );
}
