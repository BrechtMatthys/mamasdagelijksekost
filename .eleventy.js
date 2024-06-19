const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add Passthrough Copies
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/scripts/jquery-3.1.1.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/zoekbalk.js');

  // Add Filter for Date Formatting (if needed)
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocalString(DateTime.DATE_MED);
  });

  // Add Transform to Append 'post' Tag
  eleventyConfig.addTransform("appendPostTag", function(content, outputPath) {
    if(outputPath && outputPath.endsWith(".html")) {
      let frontMatter = this.frontMatter;
      if(frontMatter.tags && !frontMatter.tags.includes("post")) {
        frontMatter.tags.push("post");
      }
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}
