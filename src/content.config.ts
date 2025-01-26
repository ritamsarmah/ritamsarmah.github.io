import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const accelerate = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/accelerate" }),
});

const posts = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/pages/posts" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
    }),
});

export const collections = { accelerate, posts };
