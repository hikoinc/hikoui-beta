import path from "node:path";

import importPlugin from "eslint-plugin-import-x";
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import sonarjs from "eslint-plugin-sonarjs";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";
import { configs, plugins } from "eslint-config-airbnb-extended";
import { includeIgnoreFile } from "@eslint/compat";
import { rules as prettierConfigRules } from "eslint-config-prettier";

export const projectRoot = path.resolve(".");
export const gitignorePath = path.resolve(projectRoot, ".gitignore");

function createJavaScriptConfig() {
  return [
    {
      name: "js/config",
      ...js.configs.recommended,
    },
    plugins.stylistic,
    plugins.importX,
    ...configs.base.recommended,
  ];
}

function createTypeScriptConfig() {
  return [
    plugins.typescriptEslint,
    ...configs.base.typescript,
    ...configs.react.typescript,
    ...tseslint.configs.recommended,
  ];
}

function createImportConfig() {
  const devDependencyPatterns = [
    "**/*.config.{js,cjs,mjs,ts,cts,mts}",
    "**/*.setup.ts",
    "**/*.stories.tsx",
    "**/*.test.{ts,tsx}",
    "**/.storybook/**",
    "**/setup-test.ts",
    "**/tsup.config.ts",
  ];

  const importOrderGroups = ["builtin", "external", "internal", "parent", "sibling", "index"];

  const pathGroups = [
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
  ];
  return [
    {
      name: "import-x/order/rules",
      plugins: {
        import: importPlugin,
      },
      rules: {
        "import-x/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: devDependencyPatterns,
            optionalDependencies: false,
          },
        ],
        "import-x/order": [
          "warn",
          {
            groups: importOrderGroups,
            pathGroups,
            "newlines-between": "always",
          },
        ],
      },
    },
  ];
}

function createReactConfig() {
  return [
    plugins.react,
    plugins.reactHooks,
    plugins.reactA11y,
    ...configs.react.recommended,
    {
      name: "react/custom-rules",
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
        "jsx-a11y/anchor-is-valid": "off",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ];
}

function createSonarJSConfig() {
  return [
    {
      name: "sonarjs/config",
      plugins: {
        sonarjs,
      },
      rules: {
        ...sonarjs.configs.recommended.rules,
      },
    },
  ];
}

function createStorybookConfig() {
  return [
    {
      name: "storybook/config",
      files: ["**/*.stories.tsx"],
      plugins: {
        storybook,
      },
      rules: {
        ...storybook.configs.recommended.rules,
        "jsx-a11y/anchor-is-valid": "off",
      },
    },
  ];
}

function createPrettierConfig() {
  return [
    {
      name: "prettier/plugin/config",
      plugins: {
        prettier: prettierPlugin,
      },
    },
    {
      name: "prettier/rules",
      rules: {
        ...prettierConfigRules,
        "prettier/prettier": "error",
      },
    },
  ];
}

export default [
  includeIgnoreFile(gitignorePath),
  ...createJavaScriptConfig(),
  ...createTypeScriptConfig(),
  ...createImportConfig(),
  ...createReactConfig(),
  ...createSonarJSConfig(),
  ...createStorybookConfig(),
  ...createPrettierConfig(),
];
