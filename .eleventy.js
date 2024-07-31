const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const sortBy = require('lodash/sortBy');

const env = new nunjucks.Environment();
env.addFilter('filterBy', function(value, key, qualifier, not) {
  if (typeof value !== 'object') {
    return value;
  }
  return Object.keys(value).reduce((result, k) => {
    if (k !== key) {
      result[k] = value[k];
    } else if (typeof value[k] === 'object') {
      result[k] = filterBy(value[k], qualifier, not);
    } else if (not) {
      result[k] = !qualifier(value[k]);
    } else {
      result[k] = qualifier(value[k]);
    }
    return result;
  }, {});
});

module.exports = function(eleventyConfig) {

  // Custom filter to convert newlines to <br> tags
  eleventyConfig.addFilter("nl2p", function(text) {
    return (text || "").replace(/(\r\n|\n|\r){1,2}/g, "<br><br>");
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

  // sort alphabetically
  eleventyConfig.addNunjucksFilter("sortByTitle", function(posts) {
    return sortBy(posts, [post => post.data.title.toLowerCase()]);
  });

  
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
