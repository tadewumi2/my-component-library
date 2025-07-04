import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButton } from "./RadioButton";

describe("RadioButton Component", () => {
  test("renders radio button and is visible", () => {
    render(<RadioButton name="test" value="test-value" label="Test Radio" />);

    const radioInput = screen.getByRole("radio");
    const label = screen.getByText("Test Radio");

    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toBeVisible();
    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  test("radio button changes appearance when disabled", () => {
    render(
      <RadioButton
        name="test"
        value="test-value"
        label="Disabled Radio"
        disabled
      />
    );

    const radioInput = screen.getByRole("radio");
    const label = screen.getByText("Disabled Radio");

    expect(radioInput).toBeDisabled();
    expect(label).toHaveStyle("cursor: not-allowed");
    expect(label).toHaveStyle("color: #999999");
    expect(label).toHaveStyle("opacity: 0.6");
  });

  test("handles click and change events", () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButton
        name="test"
        value="test-value"
        label="Clickable Radio"
        onChange={mockOnChange}
      />
    );

    const radioInput = screen.getByRole("radio");

    fireEvent.click(radioInput);

    expect(mockOnChange).toHaveBeenCalledWith("test-value");
    expect(radioInput).toBeChecked();
  });

  test("renders checked state correctly", () => {
    render(
      <RadioButton
        name="test"
        value="test-value"
        label="Checked Radio"
        checked
      />
    );

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeChecked();
  });

  test("renders with default checked state", () => {
    render(
      <RadioButton
        name="test"
        value="test-value"
        label="Default Checked Radio"
        defaultChecked
      />
    );

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeChecked();
  });

  test("does not call onChange when disabled", () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButton
        name="test"
        value="test-value"
        label="Disabled Radio"
        disabled
        onChange={mockOnChange}
      />
    );

    const radioInput = screen.getByRole("radio");

    fireEvent.click(radioInput);

    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test("renders with custom colors", () => {
    render(
      <RadioButton
        name="test"
        value="test-value"
        label="Custom Color Radio"
        color="#ff0000"
        textColor="#00ff00"
      />
    );

    const label = screen.getByText("Custom Color Radio");
    expect(label).toHaveStyle("color: #00ff00");
  });

  test("renders different sizes correctly", () => {
    const { rerender } = render(
      <RadioButton
        name="test"
        value="test-value"
        label="Size Test"
        size="small"
      />
    );

    let label = screen.getByText("Size Test");
    expect(label).toHaveStyle("font-size: 12px");

    rerender(
      <RadioButton
        name="test"
        value="test-value"
        label="Size Test"
        size="large"
      />
    );

    label = screen.getByText("Size Test");
    expect(label).toHaveStyle("font-size: 16px");
  });

  test("renders error state correctly", () => {
    render(
      <RadioButton name="test" value="test-value" label="Error Radio" error />
    );

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeInTheDocument();
    // Error styling is applied through CSS, so we check that the component renders
  });

  test("renders with custom id", () => {
    render(
      <RadioButton
        name="test"
        value="test-value"
        label="Custom ID Radio"
        id="custom-radio-id"
      />
    );

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toHaveAttribute("id", "custom-radio-id");
  });

  test("generates automatic id when none provided", () => {
    render(
      <RadioButton name="test-name" value="test-value" label="Auto ID Radio" />
    );

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toHaveAttribute("id", "radio-test-name-test-value");
  });

  test("label is associated with radio input", () => {
    render(
      <RadioButton name="test" value="test-value" label="Associated Label" />
    );

    const label = screen.getByText("Associated Label");
    const radioInput = screen.getByRole("radio");

    expect(label).toHaveAttribute("for", radioInput.getAttribute("id"));
  });

  test("clicking label selects radio button", () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButton
        name="test"
        value="test-value"
        label="Label Click Test"
        onChange={mockOnChange}
      />
    );

    const label = screen.getByText("Label Click Test");

    fireEvent.click(label);

    expect(mockOnChange).toHaveBeenCalledWith("test-value");
  });
});
