import StyleDictionary from "style-dictionary";

import { primaryConfig } from "./configs";
import { tailwindcssVariable } from "./formats";

StyleDictionary.registerFormat(tailwindcssVariable);

const sd = new StyleDictionary(primaryConfig);

sd.buildAllPlatforms();
