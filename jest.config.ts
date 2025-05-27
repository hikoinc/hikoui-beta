import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["packages/**/*.{ts,tsx}", "!**/*.d.ts", "!**/turbo/**", "!**/dist/**"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
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
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./reports",
        outputName: "test-report.xml",
      },
    ],
  ],
};

export default config;
