# Use official Node.js runtime as base image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /adewumi_tosin_ui_garden

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build
RUN npm run build-storybook

# Use nginx to serve the built application
FROM nginx:alpine

# Copy built application from build stage
COPY --from=build /adewumi_tosin_ui_garden/storybook-static /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8083
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]