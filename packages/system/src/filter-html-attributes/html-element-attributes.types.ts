export interface HtmlElementAttributesMap {
  readonly "*": readonly string[];
  readonly [elementType: string]: readonly string[];
}
