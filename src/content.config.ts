import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseFields = (image: any) => ({
  name: z.string(),
  area: z.string(),
  tags: z.array(z.string()),
  rating: z.number().min(0).max(5),
  address: z.string(),
  image: image().optional(),
});

const restaurants = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/restaurants',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) => z.object({
    ...baseFields(image),
    category: z.string(),
    priceRange: z.enum(['¥', '¥¥', '¥¥¥', '¥¥¥¥']),
    hours: z.string(),
  }),
});

const bars = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/bars',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) => z.object({
    ...baseFields(image),
    category: z.string(),
    priceRange: z.enum(['¥', '¥¥', '¥¥¥', '¥¥¥¥']),
    happyHour: z.string().optional(),
  }),
});

const attractions = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/attractions',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) => z.object({
    ...baseFields(image),
    category: z.string(),
    openingHours: z.string(),
    entryFee: z.string(),
  }),
});

export const collections = { restaurants, bars, attractions };