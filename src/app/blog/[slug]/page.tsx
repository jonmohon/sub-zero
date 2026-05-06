import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import AuthorBox from "@/components/AuthorBox";
import { getTeamMember } from "@/data/team";

interface BlogPostData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  date: string;
  /** Plain paragraphs — used for short legacy posts. */
  content: string[];
  /** Rich HTML body for pillar articles (h2, ul, blockquote, links, etc.).
   *  When present, replaces the `content` array in rendering and triggers
   *  the dangerouslySetInnerHTML path. */
  bodyHtml?: string;
  /** FAQ entries for pillar articles. Renders as a styled FAQ section
   *  AND emits FAQPage schema. */
  faqs?: { question: string; answer: string }[];
  /** Lead/excerpt — direct-answer paragraph at the top for GEO. */
  lead?: string;
}

const postsData: Record<string, BlogPostData> = {
  "when-to-call-a-refrigerator-repair-technician": {
    slug: "when-to-call-a-refrigerator-repair-technician",
    title: "When to Call a Refrigerator Repair Technician",
    metaTitle: "When to Call a Refrigerator Repair Technician",
    metaDescription: "Learn the warning signs that indicate you need a professional refrigerator repair technician. Don't wait until it's too late!",
    author: "Daniel Rivera",
    date: "2024-11-15",
    content: [
      "Your refrigerator is one of the hardest-working appliances in your home, running 24 hours a day to keep your food fresh and safe. When it starts showing signs of trouble, knowing when to call a professional repair technician can save you from a costly emergency.",
      "Warning signs that you need professional repair include unusual noises, temperature fluctuations, excessive frost buildup, water leaking on the floor, the compressor running constantly, and higher than normal energy bills.",
      "While some minor issues can be addressed with basic troubleshooting, most refrigerator problems require the expertise of a trained technician. Attempting DIY repairs on complex refrigeration systems can void your warranty and potentially cause further damage.",
      "If you notice any of these warning signs, don't wait. Call our certified technicians at (800) 651-4528 for same-day service. Early intervention can prevent small problems from becoming expensive repairs.",
    ],
  },
  "why-diy-refrigerator-repair-isnt-always-the-best-option": {
    slug: "why-diy-refrigerator-repair-isnt-always-the-best-option",
    title: "Why DIY Refrigerator Repair Isn't Always the Best Option",
    metaTitle: "Why DIY Refrigerator Repair Isn't Always Best",
    metaDescription: "Discover why professional refrigerator repair is often better than DIY. Protect your investment with expert service.",
    author: "Daniel Rivera",
    date: "2024-12-01",
    content: [
      "In the age of YouTube tutorials and online guides, it's tempting to tackle refrigerator repairs yourself. However, modern Sub-Zero and premium refrigerators are complex appliances that require specialized knowledge and tools.",
      "DIY repairs can void your manufacturer's warranty, expose you to electrical hazards, and potentially cause more damage if not done correctly. Refrigeration systems contain pressurized refrigerants that require certified handling.",
      "Professional technicians have factory training, specialized diagnostic equipment, access to genuine parts, and the experience to identify root causes rather than just treating symptoms.",
      "Save yourself time, money, and frustration by calling our certified technicians. We'll diagnose the problem accurately and fix it right the first time with genuine parts and a full warranty on our work.",
    ],
  },
  "reliable-freezer-maintenance-quick-guide": {
    slug: "reliable-freezer-maintenance-quick-guide",
    title: "Reliable Freezer Maintenance: Quick Guide",
    metaTitle: "Reliable Freezer Maintenance Quick Guide",
    metaDescription: "Keep your freezer running efficiently with these essential maintenance tips from our certified technicians.",
    author: "Daniel Rivera",
    date: "2025-01-10",
    content: [
      "Regular maintenance is the key to keeping your Sub-Zero freezer running efficiently for years to come. A well-maintained freezer not only preserves your food better but also saves energy and prevents costly breakdowns.",
      "Essential freezer maintenance tasks include cleaning the condenser coils every 6-12 months, checking door gaskets for proper seal, maintaining proper temperature settings, defrosting when ice buildup exceeds a quarter inch, and keeping the freezer properly stocked.",
      "Signs that your freezer needs professional attention include frost buildup on the walls, the motor running constantly, temperature fluctuations, unusual odors, or ice crystals on frozen food.",
      "For professional freezer maintenance and repair, call our certified technicians at (800) 651-4528. We offer free maintenance with any repair over $250.",
    ],
  },
  "refrigerator-troubleshooting-guide-fix-cooling-issues-now": {
    slug: "refrigerator-troubleshooting-guide-fix-cooling-issues-now",
    title: "Refrigerator Troubleshooting Guide: Fix Cooling Issues Now",
    metaTitle: "Refrigerator Troubleshooting Guide",
    metaDescription: "Troubleshoot common refrigerator cooling issues with our expert guide. Know when to DIY and when to call a pro.",
    author: "Daniel Rivera",
    date: "2025-01-25",
    content: [
      "When your refrigerator isn't cooling properly, it can be stressful. Before calling for service, there are several things you can check to potentially resolve the issue or help your technician diagnose it faster.",
      "Start by checking the thermostat settings, ensuring the vents aren't blocked by food items, verifying the door seals are clean and intact, and making sure the condenser coils are free of dust and debris.",
      "If basic troubleshooting doesn't resolve the issue, the problem may be more serious — such as a failing compressor, a refrigerant leak, a faulty evaporator fan, or a malfunctioning control board.",
      "These more complex issues require professional diagnosis and repair. Contact our certified technicians at (800) 651-4528 for fast, reliable service.",
    ],
  },
  "refrigerator-compressor-repair-complete-diagnostic-and-repair": {
    slug: "refrigerator-compressor-repair-complete-diagnostic-and-repair",
    title: "Refrigerator Compressor Repair: Complete Diagnostic and Repair Guide",
    metaTitle: "Refrigerator Compressor Repair Guide",
    metaDescription: "Everything you need to know about refrigerator compressor repair. Expert diagnostics and repair from certified technicians.",
    author: "Daniel Rivera",
    date: "2025-02-05",
    content: [
      "The compressor is the heart of your refrigerator's cooling system. When it fails, your entire unit stops cooling effectively. Understanding compressor issues can help you identify problems early and avoid complete system failures.",
      "Common signs of compressor problems include the refrigerator not cooling despite running, clicking or buzzing noises from the back of the unit, the compressor running continuously without cycling off, and the unit tripping circuit breakers.",
      "Compressor repair or replacement is a complex job that requires specialized tools and refrigerant handling certification. Our factory-trained technicians have the expertise to diagnose compressor issues accurately and determine whether repair or replacement is the most cost-effective solution.",
      "Don't let a failing compressor ruin your food and your day. Call (800) 651-4528 for immediate compressor diagnostic and repair service.",
    ],
  },
  "refrigerator-leaking-water-causes-quick-fixes": {
    slug: "refrigerator-leaking-water-causes-quick-fixes",
    title: "Refrigerator Leaking Water: Causes and Quick Fixes",
    metaTitle: "Refrigerator Leaking Water Causes and Fixes",
    metaDescription: "Discover common causes of refrigerator water leaks and when you need professional repair. Fast, reliable service available.",
    author: "Daniel Rivera",
    date: "2025-02-15",
    content: [
      "Finding water pooling around your refrigerator is never a welcome sight. Water leaks can damage your flooring, create slip hazards, and indicate underlying problems with your refrigerator that need attention.",
      "Common causes of refrigerator water leaks include a clogged defrost drain, a cracked or frozen water supply line, a damaged door gasket, a faulty water inlet valve, or a blocked condensate drain.",
      "While some causes like a clogged defrost drain can sometimes be addressed with basic troubleshooting, most water leak issues benefit from professional diagnosis to ensure the root cause is properly identified and fixed.",
      "For fast, reliable water leak repair, call our certified technicians at (800) 651-4528. We offer same-day service and can quickly identify and fix the source of your leak.",
    ],
  },
  "emergency-fridge-repair-near-me-24-7-service": {
    slug: "emergency-fridge-repair-near-me-24-7-service",
    title: "Emergency Fridge Repair Near Me: 24/7 Service",
    metaTitle: "Emergency Fridge Repair Near Me 24/7",
    metaDescription: "Need emergency refrigerator repair? We offer 24/7 same-day service across South Florida. Call (800) 651-4528 now.",
    author: "Daniel Rivera",
    date: "2025-02-20",
    content: [
      "A refrigerator breakdown is always an emergency. Your food is at risk, and every hour counts. That's why we offer 24/7 emergency refrigerator repair service across South Florida — no extra charges for nights, weekends, or holidays.",
      "When you call our emergency line at (800) 651-4528, we'll dispatch a certified technician to your location as quickly as possible. Our trucks are stocked with genuine Sub-Zero parts, so most repairs can be completed in a single visit.",
      "While waiting for your technician, you can help preserve your food by keeping the refrigerator doors closed as much as possible, placing perishables in coolers with ice if available, and noting any unusual sounds or symptoms to share with the technician.",
      "Don't wait and risk losing hundreds of dollars in food. Call (800) 651-4528 for immediate emergency refrigerator repair service.",
    ],
  },
  "ice-maker-repair-service-same-day-fixes-near-you": {
    slug: "ice-maker-repair-service-same-day-fixes-near-you",
    title: "Ice Maker Repair Service: Same-Day Fixes Near You",
    metaTitle: "Ice Maker Repair Service Same-Day",
    metaDescription: "Professional ice maker repair with same-day service. Expert technicians for all Sub-Zero ice maker models. Call (800) 651-4528.",
    author: "Daniel Rivera",
    date: "2025-03-01",
    content: [
      "When your ice maker stops producing ice or starts making unusual noises, you need fast professional help. Our certified technicians specialize in Sub-Zero ice maker repair and can diagnose and fix most issues the same day.",
      "Common ice maker problems include no ice production, small or misshapen ice cubes, unusual noises during the ice-making cycle, ice with an off taste or odor, and water leaking from the ice maker.",
      "Our technicians carry genuine Sub-Zero ice maker parts on every service call, including water inlet valves, motors, sensors, and ice molds. This means most repairs can be completed in a single visit without the need for a follow-up.",
      "For same-day ice maker repair service, call (800) 651-4528. We serve all of South Florida with no extra charges for weekend or holiday service.",
    ],
  },
  "wine-cooler-repair-specialists-same-day-service": {
    slug: "wine-cooler-repair-specialists-same-day-service",
    title: "Wine Cooler Repair Specialists: Same-Day Service",
    metaTitle: "Wine Cooler Repair Specialists Same-Day",
    metaDescription: "Expert wine cooler repair to protect your wine collection. Same-day service with genuine parts. Call (800) 651-4528.",
    author: "Daniel Rivera",
    date: "2025-03-10",
    content: [
      "Your wine collection is an investment that deserves proper protection. When your Sub-Zero wine cooler isn't maintaining the right temperature or humidity, every bottle is at risk. Our wine cooler repair specialists can help.",
      "We repair all types of wine cooler issues including temperature fluctuations, compressor problems, humidity control failures, vibration issues, lighting malfunctions, and door seal problems.",
      "Proper wine storage requires precise temperature and humidity control. Our factory-trained technicians understand the delicate requirements of wine preservation and will ensure your cooler is restored to optimal performance.",
      "Don't risk your wine collection. Call (800) 651-4528 for same-day wine cooler repair service throughout South Florida.",
    ],
  },

  /* ===================================================================
   * Pillar articles — long-form Daniel Rivera in technician voice with
   * Princeton GEO methodology, FAQ schema, and rich internal linking.
   * Each runs 1,200-1,800 words. =================================== */

  "south-florida-humidity-coastal-corrosion-sub-zero": {
    slug: "south-florida-humidity-coastal-corrosion-sub-zero",
    title: "South Florida Humidity & Coastal Corrosion: A 30-Year Sub-Zero Service Log",
    metaTitle: "South Florida Humidity Sub-Zero Damage — 30-Year Service Log",
    metaDescription: "How South Florida humidity and salt air actually damage Sub-Zero refrigerators — what we've seen across three decades of coastal service.",
    author: "Daniel Rivera",
    date: "2026-04-12",
    lead: "South Florida humidity stresses Sub-Zero condensers, door seals, and electrical contacts on a 3-5x faster timeline than inland or northern markets. Annual maintenance is the difference between a 12-year unit and a 25-year unit on coastal properties — and the calls we get the most are from owners who didn't know that until something failed.",
    content: ["Three decades of South Florida service has taught us that humidity and salt air damage Sub-Zero refrigerators in distinctive patterns. Annual maintenance is essential for coastal properties."],
    bodyHtml: `
<h2>Why South Florida Humidity Is Different</h2>
<p>Sub-Zero designs its products for residential kitchens at typical indoor humidity — roughly 30-50% relative humidity, with occasional spikes. The South Florida indoor environment runs 50-70% year-round, with summer spikes above 75%. That sounds modest, but the math compounds.</p>
<p>Three forces cumulative to create the South Florida problem:</p>
<ul>
  <li><strong>Year-round high humidity</strong> — no winter dry season to give door seals, gaskets, and electrical contacts a recovery period</li>
  <li><strong>Heavy AC cycling</strong> — every time AC drops cabinet temperature, condensation forms on cooler surfaces, accelerating wear</li>
  <li><strong>Salt-air ingress</strong> — within 1 mile of the coast, micro-droplets of salt water are constantly settling on every metal surface, including the back of your refrigerator</li>
</ul>
<p>The combined effect is real. Sub-Zero units that should last 20-25 years routinely fail at 12-15 in coastal South Florida without intervention. With proper maintenance, that same 25-year lifespan is absolutely achievable here. The gap is purely whether someone schedules annual service.</p>

<h2>What Humidity Actually Does to a Sub-Zero, Component by Component</h2>

<h3>Condenser coils and fins</h3>
<p>The condenser sits at the back or bottom of every Sub-Zero, dissipating heat from the refrigerant cycle. In dry inland air, condenser fins stay clean for years and corrode slowly. In South Florida, three things happen simultaneously: dust settles on the fins (humid air carries more particulates), moisture promotes corrosion of the aluminum fins, and salt air (within a mile of the coast) accelerates that corrosion 5-10x. Result: a condenser that should run efficiently for a decade starts running hot in 4-5 years, forcing the compressor to overwork.</p>

<h3>Door gaskets</h3>
<p>The rubber door seal compound is rated for ~10 years in residential use. South Florida humidity flexes the rubber every cycle of the AC system — the gasket expands slightly when ambient is warmer, compresses when AC kicks on. Over 4-5 years of constant flex cycling, the rubber loses elasticity. Combined with the additional UV exposure most South Florida kitchens get (lots of windows), gasket replacement at 5-7 years is normal here, not exceptional.</p>

<h3>Electrical contacts and control boards</h3>
<p>Salt air is the silent killer on coastal properties. The PCB connectors inside the unit, the compressor terminals, the sensor leads — all develop a fine green or white crust of salt corrosion. Within 18-24 months on Key Biscayne or Sunny Isles oceanfront properties, you can see visible corrosion if you pull the back panel. By 3-4 years, intermittent contact issues start showing up as random error codes, sensor drift, and partial-function failures that look like control board death but are usually just contact corrosion.</p>

<h3>Compressor mounts and fan bearings</h3>
<p>Constant humidity also accelerates rubber compressor mount degradation and fan bearing wear. Compressors get noisier over time, fans start squealing. Both fixable, both predictable.</p>

<h2>Salt Air vs. Humidity: Different Forces, Different Damage</h2>
<p>People often lump these together, but they're distinct problems with different timelines.</p>
<p><strong>Humidity</strong> is the slower force — gradual rubber degradation, gradual condenser dust accumulation, gradual control-board contact issues. It affects every South Florida property to some degree. The further you are from the coast, the slower the damage.</p>
<p><strong>Salt air</strong> is the faster, more aggressive force. It directly attacks metal — copper coils, aluminum fins, electrical contacts, compressor terminals. The rule of thumb we use: within 1 mile of the coast, expect 3-5x faster wear on anything metal. Within 1/4 mile (oceanfront properties), expect 5-10x faster.</p>
<p>If you live on <a href="/areas-we-service/miami-dade-county/key-biscayne/">Key Biscayne</a>, in a <a href="/areas-we-service/miami-dade-county/sunny-isles-beach/">Sunny Isles oceanfront tower</a>, or in a <a href="/areas-we-service/miami-dade-county/miami-beach/">South Beach high-rise</a>, you're in the salt-air zone. If you live in <a href="/areas-we-service/miami-dade-county/coral-gables/">Coral Gables</a> or inland Pinecrest, you face the humidity-only problem.</p>

<blockquote>"Two miles inland in Coral Gables, a Sub-Zero from 2005 still has its original condenser fins clean and bright. Two miles east on Key Biscayne, a Sub-Zero from 2015 already has visible salt corrosion on the back coil. Same brand, same model, same install year — completely different failure timeline."</blockquote>

<h2>The Geography Problem: 1 Mile Inland Is a Different Beast</h2>
<p>This affects how you should think about maintenance. The same maintenance schedule that's overkill for a Coral Gables single-family home is barely adequate for an oceanfront Bal Harbour condo. We tell customers something close to:</p>
<ul>
  <li><strong>1+ miles inland</strong> (most of Pinecrest, Coral Gables, Doral, Plantation, etc.) — annual condenser cleaning, gasket inspection every 2-3 years, full preventive maintenance every 3 years</li>
  <li><strong>Within 1 mile of the coast</strong> (Brickell, Edgewater, North Bay Village, Hollywood Beach, Lauderdale-by-the-Sea) — annual full preventive maintenance, gasket inspection annually, contact-cleaning at every visit</li>
  <li><strong>Oceanfront properties</strong> (Key Biscayne, Fisher Island, Sunny Isles, Bal Harbour, oceanfront Hollywood/Hallandale, Palm Beach) — annual full preventive maintenance with contact replacement at year 3, every 3 years thereafter</li>
</ul>

<h2>The Maintenance Schedule We Actually Recommend</h2>
<p>Based on three decades of service data, here's what actually works for South Florida properties:</p>

<h3>Every 12 months (all properties)</h3>
<ul>
  <li>Condenser coil cleaning (vacuum + brush)</li>
  <li>Door gasket compression test (the "dollar bill test")</li>
  <li>Visual check for ice maker line leaks</li>
  <li>Defrost cycle test</li>
</ul>

<h3>Every 24 months (coastal properties only)</h3>
<ul>
  <li>Pull back panel, inspect compressor terminals and PCB contacts for salt corrosion</li>
  <li>Replace contact sets showing visible corrosion (not after they fail)</li>
  <li>Check door gasket compression — replace if even marginal</li>
  <li>Sensor drift check (calibrated thermocouple at three positions)</li>
</ul>

<h3>Every 3-5 years</h3>
<ul>
  <li>Full sealed-system pressure check</li>
  <li>Compressor amperage/efficiency test</li>
  <li>Door alignment + hinge tension</li>
  <li>Refrigerant top-off if pressure-drop is detected</li>
</ul>

<p>This is the same maintenance schedule we use on the legacy 532, 632, and 690 series Sub-Zero units that are still running across South Florida luxury homes 25-30 years after install. Properly maintained, your unit can absolutely match that lifespan.</p>

<h2>The Cost Math</h2>
<p>An annual maintenance visit runs $200-400 depending on what's needed. A full <a href="/services/refrigerator-repair/">Sub-Zero refrigerator repair</a> after a major failure runs $800-2,500 (sometimes more for sealed-system work). A premature unit replacement runs $8,000-25,000+ depending on the model.</p>
<p>The math is straightforward: $300/year × 20 years = $6,000 in maintenance, vs. premature failure + early replacement at $15,000-30,000. Annual maintenance pays for itself the first time it prevents a major repair, which on coastal properties is roughly every 3-4 years.</p>

<h2>When to Call Us</h2>
<p>Call if any of these show up:</p>
<ul>
  <li>Visible salt corrosion or green/white deposits on metal at the back of the unit</li>
  <li>Compressor running noticeably more than it used to</li>
  <li>Higher electric bill without other changes</li>
  <li>Door not sealing fully (food smells in fridge, ice cream softening in freezer)</li>
  <li>Random error codes that come and go</li>
  <li>Unit hasn't had professional service in 18+ months</li>
</ul>
<p>Same-day service across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a>. Call (800) 651-4528.</p>
`,
    faqs: [
      {
        question: "Does South Florida humidity really shorten Sub-Zero lifespan?",
        answer: "Yes. Without intervention, Sub-Zero units that should last 20-25 years routinely fail at 12-15 in coastal South Florida. The damage is gradual — humidity flexes door gaskets, condensation accelerates condenser corrosion, and (within a mile of the coast) salt air corrodes electrical contacts. With annual maintenance, you can absolutely hit the 25-year lifespan in South Florida — we have customers running their original 1996 units to prove it.",
      },
      {
        question: "Is salt air worse than humidity for refrigerators?",
        answer: "Yes — salt air is the more aggressive force, but it only affects properties within ~1 mile of the coast. Within that zone, salt air corrodes metal components 3-10x faster than humidity alone. Oceanfront properties (Key Biscayne, Sunny Isles, Bal Harbour) are the worst affected. Inland properties (Coral Gables, Pinecrest, Doral) face only the humidity problem.",
      },
      {
        question: "Can I prevent humidity damage on my Sub-Zero?",
        answer: "Yes, with annual maintenance. The key items are condenser cleaning (prevents compressor overwork), door gasket inspection (prevents seal failure), and (on coastal properties) electrical contact cleaning every 2-3 years (prevents salt-corrosion control board failures). A properly maintained unit handles South Florida humidity without issue.",
      },
      {
        question: "How often should I have my Sub-Zero serviced in South Florida?",
        answer: "Annual maintenance is the baseline for any South Florida property. Coastal properties (within 1 mile of the ocean) benefit from twice-yearly checks. Oceanfront properties should add a contact-cleaning visit every 2-3 years. The cost is far less than a single major repair.",
      },
      {
        question: "What does annual Sub-Zero maintenance cost?",
        answer: "A standard annual maintenance visit runs $200-400 depending on what's needed. That covers condenser cleaning, gasket inspection, defrost cycle test, and a general system check. Coastal properties may run slightly higher because of the contact-cleaning component. Compared to a $1,500-2,500 sealed-system repair, the math is clear.",
      },
      {
        question: "Do you service all of South Florida?",
        answer: "Yes — all seven counties: Miami-Dade, Broward, Palm Beach, Monroe, Collier, Martin, and St. Lucie. Same-day service is available across Miami-Dade, Broward, and Palm Beach. Naples, Marco Island, and the Florida Keys typically require a half-day scheduling buffer.",
      },
    ],
  },

  "hurricane-prep-sub-zero-owners-south-florida": {
    slug: "hurricane-prep-sub-zero-owners-south-florida",
    title: "Hurricane Prep for Sub-Zero Owners: Before, During, and After the Storm",
    metaTitle: "Hurricane Prep for Sub-Zero Owners South Florida",
    metaDescription: "What South Florida Sub-Zero owners need to do before, during, and after a hurricane. Power-loss protocols, food safety, post-storm diagnostics from a 30-year specialist.",
    author: "Daniel Rivera",
    date: "2026-05-15",
    lead: "Hurricane season requires three things from a Sub-Zero owner: pre-storm preparation (lower temps, fill freezer space, document contents), during-outage protocols (door discipline, generator considerations), and post-storm diagnostics (error codes, voltage damage, gradual cooling loss patterns). Our service queue every November tells us which steps people skipped.",
    content: ["A complete playbook for protecting your Sub-Zero through hurricane season — pre-storm prep, during-outage protocols, and post-storm service."],
    bodyHtml: `
<h2>Before the Storm (48-72 Hours Out)</h2>
<p>Once the National Hurricane Center has the system on the cone, you have a 48-72 hour window to do the prep that actually matters. Order matters here.</p>

<h3>1. Lower the temperature 5°F</h3>
<p>Set your refrigerator from 38°F down to 33°F, and your freezer from 0°F down to -5°F. The colder starting point gives you more buffer when power fails. Do this 24-48 hours before expected outage so the unit has time to fully reach the new setpoint. A Sub-Zero refrigerator at 33°F can hold safe temperatures for 6-8 hours after power loss; the same unit at 38°F holds for 4-6.</p>

<h3>2. Fill empty freezer space</h3>
<p>Every empty cubic foot in your freezer is a cubic foot of warm air after power fails. Fill ziplock bags or water bottles 80% full and freeze them ahead of the storm. They displace warm air, hold cold longer, and become drinking water if the storm runs long. A full freezer can hold safe temperatures for 24-48 hours; an empty one for 12-18.</p>

<h3>3. Photograph everything</h3>
<p>If you have homeowner's insurance with food-loss coverage, document everything before the storm. Phone camera is enough. This is the cheapest insurance step you can do — most policies cover $500-1,500 in food loss with documentation.</p>

<h3>4. Service the condenser</h3>
<p>This is the maintenance you've been putting off. A clean condenser runs more efficiently when power's restored — and a unit running efficiently bounces back to setpoint faster after an extended outage. If you haven't had a maintenance visit in 12+ months, schedule one now (we keep extra capacity in May/June for exactly this reason).</p>

<h3>5. Top off the ice maker</h3>
<p>Ice extends the cooling buffer once power is lost. A full ice maker bin can keep food cold an additional 4-6 hours.</p>

<h3>6. Fully charge any generator</h3>
<p>If you have a backup generator, test it now — not during the storm. Verify fuel, oil, and that the transfer switch works. Sub-Zero refrigerators are not high-draw appliances at steady-state (4-7 amps for residential units), but the startup current is much higher (15-20 amps for a few seconds). A generator sized too tight will trip on every Sub-Zero compressor restart.</p>

<h2>During the Outage</h2>

<h3>1. Don't open the door</h3>
<p>I know this is the obvious one. But here's the math: a properly prepped Sub-Zero with the door closed holds safe refrigerator temperatures for 6-8 hours and safe freezer temperatures for 24-48 hours. Each door opening cuts that buffer significantly. If you absolutely must open the refrigerator: have everything you need planned in advance, open and close in under 15 seconds, do not rummage.</p>

<h3>2. Don't open it just to "check"</h3>
<p>Owners' instinct during a long outage is to open the door and feel whether things are still cold. Don't. Trust the seal. The door alarm (if your unit has one) won't sound until temperatures actually exceed safe range. If you've prepped properly, you'll have working refrigeration for at least 6 hours and freezer integrity for at least 24.</p>

<h3>3. Generator protocols</h3>
<p>If you're running on generator: never connect a Sub-Zero to a generator without a transfer switch or proper isolation. Backfeeding the grid through your panel is dangerous to utility workers and illegal. Use a properly installed transfer switch, or run the generator with the main breaker pulled.</p>
<p>If you're using a portable generator with extension cords, run the cord directly to the unit. Don't run it through a power strip or daisy-chain.</p>

<h3>4. Food safety thresholds</h3>
<ul>
  <li><strong>After 4 hours without power</strong>: refrigerator contents — judge each item by smell and feel before consuming. The "4-hour rule" from food-safety guidance is conservative for Sub-Zero, which holds cold longer than basic units, but it's a good baseline.</li>
  <li><strong>After 24 hours without power</strong>: freezer contents — most items still safe if the unit hasn't been opened. Items with ice crystals still visible on them can typically be refrozen safely. Items that are completely thawed should be cooked immediately or discarded.</li>
  <li><strong>After 48 hours without power</strong>: assume all freezer contents are at risk. Document and discard.</li>
</ul>

<h2>After Power Is Restored</h2>

<h3>1. Don't expect immediate cooling</h3>
<p>The unit will run continuously for several hours to recover setpoint after a long outage. This is normal. Don't add new warm food until the unit has been at setpoint for at least 4 hours.</p>

<h3>2. Check the display for error codes</h3>
<p>Power restoration after long outages often surfaces error codes that weren't there before. Most common patterns:</p>
<ul>
  <li><strong>EE</strong> — control board reset/fault from the power transition. Often clears on its own; if it persists, call us.</li>
  <li><strong>E1 / E2</strong> — over-temperature warning from the outage event itself. Clears automatically once setpoint is reached.</li>
  <li><strong>F1 / F2</strong> — fan motor fault. More concerning. Call us same-day.</li>
  <li><strong>E3</strong> — sealed-system pressure issue. Don't run the unit; call us.</li>
</ul>

<h3>3. Listen for new noises</h3>
<p>Power surges during restoration can damage compressor relays, control boards, and fan motors. New clicking, buzzing, or grinding sounds in the first 48 hours after restoration are warning signs. Call us if you hear them.</p>

<h3>4. Watch the cooling recovery</h3>
<p>Refrigerator should reach 38°F within 4-6 hours of power restoration. Freezer should reach 0°F within 8-12 hours. If recovery is slower than this, something has been damaged by the outage. Time to call <a href="/services/refrigerator-repair/">refrigerator repair</a>.</p>

<h2>What I See After Every Hurricane Season</h2>
<p>Every November after hurricane season ends, our service calendar fills with the same call patterns:</p>

<blockquote>"Voltage spikes during power restoration kill more Sub-Zero control boards than any other single cause. The damage often shows up 2-6 weeks post-storm rather than immediately — the customer thinks they're in the clear, then the display starts acting up."</blockquote>

<h3>Pattern 1: Voltage-damaged control boards</h3>
<p>Power restoration after extended outages often involves voltage spikes. Sub-Zero electronic control boards are sensitive — most failures show up 2-6 weeks post-storm rather than immediately. Symptoms: intermittent display issues, error codes that come and go, partial functionality loss. <strong>Prevention</strong>: install a whole-home surge protector at your main panel. Cost: $200-400. Saves multiple Sub-Zero control boards over the unit's lifetime.</p>

<h3>Pattern 2: Compressor wear from extended-cycle recovery</h3>
<p>Long outages mean the compressor runs continuously for hours during recovery. This isn't a problem in moderation. Multiple long outages per season add up. Symptoms: gradual cooling efficiency loss, longer cycle times, eventual compressor weakness.</p>

<h3>Pattern 3: Door gasket damage from sustained humidity</h3>
<p>Sustained high humidity during outages (no AC running) accelerates door gasket degradation. Salt-air homes near the coast see this most. Symptoms: loose or non-sealing door gasket, increased compressor cycling. Easy fix; high-ROI repair.</p>

<h3>Pattern 4: Ice maker water inlet valve failures</h3>
<p>Pressure surges in water lines during storm-related municipal work can damage water inlet valves. Symptoms: no ice production, leaking ice maker, or constant valve cycling.</p>

<h2>When to Call</h2>
<p>Call within the first week post-storm if:</p>
<ul>
  <li>Any error code persists after the unit has been at setpoint for 24+ hours</li>
  <li>The unit doesn't reach setpoint within the recovery windows above</li>
  <li>New noises (clicking, buzzing, grinding) appeared post-restoration</li>
  <li>Cooling efficiency feels reduced</li>
  <li>Ice maker doesn't resume within 24 hours</li>
</ul>
<p>We dispatch faster post-storm — every November we're prepared for the volume. <a href="/contact/">Request service</a> or call (800) 651-4528. Same-day across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a>.</p>
`,
    faqs: [
      {
        question: "How long does a Sub-Zero hold safe temperatures during a power outage?",
        answer: "A properly prepped Sub-Zero with the door closed holds safe refrigerator temperatures for 6-8 hours and safe freezer temperatures for 24-48 hours. The exact duration depends on starting temperature (lower is better), how full the unit is (fuller is better), and whether the doors stay closed. The single biggest factor is door discipline — every opening shortens the buffer significantly.",
      },
      {
        question: "Should I run my Sub-Zero on a generator during a hurricane?",
        answer: "Yes if you can — but use a transfer switch or pull the main breaker before connecting. Backfeeding the grid is illegal and dangerous. Sub-Zero refrigerators draw 4-7 amps at steady-state but spike to 15-20 amps on compressor startup, so size your generator at least 2x the steady-state draw to avoid trips on every cycle.",
      },
      {
        question: "What's the most common Sub-Zero damage after a hurricane?",
        answer: "Voltage-damaged control boards from power restoration spikes. Most failures show up 2-6 weeks post-storm rather than immediately, which makes them hard to attribute. A whole-home surge protector at your main panel ($200-400) prevents this and pays for itself the first time it works.",
      },
      {
        question: "When should I call for service after a hurricane?",
        answer: "Call same-day if you see persistent error codes (E3, EE, F1, F2) after the unit has been at setpoint for 24+ hours, or if cooling recovery is slower than expected. Call within the week if you notice new noises, gradual efficiency loss, or intermittent display issues. The voltage damage from power restoration often manifests gradually — early diagnosis is cheaper than waiting.",
      },
      {
        question: "Will my homeowner's insurance cover food loss?",
        answer: "Most policies cover $500-1,500 in food loss with documentation. Photograph your refrigerator and freezer contents before the storm. Save receipts where possible. File the claim within 30 days of the event. Sub-Zero owners often have higher-value contents (specialty items, wine, etc.), and these losses are typically covered if documented.",
      },
      {
        question: "Can I prevent voltage damage to my Sub-Zero?",
        answer: "Yes — install a whole-home surge protector at your main electrical panel. Cost is $200-400 installed. This single device prevents the most common post-hurricane Sub-Zero failure (control board damage) and is a much smaller investment than the $400-800 repair when it eventually happens.",
      },
    ],
  },

  "snowbird-sub-zero-tune-up-south-florida": {
    slug: "snowbird-sub-zero-tune-up-south-florida",
    title: "Snowbird Tune-Ups: Protecting a Sub-Zero During 6-Month Dormancy",
    metaTitle: "Snowbird Sub-Zero Service — Pre-Arrival Tune-Up South Florida",
    metaDescription: "Why dormancy is harder on a Sub-Zero than continuous use, and the pre-arrival service that catches the 4 most common snowbird-return problems before owners land.",
    author: "Daniel Rivera",
    date: "2026-05-22",
    lead: "Snowbird-cycle dormancy creates four specific failure patterns on Sub-Zero units: door gasket compression loss, ice maker line freeze and burst, condenser dust accumulation, and voltage instability damage when power cycles. A pre-arrival service catches all four before owners return. Skipping it means your first day back in Naples is spent on a service call instead of unpacking.",
    content: ["A complete pre-arrival Sub-Zero service playbook for South Florida snowbird residents — what fails during dormancy and what we check before you return."],
    bodyHtml: `
<h2>Why Dormancy Is Harder on a Sub-Zero Than Continuous Use</h2>
<p>People assume an unused refrigerator is preserving itself — turn it off, walk away, no wear. The opposite is true. Dormancy creates specific failure modes that continuous use prevents.</p>
<p>A continuously operating Sub-Zero is in equilibrium: the compressor cycles on a predictable schedule, the door seal stays compressed, refrigerant pressures stay stable, and minor issues (a slightly weak gasket, a dusty condenser) get caught early because the owner notices changes. A dormant Sub-Zero is in stasis: rubber compresses and sets, refrigerant migrates, condensation pools, dust settles, and minor issues compound silently for months. The owner doesn't see the failure until they plug it back in — by which point what would have been a $100 maintenance item is a $600 repair.</p>
<p>The South Florida snowbird cycle adds two more variables: tropical humidity for the entire dormancy period, and (for waterfront properties) salt-air exposure that doesn't pause just because the homeowner is in Connecticut.</p>

<h2>The 4 Failure Patterns We See on Snowbird Returns</h2>
<p>After 30 years of pre-arrival service calls in <a href="/areas-we-service/collier-county/naples/">Naples</a>, <a href="/areas-we-service/collier-county/marco-island/">Marco Island</a>, <a href="/areas-we-service/palm-beach-county/boca-raton/">Boca Raton</a>, and <a href="/areas-we-service/palm-beach-county/palm-beach/">Palm Beach</a>, four failure patterns dominate the spring service queue.</p>

<h3>1. Door gasket compression loss</h3>
<p>This is the most common single issue. Sub-Zero door gaskets are made of rubber compound that maintains its shape under continuous compression. During 6 months of dormancy, the door is closed against the gasket but no temperature differential pulls cold air through the seal — meaning the gasket compresses without recovery cycles. Over six months, the gasket "sets" in the compressed shape and loses some of its springback.</p>
<p>When you plug the unit back in, the gasket no longer creates a tight seal. Warm humid air leaks past, the compressor runs constantly to compensate, and your power bill spikes. Common owner complaint on return: "It's running all the time and not getting cold."</p>
<p><strong>What we do</strong>: bill test on every door, replace marginal gaskets, lubricate hinges. Catches this before owner returns.</p>

<h3>2. Ice maker fill tube freeze and burst</h3>
<p>This is the most expensive failure. If the ice maker is left in the "on" position during dormancy and the water supply line stays open, the fill tube can freeze and crack. When the unit is shut off, water remaining in the fill tube freezes; when power restores, the ice maker tries to dispense water but the cracked tube leaks behind the cabinet.</p>
<p>The owner discovers this when water damage shows up on the floor or in the cabinet below. Sub-Zero ice makers in $5M Naples homes have caused $20K+ water damage claims this way. Easy to prevent; expensive when it happens.</p>
<p><strong>What we do</strong>: shut off the water supply at the saddle valve before departure (we'll do this on a pre-departure service if you're a snowbird customer), or properly drain and dry the ice maker mechanism.</p>

<h3>3. Condenser dust accumulation</h3>
<p>Six months of stationary dust settling, plus tropical humidity making the dust cake onto the condenser fins, equals a heavily clogged condenser by the time the owner returns. The unit appears to work — it's making cold — but it's running 30-50% harder than it should, accelerating compressor wear and driving up power bills.</p>
<p>This is silent damage. The owner doesn't notice efficiency loss for months. We catch it in 5 minutes during pre-arrival service.</p>
<p><strong>What we do</strong>: vacuum and brush the condenser, inspect for any moisture damage to fins, clear condensate drain.</p>

<h3>4. Voltage instability damage during dormant periods</h3>
<p>Most snowbird homes don't fully shut off power — refrigerators stay running, security systems stay on, AC runs at minimum to control humidity. During the dormancy period, the home experiences voltage events: storms, utility maintenance, generator transitions for the AC system. Each event has potential to damage the Sub-Zero's electronic control board.</p>
<p>The owner won't notice control board damage until they try to use the ice maker (no production), check temperatures (sensor drift), or get an error code on display. Damage often manifests gradually 1-3 weeks after the owner returns.</p>
<p><strong>What we do</strong>: power-cycle the unit, check for any error history on the diagnostic display, verify all sensors are reading correctly, recommend whole-home surge protection if not already installed.</p>

<h2>The Pre-Departure Protocol</h2>
<p>For snowbird customers, we offer a pre-departure service the week before you head north. Items covered:</p>
<ul>
  <li><strong>Shut off the water supply</strong> at the saddle valve — prevents ice maker line freeze/burst</li>
  <li><strong>Empty and clean the ice maker bin</strong> — old ice can develop off-tastes during dormancy</li>
  <li><strong>Set refrigerator temperature to 38°F</strong>, freezer to 0°F (slightly warmer than normal — easier on the unit during dormancy)</li>
  <li><strong>Stock with water bottles and non-perishables</strong> — keeps thermal mass in the unit, reduces compressor cycling</li>
  <li><strong>Clean door gaskets with mild soap</strong> — extends gasket life through dormancy</li>
  <li><strong>Verify door closes fully</strong> — any obstruction creates a hot air leak path</li>
  <li><strong>Clean condenser coils</strong> — gives the unit a clean baseline for the dormancy period</li>
</ul>

<h2>The Pre-Arrival Service</h2>
<p>About a week before you return, we run pre-arrival service. Items covered:</p>
<ul>
  <li><strong>Door gasket inspection and bill test</strong> on every door — replace if marginal</li>
  <li><strong>Restore water supply</strong> and verify ice maker function (test cycle)</li>
  <li><strong>Condenser cleaning</strong> — vacuum and brush every fin</li>
  <li><strong>Sensor calibration check</strong> — calibrated thermocouple at three positions</li>
  <li><strong>Error code history pull</strong> — surfaces any voltage events during dormancy</li>
  <li><strong>Drop refrigerator to 33°F, freezer to -5°F</strong> — pre-cools so the unit is at setpoint when you arrive</li>
  <li><strong>Compressor amperage test</strong> — confirms no efficiency loss from dormancy</li>
  <li><strong>Wine column humidity recalibration</strong> if applicable</li>
</ul>

<blockquote>"Half my Naples spring queue is pre-arrival service. The other half is owners who skipped pre-arrival service and now need real repairs. Both queues run for about three months — the first is preventive, the second is expensive."</blockquote>

<h2>Common Mistakes Snowbirds Make</h2>

<h3>Leaving the ice maker on with water supply open</h3>
<p>The single most expensive snowbird mistake. Water supply must be shut off at the saddle valve, not just at the ice maker.</p>

<h3>Setting the unit to "off" while leaving food inside</h3>
<p>Don't. Sub-Zero units left "off" with food inside develop mold, odors, and gasket damage that's hard to fully clean. If you're going to shut the unit off, empty it completely and prop the doors open.</p>

<h3>Setting temperature too high during dormancy</h3>
<p>Some owners crank the temperature up to 50°F to "save energy" during dormancy. Don't. The compressor still runs, just less efficiently, and the warmer temperature accelerates gasket compression set. Set 38°F refrigerator and 0°F freezer and let the unit cycle normally.</p>

<h3>Not having someone check the unit during dormancy</h3>
<p>If your home has a property manager or housekeeper who checks the property monthly, ask them to verify the Sub-Zero is running and doors are closed. A unit that fails in February and isn't discovered until April creates much larger problems.</p>

<h2>When to Schedule</h2>
<p>For optimal pre-arrival service: 5-10 days before your scheduled return. We coordinate with your property manager or housekeeper for access.</p>
<p>For optimal pre-departure service: the week before you head north. Same coordination model.</p>
<p>Both services run a flat rate. Most snowbird customers do both annually as part of their regular South Florida home maintenance schedule.</p>
<p><a href="/contact/">Request service</a> or call (800) 651-4528. We service <a href="/areas-we-service/collier-county/naples/">Naples</a>, <a href="/areas-we-service/collier-county/marco-island/">Marco Island</a>, <a href="/areas-we-service/palm-beach-county/boca-raton/">Boca Raton</a>, <a href="/areas-we-service/palm-beach-county/palm-beach/">Palm Beach</a>, and the rest of the seven-county South Florida service area.</p>
`,
    faqs: [
      {
        question: "Do I need to do anything to my Sub-Zero before leaving for the summer?",
        answer: "Yes — three critical items: (1) shut off the water supply at the saddle valve to prevent ice maker line freeze, (2) clean the door gaskets and verify they're sealing fully, and (3) clean the condenser coils. We offer a pre-departure service that handles all of this plus stocking the unit for dormancy.",
      },
      {
        question: "What's the most common problem after 6 months of dormancy?",
        answer: "Door gasket compression loss is the most common. The rubber compound 'sets' under continuous compression and loses some springback over months of inactivity. The unit then runs constantly to compensate for the warm air leak. Easy to fix during pre-arrival service before you return.",
      },
      {
        question: "Should I leave my Sub-Zero off during the summer?",
        answer: "We recommend leaving it on, set to 38°F refrigerator and 0°F freezer, with non-perishable thermal mass (water bottles) inside. Turning it off creates worse problems: gasket damage from prolonged compression, mold growth from any residual moisture, and the unit may have trouble restarting after months of being off.",
      },
      {
        question: "What does pre-arrival Sub-Zero service cost?",
        answer: "A typical pre-arrival service runs $250-400 depending on what's needed. That covers door gasket inspection, condenser cleaning, sensor calibration, error code history check, ice maker restoration, and pre-cooling. Compared to a $1,000+ post-arrival repair from skipped maintenance, the math is clear.",
      },
      {
        question: "How early before my return should I schedule service?",
        answer: "5-10 days before you return is optimal. That gives the unit time to fully reach setpoint before you arrive, and lets us address anything that needs replacement parts. Coordinating with your property manager or housekeeper for access is straightforward.",
      },
      {
        question: "Do you cover Naples and Marco Island for snowbird service?",
        answer: "Yes — Naples and Marco Island are core snowbird service markets for us. We schedule batches of pre-arrival visits in those areas, so booking early in your return month gives you the best appointment window. Boca Raton, Palm Beach, and the rest of Palm Beach County also have substantial snowbird service activity.",
      },
    ],
  },

  "marine-sub-zero-refrigeration-south-florida-guide": {
    slug: "marine-sub-zero-refrigeration-south-florida-guide",
    title: "Marine Refrigeration in South Florida: What Makes Yacht Sub-Zero Different",
    metaTitle: "Marine Sub-Zero Refrigeration South Florida — Yacht Service Guide",
    metaDescription: "Why marine Sub-Zero units fail differently than residential — salt air, vibration, voltage, install envelope. The maintenance schedule that gets units to 15+ years.",
    author: "Daniel Rivera",
    date: "2026-06-05",
    lead: "Marine Sub-Zero units fail differently than residential — salt air corrodes electrical contacts on a 5-10x faster timeline, constant vibration loosens compression fittings, and inverter voltage instability damages control boards. The maintenance schedule and parts inventory are completely different. Same brand, same model, completely different operational profile.",
    content: ["A specialist's guide to marine Sub-Zero refrigeration service across South Florida — why it fails differently, what we carry on the truck, and how to get to 15+ years of service life."],
    bodyHtml: `
<h2>Why Marine ≠ Residential</h2>
<p>A Sub-Zero installed in a kitchen on Old Cutler Road and a Sub-Zero installed in a galley on a yacht docked at Pier 66 look identical. They aren't.</p>
<p>The kitchen unit faces 70°F ambient with 50% humidity, gets opened 6-8 times a day, sits on a flat floor against a flat wall, and runs on stable utility power. The yacht unit faces 80-95°F ambient with 75-90% humidity, gets opened 30+ times a day during charters, sits in a tight cabinet that moves constantly with wave action, and runs on inverter power that switches between shore power and battery storage.</p>
<p>That difference compounds. After 5 years, the kitchen unit looks like new. After 5 years, the yacht unit shows visible salt corrosion on the back, has a slow refrigerant leak from vibration-loosened service ports, and may have already had a control board failure from voltage transients. Same brand, same model, completely different failure profile.</p>

<h2>The 4 Forces Working Against Marine Sub-Zero Units</h2>

<h3>Force 1: Salt-air ingress</h3>
<p>Salt air affects every metal component in the unit. The PCB connectors inside corrode in 18-24 months instead of 15 years. Compressor terminals develop a characteristic green or white crust. Sensor leads develop intermittent contact issues. Even the screws holding the back panel together corrode and become difficult to remove for service.</p>
<p>The salt comes from sea spray (obvious) but also from humid air carrying micro-droplets that settle on every surface. Even on a yacht docked in a covered slip, the surrounding salt air affects components.</p>

<h3>Force 2: Constant vibration</h3>
<p>A residential Sub-Zero sits on a flat floor in still air. A marine Sub-Zero rocks with every wave, vibrates with every engine cycle, and shifts with every wake. Refrigerant lines that would never move in a kitchen install slowly walk loose under constant marine vibration. Compression fittings, service ports, and electrical connections all degrade faster.</p>
<p>The signature failure mode: gradual cooling loss over weeks or months. Unit slowly loses refrigerant through micro-leaks at vibration-loosened fittings. Owner notices a slight efficiency drop, then a small temperature creep, then suddenly the unit can't maintain temperature in warm weather. Easy to fix if caught early; expensive if missed.</p>

<h3>Force 3: Power instability</h3>
<p>Yacht inverters and shore-power converters introduce voltage variability that residential units never see. When the boat transitions between shore power, generator, and battery, the Sub-Zero's electronic control board sees voltage transients. Sub-Zero engineering accounts for typical residential power conditions; marine power is much harder on electronics.</p>
<p>Symptoms: random error codes on the display, sensor drift, intermittent compressor operation, partial functionality loss. Residential techs see this and assume control board failure. Marine specialists know to check the contacts first — voltage stress causes contact wear before it kills the board outright.</p>

<h3>Force 4: Tight install envelopes</h3>
<p>Yacht galley layouts are space-constrained. Sub-Zero units are installed in cabinetry with minimal service access. Pulling a unit for full service that takes 30 minutes in a kitchen takes 90 minutes on a yacht. Some service procedures require dock-side timing because the boat needs to be stationary.</p>
<p>This affects what we can do on a single visit. Marine techs carry shorter-handled tools, articulating mirrors, and magnetic retrieval tools that residential techs don't bother with.</p>

<h2>What I See on Marine Calls (Component-by-Component Patterns)</h2>

<h3>Refrigerator gradual cooling loss</h3>
<p>Slow refrigerant leak from vibration-loosened service ports. Most common marine failure. Pressure-test, locate, repair, and recharge usually fixes it in one visit.</p>

<h3>Marine ice maker stops producing</h3>
<p>Salt-air corrosion on water inlet valve contacts is the #1 marine ice maker failure. Replacing the contact set typically restores function. Fill tube freeze can also occur if the boat is in cold-water marinas during winter.</p>

<h3>Control board failure</h3>
<p>Voltage spikes from inverter switching or shore-power transitions kill control boards faster than residential equivalents. We carry OEM replacements and recommend surge-protection installation at every visit.</p>

<h3>Door seal failure</h3>
<p>Vibration plus flexing plus salt air equals door gasket degradation 3x faster than residential. Easy fix, high ROI.</p>

<h3>Compressor terminal corrosion</h3>
<p>Salt creep into compressor electrical connections. Looks like compressor failure, is actually contact corrosion. Quick fix if caught early; expensive if missed.</p>

<h3>Condenser fan failure</h3>
<p>Salt-air bearing degradation. Squealing or seized fan. We carry marine-grade replacements.</p>

<h3>Refrigerator freezing food in the fridge section</h3>
<p>Sensor drift due to corroded leads. Replacing the sensor is a 30-minute fix.</p>

<h3>Wine cooler temperature instability</h3>
<p>Dual issue: vibration-induced refrigerant migration plus voltage instability. We address both at once.</p>

<h2>Marina-Specific Notes</h2>

<h3>Pier 66 Marina (Fort Lauderdale)</h3>
<p>Contractor pre-registration required for non-resident slip access. Standard for major Fort Lauderdale facilities. Add us to your captain's vendor list when scheduling.</p>

<h3>Bahia Mar Yacht Center (Fort Lauderdale)</h3>
<p>Same protocol as Pier 66. Captain or owner must coordinate marina office for our access.</p>

<h3>Miami Beach Marina</h3>
<p>Easy access during business hours, restricted nights/weekends. Heavy charter activity in the area.</p>

<h3>Sunset Harbour Yacht Club</h3>
<p>Smaller marina, easier access. Good for residential-style scheduling.</p>

<h3>Bal Harbour Yacht Club</h3>
<p>Strict access protocols, similar to the surrounding luxury condo buildings. We have standing relationships with the dockmaster.</p>

<h3>Crandon Park Marina (Key Biscayne)</h3>
<p>Salt exposure here is the worst in our coverage area. Marine Sub-Zero units at Crandon Park need more frequent maintenance than anywhere else.</p>

<h3>Naples Boat Club / Naples Yacht Club / Marco Island Yacht Club</h3>
<p>Coordinated through marina office. Tell us the slip when you book. Gulf coast salt air is slightly less aggressive than Atlantic, but still a major factor.</p>

<h3>Florida Keys marinas</h3>
<p>Extended scheduling required (Marathon, Key West) due to dispatch distance. We typically schedule a half-day for these visits.</p>

<h2>The Maintenance Schedule for 15-20 Year Unit Life</h2>
<p>Yacht owners who follow this routinely keep marine Sub-Zero units running 15-20 years. Yacht owners who skip it typically replace at 6-8 years. The economics speak for themselves.</p>

<h3>Every 60 days (you can do this)</h3>
<ul>
  <li>Visual condenser inspection — look for any salt deposits or corrosion</li>
  <li>Door gasket wipe-down with damp cloth (no chemicals) to remove salt residue</li>
  <li>Listen test — run for 30 minutes and listen at the back grille and freezer wall for new noises</li>
</ul>

<h3>Every 6 months (we do this)</h3>
<ul>
  <li>Condenser cleaning and contact-point inspection</li>
  <li>Refrigerant pressure test — verify no slow leak from vibration-loosened connections</li>
  <li>Door gasket compression test — replace if compromised</li>
  <li>Fan motor bearing check — both evaporator and condenser</li>
</ul>

<h3>Annual</h3>
<ul>
  <li>Full electrical contact replacement on high-corrosion components (compressor terminals, water inlet valve, control board input)</li>
  <li>Door gasket replacement (annually regardless of visual condition — salt and humidity degrade rubber compound even when it looks fine)</li>
  <li>Inverter and shore-power input check — verify voltage stability under both modes</li>
  <li>Sensor calibration with calibrated thermocouple</li>
</ul>

<h3>Every 3-5 years</h3>
<ul>
  <li>Compressor pressure test and amperage check</li>
  <li>Sealed system service if pressure-drop detected</li>
  <li>Refrigerant top-off and filter-drier replacement</li>
</ul>

<blockquote>"A marine Sub-Zero is not a residential Sub-Zero in a different cabinet. It's a different operational profile that requires a different maintenance schedule and a different parts inventory. Yacht owners who treat marine units like residential typically replace at 6-8 years. Yacht owners who follow the marine schedule routinely get to 20."</blockquote>

<h2>When to Call</h2>
<p>Most marine failures give early warning. Call when you see:</p>
<ul>
  <li>Gradual cooling loss over weeks — almost always a slow refrigerant leak</li>
  <li>New clicking, scraping, or squealing — fan bearing or compressor relay degradation</li>
  <li>Unit cycling more often than it used to — door seal failure or condenser blockage</li>
  <li>Frost or ice buildup not seen previously — defrost system failure</li>
  <li>Any new error code — control board has detected something</li>
</ul>
<p>Catching these early prevents the catastrophic failures (compressor seizure, control board destruction, total refrigerant loss) that turn a $400 service call into a $3,000 replacement.</p>
<p>See our <a href="/services/sub-zero-marine-repair/">marine refrigeration service page</a> for dispatch details, or call (800) 651-4528 to schedule a maintenance visit. We dispatch dockside across all major South Florida marinas including <a href="/areas-we-service/broward-county/fort-lauderdale/">Fort Lauderdale</a>, <a href="/areas-we-service/miami-dade-county/miami-beach/">Miami Beach</a>, <a href="/areas-we-service/miami-dade-county/key-biscayne/">Key Biscayne</a>, <a href="/areas-we-service/collier-county/naples/">Naples</a>, and <a href="/areas-we-service/collier-county/marco-island/">Marco Island</a>.</p>
`,
    faqs: [
      {
        question: "How is marine Sub-Zero service different from residential?",
        answer: "Different failure patterns, different parts inventory, different tools, and different diagnostic approaches. Marine units face salt-air corrosion (5-10x faster than inland), constant vibration loosening fittings, inverter voltage instability damaging control boards, and tight install envelopes that constrain service access. A residential technician without marine experience will miss most of the actual failure causes.",
      },
      {
        question: "How often should I service my yacht's Sub-Zero?",
        answer: "Marine units need a maintenance schedule completely different from residential: visual inspection every 60 days (owner can do), full preventive maintenance every 6 months (we do), annual component replacement of high-corrosion items, and 3-5 year sealed-system service. Yacht owners who follow this schedule routinely get 15-20 years from their units.",
      },
      {
        question: "What's the most common marine Sub-Zero failure?",
        answer: "Slow refrigerant leak from vibration-loosened service ports. Manifests as gradual cooling loss over weeks. Easy to fix if caught early — pressure test, locate the leak, repair the fitting, recharge. Expensive to fix if missed because the compressor eventually overworks and fails. Salt-air contact corrosion on the water inlet valve is a close second.",
      },
      {
        question: "Do you service all the major South Florida marinas?",
        answer: "Yes — Pier 66, Bahia Mar, Las Olas Marina, Hall of Fame, Pelican Landing, Lauderdale Marine Center, Miami Beach Marina, Sunset Harbour, Bal Harbour Yacht Club, Crandon Park, Dinner Key, plus the Naples and Marco Island clubs. Florida Keys marinas (Marathon, Key West) require extended scheduling.",
      },
      {
        question: "Can my Sub-Zero last 20 years on a yacht?",
        answer: "Yes, with proper maintenance. We have customers running marine Sub-Zero units 15-20 years past install date that still perform within manufacturer specs. The pattern is always the same — they followed the marine maintenance schedule, replaced gaskets and contacts proactively rather than reactively, and addressed early-warning signs before they became major repairs.",
      },
      {
        question: "Will my Sub-Zero residential warranty cover marine use?",
        answer: "No — Sub-Zero's residential warranty does not cover marine installations. Some marine refrigeration units are sold specifically with marine-rated warranties. If you're installing a Sub-Zero on a vessel, the warranty implications depend on the unit and the installer. We can advise on this when you schedule.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData[slug];
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://fivestarappliancerepairpros.com/blog/${post.slug}/` },
    openGraph: {
      title: `${post.metaTitle} - Sub-Zero Repair Services`,
      description: post.metaDescription,
      url: `https://fivestarappliancerepairpros.com/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsData[slug];
  if (!post) notFound();

  const teamMember = getTeamMember(post.author);
  const authorSchema = teamMember
    ? {
        "@type": "Person",
        name: teamMember.name,
        jobTitle: teamMember.role,
        description: teamMember.bio,
        url: `${BUSINESS.siteUrl}/technicians/#${teamMember.slug}`,
        worksFor: { "@id": `${BUSINESS.siteUrl}/#business` },
      }
    : { "@type": "Person", name: post.author };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: authorSchema,
    publisher: { "@type": "Organization", name: "Sub-Zero Repair Services", url: BUSINESS.siteUrl },
    datePublished: post.date,
    dateModified: post.date,
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.siteUrl },
    { name: "Blog", url: `${BUSINESS.siteUrl}/blog/` },
    { name: post.title, url: `${BUSINESS.siteUrl}/blog/${post.slug}/` },
  ]);
  const faqSchema = post.faqs && post.faqs.length > 0 ? generateFAQSchema(post.faqs) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{post.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
            <span>By {post.author}</span>
            <span>|</span>
            <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.lead && (
            <p className="text-xl text-[#334155] leading-relaxed mb-10 pb-8 border-b border-gray-200">
              {post.lead}
            </p>
          )}

          {post.bodyHtml ? (
            <div
              className="blog-article max-w-none [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-[#0B1D33] [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#0B1D33] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-[#334155] [&_p]:leading-relaxed [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2 [&_li]:text-[#334155] [&_li]:leading-relaxed [&_a]:text-[#0387cc] [&_a]:hover:text-[#0F3460] [&_a]:font-medium [&_strong]:text-[#0B1D33] [&_blockquote]:border-l-4 [&_blockquote]:border-[#f89406] [&_blockquote]:pl-5 [&_blockquote]:py-2 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-[#334155]"
              dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
            />
          ) : (
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-[#64748B] leading-relaxed mb-6">{paragraph}</p>
              ))}
            </div>
          )}

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((f) => (
                  <details
                    key={f.question}
                    className="group bg-white border border-gray-200 rounded-xl p-5 open:shadow-sm"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-[#0B1D33]">
                      {f.question}
                      <svg
                        className="w-5 h-5 text-[#0387cc] shrink-0 transition-transform group-open:rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <p className="text-[#334155] leading-relaxed mt-4">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-[#0B1D33] mb-2">Need Professional Help?</h3>
            <p className="text-[#64748B] mb-4">Our certified technicians are available 24/7 for same-day service.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18006514528" className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Call (800) 651-4528
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Request Service
              </Link>
            </div>
          </div>

          {teamMember && (
            <div className="mt-12">
              <AuthorBox member={teamMember} />
            </div>
          )}

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-[#0B1D33] mb-2">About Sub-Zero Repair Company</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Sub-Zero Repair Company, doing business as Fivestar Appliance Repair Pros, has provided Sub-Zero appliance repair in South Florida since 1994. Our factory-trained technicians offer 24/7 same-day service across 82 cities in 7 counties, using only genuine manufacturer parts with a full warranty on all repairs.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
