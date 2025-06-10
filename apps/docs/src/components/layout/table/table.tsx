"use client";

import _ from "lodash";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { allDocs } from "contentlayer/generated";

const TableOfContent = () => {
  const pathname = usePathname();

  const index = _.find(allDocs, (doc) => doc.url === pathname);

  return (
    <div className="sticky top-24 w-64 space-y-4 self-start overflow-y-auto">
      <div className="space-y-2">
        <h3 className="text-sm">On this page</h3>

        <ul className="space-y-1">
          {index.headings.map(({ level, text, slug }) => (
            <li key={slug} style={{ marginLeft: `${(level - 2) * 1}rem` }}>
              <NextLink href={`#${slug}`} className="text-content-contrast hover:text-content text-xs">
                {text}
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContent;
