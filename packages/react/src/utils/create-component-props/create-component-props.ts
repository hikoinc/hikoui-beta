import { filterHTMLAttributes } from "@hikoui-beta/system";
import { twMerge } from "tailwind-merge";

import type { CreateComponentPropsProps } from "./create-component-props.types";

function createComponentProps(props: CreateComponentPropsProps) {
  const { as = "div", variantClasses, htmlAttributes, className } = props;

  const domProps = filterHTMLAttributes(htmlAttributes, as);
  const mergedClassName = twMerge(variantClasses, className);

  return {
    className: mergedClassName,
    ...domProps,
  };
}

export default createComponentProps;
