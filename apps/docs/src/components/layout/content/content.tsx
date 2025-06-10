"use client";

import type { PropsWithChildren } from "react";

import Breadcrumbs from "./breadcrumbs";

const Content = ({ children }: PropsWithChildren) => (
  <div className="space-y-8">
    <Breadcrumbs />
    <div className="prose">{children}</div>

    <div className="border-divider flex justify-between border-t pt-8">
      <div>Previous</div>
      <div>Next</div>
    </div>
  </div>
);

export default Content;
