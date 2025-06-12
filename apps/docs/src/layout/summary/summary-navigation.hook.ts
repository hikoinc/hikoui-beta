import _ from "lodash";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { allDocs } from "contentlayer/generated";

const useSummaryNavigation = () => {
  const pathname = usePathname();

  const headings = useMemo(() => {
    if (!pathname) return null;

    const currentDoc = _.find(allDocs, (doc) => doc.url === pathname);

    return currentDoc?.headings ?? null;
  }, [pathname]);

  return { headings };
};

export default useSummaryNavigation;
