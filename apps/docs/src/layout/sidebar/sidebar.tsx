"use client";

import SidebarMenus from "./sidebar-menus";

const Sidebar = () => (
  <div className="sticky top-24 w-64 space-y-8 self-start overflow-y-auto">
    <SidebarMenus />
  </div>
);

export default Sidebar;
