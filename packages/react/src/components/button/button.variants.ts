import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva("flex items-center justify-center", {
  variants: {
    color: {
      foreground: undefined,
      primary: undefined,
      secondary: undefined,
      success: undefined,
      warning: undefined,
      danger: undefined,
      info: undefined,
    },
    variant: {
      solid: undefined,
      outline: undefined,
    },
    size: {
      xs: "h-6 px-3 text-xs",
      sm: "h-8 px-4 text-sm",
      md: "h-10 px-6 text-sm",
      lg: "h-12 px-8 text-base",
      xl: "h-14 px-10 text-base",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    cursor: {
      pointer: "cursor-pointer",
      default: "cursor-default",
      notAllowed: "cursor-not-allowed",
      wait: "cursor-wait",
    },
    shouldFullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
  compoundVariants: [
    {
      color: "foreground",
      variant: "solid",
      className: [
        "bg-palette-foreground-button",
        "border-1 border-line-foreground-button",
        "text-typography-foreground-button",
      ],
    },
    {
      color: "primary",
      variant: "solid",
      className: "bg-palette-primary-button",
    },
  ],
  defaultVariants: {
    color: "primary",
    variant: "solid",
    size: "md",
    rounded: "none",
    cursor: "pointer",
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export default buttonVariants;
