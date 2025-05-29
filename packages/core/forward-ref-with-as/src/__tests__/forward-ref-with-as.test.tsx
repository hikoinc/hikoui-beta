import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import forwardRefWithAs from "../forward-ref-with-as";

describe("forwardRefWithAs", () => {
  it("renders component with default element type", () => {
    const Component = forwardRefWithAs<{ children: React.ReactNode }, "div">((props, ref) => (
      <div ref={ref} {...props} />
    ));

    render(<Component>Test content</Component>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders component with custom element type using 'as' prop", () => {
    const Component = forwardRefWithAs<{ children: React.ReactNode }, "div">((props, ref) => {
      const { as: As = "div", ...rest } = props;

      return <As ref={ref} {...rest} />;
    });

    render(<Component as="span">Test content</Component>);
    expect(screen.getByText("Test content").tagName.toLowerCase()).toBe("span");
  });

  it("forwards ref to the rendered element", () => {
    const Component = forwardRefWithAs<{ children: React.ReactNode }, "div">((props, ref) => (
      <div ref={ref} {...props} />
    ));

    const ref = { current: null };

    render(<Component ref={ref}>Test content</Component>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
