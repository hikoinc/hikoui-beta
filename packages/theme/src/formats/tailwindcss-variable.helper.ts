import _ from "lodash";
import type { Dictionary } from "style-dictionary/types";

function formatTailwindcssVariables({ dictionary }: { dictionary: Dictionary }) {
  const { allTokens } = dictionary;

  const renderThemeVariables = (theme: "light" | "dark") => {
    const isDarkTheme = _.isEqual(theme, "dark");

    const themeTokens = _.filter(allTokens, (token) => {
      const tokenPath = _.get(token, "path");
      const tokenIsDark = _.includes(tokenPath, "dark");

      return _.isEqual(tokenIsDark, isDarkTheme);
    });

    const lines = _.map(themeTokens, (token) => {
      const tokenPath = _.get(token, "path");
      const tokenName = _.join(_.without(tokenPath, "color", "dark"), "-");

      const originalValue = _.get(token, "original.$value", "");
      const hasReference = _.includes(originalValue, "{color.");

      let resolvedValue = originalValue;

      if (hasReference) {
        resolvedValue = _.replace(originalValue, /{color\.(.*?)}/g, (match) => {
          const cleaned = _.replace(match, /[{}]/g, "");
          const pathParts = _.split(cleaned, ".");
          const referenceParts = _.slice(pathParts, 1);
          const referencePath = _.join(referenceParts, "-");

          return `var(--color-${referencePath})`;
        });
      }

      const comment = _.get(token, "original.$description", "");

      return `  --color-${tokenName}: ${resolvedValue};${comment}`;
    });

    return _.join(lines, "\n");
  };

  const lightTheme = renderThemeVariables("light");
  const darkTheme = renderThemeVariables("dark");

  return `@theme {\n${lightTheme}\n}\n\n.dark, [data-theme="dark"] {\n${darkTheme}\n}`;
}

export default formatTailwindcssVariables;
