import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Text from "../text";

describe("Text", () => {
  it("renders with correct tag and text content", () => {
    render(<Text>Hello World</Text>);
    const textElement = screen.getByText("Hello World");
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe("SPAN");
  });

  it("renders with custom tag when 'as' prop is provided", () => {
    render(<Text as="span">Span Text</Text>);
    const spanElement = screen.getByText("Span Text");
    expect(spanElement.tagName).toBe("SPAN");
  });

  it("applies default classes", () => {
    render(<Text>Default Text</Text>);
    const textElement = screen.getByText("Default Text");
    expect(textElement).toHaveClass("antialiased", "text-palette-primary-text", "text-base");
  });

  it("applies color variant classes", () => {
    render(<Text color="danger">Danger Text</Text>);
    const textElement = screen.getByText("Danger Text");
    expect(textElement).toHaveClass("text-palette-danger-text");
  });

  it("applies size variant classes", () => {
    render(<Text size="lg">Large Text</Text>);
    const textElement = screen.getByText("Large Text");
    expect(textElement).toHaveClass("text-lg");
  });

  it("applies weight variant classes", () => {
    render(<Text weight="bold">Bold Text</Text>);
    const textElement = screen.getByText("Bold Text");
    expect(textElement).toHaveClass("font-bold");
  });

  it("applies font style variant classes", () => {
    render(<Text fontStyle="italic">Italic Text</Text>);
    const textElement = screen.getByText("Italic Text");
    expect(textElement).toHaveClass("italic");
  });

  it("applies multiple variant classes", () => {
    render(
      <Text color="success" size="lg" weight="semibold" fontStyle="italic">
        Styled Text
      </Text>,
    );
    const textElement = screen.getByText("Styled Text");
    expect(textElement).toHaveClass("text-palette-success-text", "text-lg", "font-semibold", "italic");
  });

  it("applies custom className alongside variant classes", () => {
    render(
      <Text color="secondary" className="custom-class">
        Custom Text
      </Text>,
    );
    const textElement = screen.getByText("Custom Text");
    expect(textElement).toHaveClass("custom-class", "text-palette-secondary-text");
  });

  it("applies line clamp variant", () => {
    render(<Text lineClamp="3">Line clamped text</Text>);
    const textElement = screen.getByText("Line clamped text");
    expect(textElement).toHaveClass("line-clamp-3");
  });

  it("applies leading variant", () => {
    render(<Text leading="loose">Loose leading text</Text>);
    const textElement = screen.getByText("Loose leading text");
    expect(textElement).toHaveClass("leading-loose");
  });

  it("applies letter spacing variant", () => {
    render(<Text letterSpacing="wide">Wide spacing text</Text>);
    const textElement = screen.getByText("Wide spacing text");
    expect(textElement).toHaveClass("tracking-wide");
  });

  it("applies decoration variant", () => {
    render(<Text decoration="underline">Underlined text</Text>);
    const textElement = screen.getByText("Underlined text");
    expect(textElement).toHaveClass("underline");
  });

  it("applies whitespace variant", () => {
    render(<Text whitespace="nowrap">No wrap text</Text>);
    const textElement = screen.getByText("No wrap text");
    expect(textElement).toHaveClass("whitespace-nowrap");
  });

  it("applies transform variant", () => {
    render(<Text transform="uppercase">Uppercase text</Text>);
    const textElement = screen.getByText("Uppercase text");
    expect(textElement).toHaveClass("uppercase");
  });

  it("applies align variant", () => {
    render(<Text align="center">Centered text</Text>);
    const textElement = screen.getByText("Centered text");
    expect(textElement).toHaveClass("text-center");
  });

  it("applies display variant", () => {
    render(<Text display="inline">Inline text</Text>);
    const textElement = screen.getByText("Inline text");
    expect(textElement).toHaveClass("inline");
  });

  it("has correct display name", () => {
    expect(Text.displayName).toBe("HikoUI.Text");
  });

  it("passes through HTML attributes", () => {
    render(
      <Text id="test-id" title="Test Title" data-testid="test-text">
        Attributed text
      </Text>,
    );
    const textElement = screen.getByTestId("test-text");
    expect(textElement).toHaveAttribute("id", "test-id");
    expect(textElement).toHaveAttribute("title", "Test Title");
  });

  it("renders as heading elements", () => {
    render(<Text as="h1">Heading 1</Text>);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H1");
  });

  it("renders different size variants", () => {
    render(<Text size="xs">Extra small text</Text>);
    const textElement = screen.getByText("Extra small text");
    expect(textElement).toHaveClass("text-xs");
  });

  it("renders secondary color variant", () => {
    render(<Text color="secondary">Secondary text</Text>);
    const textElement = screen.getByText("Secondary text");
    expect(textElement).toHaveClass("text-palette-secondary-text");
  });

  it("renders tertiary color variant", () => {
    render(<Text color="tertiary">Tertiary text</Text>);
    const textElement = screen.getByText("Tertiary text");
    expect(textElement).toHaveClass("text-palette-tertiary-text");
  });

  it("renders success color variant", () => {
    render(<Text color="success">Success text</Text>);
    const textElement = screen.getByText("Success text");
    expect(textElement).toHaveClass("text-palette-success-text");
  });

  it("renders warning color variant", () => {
    render(<Text color="warning">Warning text</Text>);
    const textElement = screen.getByText("Warning text");
    expect(textElement).toHaveClass("text-palette-warning-text");
  });

  it("renders info color variant", () => {
    render(<Text color="info">Info text</Text>);
    const textElement = screen.getByText("Info text");
    expect(textElement).toHaveClass("text-palette-info-text");
  });

  it("renders muted color variant", () => {
    render(<Text color="muted">Muted text</Text>);
    const textElement = screen.getByText("Muted text");
    expect(textElement).toHaveClass("text-palette-muted-text");
  });

  it("renders with inherit color variant", () => {
    render(<Text color="inherit">Inherit color text</Text>);
    const textElement = screen.getByText("Inherit color text");
    expect(textElement).toHaveClass("text-palette-inherit");
  });

  it("renders smallest and largest size variants", () => {
    render(<Text size="xs">Extra small</Text>);
    const xsElement = screen.getByText("Extra small");
    expect(xsElement).toHaveClass("text-xs");

    render(<Text size="9xl">Extra large</Text>);
    const xlElement = screen.getByText("Extra large");
    expect(xlElement).toHaveClass("text-9xl");
  });

  it("renders all weight variants", () => {
    render(<Text weight="thin">Thin text</Text>);
    const thinElement = screen.getByText("Thin text");
    expect(thinElement).toHaveClass("font-thin");

    render(<Text weight="black">Black text</Text>);
    const blackElement = screen.getByText("Black text");
    expect(blackElement).toHaveClass("font-black");
  });

  it("renders with complex combinations", () => {
    render(
      <Text
        as="h2"
        color="danger"
        size="2xl"
        weight="extrabold"
        fontStyle="italic"
        decoration="underline"
        align="center"
        className="custom-styling"
      >
        Complex styled text
      </Text>,
    );
    const complexElement = screen.getByRole("heading", { level: 2 });
    expect(complexElement).toHaveClass(
      "text-palette-danger-text",
      "text-2xl",
      "font-extrabold",
      "italic",
      "underline",
      "text-center",
      "custom-styling",
    );
  });
});
