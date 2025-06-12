import _ from "lodash";
import { usePathname } from "next/navigation";

import { useAllDocs } from "src/hooks";

const useContentPagination = () => {
  const pathname = usePathname();
  const { docMenus } = useAllDocs();

  const flattenedDocs = _.flatMap(docMenus.routes, (group) =>
    _.map(group.children, (item) => ({
      href: `/docs/${group.slug}/${item.slug}`,
      title: item.title,
    })),
  );

  const currentIndex = _.findIndex(flattenedDocs, { href: pathname });

  const pagination = (() => {
    if (currentIndex === -1) {
      return { prev: null, next: null };
    }

    return {
      prev: currentIndex > 0 ? flattenedDocs[currentIndex - 1] : null,
      next: currentIndex < flattenedDocs.length - 1 ? flattenedDocs[currentIndex + 1] : null,
    };
  })();

  return { pagination };
};

export default useContentPagination;
