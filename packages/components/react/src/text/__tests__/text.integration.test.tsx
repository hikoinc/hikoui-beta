import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Text from "../text";

describe("Text - Integration Tests", () => {
  describe("with system integration", () => {
    it("correctly integrates with filterHTMLAttributes", () => {
      render(
        <Text
          as="button"
          data-testid="integration-button"
          aria-label="Click me"
          onClick={() => {}}
          {...({ invalidProp: "should-be-filtered" } as any)}
          type="button"
        >
          Button Text
        </Text>,
      );

      const element = screen.getByRole("button");
      expect(element).toHaveAttribute("data-testid", "integration-button");
      expect(element).toHaveAttribute("aria-label", "Click me");
      expect(element).toHaveAttribute("type", "button");
      expect(element).not.toHaveAttribute("invalidProp");
    });

    it("correctly integrates with forwardRef", () => {
      const ref = { current: null as HTMLElement | null };

      render(
        <Text ref={ref} data-testid="ref-test">
          Ref Test
        </Text>,
      );

      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current?.textContent).toBe("Ref Test");
    });
  });

  describe("real-world usage scenarios", () => {
    it("renders as navigation link with proper attributes", () => {
      render(
        <Text as="a" href="/about" color="primary" size="lg" weight="semibold" className="nav-link" aria-current="page">
          About Us
        </Text>,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/about");
      expect(link).toHaveAttribute("aria-current", "page");
      expect(link).toHaveClass("nav-link", "text-primary-text", "text-lg", "font-semibold");
    });

    it("renders as form label with proper styling", () => {
      render(
        <Text as="label" size="sm" weight="medium" className="form-label">
          Email Address
        </Text>,
      );

      const label = screen.getByText("Email Address");
      expect(label.tagName).toBe("LABEL");
      expect(label).toHaveClass("text-sm", "font-medium", "form-label");
    });

    it("renders as heading with semantic HTML", () => {
      render(
        <Text as="h2" size="2xl" weight="bold" color="primary">
          Section Title
        </Text>,
      );

      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toHaveClass("text-2xl", "font-bold", "text-primary-text");
    });

    it("renders truncated text with line clamp", () => {
      render(
        <Text lineClamp="2" className="w-32">
          This is a very long text that should be truncated at two lines when displayed in a narrow container
        </Text>,
      );

      const text = screen.getByText(/This is a very long text/);
      expect(text).toHaveClass("line-clamp-2", "w-32");
    });

    it("renders code snippet with appropriate styling", () => {
      render(
        <Text as="code" size="sm" fontStyle="normal" className="rounded bg-gray-100 px-2 py-1">
          npm install @hikoui-beta/react
        </Text>,
      );

      const code = screen.getByText("npm install @hikoui-beta/react");
      expect(code.tagName).toBe("CODE");
      expect(code).toHaveClass("text-sm", "not-italic", "bg-gray-100", "px-2", "py-1", "rounded");
    });
  });

  describe("accessibility integration", () => {
    it("preserves accessibility attributes through system", () => {
      render(
        <Text as="div" role="status" aria-live="polite" aria-atomic="true" color="success">
          Form saved successfully
        </Text>,
      );

      const status = screen.getByText("Form saved successfully");
      expect(status).toHaveAttribute("aria-live", "polite");
      expect(status).toHaveAttribute("aria-atomic", "true");
      expect(status).toHaveClass("text-success-text");
    });

    it("supports screen reader friendly text", () => {
      render(
        <Text as="span" className="sr-only" aria-label="Loading progress">
          Loading...
        </Text>,
      );

      const text = screen.getByLabelText("Loading progress");
      expect(text).toHaveClass("sr-only");
    });
  });

  describe("performance scenarios", () => {
    it("handles frequent re-renders efficiently", () => {
      const { rerender } = render(
        <Text color="primary" size="md">
          Initial text
        </Text>,
      );

      for (let i = 0; i < 10; i += 1) {
        rerender(
          <Text color="secondary" size="lg">
            Updated text {i}
          </Text>,
        );
      }

      const text = screen.getByText("Updated text 9");
      expect(text).toHaveClass("text-secondary-text", "text-lg");
    });

    it("handles complex prop combinations", () => {
      render(
        <Text
          as="p"
          color="danger"
          size="xl"
          weight="bold"
          fontStyle="italic"
          decoration="underline"
          transform="uppercase"
          align="center"
          lineClamp="3"
          leading="tight"
          letterSpacing="wide"
          className="custom-class"
          data-analytics="error-message"
        >
          Error: Complex styling applied
        </Text>,
      );

      const text = screen.getByText("Error: Complex styling applied");
      expect(text).toHaveClass(
        "text-danger-text",
        "text-xl",
        "font-bold",
        "italic",
        "underline",
        "uppercase",
        "text-center",
        "line-clamp-3",
        "leading-tight",
        "tracking-wide",
        "custom-class",
      );
      expect(text).toHaveAttribute("data-analytics", "error-message");
    });
  });
});
