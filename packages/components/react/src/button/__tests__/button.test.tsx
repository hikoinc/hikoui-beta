import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Button from "../button";

describe("Button", () => {
  it("renders button with default element type", () => {
    render(<Button>Test content</Button>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
    expect(screen.getByText("Test content").tagName.toLowerCase()).toBe("button");
  });

  it("renders button with custom element type using 'as' prop", () => {
    render(
      <Button as="a" href="#">
        Test content
      </Button>,
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
    expect(screen.getByText("Test content").tagName.toLowerCase()).toBe("a");
  });

  it("applies default styles", () => {
    render(<Button>Test content</Button>);
    const button = screen.getByText("Test content");
    expect(button).toHaveClass("bg-red-500", "text-white");
  });
});
