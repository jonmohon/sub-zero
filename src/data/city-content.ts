import { counties } from "@/data/areas";

export const SERVICE_LINKS = [
  { name: "Refrigerator Repair", slug: "refrigerator-repair", headingTemplate: (city: string) => `Refrigerator Repair Services in ${city}` },
  { name: "Freezer Repair", slug: "freezer-repair", headingTemplate: (city: string) => `Freezer Repair for ${city} Homes` },
  { name: "Ice Maker Repair", slug: "icemaker-repair", headingTemplate: (city: string) => `Ice Maker Repair in ${city}` },
  { name: "Wine Cooler Repair", slug: "wine-cooler-repair", headingTemplate: (city: string) => `Wine Cooler Service in ${city}` },
];

interface ServiceContent {
  service: string;
  slug: string;
  heading: string;
  paragraph: string;
}

type PriorityCityContent = Record<string, Record<string, string>>;

const priorityCityParagraphs: PriorityCityContent = {
  miami: {
    "refrigerator-repair":
      "As the largest city in South Florida, Miami demands reliable Sub-Zero refrigerator repair for both commercial and residential properties. Our certified technicians serve Brickell, Downtown, Coral Way, and every neighborhood in between, delivering fast diagnostics and genuine Sub-Zero parts. Keep your kitchen running flawlessly with same-day appointments available throughout Miami.",
    "freezer-repair":
      "Miami homeowners and businesses rely on properly functioning freezers year-round in South Florida's tropical climate. From high-rise condos in Brickell to family homes in Coral Way, our technicians provide expert Sub-Zero freezer repair using only factory-authorized parts. We understand the unique demands of Miami's commercial and residential properties and offer same-day service throughout the city.",
    "icemaker-repair":
      "In a city as vibrant as Miami, a broken ice maker is more than an inconvenience — it disrupts daily life in homes and businesses across Downtown, Brickell, and Coral Way. Our factory-trained technicians specialize in Sub-Zero ice maker diagnostics and repair, ensuring your unit is restored quickly. We carry genuine Sub-Zero parts and offer same-day service across Miami's diverse neighborhoods.",
    "wine-cooler-repair":
      "Miami's sophisticated dining and entertaining culture means your Sub-Zero wine cooler needs to perform perfectly at all times. Whether you live in a luxury Brickell condo or a spacious Coral Way estate, our certified technicians deliver precise temperature calibration and component repair. We service residential and commercial Sub-Zero wine coolers throughout Miami with same-day availability.",
  },
  "key-biscayne": {
    "refrigerator-repair":
      "Key Biscayne's island community deserves specialized Sub-Zero refrigerator repair from technicians who understand the unique challenges of coastal living. Salt air and humidity can accelerate wear on appliance components, making regular maintenance and expert repair essential for luxury homes on the island. Our certified team provides prompt service with genuine Sub-Zero parts to Key Biscayne residents.",
    "freezer-repair":
      "Living on an island community like Key Biscayne means your Sub-Zero freezer faces constant exposure to salt air and elevated humidity levels. Our technicians are trained to address the corrosion and component wear that coastal environments cause in luxury home appliances. We deliver reliable Sub-Zero freezer repair with factory-authorized parts directly to Key Biscayne's waterfront properties.",
    "icemaker-repair":
      "Key Biscayne's luxury homes depend on fully functional Sub-Zero ice makers, especially given the island's year-round warm climate and active entertaining lifestyle. Salt air from the surrounding ocean can impact ice maker components and water lines, requiring technicians who understand coastal appliance challenges. We provide expert repair with genuine parts to keep your ice maker performing perfectly.",
    "wine-cooler-repair":
      "Protecting your wine collection in Key Biscayne's island environment requires a Sub-Zero wine cooler in peak condition. The salt air and humidity unique to this exclusive community can affect cooling performance and seals over time. Our certified technicians provide meticulous Sub-Zero wine cooler repair using factory parts, ensuring your collection stays at the perfect temperature.",
  },
  "miami-beach": {
    "refrigerator-repair":
      "Miami Beach's oceanfront condos, luxury hotels, and iconic Art Deco district homes all rely on Sub-Zero refrigerators for premium food preservation. Our certified technicians provide expert repair throughout South Beach and the entire barrier island, handling everything from compressor issues to temperature control problems. We offer same-day service with genuine Sub-Zero parts for Miami Beach residents.",
    "freezer-repair":
      "From South Beach high-rises to luxury hotels along the oceanfront, Miami Beach properties demand top-tier Sub-Zero freezer repair. The coastal environment and salt air can take a toll on freezer components, and our factory-trained technicians know how to address these challenges effectively. We serve the entire barrier island with same-day appointments and genuine Sub-Zero replacement parts.",
    "icemaker-repair":
      "Miami Beach's hospitality and luxury residential scene requires ice makers that work flawlessly around the clock. Whether you own a condo in the Art Deco district or manage a South Beach property, our technicians deliver expert Sub-Zero ice maker repair with factory-authorized parts. We understand the high standards of Miami Beach living and provide prompt, reliable service across the island.",
    "wine-cooler-repair":
      "Miami Beach's world-class dining scene and luxury oceanfront residences demand perfectly functioning Sub-Zero wine coolers. Our certified technicians service condos, estates, and boutique hotels throughout South Beach and the Art Deco district with precision repairs. We use only genuine Sub-Zero parts to ensure your wine collection is maintained at optimal temperature and humidity levels.",
  },
  pinecrest: {
    "refrigerator-repair":
      "Pinecrest's upscale residential village is home to large estate properties where Sub-Zero refrigerators are a kitchen staple. Our certified technicians understand the needs of this family-oriented community and provide thorough, reliable refrigerator repair using genuine factory parts. We offer convenient scheduling and same-day service to keep Pinecrest homes running smoothly.",
    "freezer-repair":
      "Families in Pinecrest's spacious estate homes depend on their Sub-Zero freezers for everyday meal preparation and long-term food storage. Our factory-trained technicians deliver expert freezer repair tailored to the needs of this upscale residential village. We arrive with genuine Sub-Zero parts and provide same-day service so your household routine stays uninterrupted.",
    "icemaker-repair":
      "In Pinecrest's family-oriented community, a reliable ice maker is essential for busy households and frequent entertaining in large estate homes. Our certified technicians specialize in Sub-Zero ice maker repair, diagnosing issues quickly and using only factory-authorized parts. We provide prompt, professional service throughout this upscale residential village.",
    "wine-cooler-repair":
      "Pinecrest homeowners take pride in their estates, and a properly functioning Sub-Zero wine cooler is part of that standard of living. Our certified technicians provide expert wine cooler repair for this upscale, family-oriented village, ensuring precise temperature and humidity control. We use genuine Sub-Zero parts and offer same-day appointments for Pinecrest residents.",
  },
  "indian-creek-village": {
    "refrigerator-repair":
      "Indian Creek Village is one of the most exclusive island municipalities in the country, and its ultra-luxury homes deserve the highest standard of Sub-Zero refrigerator repair. Our certified technicians provide discreet, professional service to this privacy-focused community with genuine factory parts. We understand the exacting standards of Indian Creek residents and deliver accordingly.",
    "freezer-repair":
      "The ultra-luxury homes of Indian Creek Village require Sub-Zero freezer repair from technicians who respect both the equipment and the exclusive nature of this island community. Our factory-trained team provides discreet, efficient service using only genuine Sub-Zero parts. We cater to the privacy-focused lifestyle of Indian Creek Village with flexible scheduling and white-glove care.",
    "icemaker-repair":
      "Indian Creek Village's exclusive island municipality demands premium appliance service for its ultra-luxury residences. Our certified technicians provide expert Sub-Zero ice maker repair with the discretion and professionalism this privacy-focused community expects. We use genuine factory parts and offer flexible scheduling to accommodate the distinguished homeowners of Indian Creek Village.",
    "wine-cooler-repair":
      "The distinguished homeowners of Indian Creek Village trust their wine collections to Sub-Zero wine coolers, and those units deserve expert maintenance and repair. Our certified technicians deliver discreet, professional service to this exclusive island municipality using only genuine factory parts. We ensure precise climate control for your collection with the privacy and care Indian Creek residents expect.",
  },
  "fisher-island": {
    "refrigerator-repair":
      "Fisher Island, accessible only by ferry, is one of Florida's most exclusive communities, and its waterfront estates demand exceptional Sub-Zero refrigerator repair. Our certified technicians coordinate ferry access to provide seamless service with genuine factory parts. We deliver the same level of excellence that Fisher Island residents expect in every aspect of their homes.",
    "freezer-repair":
      "Reaching Fisher Island requires ferry access, and our dedicated technicians make the trip to provide expert Sub-Zero freezer repair for this exclusive island community. The waterfront estates here house premium appliances that deserve factory-trained service with genuine parts. We coordinate logistics to ensure your Sub-Zero freezer is repaired promptly and professionally.",
    "icemaker-repair":
      "Fisher Island's exclusive waterfront estates require Sub-Zero ice maker repair from technicians willing to go the extra mile — literally. Accessible only by ferry, this private island community receives the same expert service we provide throughout South Florida, with genuine factory parts and meticulous attention to detail. We coordinate access to deliver prompt, reliable repairs.",
    "wine-cooler-repair":
      "The waterfront estates of Fisher Island house some of South Florida's finest wine collections, protected by Sub-Zero wine coolers that require expert care. Our certified technicians coordinate ferry access to this exclusive island community, arriving with genuine factory parts and specialized tools. We ensure your wine cooler maintains perfect conditions despite the unique coastal environment.",
  },
  "sunny-isles-beach": {
    "refrigerator-repair":
      "Sunny Isles Beach's luxury high-rise condos and oceanfront residences rely on Sub-Zero refrigerators for premium food preservation. Our certified technicians serve this vibrant coastal community, including the well-known \"Little Moscow\" area, with expert diagnostics and genuine factory parts. We provide same-day service to keep your Sub-Zero refrigerator performing at its best.",
    "freezer-repair":
      "From luxury high-rise condos to oceanfront residences, Sunny Isles Beach homeowners depend on reliable Sub-Zero freezers. Our factory-trained technicians service the entire community, including the \"Little Moscow\" area, with expert repair and genuine replacement parts. We understand the demands of oceanfront living and provide prompt, professional freezer repair throughout Sunny Isles Beach.",
    "icemaker-repair":
      "Sunny Isles Beach's luxury high-rise lifestyle demands a fully functional Sub-Zero ice maker, especially in South Florida's warm climate. Our certified technicians serve this oceanfront community, including the \"Little Moscow\" area, with expert diagnostics and genuine factory parts. We offer same-day appointments to restore your ice maker quickly and reliably.",
    "wine-cooler-repair":
      "The luxury condos and oceanfront residences of Sunny Isles Beach deserve expert Sub-Zero wine cooler repair to protect valuable collections. Our certified technicians service this vibrant community, including the well-known \"Little Moscow\" area, ensuring precise temperature control in every unit. We use genuine Sub-Zero parts and provide same-day service throughout Sunny Isles Beach.",
  },
  "key-largo": {
    "refrigerator-repair":
      "As the gateway to the Florida Keys, Key Largo's waterfront properties and marine lifestyle demand reliable Sub-Zero refrigerator repair. Salt air, humidity, and the unique demands of Keys living can affect appliance performance over time. Our certified technicians bring genuine Sub-Zero parts and expert knowledge to keep your refrigerator running perfectly in Key Largo.",
    "freezer-repair":
      "Key Largo's waterfront properties face unique challenges from the marine environment that can impact Sub-Zero freezer performance. As the gateway to the Florida Keys, this community needs technicians who understand coastal appliance care. Our factory-trained team provides expert Sub-Zero freezer repair with genuine parts, keeping your food preserved safely in the Keys lifestyle.",
    "icemaker-repair":
      "Living the marine lifestyle in Key Largo means your Sub-Zero ice maker works overtime, especially in the Florida Keys' tropical climate. Our certified technicians understand the impact of salt air and humidity on ice maker components and provide expert repair using genuine factory parts. We serve Key Largo's waterfront properties with prompt, reliable service.",
    "wine-cooler-repair":
      "Key Largo's waterfront estates and the laid-back Florida Keys lifestyle call for a Sub-Zero wine cooler that performs flawlessly despite the marine environment. Salt air and humidity can affect cooling systems and seals, making expert repair essential. Our certified technicians deliver professional Sub-Zero wine cooler service with genuine parts to Key Largo homeowners.",
  },
};

