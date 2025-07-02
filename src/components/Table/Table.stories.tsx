import React from "react";
import { Table } from "./Table";

export default {
  title: "Components/Table",
  component: Table,
};

export const Default = () => (
  <Table>
    <tbody>
      <tr>
        <td>Hello</td>
      </tr>
    </tbody>
  </Table>
);
