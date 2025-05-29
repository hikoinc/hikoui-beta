"use client";

import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = (props: Readonly<ButtonProps>) => {
  const { children } = props;

  return (
    <button className="bg-red-500 text-green-500" type="button">
      {children}
    </button>
  );
};

export default Button;
