const { DateTime } = require("luxon");
const replaceYAMLMarkers = require("./replace-yaml-markers");

module.exports = function(eleventyConfig) {
  // Add Passthrough Copies
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/scripts/jquery-3.1.1.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/zoekbalk.js');

  // Add Markdown-it Library
  const markdownIt = require("markdown-it");
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);


  // eleventyConfig.addFilter("postDate", (dateObj) => {
  //    return DateTime.fromJSDate(dateObj).toLocalString(DateTime.DATE_MED);
  // })

  // https://github.com/11ty/eleventy/issues/411 alfabetisch

  // Use the custom transform
  replaceYAMLMarkers(eleventyConfig);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
