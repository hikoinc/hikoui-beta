import htmlElementAttributes from "../html-element-attributes";

describe("htmlElementAttributes", () => {
  it("should export htmlElementAttributes object", () => {
    expect(htmlElementAttributes).toBeDefined();
    expect(typeof htmlElementAttributes).toBe("object");
  });

  it("should have global attributes under '*' key", () => {
    expect(htmlElementAttributes["*"]).toBeDefined();
    expect(Array.isArray(htmlElementAttributes["*"])).toBe(true);
    expect(htmlElementAttributes["*"].length).toBeGreaterThan(0);
  });

  it("should include common global attributes", () => {
    const globalAttributes = htmlElementAttributes["*"];
    expect(globalAttributes).toContain("id");
    expect(globalAttributes).toContain("class");
    expect(globalAttributes).toContain("style");
    expect(globalAttributes).toContain("title");
    expect(globalAttributes).toContain("tabindex");
  });

  it("should have specific attributes for common HTML elements", () => {
    expect(htmlElementAttributes.a).toBeDefined();
    expect(htmlElementAttributes.a).toContain("href");
    expect(htmlElementAttributes.a).toContain("target");

    expect(htmlElementAttributes.input).toBeDefined();
    expect(htmlElementAttributes.input).toContain("type");
    expect(htmlElementAttributes.input).toContain("value");
    expect(htmlElementAttributes.input).toContain("placeholder");

    expect(htmlElementAttributes.button).toBeDefined();
    expect(htmlElementAttributes.button).toContain("type");
    expect(htmlElementAttributes.button).toContain("muted");

    expect(htmlElementAttributes.img).toBeDefined();
    expect(htmlElementAttributes.img).toContain("src");
    expect(htmlElementAttributes.img).toContain("alt");
  });

  it("should have div-specific attributes", () => {
    expect(htmlElementAttributes.div).toBeDefined();
    expect(htmlElementAttributes.div).toContain("align");
  });

  it("should have form-specific attributes", () => {
    expect(htmlElementAttributes.form).toBeDefined();
    expect(htmlElementAttributes.form).toContain("action");
    expect(htmlElementAttributes.form).toContain("method");
    expect(htmlElementAttributes.form).toContain("enctype");
  });
});
