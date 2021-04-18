module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
  rules: {},
  overrides: [
    {
      files: ["*.vue"],
      extends: ["plugin:vue/vue3-recommended", "@vue/typescript"],
      plugins: ["@typescript-eslint"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "vue/html-self-closing": "off",
        "vue/no-v-html": "off",
        "vue/max-attributes-per-line": ["warn", { singleline: 5 }],
        "vue/multiline-html-element-content-newline": "off",
        "vue/singleline-html-element-content-newline": "off",
      },
    },
    {
      files: ["*.ts"],
      extends: ["plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    {
      files: ["*.d.ts"],
      extends: ["plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "@typescript-eslint/ban-types": "warn",
      },
    },
  ],
};
