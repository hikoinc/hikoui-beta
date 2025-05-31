import { forwardRef as reactForwardRef } from "react";
import type { ForwardRefRenderFunction } from "react";

import { As, ComponentWithAs, PropsOf, RightJoinProps } from "./forward-ref.types";

function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >,
) {
  return reactForwardRef(component as any) as unknown as ComponentWithAs<Component, Props>;
}

export default forwardRef;
