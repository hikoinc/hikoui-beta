"use client";

import { memo } from "react";
import NextLink from "next/link";
import { ChevronLeft, ChevronRight } from "src/components/icons";
import useContentPagination from "./content-pagination.hook";

const ContentPagination = () => {
  const { pagination } = useContentPagination();

  const renderPagination = (item: { href: string; title: string }, direction: "prev" | "next") => {
    const isPrev = direction === "prev";
    const Icon = isPrev ? ChevronLeft : ChevronRight;
    const label = isPrev ? "Prev" : "Next";
    const justifyClass = isPrev ? "justify-start" : "justify-end";
    const alignClass = isPrev ? "items-start" : "items-end";

    return (
      <div className="flex flex-1 items-center">
        <NextLink className="text-content hover:text-primary group flex-1" href={item.href}>
          <span className={`flex flex-1 items-center gap-4 ${justifyClass}`}>
            {isPrev && <Icon />}
            <span className={`flex flex-col ${alignClass}`}>
              <span className="group-hover:text-primary text-content-high-contrast text-xs capitalize">{label}</span>
              <span className="text-sm capitalize">{item.title}</span>
            </span>
            {!isPrev && <Icon />}
          </span>
        </NextLink>
      </div>
    );
  };

  if (!pagination.prev && !pagination.next) return null;

  return (
    <div className="flex justify-between gap-8">
      {pagination.prev ? renderPagination(pagination.prev, "prev") : <div className="flex-1" />}
      {pagination.next ? renderPagination(pagination.next, "next") : <div className="flex-1" />}
    </div>
  );
};

export default memo(ContentPagination);
