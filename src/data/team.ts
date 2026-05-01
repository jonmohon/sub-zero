// Team records for the /technicians page and blog author bios.
// Bios kept factual and conservative — no certifications or licenses claimed
// that aren't independently verifiable. Add team members by extending this
// array; the /technicians page renders all entries automatically.

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  yearsExperience: number;
  bio: string;
  /** Specialties shown as pill tags. Keep to 3-4 short phrases. */
  specialties: string[];
  /** Optional photo path under /public. Falls back to initials avatar. */
  photo?: string;
}

export const team: TeamMember[] = [
  {
    slug: "marvin-schuster",
    name: "Marvin Schuster",
    role: "Lead Service Technician",
    yearsExperience: 18,
    bio: "Marvin leads the field service team and personally handles complex Sub-Zero refrigeration diagnostics across Miami-Dade and Broward. He has spent the better part of two decades working exclusively on premium built-in refrigeration, with deep familiarity for older Classic and Pro 48 systems as well as the current Designer line. Marvin authors most of the technical guides on our blog.",
    specialties: [
      "Sub-Zero refrigeration",
      "Sealed system diagnostics",
      "Wine column service",
    ],
  },
];

export function getTeamMember(name: string): TeamMember | undefined {
  return team.find((t) => t.name === name);
}
