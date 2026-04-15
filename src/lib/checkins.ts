export interface EZLocalCheckin {
  page_item_url: string;
  data: {
    Title: string;
    Body: string;
    FeaturedImageURL: string;
    City: string;
    State: string;
    Zip: string;
    CityStateZip: string;
    CreateDate: string;
    CreateDateDisplay?: string;
    CreateDateISO?: string;
  };
}

const DISPLAY_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
});

const CHECKIN_URL =
  "https://partners.ezlocal.com/ezlocal/checkins/json.ashx?ProfileID=19064111";
const CHECKINS_REVALIDATE_SECONDS = 24 * 60 * 60;

const FALLBACK_CHECKINS: EZLocalCheckin[] = [
  {
    page_item_url: "sub-zero-refrigerator-repair-coral-gables",
    data: {
      Title: "Sub-Zero Refrigerator Repair",
      Body: "<p>Diagnosed and repaired a compressor issue on a Sub-Zero BI-36U built-in refrigerator. Replaced the start relay and capacitor with genuine Sub-Zero parts. Unit restored to optimal cooling temperature within one visit.</p>",
      FeaturedImageURL: "/images/checkins/checkin-coral-gables.webp",
      City: "Coral Gables",
      State: "FL",
      Zip: "33146",
      CityStateZip: "Coral Gables, FL 33146",
      CreateDate: "3/1/2026",
    },
  },
  {
    page_item_url: "sub-zero-ice-maker-repair-fort-lauderdale",
    data: {
      Title: "Sub-Zero Ice Maker Repair",
      Body: "<p>Serviced a Sub-Zero undercounter ice maker that stopped producing ice. Replaced the water inlet valve and cleaned the condenser coils. Ice production fully restored same day.</p>",
      FeaturedImageURL: "/images/checkins/checkin-fort-lauderdale.webp",
      City: "Fort Lauderdale",
      State: "FL",
      Zip: "33301",
      CityStateZip: "Fort Lauderdale, FL 33301",
      CreateDate: "3/10/2026",
    },
  },
  {
    page_item_url: "sub-zero-wine-cooler-repair-boca-raton",
    data: {
      Title: "Sub-Zero Wine Cooler Repair",
      Body: "<p>Repaired temperature fluctuation issue on a Sub-Zero wine storage unit. Replaced the thermistor sensor and recalibrated the temperature control board. Both zones now maintaining proper temperatures.</p>",
      FeaturedImageURL: "/images/checkins/checkin-boca-raton.webp",
      City: "Boca Raton",
      State: "FL",
      Zip: "33432",
      CityStateZip: "Boca Raton, FL 33432",
      CreateDate: "2/14/2026",
    },
  },
  {
    page_item_url: "sub-zero-freezer-repair-naples",
    data: {
      Title: "Sub-Zero Freezer Repair",
      Body: "<p>Addressed frost buildup in a Sub-Zero 700 series freezer column. Replaced the defrost timer and heater assembly. Freezer now cycling properly with no excess frost.</p>",
      FeaturedImageURL: "/images/checkins/checkin-naples.webp",
      City: "Naples",
      State: "FL",
      Zip: "34102",
      CityStateZip: "Naples, FL 34102",
      CreateDate: "2/20/2026",
    },
  },
  {
    page_item_url: "marine-refrigeration-repair-key-largo",
    data: {
      Title: "Marine Refrigeration Repair",
      Body: "<p>Dockside service call for a Sub-Zero marine refrigeration system. Repaired a refrigerant leak and recharged the system. Unit tested and running at proper operating temperatures.</p>",
      FeaturedImageURL: "/images/checkins/checkin-key-largo.webp",
      City: "Key Largo",
      State: "FL",
      Zip: "33037",
      CityStateZip: "Key Largo, FL 33037",
      CreateDate: "1/15/2026",
    },
  },
  {
    page_item_url: "sub-zero-refrigerator-maintenance-west-palm-beach",
    data: {
      Title: "Sub-Zero Refrigerator Maintenance",
      Body: "<p>Completed preventive maintenance on a dual Sub-Zero refrigerator and freezer column setup. Cleaned condenser coils, inspected door gaskets, checked temperature calibration, and replaced the water filter.</p>",
      FeaturedImageURL: "/images/checkins/checkin-west-palm-beach.webp",
      City: "West Palm Beach",
      State: "FL",
      Zip: "33401",
      CityStateZip: "West Palm Beach, FL 33401",
      CreateDate: "1/28/2026",
    },
  },
];

function isCheckin(value: unknown): value is EZLocalCheckin {
  if (!value || typeof value !== "object") {
    return false;
  }

  const checkin = value as EZLocalCheckin;
  return (
    typeof checkin.page_item_url === "string" &&
    !!checkin.data &&
    typeof checkin.data.Title === "string" &&
    typeof checkin.data.Body === "string" &&
    typeof checkin.data.CityStateZip === "string" &&
    typeof checkin.data.CreateDate === "string"
  );
}

function getOrdinal(day: number): string {
  const remainder = day % 10;
  const teen = day % 100;

  if (teen >= 11 && teen <= 13) {
    return "th";
  }

  if (remainder === 1) {
    return "st";
  }

  if (remainder === 2) {
    return "nd";
  }

  if (remainder === 3) {
    return "rd";
  }

  return "th";
}

function formatCheckinDate(dateValue: string): string {
  const parsed = new Date(dateValue);

  if (Number.isNaN(parsed.getTime())) {
    return dateValue;
  }

  const monthDay = DISPLAY_DATE_FORMATTER.format(parsed);
  const day = parsed.getDate();

  return monthDay.replace(String(day), `${day}${getOrdinal(day)}`);
}

function getMachineReadableDate(dateValue: string): string | undefined {
  const parsed = new Date(dateValue);

  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatCheckin(checkin: EZLocalCheckin): EZLocalCheckin {
  return {
    ...checkin,
    data: {
      ...checkin.data,
      CreateDateDisplay: formatCheckinDate(checkin.data.CreateDate),
      CreateDateISO: getMachineReadableDate(checkin.data.CreateDate),
    },
  };
}

export async function getCheckins(): Promise<EZLocalCheckin[]> {
  try {
    const res = await fetch(CHECKIN_URL, {
      next: { revalidate: CHECKINS_REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      return FALLBACK_CHECKINS;
    }

    const data: unknown = await res.json();
    return Array.isArray(data) && data.every(isCheckin) && data.length > 0
      ? data.map(formatCheckin)
      : FALLBACK_CHECKINS.map(formatCheckin);
  } catch {
    return FALLBACK_CHECKINS.map(formatCheckin);
  }
}

export async function getRecentCheckins(limit = 5): Promise<EZLocalCheckin[]> {
  const checkins = await getCheckins();
  return checkins.slice(0, limit);
}
