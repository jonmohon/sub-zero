import { counties, PRIORITY_CITIES } from "@/data/areas";

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
  "boca-raton": {
    "refrigerator-repair":
      "Boca Raton's affluent neighborhoods — from Royal Palm Yacht & Country Club to The Sanctuary, Old Floresta, and the gated estates off Camino Real — house some of South Florida's finest Sub-Zero refrigerators. Our certified technicians provide expert diagnostics and genuine factory parts to estate homes and Mizner Park condos alike, with same-day service throughout Boca.",
    "freezer-repair":
      "From Boca West and St. Andrews Country Club to the estate homes of Polo Club and Boca Pointe, Boca Raton's homeowners trust their Sub-Zero freezers to handle daily meals and long-term storage. Our factory-trained technicians service the entire city with genuine Sub-Zero parts and same-day appointments.",
    "icemaker-repair":
      "Boca Raton's year-round entertaining culture — Mizner Park brunches, private events at Royal Palm Yacht Club, family gatherings at The Oaks — depends on Sub-Zero ice makers performing flawlessly. Our certified technicians handle clogged lines, faulty sensors, and mineral buildup with factory-authorized parts and same-day service across Boca.",
    "wine-cooler-repair":
      "The wine cellars of Boca Raton's country clubs and gated estates — Boca West, The Oaks, Stone Creek Ranch, Royal Palm Yacht Club — demand precise temperature and humidity control. Our certified technicians calibrate Sub-Zero wine coolers to exacting standards using genuine factory parts, ensuring your collection is preserved at ideal conditions.",
  },
  "fort-lauderdale": {
    "refrigerator-repair":
      "Fort Lauderdale's waterfront homes along Las Olas Isles, Rio Vista, and Harbor Beach face unique salt-air challenges that affect Sub-Zero refrigerator performance over time. Our certified technicians serve the intracoastal corridor, Coral Ridge, Victoria Park, and downtown high-rises, providing expert repair with genuine Sub-Zero parts.",
    "freezer-repair":
      "From the canalfront mansions of Las Olas Isles to the high-rises along Galt Mile and Sunrise Boulevard, Fort Lauderdale homeowners trust their Sub-Zero freezers in a salt-air coastal climate. Our factory-trained team handles compressor and seal issues common in waterfront properties, using only genuine Sub-Zero parts.",
    "icemaker-repair":
      "Fort Lauderdale's boating and entertaining lifestyle — from Bahia Mar to the Lauderdale Yacht Club — runs through the kitchen ice maker. Our certified technicians repair Sub-Zero ice makers across Coral Ridge, Victoria Park, and the Isles, addressing the line scaling and sensor wear coastal humidity tends to cause.",
    "wine-cooler-repair":
      "The waterfront estates of Harbor Beach and Las Olas Isles, plus the high-rise condos along Galt Mile, store some of Fort Lauderdale's most impressive wine collections. Our certified technicians service every Sub-Zero wine cooler with factory parts, restoring precise climate control even in salt-exposed coastal homes.",
  },
  naples: {
    "refrigerator-repair":
      "Naples' luxury enclaves — Port Royal, Old Naples, Aqualane Shores, and Bay Colony — set the standard for Gulf Coast estate living and the Sub-Zero refrigerators that anchor those kitchens. Our certified technicians serve all of Naples with same-day appointments and genuine factory parts.",
    "freezer-repair":
      "From the historic homes of Old Naples to the gated estates of Port Royal and Bay Colony, Naples residents depend on Sub-Zero freezers that handle Gulf-coast humidity year-round. Our factory-trained technicians provide expert diagnostics and genuine replacement parts across Naples and surrounding Collier County.",
    "icemaker-repair":
      "Naples' refined entertaining scene, from 5th Avenue South dining to private gatherings in Port Royal, depends on a flawless Sub-Zero ice maker. Our certified technicians repair clogged lines, sensor failures, and water-supply issues with factory-authorized parts and prompt service throughout Naples.",
    "wine-cooler-repair":
      "The wine cellars of Naples' Port Royal estates and Aqualane Shores waterfront homes hold collections that require Sub-Zero precision. Our certified technicians calibrate temperature and humidity to exacting standards using genuine factory parts, protecting wines stored in some of Florida's finest residences.",
  },
  aventura: {
    "refrigerator-repair":
      "Aventura's high-rise lifestyle — Williams Island, Porto Vita, Turnberry Ocean Colony — places enormous demand on Sub-Zero refrigerators that anchor each unit's kitchen. Our certified technicians provide concierge-style service to Aventura's gated communities and luxury condo towers with genuine Sub-Zero parts.",
    "freezer-repair":
      "From Williams Island's gated towers to the family neighborhoods near Aventura Mall, Aventura's Sub-Zero freezers handle a demanding entertaining schedule. Our factory-trained team provides expert repair using genuine parts, with same-day service for both high-rise condos and single-family homes.",
    "icemaker-repair":
      "Aventura's social calendar — from rooftop pool decks at Porto Vita to family gatherings near Aventura Mall — runs on a working ice maker. Our certified technicians repair every Sub-Zero ice maker model with factory-authorized parts, navigating concierge access and same-day appointments across the city's luxury towers.",
    "wine-cooler-repair":
      "The wine collections of Aventura's penthouse residents — Williams Island, Turnberry, Porto Vita — require Sub-Zero wine coolers calibrated to exacting standards. Our certified technicians provide white-glove service with genuine factory parts, coordinating concierge access for the city's high-rise community.",
  },
  "coral-gables": {
    "refrigerator-repair":
      "Coral Gables' historic estates — Cocoplum, Gables Estates, Old Cutler, Hammock Lakes — house Sub-Zero refrigerators that match the city's architectural standards. Our certified technicians serve Miracle Mile, the Biltmore neighborhood, and every gated community with expert diagnostics and genuine factory parts.",
    "freezer-repair":
      "From the Mediterranean-style homes near the Biltmore to the waterfront estates of Gables Estates and Cocoplum, Coral Gables residents trust Sub-Zero freezers for everyday reliability. Our factory-trained technicians handle compressor and ice-buildup issues with genuine parts and same-day service throughout the city.",
    "icemaker-repair":
      "Coral Gables' entertaining culture — the Biltmore's social calendar, Granada Golf Course events, Riviera Country Club gatherings — keeps Sub-Zero ice makers running constantly. Our certified technicians service every model across Cocoplum, Old Cutler, and Hammock Lakes, using factory parts to restore reliable performance.",
    "wine-cooler-repair":
      "The wine cellars of Coral Gables' Cocoplum and Gables Estates mansions hold collections that demand Sub-Zero-grade precision. Our certified technicians calibrate temperature and humidity to exacting standards using genuine factory parts, protecting wines stored in the city's most prestigious homes.",
  },
  doral: {
    "refrigerator-repair":
      "Doral's master-planned communities — Doral Isles, Doral Country Club, Doral Cay — bring premium Sub-Zero refrigerators into family kitchens that demand reliability. Our certified technicians provide same-day service throughout Doral, from gated communities to executive estates near Trump National Doral, with genuine factory parts.",
    "freezer-repair":
      "From the gated communities of Doral Isles to the executive homes near Trump National Doral, Doral families rely on Sub-Zero freezers to keep up with active households. Our factory-trained technicians provide expert repair with genuine parts and same-day appointments across the city.",
    "icemaker-repair":
      "Doral's growing residential scene — from Doral Country Club to the planned communities along NW 87th Avenue — depends on Sub-Zero ice makers that work hard in South Florida's heat. Our certified technicians address line clogs and sensor failures with factory-authorized parts and prompt service.",
    "wine-cooler-repair":
      "Doral's executive homeowners — at Doral Country Club, near Trump National Doral, and throughout the gated enclaves — trust Sub-Zero wine coolers to protect their collections. Our certified technicians provide expert calibration and component repair using only genuine factory parts.",
  },
  weston: {
    "refrigerator-repair":
      "Weston's master-planned neighborhoods — Bonaventure, Weston Hills Country Club, Country Isles, Savanna — house family Sub-Zero refrigerators that anchor everyday life. Our certified technicians serve every gated community in Weston with expert diagnostics, genuine factory parts, and same-day appointments.",
    "freezer-repair":
      "From Weston Hills Country Club estates to the family homes of Country Isles and Savanna, Weston residents trust their Sub-Zero freezers for busy household routines. Our factory-trained technicians provide expert repair with genuine Sub-Zero parts across this carefully planned community.",
    "icemaker-repair":
      "Weston's family-oriented lifestyle, from neighborhood pool parties in Country Isles to weekend gatherings at Weston Hills, depends on a working Sub-Zero ice maker. Our certified technicians handle every issue with factory-authorized parts and same-day service throughout Weston.",
    "wine-cooler-repair":
      "The estate homes of Weston Hills and Bonaventure house Sub-Zero wine coolers protecting collections built over years. Our certified technicians provide precise temperature and humidity calibration using genuine factory parts, keeping Weston wine collections at ideal conditions.",
  },
  jupiter: {
    "refrigerator-repair":
      "Jupiter's waterfront enclaves — Admiral's Cove, the Loxahatchee Club, Jupiter Inlet Colony — combine luxury living with the salt-air challenges that affect Sub-Zero refrigerator components. Our certified technicians serve all of Jupiter with corrosion-aware repair, genuine factory parts, and same-day appointments.",
    "freezer-repair":
      "From the gated estates of Admiral's Cove to Jupiter Inlet's waterfront homes, Jupiter's coastal lifestyle demands Sub-Zero freezers built to last. Our factory-trained technicians address salt-air component wear with genuine parts and same-day service throughout the Jupiter area.",
    "icemaker-repair":
      "Jupiter's golf-and-boating lifestyle, from Trump National Jupiter to The Loxahatchee Club, runs on Sub-Zero ice makers that need to handle constant entertaining. Our certified technicians repair every model with factory-authorized parts, accounting for the salt-air conditions unique to Jupiter.",
    "wine-cooler-repair":
      "The wine cellars of Jupiter's Admiral's Cove and Loxahatchee Club estates hold collections that require Sub-Zero precision in a coastal environment. Our certified technicians calibrate climate control to exacting standards using genuine factory parts, protecting wines in salt-air homes.",
  },
  "palm-beach-gardens": {
    "refrigerator-repair":
      "Palm Beach Gardens' luxury communities — PGA National, Mirasol, BallenIsles, Frenchman's Creek, Old Marsh — anchor their kitchens with Sub-Zero refrigerators that demand expert care. Our certified technicians provide same-day service to every gated community with genuine Sub-Zero parts.",
    "freezer-repair":
      "From the championship golf communities of PGA National and BallenIsles to the gated estates of Mirasol and Frenchman's Creek, Palm Beach Gardens residents depend on Sub-Zero freezers for premium food storage. Our factory-trained technicians handle every issue with genuine parts.",
    "icemaker-repair":
      "Palm Beach Gardens' active golf-and-tennis lifestyle, centered on PGA National and BallenIsles Country Club, keeps Sub-Zero ice makers in constant use. Our certified technicians repair clogged lines and sensor failures with factory-authorized parts and same-day service throughout the city.",
    "wine-cooler-repair":
      "The estate homes of Frenchman's Creek and Old Marsh hold wine collections protected by Sub-Zero precision. Our certified technicians calibrate temperature and humidity in every wine cooler using genuine factory parts, preserving collections built across Palm Beach Gardens' most exclusive communities.",
  },
  "west-palm-beach": {
    "refrigerator-repair":
      "West Palm Beach's neighborhoods — El Cid, SoSo, Flamingo Park, the historic Northwood district — combine charm with the everyday need for reliable Sub-Zero refrigerator performance. Our certified technicians serve downtown's high-rises along with the city's residential blocks, using genuine Sub-Zero parts.",
    "freezer-repair":
      "From the historic homes of El Cid and Flamingo Park to the high-rises overlooking Clematis Street and CityPlace, West Palm Beach residents trust Sub-Zero freezers for daily reliability. Our factory-trained technicians provide expert repair with genuine parts throughout the city.",
    "icemaker-repair":
      "West Palm Beach's mix of historic neighborhoods and downtown high-rises depends on Sub-Zero ice makers that handle South Florida's heat. Our certified technicians serve El Cid, SoSo, Flamingo Park, and downtown with factory-authorized parts and same-day appointments.",
    "wine-cooler-repair":
      "The historic estates of El Cid and the Northwood district house wine collections that demand Sub-Zero-grade preservation. Our certified technicians calibrate temperature and humidity in every wine cooler using genuine factory parts, protecting West Palm Beach's most cherished collections.",
  },
  "delray-beach": {
    "refrigerator-repair":
      "Delray Beach's vibrant Atlantic Avenue lifestyle, plus the gated estates of the Polo Club and Country Club neighborhoods, makes Sub-Zero refrigerator reliability essential. Our certified technicians serve beachside condos along A1A, Pineapple Grove, and the city's gated communities with genuine factory parts.",
    "freezer-repair":
      "From the beachside condos along A1A to the estate homes of the Delray Country Club and Polo Club, Delray Beach residents depend on Sub-Zero freezers in a coastal environment. Our factory-trained technicians address salt-air wear with genuine Sub-Zero parts and same-day service.",
    "icemaker-repair":
      "Delray Beach's social scene — Atlantic Avenue dining, beachside entertaining, Polo Club gatherings — runs on Sub-Zero ice makers performing flawlessly. Our certified technicians repair every model with factory-authorized parts, navigating the salt-air conditions common in coastal homes.",
    "wine-cooler-repair":
      "The wine cellars of Delray Beach's Polo Club and Country Club estates, plus the beachside condos along A1A, demand Sub-Zero precision. Our certified technicians provide expert calibration and component repair using only genuine factory parts.",
  },
  hollywood: {
    "refrigerator-repair":
      "Hollywood's mix of beachside high-rises along the Broadwalk and gated communities like Emerald Hills and Hollywood Lakes places consistent demand on Sub-Zero refrigerators. Our certified technicians serve the entire city with expert diagnostics, genuine factory parts, and same-day service.",
    "freezer-repair":
      "From the beachside condos along Hollywood Beach Broadwalk to the homes of Emerald Hills and Hollywood Lakes, Hollywood residents rely on Sub-Zero freezers in a salt-air coastal environment. Our factory-trained technicians provide expert repair with genuine parts.",
    "icemaker-repair":
      "Hollywood's beachside lifestyle, from the Broadwalk to the Lakes neighborhood, keeps Sub-Zero ice makers working hard in South Florida's heat. Our certified technicians address line clogs and sensor failures with factory-authorized parts and prompt service across the city.",
    "wine-cooler-repair":
      "The estate homes of Emerald Hills and the beachside condos along the Broadwalk house wine collections protected by Sub-Zero wine coolers. Our certified technicians provide precise climate control with genuine factory parts, preserving Hollywood collections in coastal conditions.",
  },
  stuart: {
    "refrigerator-repair":
      "Stuart's waterfront properties along the St. Lucie River, plus the gated estates of Sailfish Point and Mariner Sands, require Sub-Zero refrigerator service that accounts for the marine environment. Our certified technicians serve all of Stuart with genuine factory parts and same-day appointments.",
    "freezer-repair":
      "From Sailfish Point's oceanfront homes to the historic downtown Stuart waterfront, Stuart residents depend on Sub-Zero freezers that hold up to coastal humidity. Our factory-trained technicians provide expert repair with genuine Sub-Zero parts throughout Martin County's seat.",
    "icemaker-repair":
      "Stuart's waterfront lifestyle, from boats moored at Sailfish Point to estate homes overlooking the St. Lucie River, runs on a reliable Sub-Zero ice maker. Our certified technicians address salt-air corrosion and component wear with factory-authorized parts and same-day service.",
    "wine-cooler-repair":
      "The wine cellars of Stuart's Sailfish Point and Mariner Sands estates hold collections that demand Sub-Zero precision in a marine environment. Our certified technicians provide expert calibration using only genuine factory parts, protecting wines stored in Stuart's waterfront homes.",
  },
  "marco-island": {
    "refrigerator-repair":
      "Marco Island's beachfront condos and gated estates — Cape Marco, Hideaway Beach, the homes lining Tigertail Beach — require Sub-Zero refrigerator service that handles intense Gulf-coast salt air. Our certified technicians provide expert repair with genuine factory parts throughout the island.",
    "freezer-repair":
      "From the beachside towers of Cape Marco to the gated homes of Hideaway Beach, Marco Island's Gulf-coast environment puts heavy demand on Sub-Zero freezer components. Our factory-trained technicians address salt-air wear with genuine Sub-Zero parts and same-day appointments.",
    "icemaker-repair":
      "Marco Island's beach-and-boating lifestyle, from Tigertail Beach to the Marco Island Yacht Club, depends on Sub-Zero ice makers that perform in Gulf-coast humidity. Our certified technicians repair clogged lines and sensor failures with factory-authorized parts and prompt service.",
    "wine-cooler-repair":
      "Marco Island's beachfront estates and Cape Marco condos house wine collections that demand Sub-Zero precision despite Gulf-coast salt air. Our certified technicians calibrate temperature and humidity in every wine cooler using genuine factory parts, protecting collections on the island.",
  },
  "palm-beach": {
    "refrigerator-repair":
      "Palm Beach's Estate Section, plus the iconic homes along Worth Avenue and South Ocean Boulevard, sets the world's standard for luxury living and the Sub-Zero refrigerators that anchor those kitchens. Our certified technicians provide discreet, white-glove service with genuine factory parts.",
    "freezer-repair":
      "From the oceanfront estates south of Mar-a-Lago to the Royal Poinciana neighborhood and El Bravo Way, Palm Beach's most prestigious homes depend on Sub-Zero freezers that match the island's exacting standards. Our factory-trained technicians provide discreet service with genuine parts.",
    "icemaker-repair":
      "Palm Beach's social calendar, from The Breakers' events to private gatherings in the Estate Section, depends on Sub-Zero ice makers performing flawlessly. Our certified technicians provide white-glove service across the island with factory-authorized parts and discretion.",
    "wine-cooler-repair":
      "The wine cellars of Palm Beach's Estate Section and South Ocean Boulevard mansions hold collections of historic significance. Our certified technicians provide the island's most exacting Sub-Zero wine cooler service, calibrating climate control to museum-grade standards using only genuine factory parts.",
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

  // Prefer priority cities first (those have unique, high-equity pages),
  // then alphabetical. Return up to 8 so smaller cities get more inbound
  // links and Google sees a clearer hub-and-spoke pattern.
  const others = [...county.cities].filter((city) => city.slug !== citySlug);
  others.sort((a, b) => {
    const aPriority = PRIORITY_CITIES.includes(a.slug) ? 0 : 1;
    const bPriority = PRIORITY_CITIES.includes(b.slug) ? 0 : 1;
    if (aPriority !== bPriority) return aPriority - bPriority;
    return a.name.localeCompare(b.name);
  });

  return others.slice(0, 8).map((city) => ({
    name: city.name,
    slug: city.slug,
    countySlug,
  }));
}

