import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    borderColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    options: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4", disabled: true },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: "Select an option",
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: defaultOptions,
    defaultValue: "option2",
    placeholder: "Select an option",
  },
};

export const Small: Story = {
  args: {
    options: defaultOptions,
    size: "small",
    placeholder: "Small dropdown",
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    size: "large",
    placeholder: "Large dropdown",
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    disabled: true,
    placeholder: "Disabled dropdown",
  },
};

export const Error: Story = {
  args: {
    options: defaultOptions,
    error: true,
    placeholder: "Error state dropdown",
  },
};

export const CustomColors: Story = {
  args: {
    options: defaultOptions,
    backgroundColor: "#f0f8ff",
    color: "#2c3e50",
    borderColor: "#3498db",
    placeholder: "Custom colors",
  },
};

export const Countries: Story = {
  args: {
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
      { value: "fr", label: "France" },
      { value: "de", label: "Germany" },
      { value: "jp", label: "Japan" },
      { value: "au", label: "Australia" },
    ],
    placeholder: "Select a country",
  },
};

export const Priorities: Story = {
  args: {
    options: [
      { value: "low", label: "🟢 Low Priority" },
      { value: "medium", label: "🟡 Medium Priority" },
      { value: "high", label: "🟠 High Priority" },
      { value: "urgent", label: "🔴 Urgent" },
      { value: "blocked", label: "⚫ Blocked", disabled: true },
    ],
    placeholder: "Select priority level",
  },
};

export const WithCallback: Story = {
  args: {
    options: defaultOptions,
    placeholder: "Select and check console",
    onChange: (value: string) => {
      console.log("Selected value:", value);
    },
  },
};
