export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("site");
  eleventyConfig.addPassthroughCopy("site/theme.js");
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.setIncludesDirectory("includes");
};

