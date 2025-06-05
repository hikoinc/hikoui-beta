import StyleDictionary from "style-dictionary";

StyleDictionary.registerFormat({
  name: "css/variables",
  format({ dictionary }) {
    const commonTokens = dictionary.allTokens.filter((token) => !token.filePath.includes("dark-colors"));
    const darkTokens = dictionary.allTokens.filter((token) => token.filePath.includes("dark-colors"));

    const commonValues = {};
    commonTokens.forEach((token) => {
      const path = token.path.join("-");
      commonValues[path] = token.$value;
    });

    const darkValues = {};
    darkTokens.forEach((token) => {
      const path = token.path.join("-");
      darkValues[path] = token.$value;
    });

    return `@custom-variant dark (&:where(.dark, .dark *), &:where([data-theme='dark'], [data-theme='dark'] *));

@theme {
${Object.entries(commonValues)
  .map(([path, value]) => `  --${path}: ${value};`)
  .join("\n")}
}

.dark, [data-theme="dark"] {
${Object.entries(darkValues)
  .map(([path, value]) => `  --${path}: ${value};`)
  .join("\n")}
}
`;
  },
});

const sd = new StyleDictionary({
  source: ["src/tokens/primary/common-colors.json", "src/tokens/primary/dark-colors.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "primary.css",
          format: "css/variables",
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
