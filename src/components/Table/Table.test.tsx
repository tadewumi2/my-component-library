import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("renders table element", () => {
  render(
    <Table>
      <tbody>
        <tr>
          <td>Test</td>
        </tr>
      </tbody>
    </Table>
  );
  expect(screen.getByRole("table")).toBeVisible();
});

test("changes background color when disabled", () => {
  render(<Table disabled />);
  const table = screen.getByRole("table");
  expect(table).toHaveStyle({ backgroundColor: "grey" }); // Make sure your component applies this style
});
