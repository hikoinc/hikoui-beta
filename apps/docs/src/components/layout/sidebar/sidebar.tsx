"use client";

import _ from "lodash";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { allDocs } from "contentlayer/generated";

const Sidebar = () => {
  const pathname = usePathname();

  const sortedDocs = _.sortBy(allDocs, ["order"]);

  const menus = _.map(sortedDocs, (doc) => ({
    title: doc.title,
    href: `/docs/${doc._raw.flattenedPath}`,
  }));

  const renderMenus = () =>
    menus.map((menu) => {
      const classes = `block text-sm ${pathname === menu.href ? "text-primary" : "text-content-contrast hover:text-primary"}`;

      return (
        <NextLink key={menu.href} className={classes} href={menu.href}>
          {menu.title}
        </NextLink>
      );
    });

  return (
    <div className="sticky top-24 w-64 space-y-4 self-start overflow-y-auto">
      <div className="space-y-4">
        <h3 className="text-base">Getting Started</h3>
        <div className="space-y-2">{renderMenus()}</div>
      </div>
    </div>
  );
};

export default Sidebar;
