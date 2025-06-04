import type { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "@hikoui-beta/react";
import type { LinkProps } from "@hikoui-beta/react";

interface OptionType {
  value: string;
  label: string;
}

interface OptionsType {
  colors: OptionType[];
  sizes: OptionType[];
  weights: OptionType[];
  fontStyles: OptionType[];
  letterSpacings: OptionType[];
  transforms: OptionType[];
  displays: OptionType[];
  underlines: OptionType[];
  anchors: OptionType[];
}

const options: OptionsType = {
  colors: [
    { value: "foreground", label: "Foreground" },
    { value: "primary", label: "Primary" },
    { value: "success", label: "Success" },
    { value: "warning", label: "Warning" },
    { value: "danger", label: "Danger" },
    { value: "info", label: "Info" },
    { value: "muted", label: "Muted" },
    { value: "inherit", label: "Inherit" },
  ],
  sizes: [
    { value: "xs", label: "Extra Small" },
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "xl", label: "Extra Large" },
    { value: "2xl", label: "2XL" },
    { value: "3xl", label: "3XL" },
    { value: "4xl", label: "4XL" },
    { value: "5xl", label: "5XL" },
    { value: "6xl", label: "6XL" },
    { value: "7xl", label: "7XL" },
    { value: "8xl", label: "8XL" },
    { value: "9xl", label: "9XL" },
  ],
  weights: [
    { value: "thin", label: "Thin" },
    { value: "extralight", label: "Extra Light" },
    { value: "light", label: "Light" },
    { value: "normal", label: "Normal" },
    { value: "medium", label: "Medium" },
    { value: "semibold", label: "Semibold" },
    { value: "bold", label: "Bold" },
    { value: "extrabold", label: "Extra Bold" },
    { value: "black", label: "Black" },
  ],
  fontStyles: [
    { value: "italic", label: "Italic" },
    { value: "normal", label: "Normal" },
  ],
  letterSpacings: [
    { value: "tighter", label: "Tighter" },
    { value: "tight", label: "Tight" },
    { value: "normal", label: "Normal" },
    { value: "wide", label: "Wide" },
    { value: "wider", label: "Wider" },
    { value: "widest", label: "Widest" },
  ],
  transforms: [
    { value: "capitalize", label: "Capitalize" },
    { value: "uppercase", label: "Uppercase" },
    { value: "lowercase", label: "Lowercase" },
    { value: "normal", label: "Normal" },
  ],
  displays: [
    { value: "block", label: "Block" },
    { value: "inline", label: "Inline" },
    { value: "inline-block", label: "Inline Block" },
    { value: "none", label: "None" },
  ],
  underlines: [
    { value: "hover", label: "Hover" },
    { value: "always", label: "Always" },
    { value: "none", label: "None" },
  ],
  anchors: [
    { value: "external", label: "External" },
    { value: "internal", label: "Internal" },
    { value: "none", label: "None" },
  ],
};

Link.displayName = "Link";

