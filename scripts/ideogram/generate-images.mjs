#!/usr/bin/env node

/**
 * Ideogram Image Generator for blogsthatsell.com
 *
 * Generates website images using the Ideogram.ai v3 API.
 *
 * Usage:
 *   node scripts/ideogram/generate-images.mjs
 *   node scripts/ideogram/generate-images.mjs --force
 *   node scripts/ideogram/generate-images.mjs --filter hero
 *   node scripts/ideogram/generate-images.mjs --filter section --force
 *
 * Environment:
 *   IDEOGRAM_API_KEY - Your Ideogram API key (required)
 *   Can be set via .env file in project root or as environment variable
 */

import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  apiEndpoint: 'https://api.ideogram.ai/v1/ideogram-v3/generate',
  manifestPath: path.join(__dirname, 'image-manifest.json'),
  outputDir: path.join(__dirname, '../../public/images'),
  aspectRatio: '16x9',
  styleType: 'REALISTIC',
  renderingSpeed: 'BALANCED',
};

// Negative prompt to prevent text artifacts
const NEGATIVE_PROMPT = 'text, words, letters, typography, numbers, symbols, logos, labels, UI, interface, charts, graphs, watermarks, captions, titles, headings, signatures, stamps, badges, icons with text, buttons, menus, distorted shapes';

/**
 * Build the full prompt from a concept
 */
function buildPrompt(concept) {
  return `Editorial photography style: ${concept}. Professional lighting, cinematic composition, high-end aesthetic. Photorealistic, magazine quality. No text, no words, no letters, no numbers, no symbols, no logos, no UI elements, no readable content on screens or paper.`;
}

/**
 * Check if a file exists
 */
async function fileExists(filepath) {
  try {
    await fs.access(filepath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generate an image using the Ideogram API
 */
async function generateImage(prompt, apiKey) {
  const response = await fetch(CONFIG.apiEndpoint, {
    method: 'POST',
    headers: {
      'Api-Key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      negative_prompt: NEGATIVE_PROMPT,
      aspect_ratio: CONFIG.aspectRatio,
      style_type: CONFIG.styleType,
      rendering_speed: CONFIG.renderingSpeed,
      magic_prompt: 'ON',
      num_images: 1,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API error ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  if (!data.data || data.data.length === 0) {
    throw new Error('No image data in response');
  }

  return data.data[0];
}

/**
 * Download an image from URL and save locally
 */
async function downloadImage(url, outputPath) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(outputPath, buffer);
}

/**
 * Parse command line arguments
 */
function parseArgs(args) {
  const options = {
    force: false,
    filter: null,
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--force') {
      options.force = true;
    } else if (args[i] === '--filter' && args[i + 1]) {
      options.filter = args[i + 1];
      i++;
    }
  }

  return options;
}

/**
 * Main execution
 */
async function main() {
  console.log('\n🎨 Ideogram Image Generator for blogsthatsell.com\n');
  console.log('─'.repeat(50));

  // Check for API key
  const apiKey = process.env.IDEOGRAM_API_KEY;
  if (!apiKey) {
    console.error('\n❌ Error: IDEOGRAM_API_KEY is required');
    console.error('   Add it to .env file: IDEOGRAM_API_KEY=your_key_here');
    console.error('   Or set it with: export IDEOGRAM_API_KEY=your_key_here\n');
    process.exit(1);
  }

  // Parse arguments
  const args = parseArgs(process.argv.slice(2));

  if (args.force) {
    console.log('⚠️  Force mode: regenerating all images');
  }
  if (args.filter) {
    console.log(`🔍 Filter: only processing "${args.filter}" category`);
  }
  console.log('');

  // Load manifest
  let manifest;
  try {
    const manifestContent = await fs.readFile(CONFIG.manifestPath, 'utf-8');
    manifest = JSON.parse(manifestContent);
  } catch (error) {
    console.error(`❌ Error loading manifest: ${error.message}`);
    process.exit(1);
  }

  // Ensure output directory exists
  await fs.mkdir(CONFIG.outputDir, { recursive: true });

  // Filter images if requested
  let images = manifest.images;
  if (args.filter) {
    images = images.filter(img => img.category === args.filter);
    if (images.length === 0) {
      console.error(`❌ No images found with category "${args.filter}"`);
      process.exit(1);
    }
  }

  // Track results
  const results = {
    generated: [],
    skipped: [],
    errors: [],
  };

  // Process each image
  for (const image of images) {
    const outputPath = path.join(CONFIG.outputDir, `${image.slug}.png`);
    const exists = await fileExists(outputPath);

    console.log(`📸 ${image.slug}`);
    console.log(`   Category: ${image.category}`);
    console.log(`   Concept: "${image.concept}"`);

    // Skip if exists and not forcing
    if (exists && !args.force) {
      console.log(`   ⏭️  Skipped (already exists)\n`);
      results.skipped.push(image.slug);
      continue;
    }

    // Generate the image
    try {
      const prompt = buildPrompt(image.concept);
      console.log(`   ⏳ Generating...`);

      const imageData = await generateImage(prompt, apiKey);

      console.log(`   ⬇️  Downloading...`);
      await downloadImage(imageData.url, outputPath);

      console.log(`   ✅ Saved to ${path.relative(process.cwd(), outputPath)}\n`);
      results.generated.push(image.slug);

    } catch (error) {
      console.log(`   ❌ Error: ${error.message}\n`);
      results.errors.push({ slug: image.slug, error: error.message });
    }

    // Small delay between requests to be nice to the API
    if (images.indexOf(image) < images.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Print summary
  console.log('─'.repeat(50));
  console.log('\n📊 Summary\n');
  console.log(`   ✅ Generated: ${results.generated.length}`);
  console.log(`   ⏭️  Skipped:   ${results.skipped.length}`);
  console.log(`   ❌ Errors:    ${results.errors.length}`);

  if (results.generated.length > 0) {
    console.log('\n   Generated images:');
    results.generated.forEach(slug => console.log(`   - ${slug}.png`));
  }

  if (results.errors.length > 0) {
    console.log('\n   Errors:');
    results.errors.forEach(({ slug, error }) => {
      console.log(`   - ${slug}: ${error}`);
    });
  }

  console.log('\n');
}

// Run
main().catch(error => {
  console.error(`\n❌ Fatal error: ${error.message}\n`);
  process.exit(1);
});
