import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies className", () => {
    render(<Button className="test-class">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("test-class");
  });

  it("does not crash when clicked", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(() => {
      fireEvent.click(button);
    }).not.toThrow();
  });
});
