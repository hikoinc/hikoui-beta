import type { PlopTypes } from "@turbo/gen";

function componentGenerator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
      {
        type: "input",
        name: "elementType",
        message: "What HTML element should this component forward ref to?",
        default: "div",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/react/src/components/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "templates/component/component.hbs",
      },
      {
        type: "add",
        path: "packages/react/src/components/{{kebabCase name}}/{{kebabCase name}}.hook.ts",
        templateFile: "templates/component/component.hook.hbs",
      },
      {
        type: "add",
        path: "packages/react/src/components/{{kebabCase name}}/index.ts",
        templateFile: "templates/component/index.hbs",
      },
      {
        type: "add",
        path: "packages/react/src/components/{{kebabCase name}}/__tests__/{{kebabCase name}}.test.tsx",
        templateFile: "templates/component/component.test.hbs",
      },
      {
        type: "add",
        path: "apps/storybook/stories/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
        templateFile: "templates/component/stories/component.stories.hbs",
      },
      {
        type: "append",
        path: "packages/react/src/index.ts",
        template:
          'export { default as {{pascalCase name}} } from "./components/{{kebabCase name}}";\nexport type { {{pascalCase name}}Props } from "./components/{{kebabCase name}}";\n',
      },
    ],
  });
}

export default componentGenerator;
