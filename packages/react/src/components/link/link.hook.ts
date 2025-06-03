import { useMemo } from "react";
import type { ReactNode, ElementType } from "react";

import { createComponentProps } from "../../utils";

import linkVariants from "./link.variants";
import type { LinkVariantProps } from "./link.variants";

export interface UseLinkProps extends LinkVariantProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const useLink = (props: UseLinkProps) => {
  const { as = "a", className, children, ...otherProps } = props;

  const getLinkProps = useMemo(
    () => () => {
      const variantClasses = linkVariants({ ...otherProps });

      return createComponentProps({
        as,
        className,
        variantClasses,
        htmlAttributes: otherProps,
      });
    },
    [as, className, otherProps],
  );

  return {
    Component: as,
    children,
    getLinkProps,
  };
};

export default useLink;
