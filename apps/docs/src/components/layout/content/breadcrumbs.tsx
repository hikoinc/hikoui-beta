"use client";

import _ from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const paths = _.compact(pathname.split("/"));

  const renderBreadcrumbs = () =>
    _.map(paths, (path, index) => {
      const href = `/${_.join(_.slice(paths, 0, index + 1), "/")}`;
      const label = _.capitalize(path);
      const isLast = index === paths.length - 1;

      return (
        <div key={path} className="flex items-center">
          {isLast ? (
            <span className="text-content text-sm">{label}</span>
          ) : (
            <span className="flex items-center gap-2">
              <Link href={href} className="text-content-contrast hover:text-content text-sm">
                {label}
              </Link>

              <svg className="text-content-high-contrast" width="12" height="12" viewBox="0 0 16 16">
                <path
                  d="M5.50001 1.93933L6.03034 2.46966L10.8536 7.29288C11.2441 7.68341 11.2441 8.31657 10.8536 8.7071L6.03034 13.5303L5.50001 14.0607L4.43935 13L4.96968 12.4697L9.43935 7.99999L4.96968 3.53032L4.43935 2.99999L5.50001 1.93933Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          )}
        </div>
      );
    });

  return <div className="flex gap-2">{renderBreadcrumbs()}</div>;
};

export default Breadcrumbs;
