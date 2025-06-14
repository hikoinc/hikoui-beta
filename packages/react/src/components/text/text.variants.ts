import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const textVariants = cva("antialiased", {
  variants: {
    color: {
      primary: "text-content",
      secondary: "text-content-soft",
      tertiary: "text-content-quiet",
      accent: "text-primary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
      info: "text-info",
      muted: "text-content-quiet",
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
    leading: {
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
      none: "leading-none",
    },
    letterSpacing: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
    },
    decoration: {
      underline: "underline",
      overline: "overline",
      "line-through": "line-through",
    },
    whitespace: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
    },
    transform: {
      capitalize: "capitalize",
      uppercase: "uppercase",
      lowercase: "lowercase",
      normal: "normal-case",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
      start: "text-start",
      end: "text-end",
    },
    lineClamp: {
      "1": "line-clamp-1",
      "2": "line-clamp-2",
      "3": "line-clamp-3",
      "4": "line-clamp-4",
      "5": "line-clamp-5",
      "6": "line-clamp-6",
      "7": "line-clamp-7",
      "8": "line-clamp-8",
      none: "line-clamp-none",
    },
    display: {
      block: "block",
      "inline-block": "inline-block",
      inline: "inline",
      none: "hidden",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

export type TextVariantProps = VariantProps<typeof textVariants>;

export default textVariants;
