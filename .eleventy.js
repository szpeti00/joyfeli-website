export default function (eleventyConfig) {
  // Copy static assets to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/static");
  
  return {
    dir: {
      input: "src",
      includes: "_includes", // where layouts and partials go
      output: "_site"        // output directory for the built site
    },
    templateFormats: [
      "njk", // Nunjucks templates
      "md",  // Markdown
      "html" // HTML files
    ],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};