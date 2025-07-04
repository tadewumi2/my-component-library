import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    error: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Option",
    value: "default",
    name: "example",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Option",
    value: "checked",
    name: "example",
    checked: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Radio",
    value: "small",
    name: "size",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Large Radio",
    value: "large",
    name: "size",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Option",
    value: "disabled",
    name: "example",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked",
    value: "disabled-checked",
    name: "example",
    disabled: true,
    checked: true,
  },
};

export const Error: Story = {
  args: {
    label: "Error State",
    value: "error",
    name: "example",
    error: true,
  },
};

export const CustomColors: Story = {
  args: {
    label: "Custom Colors",
    value: "custom",
    name: "example",
    color: "#e74c3c",
    textColor: "#2c3e50",
    checked: true,
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <h3>Choose your preferred option:</h3>
      <RadioButton
        name="preference"
        value="option1"
        label="Option 1 - Basic"
        defaultChecked
      />
      <RadioButton
        name="preference"
        value="option2"
        label="Option 2 - Premium"
      />
      <RadioButton
        name="preference"
        value="option3"
        label="Option 3 - Enterprise"
      />
      <RadioButton
        name="preference"
        value="option4"
        label="Option 4 - Custom (Coming Soon)"
        disabled
      />
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <RadioButton
          name="size-demo"
          value="small"
          label="Small"
          size="small"
        />
        <RadioButton
          name="size-demo"
          value="medium"
          label="Medium"
          size="medium"
        />
        <RadioButton
          name="size-demo"
          value="large"
          label="Large"
          size="large"
        />
      </div>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <RadioButton
        name="colors"
        value="blue"
        label="Blue Theme"
        color="#3498db"
        checked
      />
      <RadioButton
        name="colors"
        value="green"
        label="Green Theme"
        color="#27ae60"
      />
      <RadioButton
        name="colors"
        value="red"
        label="Red Theme"
        color="#e74c3c"
      />
      <RadioButton
        name="colors"
        value="purple"
        label="Purple Theme"
        color="#9b59b6"
      />
    </div>
  ),
};

export const WithCallback: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <p>Select an option (check console for changes):</p>
      <RadioButton
        name="callback-demo"
        value="option1"
        label="Option 1"
        onChange={(value) => console.log("Selected:", value)}
      />
      <RadioButton
        name="callback-demo"
        value="option2"
        label="Option 2"
        onChange={(value) => console.log("Selected:", value)}
      />
      <RadioButton
        name="callback-demo"
        value="option3"
        label="Option 3"
        onChange={(value) => console.log("Selected:", value)}
      />
    </div>
  ),
};
