module.exports = function(eleventyConfig) {
  
  // Copiar archivos estáticos
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};