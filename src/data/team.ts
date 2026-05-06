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
    slug: "daniel-rivera",
    name: "Daniel Rivera",
    role: "Senior Service Technician",
    yearsExperience: 15,
    bio: "Daniel is the senior technician on dispatch for our most complex Sub-Zero work — sealed-system diagnostics, marine refrigeration, and wine column calibration across Miami-Dade and Broward. Fifteen years working only on premium built-in refrigeration has given him an unusual fluency with both the active Designer and Pro 48 lines and the legacy 532, 632, and 690 series still running across South Florida luxury homes. He writes most of the technical guides on this site.",
    specialties: [
      "Sealed-system diagnostics",
      "Marine refrigeration",
      "Wine column calibration",
      "Legacy Sub-Zero systems",
    ],
  },
];

export function getTeamMember(name: string): TeamMember | undefined {
  return team.find((t) => t.name === name);
}
