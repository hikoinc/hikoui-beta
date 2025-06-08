import type { PageMapItem } from "nextra";
import type { ReactNode } from "react";

import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: ReactNode;
  pageMap: PageMapItem[];
}

const Layout = ({ children, pageMap }: LayoutProps) => (
  <div className="flex flex-col">
    <div className="flex items-center justify-center">
      <h3 className="text-sm">Custom theme demo for Nextra</h3>
    </div>

    <Navbar pageMap={pageMap} />

    <div className="flex">
      <Sidebar pageMap={pageMap} />
      {children}
    </div>

    <Footer />
  </div>
);
export default Layout;
