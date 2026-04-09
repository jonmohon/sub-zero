import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-[#0387cc] text-white py-2 px-4 text-xs border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Link
          href="/contact"
          className="flex items-center gap-2 hover:text-white/90 transition-colors"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#f89406] opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#f89406]" />
          </span>
          <span className="font-bold tracking-wide">
            Get 15% off any appliance repair—book today!
          </span>
        </Link>
      </div>
    </div>
  );
}
