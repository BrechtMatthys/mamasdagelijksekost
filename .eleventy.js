const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add Passthrough Copies
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/scripts/jquery-3.1.1.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/zoekbalk.js');

  // Uncomment if you need to use postDate filter
  // eleventyConfig.addFilter("postDate", (dateObj) => {
  //   return DateTime.fromJSDate(dateObj).toLocalString(DateTime.DATE_MED);
  // });

  // Modify data before it's passed to templates
  eleventyConfig.addCollection("blogPosts", function(collection) {
    return collection.getFilteredByGlob("src/blog/**/*.md").map(function(item) {
      if (item.data.tags && !item.data.tags.includes("post")) {
        item.data.tags.unshift("post"); // Add "post" tag at the beginning
      } else {
        item.data.tags = ["post"]; // Ensure "post" tag exists if tags are empty
      }
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
