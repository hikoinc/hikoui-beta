"use client";

import { forwardPolymorphicRef } from "@hikoui-beta/system";

import useButton from "./button.hook";
import type { UseButtonProps } from "./button.hook";

export type ButtonProps = UseButtonProps;

const Button = forwardPolymorphicRef<"button", ButtonProps>((props, ref) => {
  const { Component, children, getButtonProps } = useButton(props);

  return (
    <Component ref={ref} {...getButtonProps()}>
      {children}
    </Component>
  );
});

Button.displayName = "HikoUI.Button";

export default Button;