/* =====================================================================
 * Local-context intros for non-priority cities.
 *
 * These 1-2 sentence anchors mention real neighborhoods, landmarks, or
 * local character so each city page reads as genuinely distinct from
 * its siblings. Inserted above the generic intro paragraph in
 * [county]/[city]/page.tsx. Priority cities don't need these — they
 * already have unique service paragraphs above the fold.
 * ===================================================================== */

export const cityIntros: Record<string, string> = {
  // Miami-Dade
  "bal-harbour":
    "Bal Harbour's village of luxury oceanfront condos and the iconic Bal Harbour Shops makes it one of South Florida's most exclusive enclaves. Sub-Zero refrigerators anchor the kitchens of every St. Regis residence and Park at Bal Harbour estate.",
  "bay-harbor-islands":
    "Bay Harbor Islands sits between Bal Harbour and Surfside on twin barrier islands, with mid-century homes and modern waterfront residences along Indian Creek. Sub-Zero appliances are standard in this tight-knit luxury community.",
  "cutler-bay":
    "Cutler Bay's family-oriented neighborhoods like Old Cutler Bay and Lakes by the Bay rely on Sub-Zero refrigerators for everyday durability in South Miami-Dade's coastal environment.",
  "golden-beach":
    "Golden Beach's mile-long stretch of oceanfront mansions makes it one of Florida's most exclusive single-family communities. Every home in this gated enclave depends on premium Sub-Zero appliances.",
  "miami-lakes":
    "Miami Lakes' planned-community lifestyle, centered on Main Street and the Royal Oaks neighborhood, places consistent demand on Sub-Zero appliances in well-appointed family kitchens.",
  "north-bay-village":
    "North Bay Village spans three small islands in Biscayne Bay between Miami and Miami Beach, with high-rise residences and waterfront homes that depend on Sub-Zero appliances.",
  "palmetto-bay":
    "Palmetto Bay's leafy neighborhoods like Coral Reef and Cocoplum span between Old Cutler Road and US-1, with estate homes that anchor their kitchens with Sub-Zero appliances.",
  "south-miami":
    "South Miami's walkable downtown and the historic homes along Sunset Drive and Red Road make this a settled community where Sub-Zero appliances are family heirlooms.",
  surfside:
    "Surfside's compact oceanfront town between Miami Beach and Bal Harbour is home to Surf Club residences and the Bay Drive corridor, with premium Sub-Zero appliances in nearly every kitchen.",

  // Broward
  "coconut-creek":
    "Coconut Creek is known as the Butterfly Capital of the World and home to the master-planned communities of Township and Wynmoor Village, where Sub-Zero refrigerators serve active retirement and family households alike.",
  "cooper-city":
    "Cooper City's family-friendly neighborhoods like Rock Creek and Embassy Lakes anchor southwest Broward, where Sub-Zero appliances are the standard in upgraded kitchens.",
  "coral-springs":
    "Coral Springs' carefully planned grid of family neighborhoods — Eagle Trace, Heron Bay, Westchester — relies on Sub-Zero refrigerators for everyday reliability.",
  davie:
    "Davie's mix of equestrian estates near Pine Island Road and family neighborhoods like Forest Ridge keeps Sub-Zero appliances in steady demand across this Broward town.",
  "deerfield-beach":
    "Deerfield Beach's mile of pristine sand, plus the Cove and the Hillsboro El-Rio neighborhoods, makes this oceanside town a key Sub-Zero service market in north Broward.",
  "hallandale-beach":
    "Hallandale Beach's Gulfstream Park, the high-rises along Three Islands, and the Golden Isles waterfront properties all depend on Sub-Zero appliances in coastal condos and estate kitchens.",
  "lauderdale-by-the-sea":
    "Lauderdale-by-the-Sea's small-town beach charm and the Anglin's Pier neighborhood pair with luxury oceanfront condos that anchor their kitchens with Sub-Zero appliances.",
  "lighthouse-point":
    "Lighthouse Point's deep-water canals and waterfront homes near the Hillsboro Inlet make this small Broward city a hub of premium Sub-Zero installations.",
  margate:
    "Margate's planned neighborhoods and the Carolina Estates community keep Sub-Zero appliances in steady use across central Broward family households.",
  miramar:
    "Miramar's mix of historic east-side neighborhoods and master-planned communities like Silver Lakes and Riviera Isles depends on Sub-Zero refrigerators in kitchens of every size.",
  parkland:
    "Parkland's gated estate communities — Heron Bay, Parkland Golf & Country Club, Parkland Reserve — represent one of Broward's premier Sub-Zero markets.",
  "pembroke-pines":
    "Pembroke Pines' large family neighborhoods like SilverLakes and Pembroke Falls keep Sub-Zero appliances in demand across western Broward.",
  plantation:
    "Plantation's leafy estate neighborhoods — Plantation Acres, Hawks Landing, Plantation Country Club — rely on Sub-Zero refrigerators for everyday reliability.",
  "pompano-beach":
    "Pompano Beach's two-mile beachfront, the Hillsboro Mile mansions just north, and the Harbor Village neighborhood place steady demand on Sub-Zero appliances.",
  "southwest-ranches":
    "Southwest Ranches' two-acre minimum estate homes and equestrian properties near Volunteer Park represent one of Broward's most distinctive Sub-Zero service areas.",
  sunrise:
    "Sunrise's family neighborhoods around Sawgrass Mills and the Plantation Acres border keep Sub-Zero appliances in regular use across western Broward.",
  tamarac:
    "Tamarac's mature neighborhoods like Sunflower and Heathgate span central Broward, with Sub-Zero appliances in upgraded family kitchens throughout the city.",

  // Palm Beach
  "boynton-beach":
    "Boynton Beach's coastal neighborhoods between A1A and the intracoastal, plus the gated communities of Quail Ridge and Hunters Run, keep Sub-Zero appliances in steady use along this stretch of Palm Beach County.",
  "highland-beach":
    "Highland Beach's three-mile stretch of oceanfront condos and gated single-family homes between Boca Raton and Delray Beach is one of Palm Beach County's most concentrated Sub-Zero markets.",
  "juno-beach":
    "Juno Beach's small-town coastal charm and the high-rises along Ocean Drive sit between Jupiter and Palm Beach Gardens, with premium Sub-Zero appliances in nearly every condo.",
  "north-palm-beach":
    "North Palm Beach's golf course community and the Old Port Cove waterfront residences anchor this Palm Beach County village, where Sub-Zero appliances are the standard.",
  "ocean-ridge":
    "Ocean Ridge's narrow barrier-island town between Boynton Beach and Manalapan houses oceanfront mansions and estate homes with Sub-Zero appliances in nearly every kitchen.",
  "riviera-beach":
    "Riviera Beach's Singer Island enclave, plus the homes along the Lake Worth Lagoon, keeps Sub-Zero appliances in steady demand across this Palm Beach County coastal city.",
  tequesta:
    "Tequesta's village setting at the Loxahatchee River, near Jupiter Inlet, makes this small Palm Beach County town a key Sub-Zero market for waterfront and gated estate properties.",
  wellington:
    "Wellington's equestrian estates around the International Polo Club and the Wellington Equestrian Festival keep Sub-Zero appliances in heavy use during winter season at every estate kitchen.",

  // Monroe
  islamorada:
    "Islamorada's chain of islands — Plantation Key, Windley Key, Upper Matecumbe — combines waterfront resort homes and sportfishing lodges that depend on Sub-Zero appliances in a marine environment.",
  "key-colony-beach":
    "Key Colony Beach's small island community in the Middle Keys, just off Marathon, houses canalfront homes and waterfront estates that rely on Sub-Zero appliances despite intense salt air.",

  // Martin
  "palm-city":
    "Palm City's gated estate communities — Harbour Ridge, Mariner Sands area homes, the country club — anchor Martin County's western edge, where Sub-Zero appliances serve active estate kitchens.",
  "sewalls-point":
    "Sewall's Point's narrow peninsula between the St. Lucie and Indian Rivers houses some of Martin County's most established estates, with Sub-Zero appliances in nearly every kitchen.",

  // St. Lucie
  "fort-pierce":
    "Fort Pierce's historic downtown along the Indian River Lagoon, plus the South Hutchinson Island oceanfront homes, places steady demand on Sub-Zero appliances in this Treasure Coast city.",
  "port-st-lucie":
    "Port St. Lucie's St. Lucie West and PGA Village neighborhoods, plus the Tradition master-planned community, make this Treasure Coast city a key Sub-Zero service market.",
};

