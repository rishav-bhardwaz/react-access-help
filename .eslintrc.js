module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  };
  