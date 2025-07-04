import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "./Label";

describe("Label Component", () => {
  test("renders label and is visible", () => {
    render(<Label>Test Label</Label>);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
  });

  test("label color changes when disabled", () => {
    render(<Label disabled>Disabled Label</Label>);
    const labelElement = screen.getByText("Disabled Label");

    expect(labelElement).toHaveStyle("color: #999999");
    expect(labelElement).toHaveStyle("opacity: 0.6");
    expect(labelElement).toHaveStyle("cursor: not-allowed");
  });

  test("renders with custom color", () => {
    render(<Label color="#ff0000">Red Label</Label>);
    const labelElement = screen.getByText("Red Label");
    expect(labelElement).toHaveStyle("color: #ff0000");
  });

  test("renders required asterisk when required", () => {
    render(<Label required>Required Label</Label>);
    const labelElement = screen.getByText("Required Label");
    const asterisk = screen.getByText("*");

    expect(labelElement).toBeInTheDocument();
    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveStyle("color: #e74c3c");
  });

  test("does not render required asterisk when disabled", () => {
    render(
      <Label required disabled>
        Disabled Required
      </Label>
    );
    const labelElement = screen.getByText("Disabled Required");
    const asterisk = screen.queryByText("*");

    expect(labelElement).toBeInTheDocument();
    expect(asterisk).not.toBeInTheDocument();
  });

  test("renders different sizes correctly", () => {
    const { rerender } = render(<Label size="small">Small</Label>);
    let labelElement = screen.getByText("Small");
    expect(labelElement).toHaveStyle("font-size: 12px");

    rerender(<Label size="large">Large</Label>);
    labelElement = screen.getByText("Large");
    expect(labelElement).toHaveStyle("font-size: 18px");
  });

  test("renders with correct htmlFor attribute", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toHaveAttribute("for", "test-input");
  });

  test("renders with different font weights", () => {
    const { rerender } = render(<Label fontWeight="bold">Bold Label</Label>);
    let labelElement = screen.getByText("Bold Label");
    expect(labelElement).toHaveStyle("font-weight: bold");

    rerender(<Label fontWeight="bolder">Bolder Label</Label>);
    labelElement = screen.getByText("Bolder Label");
    expect(labelElement).toHaveStyle("font-weight: bolder");
  });
});
