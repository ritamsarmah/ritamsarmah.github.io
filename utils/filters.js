const CleanCSS = require("clean-css");

module.exports = {
    cssmin: code => {
        return new CleanCSS({ level: 2 }).minify(code).styles;
    }
};
