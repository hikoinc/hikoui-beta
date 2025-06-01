import { forwardRef as reactForwardRef } from "react";
import type { ForwardRefRenderFunction } from "react";

import { As, ComponentWithAs } from "./forward-ref.types";

function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<Element, Props & { as?: As }>,
): ComponentWithAs<Component, Props> {
  return reactForwardRef(component as ForwardRefRenderFunction<Element, any>) as ComponentWithAs<Component, Props>;
}

export default forwardRef;
