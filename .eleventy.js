const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Pass through css, js, and img folders
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/docs");

  // Add a markdown filter to process strings (like author lists) into HTML
  const md = new markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  
  eleventyConfig.addFilter("markdown", (content) => {
    // markdown-it block rendering wraps text in <p> tags. For inline text like authors, we want inline rendering.
    return md.renderInline(content || "");
  });

  eleventyConfig.addFilter("groupByYear", (collection) => {
    const grouped = {};
    for (const item of collection) {
      const year = item.data.year || "Unknown";
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(item);
    }
    // Return an array sorted by year descending
    return Object.keys(grouped).sort((a, b) => b - a).map(year => ({
      year: year,
      items: grouped[year]
    }));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
