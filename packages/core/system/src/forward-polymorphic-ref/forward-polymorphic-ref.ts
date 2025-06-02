import React, { forwardRef } from "react";

import type { Element, ForwardRef, Merge, PropsOf } from "./forward-polymorphic-ref.types";

function forwardPolymorphicRef<Component extends Element, Props extends object, OmitKeys extends keyof any = never>(
  render: React.ForwardRefRenderFunction<
    any,
    React.PropsWithoutRef<
      Merge<PropsOf<Component>, Props> & {
        as?: Element;
      }
    >
  >,
) {
  return forwardRef(render) as ForwardRef<Component, Props, OmitKeys>;
}

export default forwardPolymorphicRef;
