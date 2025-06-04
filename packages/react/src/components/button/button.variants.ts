import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva("flex items-center justify-center", {
  variants: {
    color: {
      default: undefined,
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
      wait: "cursor-wait",
      notAllowed: "cursor-not-allowed",
    },
    shouldFullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "cursor-not-allowed opacity-40",
    },
  },
  compoundVariants: [
    {
      color: "default",
      variant: "solid",
      className: [
        "bg-component-button-bg-default",
        "border-1 border-component-button-border-default",
        "text-component-button-color-default",
      ],
    },
    {
      color: "primary",
      variant: "solid",
      className: [
        "bg-component-button-bg-primary",
        "border-1 border-component-button-border-primary",
        "text-component-button-color-primary",
      ],
    },
    {
      color: "secondary",
      variant: "solid",
      className: [
        "bg-component-button-bg-secondary",
        "border-1 border-component-button-border-secondary",
        "text-component-button-color-secondary",
      ],
    },
    {
      color: "success",
      variant: "solid",
      className: [
        "bg-component-button-bg-success",
        "border-1 border-component-button-border-success",
        "text-component-button-color-success",
      ],
    },
    {
      color: "warning",
      variant: "solid",
      className: [
        "bg-component-button-bg-warning",
        "border-1 border-component-button-border-warning",
        "text-component-button-color-warning",
      ],
    },
    {
      color: "danger",
      variant: "solid",
      className: [
        "bg-component-button-bg-danger",
        "border-1 border-component-button-border-danger",
        "text-component-button-color-danger",
      ],
    },
    {
      color: "info",
      variant: "solid",
      className: [
        "bg-component-button-bg-info",
        "border-1 border-component-button-border-info",
        "text-component-button-color-info",
      ],
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "solid",
    size: "md",
    rounded: "none",
    cursor: "pointer",
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export default buttonVariants;
