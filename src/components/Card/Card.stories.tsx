import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    textColor: { control: "color" },
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "outlined", "filled"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    clickable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    subtitle: "Card subtitle",
    children:
      "This is the main content of the card. It can contain any React elements or text.",
  },
};

export const WithImage: Story = {
  args: {
    title: "Beautiful Landscape",
    subtitle: "Nature photography",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    imageAlt: "Beautiful landscape",
    children:
      "This card features a stunning landscape image that captures the beauty of nature.",
  },
};

export const WithActions: Story = {
  args: {
    title: "Action Card",
    subtitle: "Card with action buttons",
    children: "This card includes action buttons in the footer area.",
    actions: (
      <>
        <button
          style={{
            padding: "8px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "white",
          }}
        >
          Cancel
        </button>
        <button
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            background: "#1ea7fd",
            color: "white",
          }}
        >
          Save
        </button>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    title: "Elevated Card",
    subtitle: "Card with shadow elevation",
    children: "This card has an elevated appearance with a shadow effect.",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    title: "Outlined Card",
    subtitle: "Card with border outline",
    children: "This card has a clean outlined appearance.",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    title: "Filled Card",
    subtitle: "Card with filled background",
    children: "This card has a filled background appearance.",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    title: "Small Card",
    children: "This is a small card with compact spacing.",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    title: "Large Card",
    subtitle: "Spacious card layout",
    children:
      "This is a large card with generous spacing and room for more content.",
  },
};

export const Clickable: Story = {
  args: {
    title: "Clickable Card",
    subtitle: "Click to see console output",
    children: "This card is clickable and will trigger an action.",
    clickable: true,
    onClick: () => console.log("Card clicked!"),
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Card",
    subtitle: "This card is disabled",
    children: "This card is in a disabled state and cannot be interacted with.",
    disabled: true,
  },
};

export const CustomColors: Story = {
  args: {
    title: "Custom Colors",
    subtitle: "Personalized styling",
    children: "This card demonstrates custom background and text colors.",
    backgroundColor: "#e3f2fd",
    textColor: "#1565c0",
    borderColor: "#2196f3",
  },
};

export const ProductCard: Story = {
  args: {
    title: "Premium Headphones",
    subtitle: "$299.99",
    imageSrc:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    imageAlt: "Premium headphones",
    children:
      "High-quality wireless headphones with noise cancellation and premium sound quality.",
    variant: "elevated",
    actions: (
      <>
        <button
          style={{
            padding: "8px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "white",
          }}
        >
          ♡ Save
        </button>
        <button
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            background: "#1ea7fd",
            color: "white",
          }}
        >
          Add to Cart
        </button>
      </>
    ),
  },
};

export const ProfileCard: Story = {
  args: {
    title: "John Doe",
    subtitle: "Software Engineer",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    imageAlt: "John Doe",
    children:
      "Experienced full-stack developer with expertise in React, Node.js, and cloud technologies.",
    variant: "outlined",
    actions: (
      <>
        <button
          style={{
            padding: "8px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "white",
          }}
        >
          Message
        </button>
        <button
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            background: "#1ea7fd",
            color: "white",
          }}
        >
          Connect
        </button>
      </>
    ),
  },
};

export const ArticleCard: Story = {
  args: {
    title: "Getting Started with React",
    subtitle: "Published 2 days ago",
    imageSrc:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    imageAlt: "React code",
    children:
      "Learn the fundamentals of React and how to build modern web applications with this comprehensive guide.",
    clickable: true,
    onClick: () => console.log("Article clicked!"),
  },
};

export const NotificationCard: Story = {
  args: {
    title: "New Message",
    subtitle: "5 minutes ago",
    children:
      "You have received a new message from Alice. Click to view the conversation.",
    backgroundColor: "#fff3cd",
    textColor: "#856404",
    borderColor: "#ffeaa7",
    variant: "outlined",
    size: "small",
  },
};

export const CardGrid: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
      }}
    >
      <Card
        title="Technology"
        subtitle="Latest trends"
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        imageAlt="Technology"
        variant="elevated"
      >
        Explore the latest in technology and innovation.
      </Card>

      <Card
        title="Design"
        subtitle="Creative inspiration"
        imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        imageAlt="Design"
        variant="outlined"
      >
        Discover amazing design patterns and inspiration.
      </Card>

      <Card
        title="Business"
        subtitle="Growth strategies"
        imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        imageAlt="Business"
        variant="filled"
      >
        Learn effective business strategies and tips.
      </Card>
    </div>
  ),
};

export const MinimalCard: Story = {
  args: {
    children: "This is a minimal card with just content, no title or subtitle.",
    variant: "outlined",
  },
};

export const ContentOnlyCard: Story = {
  args: {
    children: (
      <div>
        <h4 style={{ margin: "0 0 12px 0", color: "#333" }}>Custom Content</h4>
        <p style={{ margin: "0 0 12px 0", color: "#666" }}>
          This card contains custom JSX content instead of using the built-in
          title and subtitle props.
        </p>
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    ),
    variant: "elevated",
  },
};
