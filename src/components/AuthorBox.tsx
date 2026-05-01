import Link from "next/link";
import type { TeamMember } from "@/data/team";

interface AuthorBoxProps {
  member: TeamMember;
  /** "compact" for inline byline, "full" for end-of-article box. */
  variant?: "compact" | "full";
}

export default function AuthorBox({ member, variant = "full" }: AuthorBoxProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <Avatar initials={initials} photo={member.photo} size={40} />
        <div className="text-sm">
          <div className="font-semibold text-[#0B1D33]">{member.name}</div>
          <div className="text-[#64748B]">{member.role}</div>
        </div>
      </div>
    );
  }

  return (
    <aside
      className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8"
      aria-label={`About the author, ${member.name}`}
    >
      <div className="flex flex-col sm:flex-row gap-5">
        <Avatar initials={initials} photo={member.photo} size={88} />
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.15em] text-[#0387cc] font-semibold mb-1">
            About the author
          </p>
          <h3 className="text-xl font-bold text-[#0B1D33]">{member.name}</h3>
          <p className="text-sm text-[#64748B] mb-3">
            {member.role} · {member.yearsExperience}+ years
          </p>
          <p className="text-[#334155] leading-relaxed mb-4">{member.bio}</p>
          <Link
            href="/technicians"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0387cc] hover:text-[#0F3460] transition-colors"
          >
            Meet the rest of the team
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
}

function Avatar({
  initials,
  photo,
  size,
}: {
  initials: string;
  photo?: string;
  size: number;
}) {
  if (photo) {
    return (
      <div
        className="relative shrink-0 rounded-full overflow-hidden bg-gray-100"
        style={{ width: size, height: size }}
      >
        <img src={photo} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className="shrink-0 rounded-full bg-gradient-to-br from-[#0387cc] to-[#00B4D8] flex items-center justify-center text-white font-bold"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
