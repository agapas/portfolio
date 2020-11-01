module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["import"],
  // env - defines global variables that are predefined
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/eslint-recommended", // disables eslint rules covered by ts
    "plugin:@typescript-eslint/recommended", // recommended ts rules
    "prettier", // disables unnecessary or conflicting configs
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "prettier/react",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array
  ],
  rules: {
    "import/order": "error",
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": "off", // covered by tsconfig
    "@typescript-eslint/no-explicit-any": "off", // from recommended. consider enabling (remove line) and adopt unknown
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
