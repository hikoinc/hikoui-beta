import _ from "lodash";
import { usePathname } from "next/navigation";

const useContentBreadcrumb = () => {
  const pathname = usePathname();

  const breadcrumb = (() => {
    const paths = _.compact(_.split(pathname, "/"));

    const filtered = paths[0] === "docs" ? _.slice(paths, 1) : paths;

    return _.map(filtered, (path, index) => {
      const href = `/${_.join(["docs", ..._.slice(filtered, 0, index + 1)], "/")}`;
      const label = _.startCase(path);
      const isLast = index === filtered.length - 1;

      return { href, label, isLast };
    });
  })();

  const isActive = (href: string) => pathname === href;

  return { breadcrumb, isActive };
};

export default useContentBreadcrumb;
