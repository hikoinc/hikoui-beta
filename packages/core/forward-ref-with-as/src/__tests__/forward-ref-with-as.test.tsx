import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import forwardRefWithAs from "../forward-ref-with-as";

interface ButtonProps {
  customProp?: string;
}

const PolymorphicButton = forwardRefWithAs<"button", ButtonProps>((props, ref) => {
  const { as: Component = "button", customProp, ...rest } = props as any;
  return <Component ref={ref} data-custom={customProp} {...rest} />;
});

describe("forwardRefWithAs", () => {
  it("should forward ref correctly", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<PolymorphicButton ref={ref}>Click me</PolymorphicButton>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("should render as different element when 'as' prop is passed", () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <PolymorphicButton as="a" ref={ref} href="https://example.com">
        Link
      </PolymorphicButton>,
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByText("Link").closest("a")).toHaveAttribute("href", "https://example.com");
  });

  it("should pass additional props correctly", () => {
    render(<PolymorphicButton customProp="hello" data-testid="btn" />);
    const el = screen.getByTestId("btn");
    expect(el).toHaveAttribute("data-custom", "hello");
  });
});
