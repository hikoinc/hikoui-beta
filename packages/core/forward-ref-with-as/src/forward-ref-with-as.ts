import { forwardRef } from "react";
import type { ReactElement, RefObject } from "react";

import type { As, ComponentWithAs, PropsFromAs } from "./forward-ref-with-as.types";

function forwardRefWithAs<Props, ComponentType extends As>(
  component: (props: PropsFromAs<ComponentType, Props>, ref: RefObject<any>) => ReactElement | null,
) {
  return forwardRef(component as any) as unknown as ComponentWithAs<ComponentType, Props>;
}

export default forwardRefWithAs;
