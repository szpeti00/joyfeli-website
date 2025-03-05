import fs from "fs";
import path from "path";

export default function (eleventyConfig) {
  // Copy static assets to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/static");

  // Custom filter to get file's last modified timestamp in ISO 8601 format
  eleventyConfig.addFilter("fileLastModified", function (filePath) {
    try {
      const absolutePath = path.join(process.cwd(), filePath);
      const stats = fs.statSync(absolutePath);
      return stats.mtime.toISOString();
    } catch (err) {
      console.error(`Error reading last modified timestamp for ${filePath}:`, err);
      return "";
    }
  });

  
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