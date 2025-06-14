import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const linkVariants = cva(["antialiased"], {
  variants: {
    color: {
      foreground: "text-component-link-color-foreground",
      primary: "text-component-link-color-primary",
      success: "text-component-link-color-success",
      warning: "text-component-link-color-warning",
      danger: "text-component-link-color-danger",
      info: "text-component-link-color-info",
      muted: "text-component-link-color-quiet",
      inherit: "text-inherit",
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
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    fontStyle: {
      italic: "italic",
      normal: "not-italic",
    },
    letterSpacing: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
    },
    transform: {
      capitalize: "capitalize",
      uppercase: "uppercase",
      lowercase: "lowercase",
      normal: "normal-case",
    },
    underline: {
      always: [
        "relative",
        "before:content-['']",
        "before:absolute",
        "before:bottom-0",
        "before:left-0",
        "before:w-[100%]",
        "before:h-1/14",
        "before:bg-current",
      ],
      hover: [
        "relative",
        "before:content-['']",
        "before:absolute",
        "before:bottom-0",
        "before:left-0",
        "before:w-[100%]",
        "before:h-1/14",
        "before:bg-current",
        "before:transform",
        "before:scale-x-0",
        "before:origin-left",
        "before:transition",
        "before:duration-300",
        "hover:before:scale-x-100",
      ],
      none: undefined,
    },
    display: {
      block: "block",
      "inline-block": "inline-block",
      inline: "inline",
      none: "hidden",
    },
    anchor: {
      external: "after:ml-[0.3em] after:content-['↗']",
      internal: "after:ml-[0.3em] after:content-['→']",
      none: undefined,
    },
    disabled: {
      true: "aria-disabled pointer-events-none cursor-not-allowed opacity-50",
      false: undefined,
    },
  },
  defaultVariants: {
    color: "foreground",
    size: "md",
    underline: "hover",
    disabled: false,
    anchor: "none",
  },
});

export type LinkVariantProps = VariantProps<typeof linkVariants>;

export default linkVariants;
