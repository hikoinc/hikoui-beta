import type { PlopTypes } from "@turbo/gen";

function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/components/react/src/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "templates/component/component.hbs",
      },
      {
        type: "add",
        path: "packages/components/react/src/{{kebabCase name}}/{{kebabCase name}}.hook.ts",
        templateFile: "templates/component/component.hook.hbs",
      },
      {
        type: "add",
        path: "packages/components/react/src/{{kebabCase name}}/{{kebabCase name}}.variants.ts",
        templateFile: "templates/component/component.variants.hbs",
      },
      {
        type: "add",
        path: "packages/components/react/src/{{kebabCase name}}/index.ts",
        templateFile: "templates/component/index.hbs",
      },
      {
        type: "add",
        path: "packages/components/react/src/{{kebabCase name}}/__tests__/{{kebabCase name}}.test.tsx",
        templateFile: "templates/component/component.test.hbs",
      },
      {
        type: "add",
        path: "apps/storybook/stories/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
        templateFile: "templates/component/component.stories.hbs",
      },
      {
        type: "append",
        path: "packages/components/react/src/index.ts",
        template:
          'export { default as {{pascalCase name}} } from "./{{kebabCase name}}";\nexport type * from "./{{kebabCase name}}";',
      },
    ],
  });
}

export default generator;
