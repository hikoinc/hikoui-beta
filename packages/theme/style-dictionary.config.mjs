import StyleDictionary from "style-dictionary";

StyleDictionary.registerFormat({
  name: "css/theme",
  format: ({ dictionary }) => {
    const flattenObject = (obj, prefix, tokenType = "") => {
      const result = [];
      if (!obj) return result;
      Object.entries(obj).forEach(([key, value]) => {
        const name = prefix ? `${prefix}-${key}` : key;
        if (value.value) {
          const type = value.type || tokenType;
          result.push(`  --${type}-${name}: ${value.value};`);
        } else {
          result.push(...flattenObject(value, name, value.type || tokenType));
        }
      });
      return result;
    };

    const commonColors = flattenObject(dictionary.tokens.color, "", "color");
    const darkColors = flattenObject(dictionary.tokens.dark, "", "color");

    return `@custom-variant dark(&:where(.dark,.dark *,[data-theme=dark],[data-theme=dark] *));

@theme {
${commonColors.join("\n")}
}

.dark,
[data-theme="dark"] {
${darkColors.join("\n")}
}`;
  },
});

export default {
  source: ["src/tokens/primary/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "primary.css",
          format: "css/theme",
        },
      ],
    },
  },
};
