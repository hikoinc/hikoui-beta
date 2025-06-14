"use client";

import HeaderBrand from "./header-brand";
import HeaderNavbar from "./header-navbar";

const Header = () => (
  <div className="border-divider bg-background sticky top-0 z-10 border-b">
    <div className="layout-container flex h-16 items-center gap-8">
      <div className="flex gap-8">
        <HeaderBrand />
        <HeaderNavbar />
      </div>

      <div className="flex flex-1 justify-end">Actions</div>
    </div>
  </div>
);

export default Header;