/* =====================================================================
 * Per-city neighborhood + landmark lists.
 *
 * Renders as a "Neighborhoods we cover in {City}" section on city pages
 * when present. Adds substantial unique geographic content per city,
 * which:
 *   - Generates authority for long-tail "Sub-Zero repair {neighborhood}"
 *     queries that don't have their own pages
 *   - Helps Google's local-pack understanding of our actual service depth
 *   - Reads as genuine service-area expertise rather than templated copy
 *
 * Add cities here to enable the section. Cities without entries fall
 * through silently — no broken UI.
 * ===================================================================== */

export const cityNeighborhoods: Record<string, string[]> = {
  // Miami-Dade
  miami: [
    "Brickell",
    "Downtown Miami",
    "Coconut Grove",
    "Coral Way",
    "Wynwood",
    "Edgewater",
    "Midtown",
    "Design District",
    "Little Havana",
    "Allapattah",
  ],
  "coral-gables": [
    "Old Cutler / Old Cutler Bay (waterfront estates)",
    "Cocoplum",
    "Country Club Section (around Granada Golf Course)",
    "Riviera",
    "Tahiti Beach Island",
    "Snapper Creek Lakes",
    "Hammock Lakes",
    "Crafts Section",
    "Granada / Biltmore corridor",
    "Coral Gables Section (Miracle Mile / downtown)",
  ],
  "miami-beach": [
    "South of Fifth (SoFi)",
    "South Beach (Ocean Drive / Collins corridor)",
    "Mid-Beach (Faena District, Carillon)",
    "North Beach (71st-87th Streets)",
    "Star Island",
    "Palm Island",
    "Hibiscus Island",
    "Sunset Islands (1, 2, 3, 4)",
    "Venetian Islands",
    "Sunset Harbour / Bayshore",
  ],
  pinecrest: [
    "High Pines",
    "Pinecrest Estates",
    "Hammock Oaks",
    "Banyan Park area",
    "Suniland",
    "Snapper Creek",
  ],
  aventura: [
    "Williams Island (residential towers)",
    "Turnberry Isle",
    "Porto Vita Tower I, II, III",
    "Hidden Bay (I, II, III)",
    "The Point at Aventura",
    "Hamptons South / Hamptons West",
    "Mystic Pointe Towers",
    "Aventura Lakes",
    "Country Club Estates",
    "Aventura Isles",
  ],
  "sunny-isles-beach": [
    "Acqualina Resort & Residences",
    "Estates at Acqualina",
    "Mansions at Acqualina",
    "Trump Towers I, II, III",
    "Jade Ocean / Jade Beach / Jade Signature",
    "Porsche Design Tower",
    "Muse Residences",
    "Chateau Beach Residences",
    "Regalia",
    "Turnberry Ocean Club Residences",
  ],
  "key-biscayne": [
    "Ocean Club (Coral, Palm, Lake, Tower)",
    "Grand Bay Residences",
    "Cape Florida Estates",
    "The Towers of Key Biscayne",
    "Key Biscayne Estates",
    "Crandon Park area",
    "Sand Dollar / Grand Bay",
    "Mashta Island",
  ],
  doral: [
    "Trump National Doral residences",
    "Mansions at Doral",
    "Vintage Estates",
    "Doral Isles",
    "Doral Park Country Club",
    "Costa Verde / Costa Bella",
    "The Reserve at Doral",
  ],

  // Broward
  "fort-lauderdale": [
    "Las Olas Isles (Idlewyld, Sunrise Key, Nurmi Isles, Hendricks Isle)",
    "Las Olas / Beach Boulevard corridor",
    "Rio Vista",
    "Coral Ridge",
    "Harbor Beach",
    "Bay Colony",
    "Victoria Park",
    "Sailboat Bend / Tarpon River",
    "Flagler Heights",
    "Croissant Park",
  ],
  hollywood: [
    "Hollywood Beach (Trump Hollywood, Hollywood Beach Resort)",
    "Hollywood Lakes",
    "Emerald Hills",
    "Beverly Park",
    "Hollywood Hills",
    "Highland Gardens",
    "Royal Poinciana",
    "North Central Hollywood",
  ],

  // Palm Beach
  "boca-raton": [
    "Royal Palm Yacht & Country Club",
    "Long Lake Estates",
    "Boca Bath & Tennis Club",
    "St. Andrews Country Club",
    "The Polo Club of Boca Raton",
    "Woodfield Country Club",
    "Boca Pointe",
    "Boca Grove",
    "Mizner Park / One Thousand Ocean / Townsend Place",
    "Boca West Country Club",
  ],
  "delray-beach": [
    "Atlantic Avenue / Pineapple Grove (downtown condos)",
    "Beach area (Spanish River, etc.)",
    "Mizner Country Club",
    "Polo Trace",
    "Stonebridge",
    "Hamlet",
    "Country Club of Delray",
  ],

  // Collier
  naples: [
    "Port Royal",
    "Aqualane Shores",
    "Old Naples (south of Central Ave)",
    "Coquina Sands / Park Shore / Moorings",
    "Pelican Bay",
    "Grey Oaks",
    "Quail West",
    "Mediterra",
    "Audubon Country Club",
    "Bay Colony",
  ],
  "marco-island": [
    "Tigertail Beach",
    "Hideaway Beach",
    "Marco Beach",
    "Old Marco Village",
    "Cape Marco",
    "Estates at Marco",
    "Marco Shores",
  ],

  // Additional Miami-Dade priority cities
  "bal-harbour": [
    "St. Regis Bal Harbour Resort Residences",
    "Bal Harbour Tower",
    "Majestic Tower",
    "Plaza Bal Harbour",
    "Sea View Hotel & Residences",
    "Bellini Bal Harbour",
    "One Bal Harbour",
    "Tiffany of Bal Harbour",
  ],
  "fisher-island": [
    "Bayside Village",
    "Oceanside Estates",
    "Seaside Villas",
    "Marina Village",
    "Palazzo Del Sol",
    "Palazzo Della Luna",
    "Vanderbilt Mansion estates",
    "Fisher Island Club homes",
  ],
  "indian-creek-village": [
    "Indian Creek Country Club homes",
    "North Bay Road waterfront estates",
    "Bay Drive residences",
    "Ocean Boulevard estates",
  ],

  // Additional Broward priority cities
  weston: [
    "Weston Hills Country Club",
    "Bonaventure",
    "Savanna",
    "Three Village",
    "Country Isles",
    "The Falls",
    "The Reserve at Three Village",
  ],

  // Additional Palm Beach priority cities
  "palm-beach": [
    "Estate Section (south of Worth Avenue)",
    "Worth Avenue / mid-island",
    "El Bravo Way / South Ocean Boulevard",
    "Royal Poinciana / North End",
    "South of Mar-a-Lago oceanfront estates",
    "The Breakers area",
    "Sloan's Curve oceanfront",
  ],
  jupiter: [
    "Admirals Cove",
    "Jupiter Island",
    "Jupiter Inlet Colony",
    "Loxahatchee Club",
    "Trump National Golf Club residences",
    "Abacoa",
    "Jupiter Country Club",
    "The Bear's Club",
  ],
  "palm-beach-gardens": [
    "BallenIsles Country Club",
    "Mirasol Country Club",
    "PGA National (Resort + residential)",
    "Old Palm Golf Club",
    "Frenchman's Reserve",
    "Frenchman's Creek",
    "The Sanctuary",
    "Eastpointe Country Club",
  ],
  "west-palm-beach": [
    "El Cid (historic district)",
    "SoSo (South of Southern)",
    "Flamingo Park",
    "Prospect Park",
    "Northwood",
    "Downtown / CityPlace",
    "Forest Hill",
  ],

  // Additional Monroe (Keys) priority cities
  "key-largo": [
    "Ocean Reef Club",
    "Buttonwood Bay",
    "Anglers Park",
    "Sound Point",
    "Stillwright Point",
    "Largo Sound",
    "Key Largo Yacht Club area",
  ],

  // Additional Martin priority cities
  stuart: [
    "Sailfish Point",
    "Mariner Sands",
    "Hutchinson Island",
    "Sewall's Point",
    "Downtown Stuart waterfront",
    "Willoughby Cove",
    "Yacht and Country Club of Stuart",
  ],
};

