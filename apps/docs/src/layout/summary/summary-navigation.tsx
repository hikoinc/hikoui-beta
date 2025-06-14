"use client";

import _ from "lodash";
import NextLink from "next/link";
import { Text } from "src/components/base";

import useSummaryNavigation from "./summary-navigation.hook";

const SummaryNavigation = () => {
  const { docHeadings } = useSummaryNavigation();

  if (!docHeadings) return null;

  const renderHeading = (heading: { slug: string; text: string; level: number }) => {
    const { slug, text, level } = heading;
    const paddingStyle = { paddingLeft: `${level - 2}rem` };
    const anchorHref = `#${slug}`;

    return (
      <NextLink
        key={slug}
        href={anchorHref}
        style={paddingStyle}
        className="text-content-quiet hover:text-content-soft block text-xs"
      >
        {text}
      </NextLink>
    );
  };

  const renderHeadings = () => _.map(docHeadings, renderHeading);

  return (
    <div className="space-y-4">
      <Text as="h3" variant="head-5">
        On this page
      </Text>

      <div className="space-y-2">{renderHeadings()}</div>
    </div>
  );
};

export default SummaryNavigation;
