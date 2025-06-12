"use client";

import NextLink from "next/link";
import _ from "lodash";
import { memo } from "react";

import useContentBreadcrumb from "./content-breadcrumb.hook";

const ContentBreadcrumb = () => {
  const { breadcrumb, isActive } = useContentBreadcrumb();

  const renderBreadcrumb = (item: { href: string; label: string; isLast: boolean }) => (
    <div key={item.href} className="flex items-center">
      {item.isLast ? (
        <span className="text-content text-sm capitalize">{item.label}</span>
      ) : (
        <div className="flex items-center gap-2">
          <NextLink
            className={`text-content-contrast hover:text-content text-sm capitalize ${isActive(item.href) ? "font-medium" : ""}`}
            href={item.href}
          >
            {item.label}
          </NextLink>

          <svg className="text-content-high-contrast size-4" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      )}
    </div>
  );

  return <div className="flex gap-2">{_.map(breadcrumb, renderBreadcrumb)}</div>;
};

export default memo(ContentBreadcrumb);
