import { Text } from "@hikoui-beta/react";
import type { TextProps } from "@hikoui-beta/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Storybook metadata for the Text component
 */
const meta: Meta<TextProps> = {
  title: "Component/Text",
  component: Text,
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
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      description: "Controls the text size",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "warning", "danger", "info", "muted"],
      description: "Controls the text color",
    },
    as: {
      control: "select",
      options: ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "strong", "em", "div", "label"],
      description: "The HTML element type to render",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
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

/**
 * Default text component display
 */
export const Primary: Story = {
  args: {},
};
