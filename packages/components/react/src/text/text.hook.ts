import { filterHTMLAttributes } from "@hikoui-beta/system";
import { twMerge } from "tailwind-merge";
import { useCallback, useMemo } from "react";
import type { ReactNode, ElementType } from "react";

import textVariants from "./text.variants";
import type { TextVariantProps } from "./text.variants";

export interface UseTextProps extends TextVariantProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const useText = (props: UseTextProps) => {
  const { as = "span", className, children, ...otherProps } = props;

  const variantClasses = useMemo(() => textVariants({ ...otherProps }), [otherProps]);
  const domProps = useMemo(() => filterHTMLAttributes(otherProps, as), [otherProps, as]);
  const mergedClassName = useMemo(() => twMerge(variantClasses, className), [variantClasses, className]);

  const getTextProps = useCallback(
    () => ({
      className: mergedClassName,
      ...domProps,
    }),
    [mergedClassName, domProps],
  );

  return {
    Component: as,
    children,
    getTextProps,
  };
};

export default useText;
