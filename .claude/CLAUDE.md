# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Blogs That Sell is a direct-response content marketing site teaching freelancers, consultants, and marketers how to write blog posts that convert. Built with Astro, Tailwind CSS, and MDX.

**Monetization:** Course (videos + PDFs), templates, email marketing products.

## Site Performance Context

This is blogsthatsell.com. Current state:

- **Ranking for:** Named copywriting frameworks and practitioners (position 7-9 for "frank kern mass control", "slap framework", "acca framework", "star chain hook") on ~60 pages with no backlinks
- **What works:** Entity-teardown format (framework/practitioner deep dives)
- **What doesn't work:** "Best X tools" listicles (being removed), programmatic templated pages (being removed)

## Two Audiences

| Audience | Description | Value | Content Focus |
|----------|-------------|-------|---------------|
| **Operators** | Run their own offers, sell via email, $500K-$5M revenue | High value | Diagnostic questions about performance |
| **Copywriters** | Learning the craft, write for clients | High volume, low value | Craft questions about technique |

**Goal of every post:** Capture the email, segmented by which audience they are.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

### Content System
- **Blog posts:** MDX files in `src/content/blog/` with frontmatter schema defined in `src/content.config.ts`
- **Static pages:** Astro files in `src/pages/` (about, contact, privacy, terms, etc.)
- **Dynamic routing:** `src/pages/blog/[...slug].astro` renders all blog posts

### Frontmatter Schema (Generated Posts)

Posts created by `/teardown` or `/operator-post` commands must include:

```yaml
title: "Post Title"
description: "Meta description"
pubDate: YYYY-MM-DD
tags: ["relevant", "tags"]
draft: false
# Extended fields for generated content:
post_type: teardown | operator    # Content archetype
audience: copywriter | operator   # Target segment
batch: "YYYY-MM"                  # Production batch
prompt_version: "1.0"             # Command version used
```

### Layout Hierarchy
```
BaseLayout.astro          # HTML head, meta tags, GA4, header/footer
├── BlogPostLayout.astro  # Blog-specific: breadcrumbs, JSON-LD, author box, related posts, CTAs
└── PageLayout.astro      # Static pages
```

### Key Components
- `HeaderNav.astro` - Site navigation
- `Footer.astro` - Footer with links
- `CTASection.astro` - Conversion call-to-action blocks
- `KitForm.astro` - Email capture (ConvertKit/Kit integration)
- `RelatedPosts.astro` - Tag-based related post suggestions
- `AuthorBox.astro` - Author info on blog posts

### Configuration
- `src/config/site.ts` - Site name, URL, Kit form UID, social links
- `astro.config.mjs` - Astro plugins (MDX, sitemap, Tailwind), site URL, trailing slash settings
- `tailwind.config.mjs` - Custom colors (primary blue, accent amber), typography plugin config

### Styling
- Global CSS: `src/styles/global.css`
- Utility classes: `.container-narrow`, `.container-wide`, `.btn-primary`, `.btn-secondary`, `.btn-accent`
- Typography: Uses `@tailwindcss/typography` for prose styling

## Non-Negotiable Quality Rules

Every generated post MUST follow these rules. No exceptions.

### 1. "When NOT to use this" Section
This is the single differentiator versus competing pages. **Never omit it.** Structure:
- 2-4 specific scenarios where this framework/technique fails
- Explain *why* it fails in each case
- Suggest what to use instead

### 2. Worked Example with Real Copy
Every post includes a complete, concrete example with actual copy—not descriptions of what copy would say.
- Show the actual headline, bullet, email, or ad
- If the example cannot be written concretely, insert: `<!-- JOHN: worked example needed -->` and stop

### 3. No Listicles or Templates
- No "best tools" roundups
- No "best X for Y" listicles
- No templated location/variant pages
- No "10 tips" format

### 4. URL Convention
URLs never use trailing slashes. Match existing site convention exactly.

## Email Capture Strategy

Insert the segmented capture block inline:
1. **After the first major section** (not in sidebar)
2. **Before the conclusion**

The block asks one segmentation question:
> "Are you writing copy for clients, or running your own offers?"

This segments subscribers into copywriter vs operator audiences.

## Content Commands

### `/teardown <subject>`
Framework or practitioner teardown for copywriters. 1,200-1,800 words.

**Structure:**
1. What it is
2. Who originated it
3. How it works (step-by-step)
4. Worked example with actual copy
5. When NOT to use it
6. Related frameworks (internal links)

### `/operator-post <topic>`
Diagnostic post for operators about performance questions. 1,200-2,000 words.

**Examples:**
- Why welcome sequences underperform
- Abandoned cart benchmarks for coaches
- What monthly revenue a list of a given size should produce
- Email frequency vs unsubscribe rates

Include specific numbers and benchmarks. If a benchmark is needed but unknown, insert: `<!-- JOHN: benchmark needed -->`

### `/cohort-report <path-to-gsc-export.zip>`
Reads Search Console export, joins to post frontmatter by URL slug, reports:
- Average position, impressions, clicks grouped by batch and prompt_version
- Flags posts below position 40 after 60+ days live as prune candidates

Does not delete anything.

## Available Skills

- `/brunson` - Russell Brunson marketing frameworks (Hook-Story-Offer, Epiphany Bridge, Value Ladder)
- `/copywriter` - Frank Kern & Dan Kennedy direct response copy frameworks
- `/practical-ui` - UI/UX design principles

## Internal Linking Rules

- **Teardowns:** Link to 1 related MOFU post + `/blogs-that-sell` pillar
- **Operator posts:** Link to `/get-more-sales`, `/free-training`, and 1 related post
- **All posts:** End with CTA to `/free-training`

## Progress Tracking

- **Next steps:** `/NEXT_STEPS.md` - Current priorities and remaining keyword targets
- **Progress log:** `/PROGRESS_LOG.md` - Completed work history

Update these when completing significant work.
