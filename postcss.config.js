const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    // specify the paths to all of the template files in your project
    content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./styles/**/*.css"],

    // include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
