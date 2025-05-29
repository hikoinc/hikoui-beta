"use client";

import forwardRefWithAs from "@hikoui-beta/forward-ref-with-as";
import type { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
}

const Button = forwardRefWithAs<ButtonProps, "button">(
  ({ as: As = "button", className, children, ...otherProps }, ref) => (
    <As ref={ref} className="bg-red-500 text-white" {...otherProps}>
      {children}
    </As>
  ),
);

export default Button;
