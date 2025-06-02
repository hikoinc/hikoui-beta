import { Text } from "@hikoui-beta/react";
import type { TextProps } from "@hikoui-beta/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

Text.displayName = "Text";

const meta: Meta<TextProps> = {
  title: "Component/Text",
  component: Text as ComponentType<TextProps>,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A component that displays text.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The text to display",
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
      description: "The color of the text",
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "warning", "danger", "info", "muted", "inherit"],
      table: {
        type: {
          summary: "primary | secondary | tertiary | success | warning | danger | info | muted | inherit",
        },
        defaultValue: {
          summary: "primary",
        },
      },
    },
    size: {
      description: "The size of the text",
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
      description: "The font weight of the text",
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
      description: "The font style of the text",
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
    leading: {
      description: "The line height of the text",
      control: "select",
      options: ["tight", "snug", "normal", "relaxed", "loose", "none"],
      table: {
        type: {
          summary: "tight | snug | normal | relaxed | loose | none",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    letterSpacing: {
      control: "select",
      options: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      description: "The letter spacing of the text",
      table: {
        type: {
          summary: "tighter | tight | normal | wide | wider | widest",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    whitespace: {
      description: "The whitespace handling of the text",
      control: "select",
      options: ["normal", "nowrap"],
      table: {
        type: {
          summary: "normal | nowrap",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    decoration: {
      description: "The text decoration",
      control: "select",
      options: ["underline", "overline", "line-through"],
      table: {
        type: {
          summary: "underline | overline | line-through",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    transform: {
      description: "The text transform",
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
    align: {
      description: "The text alignment",
      control: "select",
      options: ["left", "center", "right", "justify", "start", "end"],
      table: {
        type: {
          summary: "left | center | right | justify | start | end",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    lineClamp: {
      description: "The number of lines to clamp the text to",
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "none"],
      table: {
        type: {
          summary: "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | none",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    display: {
      description: "The display property of the text",
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
      options: ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "strong", "em", "div", "label"],
      table: {
        type: {
          summary: "ElementType",
        },
        defaultValue: {
          summary: "span",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
    color: "primary",
    size: "md",
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Text color="primary">Text Color Primary</Text>
      <Text color="secondary">Text Color Secondary</Text>
      <Text color="tertiary">Text Color Tertiary</Text>
      <Text color="success">Text Color Success</Text>
      <Text color="warning">Text Color Warning</Text>
      <Text color="danger">Text Color Danger</Text>
      <Text color="info">Text Color Info</Text>
      <Text color="muted">Text Color Muted</Text>
      <Text color="inherit">Text Color Inherit</Text>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Text size="xs">Text Size XS</Text>
      <Text size="sm">Text Size SM</Text>
      <Text size="md">Text Size MD</Text>
      <Text size="lg">Text Size LG</Text>
      <Text size="xl">Text Size XL</Text>
      <Text size="2xl">Text Size 2XL</Text>
      <Text size="3xl">Text Size 3XL</Text>
      <Text size="4xl">Text Size 4XL</Text>
      <Text size="5xl">Text Size 5XL</Text>
      <Text size="6xl">Text Size 6XL</Text>
      <Text size="7xl">Text Size 7XL</Text>
      <Text size="8xl">Text Size 8XL</Text>
      <Text size="9xl">Text Size 9XL</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Text weight="thin">Text Weight Thin</Text>
      <Text weight="extralight">Text Weight Extra Light</Text>
      <Text weight="light">Text Weight Light</Text>
      <Text weight="normal">Text Weight Normal</Text>
      <Text weight="medium">Text Weight Medium</Text>
      <Text weight="semibold">Text Weight Semibold</Text>
      <Text weight="bold">Text Weight Bold</Text>
      <Text weight="extrabold">Text Weight Extra Bold</Text>
      <Text weight="black">Text Weight Black</Text>
    </div>
  ),
};

export const FontStyle: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Text fontStyle="italic">In the quiet moments between heartbeats</Text>
      <Text fontStyle="normal">In the quiet moments between heartbeats</Text>
    </div>
  ),
};

export const Leading: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Text as="p" leading="tight">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" leading="snug">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" leading="normal">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" leading="relaxed">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" leading="loose">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" leading="none">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>
    </div>
  ),
};

export const LetterSpacing: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Text letterSpacing="tighter">In the quiet moments between heartbeats</Text>
      <Text letterSpacing="tight">In the quiet moments between heartbeats</Text>
      <Text letterSpacing="normal">In the quiet moments between heartbeats</Text>
      <Text letterSpacing="wide">In the quiet moments between heartbeats</Text>
      <Text letterSpacing="wider">In the quiet moments between heartbeats</Text>
      <Text letterSpacing="widest">In the quiet moments between heartbeats</Text>
    </div>
  ),
};

export const Whitespace: Story = {
  render: () => (
    <div className="flex w-full max-w-xl flex-col gap-4 p-4">
      <Text as="p" whitespace="nowrap">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" whitespace="normal">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>
    </div>
  ),
};

export const Decorations: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Text decoration="underline">In the quiet moments between heartbeats</Text>
      <Text decoration="overline">In the quiet moments between heartbeats</Text>
      <Text decoration="line-through">In the quiet moments between heartbeats</Text>
    </div>
  ),
};

export const Transform: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Text transform="uppercase">In the quiet moments between heartbeats</Text>
      <Text transform="lowercase">In the quiet moments between heartbeats</Text>
      <Text transform="capitalize">In the quiet moments between heartbeats</Text>
      <Text transform="normal">In the quiet moments between heartbeats</Text>
    </div>
  ),
};

export const Align: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-4 p-4">
      <Text as="p" align="left">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" align="center">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" align="right">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" align="justify">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" align="start">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>

      <Text as="p" align="end">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>
    </div>
  ),
};

export const LineClamp: Story = {
  render: () => (
    <div className="max-w-xs p-4">
      <Text as="p" lineClamp="2">
        In the quiet moments between heartbeats, I find myself remembering the way you laughed - not the polite kind,
        but the deep, unguarded laughter that came from somewhere true. It&apos;s strange how grief doesn&apos;t arrive
        all at once, but in waves, each one carrying memories I thought I&apos;d forgotten. Sometimes I catch myself
        reaching for my phone to share something with you, only to remember that the conversation has ended, but
        somehow, the love remains.
      </Text>
    </div>
  ),
};
