"use client";

import { forwardRef } from "@hikoui-beta/system";

import useLink from "./link.hook";
import type { UseLinkProps } from "./link.hook";

export type LinkProps = UseLinkProps;

const Link = forwardRef<LinkProps, "a">((props, ref) => {
  const { Component, children, getLinkProps } = useLink(props);

  return (
    <Component ref={ref} {...getLinkProps()}>
      {children}
    </Component>
  );
});

Link.displayName = "HikoUI.Link";

export default Link;
