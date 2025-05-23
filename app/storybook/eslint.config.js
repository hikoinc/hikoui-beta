import globals from "globals";
import js from "@eslint/js";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { configs as reactHooksConfigs } from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: ["dist"],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, reactHooksConfigs["recommended-latest"]],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
  },
);
