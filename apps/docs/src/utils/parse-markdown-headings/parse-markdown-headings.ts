import _ from "lodash";

function parseMarkdownHeadings(raw: string) {
  const headingRegex = /^(#{2,6})\s+(.*)$/gm;

  return Array.from(raw.matchAll(headingRegex)).map((match) => {
    const level = match[1].length;
    const text = match[2];

    const slug = _.chain(text)
      .toLower()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .value();

    return { level, text, slug };
  });
}

export default parseMarkdownHeadings;
