"use client";

import NextLink from "next/link";
import { Text } from "src/components/base";

import useSidebarMenus from "./sidebar-menus.hook";

const SidebarMenus = () => {
  const { docMenus, isActivePath } = useSidebarMenus();

  const renderMenuItem = (groupSlug: string, item: { title: string; slug: string }) => {
    const href = `/docs/${groupSlug}/${item.slug}`;
    const isActive = isActivePath(href);
    const linkClasses = isActive ? "text-content-link" : "text-content-soft hover:text-content";

    return (
      <li key={href}>
        <NextLink href={href} className={`text-sm ${linkClasses}`}>
          {item.title}
        </NextLink>
      </li>
    );
  };

  const renderMenu = () =>
    docMenus.routes.map((group) => (
      <div className="space-y-2" key={group.slug}>
        <Text as="h3" variant="head-5">
          {group.title}
        </Text>

        <ul className="space-y-1">{group.children.map((item) => renderMenuItem(group.slug, item))}</ul>
      </div>
    ));

  return <div className="space-y-4">{renderMenu()}</div>;
};

export default SidebarMenus;
