import StyleDictionary from "style-dictionary";

import { cssVariablesFormat, primaryThemeConfig } from "../src/configs/primary.configs";

async function buildTokens(): Promise<void> {
  StyleDictionary.registerFormat(cssVariablesFormat);

  const sd = new StyleDictionary(primaryThemeConfig);
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
}

buildTokens();
