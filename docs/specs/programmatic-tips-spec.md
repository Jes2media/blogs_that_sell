# Programmatic Tips Content Spec

This spec defines a **separate content line** for scalable, programmatic pages. It does NOT replace or modify the existing long-form editorial style used elsewhere on BlogsThatSell.

---

## Purpose

Generate rankable pages at scale by targeting high-intent "[Copywriting Type] Tips for [Business Type]" queries. These pages serve searchers looking for tactical, actionable advice—not philosophical deep-dives.

**Goal:** Capture organic traffic from specific, repeatable query patterns while maintaining BlogsThatSell quality standards.

---

## Target Audience

- Site builders and marketers implementing copy improvements
- Affiliate SEOs researching content angles
- Copywriters looking for niche-specific guidance
- Founders and operators writing their own marketing

These readers want answers fast. They're not here for theory—they're here to fix something or build something.

---

## Voice & Tone

Same BlogsThatSell DNA, but tighter:

- **Direct:** Get to the point in the first sentence. No "In today's digital landscape..."
- **Opinionated:** Take a stance. "Most [business type] get this wrong" is better than "There are many approaches."
- **Practical:** Every tip must be actionable within 30 minutes or less.
- **Conversion-aware:** Always connect tactics back to business outcomes (leads, calls, sales).
- **A little edgy:** Challenge conventional wisdom. Call out what doesn't work.

**Avoid:**
- Academic hedging ("It could be argued that...")
- Corporate blandness ("Leverage synergies...")
- Fluffy listicle filler ("Communication is key!")
- Fake enthusiasm ("Amazing tips you'll LOVE!")

---

## Content Structure (Fixed)

Every programmatic tips article follows this exact structure:

### 1. Hook (2-3 paragraphs)
Sharp, specific opening. Identify the pain point immediately. No generic intros.

### 2. "The Real Goal of [Copywriting Type] for [Business Type]"
Reframe what success actually looks like. Challenge surface-level thinking.

### 3. "What Most [Business Type] Get Wrong"
2-3 common mistakes with brief explanations. Sets up the tips as the solution.

### 4. "The 9 Tips That Actually Move Conversions"
Numbered list (always 9). Each tip includes:
- **What to do** (clear instruction)
- **Why it works** (brief psychology/logic)
- **Example** (original, specific to the niche—never copied from elsewhere)

Within this section, include a "Quick Wins (15 Minutes or Less)" callout box highlighting 2-3 tips that can be implemented immediately.

### 5. "Do This Next" (Mini Checklist)
5-7 concrete action items. Checkbox format. Prioritized by impact.

### 6. FAQ (5 Questions)
Answer the obvious follow-up questions someone searching this query would have. Match search intent exactly.

### 7. Wrap-up (2-3 sentences)
Confident close. No fluff. Optional CTA to related resource.

---

## Content Constraints

### Required:
- All examples must be **original**—written specifically for this article
- At least **3 do/don't contrasts** showing good vs. bad approaches
- Specific to the niche—generic advice that applies to "any business" fails the bar
- Tactical enough to implement today

### Prohibited:
- Made-up statistics ("Studies show 73% of...")
- Fabricated quotes from real people
- Generic filler tips ("Be authentic!" "Know your audience!")
- Unsubstantiated claims about results
- Copied examples from other sources

---

## Legal Safety: Third-Party Brand Mentions

Any mention of third-party individuals, companies, tools, or brands must follow these guidelines:

- **Editorial/educational context only.** We discuss publicly known methods and approaches for informational purposes.
- **No implied endorsement.** We do not suggest any affiliation with, sponsorship by, or endorsement from any third party.
- **No fabricated quotes or claims.** If referencing someone's public methodology, describe it factually without invented details.
- **When in doubt, write original examples.** It's always safer to create our own illustrative copy than to reference specific external sources.

---

## Internal Linking Guidance

Each programmatic article must include **2-4 internal links** to relevant site pages:

**Link placement:**
- 1 link in the "Real Goal" or "What Most Get Wrong" section (to a related pillar or methodology page)
- 1-2 links within the tips (to framework breakdowns, related niche pages, or tool comparisons)
- 1 link in "Do This Next" or wrap-up (to a conversion page like /free-training)

**Link format:** Use relative URLs (e.g., `/blog/pas-framework-blog-posts`)

**If the right link is unknown:** Use a `TODO: [description]` placeholder for later review.

**Priority link targets:**
- `/free-training` (primary CTA)
- `/blogs-that-sell` (pillar page)
- Related framework posts (PAS, AIDA, etc.)
- Related niche copywriting guides

---

## Frontmatter Requirements

```yaml
---
title: "[Copywriting Type] Tips for [Business Type]: [Outcome-Focused Subtitle]"
description: "[140-155 chars, includes primary keyword and benefit]"
pubDate: YYYY-MM-DD
tags: ["[copywriting type]", "[business type]", "conversion", "marketing"]
programmatic: true
draft: false
---
```

The `programmatic: true` flag identifies this content line for filtering/reporting.

---

## Quality Bar

Before publishing, every programmatic tips article must pass these checks:

- [ ] Sounds like BlogsThatSell (not academic, not corporate)
- [ ] All 9 tips are specific to the niche, not generic
- [ ] All examples are original (not copied)
- [ ] At least 3 do/don't contrasts included
- [ ] "Quick Wins" callout present with 2-3 fast implementations
- [ ] FAQ questions match actual search intent
- [ ] Internal links present (or TODO placeholders noted)
- [ ] No made-up stats, quotes, or unverifiable claims
- [ ] Frontmatter complete and valid

---

*Spec version: 1.0*
*Created: 2025-01-24*
*Applies to: Programmatic tips content only—does not affect long-form editorial guidelines*
