const { EleventyRenderPlugin } = require("@11ty/eleventy");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const minify = require("html-minifier").minify;
const yaml = require("js-yaml");
const filters = require("./utils/filters");
const shortcodes = require("./utils/shortcodes");

module.exports = eleventyConfig => {
    eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true
    });

    eleventyConfig.addNunjucksGlobal(
        "mailto",
        "window.atob('bWFpbHRvOmhlbGxvQHJpdGFtLm1l')"
    );

    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(faviconsPlugin, { outputDir: "./public" });

    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addPassthroughCopy({ "src/static": "/" });
    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addWatchTarget("src/projects/");

    eleventyConfig.addFilter("cssmin", filters.cssmin);

    eleventyConfig.addShortcode("font", shortcodes.font);
    eleventyConfig.addShortcode("social", shortcodes.social);
    eleventyConfig.addPairedShortcode("collapse", shortcodes.collapse);

    eleventyConfig.addTransform("htmlminify", (content, outputPath) => {
        if (outputPath && outputPath.endsWith(".html")) {
            return minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
        }

        return content;
    });

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "public"
        }
    };
};
