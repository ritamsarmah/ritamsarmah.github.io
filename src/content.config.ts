import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const accelerate = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/accelerate" }),
});

export const collections = { accelerate };
