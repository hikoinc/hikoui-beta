import { useAllDocs, useActivePath } from "src/hooks";

const useSidebarMenus = () => {
  const { docMenus } = useAllDocs();
  const { isActivePath } = useActivePath();

  return { docMenus, isActivePath };
};

export default useSidebarMenus;
