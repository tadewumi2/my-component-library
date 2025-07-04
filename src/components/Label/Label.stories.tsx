import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    fontWeight: {
      control: { type: "select" },
      options: ["normal", "bold", "bolder"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Label",
  },
};

export const Required: Story = {
  args: {
    children: "Required Field",
    required: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Label",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Label",
  },
};

export const Bold: Story = {
  args: {
    fontWeight: "bold",
    children: "Bold Label",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Label",
  },
};

export const CustomColor: Story = {
  args: {
    color: "#e74c3c",
    children: "Custom Color Label",
  },
};

export const WithForm: Story = {
  render: () => (
    <div>
      <Label htmlFor="email" required>
        Email Address
      </Label>
      <input
        type="email"
        id="email"
        style={{
          display: "block",
          marginTop: "4px",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          width: "200px",
        }}
      />
    </div>
  ),
};
