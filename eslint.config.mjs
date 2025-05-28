import path from "node:path";

import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import sonarjs from "eslint-plugin-sonarjs";
import { configs, plugins } from "eslint-config-airbnb-extended";
import { includeIgnoreFile } from "@eslint/compat";
import { rules as prettierConfigRules } from "eslint-config-prettier";

export const projectRoot = path.resolve(".");
export const gitignorePath = path.resolve(projectRoot, ".gitignore");

const jsConfig = [
  {
    name: "js/config",
    ...js.configs.recommended,
  },
  plugins.stylistic,
  plugins.importX,
  ...configs.base.recommended,
];

const typescriptConfig = [plugins.typescriptEslint, ...configs.base.typescript, ...configs.react.typescript];

const sonarjsConfig = [
  {
    name: "sonarjs/config",
    plugins: {
      sonarjs,
    },
  },
];

const reactConfig = [
  plugins.react,
  plugins.reactHooks,
  plugins.reactA11y,
  ...configs.react.recommended,
  {
    name: "react/disable-react-in-jsx-scope",
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".tsx"],
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

const prettierConfig = [
  {
    name: "prettier/plugin/config",
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    name: "prettier/config",
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
    },
  },
];

export default [
  includeIgnoreFile(gitignorePath),
  ...jsConfig,
  ...typescriptConfig,
  ...sonarjsConfig,
  ...reactConfig,
  ...prettierConfig,
];
