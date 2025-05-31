import type { StoryContext } from "@storybook/react-vite";

function applyThemeClass(context: StoryContext): void {
  const backgroundValue = context.globals.backgrounds?.value;
  const isDark = backgroundValue === "dark";
  const className = isDark ? "dark" : "light";

  const htmlElement = document.documentElement;

  htmlElement.classList.remove("dark", "light");
  htmlElement.classList.add(className);
}

export default applyThemeClass;
