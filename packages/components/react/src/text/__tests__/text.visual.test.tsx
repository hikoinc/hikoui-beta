import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Text from "../text";

// Visual regression tests using Jest snapshots
// These tests capture the rendered HTML structure and CSS classes
// to detect unintended visual changes
describe("Text - Visual Regression Tests", () => {
  describe("basic variants", () => {
    it("matches snapshot for default text", () => {
      const { container } = render(<Text>Default text</Text>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for all color variants", () => {
      const colors = [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "warning",
        "danger",
        "info",
        "muted",
        "inherit",
      ] as const;

      colors.forEach((color) => {
        const { container } = render(<Text color={color}>Text with {color} color</Text>);
        expect(container.firstChild).toMatchSnapshot(`text-color-${color}`);
      });
    });

    it("matches snapshot for all size variants", () => {
      const sizes = [
        "2xs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ] as const;

      sizes.forEach((size) => {
        const { container } = render(<Text size={size}>Text with {size} size</Text>);
        expect(container.firstChild).toMatchSnapshot(`text-size-${size}`);
      });
    });

    it("matches snapshot for all weight variants", () => {
      const weights = [
        "thin",
        "extralight",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
        "black",
      ] as const;

      weights.forEach((weight) => {
        const { container } = render(<Text weight={weight}>Text with {weight} weight</Text>);
        expect(container.firstChild).toMatchSnapshot(`text-weight-${weight}`);
      });
    });
  });

  describe("combined variants", () => {
    it("matches snapshot for heading style", () => {
      const { container } = render(
        <Text as="h1" size="3xl" weight="bold" color="primary">
          Main Heading
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for subheading style", () => {
      const { container } = render(
        <Text as="h2" size="xl" weight="semibold" color="secondary">
          Subheading
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for body text style", () => {
      const { container } = render(
        <Text size="md" color="primary" leading="relaxed">
          This is a body text with relaxed leading for better readability.
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for caption style", () => {
      const { container } = render(
        <Text size="sm" color="muted" fontStyle="italic">
          Image caption or small text
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for code style", () => {
      const { container } = render(
        <Text as="code" size="sm" className="rounded bg-gray-100 px-2 py-1">
          const example = `code`;
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe("special styling", () => {
    it("matches snapshot for truncated text", () => {
      const { container } = render(
        <Text lineClamp="2" className="w-64">
          This is a very long text that should be truncated at exactly two lines when displayed in a container with
          limited width.
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for decorated text", () => {
      const { container } = render(
        <Text decoration="underline" transform="uppercase" letterSpacing="wide">
          Decorated Text
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for aligned text", () => {
      const alignments = ["left", "center", "right", "justify"] as const;

      alignments.forEach((align) => {
        const { container } = render(
          <Text align={align} className="w-64">
            Text with {align} alignment in a fixed width container
          </Text>,
        );
        expect(container.firstChild).toMatchSnapshot(`text-align-${align}`);
      });
    });
  });

  describe("accessibility states", () => {
    it("matches snapshot for error state", () => {
      const { container } = render(
        <Text color="danger" role="alert" aria-live="polite">
          Error: Something went wrong
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for success state", () => {
      const { container } = render(
        <Text color="success" role="status" aria-live="polite">
          Success: Operation completed
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for loading state", () => {
      const { container } = render(
        <Text color="muted" aria-live="polite" aria-busy="true">
          Loading...
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe("custom styling integration", () => {
    it("matches snapshot with custom classes", () => {
      const { container } = render(
        <Text className="custom-shadow transition-colors hover:text-blue-500" size="lg">
          Text with custom styling
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot for dark mode preparation", () => {
      const { container } = render(
        <Text className="dark:bg-gray-800 dark:text-white" color="inherit">
          Dark mode compatible text
        </Text>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
