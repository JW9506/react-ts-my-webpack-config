module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  env: { browser: true },
  rules: {
    quotes: 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "react/prop-types": 0
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: { react: { version: "detect" } }
};
