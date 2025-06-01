import { forwardRef as reactForwardRef } from "react";
import type { ForwardRefRenderFunction, PropsWithoutRef } from "react";

import { As, ComponentWithAs } from "./forward-ref.types";

// Improved type-safe forwardRef implementation
function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<any, PropsWithoutRef<Props & { as?: As }>>,
): ComponentWithAs<Component, Props> {
  // Pass component directly to React's forwardRef without unsafe casting
  const forwardedComponent = reactForwardRef(component);

  // Single assertion through unknown is safer than double casting
  return forwardedComponent as unknown as ComponentWithAs<Component, Props>;
}

export default forwardRef;
