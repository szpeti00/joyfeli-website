import { execSync } from 'child_process';
import path from 'path';

export default function (eleventyConfig) {
  // Copy static assets to the output folder
  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/static");

  // Custom filter to get file's last modified timestamp in ISO 8601 format
  eleventyConfig.addFilter("gitLastModified", function (filePath) {
    try {
      const absolutePath = path.join(process.cwd(), filePath);
      // Use git log to get the last commit date for the file
      const gitTimestamp = execSync(`git log -1 --format="%ai" "${absolutePath}"`).toString().trim();
      return new Date(gitTimestamp).toISOString();
    } catch (err) {
      console.error(`Error reading git last modified timestamp for ${filePath}:`, err);
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