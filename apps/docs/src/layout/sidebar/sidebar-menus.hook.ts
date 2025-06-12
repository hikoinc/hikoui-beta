import _ from "lodash";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { allDocs } from "contentlayer/generated";
import type { Doc } from "contentlayer/generated";

const useSidebarMenus = () => {
  const pathname = usePathname();

  const menus = useMemo(() => {
    return _.map(allDocs, (doc: Doc) => ({
      title: doc.title,
      href: doc.url,
    }));
  }, []);

  const isActive = (href: string) => pathname === href;

  return { menus, isActive };
};

export default useSidebarMenus;
