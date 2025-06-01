import filterHTMLAttributes from "../filter-html-attributes";

describe("filterHTMLAttributes", () => {
  it("returns empty object when props is empty", () => {
    const result = filterHTMLAttributes({}, "div");
    expect(result).toEqual({});
  });

  it("returns empty object when props is not a plain object", () => {
    const result = filterHTMLAttributes(null as any, "div");
    expect(result).toEqual({});
  });

  it("returns empty object when props is undefined", () => {
    const result = filterHTMLAttributes(undefined as any, "div");
    expect(result).toEqual({});
  });

  it("filters valid global attributes", () => {
    const props = {
      id: "test-id",
      class: "test-class",
      tabindex: 0,
      title: "Test Title",
      invalidProp: "should be filtered out",
    };
    const result = filterHTMLAttributes(props, "div");
    expect(result).toEqual({
      id: "test-id",
      class: "test-class",
      tabindex: 0,
      title: "Test Title",
    });
  });

  it("filters valid element-specific attributes for div", () => {
    const props = {
      align: "center",
      id: "test-id",
      invalidProp: "should be filtered out",
    };
    const result = filterHTMLAttributes(props, "div");
    expect(result).toEqual({
      align: "center",
      id: "test-id",
    });
  });

  it("includes data- attributes", () => {
    const props = {
      "data-testid": "test",
      "data-custom": "value",
      id: "test-id",
      invalidProp: "should be filtered out",
    };
    const result = filterHTMLAttributes(props, "div");
    expect(result).toEqual({
      "data-testid": "test",
      "data-custom": "value",
      id: "test-id",
    });
  });

  it("includes aria- attributes", () => {
    const props = {
      "aria-label": "Test Label",
      "aria-describedby": "description",
      id: "test-id",
      invalidProp: "should be filtered out",
    };
    const result = filterHTMLAttributes(props, "div");
    expect(result).toEqual({
      "aria-label": "Test Label",
      "aria-describedby": "description",
      id: "test-id",
    });
  });

  it("handles different element types", () => {
    const props = {
      href: "https://example.com",
      target: "_blank",
      id: "test-id",
      invalidProp: "should be filtered out",
    };
    const result = filterHTMLAttributes(props, "a");
    expect(result).toEqual({
      href: "https://example.com",
      target: "_blank",
      id: "test-id",
    });
  });

  it("handles unknown element types", () => {
    const props = {
      id: "test-id",
      title: "Test Title",
      customProp: "should be filtered out",
    };
    const result = filterHTMLAttributes(props, "unknown-element" as any);
    expect(result).toEqual({
      id: "test-id",
      title: "Test Title",
    });
  });

  it("handles mixed case element types", () => {
    const props = {
      href: "https://example.com",
      id: "test-id",
      invalidProp: "should be filtered out",
    };
    const result = filterHTMLAttributes(props, "A" as any);
    expect(result).toEqual({
      href: "https://example.com",
      id: "test-id",
    });
  });

  it("filters all types of valid attributes together", () => {
    const props = {
      id: "test-id",
      href: "https://example.com",
      "data-testid": "test",
      "aria-label": "Test Label",
      invalidProp: "should be filtered out",
      anotherInvalid: 123,
    };
    const result = filterHTMLAttributes(props, "a");
    expect(result).toEqual({
      id: "test-id",
      href: "https://example.com",
      "data-testid": "test",
      "aria-label": "Test Label",
    });
  });

  it("handles input element with complex attributes", () => {
    const props = {
      type: "text",
      placeholder: "Enter text",
      required: true,
      "data-validation": "required",
      "aria-describedby": "help-text",
      id: "input-field",
      invalidProp: "should be filtered out",
    };
    const result = filterHTMLAttributes(props, "input");
    expect(result).toEqual({
      type: "text",
      placeholder: "Enter text",
      required: true,
      "data-validation": "required",
      "aria-describedby": "help-text",
      id: "input-field",
    });
  });
});
