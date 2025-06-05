import _ from "lodash";
import type { Config, Format } from "style-dictionary/types";

export const cssVariablesFormat: Format = {
  name: "css/variables",
  format({ dictionary }) {
    const commonTokens = _.filter(dictionary.allTokens, (token) => !_.includes(token.filePath, "dark-colors"));
    const darkTokens = _.filter(dictionary.allTokens, (token) => _.includes(token.filePath, "dark-colors"));

    const commonValues = _.reduce(
      commonTokens,
      (acc, token) => {
        const path = _.join(token.path, "-");
        return _.assign({}, acc, { [path]: token.$value as string });
      },
      {},
    );

    const darkValues = _.reduce(
      darkTokens,
      (acc, token) => {
        const path = _.join(token.path, "-");
        return _.assign({}, acc, { [path]: token.$value as string });
      },
      {},
    );

    return `@custom-variant dark (&:where(.dark, .dark *), &:where([data-theme='dark'], [data-theme='dark'] *));

@theme {
${_.map(_.toPairs(commonValues), ([path, value]) => `  --${path}: ${value};`).join("\n")}
}

.dark, [data-theme="dark"] {
${_.map(_.toPairs(darkValues), ([path, value]) => `  --${path}: ${value};`).join("\n")}
}
`;
  },
};

export const primaryThemeConfig: Config = {
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
};
