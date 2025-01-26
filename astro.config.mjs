import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://ritam.me",
    redirects: {
        "/projects/accelerate/faq-mac": "/projects/accelerate/faq#mac",
        "/projects/accelerate/faq-ios": "/projects/accelerate/faq#ios",
    },
    markdown: {
        shikiConfig: {
            theme: "nord",
        },
    },
    integrations: [mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
});
