import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./Img";

describe("Img Component", () => {
  test("renders image and is visible", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
      />
    );

    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
  });

  test("image changes appearance when disabled", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Disabled image"
        disabled
      />
    );

    const image = screen.getByAltText("Disabled image");
    expect(image).toHaveStyle("opacity: 0.5");
    expect(image).toHaveStyle("cursor: not-allowed");
    expect(image).toHaveStyle("filter: grayscale(100%)");
  });

  test("renders with custom dimensions", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Sized image"
        width={400}
        height={300}
      />
    );

    const image = screen.getByAltText("Sized image");
    expect(image).toHaveStyle("width: 400px");
    expect(image).toHaveStyle("height: 300px");
  });

  test("renders with string dimensions", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Responsive image"
        width="100%"
        height="auto"
      />
    );

    const image = screen.getByAltText("Responsive image");
    expect(image).toHaveStyle("width: 100%");
    expect(image).toHaveStyle("height: auto");
  });

  test("renders with border radius", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Rounded image"
        borderRadius="50%"
      />
    );

    const image = screen.getByAltText("Rounded image");
    expect(image).toHaveStyle("border-radius: 50%");
  });

  test("renders with custom object fit", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Fitted image"
        objectFit="contain"
      />
    );

    const image = screen.getByAltText("Fitted image");
    expect(image).toHaveStyle("object-fit: contain");
  });

  test("calls onLoad when image loads", async () => {
    const mockOnLoad = jest.fn();
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Loading image"
        onLoad={mockOnLoad}
      />
    );

    const image = screen.getByAltText("Loading image");

    // Simulate image load
    fireEvent.load(image);

    expect(mockOnLoad).toHaveBeenCalled();
  });

  test("calls onError when image fails to load", async () => {
    const mockOnError = jest.fn();
    render(
      <Img
        src="https://invalid-url.com/nonexistent.jpg"
        alt="Error image"
        onError={mockOnError}
      />
    );

    const image = screen.getByAltText("Error image");

    // Simulate image error
    fireEvent.error(image);

    expect(mockOnError).toHaveBeenCalled();
  });

  test("shows error placeholder when image fails and no placeholder provided", async () => {
    render(
      <Img
        src="https://invalid-url.com/nonexistent.jpg"
        alt="Error image"
        width={300}
        height={200}
      />
    );

    const image = screen.getByAltText("Error image");

    // Simulate image error
    fireEvent.error(image);

    await waitFor(() => {
      const errorMessage = screen.getByText("Failed to load image");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("renders with lazy loading", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Lazy image"
        loading="lazy"
      />
    );

    const image = screen.getByAltText("Lazy image");
    expect(image).toHaveAttribute("loading", "lazy");
  });

  test("renders with eager loading", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Eager image"
        loading="eager"
      />
    );

    const image = screen.getByAltText("Eager image");
    expect(image).toHaveAttribute("loading", "eager");
  });

  test("renders with title attribute", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Titled image"
        title="Image title"
      />
    );

    const image = screen.getByAltText("Titled image");
    expect(image).toHaveAttribute("title", "Image title");
  });

  test("renders with custom className", () => {
    render(
      <Img
        src="https://example.com/test-image.jpg"
        alt="Custom class image"
        className="custom-image-class"
      />
    );

    const container = screen.getByAltText("Custom class image").closest("div");
    expect(container).toHaveClass("custom-image-class");
  });

  test("switches to placeholder when main image fails", async () => {
    const { rerender } = render(
      <Img
        src="https://invalid-url.com/nonexistent.jpg"
        alt="Placeholder test"
        placeholder="https://example.com/placeholder.jpg"
      />
    );

    const image = screen.getByAltText("Placeholder test");

    // Simulate image error
    fireEvent.error(image);

    await waitFor(() => {
      expect(image).toHaveAttribute(
        "src",
        "https://example.com/placeholder.jpg"
      );
    });
  });
});
