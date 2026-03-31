import Link from "next/link";

export default function PromotionsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#0099CC] font-semibold uppercase tracking-wider text-center text-sm mb-2">
          Current Offers
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#152232] mb-12">
          Specials &amp; Promotions
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Free Maintenance Services */}
          <div className="bg-gradient-to-br from-[#0099CC]/5 to-[#0099CC]/10 rounded-lg p-6 text-center border border-[#0099CC]/20 flex flex-col">
            <h3 className="text-lg font-bold text-[#152232] mb-3">Free Maintenance Services</h3>
            <p className="text-sm text-[#555555] mb-3 flex-1">
              For any Sub-Zero repair of $250 or more, receive up to two free maintenance services per year.
              <br /><span className="text-xs text-gray-400">(not to be combined with other offers).</span>
            </p>
            <p className="text-xs text-gray-400 mb-4">Maximum of two services per household annually.</p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#0099CC] hover:bg-[#0077a3] text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
              Get Started
            </Link>
          </div>

          {/* Free Filters */}
          <div className="bg-gradient-to-br from-[#0099CC]/5 to-[#0099CC]/10 rounded-lg p-6 text-center border border-[#0099CC]/20 flex flex-col">
            <h3 className="text-lg font-bold text-[#152232] mb-3">Free Filters</h3>
            <p className="text-sm text-[#555555] mb-3 flex-1">
              For any Sub-Zero repair of $250 or more, get two free water filters and two free air filters per year, applicable to Sub-Zero models with built-in filters.
              <br /><span className="text-xs text-gray-400">(not to be combined with other offers).</span>
            </p>
            <p className="text-xs text-gray-400 mb-4">Maximum of two sets of filters per household annually, while supplies last.</p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#0099CC] hover:bg-[#0077a3] text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
              Get Started
            </Link>
          </div>

          {/* 15% Off Any Repair */}
          <div className="bg-gradient-to-br from-[#0099CC]/5 to-[#0099CC]/10 rounded-lg p-6 text-center border border-[#0099CC]/20 flex flex-col">
            <h3 className="text-lg font-bold text-[#152232] mb-3">15% Off Any Repair</h3>
            <p className="text-sm text-[#555555] mb-3 flex-1">
              Receive a 15% discount on any Sub-Zero repair or maintenance. Excludes repairs involving doors, panels, shelves, drawers, or similar components. Offer is for new jobs only and must be mentioned at time of sale.
              <br /><span className="text-xs text-gray-400">(not to be combined with any other offers).</span>
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#0099CC] hover:bg-[#0077a3] text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
              Get Started
            </Link>
          </div>

          {/* Additional Offers */}
          <div className="bg-gradient-to-br from-[#0099CC]/5 to-[#0099CC]/10 rounded-lg p-6 text-center border border-[#0099CC]/20 flex flex-col">
            <h3 className="text-lg font-bold text-[#152232] mb-3">Additional Offers:</h3>
            <div className="text-sm text-[#555555] text-left space-y-2 mb-3 flex-1">
              <p><span className="font-bold">$10 Off:</span> Any repair (not to be combined with other offers).</p>
              <p><span className="font-bold">$75 Off:</span> Any repair over $299 (not to be combined with other offers).</p>
              <p><span className="font-bold">Free Service Call:</span> Receive a free service call with any repair.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#0099CC] hover:bg-[#0077a3] text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
              Get Started
            </Link>
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
