import { filterHTMLAttributes } from "@hikoui-beta/system";
import { twMerge } from "tailwind-merge";
import { useMemo } from "react";
import type { ReactNode, ElementType } from "react";

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
    getLinkProps,
  };
};

export default useLink;
