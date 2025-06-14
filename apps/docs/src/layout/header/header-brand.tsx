"use client";

import NextLink from "next/link";

import { Brand } from "src/components/icons";

const HeaderBrand = () => (
  <NextLink href="/" aria-label="Hiko UI">
    <Brand height={24} />
    <span className="sr-only">Hiko UI</span>
  </NextLink>
);

export default HeaderBrand;
