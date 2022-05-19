const https = require("https");

module.exports = {
    // Embed Google fonts
    font: fonts => {
        let query = Object.entries(fonts)
            .map(([font, weights]) => {
                font = font.replace(" ", "+");
                weights = weights.join(";");
                return `family=${font}:wght@${weights}`;
            })
            .join("&");

        let url = `https://fonts.googleapis.com/css2?${query}&display=swap`;

        return (
            `<link rel="preconnect" href="https://fonts.googleapis.com">` +
            `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
            `<link rel="preload" as="style" href="${url}">` +
            `<link rel="stylesheet" href="${url}">`
        );
    },

    // Add stylesheet given a tag
    style: tag => `<link rel="stylesheet" href="/styles/${tag}.css" />`,

    // NOTE: Must use single quotes for link in template for social
    social: (name, link) =>
        `<button class="social-btn" onclick="window.location.href = ${link};"><img src="images/${name}.svg"></button>`,

    collapse: (content, title) =>
        `<details><summary>${title}</summary>${content}</details>`
};
