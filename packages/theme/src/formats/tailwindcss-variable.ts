import type { Format } from "style-dictionary/types";

import formatTailwindcssVariables from "./tailwindcss-variable.helper";

const tailwindcssVariable: Format = {
  name: "css/variables-combined",
  format: formatTailwindcssVariables,
};

export default tailwindcssVariable;
