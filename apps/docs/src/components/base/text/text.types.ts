import type { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  variant?: "head-1" | "head-2" | "head-3" | "head-4" | "head-5" | "head-6" | "body" | "label" | "caption";
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  className?: string;
}
