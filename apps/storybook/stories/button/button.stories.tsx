import type { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@hikoui-beta/react";
import type { ButtonProps } from "@hikoui-beta/react";

interface OptionType {
  value: string;
  label: string;
}

interface OptionsType {
  colors: OptionType[];
  variants: OptionType[];
  sizes: OptionType[];
  rounded: OptionType[];
  cursors: OptionType[];
}

const options: OptionsType = {
  colors: [
    {
      value: "default",
      label: "Default",
    },
    {
      value: "primary",
      label: "Primary",
    },
    {
      value: "secondary",
      label: "Secondary",
    },
    {
      value: "success",
      label: "Success",
    },
    {
      value: "warning",
      label: "Warning",
    },
    {
      value: "danger",
      label: "Danger",
    },
    {
      value: "info",
      label: "Info",
    },
  ],
  variants: [
    {
      value: "solid",
      label: "Solid",
    },
    {
      value: "outline",
      label: "Outline",
    },
  ],
  sizes: [
    {
      value: "xs",
      label: "Extra Small",
    },
    {
      value: "sm",
      label: "Small",
    },
    {
      value: "md",
      label: "Medium",
    },
    {
      value: "lg",
      label: "Large",
    },
    {
      value: "xl",
      label: "Extra Large",
    },
  ],
  rounded: [
    {
      value: "none",
      label: "None",
    },
    {
      value: "sm",
      label: "Small",
    },
    {
      value: "md",
      label: "Medium",
    },
    {
      value: "lg",
      label: "Large",
    },
    {
      value: "xl",
      label: "Extra Large",
    },
    {
      value: "full",
      label: "Full",
    },
  ],
  cursors: [
    {
      value: "pointer",
      label: "Pointer",
    },
    {
      value: "default",
      label: "Default",
    },
    {
      value: "wait",
      label: "Wait",
    },
    {
      value: "notAllowed",
      label: "Not Allowed",
    },
  ],
};

const meta: Meta<ButtonProps> = {
  title: "Component/Button",
  component: Button as ComponentType<ButtonProps>,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A component that displays a button.",
      },
    },
  },
  argTypes: {
    color: {
      description: "The color of the button",
      control: "select",
      options: options.colors.map((color) => color.value),
      table: {
        type: { summary: "default | primary | secondary | success | warning | danger | info" },
        defaultValue: { summary: "default" },
      },
    },
    variant: {
      description: "The variant of the button",
      control: "select",
      options: options.variants.map((variant) => variant.value),
      table: {
        type: { summary: "solid | outline" },
        defaultValue: { summary: "solid" },
      },
    },
    size: {
      description: "The size of the button",
      control: "select",
      options: options.sizes.map((size) => size.value),
      table: {
        type: { summary: "xs | sm | md | lg | xl" },
        defaultValue: { summary: "md" },
      },
    },
    rounded: {
      description: "The roundedness of the button",
      control: "select",
      options: options.rounded.map((radius) => radius.value),
      table: {
        type: { summary: "xs | sm | md | lg | xl | full | none" },
        defaultValue: { summary: "none" },
      },
    },
    cursor: {
      description: "The cursor of the button",
      control: "select",
      options: options.cursors.map((cursor) => cursor.value),
      table: {
        type: { summary: "pointer | default | wait | notAllowed" },
        defaultValue: { summary: "pointer" },
      },
    },
    shouldFullWidth: {
      description: "Whether the button should be full width",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    type: {
      description: "The type of button",
      control: "select",
      options: ["button", "submit", "reset"],
      table: {
        type: { summary: "button | submit | reset" },
        defaultValue: { summary: "button" },
      },
    },
    children: {
      control: "text",
      description: "The text to display",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    as: {
      description: "The HTML element type to render",
      table: {
        type: { summary: "Element" },
        defaultValue: { summary: "Element" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    as: "button",
    color: "default",
    variant: "solid",
    size: "md",
    rounded: "none",
    cursor: "pointer",
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4">
      {options.colors.map(({ value, label }) => (
        <Button key={value} color={value as ButtonProps["color"]}>
          {label}
        </Button>
      ))}
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4">
      {options.variants.map(({ value, label }) => (
        <Button key={value} variant={value as ButtonProps["variant"]}>
          {label}
        </Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4">
      {options.sizes.map(({ value, label }) => (
        <Button key={value} size={value as ButtonProps["size"]}>
          {label}
        </Button>
      ))}
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4">
      {options.rounded.map(({ value, label }) => (
        <Button key={value} rounded={value as ButtonProps["rounded"]}>
          {label}
        </Button>
      ))}
    </div>
  ),
};

export const Cursors: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4">
      {options.cursors.map(({ value, label }) => (
        <Button key={value} cursor={value as ButtonProps["cursor"]}>
          {label}
        </Button>
      ))}
    </div>
  ),
};

export const ShouldFullWidth: Story = {
  render: () => (
    <div className="min-w-md flex w-full p-4">
      <Button shouldFullWidth>Button</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Button disabled>Button</Button>,
};
