import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Text from "../text";

describe("Text", () => {
  it("renders text content correctly", () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders as span by default", () => {
    render(<Text>Default Element</Text>);
    const textElement = screen.getByText("Default Element");
    expect(textElement.tagName).toBe("SPAN");
  });

  it("renders as custom element when as prop is provided", () => {
    render(<Text as="p">Paragraph Text</Text>);
    const textElement = screen.getByText("Paragraph Text");
    expect(textElement.tagName).toBe("P");
  });

  it("applies default classes", () => {
    render(<Text>Default Text</Text>);
    const textElement = screen.getByText("Default Text");
    expect(textElement).toHaveClass("antialiased", "text-primary-text", "text-base");
  });

  it("applies color variant classes", () => {
    render(<Text color="danger">Danger Text</Text>);
    const textElement = screen.getByText("Danger Text");
    expect(textElement).toHaveClass("text-danger-text");
  });

  it("applies size variant classes", () => {
    render(<Text size="2xl">Large Text</Text>);
    const textElement = screen.getByText("Large Text");
    expect(textElement).toHaveClass("text-2xl");
  });

  it("applies weight variant classes", () => {
    render(<Text weight="bold">Bold Text</Text>);
    const textElement = screen.getByText("Bold Text");
    expect(textElement).toHaveClass("font-bold");
  });

  it("applies multiple variant classes", () => {
    render(
      <Text color="success" size="lg" weight="semibold" fontStyle="italic">
        Styled Text
      </Text>,
    );
    const textElement = screen.getByText("Styled Text");
    expect(textElement).toHaveClass("text-success-text", "text-lg", "font-semibold", "italic");
  });

  it("applies custom className alongside variant classes", () => {
    render(
      <Text className="custom-class" color="secondary">
        Custom Text
      </Text>,
    );
    const textElement = screen.getByText("Custom Text");
    expect(textElement).toHaveClass("custom-class", "text-secondary-text");
  });

  it("applies line clamp variant", () => {
    render(<Text lineClamp="3">Clamped Text</Text>);
    const textElement = screen.getByText("Clamped Text");
    expect(textElement).toHaveClass("line-clamp-3");
  });

  it("applies text alignment", () => {
    render(<Text align="center">Centered Text</Text>);
    const textElement = screen.getByText("Centered Text");
    expect(textElement).toHaveClass("text-center");
  });

  it("applies text transform", () => {
    render(<Text transform="uppercase">Uppercase Text</Text>);
    const textElement = screen.getByText("Uppercase Text");
    expect(textElement).toHaveClass("uppercase");
  });

  it("applies text decoration", () => {
    render(<Text decoration="underline">Underlined Text</Text>);
    const textElement = screen.getByText("Underlined Text");
    expect(textElement).toHaveClass("underline");
  });

  it("applies whitespace variant", () => {
    render(<Text whitespace="nowrap">No wrap text</Text>);
    const textElement = screen.getByText("No wrap text");
    expect(textElement).toHaveClass("whitespace-nowrap");
  });

  it("applies display variant", () => {
    render(<Text display="inline-block">Inline block text</Text>);
    const textElement = screen.getByText("Inline block text");
    expect(textElement).toHaveClass("inline-block");
  });

  it("applies leading variant", () => {
    render(<Text leading="tight">Tight leading text</Text>);
    const textElement = screen.getByText("Tight leading text");
    expect(textElement).toHaveClass("leading-tight");
  });

  it("applies letter spacing variant", () => {
    render(<Text letterSpacing="wide">Wide spacing text</Text>);
    const textElement = screen.getByText("Wide spacing text");
    expect(textElement).toHaveClass("tracking-wide");
  });

  it("forwards HTML attributes correctly", () => {
    render(
      <Text data-testid="text-element" data-custom="custom-value">
        Text with attributes
      </Text>,
    );
    const textElement = screen.getByTestId("text-element");
    expect(textElement).toHaveAttribute("data-testid", "text-element");
    expect(textElement).toHaveAttribute("data-custom", "custom-value");
  });

  it("has correct display name", () => {
    expect(Text.displayName).toBe("HikoUI.Text");
  });

  it("handles complex nested content", () => {
    render(
      <Text>
        <strong>Bold</strong> and <em>italic</em> text
      </Text>,
    );
    expect(screen.getByText("Bold", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("italic", { exact: false })).toBeInTheDocument();
  });

  it("renders with inherit color variant", () => {
    render(<Text color="inherit">Inherit color text</Text>);
    const textElement = screen.getByText("Inherit color text");
    expect(textElement).toHaveClass("text-inherit");
  });

  it("renders smallest and largest size variants", () => {
    render(
      <>
        <Text size="2xs">Very small text</Text>
        <Text size="9xl">Very large text</Text>
      </>,
    );
    expect(screen.getByText("Very small text")).toHaveClass("text-2xs");
    expect(screen.getByText("Very large text")).toHaveClass("text-9xl");
  });
});
