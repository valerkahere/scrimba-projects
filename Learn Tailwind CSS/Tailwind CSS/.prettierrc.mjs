// .prettierrc.mjs: When using a JavaScript config, you can import the types for IntelliSense:
/** @type {import("prettier").Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  // specifies the line length at which the formatter will attempt to wrap code
  printWidth: 100,
  // adds semicolons at the end of every statement.
  semi: true,
  // use double quotes
  singleQuote: false,
  // NOTE: Order is strictly critical. Astro parses first, Tailwind sorts second.
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tailwindStylesheet: "./src/styles/global.css",
};
