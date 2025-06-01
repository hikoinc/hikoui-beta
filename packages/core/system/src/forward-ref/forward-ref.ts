import { forwardRef as reactForwardRef } from "react";
import type { ForwardRefRenderFunction, PropsWithoutRef } from "react";

import { As, ComponentWithAs, RefOf } from "./forward-ref.types";

function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<RefOf<Component>, PropsWithoutRef<Props & { as?: As }>>,
): ComponentWithAs<Component, Props> {
  const forwardedComponent = reactForwardRef(component);

  return forwardedComponent as unknown as ComponentWithAs<Component, Props>;
}

export default forwardRef;
