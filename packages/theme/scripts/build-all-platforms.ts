import StyleDictionary from "style-dictionary";

import { primaryConfig } from "../src/configs";
import { tailwindcssVariable } from "../src/formats";

StyleDictionary.registerFormat(tailwindcssVariable);

const sd = new StyleDictionary(primaryConfig);

sd.buildAllPlatforms();
