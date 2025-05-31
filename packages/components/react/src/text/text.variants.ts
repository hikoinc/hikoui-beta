import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const textVariants = cva("text", {
  variants: {
    color: {
      primary: "text-hiko-text-primary",
      secondary: "text-hiko-text-secondary",
      tertiary: "text-hiko-text-tertiary",
      success: "text-hiko-text-success",
      warning: "text-hiko-text-warning",
      danger: "text-hiko-text-danger",
      info: "text-hiko-text-info",
      muted: "text-hiko-text-muted",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export type TextVariantProps = VariantProps<typeof textVariants>;

export default textVariants;
