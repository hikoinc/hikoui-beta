/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["packages/**/*.{ts,tsx}", "!**/*.d.ts", "!**/dist/**", "!**/turbo/**"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-dom", "./scripts/setup-test.ts"],
  testTimeout: 15000,
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};

export default config;