/* =====================================================================
 * Per-city common-failure observations in technician voice.
 *
 * One sentence (sometimes two) describing the most common failure pattern
 * we see in this specific city. These are written from the technician's
 * perspective — observational, specific, with practical guidance.
 *
 * Renders as a "What we see most on {City} service calls" callout when
 * present. Adds genuine technician-voice content unique to each city.
 * ===================================================================== */

export const cityFailureNote: Record<string, string> = {
  miami:
    "Most of our Miami calls are condo Built-In units in the Brickell and Edgewater towers. The dominant failure pattern is voltage instability from building electrical rooms killing electronic control boards — a $300-400 OEM control board replacement that prevents a $2,000 misdiagnosis.",
  "coral-gables":
    "Coral Gables is condenser-dust country. Mature tree canopy and active landscaping send debris into Sub-Zero condenser intakes faster than any other city we cover. A 30-minute condenser cleaning every 12-18 months prevents most of the major compressor failures we see.",
  "miami-beach":
    "Miami Beach splits into three failure profiles: salt-air condenser corrosion on oceanfront condos, voltage instability in luxury towers (Faena, Continuum, Setai), and standard residential wear on Star Island / Palm Island estates. Different parts inventory for each.",
  pinecrest:
    "Pinecrest's mature trees and active yard service mean dust-blocked condensers are the dominant failure here. Beyond that, defrost-system failures on the late-1990s and early-2000s renovation installs are the next-most-common call.",
  aventura:
    "Aventura is high-rise condo country. The dominant failure pattern is voltage instability from building electrical systems killing Sub-Zero control boards on units 5+ years old. New-build dust accumulation is the runner-up.",
  "sunny-isles-beach":
    "Sunny Isles units face the worst combination in our coverage: salt air at oceanfront elevation, voltage spikes from building generators, and high condo-tower duty cycles. Annual maintenance isn't optional here.",
  "key-biscayne":
    "Key Biscayne has the worst salt-air exposure in our coverage area. Sub-Zero condensers corrode here in 18-24 months versus 8-10 years inland. Annual maintenance is the difference between a 12-year unit and a 25-year unit.",
  doral:
    "Doral is gated-community single-family country. Most of our calls are Pro 48 and Designer Column units in homes from the 2010s build wave. Common pattern: ice maker water inlet valve failures from Doral's harder water profile pushing filter replacement intervals shorter than the manual suggests.",
  "fort-lauderdale":
    "Fort Lauderdale splits into two markets: waterfront residential (salt-air condenser wear, door gasket degradation from coastal humidity) and yacht refrigeration at Pier 66 / Bahia Mar / Las Olas Marina (vibration-loosened service ports causing slow refrigerant leak). We dispatch separately-stocked trucks for each.",
  hollywood:
    "Hollywood splits into beach condo work (salt-air corrosion at Trump Hollywood and the Broadwalk towers) and residential single-family work (Emerald Hills, Hollywood Lakes — defrost system failures on 2000s installs are the dominant call).",
  "boca-raton":
    "Boca's gated communities (Royal Palm, St. Andrews, Polo Club, Woodfield) installed thousands of BI-36 and BI-42 units during the 2008-2014 renovation wave. Defrost timer and defrost thermostat failures around the 12-year mark are now the dominant call. Wine column humidity drift is a close second.",
  "delray-beach":
    "Delray Beach is split between dense downtown condo work along Atlantic Avenue and the gated-estate work west of I-95. Same Sub-Zero models, different rhythms. Beachfront units add salt-air to the failure mix.",
  naples:
    "Naples has a meaningful seasonal component. Half-occupancy homes face significant stress on Sub-Zero units — months of dormancy, voltage cycles, humidity swings. Pre-season service catches problems before owners return. The other major call category is sealed-system service on the 2000s Pelican Bay and Grey Oaks Pro 48 installs hitting their 15-20 year mark.",
  "marco-island":
    "Marco Island is half-residential, half-marine, all Gulf Coast. Salt air, seasonal occupancy, and marine refrigeration at the yacht clubs. Pre-season service before snowbird returns is the dominant scheduled call.",
  "bal-harbour":
    "Bal Harbour Tower and St. Regis Residences run on the same playbook as Sunny Isles — strict building access, COI required, freight elevator booking. Most of our calls are control-board failures from generator-transition voltage spikes plus salt-air condenser corrosion on oceanfront-facing units.",
  "fisher-island":
    "Fisher Island is a logistics call as much as a service call. Ferry-only access means we coordinate with the marina office and time the visit around the schedule. Most homes have full Sub-Zero/Wolf chef's kitchens with Pro 48 columns — the dominant failure pattern is sealed-system service on 2010s installs hitting their first major service window.",
  "indian-creek-village":
    "Indian Creek Village is the most privacy-sensitive market we cover. Our calls run quiet — no logo trucks where possible, technicians briefed on protocol. The Sub-Zero installs are uniformly current-generation Pro 48 and Designer Column units, with failure patterns matching newer-build expectations: occasional control-board issues, condenser dust from extensive landscaping.",
  weston:
    "Weston is residential single-family country with deep gated-community installs. Most of our calls are Pro 48 and Built-In units in homes from the 2000s build wave. Common pattern: defrost-system component failures around the 12-15 year mark, plus ice maker water inlet valve replacements from West Broward's slightly harder water profile.",
  "palm-beach":
    "Palm Beach is our most exacting market. Estate Section homes have 8+ Sub-Zero appliances per kitchen, plus secondary kitchens, butler's pantries, and outdoor units. Failures cluster around aged Pro 48 sealed-system service and wine column humidity drift on collections that span decades. We dispatch white-glove protocol — discreet, on time, no signage where requested.",
  jupiter:
    "Jupiter splits between Admirals Cove / Jupiter Island estate work and the Loxahatchee Club / Bear's Club golf community installs. Salt air on the Jupiter Island oceanfront accelerates condenser wear. The mainland gated communities run more typical residential failure patterns — defrost system, evaporator fan, ice maker valve.",
  "palm-beach-gardens":
    "Palm Beach Gardens is gated-community country — BallenIsles, Mirasol, PGA National, Old Palm. Most installs are 2010s Pro 48 and Designer Series in single-family homes. Common pattern: wine column humidity recalibration that no one schedules until corks start failing. Annual check is the cheapest insurance for a serious collection.",
  "west-palm-beach":
    "West Palm Beach mixes historic single-family homes (El Cid, SoSo, Flamingo Park) with downtown high-rise condos (CityPlace area). Two different failure profiles. Historic homes show wear on legacy 632, 642, 690 series units the original owners installed 20+ years ago. Downtown condos look like newer Built-In units with new-build dust and voltage-stability issues.",
  "key-largo":
    "Key Largo is salt-air country first, everything else second. Sub-Zero condenser corrosion happens on a 18-24 month cycle here without intervention. Ocean Reef Club homes get the worst of it. Annual condenser cleaning + contact-set inspection is the difference between a 12-year unit and a 25-year unit on these properties.",
  stuart:
    "Stuart's Sailfish Point and Hutchinson Island oceanfront properties face Treasure Coast salt air. Mariner Sands and inland gated communities run more typical residential patterns. Marine work at Sailfish Point is a meaningful call category — yacht refrigeration on vessels berthed at the private marina.",
};

