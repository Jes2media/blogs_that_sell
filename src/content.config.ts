import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    programmatic: z.boolean().default(false),
    // Extended fields for generated content (from /teardown and /operator-post commands)
    post_type: z.enum(['teardown', 'operator']).optional(),
    audience: z.enum(['copywriter', 'operator']).optional(),
    batch: z.string().optional(),         // Format: YYYY-MM
    prompt_version: z.string().optional(), // Command version used
  }),
});

export const collections = { blog };
