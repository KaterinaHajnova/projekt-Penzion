 module.exports = function(eleventyConfig) {

    // Výchozí výstupní složka: _site

    // Zkopírovat images / do _site/images
    eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css / do _site/css

    eleventyConfig.addPassthroughCopy("css");

    return {
        templateFormats: ["njk", "html", "md", "liquid"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }

 };