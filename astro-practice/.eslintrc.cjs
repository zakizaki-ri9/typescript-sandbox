/**
 * @type {import("eslint").ESLint.ConfigData}
 */
module.exports = {
  extends: ["eslint:recommended", "plugin:astro/recommended", "prettier"],
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  rules: {
    // "pre"
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/semi": ["error", "never"],
      },
    },
    // ...
  ],
}