/* =====================================================================
 * City-specific FAQ system.
 *
 * The previous setup had four hardcoded Q&As repeated on every city
 * page — Google's near-duplicate filter saw 63 pages with identical
 * FAQ schema. getCityFAQ now produces 4 Q&As where 3 are genuinely
 * different per city (city Q, county Q, nearby-cities Q) and the 4th
 * generic Q is rotated by city slug hash so adjacent pages don't
 * repeat each other.
 * ===================================================================== */

export interface FAQ {
  question: string;
  answer: string;
}

const countyFAQs: Record<string, FAQ> = {
  "miami-dade-county": {
    question: "Do you cover all of Miami-Dade?",
    answer:
      "Yes — from downtown Miami and Brickell to the southern reaches of Palmetto Bay and Cutler Bay, plus all of the barrier-island communities. Same-day Sub-Zero service is available across the entire county.",
  },
  "broward-county": {
    question: "How quickly can you reach Broward homes?",
    answer:
      "We dispatch from local Broward technicians, so most appointments in Fort Lauderdale, Hollywood, Weston, and the western suburbs happen the same day you call.",
  },
  "palm-beach-county": {
    question: "Do you serve gated communities and country clubs?",
    answer:
      "Yes. We regularly service Boca West, BallenIsles, the Polo Club, PGA National, and dozens more gated communities across Palm Beach County. Concierge access can be arranged in advance.",
  },
  "monroe-county": {
    question: "Do you make trips into the Florida Keys?",
    answer:
      "Yes — we regularly service Key Largo, Islamorada, and Key Colony Beach. Salt air is hard on Sub-Zero components, so Keys properties tend to need more frequent compressor and seal service than mainland homes.",
  },
  "collier-county": {
    question: "Do you cover the Gulf Coast?",
    answer:
      "Yes. Naples and Marco Island are core Collier County markets for us, including the gated estates of Port Royal, Bay Colony, Old Naples, Cape Marco, and Hideaway Beach.",
  },
  "martin-county": {
    question: "Do you serve the Treasure Coast?",
    answer:
      "Yes — Stuart, Sewall's Point, and Palm City are part of our regular Martin County coverage, including the gated communities at Sailfish Point and Mariner Sands.",
  },
  "st-lucie-county": {
    question: "Do you serve the Treasure Coast as far north as St. Lucie?",
    answer:
      "Yes. Fort Pierce and Port St. Lucie are part of our St. Lucie County coverage, including South Hutchinson Island oceanfront homes and the PGA Village / Tradition communities.",
  },
};

