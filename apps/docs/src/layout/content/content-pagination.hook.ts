import _ from "lodash";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { allDocs } from "contentlayer/generated";
import type { Doc } from "contentlayer/generated";

const useContentPagination = () => {
  const pathname = usePathname();

  const pagination = useMemo(() => {
    const currentIndex = _.findIndex(allDocs, (doc: Doc) => doc.url === pathname);

    if (currentIndex === -1) {
      return { prev: null, next: null };
    }

    const prev = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
    const next = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

    return {
      prev: prev ? { href: prev.url, title: prev.title } : null,
      next: next ? { href: next.url, title: next.title } : null,
    };
  }, [pathname]);

  return { pagination };
};

export default useContentPagination;
