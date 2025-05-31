import type { PlopTypes } from "@turbo/gen";

function packageGenerator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("package", {
    description: "Adds a new package",
    prompts: [
      {
        type: "input",
        name: "basePath",
        message: "Where should this package be created? (relative to packages/)",
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
        default: "HikoUI is a minimal-design React + Tailwind CSS component system for fast, scalable UI development.",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{basePath}}/{{kebabCase name}}/package.json",
        templateFile: "templates/package/package.hbs",
      },
      {
        type: "add",
        path: "packages/{{basePath}}/{{kebabCase name}}/tsconfig.json",
        templateFile: "templates/package/tsconfig.hbs",
      },
      {
        type: "add",
        path: "packages/{{basePath}}/{{kebabCase name}}/tsup.config.ts",
        templateFile: "templates/package/tsup.config.hbs",
      },
      {
        type: "add",
        path: "packages/{{basePath}}/{{kebabCase name}}/.gitignore",
        templateFile: "templates/package/.gitignore.hbs",
      },
      {
        type: "add",
        path: "packages/{{basePath}}/{{kebabCase name}}/README.md",
        templateFile: "templates/package/README.hbs",
      },
      {
        type: "add",
        path: "packages/{{basePath}}/{{kebabCase name}}/src/index.ts",
        templateFile: "templates/package/src/index.hbs",
      },
    ],
  });
}

export default packageGenerator;
