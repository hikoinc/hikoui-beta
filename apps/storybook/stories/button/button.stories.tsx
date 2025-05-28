import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../../packages/components/react/src/index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
