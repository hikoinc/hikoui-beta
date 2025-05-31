import type { PlopTypes } from "@turbo/gen";

import componentGenerator from "./templates/component/config";
import packageGenerator from "./templates/package/config";

function generator(plop: PlopTypes.NodePlopAPI): void {
  componentGenerator(plop);
  packageGenerator(plop);
}

export default generator;
