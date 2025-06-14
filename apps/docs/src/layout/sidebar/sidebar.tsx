"use client";

import SidebarMenus from "./sidebar-menus";

const Sidebar = () => (
  <div className="sticky top-24 hidden w-48 space-y-8 self-start overflow-y-auto md:block lg:w-56">
    <SidebarMenus />
  </div>
);

export default Sidebar;
