import { useMemo } from "react";
import type { ReactNode, ElementType } from "react";
import { linkVariants } from "@hikoui-beta/variants";
import type { LinkVariantProps } from "@hikoui-beta/variants";

import { createComponentProps } from "../../utils";

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

      return createComponentProps({ variantClasses, otherProps, as, className });
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
