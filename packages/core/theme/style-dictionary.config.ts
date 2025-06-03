import type { Config } from "style-dictionary";

const config: Config = {
  source: ["src/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "base.css",
          format: "css/variables",
          options: {
            outputReferences: false,
          },
        },
      ],
    },
  },
};

export default config;
