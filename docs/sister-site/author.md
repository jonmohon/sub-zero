# Sister Site — Author / Voice Profile

## Daniel Rivera, Senior Service Technician

**Use this name on every blog post, every author byline, every quote, every author bio block on the sister site.** Do NOT use "Marvin Schuster" anywhere on sub-zerorepairservices.com. Marvin is the public face of Five Star — the two sites must have visibly distinct author entities.

---

## Author Bio (full version — for /about/, /technicians/, blog post bottom)

```
Daniel Rivera leads dockside service for SubZero Repair Co. and handles the most complex sealed-system diagnostics across Miami-Dade and Broward. He has worked exclusively on premium built-in refrigeration for fifteen years, with deep familiarity for both the active Designer and Pro 48 lines and the legacy 532, 632, and 690 series still running across South Florida. Daniel writes most of the technical guides and service walkthroughs on this site.
```

## Author Bio (compact version — for blog post sidebars)

```
Senior Service Technician · 15+ years on Sub-Zero
Specialist in marine refrigeration and sealed-system diagnostics
```

## Author Specialties (for Person schema knowsAbout)

```
- Sub-Zero sealed-system diagnostics
- Marine refrigeration (dockside)
- Wine column calibration
- Legacy Sub-Zero (532, 632, 690 series)
```

## Person Schema (for blog post Article schema author field)

```json
{
  "@type": "Person",
  "name": "Daniel Rivera",
  "jobTitle": "Senior Service Technician",
  "description": "Daniel Rivera leads dockside service for SubZero Repair Co. and handles complex sealed-system diagnostics across South Florida. Fifteen years on Sub-Zero, Wolf, and Cove product lines.",
  "url": "https://sub-zerorepairservices.com/technicians/#daniel-rivera",
  "worksFor": {
    "@id": "https://sub-zerorepairservices.com/#business"
  },
  "knowsAbout": [
    "Sub-Zero sealed-system diagnostics",
    "Marine refrigeration",
    "Wine column calibration",
    "Legacy Sub-Zero refrigeration"
  ]
}
```

---

## Voice Profile — How Daniel "Sounds" in Copy

This is critical for differentiation. Marvin Schuster's voice on Five Star is **measured, instructive, slightly clinical**. Daniel's voice on sub-zerorepairservices.com should be **direct, slightly more colloquial, technician-confident**.

### Sentence patterns to use

- Short declarative sentences. 12-18 words average.
- First-person observations: "Nine times out of ten...", "What I see most is...", "The first hour of a Sub Zero diagnostic..."
- Specific component names where possible ("evaporator fan motor" not "fan")
- Specific failure rates and time estimates ("usually under 30 minutes", "single visit on most calls")
- Avoid passive voice
- Avoid "industry-leading", "your trusted partner", "unparalleled service" (Marvin/Five Star speak)

### Sentence patterns to AVOID (these are Marvin's voice on Five Star)

- "Sub-Zero refrigerators are precision instruments designed to maintain..."
- "Our certified technicians provide expert repair service..."
- "We pride ourselves on delivering the highest-quality..."
- "Whether you're dealing with X or Y, our team has the expertise..."

### Daniel's quote bank (for use across the sister site)

These are pre-written quotes that can be dropped into AnswerBlocks, blog posts, or testimonial-adjacent content. All written in Daniel's voice.

**On diagnostics generally:**
> "We chose specialist-only years ago because Sub-Zero sealed systems don't forgive a generalist. The first hour of a Sub Zero diagnostic is where the bill is decided — get that hour right and the rest of the job follows."

**On refrigerator failures:**
> "When a Sub-Zero stops cooling, the customer assumes compressor. Nine times out of ten it's the evaporator fan, the defrost board, or a sealed-system restriction — and the diagnostic time to tell the difference is the difference between a $400 repair and a $2,000 quote."

**On freezer columns:**
> "Freezer columns are the diagnostic that catches generalists out. The temperature reads normal, the food's thawing, and the compressor sounds fine. The answer is almost always the evaporator fan — but you need to know where to listen."

**On ice makers:**
> "Nine out of ten 'no ice' calls are a clogged water line, a stuck water inlet valve, or a frozen-over fill tube. Catching that in the first ten minutes saves the customer a $500 misdiagnosis."

**On wine columns:**
> "Wine columns are the precision instrument of the Sub-Zero lineup. A two-degree drift over a week ages a vintage faster than the owner ever notices. Recalibrating after every service is non-negotiable on our team."

**On marine refrigeration:**
> "Marine units fail differently than residential. Salt air corrodes contacts and fittings the manuals never mention. Constant vibration loosens lines that would never move on a kitchen install. You learn to spot it from feet away — and you bring different parts than you'd carry to a Pinecrest house call."

**On legacy units:**
> "Bring me a 1996 532 still on its original compressor and I'll tell you in five minutes whether it's worth saving. Half the time, yes — those legacy units were over-engineered."

**On sealed-system work:**
> "Sealed-system repair is where most service shops bow out. We don't. The training, the gauges, the EPA cert, the part-source relationships — we maintain all of it because half our calls touch the sealed side eventually."

**On error codes:**
> "Modern Sub-Zero units self-diagnose better than most appliances ever will. We arrive with the service bulletin for your error code already pulled — saves you 20 minutes of explanation and us 20 minutes of looking it up."

---

## Author Profile Page (for /technicians/ on sister site)

If the sister site builds a /technicians/ page (recommended), Daniel is the only entry initially. Other team members can be added later.

```markdown
## Daniel Rivera
**Senior Service Technician · 15+ years on Sub-Zero**

Daniel leads dockside service for SubZero Repair Co. and handles the most complex sealed-system diagnostics across Miami-Dade and Broward. He has worked exclusively on premium built-in refrigeration since 2010, with deep familiarity for both the active Designer and Pro 48 lines and the legacy 532, 632, and 690 series still running across South Florida. Daniel writes most of the technical guides and service walkthroughs on this site.

**Specialties:**
- Sub-Zero sealed-system diagnostics
- Marine refrigeration (dockside)
- Wine column calibration
- Legacy Sub-Zero (532, 632, 690 series)
```

---

## Important — Do Not Cross-Reference

- Do NOT mention Marvin Schuster anywhere on the sister site
- Do NOT mention "Five Star Appliance Repair Pros" anywhere on the sister site
- Do NOT link from sister site to fivestarappliancerepairpros.com (or vice versa) without `rel="nofollow"`
- Do NOT use the same "About Sub-Zero Repair Company" boilerplate block that appears at the bottom of Five Star's blog posts