const meta: Meta<LinkProps> = {
  title: "Component/Link",
  component: Link as ComponentType<LinkProps>,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A component that displays link.",
      },
    },
  },
  argTypes: {
    children: {
      description: "The link to display",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    color: {
      description: "The color of the link",
      control: "select",
      options: options.colors.map((color) => color.value),
      table: {
        type: { summary: "foreground | primary | success | warning | danger | info | muted | inherit" },
        defaultValue: { summary: "foreground" },
      },
    },
    size: {
      description: "The size of the link",
      control: "select",
      options: options.sizes.map((size) => size.value),
      table: {
        type: { summary: "xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl" },
        defaultValue: { summary: "md" },
      },
    },
    weight: {
      description: "The font weight of the link",
      control: "select",
      options: options.weights.map((weight) => weight.value),
      table: {
        type: { summary: "thin | extralight | light | normal | medium | semibold | bold | extrabold | black" },
        defaultValue: { summary: "undefined" },
      },
    },
    fontStyle: {
      description: "The font style of the link",
      control: "select",
      options: options.fontStyles.map((style) => style.value),
      table: {
        type: { summary: "italic | normal" },
        defaultValue: { summary: "undefined" },
      },
    },
    letterSpacing: {
      description: "The letter spacing of the link",
      control: "select",
      options: options.letterSpacings.map((spacing) => spacing.value),
      table: {
        type: { summary: "tighter | tight | normal | wide | wider | widest" },
        defaultValue: { summary: "undefined" },
      },
    },
    transform: {
      description: "The link transform",
      control: "select",
      options: options.transforms.map((transform) => transform.value),
      table: {
        type: { summary: "capitalize | uppercase | lowercase | normal" },
        defaultValue: { summary: "undefined" },
      },
    },
    display: {
      description: "The display property of the link",
      control: "select",
      options: options.displays.map((display) => display.value),
      table: {
        type: { summary: "block | inline | inline-block | none" },
        defaultValue: { summary: "undefined" },
      },
    },
    underline: {
      description: "The underline behavior of the link",
      control: "select",
      options: options.underlines.map((underline) => underline.value),
      table: {
        type: { summary: "hover | always | none" },
        defaultValue: { summary: "hover" },
      },
    },
    disabled: {
      description: "Whether the link is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    anchor: {
      description: "The anchor type of the link",
      control: "select",
      options: options.anchors.map((anchor) => anchor.value),
      table: {
        type: { summary: "external | internal | none" },
        defaultValue: { summary: "none" },
      },
    },
    className: {
      description: "Additional CSS classes to apply",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    as: {
      description: "The HTML element type to render",
      control: "select",
      options: ["a", "button", "span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "strong", "em", "div", "label"],
      table: {
        type: { summary: "ElementType" },
        defaultValue: { summary: "a" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Link",
    as: "a",
    color: "primary",
    size: "md",
    underline: "hover",
    disabled: false,
    anchor: "none",
  },
  render: (args) => <Link {...args} href="#" />,
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      {options.colors.map(({ value, label }) => (
        <Link key={value} href="#" color={value as LinkProps["color"]}>
          Link Color {label}
        </Link>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      {options.sizes.map(({ value, label }) => (
        <Link key={value} href="#" size={value as LinkProps["size"]}>
          Link Size {label}
        </Link>
      ))}
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      {options.weights.map(({ value, label }) => (
        <Link key={value} href="#" weight={value as LinkProps["weight"]}>
          Link Weight {label}
        </Link>
      ))}
    </div>
  ),
};

export const FontStyle: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      {options.fontStyles.map(({ value, label }) => (
        <Link key={value} href="#" fontStyle={value as LinkProps["fontStyle"]}>
          In the quiet moments between heartbeats ({label})
        </Link>
      ))}
    </div>
  ),
};

export const LetterSpacing: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      {options.letterSpacings.map(({ value, label }) => (
        <Link key={value} href="#" letterSpacing={value as LinkProps["letterSpacing"]}>
          In the quiet moments between heartbeats ({label})
        </Link>
      ))}
    </div>
  ),
};

export const Transform: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      {options.transforms.map(({ value, label }) => (
        <Link key={value} href="#" transform={value as LinkProps["transform"]}>
          In the quiet moments between heartbeats ({label})
        </Link>
      ))}
    </div>
  ),
};

export const Display: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      {options.displays.map(({ value, label }) => (
        <Link key={value} href="#" display={value as LinkProps["display"]}>
          {label}
        </Link>
      ))}
    </div>
  ),
};

export const Underline: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      {options.underlines.map(({ value, label }) => (
        <Link key={value} href="#" underline={value as LinkProps["underline"]}>
          {label}
        </Link>
      ))}
    </div>
  ),
};

export const Anchor: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      {options.anchors
        .filter(({ value }) => value !== "none")
        .map(({ value, label }) => (
          <Link key={value} href="#" anchor={value as LinkProps["anchor"]}>
            {label}
          </Link>
        ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" disabled>
        Disabled
      </Link>
    </div>
  ),
};
