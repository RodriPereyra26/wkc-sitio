module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("eventos", function(collection) {
    return collection.getFilteredByGlob("src/eventos/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
