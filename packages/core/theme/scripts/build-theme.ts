/* eslint-disable no-console */
import { execSync } from "child_process";
import { readFileSync, writeFileSync, unlinkSync } from "fs";

console.log("🚀 Building theme tokens...");

// Build light theme only first
const lightConfig = {
  source: ["src/tokens/themes/light.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "light.css",
          format: "css/variables",
        },
      ],
    },
  },
};

// Build dark theme only
const darkConfig = {
  source: ["src/tokens/themes/dark.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "dark.css",
          format: "css/variables",
        },
      ],
    },
  },
};

// Write temporary configs
writeFileSync("light.config.js", `module.exports = ${JSON.stringify(lightConfig, null, 2)};`);
writeFileSync("dark.config.js", `module.exports = ${JSON.stringify(darkConfig, null, 2)};`);

// Build both
// eslint-disable-next-line sonarjs/no-os-command-from-path
execSync("style-dictionary build --config light.config.js", { stdio: "inherit" });
// eslint-disable-next-line sonarjs/no-os-command-from-path
execSync("style-dictionary build --config dark.config.js", { stdio: "inherit" });

// Read generated files
const lightCSS: string = readFileSync("dist/light.css", "utf8");
const darkCSS: string = readFileSync("dist/dark.css", "utf8");

// Extract variables - using safer regex patterns
// eslint-disable-next-line sonarjs/slow-regex
const lightVars: string[] = lightCSS.match(/--[\w-]+:\s*[^;]+;/g) ?? [];
// eslint-disable-next-line sonarjs/slow-regex
const darkVars: string[] = darkCSS.match(/--[\w-]+:\s*[^;]+;/g) ?? [];

// Create final CSS
const finalCSS = `/**
 * Do not edit directly, this file was auto-generated.
 */

@custom-variant dark (&:where(.dark, .dark *), &:where([data-theme="dark"], [data-theme="dark"] *));

@theme {
${lightVars.map((v: string) => `  ${v}`).join("\n")}
}

.dark,
[data-theme="dark"] {
${darkVars.map((v: string) => `  ${v}`).join("\n")}
}
`;

// Write final file
writeFileSync("dist/base.css", finalCSS);

// Clean up
unlinkSync("light.config.js");
unlinkSync("dark.config.js");
unlinkSync("dist/light.css");
unlinkSync("dist/dark.css");

console.log("✅ Theme built successfully!");
