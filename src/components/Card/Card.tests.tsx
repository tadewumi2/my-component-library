import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card Component", () => {
  test("renders card and is visible", () => {
    render(
      <Card title="Test Card" subtitle="Test subtitle">
        Card content
      </Card>
    );

    const title = screen.getByText("Test Card");
    const subtitle = screen.getByText("Test subtitle");
    const content = screen.getByText("Card content");

    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(subtitle).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  test("card changes appearance when disabled", () => {
    render(
      <Card title="Disabled Card" disabled>
        Disabled content
      </Card>
    );

    const card = screen.getByText("Disabled Card").closest("div");
    expect(card).toHaveStyle("opacity: 0.6");
    expect(card).toHaveStyle("cursor: not-allowed");
    expect(card).toHaveStyle("background-color: #f8f9fa");
    expect(card).toHaveStyle("color: #999999");
  });

  test("renders without title and subtitle", () => {
    render(<Card>Just content</Card>);

    const content = screen.getByText("Just content");
    expect(content).toBeInTheDocument();

    const title = screen.queryByRole("heading");
    expect(title).not.toBeInTheDocument();
  });

  test("renders with image", () => {
    render(
      <Card
        title="Image Card"
        imageSrc="https://example.com/image.jpg"
        imageAlt="Test image"
      >
        Content with image
      </Card>
    );

    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  test("renders with actions", () => {
    const actions = (
      <>
        <button>Cancel</button>
        <button>Save</button>
      </>
    );

    render(
      <Card title="Action Card" actions={actions}>
        Content with actions
      </Card>
    );

    const cancelButton = screen.getByText("Cancel");
    const saveButton = screen.getByText("Save");

    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  test("handles click events when clickable", () => {
    const mockOnClick = jest.fn();
    render(
      <Card title="Clickable Card" clickable onClick={mockOnClick}>
        Click me
      </Card>
    );

    const card = screen.getByText("Clickable Card").closest("div");
    fireEvent.click(card!);

    expect(mockOnClick).toHaveBeenCalled();
  });

  test("handles click events when onClick is provided", () => {
    const mockOnClick = jest.fn();
    render(
      <Card title="Click Handler Card" onClick={mockOnClick}>
        Click handler
      </Card>
    );

    const card = screen.getByText("Click Handler Card").closest("div");
    fireEvent.click(card!);

    expect(mockOnClick).toHaveBeenCalled();
  });

  test("does not call onClick when disabled", () => {
    const mockOnClick = jest.fn();
    render(
      <Card title="Disabled Clickable Card" disabled onClick={mockOnClick}>
        Disabled click
      </Card>
    );

    const card = screen.getByText("Disabled Clickable Card").closest("div");
    fireEvent.click(card!);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test("renders different variants correctly", () => {
    const { rerender } = render(
      <Card title="Variant Test" variant="elevated">
        Elevated variant
      </Card>
    );

    let card = screen.getByText("Variant Test").closest("div");
    expect(card).toBeInTheDocument();

    rerender(
      <Card title="Variant Test" variant="outlined">
        Outlined variant
      </Card>
    );

    card = screen.getByText("Variant Test").closest("div");
    expect(card).toBeInTheDocument();

    rerender(
      <Card title="Variant Test" variant="filled">
        Filled variant
      </Card>
    );

    card = screen.getByText("Variant Test").closest("div");
    expect(card).toBeInTheDocument();
  });

  test("renders different sizes correctly", () => {
    const { rerender } = render(
      <Card title="Size Test" size="small">
        Small size
      </Card>
    );

    let card = screen.getByText("Size Test").closest("div");
    expect(card).toBeInTheDocument();

    rerender(
      <Card title="Size Test" size="large">
        Large size
      </Card>
    );

    card = screen.getByText("Size Test").closest("div");
    expect(card).toBeInTheDocument();
  });

  test("renders with custom colors", () => {
    render(
      <Card
        title="Custom Colors"
        backgroundColor="#ff0000"
        textColor="#ffffff"
        borderColor="#00ff00"
      >
        Custom styled card
      </Card>
    );

    const card = screen.getByText("Custom Colors").closest("div");
    expect(card).toHaveStyle("background-color: #ff0000");
    expect(card).toHaveStyle("color: #ffffff");
  });

  test("renders with custom dimensions", () => {
    render(
      <Card title="Custom Dimensions" width="400px" height="300px">
        Custom sized card
      </Card>
    );

    const card = screen.getByText("Custom Dimensions").closest("div");
    expect(card).toHaveStyle("width: 400px");
    expect(card).toHaveStyle("height: 300px");
  });

  test("renders with numeric dimensions", () => {
    render(
      <Card title="Numeric Dimensions" width={500} height={400}>
        Numeric sized card
      </Card>
    );

    const card = screen.getByText("Numeric Dimensions").closest("div");
    expect(card).toHaveStyle("width: 500px");
    expect(card).toHaveStyle("height: 400px");
  });

  test("renders with custom className", () => {
    render(
      <Card title="Custom Class" className="custom-card-class">
        Custom class card
      </Card>
    );

    const card = screen.getByText("Custom Class").closest("div");
    expect(card).toHaveClass("custom-card-class");
  });

  test("renders title as h3 element", () => {
    render(<Card title="Heading Test">Content</Card>);

    const title = screen.getByText("Heading Test");
    expect(title.tagName).toBe("H3");
  });

  test("renders subtitle as p element", () => {
    render(<Card subtitle="Subtitle Test">Content</Card>);

    const subtitle = screen.getByText("Subtitle Test");
    expect(subtitle.tagName).toBe("P");
  });

  test("applies custom text color to title and subtitle", () => {
    render(
      <Card
        title="Colored Title"
        subtitle="Colored Subtitle"
        textColor="#ff0000"
      >
        Content
      </Card>
    );

    const title = screen.getByText("Colored Title");
    const subtitle = screen.getByText("Colored Subtitle");

    expect(title).toHaveStyle("color: #ff0000");
    expect(subtitle).toHaveStyle("color: #ff0000");
  });

  test("image uses fallback alt text when none provided", () => {
    render(
      <Card title="Image Card" imageSrc="https://example.com/image.jpg">
        Content
      </Card>
    );

    const image = screen.getByAltText("Card image");
    expect(image).toBeInTheDocument();
  });
});
