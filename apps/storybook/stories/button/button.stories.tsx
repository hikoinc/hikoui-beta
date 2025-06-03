import { Button } from "@hikoui-beta/react";
import type { ButtonProps } from "@hikoui-beta/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

const meta: Meta<ButtonProps> = {
  title: "Component/Button",
  component: Button as ComponentType<ButtonProps>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {},
    variant: {},
    size: {
      description: "The size of the button",
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: "xs | sm | md | lg | xl",
        },
        defaultValue: {
          summary: "md",
        },
      },
    },
    rounded: {
      description: "The roundedness of the button",
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "full", "none"],
      table: {
        type: {
          summary: "xs | sm | md | lg | xl | full | none",
        },
        defaultValue: {
          summary: "none",
        },
      },
    },
    cursor: {
      description: "The cursor of the button",
      control: "select",
      options: ["pointer", "default", "notAllowed", "wait"],
    },
    shouldFullWidth: {
      description: "Whether the button should be full width",
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    type: {
      description: "The type of button",
      control: "select",
      options: ["button", "submit", "reset"],
      table: {
        type: {
          summary: "button | submit | reset",
        },
        defaultValue: {
          summary: "button",
        },
      },
    },
    children: {
      control: "text",
      description: "The text to display",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    as: {
      description: "The HTML element type to render",
      table: {
        type: {
          summary: "Element",
        },
        defaultValue: {
          summary: "Element",
        },
      },
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    as: "button",
    type: "button",
    color: "foreground",
    variant: "solid",
    size: "md",
    cursor: "pointer",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="xl">Button</Button>
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Button rounded="none">Button</Button>
      <Button rounded="sm">Button</Button>
      <Button rounded="md">Button</Button>
      <Button rounded="lg">Button</Button>
      <Button rounded="xl">Button</Button>
      <Button rounded="full">Button</Button>
    </div>
  ),
};

export const ShouldFullWidth: Story = {
  render: () => (
    <div className="min-w-md flex w-full flex-col items-start gap-4 p-4">
      <Button shouldFullWidth>Button</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Button disabled>Button</Button>,
};
