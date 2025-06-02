import { useMemo } from "react";
import type { ReactNode, ElementType } from "react";

import { createComponentProps } from "../utils";

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

      return createComponentProps({ variantClasses, otherProps, as, className });
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
