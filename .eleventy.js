const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/scripts/jquery-3.1.1.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/zoekbalk.js');

<<<<<<< HEAD
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);
=======
  // eleventyConfig.addFilter("postDate", (dateObj) => {
  //    return DateTime.fromJSDate(dateObj).toLocalString(DateTime.DATE_MED);
  // })

  // https://github.com/11ty/eleventy/issues/411 alfabetisch
>>>>>>> parent of ee8dfb9 (markdown-it?)

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}
