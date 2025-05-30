import type { Preview } from "@storybook/react-vite";

import "./styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {},
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
