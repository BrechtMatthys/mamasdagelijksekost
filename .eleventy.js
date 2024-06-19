const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add Passthrough Copies
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/scripts/jquery-3.1.1.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/zoekbalk.js');

  // Add Transform for Tags
  eleventyConfig.addCollection("blogPosts", function(collection) {
    return collection.getFilteredByGlob("src/blog/**/*.md").map(function(item) {
      // Add "post" tag to every item's tags array
      item.data.tags = ["post"].concat(item.data.tags);
      return item;
    });
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
