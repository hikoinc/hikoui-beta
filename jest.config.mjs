/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/scripts/setup-test.ts"],
  testMatch: ["**/__tests__/**/*.(spec|test).{ts,tsx}"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/packages/**/*.{ts,tsx}", "!**/*.d.ts", !"**/turbo/**"],
  coverageDirectory: "<rootDir>/coverage",
  testTimeout: 15000,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
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
