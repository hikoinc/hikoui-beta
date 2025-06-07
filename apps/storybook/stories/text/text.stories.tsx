import { Text } from "@hikoui-beta/react";
import type { TextProps } from "@hikoui-beta/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

interface OptionType {
  value: string;
  label: string;
}

interface OptionsType {
  colors: OptionType[];
  sizes: OptionType[];
  weights: OptionType[];
  fontStyles: OptionType[];
  leadings: OptionType[];
  letterSpacings: OptionType[];
  whitespaces: OptionType[];
  decorations: OptionType[];
  transforms: OptionType[];
  aligns: OptionType[];
  lineClamps: OptionType[];
  displays: OptionType[];
}

const options: OptionsType = {
  colors: [
    { value: "primary", label: "Primary" },
    { value: "secondary", label: "Secondary" },
    { value: "tertiary", label: "Tertiary" },
    { value: "accent", label: "Accent" },
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
  leadings: [
    { value: "tight", label: "Tight" },
    { value: "snug", label: "Snug" },
    { value: "normal", label: "Normal" },
    { value: "relaxed", label: "Relaxed" },
    { value: "loose", label: "Loose" },
    { value: "none", label: "None" },
  ],
  letterSpacings: [
    { value: "tighter", label: "Tighter" },
    { value: "tight", label: "Tight" },
    { value: "normal", label: "Normal" },
    { value: "wide", label: "Wide" },
    { value: "wider", label: "Wider" },
    { value: "widest", label: "Widest" },
  ],
  whitespaces: [
    { value: "normal", label: "Normal" },
    { value: "nowrap", label: "No Wrap" },
  ],
  decorations: [
    { value: "underline", label: "Underline" },
    { value: "overline", label: "Overline" },
    { value: "line-through", label: "Line Through" },
  ],
  transforms: [
    { value: "capitalize", label: "Capitalize" },
    { value: "uppercase", label: "Uppercase" },
    { value: "lowercase", label: "Lowercase" },
    { value: "normal", label: "Normal" },
  ],
  aligns: [
    { value: "left", label: "Left" },
    { value: "center", label: "Center" },
    { value: "right", label: "Right" },
    { value: "justify", label: "Justify" },
    { value: "start", label: "Start" },
    { value: "end", label: "End" },
  ],
  lineClamps: [
    { value: "1", label: "1 Line" },
    { value: "2", label: "2 Lines" },
    { value: "3", label: "3 Lines" },
    { value: "4", label: "4 Lines" },
    { value: "5", label: "5 Lines" },
    { value: "6", label: "6 Lines" },
    { value: "7", label: "7 Lines" },
    { value: "8", label: "8 Lines" },
    { value: "none", label: "None" },
  ],
  displays: [
    { value: "block", label: "Block" },
    { value: "inline", label: "Inline" },
    { value: "inline-block", label: "Inline Block" },
    { value: "none", label: "None" },
  ],
};

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
      options: options.colors.map((color) => color.value),
      table: {
        type: {
          summary: "primary | secondary | tertiary | accent | success | warning | danger | info | muted | inherit",
        },
        defaultValue: {
          summary: "primary",
        },
      },
    },
    size: {
      description: "The size of the text",
      control: "select",
      options: options.sizes.map((size) => size.value),
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
      options: options.weights.map((weight) => weight.value),
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
      options: options.fontStyles.map((style) => style.value),
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
      options: options.leadings.map((leading) => leading.value),
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
      description: "The letter spacing of the text",
      control: "select",
      options: options.letterSpacings.map((spacing) => spacing.value),
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
      options: options.whitespaces.map((whitespace) => whitespace.value),
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
      options: options.decorations.map((decoration) => decoration.value),
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
      options: options.transforms.map((transform) => transform.value),
      table: {
        type: {
          summary: "capitalize | uppercase | lowercase | normal",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    align: {
      description: "The text alignment",
      control: "select",
      options: options.aligns.map((align) => align.value),
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
      options: options.lineClamps.map((clamp) => clamp.value),
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
      options: options.displays.map((display) => display.value),
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

export const Default: Story = {
  args: {
    children: "Text",
    color: "primary",
    size: "md",
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      {options.colors.map(({ value, label }) => (
        <Text key={value} color={value as TextProps["color"]}>
          {label}
        </Text>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      {options.sizes.map(({ value, label }) => (
        <Text key={value} size={value as TextProps["size"]}>
          Size {label}
        </Text>
      ))}
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      {options.weights.map(({ value, label }) => (
        <Text key={value} weight={value as TextProps["weight"]}>
          {label}
        </Text>
      ))}
    </div>
  ),
};

export const FontStyle: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      {options.fontStyles.map(({ value, label }) => (
        <Text key={value} fontStyle={value as TextProps["fontStyle"]}>
          In the quiet moments between heartbeats ({label})
        </Text>
      ))}
    </div>
  ),
};

export const Leading: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      {options.leadings.map(({ value, label }) => (
        <Text key={value} as="p" leading={value as TextProps["leading"]}>
          In the quiet moments between heartbeats, I find myself remembering the way you laughed. It comes back in
          fragments and echoes. ({label})
        </Text>
      ))}
    </div>
  ),
};

export const LetterSpacing: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      {options.letterSpacings.map(({ value, label }) => (
        <Text key={value} letterSpacing={value as TextProps["letterSpacing"]}>
          In the quiet moments between heartbeats ({label})
        </Text>
      ))}
    </div>
  ),
};

export const Whitespace: Story = {
  render: () => (
    <div className="flex w-full max-w-xl flex-col gap-4 p-4">
      {options.whitespaces.map(({ value, label }) => (
        <Text key={value} as="p" whitespace={value as TextProps["whitespace"]}>
          In the quiet moments between heartbeats, I find myself remembering the way you laughed. It comes back in
          fragments and echoes. ({label})
        </Text>
      ))}
    </div>
  ),
};

export const Decorations: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      {options.decorations.map(({ value, label }) => (
        <Text key={value} decoration={value as TextProps["decoration"]}>
          In the quiet moments between heartbeats ({label})
        </Text>
      ))}
    </div>
  ),
};

export const Transform: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      {options.transforms.map(({ value, label }) => (
        <Text key={value} transform={value as TextProps["transform"]}>
          In the quiet moments between heartbeats ({label})
        </Text>
      ))}
    </div>
  ),
};

export const Align: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-4 p-4">
      {options.aligns.map(({ value, label }) => (
        <Text key={value} as="p" align={value as TextProps["align"]}>
          In the quiet moments between heartbeats, I find myself remembering the way you laughed. It comes back in
          fragments and echoes. ({label})
        </Text>
      ))}
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
