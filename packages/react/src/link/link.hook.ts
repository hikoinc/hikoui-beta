import { useMemo } from "react";
import type { ReactNode, ElementType } from "react";

import createComponentProps from "../shared/utils/component.utils";

import { linkVariants } from "./link.variants";
import type { LinkVariantProps } from "./link.variants";

export interface UseLinkProps extends LinkVariantProps {
  children: ReactNode;
  href?: string;
  className?: string;
  as?: ElementType;
}

const useLink = (props: UseLinkProps) => {
  const { as = "a", className, children, ...otherProps } = props;

  const getLinkProps = useMemo(
    () => () => {
      const variantClasses = linkVariants({ ...otherProps });
      return createComponentProps(variantClasses, otherProps, as, className);
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
