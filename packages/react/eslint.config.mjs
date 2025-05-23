import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier/flat";
import * as importX from "eslint-plugin-import-x";
import jsdoc from "eslint-plugin-jsdoc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import { configs as reactHooksConfigs } from "eslint-plugin-react-hooks";
import { configs as sonarjsConfigs } from "eslint-plugin-sonarjs";
import { configs as turboConfigs } from "eslint-plugin-turbo";
import { configs as tsConfigs, config as tsConfig } from "typescript-eslint";

export default tsConfig(
  {
    ignores: ["dist"],
  },
  {
    extends: [
      ...tsConfigs.recommended,
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      js.configs.recommended,
      jsxA11y.flatConfigs.recommended,
      react.configs.flat.recommended,
      sonarjsConfigs.recommended,
      reactHooksConfigs["recommended-latest"],
      jsdoc.configs["flat/recommended"],
      turboConfigs["flat/recommended"],
      prettier,
    ],
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      import: importX,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
