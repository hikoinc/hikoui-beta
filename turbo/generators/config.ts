import type { PlopTypes } from "@turbo/gen";

import componentGenerator from "./templates/component/config";

function generator(plop: PlopTypes.NodePlopAPI): void {
  componentGenerator(plop);
}

export default generator;
