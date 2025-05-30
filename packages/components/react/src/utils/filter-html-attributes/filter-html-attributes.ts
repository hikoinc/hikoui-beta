import _ from "lodash";
import { htmlElementAttributes } from "html-element-attributes";
import type { ElementType } from "react";

export type HTMLAttributes = Record<string, unknown>;

function getValidAttributes(elementType: string): Set<string> {
  const globalAttributes = _.get(htmlElementAttributes, "*", []);
  const elementAttributes = _.get(htmlElementAttributes, elementType, []);

  return new Set([...globalAttributes, ...elementAttributes]);
}

function isValidAttribute(key: string, validAttributes: Set<string>): boolean {
  return validAttributes.has(key) || _.startsWith(key, "data-") || _.startsWith(key, "aria-");
}

function filterHTMLAttributes(props: HTMLAttributes, elementType: ElementType): HTMLAttributes {
  if (_.isEmpty(props) || !_.isPlainObject(props)) return {};

  const elementTypeStr = _.toLower(String(elementType));
  const validAttributes = getValidAttributes(elementTypeStr);

  return _.pickBy(props, (value, key) => isValidAttribute(key, validAttributes));
}

export default filterHTMLAttributes;
