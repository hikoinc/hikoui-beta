"use client";

import NextLink from "next/link";

import { Brand } from "src/components/base";

const Header = () => (
  <div className="border-divider bg-background sticky top-0 z-10 border-b">
    <div className="layout-container flex h-16 items-center">
      <NextLink className="flex items-center gap-2" href="/" aria-label="Hikoui">
        <Brand className="text-content size-6" />
        <h2 className="text-content text-2xl font-medium">Hiko UI</h2>
      </NextLink>
    </div>
  </div>
);

export default Header;
