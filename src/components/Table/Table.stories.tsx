import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableFooter,
} from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: { type: "select" },
      options: ["default", "striped", "bordered"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>25</TableCell>
          <TableCell>jane@example.com</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    variant: "default",
    size: "medium",
  },
};

export const Striped: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell align="right">Price</TableHeaderCell>
          <TableHeaderCell align="center">Stock</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Laptop</TableCell>
          <TableCell align="right">$999</TableCell>
          <TableCell align="center">5</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mouse</TableCell>
          <TableCell align="right">$29</TableCell>
          <TableCell align="center">15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Keyboard</TableCell>
          <TableCell align="right">$79</TableCell>
          <TableCell align="center">8</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    variant: "striped",
    size: "medium",
  },
};

export const Bordered: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Feature</TableHeaderCell>
          <TableHeaderCell>Basic</TableHeaderCell>
          <TableHeaderCell>Premium</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Storage</TableCell>
          <TableCell>10GB</TableCell>
          <TableCell>100GB</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Users</TableCell>
          <TableCell>5</TableCell>
          <TableCell>50</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    variant: "bordered",
    size: "medium",
  },
};

export const WithFooter: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Item</TableHeaderCell>
          <TableHeaderCell align="right">Quantity</TableHeaderCell>
          <TableHeaderCell align="right">Price</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell align="right">2</TableCell>
          <TableCell align="right">$20.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell align="right">1</TableCell>
          <TableCell align="right">$15.00</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell align="right">3</TableCell>
          <TableCell align="right">$35.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  args: {
    variant: "default",
    size: "medium",
  },
};

export const Small: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Code</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>200</TableCell>
          <TableCell>OK</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>404</TableCell>
          <TableCell>Not Found</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    size: "small",
  },
};

export const Large: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Manager</TableHeaderCell>
          <TableHeaderCell>Employees</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Engineering</TableCell>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Marketing</TableCell>
          <TableCell>Bob Wilson</TableCell>
          <TableCell>12</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    size: "large",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Service A</TableCell>
          <TableCell>Disabled</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Service B</TableCell>
          <TableCell>Disabled</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    disabled: true,
  },
};

export const CustomColors: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader backgroundColor="#2c3e50" color="white">
        <TableRow>
          <TableHeaderCell>Priority</TableHeaderCell>
          <TableHeaderCell>Task</TableHeaderCell>
          <TableHeaderCell>Assigned</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell backgroundColor="#e74c3c" color="white">
            High
          </TableCell>
          <TableCell>Fix critical bug</TableCell>
          <TableCell>John</TableCell>
        </TableRow>
        <TableRow>
          <TableCell backgroundColor="#f39c12" color="white">
            Medium
          </TableCell>
          <TableCell>Update documentation</TableCell>
          <TableCell>Jane</TableCell>
        </TableRow>
        <TableRow>
          <TableCell backgroundColor="#27ae60" color="white">
            Low
          </TableCell>
          <TableCell>Code review</TableCell>
          <TableCell>Bob</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    variant: "default",
  },
};
