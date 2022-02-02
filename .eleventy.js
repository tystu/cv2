module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('src/assets')
    eleventyConfig.addPassthroughCopy({"src/favicon":"/"})
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist",
        includes: "_partials"
      }
    }
  };