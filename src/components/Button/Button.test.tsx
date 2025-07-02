import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders button and is visible", () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /test button/i });
    expect(buttonElement).toBeVisible();
  });

  test("changes appearance when disabled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });
    expect(buttonElement).toHaveStyle("cursor: not-allowed");
    expect(buttonElement).toHaveStyle("opacity: 0.6");
  });
});
