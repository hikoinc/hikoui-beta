import path from "node:path";

import importPlugin from "eslint-plugin-import-x";
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import sonarjs from "eslint-plugin-sonarjs";
import storybook from "eslint-plugin-storybook";
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

const importxConfig = [
  {
    name: "import-x/order/rules",
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import-x/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.config.{js,cjs,mjs,ts,cts,mts}",
            "**/*.setup.ts",
            "**/*.stories.tsx",
            "**/*.test.{ts,tsx}",
            "**/.storybook/**",
            "**/setup-test.ts",
            "**/tsup.config.ts",
          ],
          optionalDependencies: false,
        },
      ],
      "import-x/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "src/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "~/**",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
];

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
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
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
  ...importxConfig,
  ...sonarjsConfig,
  ...reactConfig,
  ...prettierConfig,
  ...storybook.configs["flat/recommended"],
];
