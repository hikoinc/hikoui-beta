"use client";

import { forwardPolymorphicRef } from "@hikoui-beta/system";

import useLink from "./link.hook";
import type { UseLinkProps } from "./link.hook";

export type LinkProps = UseLinkProps;

const Link = forwardPolymorphicRef<"a", LinkProps>((props, ref) => {
  const { Component, children, getLinkProps } = useLink(props);

  return (
    <Component ref={ref} {...getLinkProps()}>
      {children}
    </Component>
  );
});

Link.displayName = "HikoUI.Link";

export default Link;
