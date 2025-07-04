import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4", disabled: true },
];

describe("Dropdown Component", () => {
  test("renders dropdown and is visible", () => {
    render(<Dropdown options={mockOptions} placeholder="Select option" />);

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toBeVisible();

    const placeholder = screen.getByDisplayValue("Select option");
    expect(placeholder).toBeInTheDocument();
  });

  test("dropdown changes appearance when disabled", () => {
    render(
      <Dropdown
        options={mockOptions}
        disabled
        placeholder="Disabled dropdown"
      />
    );

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeDisabled();
    expect(dropdown).toHaveStyle("cursor: not-allowed");
    expect(dropdown).toHaveStyle("opacity: 0.6");
    expect(dropdown).toHaveStyle("background-color: #f8f9fa");
    expect(dropdown).toHaveStyle("color: #999999");
  });

  test("renders all options correctly", () => {
    render(<Dropdown options={mockOptions} />);

    const dropdown = screen.getByRole("combobox");
    const options = screen.getAllByRole("option");

    // Should have all options plus placeholder
    expect(options).toHaveLength(mockOptions.length + 1);

    // Check that disabled option is properly disabled
    const disabledOption = screen.getByRole("option", { name: "Option 4" });
    expect(disabledOption).toBeDisabled();
  });

  test("handles selection changes", () => {
    const mockOnChange = jest.fn();
    render(<Dropdown options={mockOptions} onChange={mockOnChange} />);

    const dropdown = screen.getByRole("combobox");

    fireEvent.change(dropdown, { target: { value: "option2" } });

    expect(mockOnChange).toHaveBeenCalledWith("option2");
    expect(dropdown).toHaveValue("option2");
  });

  test("renders with default value", () => {
    render(<Dropdown options={mockOptions} defaultValue="option2" />);

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveValue("option2");
  });

  test("renders different sizes correctly", () => {
    const { rerender } = render(
      <Dropdown options={mockOptions} size="small" />
    );
    let dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveStyle("font-size: 12px");

    rerender(<Dropdown options={mockOptions} size="large" />);
    dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveStyle("font-size: 16px");
  });

  test("renders with custom colors", () => {
    render(
      <Dropdown
        options={mockOptions}
        backgroundColor="#ff0000"
        color="#ffffff"
        borderColor="#00ff00"
      />
    );

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveStyle("background-color: #ff0000");
    expect(dropdown).toHaveStyle("color: #ffffff");
    expect(dropdown).toHaveStyle("border: 2px solid #00ff00");
  });

  test("renders error state correctly", () => {
    render(<Dropdown options={mockOptions} error />);

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveStyle("border: 2px solid #e74c3c");
  });

  test("renders with custom placeholder", () => {
    render(<Dropdown options={mockOptions} placeholder="Custom placeholder" />);

    const placeholder = screen.getByDisplayValue("Custom placeholder");
    expect(placeholder).toBeInTheDocument();
  });

  test("renders with id and name attributes", () => {
    render(
      <Dropdown options={mockOptions} id="test-dropdown" name="test-name" />
    );

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveAttribute("id", "test-dropdown");
    expect(dropdown).toHaveAttribute("name", "test-name");
  });

  test("does not call onChange when disabled", () => {
    const mockOnChange = jest.fn();
    render(<Dropdown options={mockOptions} onChange={mockOnChange} disabled />);

    const dropdown = screen.getByRole("combobox");

    fireEvent.change(dropdown, { target: { value: "option2" } });

    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
