"use client";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className }: Readonly<ButtonProps>) => (
  <button className={className} onClick={() => {}} type="button">
    {children}
  </button>
);

export default Button;
