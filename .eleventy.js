const markdownIt = require("markdown-it");
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
};

module.exports = function(eleventyConfig) {
  let markdownLibrary = markdownIt(markdownItOptions);
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/scripts/jquery-3.1.1.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/zoekbalk.js');

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
