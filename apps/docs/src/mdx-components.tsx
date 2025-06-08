import { useMDXComponents as getNextraComponents } from "nextra/mdx-components";
import type { MDXComponents } from "nextra/mdx-components";

import TableOfContents from "src/components/table-of-contents";

export const defaultComponents = getNextraComponents({
  wrapper(props) {
    const { children, toc } = props;

    return (
      <div className="flex flex-1">
        <div className="flex-1 p-4">{children}</div>
        <TableOfContents toc={toc} />
      </div>
    );
  },
});

export const useMDXComponents = (components: MDXComponents) => ({
  ...defaultComponents,
  ...components,
});
