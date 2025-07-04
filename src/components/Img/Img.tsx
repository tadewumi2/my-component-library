import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  max-width: 100%;
  height: auto;
  display: block;
  transition: all 0.3s ease-in-out;

  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "auto"};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "auto"};
  object-fit: ${({ objectFit }) => objectFit || "cover"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      filter: grayscale(100%);
    `}

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.02)")};
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const LoadingPlaceholder = styled.div<{
  width?: string | number;
  height?: string | number;
}>`
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "200px"};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "200px"};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  border-radius: 4px;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const ErrorPlaceholder = styled.div<{
  width?: string | number;
  height?: string | number;
}>`
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "200px"};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "200px"};
  background-color: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #6c757d;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;

  svg {
    margin-bottom: 8px;
    opacity: 0.5;
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  objectFit = "cover",
  borderRadius = "0",
  disabled = false,
  loading = "lazy",
  placeholder,
  onError,
  onLoad,
  className,
  title,
  ...props
}) => {
  const [imageState, setImageState] = useState<"loading" | "loaded" | "error">(
    "loading"
  );
  const [imageSrc, setImageSrc] = useState(src);

  const handleLoad = () => {
    setImageState("loaded");
    if (onLoad) {
      onLoad();
    }
  };

  const handleError = () => {
    setImageState("error");
    if (placeholder) {
      setImageSrc(placeholder);
      setImageState("loading");
    } else if (onError) {
      onError();
    }
  };

  if (imageState === "loading" && !imageSrc) {
    return (
      <LoadingPlaceholder width={width} height={height} className={className} />
    );
  }

  if (imageState === "error" && !placeholder) {
    return (
      <ErrorPlaceholder width={width} height={height} className={className}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21,15 16,10 5,21" />
        </svg>
        <span>Failed to load image</span>
      </ErrorPlaceholder>
    );
  }

  return (
    <ImageContainer className={className}>
      {imageState === "loading" && (
        <LoadingPlaceholder width={width} height={height} />
      )}
      <StyledImg
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        borderRadius={borderRadius}
        disabled={disabled}
        loading={loading}
        title={title}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          display: imageState === "loaded" ? "block" : "none",
          position: imageState === "loaded" ? "static" : "absolute",
        }}
        {...props}
      />
    </ImageContainer>
  );
};
