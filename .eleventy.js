const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add Passthrough Copies
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/scripts/jquery-3.1.1.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/zoekbalk.js');
  
  // Customize the markdown renderer to handle tags
  eleventyConfig.addTransform("addPostTag", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".md")) {
      // Add "post" tag to every Markdown file's front matter
      let frontMatter = content.split("---")[1].trim(); // Extract front matter
      let updatedFrontMatter = frontMatter.replace(/^tags:$/m, "tags:\n  - post"); // Add "post" tag
      return "---\n" + updatedFrontMatter + "\n---\n" + content.split("---").slice(2).join("---").trim(); // Combine modified front matter with content
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
