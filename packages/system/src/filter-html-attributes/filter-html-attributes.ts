import _ from "lodash";
import type { ElementType } from "react";

import htmlElementAttributes from "./html-element-attributes";
import type { HTMLAttributes } from "./filter-html-attributes.types";

function filterHTMLAttributes(props: HTMLAttributes, elementType: ElementType) {
  if (!_.isPlainObject(props) || _.isEmpty(props)) return {};

  const elementName = _.toLower(String(elementType));

  const globalAttributes = _.get(htmlElementAttributes, "*", []);
  const elementAttributes = _.get(htmlElementAttributes, elementName, []);
  const validAttributes = [...globalAttributes, ...elementAttributes];

  return _.pickBy(
    props,
    (value, key) => _.includes(validAttributes, key) || _.startsWith(key, "data-") || _.startsWith(key, "aria-"),
  );
}

export default filterHTMLAttributes;
