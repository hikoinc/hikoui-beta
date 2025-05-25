import * as importX from "eslint-plugin-import-x";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier/flat";
import react from "eslint-plugin-react";
import testingLibrary from "eslint-plugin-testing-library";
import tsParser from "@typescript-eslint/parser";
import { configs as reactHooksConfigs } from "eslint-plugin-react-hooks";
import { configs as sonarjsConfigs } from "eslint-plugin-sonarjs";
import { configs as tsConfigs, config as tsConfig } from "typescript-eslint";
import { configs as turboConfigs } from "eslint-plugin-turbo";

const configs = tsConfig(
  {
    ignores: ["**/**/storybook-static", "**/**/dist"],
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
      jsdoc.configs["flat/recommended"],
      reactHooksConfigs["recommended-latest"],
      testingLibrary.configs["flat/dom"],
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
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        },
      ],
      "react/react-in-jsx-scope": "off",
    },
  },
);

export default configs;
