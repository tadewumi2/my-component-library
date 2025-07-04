import type { Meta, StoryObj } from "@storybook/react";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    overlayColor: { control: "color" },
    textColor: { control: "color" },
    textPosition: {
      control: { type: "select" },
      options: ["center", "left", "right", "top", "bottom"],
    },
    objectFit: {
      control: { type: "select" },
      options: ["contain", "cover", "fill", "scale-down", "none"],
    },
    disabled: { control: "boolean" },
    gradient: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain landscape",
    title: "Welcome to Our Platform",
    subtitle: "Discover amazing features and possibilities",
    height: "500px",
  },
};

export const WithCTA: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Forest landscape",
    title: "Start Your Journey",
    subtitle: "Join thousands of satisfied customers",
    height: "600px",
    ctaButton: (
      <button
        style={{
          backgroundColor: "#1ea7fd",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
      >
        Get Started
      </button>
    ),
  },
};

export const LeftAligned: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Ocean waves",
    title: "Innovation at Scale",
    subtitle: "Building the future of technology",
    height: "450px",
    textPosition: "left",
  },
};

export const RightAligned: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "City skyline",
    title: "Urban Excellence",
    subtitle: "Where business meets opportunity",
    height: "450px",
    textPosition: "right",
  },
};

export const TopAligned: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain peak",
    title: "Reach New Heights",
    subtitle: "Excellence in every detail",
    height: "500px",
    textPosition: "top",
  },
};

export const BottomAligned: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Sunset landscape",
    title: "End Your Day Right",
    subtitle: "Peaceful moments await",
    height: "500px",
    textPosition: "bottom",
  },
};

export const WithGradient: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Ocean view",
    title: "Gradient Overlay",
    subtitle: "Beautiful gradient effects",
    height: "500px",
    gradient: true,
  },
};

export const CustomOverlay: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "City at night",
    title: "Custom Overlay",
    subtitle: "Personalized styling options",
    height: "500px",
    overlayColor: "rgba(255, 99, 132, 0.6)",
  },
};

export const Disabled: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Disabled hero",
    title: "Disabled State",
    subtitle: "This hero is disabled",
    height: "400px",
    disabled: true,
  },
};

export const MinimalText: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal hero",
    title: "Simple & Clean",
    height: "400px",
  },
};

export const NoText: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Pure image hero",
    height: "400px",
  },
};

export const Tall: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Tall hero section",
    title: "Full Height Experience",
    subtitle: "Immersive visual storytelling",
    height: "100vh",
  },
};

export const Compact: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Compact hero",
    title: "Quick Impact",
    subtitle: "Perfect for smaller sections",
    height: "250px",
  },
};

export const WithCallback: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Clickable hero",
    title: "Interactive Hero",
    subtitle: "Click to see console output",
    height: "400px",
    onClick: () => console.log("Hero clicked!"),
  },
};

export const CustomTextColors: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Custom colors",
    title: "Custom Text Colors",
    subtitle: "Stand out with unique styling",
    height: "400px",
    textColor: "#ffd700",
    overlayColor: "rgba(0, 0, 0, 0.7)",
  },
};
