"use client";

import type { PropsWithChildren } from "react";

import ContentBreadcrumb from "./content-breadcrumb";
import ContentPagination from "./content-pagination";
import ContentProse from "./content-prose";

const Content = ({ children }: PropsWithChildren) => (
  <div className="flex-1 space-y-16">
    <ContentBreadcrumb />
    <ContentProse>{children}</ContentProse>
    <ContentPagination />
  </div>
);

export default Content;
