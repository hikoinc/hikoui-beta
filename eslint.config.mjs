import * as importX from "eslint-plugin-import-x";
import prettier from "eslint-config-prettier/flat";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { configs as sonarjsConfigs } from "eslint-plugin-sonarjs";
import { configs as tsConfigs, config as tsConfig } from "typescript-eslint";
import { configs as turboConfigs } from "eslint-plugin-turbo";

export default tsConfig({
  extends: [
    ...tsConfigs.recommended,
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    js.configs.recommended,
    sonarjsConfigs.recommended,
    turboConfigs["flat/recommended"],
    prettier,
  ],
  files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
  languageOptions: {
    parser: tsParser,
    ecmaVersion: "latest",
    sourceType: "module",
  },
});
