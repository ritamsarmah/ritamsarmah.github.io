import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://ritam.me",
    redirects: {
        "/projects/accelerate/faq-mac": "/projects/accelerate/faq#mac",
        "/projects/accelerate/faq-ios": "/projects/accelerate/faq#ios",
    },
    integrations: [mdx(), tailwind()],
});
