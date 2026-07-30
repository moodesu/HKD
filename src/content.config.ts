// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Fields every place shares, regardless of type
const baseSchema = z.object({
  name: z.string(),
  area: z.string(),
  tags: z.array(z.string()),
  rating: z.number().min(0).max(5),
  address: z.string(),
});

const restaurants = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/restaurants' }),
  schema: baseSchema.extend({
    category: z.string(),
    priceRange: z.enum(['¥', '¥¥', '¥¥¥', '¥¥¥¥']),
    hours: z.string(),
  }),
});

const bars = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bars' }),
  schema: baseSchema.extend({
    category: z.string(), // e.g. "Izakaya", "Craft Beer", "Cocktail Bar"
    priceRange: z.enum(['¥', '¥¥', '¥¥¥', '¥¥¥¥']),
    happyHour: z.string().optional(),
  }),
});

const attractions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/attractions' }),
  schema: baseSchema.extend({
    category: z.string(), // e.g. "Historic Site", "Museum", "Viewpoint"
    openingHours: z.string(),
    entryFee: z.string(), // "Free" or "¥500" etc — kept as string since it varies so much
  }),
});

export const collections = { restaurants, bars, attractions };