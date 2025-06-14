import type { Config } from "style-dictionary/types";

const primaryConfig: Config = {
  source: ["src/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "primary.css",
          format: "css/variables-combined",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    json: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          destination: "primary.json",
          format: "json",
        },
      ],
    },
  },
};

export default primaryConfig;
