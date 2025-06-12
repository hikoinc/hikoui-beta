import { usePathname } from "next/navigation";

const useActivePath = () => {
  const pathname = usePathname();

  const isActivePath = (href: string) => pathname === href;

  return { isActivePath };
};

export default useActivePath;
