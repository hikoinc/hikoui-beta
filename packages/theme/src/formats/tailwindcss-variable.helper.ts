import type { Dictionary } from "style-dictionary/types";
import _ from "lodash";

function formatTailwindcssVariables({ dictionary }: { dictionary: Dictionary }): string {
  const { allTokens } = dictionary;

  function renderThemeVariables(theme: "light" | "dark", indent = 2): string {
    const space = " ".repeat(indent);

    return _.chain(allTokens)
      .filter((token) => token.path.includes("dark") === (theme === "dark"))
      .map((token) => {
        const name = _.chain(token.path)
          .filter((part) => !_.includes(["color", "dark"], part))
          .join("-")
          .value();

        const value = _.get(token, "original.$value", "");
        const comment = _.get(token, "original.$description", "");

        return `${space}--color-${name}: ${value};${comment}`;
      })
      .join("\n")
      .value();
  }

  const lightVariables = renderThemeVariables("light", 2);
  const darkVariables = renderThemeVariables("dark", 4);

  return `:root {\n${lightVariables}\n}\n\n.dark, [data-theme="dark"] {\n${darkVariables}\n}`;
}

export default formatTailwindcssVariables;
