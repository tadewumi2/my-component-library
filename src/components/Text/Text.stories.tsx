import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    variant: {
      control: { type: "select" },
      options: ["body", "caption", "heading", "subheading", "overline"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    fontWeight: {
      control: { type: "select" },
      options: ["normal", "bold", "bolder", "lighter"],
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
    },
    decoration: {
      control: { type: "select" },
      options: ["none", "underline", "line-through"],
    },
    as: {
      control: { type: "select" },
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is default body text",
  },
};

export const Heading: Story = {
  args: {
    variant: "heading",
    children: "This is a heading",
  },
};

export const Subheading: Story = {
  args: {
    variant: "subheading",
    children: "This is a subheading",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "This is caption text",
  },
};

export const Overline: Story = {
  args: {
    variant: "overline",
    children: "This is overline text",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small text",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large text",
  },
};

export const Bold: Story = {
  args: {
    fontWeight: "bold",
    children: "Bold text",
  },
};

export const Centered: Story = {
  args: {
    align: "center",
    children: "Centered text",
  },
};

export const Underlined: Story = {
  args: {
    decoration: "underline",
    children: "Underlined text",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled text",
  },
};

export const CustomColor: Story = {
  args: {
    color: "#e74c3c",
    children: "Custom color text",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ width: "400px", textAlign: "left" }}>
      <Text variant="heading" as="h1">
        Heading Text
      </Text>
      <Text variant="subheading" as="h2">
        Subheading Text
      </Text>
      <Text variant="body" as="p">
        This is body text. It's the most common text variant used for paragraphs
        and general content.
      </Text>
      <Text variant="caption" as="p">
        This is caption text, typically used for image captions or small notes.
      </Text>
      <Text variant="overline" as="p">
        This is overline text
      </Text>
    </div>
  ),
};
