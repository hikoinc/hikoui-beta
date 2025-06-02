import { Link } from "@hikoui-beta/react";
import type { LinkProps } from "@hikoui-beta/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

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
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The link to display",
      control: "text",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    href: {
      description: "The URL that the hyperlink points to",
      control: "text",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    color: {
      description: "The color of the link",
      control: "select",
      options: ["primary", "secondary", "foreground", "success", "warning", "danger", "info", "muted", "inherit"],
      table: {
        type: {
          summary: "primary | secondary | foreground | success | warning | danger | info | muted | inherit",
        },
        defaultValue: {
          summary: "foreground",
        },
      },
    },
    size: {
      description: "The size of the link",
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      table: {
        type: {
          summary: "xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl",
        },
        defaultValue: {
          summary: "md",
        },
      },
    },
    weight: {
      description: "The font weight of the link",
      control: "select",
      options: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      table: {
        type: {
          summary: "thin | extralight | light | normal | medium | semibold | bold | extrabold | black",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    fontStyle: {
      description: "The font style of the link",
      control: "select",
      options: ["italic", "normal"],
      table: {
        type: {
          summary: "italic | normal",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    letterSpacing: {
      control: "select",
      options: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      description: "The letter spacing of the link",
      table: {
        type: {
          summary: "tighter | tight | normal | wide | wider | widest",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    transform: {
      description: "The link transform",
      control: "select",
      options: ["uppercase", "lowercase", "capitalize", "normal"],
      table: {
        type: {
          summary: "uppercase | lowercase | capitalize | normal",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    display: {
      description: "The display property of the link",
      control: "select",
      options: ["block", "inline", "inline-block", "none"],
      table: {
        type: {
          summary: "block | inline | inline-block | none",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    underline: {
      description: "The underline behavior of the link",
      control: "select",
      options: ["hover", "always", "active", "focus", "none"],
      table: {
        type: {
          summary: "hover | always | active | focus | none",
        },
        defaultValue: {
          summary: "hover",
        },
      },
    },
    disabled: {
      description: "Whether the link is disabled",
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
    anchor: {
      description: "The anchor type of the link",
      control: "select",
      options: ["external", "internal", "none"],
      table: {
        type: {
          summary: "external | internal | none",
        },
        defaultValue: {
          summary: "none",
        },
      },
    },
    focus: {
      description: "Whether to show focus styles",
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "true",
        },
      },
    },
    className: {
      description: "Additional CSS classes to apply",
      control: "text",
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
      control: "select",
      options: ["a", "button", "span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "strong", "em", "div", "label"],
      table: {
        type: {
          summary: "ElementType",
        },
        defaultValue: {
          summary: "a",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Link",
    as: "a",
    href: "#",
    color: "foreground",
    size: "md",
    underline: "hover",
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" color="foreground">
        Link Color Foreground
      </Link>

      <Link href="#" color="primary">
        Link Color Primary
      </Link>

      <Link href="#" color="secondary">
        Link Color Secondary
      </Link>
      <Link href="#" color="success">
        Link Color Success
      </Link>

      <Link href="#" color="warning">
        Link Color Warning
      </Link>

      <Link href="#" color="danger">
        Link Color Danger
      </Link>

      <Link href="#" color="info">
        Link Color Info
      </Link>

      <Link href="#" color="muted">
        Link Color Muted
      </Link>

      <Link href="#" color="inherit">
        Link Color Inherit
      </Link>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" size="xs">
        Link Size XS
      </Link>

      <Link href="#" size="sm">
        Link Size SM
      </Link>
      <Link href="#" size="md">
        Link Size MD
      </Link>

      <Link href="#" size="lg">
        Link Size LG
      </Link>

      <Link href="#" size="xl">
        Link Size XL
      </Link>

      <Link href="#" size="2xl">
        Link Size 2XL
      </Link>

      <Link href="#" size="3xl">
        Link Size 3XL
      </Link>

      <Link href="#" size="4xl">
        Link Size 4XL
      </Link>

      <Link href="#" size="5xl">
        Link Size 5XL
      </Link>

      <Link href="#" size="6xl">
        Link Size 6XL
      </Link>

      <Link href="#" size="7xl">
        Link Size 7XL
      </Link>

      <Link href="#" size="8xl">
        Link Size 8XL
      </Link>

      <Link href="#" size="9xl">
        Link Size 9XL
      </Link>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" weight="thin">
        Link Weight Thin
      </Link>
      <Link href="#" weight="extralight">
        Link Weight Extra Light
      </Link>
      <Link href="#" weight="light">
        Link Weight Light
      </Link>
      <Link href="#" weight="normal">
        Link Weight Normal
      </Link>
      <Link href="#" weight="medium">
        Link Weight Medium
      </Link>
      <Link href="#" weight="semibold">
        Link Weight Semibold
      </Link>
      <Link href="#" weight="bold">
        Link Weight Bold
      </Link>
      <Link href="#" weight="extrabold">
        Link Weight Extra Bold
      </Link>
      <Link href="#" weight="black">
        Link Weight Black
      </Link>
    </div>
  ),
};

export const FontStyle: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" fontStyle="italic">
        In the quiet moments between heartbeats
      </Link>
      <Link href="#" fontStyle="normal">
        In the quiet moments between heartbeats
      </Link>
    </div>
  ),
};

export const LetterSpacing: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" letterSpacing="tighter">
        In the quiet moments between heartbeats
      </Link>

      <Link href="#" letterSpacing="tight">
        In the quiet moments between heartbeats
      </Link>

      <Link href="#" letterSpacing="normal">
        In the quiet moments between heartbeats
      </Link>

      <Link href="#" letterSpacing="wide">
        In the quiet moments between heartbeats
      </Link>

      <Link href="#" letterSpacing="wider">
        In the quiet moments between heartbeats
      </Link>

      <Link href="#" letterSpacing="widest">
        In the quiet moments between heartbeats
      </Link>
    </div>
  ),
};

export const Transform: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" transform="uppercase">
        In the quiet moments between heartbeats
      </Link>

      <Link href="#" transform="lowercase">
        In the quiet moments between heartbeats
      </Link>

      <Link href="#" transform="capitalize">
        In the quiet moments between heartbeats
      </Link>

      <Link href="#" transform="normal">
        In the quiet moments between heartbeats
      </Link>
    </div>
  ),
};

export const Underline: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" underline="hover">
        Link Underline Hover
      </Link>

      <Link href="#" underline="always">
        Link Underline Always
      </Link>

      <Link href="#" underline="active">
        Link Underline Active
      </Link>

      <Link href="#" underline="focus">
        Link Underline Focus
      </Link>

      <Link href="#" underline="none">
        Link Underline None
      </Link>
    </div>
  ),
};

export const Anchor: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" anchor="external">
        Link Anchor External
      </Link>

      <Link href="#" anchor="internal">
        Link Anchor Internal
      </Link>
    </div>
  ),
};

export const Focus: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" focus>
        Link Focus
      </Link>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="#" disabled>
        Link Disabled
      </Link>
    </div>
  ),
};
