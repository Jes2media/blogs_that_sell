---
name: operator-post
description: Write a diagnostic post for operators about email/funnel performance questions. For people running $500K-$5M businesses who sell via email.
---

# Operator Diagnostic Post

You are writing a diagnostic post for blogsthatsell.com targeting **operators**—people running their own offers, selling via email, typically $500K-$5M in revenue.

**Key distinction:** Operators ask diagnostic questions about *performance*, not craft questions about *technique*. They don't ask "how do I write a welcome sequence." They ask "why is my welcome sequence underperforming?"

**Word count:** 1,200-2,000 words.
**Prompt version:** 1.0

## Your Task

Write a diagnostic post on: **$ARGUMENTS**

## Operator Mindset

Operators think in terms of:
- Benchmarks (what should my numbers be?)
- Diagnostics (why isn't this working?)
- ROI (is this worth my time?)
- Systems (how do I fix this without doing it myself?)

They do NOT think in terms of:
- "How to write" (they hire for this or have templates)
- "Best practices" (too generic)
- "Tips and tricks" (they want frameworks, not tactics)

## Required Structure

### 1. The Performance Question
Open with the specific question operators are asking. Be direct:
- "Your welcome sequence is converting at 2%. Industry average is [X]%. Here's why."
- "You have 10,000 subscribers but only generate $5,000/month. The math says it should be $[X]."

State the benchmark immediately. Don't build up to it.

### 2. The Diagnostic Framework
Provide a systematic way to identify the problem. Structure as a decision tree or checklist:
- If symptom A → likely cause X
- If symptom B → likely cause Y

Be specific. "Check your open rates" is useless. "If your open rate is below [X]% on a warm list, the problem is [specific cause]" is useful.

### 3. Benchmarks and Numbers
**Include specific numbers.** This is what operators want.

Where benchmarks are known, state them clearly:
- "A healthy email list generates $1-2 per subscriber per month"
- "Welcome sequence open rates should exceed 50% for days 1-3"
- "Abandoned cart sequences recover 5-15% of abandoned carts"

**If a benchmark is needed but you don't have reliable data, insert:**
```
{/* JOHN: benchmark needed - [what benchmark is missing] */}
```

Do not invent numbers. Stop and mark what's needed.

**MDX syntax note:** Use `{/* comment */}` not `<!-- comment -->` for comments in MDX files. Also avoid `<` and `>` symbols in table cells (use "Under" and "Over" instead).

### 4. The Fix (Prioritized)
Give operators a prioritized action plan:
1. Highest-impact fix first
2. Second priority
3. Third if needed

Each fix should be:
- Specific (not "improve your copy")
- Measurable (how will they know it worked?)
- Delegatable (can they hand this to a VA or copywriter?)

### 5. When This Isn't the Problem
**CRITICAL: Include this section.** Sometimes the diagnostic question has a different root cause.

Examples:
- "If your list is under 1,000, your problem isn't the welcome sequence—it's traffic"
- "If you're getting high opens but no clicks, this isn't a deliverability issue—it's a copy/offer problem"
- "If revenue per subscriber is high but total revenue is low, stop optimizing sequences and focus on list growth"

### 6. Related Posts
Link to 1-2 related posts. For operator content, link to:
- `/get-more-sales` (BOFU)
- `/free-training` (BOFU)
- Related diagnostic posts if they exist

## Email Capture Blocks

Insert two segmented capture blocks:

**After the diagnostic framework section:**
```
---

**Running your own offers?** These diagnostics are built for operators, not copywriters. [Get the free training](/free-training) designed for people who sell via email—not people who write for clients.

---
```

**Before the conclusion:**
```
---

**Are you writing copy for clients, or running your own offers?** If you're an operator focused on revenue, [get the diagnostic framework](/free-training) that matches your business model.

---
```

## Frontmatter Template

```yaml
---
title: "[Diagnostic question framed as insight/answer]"
description: "[What benchmark/diagnostic this post addresses - under 160 chars]"
pubDate: [TODAY'S DATE in YYYY-MM-DD format]
tags: ["email-marketing", "conversion", "diagnostics", "[specific-topic]"]
draft: false
post_type: operator
audience: operator
batch: "[CURRENT YEAR-MONTH in YYYY-MM format]"
prompt_version: "1.0"
---
```

## Quality Checklist

Before finishing, verify:
- [ ] Opens with specific performance question + benchmark
- [ ] Diagnostic framework is systematic (decision tree/checklist format)
- [ ] Includes specific numbers and benchmarks
- [ ] Any missing benchmarks marked with `<!-- JOHN: benchmark needed -->`
- [ ] Fix section is prioritized and actionable
- [ ] "When this isn't the problem" section included
- [ ] Two inline email capture blocks placed correctly
- [ ] Links to `/get-more-sales` and `/free-training`
- [ ] Ends with CTA to `/free-training`
- [ ] URL slug uses hyphens, no trailing slash
- [ ] Frontmatter includes all extended fields (post_type, audience, batch, prompt_version)

## Tone and Style

- Direct, no warming up
- Numbers-focused
- Respect their time—they're running a business
- Assume competence (don't explain basics)
- Write like a consultant talking to a peer

## Example Topics

Good operator topics:
- Why welcome sequences underperform (with benchmarks)
- What revenue should a 10K list produce (with calculation)
- Email frequency vs unsubscribe rates (with data)
- Abandoned cart benchmarks for coaches/course creators
- When to kill an email sequence vs optimize it
- How many emails before a launch is too many
- Reactivation sequence ROI: when it's worth it

Bad topics (these are copywriter questions):
- How to write a welcome sequence
- Best email templates
- How to write subject lines

## What NOT to Write

- No "how to write" instructions (operators hire for this)
- No generic best practices
- No invented statistics—mark unknowns clearly
- No listicles or tips format
- No advice without numbers to back it up
