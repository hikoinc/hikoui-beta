import type { PlopTypes } from "@turbo/gen";

function packageGenerator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("package", {
    description: "Adds a new package",
    prompts: [
      {
        type: "input",
        name: "category",
        message: "What category should this package be in? (core, hooks, utils etc.)",
        default: "core",
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the package?",
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of the package?",
        default: "A minimalist React component library built with Tailwind CSS for fast, scalable UI development.",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{category}}/{{kebabCase name}}/package.json",
        templateFile: "templates/package/package.hbs",
      },
      {
        type: "add",
        path: "packages/{{category}}/{{kebabCase name}}/tsconfig.json",
        templateFile: "templates/package/tsconfig.hbs",
      },
      {
        type: "add",
        path: "packages/{{category}}/{{kebabCase name}}/tsup.config.ts",
        templateFile: "templates/package/tsup.config.hbs",
      },
      {
        type: "add",
        path: "packages/{{category}}/{{kebabCase name}}/.gitignore",
        templateFile: "templates/package/.gitignore.hbs",
      },
      {
        type: "add",
        path: "packages/{{category}}/{{kebabCase name}}/README.md",
        templateFile: "templates/package/README.hbs",
      },
      {
        type: "add",
        path: "packages/{{category}}/{{kebabCase name}}/src/index.ts",
        templateFile: "templates/package/src/index.hbs",
      },
    ],
  });
}

export default packageGenerator;
