module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
  // TODO: svelte x typescript だと lint が効かない（Parser Errorとなる）ため、ignore
  ignorePatterns: ["**/*svelte"],
  overrides: [
    // TODO: svelte x typescript の lint が効くようになったら有効化
    // {
    //   files: ["**/*.svelte"],
    //   plugins: [
    //     "svelte3"
    //   ],
    //   processor: "svelte3/svelte3"
    // },
    {
      files: ["**/*.ts"],
      extends: ["plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
    },
  ],
};
