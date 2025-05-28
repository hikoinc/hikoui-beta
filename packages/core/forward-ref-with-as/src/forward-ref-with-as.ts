/* eslint-disable no-unused-vars */
import { forwardRef } from "react";
import type { ElementType, ForwardRefRenderFunction, PropsWithoutRef, ReactElement } from "react";

import type { PolymorphicComponentProps, PolymorphicPropsWithRef, PolymorphicRef } from "./forward-ref-with-as.types";

function forwardRefWithAs<DefaultElement extends ElementType, Props = Record<string, unknown>>(
  render: ForwardRefRenderFunction<
    PolymorphicRef<DefaultElement>,
    PropsWithoutRef<PolymorphicComponentProps<DefaultElement, Props>>
  >,
) {
  return forwardRef(render) as <T extends ElementType = DefaultElement>(
    props: PolymorphicPropsWithRef<T, Props>,
  ) => ReactElement | null;
}

export default forwardRefWithAs;
