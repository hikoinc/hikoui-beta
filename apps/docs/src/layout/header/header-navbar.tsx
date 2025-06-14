"use client";

import NextLink from "next/link";
import _ from "lodash";
import { cx } from "class-variance-authority";

import useHeaderNavbar from "./header-navbar.hook";

const HeaderNavbar = () => {
  const { menus } = useHeaderNavbar();

  const renderMenus = () =>
    _.map(menus, (item) => {
      const activeClasses = item.isActive ? "text-content-link" : "text-content-soft";

      return (
        <NextLink key={item.label} className={cx("text-sm", activeClasses)} href={item.href}>
          {item.label}
        </NextLink>
      );
    });

  return <div className="flex gap-4">{renderMenus()}</div>;
};

export default HeaderNavbar;
