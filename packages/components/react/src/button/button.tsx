"use client";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

function Button({ children, className }: Readonly<ButtonProps>) {
  return (
    <button className={className} onClick={() => {}} type="button">
      {children}
    </button>
  );
}

export default Button;
