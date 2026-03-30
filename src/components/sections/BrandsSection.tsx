import Image from "next/image";
import Link from "next/link";

const brandsList = [
  { name: "Bosch", logo: "/images/brands/bosch-logo.webp", href: "/bosch-appliance-repair-in-south-florida" },
  { name: "Viking", logo: "/images/brands/viking-logo.webp", href: "/viking-appliance-repair-in-south-florida" },
  { name: "Thermador", logo: "/images/brands/thermador-logo.webp", href: "/thermador-appliance-repair-in-south-florida" },
  { name: "Miele", logo: "/images/brands/miele-logo.webp", href: "/expert-miele-appliance-repair-in-south-florida" },
  { name: "Sub-Zero", logo: "/images/brands/sub-zero-logo.webp", href: "/sub-zero-appliance-repair-in-south-florida" },
];

export default function BrandsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bordered heading box */}
        <div className="flex justify-center mb-6">
          <h2 className="text-3xl font-bold text-[#111111] border-[3px] border-[#0099CC] rounded-lg px-8 py-3 inline-block">
            Brands We Service
          </h2>
        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          We service the finest appliance brands including Bosch, Viking, Thermador, Miele, and Sub-Zero. Our certified technicians are trained to work on all premium appliance brands.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {brandsList.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="flex items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} Logo`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
          ))}
        </div>
        {/* Certified banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0099CC] to-[#0077a3] rounded-lg py-4 px-6 text-center text-white font-semibold text-lg">
          Certified Experts &nbsp;|&nbsp; Factory-Trained Technicians &nbsp;|&nbsp; Same-Day Service Available
        </div>
      </div>
    </section>
  );
}
