import { defineCollection, z } from "astro:content";

// Note that custom 'slug' is not part of the schema, see
// https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs
const blogCollection = defineCollection({
  type: "content",
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
