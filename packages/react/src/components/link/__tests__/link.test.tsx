import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Link from "../link";

describe("Link", () => {
  it("should render with default props", () => {
    render(<Link href="/">Default Link</Link>);
    const linkElement = screen.getByText("Default Link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe("A");
  });

  it("should render with href attribute", () => {
    render(<Link href="/test">Test Link</Link>);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/test");
  });

  it("should render with custom className", () => {
    render(
      <Link href="/" className="custom-class">
        Styled Link
      </Link>,
    );
    const linkElement = screen.getByText("Styled Link");
    expect(linkElement).toHaveClass("custom-class");
  });

  it("should render as different component when as prop is provided", () => {
    render(<Link as="button">Button Link</Link>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("BUTTON");
  });

  it("should render with color variants", () => {
    render(
      <Link href="/" color="primary">
        Primary Link
      </Link>,
    );
    const linkElement = screen.getByText("Primary Link");
    expect(linkElement).toHaveClass("text-palette-primary-link");
  });

  it("should render with size variants", () => {
    render(
      <Link href="/" size="lg">
        Large Link
      </Link>,
    );
    const linkElement = screen.getByText("Large Link");
    expect(linkElement).toHaveClass("text-lg");
  });

  it("should render with weight variants", () => {
    render(
      <Link href="/" weight="bold">
        Bold Link
      </Link>,
    );
    const linkElement = screen.getByText("Bold Link");
    expect(linkElement).toHaveClass("font-bold");
  });

  it("should render with underline variants", () => {
    render(
      <Link href="/" underline="always">
        Always Underlined
      </Link>,
    );
    const linkElement = screen.getByText("Always Underlined");
    expect(linkElement).toHaveClass("before:content-['']");
  });

  it("should render with disabled state", () => {
    render(
      <Link href="/" disabled>
        Disabled Link
      </Link>,
    );
    const linkElement = screen.getByText("Disabled Link");
    expect(linkElement).toHaveClass("aria-disabled", "pointer-events-none", "cursor-not-allowed", "opacity-50");
  });

  it("should render with external anchor variant", () => {
    render(
      <Link href="/" anchor="external">
        External Link
      </Link>,
    );
    const linkElement = screen.getByText("External Link");
    expect(linkElement).toHaveClass("after:content-['↗']");
  });

  it("should render with internal anchor variant", () => {
    render(
      <Link href="/" anchor="internal">
        Internal Link
      </Link>,
    );
    const linkElement = screen.getByText("Internal Link");
    expect(linkElement).toHaveClass("after:content-['→']");
  });

  it("should render with focus disabled", () => {
    render(
      <Link href="/" focus={false}>
        No Focus Link
      </Link>,
    );
    const linkElement = screen.getByText("No Focus Link");
    expect(linkElement).toHaveClass("focus:outline-none");
  });

  it("should render with font style variants", () => {
    render(
      <Link href="/" fontStyle="italic">
        Italic Link
      </Link>,
    );
    const linkElement = screen.getByText("Italic Link");
    expect(linkElement).toHaveClass("italic");
  });

  it("should render with letter spacing variants", () => {
    render(
      <Link href="/" letterSpacing="wide">
        Wide Spacing
      </Link>,
    );
    const linkElement = screen.getByText("Wide Spacing");
    expect(linkElement).toHaveClass("tracking-wide");
  });

  it("should render with text transform variants", () => {
    render(
      <Link href="/" transform="uppercase">
        Uppercase Link
      </Link>,
    );
    const linkElement = screen.getByText("Uppercase Link");
    expect(linkElement).toHaveClass("uppercase");
  });

  it("should render with display variants", () => {
    render(
      <Link href="/" display="block">
        Block Link
      </Link>,
    );
    const linkElement = screen.getByText("Block Link");
    expect(linkElement).toHaveClass("block");
  });

  it("should render with multiple variant props", () => {
    render(
      <Link href="/" color="danger" size="xl" weight="semibold" underline="hover" anchor="external">
        Complex Link
      </Link>,
    );
    const linkElement = screen.getByText("Complex Link");
    expect(linkElement).toHaveClass("text-palette-danger-link");
    expect(linkElement).toHaveClass("text-xl");
    expect(linkElement).toHaveClass("font-semibold");
    expect(linkElement).toHaveClass("after:content-['↗']");
  });

  it("should have correct display name", () => {
    expect(Link.displayName).toBe("HikoUI.Link");
  });

  it("should merge custom className with variant classes", () => {
    render(
      <Link href="/" className="custom-class" color="primary" size="lg">
        Merged Classes
      </Link>,
    );
    const linkElement = screen.getByText("Merged Classes");
    expect(linkElement).toHaveClass("custom-class");
    expect(linkElement).toHaveClass("text-palette-primary-link");
    expect(linkElement).toHaveClass("text-lg");
  });

  it("should pass through HTML attributes", () => {
    render(
      <Link href="/test" title="Test Title" data-testid="test-link">
        Attributed Link
      </Link>,
    );
    const linkElement = screen.getByTestId("test-link");
    expect(linkElement).toHaveAttribute("href", "/test");
    expect(linkElement).toHaveAttribute("title", "Test Title");
  });
});
