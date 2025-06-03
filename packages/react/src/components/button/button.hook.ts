import { useMemo } from "react";
import type { ReactNode, ElementType } from "react";

import { createComponentProps } from "../../utils";

import buttonVariants from "./button.variants";
import type { ButtonVariantProps } from "./button.variants";

export interface UseButtonProps extends ButtonVariantProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  as?: ElementType;
}

const useButton = (props: UseButtonProps) => {
  const { as = "button", type = "button", className, children, ...otherProps } = props;

  const getButtonProps = useMemo(
    () => () => {
      const variantClasses = buttonVariants({ ...otherProps });

      const htmlAttributes = {
        ...otherProps,
        type,
      };

      return createComponentProps({
        as,
        className,
        variantClasses,
        htmlAttributes,
      });
    },
    [as, className, otherProps, type],
  );

  return {
    Component: as,
    children,
    getButtonProps,
  };
};

export default useButton;
