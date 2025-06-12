import _ from "lodash";
import { usePathname } from "next/navigation";

import { allDocs } from "contentlayer/generated";

const useAllDocs = () => {
  const pathname = usePathname();

  const docHeadings = (() => {
    const matchedDoc = _.find(allDocs, { url: pathname });

    return matchedDoc?.headings ?? null;
  })();

  const docMenus = {
    routes: [
      {
        title: "Getting Started",
        slug: "getting-started",
        children: [
          {
            title: "Introduction",
            slug: "introduction",
          },
          {
            title: "Installation",
            slug: "installation",
          },
        ],
      },
      {
        title: "Frameworks",
        slug: "frameworks",
        children: [
          {
            title: "Project Structure",
            slug: "project-structure",
          },
        ],
      },
    ],
  };

  return { allDocs, docHeadings, docMenus };
};

export default useAllDocs;
