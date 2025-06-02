import { filterHTMLAttributes } from "@hikoui-beta/system";
import { twMerge } from "tailwind-merge";

import type { CreateComponentPropsProps } from "./create-component-props.types";

function createComponentProps(props: CreateComponentPropsProps) {
  const { as = "div", variantClasses, otherProps, className } = props;

  const domProps = filterHTMLAttributes(otherProps, as);
  const mergedClassName = twMerge(variantClasses, className);

  return {
    className: mergedClassName,
    ...domProps,
  };
}

export default createComponentProps;
