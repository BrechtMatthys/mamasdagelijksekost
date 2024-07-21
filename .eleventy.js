const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/scripts/jquery-3.1.1.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/zoekbalk.js');

  // eleventyConfig.addFilter("postDate", (dateObj) => {
  //    return DateTime.fromJSDate(dateObj).toLocalString(DateTime.DATE_MED);
  // })

  // https://github.com/11ty/eleventy/issues/411 alfabetisch

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);


  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}
