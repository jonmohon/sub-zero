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
    metaDescription: "The 8 warning signs that mean it's time to call a Sub-Zero technician — and the 4 issues you can troubleshoot yourself first. From a 30-year specialist.",
    author: "Daniel Rivera",
    date: "2024-11-15",
    lead: "Eight warning signs mean it's time to stop troubleshooting and call a professional Sub-Zero technician: unusual noises, temperature fluctuations, excessive frost buildup, water on the floor, compressor running constantly, higher energy bills, error codes, and any sealed-system symptom. Knowing the difference between a $100 fix and a $2,000 repair often comes down to how soon you make the call.",
    content: [
      "Your refrigerator is one of the hardest-working appliances in your home. When it shows signs of trouble, knowing when to call a professional can save you from a costly emergency.",
    ],
    bodyHtml: `
<h2>The 8 Warning Signs That Mean Call a Technician Now</h2>
<p>After 30 years on Sub-Zero service calls across South Florida, here's the failure-pattern checklist I use. If you see any of these, the problem isn't going to fix itself.</p>

<h3>1. New mechanical noises</h3>
<p>Buzzing, grinding, clicking, or squealing that wasn't there before. Each sound has a specific source. Buzzing usually means compressor relay or capacitor. Grinding usually means evaporator fan blade hitting ice buildup or condenser fan bearing. Clicking often means compressor trying to start and failing.</p>

<h3>2. Temperature drift you can verify</h3>
<p>Set point is 38°F refrigerator and 0°F freezer. If you check with a thermometer and either compartment is more than 5°F off, something's wrong. Don't wait — drift gets worse, not better.</p>

<h3>3. Excessive frost buildup</h3>
<p>Sub-Zero freezers are designed to be frost-free. Frost on packages from condensation is normal. Ice on the back wall, floor, or ceiling means the defrost system has failed.</p>

<h3>4. Water leaking onto the floor</h3>
<p>Always serious. Could be a clogged defrost drain (cheap fix), a cracked water supply line (medium fix), or a damaged door gasket allowing condensation buildup (small fix). All of them get worse with time.</p>

<h3>5. Compressor running constantly</h3>
<p>If you can hear the compressor going more or less continuously, the unit is overworking. Causes include door seal failure, dust-blocked condenser, low refrigerant from a slow leak, or a thermostat malfunction. Each of these is a high-ROI repair caught early.</p>

<h3>6. Higher than normal energy bill</h3>
<p>Sub-Zero refrigerators are efficient. If your power bill jumped without other changes, the unit is the most likely culprit. Inefficiency comes from the same root causes as continuous compressor operation.</p>

<h3>7. Any error code on the display</h3>
<p>Modern Sub-Zero units self-diagnose. E1, E2, E3, EE, F1, F2 all mean specific things. Some clear on their own; others (E3 sealed system, EE control board) don't and shouldn't be ignored.</p>

<h3>8. Any sealed-system symptom</h3>
<p>Refrigerant leaks, capillary tube blockages, compressor pressure issues. These don't fix themselves and progress to more expensive repairs the longer you wait. Symptoms include gradual cooling loss over weeks, hissing sounds from the back, or oily residue near service ports.</p>

<h2>The 4 Things You Can Troubleshoot Yourself First</h2>

<h3>1. Verify the basics</h3>
<p>Power at the outlet. Door fully closed. Thermostat at correct setpoint. I've driven to plenty of Coral Gables homes where the thermostat got bumped during a kid's snack raid. 30 seconds of self-check saves a service call.</p>

<h3>2. Check for door seal issues with the bill test</h3>
<p>Close the door on a dollar bill, halfway in. Try to pull it out. If it slides easily, the gasket is failing. Easy DIY fix is impossible, but knowing the cause means you can call ahead and we arrive with the right gasket.</p>

<h3>3. Check the condenser for dust</h3>
<p>Pull the kick plate off the front bottom of the unit. Look at the condenser coils. If they're dust-blocked, vacuum and brush them clean. This alone resolves a lot of "compressor running too much" complaints.</p>

<h3>4. Wait for a defrost cycle</h3>
<p>If the unit just stopped cooling, give it 30 minutes. Sub-Zero units run a defrost cycle every 8-12 hours; during that cycle, the compressor pauses and the cabinet temperature can drift up briefly. After the cycle ends, normal operation resumes within 30 minutes.</p>

<blockquote>"Most 'my Sub-Zero is broken' calls are actually one of three things: a fan motor that needs replacement, a defrost board that's failed, or a door seal that's compromised. None of them are catastrophic if you call early. All of them get worse if you wait."</blockquote>

<h2>What Happens When You Wait Too Long</h2>
<p>Three patterns I see repeatedly:</p>

<h3>Pattern 1: Door seal ignored → compressor failure</h3>
<p>Owner notices the unit running more than usual. Doesn't act. Door seal continues to degrade. Compressor runs constantly trying to compensate. After 6-12 months, the compressor itself fails from continuous duty cycling. A $200 gasket replacement becomes a $1,500 compressor repair.</p>

<h3>Pattern 2: Slow refrigerant leak ignored → full sealed system service</h3>
<p>Owner notices gradual cooling loss. Adjusts the thermostat colder to compensate. Refrigerant continues to leak. Eventually compressor can't maintain pressure. Now it's a full sealed-system service plus refrigerant replacement plus possible compressor replacement. $400 leak repair becomes $2,500.</p>

<h3>Pattern 3: Error code ignored → cascade failure</h3>
<p>Owner sees error code, ignores it. Underlying issue (often a sensor, sometimes a control board) continues to malfunction. Connected systems start showing symptoms. Eventually multiple components need service. $300 single-component fix becomes $1,200+.</p>

<h2>What to Have Ready When You Call</h2>
<p>Three things that cut diagnostic time in half:</p>
<ul>
  <li><strong>Model number</strong> — usually on a metal plate inside the refrigerator section, behind the kick plate, or on the freezer ceiling</li>
  <li><strong>Symptom description</strong> — what's happening, when it started, anything that triggered it</li>
  <li><strong>Any error code</strong> — exactly what shows on the display</li>
</ul>

<h2>Same-Day Service Across South Florida</h2>
<p>We dispatch same-day across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a>. Naples and Marco Island typically need a half-day buffer. <a href="/services/refrigerator-repair/">See our refrigerator repair page</a> for details, or call (800) 651-4528 to schedule.</p>
`,
    faqs: [
      {
        question: "How can I tell if my refrigerator is dying or just needs a small repair?",
        answer: "Most failures are repairable. The exception is when multiple major components fail simultaneously (compressor + sealed system + control board), which usually happens on units 25+ years old. Even then, repair vs. replace depends on the unit. We'll tell you straight if it's worth fixing.",
      },
      {
        question: "Can I keep using my refrigerator while waiting for a technician?",
        answer: "Usually yes, with caveats. If the unit is still cooling but inefficiently, it's safe to use. If you see water on the floor, address it (dry the area, place a towel) but the unit is still safe. The only time to unplug is if you smell electrical burning, see sparks, or the unit is making sealed-system hissing sounds with refrigerant smell.",
      },
      {
        question: "How much does a typical Sub-Zero repair cost?",
        answer: "Door gaskets and minor sensors run $200-400. Defrost system components and fan motors run $300-600. Compressor or sealed-system work runs $1,000-2,500. We provide a written quote on-site before any labor begins, so you always know the number before approving the work.",
      },
      {
        question: "Should I just buy a new refrigerator instead of repairing?",
        answer: "For Sub-Zero specifically, almost always repair. Sub-Zero units are designed for 20-25 year service life. Replacing a 12-year unit because of a $400 repair is throwing away a decade of remaining value. The exception is a 25+ year old unit with multiple major component failures.",
      },
      {
        question: "What's the most common Sub-Zero repair you do?",
        answer: "Defrost system component replacement (heater, timer, or thermostat) is probably first. Door gasket replacement is second. Evaporator fan motor is third. All three are inexpensive parts and routine service calls — the kind of thing that should be caught at annual maintenance before it disrupts your kitchen.",
      },
      {
        question: "How fast can you get to me for repair in South Florida?",
        answer: "Same-day across Miami-Dade, Broward, and Palm Beach if booked before noon. Naples and Marco Island typically need a half-day buffer. Florida Keys require extended scheduling.",
      },
    ],
  },
  "why-diy-refrigerator-repair-isnt-always-the-best-option": {
    slug: "why-diy-refrigerator-repair-isnt-always-the-best-option",
    title: "Why DIY Sub-Zero Repair Isn't Always the Best Option",
    metaTitle: "Why DIY Sub-Zero Repair Isn't Always Best",
    metaDescription: "When DIY Sub-Zero repair makes sense and when it doesn't — from a 30-year specialist who's seen the failed YouTube fixes that turn $200 jobs into $2,000 ones.",
    author: "Daniel Rivera",
    date: "2024-12-01",
    lead: "DIY refrigerator repair has its place — water filter changes, condenser cleaning, defrost-drain clearing. Beyond those, Sub-Zero's sealed-system architecture and electronic controls make DIY a high-risk proposition. Three categories of repair almost always cost more if you DIY: anything sealed-system, anything that voids the manufacturer warranty, and anything that requires specialized diagnostic equipment.",
    content: [
      "It's tempting to DIY refrigerator repairs with so many YouTube tutorials available. But Sub-Zero's complexity makes some repairs genuinely high-risk for owners.",
    ],
    bodyHtml: `
<h2>What's Reasonable to DIY on a Sub-Zero</h2>
<p>Some Sub-Zero maintenance is owner-friendly. These are jobs the manufacturer designed for end-user execution.</p>

<h3>Water filter replacement</h3>
<p>5-minute job, no tools required. Sub-Zero designed the filter for owner replacement. Buy genuine Sub-Zero filters (third-party filters cause recognition issues on some models). South Florida water profile pushes replacement intervals to 6-9 months.</p>

<h3>Condenser cleaning</h3>
<p>Pull the kick plate. Vacuum the condenser coils. Brush stubborn dust off with a soft brush. 10-15 minutes of work, prevents about half the major repairs we see. This is the single highest-ROI maintenance you can do as an owner.</p>

<h3>Defrost drain clearing</h3>
<p>If you see water pooling at the bottom of the freezer, the defrost drain is likely clogged. You can clear it by carefully running warm water through the drain tube or using a small bottle brush. Not every Sub-Zero model is easy to access here, but for those that are, it's a reasonable DIY.</p>

<h3>Door gasket cleaning</h3>
<p>Wipe gaskets with mild soapy water and a soft cloth. Removes salt residue, sticky food, and dust that accelerates gasket degradation. Worth doing every 60 days, especially on coastal properties.</p>

<h3>Replacing light bulbs</h3>
<p>Sub-Zero light bulbs (the ones that aren't sealed LED units) are owner-replaceable. Check the manual for the exact bulb spec. Designer Series with sealed LEDs need professional service.</p>

<h2>What's High-Risk to DIY</h2>

<h3>1. Anything involving refrigerant</h3>
<p>Refrigeration systems run pressurized refrigerant. Federal regulations (EPA Section 608) require certification to handle refrigerants. Even with certification, sealed-system work requires specialized recovery equipment, vacuum pumps, leak detectors, and the parts catalogs to source the correct components.</p>
<p>YouTube videos showing "simple compressor replacement" routinely skip critical steps: proper refrigerant recovery, vacuum drying, oil compatibility check, and pressure test before recharge. Skip any of these and the new compressor fails in months.</p>

<h3>2. Electronic control board replacement</h3>
<p>Sub-Zero control boards are model-specific. Installing the wrong board can damage the unit or trigger fault states that aren't obvious until weeks later. Some boards require initialization or pairing with the unit's identity. We've seen DIY board replacements that "work" for a week, then cascade-fail other components because the board's calibration wasn't right.</p>

<h3>3. Compressor work of any kind</h3>
<p>Compressor diagnosis requires specific testing — capacitor check, relay test, amperage measurement under load, terminal continuity. Most "compressor failures" are actually relay or starting capacitor failures, which are cheap fixes. Replacing a working compressor because you misdiagnosed the relay is a $1,000 mistake.</p>

<h3>4. Anything during the warranty period</h3>
<p>Sub-Zero's warranty is voided by unauthorized repair. If your unit is under warranty (typically 2 years on most components, 5-12 years on sealed system depending on year), DIY work disqualifies you from manufacturer coverage. This is real money — the difference between $0 and $1,500 for a sealed-system repair.</p>

<h3>5. Sealed-system diagnostics</h3>
<p>The sealed system (compressor, condenser, evaporator, capillary tube, refrigerant) requires equipment that costs more than most DIY budgets allow. Manifold gauge sets, leak detectors, vacuum pumps, recovery cylinders. Without this equipment, you can't accurately diagnose what's actually wrong inside the sealed system, which means you'll likely replace the wrong component.</p>

<blockquote>"Half my expensive service calls are DIY repairs that went wrong. The owner replaced a compressor when the issue was a relay. Or installed a control board incorrectly. Or charged refrigerant without proper vacuum. The original repair would have been $400; the DIY-recovery repair is $2,000."</blockquote>

<h2>The Cost Math: DIY vs. Professional</h2>
<p>For a typical Sub-Zero repair, the math runs:</p>
<ul>
  <li><strong>Successful DIY</strong>: $50-300 in parts + 4-8 hours of your time + risk of mistakes</li>
  <li><strong>Professional service</strong>: $300-1,500 depending on repair, including warranty</li>
  <li><strong>DIY gone wrong</strong>: original parts cost + emergency professional repair + replacement of damaged components — usually 2-3x what professional would have been</li>
</ul>
<p>The risk-adjusted math favors professional service for anything beyond the simple maintenance items above. The exception is owners with HVAC or appliance repair experience and proper equipment.</p>

<h2>How to Tell If You Should Try DIY First</h2>
<p>Three questions to ask yourself before starting:</p>
<ol>
  <li><strong>Is this a "service" item or a "repair" item?</strong> Cleaning, filter replacement, gasket cleaning are service items — DIY-friendly. Anything that involves removing components or accessing the sealed system is a repair item — call us.</li>
  <li><strong>Is the unit under warranty?</strong> If yes, never DIY. Call the manufacturer first, then the authorized service.</li>
  <li><strong>Do I have the diagnostic equipment to verify the actual cause?</strong> Without proper diagnostics, you're guessing. Guessing wrong on Sub-Zero parts is expensive.</li>
</ol>
<p>If the answers are: service item, out of warranty, basic verification — DIY is fine. If any answer is unclear, call. We can usually resolve over the phone whether something is DIY-able or needs professional service.</p>

<h2>Same-Day Service When DIY Isn't Right</h2>
<p>When the answer is professional service: <a href="/services/refrigerator-repair/">Sub-Zero refrigerator repair</a>, <a href="/services/freezer-repair/">freezer repair</a>, <a href="/services/icemaker-repair/">ice maker repair</a>, and <a href="/services/wine-cooler-repair/">wine cooler repair</a> all available same-day across most of South Florida. We provide written quotes on-site before any work begins, with a workmanship warranty in writing on every invoice.</p>
<p>Call (800) 651-4528 or <a href="/contact/">request service online</a>.</p>
`,
    faqs: [
      {
        question: "Will DIY repair void my Sub-Zero warranty?",
        answer: "Yes, in most cases. Sub-Zero's warranty requires authorized service for repairs. DIY work — even if successful — typically voids coverage on related components. If your unit is in the warranty period, the math always favors authorized service. After warranty expiration, the DIY-vs-professional decision is purely about complexity and risk.",
      },
      {
        question: "What Sub-Zero repairs are safe to DIY?",
        answer: "Water filter replacement, condenser coil cleaning, defrost drain clearing, door gasket cleaning, and (on some models) light bulb replacement. These are designed for owner execution. Anything beyond cleaning and consumables — fan motors, sensors, control boards, sealed system, compressor — should be professional service.",
      },
      {
        question: "Can I replace a Sub-Zero fan motor myself?",
        answer: "Technically possible, but rarely worth it. The motor itself runs $100-200, but the diagnostic to confirm fan motor (vs. control board, vs. sensor, vs. wiring) requires specific testing. Many DIYers replace a fan motor that wasn't actually the problem. Better to have us diagnose and replace in one visit.",
      },
      {
        question: "What about replacing a compressor on an old Sub-Zero?",
        answer: "Don't. Compressor replacement requires refrigerant recovery (federal regulation), proper vacuum drying, oil compatibility verification, and pressure testing. Without all four steps, the new compressor fails in months. The labor and equipment cost makes professional compressor replacement worth it even on a 25+ year old unit if you want to keep it running.",
      },
      {
        question: "What's the most common DIY mistake you fix?",
        answer: "Replacing a working compressor because the relay or starting capacitor was actually the failed component. The compressor relay is a $40 part; a compressor is a $400-1,000 part. Misdiagnosing this is one of the most expensive Sub-Zero mistakes possible. Always verify with proper testing before replacing high-cost components.",
      },
      {
        question: "Are YouTube Sub-Zero repair videos accurate?",
        answer: "Some are fine for general orientation. Most skip critical steps. The big gaps are usually around refrigerant handling, control board calibration, and proper diagnostic verification before parts replacement. Use videos for context — call professionals for execution on anything sealed-system or electronic.",
      },
    ],
  },
  "reliable-freezer-maintenance-quick-guide": {
    slug: "reliable-freezer-maintenance-quick-guide",
    title: "Sub-Zero Freezer Maintenance: A Specialist's Quick Guide",
    metaTitle: "Sub-Zero Freezer Maintenance Quick Guide",
    metaDescription: "The maintenance schedule that gets a Sub-Zero freezer to 25 years — what owners can do, what we do, and the warning signs that mean stop maintenance and call for service.",
    author: "Daniel Rivera",
    date: "2025-01-10",
    lead: "Sub-Zero freezers are designed for 20-25 year service life. Reaching that lifespan in South Florida requires three things: annual condenser cleaning, periodic door gasket inspection, and recognition of the four warning signs that mean a maintenance issue has become a service issue. Most owners skip the first two and only act on the third — by which point the cheap fixes are off the table.",
    content: [
      "Regular maintenance keeps your Sub-Zero freezer running efficiently for years. Here's the schedule we actually recommend.",
    ],
    bodyHtml: `
<h2>The Owner Maintenance Schedule</h2>
<p>What you can do without a technician, and how often.</p>

<h3>Every 30 days</h3>
<ul>
  <li><strong>Visual condenser check.</strong> Pull the kick plate and look at the condenser. Any visible dust accumulation is a sign to vacuum.</li>
  <li><strong>Door seal wipe-down.</strong> Damp cloth, no chemicals. Removes salt residue (coastal homes), food spills, dust.</li>
  <li><strong>Listen test.</strong> Stand near the unit for 30 seconds. New noises (clicking, squealing, grinding) are early warning signs.</li>
</ul>

<h3>Every 6 months</h3>
<ul>
  <li><strong>Condenser vacuum + brush.</strong> Remove dust accumulation. Coastal homes should do this every 3 months.</li>
  <li><strong>Door gasket inspection.</strong> Run the dollar bill test on every door. Pull the bill out — should drag noticeably.</li>
  <li><strong>Ice maker check.</strong> Inspect the fill tube for any visible cracks or buildup.</li>
  <li><strong>Defrost drain check.</strong> Look for water at the bottom of the freezer cabinet — indicates drain blockage.</li>
</ul>

<h3>Every 12 months</h3>
<ul>
  <li><strong>Schedule professional maintenance visit.</strong> Catches what owner inspection misses.</li>
</ul>

<h2>What Professional Annual Maintenance Covers</h2>
<p>The visit takes 60-90 minutes and covers items that need diagnostic equipment or specialized inspection.</p>

<h3>Refrigerant pressure check</h3>
<p>Slow leaks aren't visible to owners but show up as gradual cooling efficiency loss over months. Pressure check catches leaks before they become major service.</p>

<h3>Compressor amperage test</h3>
<p>Compressor draws should be in spec for the model. Drift indicates wear or efficiency loss. Catching this at year 8 vs. year 12 is the difference between a $0 alert and a $1,500 repair.</p>

<h3>Defrost cycle verification</h3>
<p>We run a manual defrost cycle and watch for proper heater operation, defrost termination, and complete drain. Catches defrost system component degradation 6-12 months before it manifests as ice buildup.</p>

<h3>Sensor calibration</h3>
<p>Temperature sensors drift over years. Calibrated thermocouple at three positions confirms the unit is reading correctly. Drift causes the unit to over- or under-cool, which stresses the compressor.</p>

<h3>Electrical contact inspection</h3>
<p>Especially on coastal properties — pull back panel, inspect for salt corrosion on terminals and PCB connections. Replace contact sets that show visible degradation rather than waiting for failure.</p>

<h3>Door alignment + hinge tension</h3>
<p>Doors fall slightly out of alignment over years. Compromised alignment means compromised seal, even if the gasket is fine. Quick adjustment.</p>

<h2>The 4 Warning Signs to Stop Maintenance and Call for Service</h2>
<p>Routine maintenance is for healthy units. Once you see any of these, you need diagnosis, not maintenance.</p>

<h3>1. Frost or ice on the back wall, floor, or ceiling</h3>
<p>Defrost system has failed. Manual defrost will clear the ice temporarily, but the underlying component (heater, timer, or thermostat) is broken. Without service, the ice returns within 2-4 weeks. After multiple cycles, the underlying compressor stress causes secondary failures.</p>

<h3>2. Compressor running constantly</h3>
<p>Could be door seal failure (cheap fix), condenser blockage (cheap fix), low refrigerant from slow leak (medium fix), or compressor wear (expensive fix). All of them are diagnosable in 30 minutes on-site.</p>

<h3>3. Temperature drift you can verify with a thermometer</h3>
<p>Setpoint is 0°F freezer. Drift more than 5°F is significant. Could be sensor failure, evaporator fan failure, defrost system, or sealed-system pressure. Don't wait — drift gets worse, not better.</p>

<h3>4. Any new noise that wasn't there before</h3>
<p>Each sound has a specific source. Catching it early means cheaper repair.</p>

<blockquote>"Sub-Zero freezers are over-engineered. They tell you what's wrong before they fail completely — but only if you're paying attention. The owners who ignore the early warnings are the ones with $2,000 repair bills five years later."</blockquote>

<h2>South Florida Specifics</h2>
<p>Three South Florida factors that affect the maintenance schedule:</p>

<h3>Coastal salt-air exposure</h3>
<p>Within 1 mile of the coast, accelerate everything. Twice-yearly professional maintenance instead of annual. Contact-cleaning at every visit. Door gasket replacement at year 5 instead of year 7-8.</p>

<h3>Year-round high humidity</h3>
<p>Door gaskets degrade faster. Condensate management matters more. The defrost drain is more likely to be a routine maintenance item.</p>

<h3>Hurricane season power events</h3>
<p>Schedule a post-season check after every major storm event, even if the unit appears fine. Voltage damage often shows up 2-6 weeks later.</p>

<h2>What "Properly Stocked" Actually Means</h2>
<p>Sub-Zero freezers run more efficiently when full. Empty space is wasted air the compressor has to cool. Optimal fill: 70-80%. Too empty wastes energy; too full restricts air circulation.</p>
<p>If you can't keep the freezer 70-80% full with food, fill the empty space with water bottles or freezer-safe ice packs. Bonus: useful in a power outage.</p>

<h2>When to Call</h2>
<p>Schedule professional maintenance annually (twice annually for coastal properties). Schedule service immediately if any of the four warning signs above appear.</p>
<p><a href="/services/freezer-repair/">See our Sub-Zero freezer repair page</a> for service details, or call (800) 651-4528. Same-day across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a>.</p>
`,
    faqs: [
      {
        question: "How often should I clean my Sub-Zero freezer's condenser coils?",
        answer: "Every 6 months for inland properties, every 3 months for coastal properties (within 1 mile of the ocean). The condenser is at the back or bottom of the unit — pull the kick plate to access. Vacuum and brush off any visible dust. This is the single highest-ROI maintenance you can do as an owner.",
      },
      {
        question: "Do I need to manually defrost a Sub-Zero freezer?",
        answer: "No. Sub-Zero freezers are designed to be frost-free with an automatic defrost cycle every 8-12 hours. If you see ice buildup on the back wall, floor, or ceiling, the defrost system has failed and needs service — manual defrosting is a temporary fix, not a real solution.",
      },
      {
        question: "What's the right temperature setting for a Sub-Zero freezer?",
        answer: "0°F is the standard setpoint. Some models default to -5°F. For long-term storage of high-value items (specialty meats, hard-to-replace ingredients), -5°F gives more buffer during power outages. For everyday use, 0°F is fine and slightly more energy-efficient.",
      },
      {
        question: "How can I tell if my freezer's door gasket needs replacement?",
        answer: "Run the dollar bill test: close the door on a dollar bill halfway in, try to pull the bill out. If it slides easily, the gasket compression is failing. Other signs: frost on the door interior (warm air leaking in), increased compressor cycling, and visible deformation or cracking of the gasket rubber.",
      },
      {
        question: "Should I keep my Sub-Zero freezer full or partially empty?",
        answer: "70-80% full is optimal. Empty space is wasted air the compressor has to cool. Too full restricts air circulation. If you can't keep the freezer at that fill level with food, use water bottles or ice packs to fill the gap. Bonus: those are useful in a power outage.",
      },
      {
        question: "What's the most common Sub-Zero freezer failure?",
        answer: "Defrost system component failure — heater, timer, or thermostat. Manifests as ice buildup on the back wall. All three are inexpensive parts and routine to replace. The pattern usually shows up around year 10-12 of service. Catching the early warning signs (slight ice buildup) means a single component replacement; ignoring it means cascading damage.",
      },
    ],
  },
  "refrigerator-troubleshooting-guide-fix-cooling-issues-now": {
    slug: "refrigerator-troubleshooting-guide-fix-cooling-issues-now",
    title: "Sub-Zero Refrigerator Troubleshooting: A Specialist's Field Guide",
    metaTitle: "Sub-Zero Refrigerator Troubleshooting Guide",
    metaDescription: "The same diagnostic checklist a Sub-Zero technician runs on every cooling-issue call — what to check first, what to skip, and when to stop and call.",
    author: "Daniel Rivera",
    date: "2025-01-25",
    lead: "When a Sub-Zero stops cooling properly, run through the same six-step diagnostic I use on every service call. Most cooling issues trace to one of three things: a fan motor failure, a defrost system problem, or a door seal compromise. The diagnostic takes about 10 minutes and tells you whether you need a technician or just a thermostat adjustment.",
    content: [
      "When your refrigerator isn't cooling properly, run through these checks before calling for service.",
    ],
    bodyHtml: `
<h2>The 6-Step Diagnostic I Run on Every Call</h2>
<p>This is the exact sequence I use when I arrive at a "not cooling" service call. You can run the first 5 yourself; step 6 needs equipment.</p>

<h3>Step 1: Verify the obvious (60 seconds)</h3>
<ul>
  <li>Power at the outlet — plug something else in to confirm</li>
  <li>Door fully closed — sometimes a tall bottle pushes against the back, preventing full close</li>
  <li>Thermostat at correct setpoint — 38°F refrigerator, 0°F freezer</li>
  <li>Recent additions — did you load a lot of warm food in the last 12 hours? Give it 24 hours to recover.</li>
</ul>
<p>I've driven to plenty of homes where one of these resolved the issue. 30 seconds of checking saves a service call.</p>

<h3>Step 2: Listen at the back grille (60 seconds)</h3>
<p>Pull off the kick plate or step behind the unit. Listen for the compressor.</p>
<ul>
  <li><strong>Steady humming</strong> — compressor running. Continue to step 3.</li>
  <li><strong>Silence</strong> — could be in defrost cycle (wait 30 minutes and re-check), could be a relay/capacitor issue. If still silent after 30 minutes, call for service.</li>
  <li><strong>Clicking that doesn't lead to humming</strong> — compressor trying to start and failing. Relay or starting capacitor. Call for service.</li>
</ul>

<h3>Step 3: Feel the back grille (60 seconds)</h3>
<p>Hand on the condenser area. Should be hot to the touch when compressor is running.</p>
<ul>
  <li><strong>Hot</strong> — cooling system is engaged. Continue to step 4.</li>
  <li><strong>Warm but not hot</strong> — possible reduced airflow. Check condenser for dust blockage, vacuum if needed.</li>
  <li><strong>Cool with compressor running</strong> — reduced compressor output. Either compressor is failing or sealed system has lost refrigerant. Call for service.</li>
</ul>

<h3>Step 4: Listen at the freezer wall (60 seconds)</h3>
<p>Open the freezer. Hold ear close to the back wall (don't touch). Listen.</p>
<ul>
  <li><strong>Soft whirring</strong> — evaporator fan working. Continue to step 5.</li>
  <li><strong>Silence</strong> (with compressor running) — evaporator fan motor failed. This is the #1 "not cooling" cause. Cold is being made but not blown into the cabinet. Call for service.</li>
  <li><strong>Scraping or rattling</strong> — fan blade hitting ice buildup. Defrost system has failed. Call for service.</li>
</ul>

<h3>Step 5: Check for ice buildup in the freezer (60 seconds)</h3>
<p>Open the freezer wide. Look at the back wall and floor.</p>
<ul>
  <li><strong>Ice on the back wall</strong> — defrost system failure. Common, fixable. Call for service.</li>
  <li><strong>No ice buildup</strong> — defrost system fine. Continue to step 6.</li>
</ul>

<h3>Step 6: Check the door seal (60 seconds)</h3>
<p>Close the door on a dollar bill halfway in. Try to pull the bill out.</p>
<ul>
  <li><strong>Bill slides out easily</strong> — door gasket compression failing. Warm air leaking in continuously. High-ROI repair.</li>
  <li><strong>Bill drags noticeably</strong> — door seal fine.</li>
</ul>

<h2>What "Not Cooling" Almost Never Is</h2>
<p>After 30 years of these diagnostics, here's what "not cooling" is rarely:</p>

<h3>True compressor failure</h3>
<p>People assume compressor when they hear noise or see no cooling. Actual compressor failures are rare — maybe 5-10% of "not cooling" calls. Most of the rest are fan motor, defrost system, or door seal issues that LOOK like compressor failure but aren't.</p>

<h3>Refrigerant loss</h3>
<p>Refrigerant doesn't go bad and shouldn't deplete in a sealed system. If refrigerant is the issue, there's a leak somewhere. Symptoms are gradual cooling loss over weeks, not sudden failure.</p>

<h3>Total electronic failure</h3>
<p>Control boards fail in distinctive patterns (specific error codes, partial functionality), not "everything stops cooling at once."</p>

<blockquote>"Customers tell me 'I think the compressor is dying.' Then I run the diagnostic and it's the evaporator fan motor. $300 fix instead of $1,500. Knowing the failure patterns is what saves real money."</blockquote>

<h2>Common Patterns and What They Mean</h2>

<h3>Refrigerator warm, freezer cold</h3>
<p>Air damper between sections has failed, or the evaporator fan that pushes cold air to the refrigerator section is dead. Common on Built-In side-by-side models.</p>

<h3>Both compartments slightly warm</h3>
<p>Refrigerant low (slow leak), condenser blocked, or door seal compromised. All diagnosable in 30 minutes on-site.</p>

<h3>Compartments alternate temperatures</h3>
<p>Sensor drift or control board issue. Modern Sub-Zero units self-diagnose — check the display for error codes.</p>

<h3>Cooling normally but ice buildup</h3>
<p>Defrost system has failed. Compressor is fine, refrigeration is fine, but ice is accumulating because defrost cycles aren't running properly.</p>

<h3>Cooling normally then sudden failure</h3>
<p>Likely a hard-failure of a single component — relay, fan motor, control board. Call for service same-day.</p>

<h2>Error Codes Quick Reference</h2>
<ul>
  <li><strong>E1</strong> — Refrigerator over-temperature warning</li>
  <li><strong>E2</strong> — Freezer over-temperature warning</li>
  <li><strong>E3</strong> — Sealed-system pressure issue (call same-day, don't run the unit)</li>
  <li><strong>EE</strong> — Electronic control board fault (try power cycle first)</li>
  <li><strong>F1 / F2</strong> — Fan motor fault</li>
  <li><strong>dr</strong> — Door alarm (check for door not fully closed)</li>
</ul>

<h2>When to Call</h2>
<p>If steps 2-6 above pointed to any of: failed evaporator fan, defrost system issue, door seal compromise, sealed-system symptom, or any persistent error code — that's a service call.</p>
<p><a href="/services/refrigerator-repair/">See our Sub-Zero refrigerator repair page</a> or call (800) 651-4528. Same-day across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a>.</p>
`,
    faqs: [
      {
        question: "How long should it take a Sub-Zero to recover after I add a lot of warm food?",
        answer: "12-24 hours to fully recover to setpoint. During recovery, the compressor runs more or less continuously. This is normal. If recovery takes longer than 24 hours, the unit has a problem unrelated to the food load.",
      },
      {
        question: "My Sub-Zero is in defrost cycle — should I worry?",
        answer: "No. Sub-Zero refrigerators run defrost cycles every 8-12 hours, lasting 20-30 minutes. During the cycle, the compressor pauses and cabinet temperature can drift up briefly. After the cycle, normal cooling resumes within 30 minutes. If your unit appears to stop cooling for more than an hour, that's not a defrost cycle.",
      },
      {
        question: "Why is my refrigerator section warm but the freezer is fine?",
        answer: "On side-by-side or column units, this usually means the evaporator fan that pushes cold air to the refrigerator section has failed, or the air damper between sections is stuck. Both are inexpensive parts and routine repairs.",
      },
      {
        question: "Should I unplug my Sub-Zero if it's not cooling?",
        answer: "Only in specific cases: if you smell electrical burning, see sparks, hear refrigerant hissing with chemical smell, or see visible damage. Otherwise leave it plugged in. Even a partially working unit holds food cold longer than no unit at all. Call for same-day service.",
      },
      {
        question: "What's the most common cause of 'refrigerator not cooling'?",
        answer: "Evaporator fan motor failure. Cold is being made but not blown into the cabinet. Diagnostic in 60 seconds — listen at the freezer wall for fan whirring. If it's silent and the compressor is running, that's almost certainly the issue. Common Sub-Zero part, routine repair.",
      },
      {
        question: "Can a power surge cause cooling failure?",
        answer: "Yes — power surges damage control boards, fan motors, and starting capacitors. Damage often shows up 2-6 weeks after the surge event, not immediately. If your area had a recent power outage and your Sub-Zero now has cooling issues, the timing may be related. Whole-home surge protection prevents this; cost is $200-400.",
      },
    ],
  },
  "refrigerator-compressor-repair-complete-diagnostic-and-repair": {
    slug: "refrigerator-compressor-repair-complete-diagnostic-and-repair",
    title: "Sub-Zero Compressor Repair: Diagnostic + Replacement Decision Guide",
    metaTitle: "Sub-Zero Compressor Repair Diagnostic Guide",
    metaDescription: "When a Sub-Zero compressor really fails vs. when it's actually a relay or capacitor — the diagnostic process, the replacement decision, and what owners get wrong.",
    author: "Daniel Rivera",
    date: "2025-02-05",
    lead: "Most 'compressor failures' aren't actually the compressor. The relay, the starting capacitor, the fan motor, or even the door seal can cause symptoms that look like compressor death — and those misdiagnoses are how owners end up replacing a $600 compressor when a $40 relay would have fixed the problem. Here's how the actual diagnostic runs.",
    content: [
      "The compressor is the heart of your refrigerator's cooling system. Understanding compressor issues helps you identify problems early.",
    ],
    bodyHtml: `
<h2>What a Compressor Actually Does</h2>
<p>The compressor is the pump that circulates refrigerant through the sealed system. It pulls cold, low-pressure refrigerant gas from the evaporator coil (inside the cabinet), compresses it to high pressure, and sends it to the condenser coil (back of the unit) where it dissipates heat. The cycle is continuous when the unit needs cooling and pauses when setpoint is reached.</p>
<p>A working compressor is the foundation of refrigeration. When the compressor genuinely fails, the unit stops cooling completely — no halfway about it. When the compressor is partially failed (lost efficiency, weak compression), the unit cools but inefficiently — runs constantly, can't reach setpoint in warm weather.</p>

<h2>The 4 Things Owners Mistake for Compressor Failure</h2>

<h3>1. Failed starting relay or capacitor</h3>
<p>The relay and capacitor are external components that help the compressor start. When they fail, the compressor tries to start, fails, and you hear clicking. Sounds exactly like a compressor problem. Costs $40 in parts. Easy to diagnose and replace.</p>

<h3>2. Evaporator fan motor failure</h3>
<p>Compressor runs fine, refrigerant cycles fine, but cold isn't being blown into the cabinet because the fan motor is dead. Owner reports "fridge not cooling but compressor sounds normal." Looks like a sealed-system issue but isn't. Common, cheap fix.</p>

<h3>3. Defrost system failure causing ice buildup</h3>
<p>Defrost system fails, ice accumulates on evaporator coil, air can't pass over the coil, cabinet warms up. Compressor runs continuously trying to compensate. Owner thinks compressor is overworking; actually the defrost system is the failure point.</p>

<h3>4. Door seal compromise</h3>
<p>Door gasket fails, warm air leaks in continuously, compressor runs constantly to compensate. Owner reports "compressor running all the time." Compressor is fine; door seal is the issue. $200 gasket replacement instead of $1,500 compressor repair.</p>

<h2>How to Tell If It's Actually the Compressor</h2>
<p>Real compressor problems have specific signatures. Here's the diagnostic logic:</p>

<h3>Total no-cool with no compressor sound</h3>
<p>If you put your ear to the back grille and hear nothing — no humming, no clicking, no buzzing — the compressor isn't trying to run. Could be: power issue, thermostat malfunction, control board failure, OR a completely failed compressor. This needs professional diagnosis to differentiate.</p>

<h3>Loud humming followed by clicking and silence</h3>
<p>Compressor trying to start, failing, and tripping its overload protector. Usually a relay or capacitor (cheap fix), occasionally a true compressor failure.</p>

<h3>Compressor runs but doesn't cool</h3>
<p>Multiple possible causes including: refrigerant leak, capillary tube blockage, weak compressor (lost compression), failed evaporator fan, sealed-system pressure issue. Requires manifold gauge testing on-site to differentiate.</p>

<h3>Compressor cycles too short or too long</h3>
<p>Could be thermostat, control board, sensor, or compressor efficiency. Diagnostic involves measuring run time, draw amperage, and pressure across the cycle.</p>

<h3>Compressor trips circuit breaker</h3>
<p>Almost always a hard short in the compressor windings — true compressor failure. Don't keep resetting the breaker; you'll damage other components.</p>

<blockquote>"In 30 years of Sub-Zero service, I've replaced maybe 200 compressors. I've replaced thousands of relays, fan motors, and door gaskets that owners thought were compressor problems. The diagnostic step is what separates a $40 fix from a $1,500 fix."</blockquote>

<h2>The Actual Diagnostic Process</h2>
<p>What happens on-site when you call for "compressor failure":</p>

<h3>Step 1: Visual + auditory inspection (5 minutes)</h3>
<p>Pull the back panel, listen to compressor behavior, check for visible refrigerant oil residue (indicates leak), check for burnt smell (indicates electrical issue), check condenser fan and ambient airflow.</p>

<h3>Step 2: Electrical testing (10 minutes)</h3>
<p>Test the relay continuity and capacitor capacitance. Either failed component will be obvious. Test compressor terminals for short circuit (indicates winding failure). Measure compressor amperage under load (indicates efficiency).</p>

<h3>Step 3: Sealed-system pressure testing (15 minutes)</h3>
<p>If electrical tests passed, connect manifold gauges to measure suction and discharge pressures across a complete compressor cycle. Pressure differential indicates compressor health. Low differential plus low overall pressure indicates refrigerant loss; low differential plus normal pressure indicates compressor weakness.</p>

<h3>Step 4: Diagnosis + repair recommendation (5 minutes)</h3>
<p>Based on test results, recommend repair. Most calls end with relay replacement, capacitor replacement, or fan motor replacement. Some end with refrigerant leak repair. Few end with compressor replacement recommendation.</p>

<h2>The Compressor Replacement Decision</h2>
<p>When the compressor genuinely needs replacement, the decision is whether to replace or replace the whole unit.</p>

<h3>Replace compressor when:</h3>
<ul>
  <li>Unit is under 15 years old</li>
  <li>Other major components (sealed system, control board, condenser) are healthy</li>
  <li>Cabinet, door alignment, gaskets are in good condition</li>
  <li>Cost of compressor + labor is less than 50% of replacement unit cost</li>
</ul>

<h3>Consider replacing the unit when:</h3>
<ul>
  <li>Unit is 25+ years old AND multiple major components are showing wear</li>
  <li>Cabinet has structural issues or significant rust</li>
  <li>The compressor failure is the third major repair in 2 years</li>
  <li>You were planning a kitchen renovation anyway</li>
</ul>
<p>For most Sub-Zero units in the 10-20 year range with isolated compressor failure, repair is the clear winner. These units have another decade of service life if the compressor is replaced.</p>

<h2>Costs (Approximate)</h2>
<ul>
  <li><strong>Relay or capacitor replacement</strong>: $200-350 total</li>
  <li><strong>Evaporator fan motor</strong>: $300-450</li>
  <li><strong>Refrigerant leak repair + recharge</strong>: $400-700</li>
  <li><strong>Compressor replacement</strong>: $1,200-2,000 (depending on model and refrigerant type)</li>
  <li><strong>Replacement Sub-Zero unit</strong>: $8,000-25,000+</li>
</ul>

<h2>What You Can Do Before Calling</h2>
<ul>
  <li>Note the exact symptoms (sounds, when started, anything that triggered it)</li>
  <li>Check for visible refrigerant oil residue at the back of the unit</li>
  <li>Verify circuit breaker hasn't tripped</li>
  <li>Get the model number ready</li>
</ul>
<p>This information cuts diagnostic time in half and means we can usually arrive with the most likely parts on the truck.</p>

<h2>Same-Day Diagnostic + Repair</h2>
<p><a href="/services/refrigerator-repair/">See our Sub-Zero refrigerator repair page</a> for service details, or call (800) 651-4528. Same-day across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a>.</p>
`,
    faqs: [
      {
        question: "How do I know if my compressor is actually broken?",
        answer: "Hard symptoms: unit completely stopped cooling, compressor not running at all (silent at the back grille), or compressor trips circuit breaker. Soft symptoms (clicking, weak cooling, constant run) are usually OTHER components — relay, capacitor, fan motor, door seal — that mimic compressor failure. Diagnostic equipment differentiates.",
      },
      {
        question: "Can I replace a refrigerator compressor myself?",
        answer: "Technically yes, in practice no. Compressor replacement requires EPA Section 608 certification (federal regulation), refrigerant recovery equipment, vacuum pump, manifold gauges, and the parts catalog to source the right replacement. The labor and equipment cost makes professional replacement worth it even if you have HVAC background.",
      },
      {
        question: "How much does Sub-Zero compressor replacement cost?",
        answer: "$1,200-2,000 typical, including parts, labor, refrigerant, and proper recovery/recharge. Higher for older units that may need refrigerant conversion (R-12 to R-134a, etc.). Lower if other components don't need attention. We provide a written quote before any work begins.",
      },
      {
        question: "Is it worth replacing the compressor on a 15-year-old Sub-Zero?",
        answer: "Usually yes. Sub-Zero units are designed for 20-25 year service life. A 15-year unit with isolated compressor failure has another 10 years of service if the compressor is replaced. Compare $1,500 compressor repair to $15,000+ replacement unit. The math is clear unless other major components are also failing.",
      },
      {
        question: "How long does compressor replacement take?",
        answer: "Typically 4-6 hours on-site for the actual replacement, including refrigerant recovery, compressor swap, system vacuum, recharge, and pressure testing. We schedule it as a single visit. The unit is usable that evening.",
      },
      {
        question: "Why does my compressor click but not start?",
        answer: "Almost always the starting relay or run capacitor. The relay clicks as it tries to engage the compressor, fails, and trips an internal overload protector. Cycle repeats. $40 in parts to fix. Don't assume compressor failure based on clicking — get diagnostic confirmation first.",
      },
    ],
  },
  "refrigerator-leaking-water-causes-quick-fixes": {
    slug: "refrigerator-leaking-water-causes-quick-fixes",
    title: "Sub-Zero Leaking Water: 5 Causes and How to Identify Each",
    metaTitle: "Sub-Zero Refrigerator Leaking Water Causes",
    metaDescription: "Where the water is coming from tells you exactly what's wrong. The 5 most common Sub-Zero water leak causes — how to identify each and when to call for service.",
    author: "Daniel Rivera",
    date: "2025-02-15",
    lead: "Where the water appears tells you what's wrong. Water at the bottom of the freezer means clogged defrost drain. Water under the unit means leaking water supply line or condensate pan. Water inside the refrigerator means defrost drain or door seal. Each cause has a distinct location and a distinct fix — and most are inexpensive if caught early.",
    content: [
      "Water leaks from your refrigerator can damage your flooring and indicate underlying problems. Here's how to identify what's causing yours.",
    ],
    bodyHtml: `
<h2>Where the Water Is Tells You What's Wrong</h2>
<p>Step 1 in every leak diagnosis is location. The five most common Sub-Zero water leak causes each have a distinctive location signature.</p>

<h3>Water at the bottom of the freezer cabinet</h3>
<p><strong>Cause: clogged defrost drain.</strong> The defrost cycle melts ice off the evaporator coil; that water normally flows down a drain tube to a pan that evaporates the water. If the drain clogs (food debris, ice formation, or sediment), water accumulates at the bottom of the freezer instead of draining away. Most common Sub-Zero leak.</p>
<p><strong>Fix</strong>: clear the drain. Sometimes DIY-friendly with warm water and a small bottle brush; sometimes requires accessing the drain tube from behind the unit. Total cost when professional: $200-350.</p>

<h3>Water inside the refrigerator section</h3>
<p><strong>Cause: door seal compromise OR defrost drain blockage.</strong> Compromised door gasket lets warm humid air in, which condenses on the cold cabinet walls and pools at the bottom. Defrost drain blockage on some Built-In models also routes water into the refrigerator section.</p>
<p><strong>Fix</strong>: identify which cause via the dollar bill test (door seal) or visual drain inspection (defrost drain). Door gasket replacement: $250-400. Defrost drain clearing: $200-350.</p>

<h3>Water under the refrigerator on the floor</h3>
<p><strong>Cause: water supply line leak OR condensate pan overflow.</strong> The water supply line to the ice maker passes through the back of the unit. Cracks at the connection point or kinks that lead to leaks happen over time. The condensate pan at the back/bottom collects defrost water and is supposed to evaporate; if the unit is over-cooling or the heater isn't working, the pan overflows.</p>
<p><strong>Fix</strong>: visual inspection of supply line and pan. Supply line repair: $250-400. Pan replacement or heater repair: $300-500.</p>

<h3>Water on the door interior or top edge</h3>
<p><strong>Cause: water inlet valve failure</strong>. The inlet valve controls water flow to the ice maker and water dispenser. When it fails partially open, water continues flowing slowly even when not requested. On some Sub-Zero models the water then leaks out the top of the door or pools at the door interior.</p>
<p><strong>Fix</strong>: inlet valve replacement. Common Sub-Zero part. $300-450.</p>

<h3>Water dripping from the ice maker</h3>
<p><strong>Cause: cracked fill tube OR ice maker mold issue</strong>. Fill tubes can crack from freeze events (especially in colder marinas or homes with cold water supply lines). Ice maker molds can develop hairline cracks from age. Either way, water that should be in the ice cube ends up outside the ice maker.</p>
<p><strong>Fix</strong>: fill tube replacement: $200-350. Ice mold replacement: $400-600.</p>

<h2>Less Common Causes</h2>

<h3>Frozen water supply line</h3>
<p>If the water supply line passes through an unconditioned space (between cabinet and exterior wall), cold weather can freeze the line. Some South Florida winters get cold enough for this. The line can crack from freeze expansion. Diagnostic: line is colder than expected; visible ice on or around the line.</p>

<h3>High humidity condensation</h3>
<p>South Florida humidity can cause condensation on door gaskets, hinges, and exterior surfaces, especially when AC is set warm. Looks like a leak but is just condensation. Wipe and monitor — if it continues despite normal AC use, the issue is gasket compression.</p>

<h3>Damaged condensate drain heater</h3>
<p>Sub-Zero units have a small heater that helps condensate water evaporate from the pan. If the heater fails, water accumulates faster than it can evaporate, eventually overflowing.</p>

<blockquote>"The first 30 seconds of any 'water leak' call is figuring out where the water is coming from. Once you know the location, the cause is usually obvious. Owners often try to fix what they see — drying the floor, adjusting the door — without identifying the source. Source identification is the entire diagnostic."</blockquote>

<h2>When to Call vs. When to DIY</h2>

<h3>DIY-friendly</h3>
<ul>
  <li>Clearing an accessible defrost drain with warm water</li>
  <li>Checking the dollar bill test on door seals</li>
  <li>Wiping condensation buildup from gaskets</li>
  <li>Tightening visible water supply line connections (only if accessible without removing the unit)</li>
</ul>

<h3>Call for service</h3>
<ul>
  <li>Water source is unclear despite inspection</li>
  <li>Water leak hasn't stopped after attempting DIY clearing</li>
  <li>Water inlet valve, ice maker fill tube, or condensate heater failures</li>
  <li>Anything inside the sealed system</li>
  <li>Water supply line cracks or major leaks</li>
</ul>

<h2>Why Acting Fast Matters</h2>
<p>Water damage is cumulative and expensive. A small unaddressed leak can:</p>
<ul>
  <li>Damage flooring (especially hardwood and laminate)</li>
  <li>Migrate behind cabinets and cause hidden water damage</li>
  <li>Promote mold growth in compromised areas</li>
  <li>Damage downstairs ceilings in second-floor kitchens</li>
  <li>Cause refrigerator electrical components to short circuit</li>
</ul>
<p>What starts as a $300 defrost drain clearing can become a $5,000 floor repair if ignored.</p>

<h2>Same-Day Service Across South Florida</h2>
<p><a href="/services/refrigerator-repair/">See our Sub-Zero refrigerator repair page</a> for service details, or call (800) 651-4528. Water leaks get priority dispatch — same-day is standard across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a>.</p>
`,
    faqs: [
      {
        question: "Why is there water at the bottom of my freezer?",
        answer: "Almost always a clogged defrost drain. Defrost cycles melt ice off the coil; that water normally drains to an evaporation pan. When the drain clogs, water pools in the freezer instead. Most common Sub-Zero water leak. Sometimes DIY-friendly to clear; if you can't access the drain easily, call for service.",
      },
      {
        question: "How urgent is a refrigerator water leak?",
        answer: "More urgent than most owners think. Cumulative water damage is one of the most expensive insurance claims related to refrigerators. A small leak today is a $300 fix; the floor damage from ignoring it for 6 months is a $5,000+ repair. We dispatch water leaks as priority same-day calls.",
      },
      {
        question: "Can I just put a towel under the refrigerator?",
        answer: "As a temporary measure while waiting for service, yes. Long-term, no — towels don't address the cause and water damage continues to migrate. The leak has a specific source that needs to be identified and fixed. Call for diagnostic; we identify the source and fix it in one visit on most calls.",
      },
      {
        question: "Will my homeowner's insurance cover refrigerator water damage?",
        answer: "Typically yes for sudden water damage events, but coverage often excludes 'gradual damage' from neglected leaks. The insurance interpretation usually depends on whether you took reasonable steps to address the leak when discovered. Calling for repair within a week of noticing the leak is generally considered reasonable; ignoring it for months is generally not covered.",
      },
      {
        question: "Why is my Sub-Zero leaking after I just had it serviced?",
        answer: "Three possibilities: (1) the recent service didn't address the actual leak source, (2) the service involved disconnecting and reconnecting components and one connection wasn't fully tightened, or (3) it's a different leak from a different cause. Call us — if the service we provided is involved, return visit is covered under workmanship warranty.",
      },
      {
        question: "Can high South Florida humidity cause a refrigerator to leak?",
        answer: "It can cause condensation buildup that looks like a leak — moisture on door gaskets, hinges, exterior surfaces. Distinguishable from real leaks because it appears intermittently and only when AC is set warm or door is opened frequently. If it persists with normal AC use, the door gasket is the issue.",
      },
    ],
  },
  "emergency-fridge-repair-near-me-24-7-service": {
    slug: "emergency-fridge-repair-near-me-24-7-service",
    title: "Emergency Sub-Zero Repair Near Me: 24/7 Same-Day Service in South Florida",
    metaTitle: "Emergency Sub-Zero Repair Near Me 24/7",
    metaDescription: "Sub-Zero refrigerator failed at 2 AM? Same flat rate, no surcharge. What counts as an emergency, what to do while waiting, and how to keep food safe.",
    author: "Daniel Rivera",
    date: "2025-02-20",
    lead: "A Sub-Zero failure isn't always a 9-to-5 problem. We dispatch 24/7 across South Florida at the same flat rate — no surcharge for nights, weekends, or holidays. The most important thing isn't waiting time; it's what you do during the wait. Door discipline, food triage, and accurate symptom reporting determine whether your $800 of groceries is safe when we arrive.",
    content: [
      "Refrigerator emergencies don't wait for business hours. Here's how 24/7 emergency service works and what to do while waiting.",
    ],
    bodyHtml: `
<h2>What Counts as a Sub-Zero Emergency</h2>
<p>Not every issue needs immediate response. Knowing the difference saves you from after-hours calls when daytime service would have worked, and saves you from waiting until morning when you should call now.</p>

<h3>Real emergencies (call immediately, even at 2 AM)</h3>
<ul>
  <li><strong>Total no-cool</strong> — both compartments warming, food at risk within 4-8 hours</li>
  <li><strong>Active water leak</strong> — water flowing onto floor, risk of structural water damage</li>
  <li><strong>Electrical issue</strong> — burnt smell, sparks, smoke, or breaker tripping repeatedly</li>
  <li><strong>Refrigerant leak</strong> — chemical smell, hissing sound, with refrigerant smell</li>
  <li><strong>E3 sealed-system error code</strong> — pressure issue that can damage compressor if unit keeps running</li>
</ul>

<h3>Same-day but not after-hours emergencies (call when you wake up if it happens at 2 AM)</h3>
<ul>
  <li>Cooling but inefficient — food still cold, just running more</li>
  <li>One compartment warm but the other working</li>
  <li>Slow water leak (drips, not flow)</li>
  <li>Defrost system failure with visible ice but unit still cooling</li>
  <li>Error codes E1, E2, EE, F1, F2 (less urgent than E3)</li>
</ul>

<h3>Schedule for next business day</h3>
<ul>
  <li>Door gasket compromise that you can mitigate by keeping door closed</li>
  <li>Ice maker not making ice (food preservation not at risk)</li>
  <li>Wine cooler temperature drift on a non-collection unit</li>
  <li>Increased compressor cycling without major performance loss</li>
</ul>

<h2>What to Do While Waiting</h2>

<h3>1. Door discipline first</h3>
<p>The single biggest thing that determines whether food survives an extended outage is how often the door opens. Each opening lets warm air in and lets cold air out. With doors closed, a Sub-Zero refrigerator holds safe temps for 6-8 hours; freezer for 24-48 hours. With doors opened every 30 minutes "to check," cut those numbers in half.</p>

<h3>2. Food triage by category</h3>
<p>Move highest-value perishables to coolers with ice if you have them. Priorities:</p>
<ul>
  <li><strong>Highest priority</strong>: raw meats, fish, dairy products, prepared foods with mayo or eggs</li>
  <li><strong>High priority</strong>: cheese, yogurt, milk</li>
  <li><strong>Medium priority</strong>: produce, fruits, vegetables</li>
  <li><strong>Low priority</strong>: condiments, beverages, jarred items</li>
</ul>

<h3>3. Document for insurance</h3>
<p>If you have homeowner's insurance with food-loss coverage, photograph the contents before disposing of anything. Most policies cover $500-1,500 with documentation. This is the cheapest insurance step — 30 seconds of phone photography.</p>

<h3>4. Note symptoms accurately</h3>
<p>What we ask when you call:</p>
<ul>
  <li>Model number (metal plate inside the unit)</li>
  <li>Exact symptoms — what's happening, when did it start, anything that triggered it</li>
  <li>Any error codes on the display</li>
  <li>Sounds (compressor, fans, clicks, anything new)</li>
  <li>Visible water, ice buildup, or smell</li>
</ul>
<p>Accurate symptom reporting cuts diagnostic time on-site by 50%. Means we usually arrive with the right OEM parts on the truck.</p>

<h2>How 24/7 Service Actually Works</h2>

<h3>Same flat rate, no surcharges</h3>
<p>Tuesday at 2 PM, Saturday at 11 PM, Christmas Day — same flat rate. We don't add after-hours surcharges, weekend surcharges, or holiday surcharges. The price you see when you book is the price on your invoice when we leave.</p>

<h3>Dispatch coverage</h3>
<p>Same-day across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a> for emergency calls. Naples, Marco Island, and Florida Keys typically need a half-day buffer for true after-hours.</p>

<h3>OEM parts on the truck</h3>
<p>Our trucks ship with the parts statistically most likely to be needed on a Sub-Zero call: evaporator fan motors, defrost system components, water inlet valves, common door gaskets, control boards for major model lines. Most emergency repairs finish on the first visit.</p>

<h3>Workmanship warranty</h3>
<p>Same workmanship warranty on emergency calls as scheduled service. If the repair fails, we come back at no charge.</p>

<blockquote>"The 'emergency' part of emergency service isn't really about how fast we arrive — it's about minimizing food loss while you wait. Door discipline and food triage matter more than dispatch speed for the first few hours of any outage."</blockquote>

<h2>The Cost of Waiting</h2>
<p>Owners sometimes weigh emergency call cost against waiting until morning. The math usually favors calling immediately:</p>
<ul>
  <li><strong>Emergency call (no surcharge)</strong>: same flat rate as daytime service</li>
  <li><strong>Food loss from extended outage</strong>: $200-1,500+ depending on what's in the unit</li>
  <li><strong>Cascade damage from continued failure</strong>: a failing component left running can cause secondary damage</li>
</ul>
<p>For most owners, calling at 2 AM costs the same as calling at 9 AM, but saves several hundred dollars in food.</p>

<h2>What Counts as "Near Me"</h2>
<p>Our service area: all 7 South Florida counties. Same-day across the three big ones. <a href="/areas-we-service/">See the full service area map</a>.</p>
<p>Call (800) 651-4528 for 24/7 emergency Sub-Zero repair, or <a href="/contact/">request service online</a>.</p>
`,
    faqs: [
      {
        question: "Do you actually have technicians available at 2 AM?",
        answer: "Yes — we maintain on-call coverage 24 hours a day, 365 days a year. After-hours dispatch may take slightly longer than business hours (typical: 60-90 minutes) but is always available. Same flat rate as daytime service. No surcharges.",
      },
      {
        question: "What's the longest a Sub-Zero can hold safe temperatures during an outage?",
        answer: "With doors closed: refrigerator 6-8 hours, freezer 24-48 hours. Both numbers are highly dependent on door discipline. Each opening cuts the window significantly. The 4-hour FDA food safety threshold for refrigerator contents is conservative for Sub-Zero, but is a reasonable baseline.",
      },
      {
        question: "Should I move food to coolers while waiting for repair?",
        answer: "Only if your service window is more than 4 hours away or you've already opened the unit several times. Otherwise, leaving food in the closed Sub-Zero is better — it holds temperature well as long as doors stay closed. Move only if you're sure the wait will exceed safe-temperature window.",
      },
      {
        question: "Will my insurance cover food loss from a refrigerator failure?",
        answer: "Many homeowner's policies cover $500-1,500 in food loss with documentation. Check your specific policy. Photograph the contents before disposal. Save the service repair invoice. File the claim within 30 days. Sub-Zero owners often have higher-value contents (specialty items, wine) — these losses are typically covered if documented.",
      },
      {
        question: "Is calling for repair at 2 AM more expensive?",
        answer: "Not with us. Same flat rate Tuesday afternoon, Saturday at midnight, or Christmas Day. The math on calling immediately almost always favors immediate dispatch — the cost of waiting (food loss, cascade damage) is typically more than any surcharge would have been, and we don't charge surcharges anyway.",
      },
      {
        question: "How fast can you actually get to me for an emergency?",
        answer: "Business hours: typically 60-90 minutes from call to arrival in Miami-Dade, Broward, and Palm Beach. After-hours: 90-120 minutes. Naples and Marco Island: 2-3 hours from call. Florida Keys: extended scheduling. Tell us your address when you call and we'll give you a realistic ETA.",
      },
    ],
  },
  "ice-maker-repair-service-same-day-fixes-near-you": {
    slug: "ice-maker-repair-service-same-day-fixes-near-you",
    title: "Sub-Zero Ice Maker Repair: Same-Day Fixes for the 5 Most Common Problems",
    metaTitle: "Sub-Zero Ice Maker Repair Service Same-Day",
    metaDescription: "9 out of 10 'no ice' calls trace to one of three things. Here's the diagnostic flow, the most common Sub-Zero ice maker problems, and what to check before calling.",
    author: "Daniel Rivera",
    date: "2025-03-01",
    lead: "Nine out of ten 'no ice' calls trace to one of three things — a clogged water line, a stuck water inlet valve, or a frozen-over fill tube. Knowing which one you have determines whether the fix is a $200 service call or whether you can troubleshoot from home. The diagnostic takes about 5 minutes.",
    content: [
      "Sub-Zero ice maker problems usually have specific causes. Here's how to identify what's wrong.",
    ],
    bodyHtml: `
<h2>The 5 Most Common Sub-Zero Ice Maker Problems</h2>

<h3>1. No ice production</h3>
<p>The most common single call. Three causes account for ~90% of "no ice" complaints:</p>
<ul>
  <li><strong>Clogged water line</strong> (40% of cases) — sediment buildup or kink in the supply line. Often a stuck saddle valve at the source.</li>
  <li><strong>Stuck water inlet valve</strong> (35% of cases) — failure to open or partial open from corrosion or sediment.</li>
  <li><strong>Frozen fill tube</strong> (15% of cases) — water that should have been ice freezes inside the fill tube and blocks the cycle.</li>
</ul>
<p>Self-check before calling: verify the saddle valve under the sink is fully open. Verify water filter isn't past its replacement date. Check if "ice maker" switch on the unit is in the on position.</p>
<p>If those check out, call. Most repairs finish in under an hour.</p>

<h3>2. Small or hollow ice cubes</h3>
<p>Indicates restricted water flow during the fill cycle. Two causes:</p>
<ul>
  <li><strong>Filter overdue</strong> (most common) — Sub-Zero water filters need replacement every 6-9 months on South Florida water. Past replacement date, filter restricts flow.</li>
  <li><strong>Inlet valve partially clogged</strong> — sediment or mineral buildup reduces flow.</li>
</ul>
<p>Self-check: replace the water filter. If problem persists 24 hours later, call for inlet valve service.</p>

<h3>3. Cloudy or off-tasting ice</h3>
<p>Almost always a filter issue:</p>
<ul>
  <li><strong>Filter overdue</strong> (~80% of cases) — replacement resolves immediately.</li>
  <li><strong>Contaminated fill tube</strong> — debris in the fill tube transferring to ice. Less common.</li>
  <li><strong>Stagnant water</strong> — if you haven't used the ice maker in weeks, the first batch of new ice may be off. Discard the bin and produce a fresh batch.</li>
</ul>
<p>Self-check: replace water filter. If problem persists for two batches, call.</p>

<h3>4. Ice maker leaking water</h3>
<p>Three sources, distinguishable by water location:</p>
<ul>
  <li><strong>Inlet valve stuck partially open</strong> — water continues to flow when not requested. Visible at the valve location.</li>
  <li><strong>Cracked fill tube</strong> — usually from a freeze event. Water leaks behind the cabinet during fill cycles.</li>
  <li><strong>Damaged ice mold</strong> — hairline cracks from age. Water leaks during the freeze cycle.</li>
</ul>
<p>All three need professional diagnosis. Inlet valve replacement runs $300-450; fill tube $200-350; ice mold $400-600.</p>

<h3>5. Ice maker noise (clicking, grinding, buzzing)</h3>
<p>Different sounds, different causes:</p>
<ul>
  <li><strong>Clicking</strong> — harvest motor binding or harvest mechanism stuck on ice.</li>
  <li><strong>Grinding</strong> — auger motor wear.</li>
  <li><strong>Buzzing</strong> — water inlet valve trying to fill against a clog.</li>
</ul>
<p>None are catastrophic if caught early. Each is worth a service call before the component fully fails.</p>

<h2>Symptom-by-Symptom Quick Reference</h2>

| Symptom | Most Likely Cause | Fix |
|---------|-------------------|-----|
| No ice at all | Clogged water line / inlet valve | Verify supply, replace filter, call if persists |
| Small ice cubes | Filter overdue | Replace filter |
| Cloudy ice | Filter overdue | Replace filter |
| Slow ice production | Filter overdue or inlet valve | Replace filter, call if persists |
| Ice with off taste | Filter overdue | Replace filter |
| Water leaking | Inlet valve, fill tube, or mold | Call for diagnosis |
| Clicking sound | Harvest motor or mechanism | Call for service |
| Grinding sound | Auger motor wear | Call for service |
| Buzzing sound | Inlet valve clog | Call for service |
| Frozen up inside | Sensor or harvest motor | Call for service |
| Error code on unit | Specific fault | Note code, call |

<blockquote>"Half the 'my ice maker is broken' calls end with me telling the customer to replace their water filter. Filter neglect is the single biggest cause of ice maker problems in South Florida — our water profile pushes the replacement interval shorter than the manual suggests."</blockquote>

<h2>The Water Filter Schedule for South Florida</h2>
<p>Sub-Zero recommends 6-12 months for filter replacement. South Florida water profile pushes this to the lower end:</p>
<ul>
  <li><strong>Coral Gables, Pinecrest, Miami suburbs</strong>: 6-9 months</li>
  <li><strong>Coastal cities (Miami Beach, Sunny Isles, Bal Harbour)</strong>: 6-8 months</li>
  <li><strong>Naples and Marco Island</strong>: 6-9 months</li>
  <li><strong>Palm Beach (Boca, Delray, etc.)</strong>: 5-7 months</li>
  <li><strong>High-volume households (4+ people, daily ice production)</strong>: 4-6 months</li>
</ul>
<p>If you can't remember when you last replaced the filter, you're due. <a href="/blog/sub-zero-water-filter-replacement-guide/">See our water filter replacement guide</a> for the step-by-step.</p>

<h2>Models We Service</h2>
<p>Every active and legacy Sub-Zero ice maker:</p>
<ul>
  <li>Built-in refrigerator ice makers (BI series)</li>
  <li>Pro 48 ice maker (built into Pro 48 column)</li>
  <li>Undercounter ice makers (UC-15I indoor, UC-15IO outdoor)</li>
  <li>Designer Series ice makers (DET-IC)</li>
  <li>Legacy 532, 561T, 642, 695 ice makers</li>
</ul>

<h2>Same-Day Service</h2>
<p><a href="/services/icemaker-repair/">See our Sub-Zero ice maker repair page</a> for service details, or call (800) 651-4528. Same-day across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a>.</p>
`,
    faqs: [
      {
        question: "Why is my Sub-Zero ice maker not making ice?",
        answer: "Most likely a clogged water line, stuck water inlet valve, or frozen fill tube — those three account for about 90% of 'no ice' calls. Self-check: verify the saddle valve at the supply is fully open, replace the water filter if past 6-9 months, and verify the ice maker switch is on. If those don't resolve it, the fix is professional service.",
      },
      {
        question: "How often should I replace my Sub-Zero water filter?",
        answer: "Every 6-9 months on South Florida water. Manufacturer guidance is 6-12 months; South Florida water profile pushes most owners to the lower end. Coastal cities slightly more frequent (6-8 months). High-volume households or hard-water areas: 4-6 months. If you can't remember when you last replaced, you're due.",
      },
      {
        question: "Why is my ice cloudy?",
        answer: "Almost always the water filter is past its replacement date. Filter degrades over time and stops removing dissolved solids effectively. Replace filter and run a few batches of fresh ice through the system. If clouding persists, the fill tube or ice mold may need attention — call for service.",
      },
      {
        question: "Should I replace the water filter myself or call?",
        answer: "DIY-friendly. Sub-Zero designed water filters for owner replacement — twist counterclockwise to release, insert new filter, twist clockwise to lock, run 1-2 gallons through to flush. Use genuine Sub-Zero filters; third-party filters cause recognition issues on some models. See our dedicated water filter replacement guide.",
      },
      {
        question: "Why is my Sub-Zero ice maker leaking water?",
        answer: "Three possible sources: stuck water inlet valve (most common), cracked fill tube, or damaged ice mold. Each leaks from a different location. Inlet valve leaks at the back of the unit; fill tube cracks leak behind the cabinet; mold cracks leak during the freeze cycle. All three need professional diagnosis and replacement.",
      },
      {
        question: "How long does ice maker repair take?",
        answer: "Most ice maker repairs finish on the first visit, typically under an hour on-site. We carry water inlet valves, harvest motors, ice level sensors, and ice molds for every active Sub-Zero ice maker line on every truck. Special-order parts (rare for ice makers) may require a follow-up visit.",
      },
    ],
  },
  "wine-cooler-repair-specialists-same-day-service": {
    slug: "wine-cooler-repair-specialists-same-day-service",
    title: "Sub-Zero Wine Cooler Repair: Why Recalibration Matters After Every Service",
    metaTitle: "Sub-Zero Wine Cooler Repair Specialists Same-Day",
    metaDescription: "Wine column humidity drift is the silent killer of fine collections. The diagnostic, the repair, and why recalibration after every service is non-negotiable.",
    author: "Daniel Rivera",
    date: "2025-03-10",
    lead: "Wine columns are the most precision-sensitive units Sub-Zero makes. A two-degree drift over a week ages a vintage faster than the owner ever notices. Most owners only call when temperature drifts visibly — by which point the underlying humidity issue has been damaging corks for months. Recalibration after every service is non-negotiable on our team for exactly this reason.",
    content: [
      "Your wine collection is an investment. When your Sub-Zero wine cooler isn't maintaining the right temperature or humidity, every bottle is at risk.",
    ],
    bodyHtml: `
<h2>Why Wine Coolers Are Different from Refrigerators</h2>
<p>A residential refrigerator targets 38°F with relatively forgiving humidity tolerance. A Sub-Zero wine cooler targets 50-65°F with 50-70% relative humidity — narrow temperature window, tight humidity range. Drift of a few degrees or 10-15% RH that wouldn't matter on a refrigerator can damage wine over weeks or months.</p>
<p>This makes wine cooler service different from refrigerator service. The components are similar but the calibration requirements are stricter. Service that's adequate for a refrigerator can leave a wine cooler operating outside its target window — invisible to the owner, slow death for the wine.</p>

<h2>The 6 Most Common Wine Cooler Problems</h2>

<h3>1. Temperature drifting up</h3>
<p>Most common single call. Causes:</p>
<ul>
  <li>Failed evaporator fan motor (cold isn't being circulated)</li>
  <li>Compressor cycling issue (not enough refrigeration capacity)</li>
  <li>Door seal compromise (warm air leaking in)</li>
  <li>Sensor drift (unit thinks it's at setpoint when actually it's warmer)</li>
</ul>
<p>Diagnostic: pressure check + sensor calibration verification on-site.</p>

<h3>2. Temperature fluctuating between zones</h3>
<p>Dual-zone columns where one zone drifts while the other holds. Usually:</p>
<ul>
  <li>Zone-specific evaporator fan failure</li>
  <li>Damper between zones stuck or failed</li>
  <li>Zone-specific sensor drift</li>
</ul>
<p>Easy to isolate; specific replacement.</p>

<h3>3. Humidity too low (corks drying out)</h3>
<p>The silent killer. Door seal compromised or evaporator running too cold. Cork desiccation is a real loss event — the cork shrinks slightly, gaps form, oxygen enters, wine oxidizes. The owner doesn't notice until they open a bottle that should have been at peak.</p>
<p>Service immediately. <a href="/blog/sub-zero-wine-column-humidity-guide/">See our humidity guide</a> for the full story on why this matters.</p>

<h3>4. Vibration</h3>
<p>Vibration agitates wine and accelerates aging. Causes:</p>
<ul>
  <li>Compressor mounts worn (most common)</li>
  <li>Condenser fan loose or bearing wear</li>
  <li>Unit on uneven flooring</li>
</ul>

<h3>5. Compressor running constantly</h3>
<p>Multiple causes overlap with refrigerator issues:</p>
<ul>
  <li>Door seal failure</li>
  <li>Condenser blocked with dust</li>
  <li>Refrigerant low from slow leak</li>
  <li>Sensor drift causing the unit to think it's not at setpoint</li>
</ul>

<h3>6. Lighting issues</h3>
<p>LED driver failure on Designer columns; bulb on legacy units. Common, easy fix.</p>

<h2>Why Recalibration After Every Service Is Non-Negotiable</h2>
<p>This is the difference between residential service and wine specialist service.</p>
<p>Wine columns can drift their actual cabinet temperature by 2-3°F after any electrical or sealed-system service. The setpoint shows correct on the display, but the actual cabinet temperature is off. The owner doesn't know — there's no visible sign.</p>
<p>2°F drift over a year ages wine roughly 30% faster than intended. Over 5 years, that compounds significantly.</p>
<p>So our wine cooler service ALWAYS includes recalibration. Every visit. Even if the call was for something unrelated like a light bulb. Here's what we actually do:</p>

<h3>1. Pre-service measurement</h3>
<p>Calibrated thermocouple at three shelf positions (top, middle, bottom). Calibrated hygrometer for RH. Document baseline readings.</p>

<h3>2. Sensor verification</h3>
<p>Test the unit's temperature sensor against the calibrated thermocouple. If reads more than 1°F off, replace or compensate at the control board.</p>

<h3>3. Door seal check</h3>
<p>Bill test on every door, visual inspection. Replace if compromised.</p>

<h3>4. Defrost timing assessment</h3>
<p>If defrost is over- or under-cycling, adjust control board parameters. (Wine columns use shorter, less aggressive defrost cycles than refrigerators.)</p>

<h3>5. Re-measurement after stabilization</h3>
<p>Bring unit to setpoint. Wait 30-45 minutes. Re-measure temperature and humidity. Adjust until the cabinet matches the display.</p>

<h3>6. Final adjustment + documentation</h3>
<p>Final readings written on the invoice. You have a record.</p>

<blockquote>"Wine column owners with serious collections expect their unit to maintain conditions to within a degree. Most service shops don't recalibrate unless asked. We don't ask — we just do it. Every visit. The math on a 50-bottle collection of $100/bottle wines tells you why."</blockquote>

<h2>How Often Wine Coolers Need Service</h2>
<p>Based on 30 years of South Florida wine column service:</p>

<h3>Under 5 years old</h3>
<p>Probably no service needed unless you observe symptoms.</p>

<h3>5-10 years old</h3>
<p>Recalibration check every 2 years is reasonable preventive maintenance.</p>

<h3>10-15 years old</h3>
<p>Annual recalibration is wise, especially for serious collections.</p>

<h3>15+ years old</h3>
<p>Annual minimum, plus consider proactive sensor replacement at the same visit.</p>

<h2>Models We Service</h2>
<ul>
  <li>Designer Wine Columns (DET-WC, DEW)</li>
  <li>Built-In Wine Storage (BW-30, BW-44)</li>
  <li>Pro 48 wine column variant</li>
  <li>Undercounter wine coolers (UW-24, UW-15)</li>
  <li>Outdoor wine coolers (UW-15IO)</li>
  <li>Legacy 315W, 424FS, 427R, 700BR</li>
</ul>

<h2>South Florida Wine Cooler Considerations</h2>
<p>Two regional factors affect wine cooler maintenance:</p>

<h3>Hurricane season power events</h3>
<p>Voltage spikes during power restoration damage wine column control boards more easily than refrigerator boards (tighter tolerances). Schedule a post-season check after every major storm.</p>

<h3>Coastal humidity</h3>
<p>South Florida ambient humidity actually helps wine columns to some degree — high ambient RH means the cabinet doesn't have to work as hard to maintain target humidity. But coastal salt-air still corrodes contacts faster than inland properties.</p>

<h2>Same-Day Service</h2>
<p><a href="/services/wine-cooler-repair/">See our Sub-Zero wine cooler repair page</a> for service details, or call (800) 651-4528. Same-day across <a href="/areas-we-service/miami-dade-county/">Miami-Dade</a>, <a href="/areas-we-service/broward-county/">Broward</a>, and <a href="/areas-we-service/palm-beach-county/">Palm Beach</a>.</p>
`,
    faqs: [
      {
        question: "How can I tell if my wine cooler's humidity is wrong?",
        answer: "Most Sub-Zero wine columns don't display humidity on the front panel. Three ways to check: (1) inspect corks on bottles stored long-term — visible drying or pulling away from the bottle indicates low humidity, (2) buy a portable hygrometer ($15-25), place inside for 24 hours, target is 50-70%, (3) schedule a service-level humidity check with calibrated equipment.",
      },
      {
        question: "Why does my wine cooler need recalibration if it shows the right temperature?",
        answer: "The display reads the temperature at the sensor location. After 5+ years, the sensor itself can drift, meaning the display reads correctly but the actual cabinet temperature is different. A 2°F drift over a year ages wine roughly 30% faster — invisible to owners but significant for collections. Recalibration verifies the cabinet matches the display.",
      },
      {
        question: "How often should I have my Sub-Zero wine cooler serviced?",
        answer: "For under-5-year units, only when symptoms appear. For 5-10 year units, recalibration check every 2 years. For 10-15 year units, annual recalibration is wise. For 15+ year units, annual at minimum plus proactive sensor replacement.",
      },
      {
        question: "What does Sub-Zero wine cooler repair cost?",
        answer: "Door gasket: $250-400. Light/LED driver: $200-300. Sensor replacement: $250-400. Compressor or sealed-system service: $1,000-2,000. Recalibration is included free with any other service. We provide written quote on-site before any labor.",
      },
      {
        question: "Should I move my wine before the technician arrives?",
        answer: "For most repairs, no. We bring portable cooling if a longer outage is expected. Tell us when you book if the collection is high-value and we'll prepare accordingly. Most wine cooler repairs finish in under 90 minutes on-site, well within the safe-temperature window for stored wine.",
      },
      {
        question: "Can you fix older Sub-Zero wine cooler models?",
        answer: "Yes. We have parts and service experience for legacy models including the 315W, 424FS, 427R, and 700BR series. Many of these units in South Florida luxury homes are 20+ years old and still running well. We service them with the same diligence as current Designer columns.",
      },
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
            <h3 className="text-lg font-semibold text-[#0B1D33] mb-2">About Sub-Zero Repair Services</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Sub-Zero Repair Services has provided Sub-Zero appliance repair in South Florida since 1994. Our factory-trained technicians offer 24/7 same-day service across 82 cities in 7 counties, using only genuine manufacturer parts with a full warranty on all repairs.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
