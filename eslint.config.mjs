import configPrettier from "eslint-config-prettier";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import turboPlugin from "eslint-plugin-turbo";

/** @type {import("eslint").Linter.Config} */
const configs = [
  configPrettier,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "error",
    },
  },
  {
    ignores: ["app", "packages"],
  },
];

export default configs;
