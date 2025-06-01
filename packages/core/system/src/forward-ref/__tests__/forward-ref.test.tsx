import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import forwardRef from "../forward-ref";

describe("forwardRef", () => {
  it("creates a forwardRef component correctly", () => {
    const TestComponent = forwardRef<{ text: string }, "div">((props, ref) => {
      const { text, ...rest } = props;
      return (
        <div ref={ref} {...rest}>
          {text}
        </div>
      );
    });
    render(<TestComponent text="Hello World" data-testid="test" />);
    expect(screen.getByTestId("test")).toHaveTextContent("Hello World");
  });

  it("forwards ref correctly", () => {
    const TestComponent = forwardRef<{ text: string }, "div">((props, ref) => {
      const { text, ...rest } = props;
      return (
        <div ref={ref} {...rest}>
          {text}
        </div>
      );
    });
    let refElement: HTMLDivElement | null = null;
    render(
      <TestComponent
        text="Hello World"
        data-testid="test"
        ref={(el) => {
          refElement = el;
        }}
      />,
    );
    expect(refElement).toBeInstanceOf(HTMLDivElement);
    expect(refElement).toHaveTextContent("Hello World");
  });
});
