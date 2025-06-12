"use client";

import NextLink from "next/link";

import { Text } from "src/components/base";

import useSummaryNavigation from "./summary-navigation.hook";

const SummaryNavigation = () => {
  const { headings } = useSummaryNavigation();

  if (!headings) return null;

  const renderHeading = (heading: { slug: string; text: string; level: number }) => {
    const { slug, text, level } = heading;
    const paddingStyle = { paddingLeft: `${level - 2}rem` };
    const anchorHref = `#${slug}`;

    return (
      <NextLink
        key={slug}
        href={anchorHref}
        style={paddingStyle}
        className="text-content-contrast hover:text-content block text-xs"
      >
        {text}
      </NextLink>
    );
  };

  const renderHeadings = () => headings.map(renderHeading);

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
