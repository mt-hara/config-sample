module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    // ecmaFeatures: {
    //   "experimentalObjectRestSpread": true,
    // },
  },
  rules: {
    "no-console": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
