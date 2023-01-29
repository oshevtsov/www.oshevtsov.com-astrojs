import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.date(),
    updated: z.date(),
    abstract: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
