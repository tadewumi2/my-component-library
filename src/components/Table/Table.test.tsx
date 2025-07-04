import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableFooter,
} from "./Table";

describe("Table Components", () => {
  test("renders table and is visible", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Age</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();

    const headerCell = screen.getByRole("columnheader", { name: "Name" });
    expect(headerCell).toBeInTheDocument();

    const dataCell = screen.getByRole("cell", { name: "John" });
    expect(dataCell).toBeInTheDocument();
  });

  test("table changes appearance when disabled", () => {
    render(
      <Table disabled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>John</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const table = screen.getByRole("table");
    expect(table).toHaveStyle("opacity: 0.6");
    expect(table).toHaveStyle("cursor: not-allowed");
  });

  test("renders different table variants", () => {
    const { rerender } = render(
      <Table variant="striped">
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    let table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    rerender(
      <Table variant="bordered">
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    table = screen.getByRole("table");
    expect(table).toHaveStyle("border: 1px solid #dee2e6");
  });

  test("renders different table sizes", () => {
    const { rerender } = render(
      <Table size="small">
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    let table = screen.getByRole("table");
    expect(table).toHaveStyle("font-size: 12px");

    rerender(
      <Table size="large">
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    table = screen.getByRole("table");
    expect(table).toHaveStyle("font-size: 16px");
  });

  test("TableHeader renders with custom colors", () => {
    render(
      <Table>
        <TableHeader backgroundColor="#ff0000" color="#ffffff">
          <TableRow>
            <TableHeaderCell>Test Header</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>
    );

    const header = screen
      .getByRole("columnheader", { name: "Test Header" })
      .closest("thead");
    expect(header).toHaveStyle("background-color: #ff0000");
    expect(header).toHaveStyle("color: #ffffff");
  });

  test("TableHeader changes appearance when disabled", () => {
    render(
      <Table>
        <TableHeader disabled>
          <TableRow>
            <TableHeaderCell>Disabled Header</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>
    );

    const header = screen
      .getByRole("columnheader", { name: "Disabled Header" })
      .closest("thead");
    expect(header).toHaveStyle("opacity: 0.6");
    expect(header).toHaveStyle("color: #999999");
  });

  test("TableRow renders with selection state", () => {
    render(
      <Table>
        <tbody>
          <TableRow selected>
            <TableCell>Selected Row</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const row = screen
      .getByRole("cell", { name: "Selected Row" })
      .closest("tr");
    expect(row).toHaveStyle("background-color: #e3f2fd");
  });

  test("TableRow changes appearance when disabled", () => {
    render(
      <Table>
        <tbody>
          <TableRow disabled>
            <TableCell>Disabled Row</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const row = screen
      .getByRole("cell", { name: "Disabled Row" })
      .closest("tr");
    expect(row).toHaveStyle("opacity: 0.6");
    expect(row).toHaveStyle("cursor: not-allowed");
  });

  test("TableCell renders with different alignments", () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell align="center">Centered</TableCell>
            <TableCell align="right">Right</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const centeredCell = screen.getByRole("cell", { name: "Centered" });
    expect(centeredCell).toHaveStyle("text-align: center");

    const rightCell = screen.getByRole("cell", { name: "Right" });
    expect(rightCell).toHaveStyle("text-align: right");
  });

  test("TableCell changes appearance when disabled", () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell disabled>Disabled Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const cell = screen.getByRole("cell", { name: "Disabled Cell" });
    expect(cell).toHaveStyle("opacity: 0.6");
    expect(cell).toHaveStyle("cursor: not-allowed");
    expect(cell).toHaveStyle("color: #999999");
  });

  test("TableFooter renders correctly", () => {
    render(
      <Table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer Cell</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    const footer = screen
      .getByRole("cell", { name: "Footer Cell" })
      .closest("tfoot");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveStyle("background-color: #f8f9fa");
  });

  test("TableFooter changes appearance when disabled", () => {
    render(
      <Table>
        <TableFooter disabled>
          <TableRow>
            <TableCell>Disabled Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    const footer = screen
      .getByRole("cell", { name: "Disabled Footer" })
      .closest("tfoot");
    expect(footer).toHaveStyle("opacity: 0.6");
    expect(footer).toHaveStyle("color: #999999");
  });

  test("renders with custom background color", () => {
    render(
      <Table backgroundColor="#f0f0f0">
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const table = screen.getByRole("table");
    expect(table).toHaveStyle("background-color: #f0f0f0");
  });
});
