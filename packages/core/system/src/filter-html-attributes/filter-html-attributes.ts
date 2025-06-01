import _ from "lodash";
import type { ElementType } from "react";

import htmlElementAttributes from "./html-element-attributes";
import type { HTMLAttributes } from "./filter-html-attributes.types";

function filterHTMLAttributes(props: HTMLAttributes, elementType: ElementType): HTMLAttributes {
  if (!_.isPlainObject(props) || _.isEmpty(props)) return {};

  const elementName = _.toLower(String(elementType));

  const globalAttributes = _.get(htmlElementAttributes, "*", []);
  const elementAttributes = _.get(htmlElementAttributes, elementName, []);
  const validAttributes = [...globalAttributes, ...elementAttributes];

  return _.pickBy(props, (value, key) => {
    if (_.includes(validAttributes, key)) return true;
    if (_.startsWith(key, "data-")) return true;
    if (_.startsWith(key, "aria-")) return true;

    return false;
  });
}

export default filterHTMLAttributes;
