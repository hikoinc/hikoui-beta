import { defineDocumentType, makeSource } from "contentlayer2/source-files";

const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the doc",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the doc",
      required: true,
    },
    order: {
      type: "number",
      description: "The order of the doc",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`,
    },
    headings: {
      type: "json",
      resolve: (doc) => {
        const headingRegex = /^(#{2,6})\s+(.*)$/gm;
        const headings = [];
        let match: RegExpExecArray | null = null;

        while ((match = headingRegex.exec(doc.body.raw)) !== null) {
          const level = match[1].length;
          const text = match[2];

          const slug = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");
          headings.push({ level, text, slug });
        }
        return headings;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "src/docs",
  documentTypes: [Doc],
});
