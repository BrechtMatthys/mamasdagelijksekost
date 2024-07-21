// replace-yaml-markers.js
module.exports = function(eleventyConfig) {
    // Add a transform to replace |- with |
    eleventyConfig.addTransform('replaceYAMLMarkers', function(content, outputPath) {
      if (outputPath && outputPath.endsWith('.yaml')) {
        // Replace |- with |
        content = content.replace(/^\s*\|-\s*$/gm, '|');
      }
      return content;
    });
  };
  