import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./button";

describe("Button", () => {
  it("renders the children text", () => {
    render(<Button>hello</Button>);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  it("calls alert with correct message when clicked with appName", () => {
    window.alert = jest.fn();

    render(<Button appName="TestApp">Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("Hello from your TestApp app!");
  });

  it("calls alert with default message when appName is not provided", () => {
    window.alert = jest.fn();

    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("Hello from your new app!");
  });
});
