# Sister Site — City Page Template

This is the reusable structure for every city page on sub-zerorepairservices.com. Use it for the 6 fully-written cities in this folder, the 14 brief cities, and any new cities added later.

**URL pattern:** `/sub-zero-repair-{city-slug}-fl/` (e.g. `/sub-zero-repair-coral-gables-fl/`)
**Title pattern:** `Sub-Zero Repair {City} FL — Same-Day Service`
**Description pattern:** `Sub-Zero appliance repair in {City}, FL. {Specific neighborhood/building references}. Same-day service. OEM parts on every truck. {Author/business name}.`

---

## Section structure (in order)

1. **Hero** — H1 + subhead with city name + 2 CTAs
2. **Direct Answer Block** (Princeton GEO) — question, 40-60 word answer, 4 stats, Daniel quote, sources
3. **City context paragraph** — what's distinctive about Sub-Zero ownership in this city
4. **Neighborhoods we cover** — bullet list of 5-10 specific neighborhoods/buildings
5. **Common service patterns in this city** — what Daniel actually sees here
6. **5 city-specific FAQs** — get FAQPage schema
7. **Service area map** — county + neighboring city links
8. **CTA close**

---

## Required city-specific data (fill in before publishing)

For each city, the page must include AT LEAST these specifics. Generic city descriptions kill the differentiation.

### Geography / culture
- 3-5 named neighborhoods or sub-areas (not just "downtown")
- 2-3 named landmarks, marinas, or major buildings (Sub-Zero installs cluster in specific buildings)
- Distance/drive context to a major reference point (e.g. "15 minutes east of Brickell")

### Sub-Zero installation patterns
- Building types where Sub-Zero is common (single-family, mid-rise condo, high-rise tower, gated waterfront)
- Typical install age range (e.g. "Coral Gables: 1990s through 2010s installs dominate")
- Which Sub-Zero lines are most common locally
- Any city-specific failure pattern (humidity, salt air, hard water, condenser dust)

### Service-call texture
- Typical scheduling notes (HOA approval, doorman buildings, gated communities, freight elevator coordination)
- Average response time we hit in this city
- Whether marine work is a meaningful share

### City-specific FAQs (write 5)
- Always include: "How fast can you get to {City}?"
- Always include: "Do you cover the high-rise/condo buildings in {City}?" (when applicable)
- Always include: "What Sub-Zero models are most common in {City}?" (Daniel can answer specifically)
- 2 more pulled from the local context

---

## Standard sections (reusable across all cities)

### Hero CTAs
```
Primary: Book Service in {City}
Secondary: Call (800) 651-4528
```

### Service area map (close-of-page block)
```
{City} sits in {County} County. We also cover:
- {Adjacent city 1}
- {Adjacent city 2}
- {Adjacent city 3}
- {Adjacent city 4}

→ View our full {County} County coverage
```

### Closing CTA
```
H2: Same-Day Sub-Zero Service in {City}
Lead: Tell us the model and the symptom. We'll have a technician at your door today.
Primary CTA: Book {City} Service Now
Secondary CTA: Call (800) 651-4528
```

---

## Schema (per city page)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sub-zerorepairservices.com/#business",
  "name": "SubZero Repair Co.",
  "telephone": "+1-800-651-4528",
  "areaServed": {
    "@type": "City",
    "name": "{City}",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "{County} County, Florida"
    }
  }
}
```

Plus FAQPage schema for the 5 city FAQs.
Plus BreadcrumbList: Home → Service Areas → {County} → {City}.

---

## Voice reminder

This is **Daniel's voice**. Short sentences. Specific failure patterns. First-person observations from his service experience in this specific city. Avoid generic "we proudly serve" copy — that's Marvin's voice on Five Star.

Bad: *"We proudly serve the residents of Coral Gables with expert Sub-Zero appliance repair."*

Good: *"Most of my Coral Gables calls are pre-2010 Built-In and Pro 48 units in single-family homes off Old Cutler — and the failure pattern there is dust-blocked condensers from yard service stirring up debris."*
