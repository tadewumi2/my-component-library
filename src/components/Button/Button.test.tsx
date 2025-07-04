import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders button and is visible", () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /test button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test("button background color changes when disabled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });

    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle("cursor: not-allowed");
    expect(buttonElement).toHaveStyle("opacity: 0.5");
    expect(buttonElement).toHaveStyle("background-color: #cccccc");
    expect(buttonElement).toHaveStyle("color: #666666");
  });

  test("renders with custom background color", () => {
    render(<Button backgroundColor="#ff0000">Red Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /red button/i });
    expect(buttonElement).toHaveStyle("background-color: #ff0000");
  });

  test("renders different sizes correctly", () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    let buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("font-size: 12px");
    expect(buttonElement).toHaveStyle("padding: 10px 16px");

    rerender(<Button size="large">Large</Button>);
    buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("font-size: 16px");
    expect(buttonElement).toHaveStyle("padding: 12px 24px");
  });

  test("renders different variants correctly", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: #1ea7fd");

    rerender(<Button variant="secondary">Secondary</Button>);
    buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: transparent");
    expect(buttonElement).toHaveStyle(
      "box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"
    );

    rerender(<Button variant="outline">Outline</Button>);
    buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: transparent");
    expect(buttonElement).toHaveStyle("border: 2px solid #1ea7fd");
  });
});
