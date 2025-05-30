import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Text from "../text";

describe("Text", () => {
  it("renders with default props", () => {
    render(<Text>Hello World</Text>);

    const textElement = screen.getByText("Hello World");

    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName.toLowerCase()).toBe("span");
    expect(textElement).toHaveClass("text-base");
  });

  it("renders with different size variants", () => {
    const { rerender } = render(<Text size="2xs">2XS Text</Text>);
    expect(screen.getByText("2XS Text")).toHaveClass("text-[0.625rem]");

    rerender(<Text size="xs">XS Text</Text>);
    expect(screen.getByText("XS Text")).toHaveClass("text-xs");

    rerender(<Text size="sm">Small Text</Text>);
    expect(screen.getByText("Small Text")).toHaveClass("text-sm");

    rerender(<Text size="md">Medium Text</Text>);
    expect(screen.getByText("Medium Text")).toHaveClass("text-base");

    rerender(<Text size="lg">Large Text</Text>);
    expect(screen.getByText("Large Text")).toHaveClass("text-lg");

    rerender(<Text size="xl">XL Text</Text>);
    expect(screen.getByText("XL Text")).toHaveClass("text-xl");

    rerender(<Text size="2xl">2XL Text</Text>);
    expect(screen.getByText("2XL Text")).toHaveClass("text-2xl");

    rerender(<Text size="3xl">3XL Text</Text>);
    expect(screen.getByText("3XL Text")).toHaveClass("text-3xl");
  });

  it("renders with different color variants", () => {
    const { rerender } = render(<Text color="primary">Primary Text</Text>);
    expect(screen.getByText("Primary Text")).toHaveClass("text-primary");

    rerender(<Text color="secondary">Secondary Text</Text>);
    expect(screen.getByText("Secondary Text")).toHaveClass("text-secondary");

    rerender(<Text color="tertiary">Tertiary Text</Text>);
    expect(screen.getByText("Tertiary Text")).toHaveClass("text-tertiary");

    rerender(<Text color="success">Success Text</Text>);
    expect(screen.getByText("Success Text")).toHaveClass("text-success");

    rerender(<Text color="warning">Warning Text</Text>);
    expect(screen.getByText("Warning Text")).toHaveClass("text-warning");

    rerender(<Text color="danger">Danger Text</Text>);
    expect(screen.getByText("Danger Text")).toHaveClass("text-danger");

    rerender(<Text color="info">Info Text</Text>);
    expect(screen.getByText("Info Text")).toHaveClass("text-info");

    rerender(<Text color="muted">Muted Text</Text>);
    expect(screen.getByText("Muted Text")).toHaveClass("text-muted");
  });

  it("renders with different element types", () => {
    const { rerender } = render(<Text as="h1">Heading 1</Text>);
    expect(screen.getByText("Heading 1").tagName.toLowerCase()).toBe("h1");

    rerender(<Text as="h2">Heading 2</Text>);
    expect(screen.getByText("Heading 2").tagName.toLowerCase()).toBe("h2");

    rerender(<Text as="p">Paragraph</Text>);
    expect(screen.getByText("Paragraph").tagName.toLowerCase()).toBe("p");

    rerender(<Text as="div">Div</Text>);
    expect(screen.getByText("Div").tagName.toLowerCase()).toBe("div");
  });

  it("passes through HTML attributes correctly", () => {
    render(
      <Text
        as="a"
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to example"
        data-testid="test-link"
      >
        Link Text
      </Text>,
    );

    const linkElement = screen.getByText("Link Text");
    expect(linkElement).toHaveAttribute("href", "https://example.com");
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkElement).toHaveAttribute("title", "Link to example");
    expect(linkElement).toHaveAttribute("data-testid", "test-link");
  });

  it("passes through HTML attributes correctly with variants", () => {
    render(
      <Text as="a" color="danger" size="2xl" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        Link Text
      </Text>,
    );

    const linkElement = screen.getByText("Link Text");
    expect(linkElement).toHaveAttribute("href", "https://www.google.com");
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkElement).toHaveClass("text-2xl", "text-danger");
  });

  it("merges custom className with variant classes", () => {
    render(
      <Text className="font-bold text-red-500 hover:text-blue-500" color="primary" size="lg">
        Custom Styled Text
      </Text>,
    );

    const textElement = screen.getByText("Custom Styled Text");
    expect(textElement).toHaveClass("text-lg", "text-primary", "font-bold", "text-red-500", "hover:text-blue-500");
  });

  it("handles complex combinations of props", () => {
    render(
      <Text
        as="button"
        color="danger"
        size="2xl"
        className="rounded-lg px-4 py-2"
        type="submit"
        disabled
        aria-label="Submit form"
      >
        Submit
      </Text>,
    );

    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toHaveClass("text-2xl", "text-danger", "rounded-lg", "px-4", "py-2");
    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(buttonElement).toHaveAttribute("disabled");
    expect(buttonElement).toHaveAttribute("aria-label", "Submit form");
  });

  it("filters out non-HTML attributes", () => {
    render(
      <Text
        as="a"
        color="danger"
        size="2xl"
        href="https://example.com"
        {...({ xxx: "xxx", customAttr: "custom" } as any)}
      >
        Link Text
      </Text>,
    );

    const linkElement = screen.getByText("Link Text");
    expect(linkElement).toHaveAttribute("href", "https://example.com");
    expect(linkElement).not.toHaveAttribute("xxx");
    expect(linkElement).not.toHaveAttribute("customAttr");
    expect(linkElement).toHaveClass("text-2xl", "text-danger");
  });
});
