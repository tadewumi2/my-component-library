import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";

describe("Text Component", () => {
  test("renders text and is visible", () => {
    render(<Text>Test Text</Text>);
    const textElement = screen.getByText("Test Text");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
  });

  test("text color changes when disabled", () => {
    render(<Text disabled>Disabled Text</Text>);
    const textElement = screen.getByText("Disabled Text");

    expect(textElement).toHaveStyle("color: #999999");
    expect(textElement).toHaveStyle("opacity: 0.6");
    expect(textElement).toHaveStyle("cursor: not-allowed");
  });

  test("renders with custom color", () => {
    render(<Text color="#ff0000">Red Text</Text>);
    const textElement = screen.getByText("Red Text");
    expect(textElement).toHaveStyle("color: #ff0000");
  });

  test("renders different variants correctly", () => {
    const { rerender } = render(<Text variant="heading">Heading</Text>);
    let textElement = screen.getByText("Heading");
    expect(textElement).toHaveStyle("font-size: 24px");
    expect(textElement).toHaveStyle("font-weight: bold");

    rerender(<Text variant="subheading">Subheading</Text>);
    textElement = screen.getByText("Subheading");
    expect(textElement).toHaveStyle("font-size: 18px");
    expect(textElement).toHaveStyle("font-weight: 600");

    rerender(<Text variant="caption">Caption</Text>);
    textElement = screen.getByText("Caption");
    expect(textElement).toHaveStyle("font-size: 12px");
    expect(textElement).toHaveStyle("opacity: 0.8");

    rerender(<Text variant="overline">Overline</Text>);
    textElement = screen.getByText("Overline");
    expect(textElement).toHaveStyle("font-size: 10px");
    expect(textElement).toHaveStyle("text-transform: uppercase");
  });

  test("renders different sizes correctly", () => {
    const { rerender } = render(<Text size="small">Small</Text>);
    let textElement = screen.getByText("Small");
    expect(textElement).toHaveStyle("font-size: 12px");

    rerender(<Text size="large">Large</Text>);
    textElement = screen.getByText("Large");
    expect(textElement).toHaveStyle("font-size: 18px");
  });

  test("renders with correct alignment", () => {
    const { rerender } = render(<Text align="center">Centered</Text>);
    let textElement = screen.getByText("Centered");
    expect(textElement).toHaveStyle("text-align: center");

    rerender(<Text align="right">Right</Text>);
    textElement = screen.getByText("Right");
    expect(textElement).toHaveStyle("text-align: right");
  });

  test("renders with correct decoration", () => {
    const { rerender } = render(<Text decoration="underline">Underlined</Text>);
    let textElement = screen.getByText("Underlined");
    expect(textElement).toHaveStyle("text-decoration: underline");

    rerender(<Text decoration="line-through">Strike</Text>);
    textElement = screen.getByText("Strike");
    expect(textElement).toHaveStyle("text-decoration: line-through");
  });

  test("renders as different HTML elements", () => {
    const { rerender } = render(<Text as="h1">Heading</Text>);
    let textElement = screen.getByRole("heading", { level: 1 });
    expect(textElement).toBeInTheDocument();

    rerender(<Text as="p">Paragraph</Text>);
    textElement = screen.getByText("Paragraph");
    expect(textElement.tagName).toBe("P");
  });

  test("renders with different font weights", () => {
    const { rerender } = render(<Text fontWeight="bold">Bold</Text>);
    let textElement = screen.getByText("Bold");
    expect(textElement).toHaveStyle("font-weight: bold");

    rerender(<Text fontWeight="lighter">Lighter</Text>);
    textElement = screen.getByText("Lighter");
    expect(textElement).toHaveStyle("font-weight: lighter");
  });
});
