import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@hikoui-beta/react";

type ButtonMeta = Meta<typeof Button>;

const meta: ButtonMeta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