const genericFAQs: FAQ[] = [
  {
    question: "Do you charge extra for weekends or holidays?",
    answer:
      "Never. Our standard service rates apply 24/7, including nights, weekends, and all holidays. No emergency surcharges.",
  },
  {
    question: "Do you use genuine Sub-Zero parts?",
    answer:
      "Yes, exclusively. Every replacement part is factory-authorized and backed by the manufacturer warranty.",
  },
  {
    question: "What Sub-Zero appliances do you repair?",
    answer:
      "We repair all Sub-Zero products: refrigerators, freezers, ice makers, wine coolers, and marine refrigeration systems. All models are covered.",
  },
  {
    question: "Are your technicians factory-trained?",
    answer:
      "Yes. Every technician is certified on Sub-Zero, with 30+ years of combined experience on built-in columns, integrated units, and marine refrigeration systems.",
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer:
      "Every repair is backed by a full warranty on parts and labor. If the same issue recurs within the warranty period, we return at no charge.",
  },
];

export function getCityFAQ(
  citySlug: string,
  cityName: string,
  countyName: string,
  countySlug: string,
  nearbyCityNames: string[]
): FAQ[] {
  // Q1: City response time
  const cityQ: FAQ = {
    question: `How fast can you get to ${cityName}?`,
    answer: `We offer same-day service throughout ${cityName} and surrounding ${countyName}. In most cases, a certified technician can be at your home within hours of your call.`,
  };

  // Q2: County-specific
  const countyQ: FAQ = countyFAQs[countySlug] ?? {
    question: "What areas of South Florida do you serve?",
    answer:
      "We serve seven South Florida counties from Miami-Dade to St. Lucie, including the Florida Keys.",
  };

  // Q3: Nearby cities (real neighbor names, varies per city)
  const nearbyAnswer =
    nearbyCityNames.length > 0
      ? `Yes — we regularly cover ${nearbyCityNames.slice(0, 4).join(", ")}, and the rest of ${countyName} with the same same-day service.`
      : `Yes — all of ${countyName} is part of our regular service area with same-day appointments.`;
  const nearbyQ: FAQ = {
    question: `Do you serve other areas near ${cityName}?`,
    answer: nearbyAnswer,
  };

  // Q4: Generic FAQ rotated by city slug hash so adjacent cities don't repeat
  const hash = citySlug
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const genericQ = genericFAQs[hash % genericFAQs.length];

  return [cityQ, countyQ, nearbyQ, genericQ];
}
