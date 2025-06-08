import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "src/styles/globals.css";

import Layout from "src/layout/layout";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async (props: RootLayoutProps) => {
  const { children } = props;

  const pageMap = await getPageMap();

  return (
    <html lang="en" className="dark">
      <Head faviconGlyph="✦" />

      <body>
        <Layout pageMap={pageMap}>{children}</Layout>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "%s - Nextra",
  },
};

export default RootLayout;
