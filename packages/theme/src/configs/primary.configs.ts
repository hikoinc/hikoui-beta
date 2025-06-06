import _ from "lodash";
import type { Config, Format } from "style-dictionary/types";

export const cssVariablesFormat: Format = {
  name: "css/variables",
  format({ dictionary }) {
    const { allTokens } = dictionary;
    const commonTokens = _.filter(allTokens, (token) => _.first(token.path) === "common");
    const darkTokens = _.filter(allTokens, (token) => _.first(token.path) === "dark");

    const commonValues = _.reduce(
      commonTokens,
      (acc, token) => {
        const path = _.join([token.$type, ..._.chain(token.path).slice(2).value()], "-");
        const value = token.original.$value as string;

        return _.assign({}, acc, {
          [path]: value,
        });
      },
      {},
    );

    const darkValues = _.reduce(
      darkTokens,
      (acc, token) => {
        const path = _.join([token.$type, ..._.chain(token.path).slice(2).value()], "-");
        const value = token.original.$value as string;

        return _.assign({}, acc, {
          [path]: value,
        });
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
  source: ["src/tokens/primary/**/*.json"],
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
