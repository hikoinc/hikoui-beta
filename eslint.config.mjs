import * as importX from "eslint-plugin-import-x";
import configPrettier from "eslint-config-prettier/flat";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";
import { configs as sonarjsConfigs } from "eslint-plugin-sonarjs";
import { configs as turboConfigs } from "eslint-plugin-turbo";

export default tseslint.config(
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  js.configs.recommended,
  sonarjsConfigs.recommended,
  turboConfigs["flat/recommended"],
  configPrettier,
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    ignores: ["packages", "app"],
  },
);
