"use client";

import _ from "lodash";
import NextLink from "next/link";

import { Text } from "src/components/base";

import useSidebarMenus from "./sidebar-menus.hook";

const SidebarMenus = () => {
  const { menus, isActive } = useSidebarMenus();

  const renderMenus = () =>
    _.map(menus, (menu: { title: string; href: string }) => {
      const classes = `block text-sm ${isActive(menu.href) ? "text-primary pointer-events-none" : "text-content-contrast hover:text-content"}`;

      return (
        <NextLink key={menu.href} className={classes} href={menu.href}>
          {menu.title}
        </NextLink>
      );
    });

  return (
    <div className="space-y-2">
      <Text as="h3" variant="head-5">
        Getting Started
      </Text>

      <div className="space-y-2">{renderMenus()}</div>
    </div>
  );
};

export default SidebarMenus;
