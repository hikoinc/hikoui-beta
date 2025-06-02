import { filterHTMLAttributes } from "@hikoui-beta/system";
import { twMerge } from "tailwind-merge";
import { useMemo } from "react";
import type { ReactNode, ElementType } from "react";

import { textVariants } from "./text.variants";
import type { TextVariantProps } from "./text.variants";

export interface UseTextProps extends TextVariantProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const useText = (props: UseTextProps) => {
  const { as = "span", className, children, ...otherProps } = props;

  const getTextProps = useMemo(
    () => () => {
      const variantClasses = textVariants({ ...otherProps });
      const domProps = filterHTMLAttributes(otherProps, as);
      const mergedClassName = twMerge(variantClasses, className);

      return {
        className: mergedClassName,
        ...domProps,
      };
    },
    [as, className, otherProps],
  );

  return {
    Component: as,
    children,
    getTextProps,
  };
};

export default useText;
