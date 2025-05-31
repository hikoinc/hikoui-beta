import type { Preview, StoryFn, StoryContext } from "@storybook/react";

import "./styles/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: {
          name: "Dark",
          value: "#000000",
        },
        light: {
          name: "Light",
          value: "#ffffff",
        },
      },
    },
  },
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      const backgroundValue = context.globals.backgrounds?.value;
      const isDark = backgroundValue === "#000000" || backgroundValue === "dark";
      const className = isDark ? "dark" : "light";

      const htmlElement = document.documentElement;
      htmlElement.classList.remove("dark", "light");
      htmlElement.classList.add(className);

      return Story(context.args, context);
    },
  ],
};

export default preview;
