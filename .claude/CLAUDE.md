# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Blogs That Sell is a direct-response content marketing site teaching freelancers, consultants, and marketers how to write blog posts that convert. Built with Astro, Tailwind CSS, and MDX.

**Target audience:** Freelancers, consultants, coaches, marketing directors—people influenced by Dan Kennedy, Frank Kern, Russell Brunson.

**Monetization:** Course (videos + PDFs), templates, email marketing products.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

### Content System
- **Blog posts:** MDX files in `src/content/blog/` with frontmatter schema defined in `src/content.config.ts`
- **Frontmatter fields:** title, description, pubDate, updatedDate (optional), hero (optional), heroAlt (optional), tags (array), draft (boolean)
- **Static pages:** Astro files in `src/pages/` (about, contact, privacy, terms, etc.)
- **Dynamic routing:** `src/pages/blog/[...slug].astro` renders all blog posts

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

## SEO Content Strategy

**Reference:** `/docs/seo/SEO-CONTENT-PLAN.md`

### Funnel Structure
| Level | Purpose | Word Count | Example Pages |
|-------|---------|------------|---------------|
| TOFU | Traffic + awareness | 1,200-1,800 | Tips, definitions, mistakes |
| MOFU | Nurture + education | 2,000-3,500 | How-to guides, niche strategies, framework breakdowns |
| BOFU | Conversion | Variable | `/get-more-sales`, `/free-training`, `/blog-sales-letter-templates` |

### Internal Linking Rules
- **TOFU posts:** Link to 1 MOFU + 1 Pillar page
- **MOFU posts:** Link to `/get-more-sales`, `/free-training`, `/blogs-that-sell` (pillar), and 1 related MOFU
- **All posts:** End with CTA to `/free-training`

### Content Templates
Page brief templates for TOFU and MOFU content are in the SEO plan document.

## Progress Tracking

- **Next steps:** `/NEXT_STEPS.md` - Current priorities and remaining keyword targets
- **Progress log:** `/PROGRESS_LOG.md` - Completed work history

Update these when completing significant work.

## Available Skills

- `/brunson` - Russell Brunson marketing frameworks (Hook-Story-Offer, Epiphany Bridge, Value Ladder)
- `/copywriter` - Frank Kern & Dan Kennedy direct response copy frameworks
- `/practical-ui` - UI/UX design principles

## Content Creation Workflow

When creating new blog posts:
1. Check `/docs/seo/SEO-CONTENT-PLAN.md` for keyword targets and content archetypes
2. Use the TOFU or MOFU page brief template
3. Create MDX file in `src/content/blog/` with proper frontmatter
4. Follow internal linking rules (TOFU → MOFU + Pillar, MOFU → BOFU)
5. Include CTA to `/free-training` at end of post
6. Update `/NEXT_STEPS.md` if completing a priority keyword