const defaultTemplates: Record<string, (cityName: string, countyName: string) => string> = {
  "refrigerator-repair": (city, county) =>
    `When your Sub-Zero refrigerator needs attention in ${city}, our factory-trained technicians respond quickly with same-day service. We carry genuine replacement parts throughout ${county} and back every repair with a full warranty, so your kitchen stays running without interruption.`,
  "freezer-repair": (city, county) =>
    `A freezer breakdown in ${city} means your food is at risk. Our certified team serves all of ${county} with fast, professional Sub-Zero freezer diagnostics and repair. We stock authentic parts on every truck to get your unit back to proper temperature in a single visit.`,
  "icemaker-repair": (city, county) =>
    `${city} residents count on working ice makers year-round in South Florida's heat. Our technicians handle every Sub-Zero ice maker issue — from clogged lines to faulty sensors — with genuine parts and same-day availability across ${county}.`,
  "wine-cooler-repair": (city, county) =>
    `Protecting your wine collection in ${city} starts with a properly calibrated Sub-Zero wine cooler. Our certified technicians serve ${county} with expert temperature and humidity repairs, using only factory-authorized parts to keep your wines stored at ideal conditions.`,
};

function getDefaultParagraph(
  serviceSlug: string,
  cityName: string,
  countyName: string
): string {
  const template = defaultTemplates[serviceSlug];
  if (template) return template(cityName, countyName);
  return `Our certified technicians provide fast, reliable Sub-Zero appliance repair in ${cityName} and throughout ${countyName}. We offer same-day service with genuine Sub-Zero parts to keep your appliances running perfectly.`;
}

export function getCityContent(
  citySlug: string,
  cityName: string,
  countyName: string
): ServiceContent[] {
  return SERVICE_LINKS.map((service) => {
    const priorityContent = priorityCityParagraphs[citySlug]?.[service.slug];
    const paragraph =
      priorityContent ?? getDefaultParagraph(service.slug, cityName, countyName);

    return {
      service: service.name,
      slug: service.slug,
      heading: service.headingTemplate(cityName),
      paragraph,
    };
  });
}

export function getNearbyAreas(
  citySlug: string,
  countySlug: string
): { name: string; slug: string; countySlug: string }[] {
  const county = counties.find((c) => c.slug === countySlug);
  if (!county) return [];

  return county.cities
    .filter((city) => city.slug !== citySlug)
    .slice(0, 5)
    .map((city) => ({
      name: city.name,
      slug: city.slug,
      countySlug: countySlug,
    }));
}
