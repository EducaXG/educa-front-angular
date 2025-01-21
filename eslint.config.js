const tseslint = require("@typescript-eslint/eslint-plugin");
const angular = require("@angular-eslint/eslint-plugin");
const tailwindcss = require("eslint-plugin-tailwindcss");

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "@angular-eslint": angular,
    },
    rules: {
      ...(tseslint.configs?.recommended?.rules || {}),
      ...(tseslint.configs?.stylistic?.rules || {}),
      ...(angular.configs?.recommended?.rules || {}),
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: require("@angular-eslint/template-parser"),
    },
    plugins: {
      "@angular-eslint": angular,
    },
    rules: {
      ...(angular.configs?.["template/recommended"]?.rules || {}),
      ...(angular.configs?.["template/accessibility"]?.rules || {}),
    },
  },
  {
    files: ["**/*.scss"],
    plugins: {
      tailwindcss: tailwindcss,
    },
    rules: {
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-contradicting-classname": "warn",
    },
  },
];
