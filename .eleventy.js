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

  // Customize front matter tags
  eleventyConfig.addDataExtension("md", contents => {
    let frontMatter = contents.split("---")[1].trim(); // Extract front matter
    let updatedFrontMatter;

    // Add "post" tag if it doesn't exist
    if (!frontMatter.includes("tags:")) {
      updatedFrontMatter = `---\ntags:\n  - post\n${frontMatter}\n---`;
    } else if (!frontMatter.includes("- post")) {
      updatedFrontMatter = frontMatter.replace("tags:", "tags:\n  - post\n");
    } else {
      updatedFrontMatter = contents; // No modification needed
    }

    return `---\n${updatedFrontMatter}\n---\n${contents.split("---").slice(2).join("---").trim()}`;
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
