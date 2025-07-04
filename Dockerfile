# Use Node.js 20 as base image
FROM node:20-alpine

# Set working directory
WORKDIR /adewumi_tosin_ui_garden

# Copy package.json
COPY package.json ./

# Install dependencies in specific order to avoid conflicts
RUN npm install --force --no-audit --no-fund --legacy-peer-deps

# Copy source code
COPY . .

# Remove any cached builds and problematic default storybook files
RUN rm -rf build storybook-static .cache
RUN rm -rf src/stories 2>/dev/null || true
RUN find . -name "*.stories.js" -delete 2>/dev/null || true
RUN find . -name "*.stories.jsx" -delete 2>/dev/null || true

# Build React app
RUN npm run build

# Build Storybook (continue even if it fails)
RUN npm run build-storybook || echo "Storybook build skipped"

# Create storybook directory and copy if it exists
RUN mkdir -p build/storybook
RUN if [ -d "storybook-static" ]; then cp -r storybook-static/* build/storybook/; else echo "No storybook build found"; fi

# Install serve
RUN npm install -g serve

# Create landing page
#CMD ["serve", "-s", "build", "-l", "8083"]

# Expose port 8083
EXPOSE 8083

# Start application
CMD ["serve", "-s", "build", "-l", "8083"]