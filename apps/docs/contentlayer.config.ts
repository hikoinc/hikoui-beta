import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { defineDocumentType, makeSource } from "contentlayer2/source-files";

import { getContentUrl, parseMarkdownHeadings } from "./src/utils";

const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => getContentUrl(doc._raw.flattenedPath, "docs"),
    },
    headings: {
      type: "json",
      resolve: (doc) => parseMarkdownHeadings(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "src/markdown",
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [remarkGfm, rehypeSlug],
  },
});
