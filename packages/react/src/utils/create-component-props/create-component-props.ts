import { filterHTMLAttributes } from "@hikoui-beta/system";
import { twMerge } from "tailwind-merge";
import type { ElementType, HTMLAttributes } from "react";

function createComponentProps(
  variantClasses: string,
  otherProps: Record<string, string | number | boolean | null | undefined>,
  as: ElementType,
  className?: string,
): HTMLAttributes<HTMLElement> & { className: string } {
  const domProps = filterHTMLAttributes(otherProps, as);
  const mergedClassName = twMerge(variantClasses, className);

  return {
    className: mergedClassName,
    ...domProps,
  };
}

export default createComponentProps;
