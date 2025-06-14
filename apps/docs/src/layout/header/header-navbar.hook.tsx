import _ from "lodash";

import { useActivePath } from "src/hooks";

const useHeaderNavbar = () => {
  const isActivePath = useActivePath();

  const navItems = [
    {
      label: "Documentation",
      href: "/docs/getting-started/introduction",
    },
    {
      label: "Components",
      href: "/docs/components/text",
    },
  ];

  return {
    menus: _.map(navItems, (item) => ({ ...item, isActive: isActivePath.isActivePath(item.href) })),
  };
};

export default useHeaderNavbar;
