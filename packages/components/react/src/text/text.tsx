"use client";

import { forwardRef } from "@hikoui-beta/system";

import useText from "./text.hook";
import type { UseTextProps } from "./text.hook";

export type TextProps = UseTextProps;

const Text = forwardRef<TextProps, "span">((props, ref) => {
  const { Component, children, getTextProps } = useText(props);

  return (
    <Component ref={ref} {...getTextProps()}>
      {children}
    </Component>
  );
});

Text.displayName = "HikoUI.Text";

export default Text;
