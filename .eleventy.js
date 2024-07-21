const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

  // Custom filter to convert newlines to <br> tags
  eleventyConfig.addFilter("nl2p", function(text) {
    return (text || "").replace(/(\r\n|\n|\r){1,2}/g, "<br>");
  });


  // Add Passthrough Copies
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/scripts/jquery-3.1.1.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/zoekbalk.js');

  // Configure Markdown-it Library
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Add a Date Filter (if needed)
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocalString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
