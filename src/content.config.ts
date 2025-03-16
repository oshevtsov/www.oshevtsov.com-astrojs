import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Note that custom 'slug' is not part of the schema, see
// https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs
const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      published: z.date(),
      updated: z.date(),
      abstract: z.string(),
      cover: image().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
