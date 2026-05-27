module.exports = function(eleventyConfig) {
  
  // Copiar archivos estáticos
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");
  
  // Crear colecciones
  eleventyConfig.addCollection("eventos", function(collection) {
    return collection.getFilteredByGlob("src/eventos/*.md");
  });

  eleventyConfig.addCollection("rankings", function(collection) {
    return collection.getFilteredByGlob("src/rankings/*.md");
  });

  eleventyConfig.addCollection("escuelas", function(collection) {
    return collection.getFilteredByGlob("src/escuelas/*.md");
  });
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};