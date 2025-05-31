import { Text } from "@hikoui-beta/react";
import type { TextProps } from "@hikoui-beta/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

const meta: Meta<TextProps> = {
  title: "Component/Text",
  component: Text as ComponentType<TextProps>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The text to display",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      description: "Controls the text size",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "warning", "danger", "info", "muted"],
      description: "Controls the text color",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
    as: {
      control: "select",
      options: ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "strong", "em", "div", "label"],
      description: "The HTML element type to render",
    },
  },
  args: {
    children: "Text",
    color: "primary",
    size: "md",
    as: "span",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
