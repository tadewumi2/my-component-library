import type { Meta, StoryObj } from "@storybook/react";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    objectFit: {
      control: { type: "select" },
      options: ["contain", "cover", "fill", "scale-down", "none"],
    },
    loading: {
      control: { type: "select" },
      options: ["eager", "lazy"],
    },
    disabled: { control: "boolean" },
    borderRadius: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Beautiful landscape",
    width: 300,
    height: 200,
  },
};

export const Rounded: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Profile picture",
    width: 150,
    height: 150,
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export const RoundedCorners: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Mountain landscape",
    width: 400,
    height: 250,
    borderRadius: "16px",
  },
};

export const Different_ObjectFit: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <div style={{ textAlign: "center" }}>
        <Img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt="Cover example"
          width={150}
          height={150}
          objectFit="cover"
          borderRadius="8px"
        />
        <p>Cover</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt="Contain example"
          width={150}
          height={150}
          objectFit="contain"
          borderRadius="8px"
        />
        <p>Contain</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt="Fill example"
          width={150}
          height={150}
          objectFit="fill"
          borderRadius="8px"
        />
        <p>Fill</p>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Disabled image",
    width: 300,
    height: 200,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    src: "https://invalid-url-that-will-fail.com/image.jpg",
    alt: "This image will fail to load",
    width: 300,
    height: 200,
  },
};

export const WithPlaceholder: Story = {
  args: {
    src: "https://invalid-url-that-will-fail.com/image.jpg",
    alt: "This will fallback to placeholder",
    width: 300,
    height: 200,
    placeholder:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
};

export const ResponsiveImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Responsive image",
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export const Gallery: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        maxWidth: "800px",
      }}
    >
      <Img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        alt="Nature 1"
        width={200}
        height={150}
        borderRadius="8px"
        objectFit="cover"
      />
      <Img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        alt="Nature 2"
        width={200}
        height={150}
        borderRadius="8px"
        objectFit="cover"
      />
      <Img
        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        alt="Nature 3"
        width={200}
        height={150}
        borderRadius="8px"
        objectFit="cover"
      />
      <Img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        alt="Portrait"
        width={200}
        height={150}
        borderRadius="8px"
        objectFit="cover"
      />
    </div>
  ),
};

export const WithCallback: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Image with callbacks",
    width: 300,
    height: 200,
    onLoad: () => console.log("Image loaded successfully"),
    onError: () => console.log("Image failed to load"),
  },
};
