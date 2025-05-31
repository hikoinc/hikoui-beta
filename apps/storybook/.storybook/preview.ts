import type { Preview, StoryFn, StoryContext } from "@storybook/react-vite";

import applyThemeClass from "./utils/apply-theme-class";
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
      applyThemeClass(context);

      return Story(context.args, context);
    },
  ],
};

export default preview;
