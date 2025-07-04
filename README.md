# Component Library - UI Garden

A comprehensive React component library built with Storybook, featuring responsive components styled with Styled Components.

## Prerequisites

- Docker installed on your system
- Node.js 18+ (for local development)

## Getting Started with Docker

### Building and Running the Container

1. **Build the Docker image:**

   ```bash
   docker build -t smith_john_coding_assignment12 .
   ```

2. **Run the container:**

   ```bash
   docker run -d --name smith_john_coding_assignment12 -p 8083:8083 smith_john_coding_assignment12
   ```

3. **Access the application:**
   Open your browser and navigate to:
   - Root Page: http://localhost:8083 (or http://127.0.0.1:8083)
   - Main App: http://localhost:8083/build/
   - Storybook: http://localhost:8083/build/storybook/

### Managing the Container

- **Stop the container:**

  ```bash
  docker stop smith_john_coding_assignment12
  ```

- **Start the container:**

  ```bash
  docker start smith_john_coding_assignment12
  ```

- **Remove the container:**

  ```bash
  docker rm smith_john_coding_assignment12
  ```

- **Remove the image:**
  ```bash
  docker rmi smith_john_coding_assignment12
  ```

## Local Development Setup

If you want to run the project locally without Docker:

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm start
   ```

3. **Start Storybook:**

   ```bash
   npm run storybook
   ```

4. **Run tests:**

   ```bash
   npm test
   ```

5. **Build for production:**
   ```bash
   npm run build
   npm run build-storybook
   ```

## Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Button.types.tsx
│   │   ├── Button.tests.tsx
│   │   └── index.ts
│   ├── Label/
│   ├── Text/
│   ├── Table/
│   ├── Dropdown/
│   ├── RadioButton/
│   ├── Img/
│   ├── HeroImage/
│   └── Card/
└── App.tsx
```

## Component Features

All components include:

- **Responsive design** - Components adapt to different screen sizes
- **Default and disabled states** - Visual feedback for interactive elements
- **Storybook integration** - Interactive documentation with controls
- **TypeScript support** - Full type safety
- **Styled Components** - CSS-in-JS styling
- **Comprehensive testing** - Visibility and state testing

## Available Components

- **Button** - Interactive button with various styles and states
- **Label** - Text labels for form elements
- **Text** - Typography component with different variants
- **Table** - Complete table system with header, rows, cells, and footer
- **Dropdown** - Select dropdown with options
- **Radio Button** - Single-choice input component
- **Img** - Responsive image component
- **Hero Image** - Large banner/hero section image
- **Card** - Container component for content grouping

## Testing

Each component includes:

- Visibility tests to ensure components render correctly
- State tests to verify disabled state styling and behavior
- Accessibility tests for proper ARIA attributes

Run tests with:

```bash
npm test
```

## Storybook Features

- **Interactive controls** for component properties
- **Default and disabled state examples**
- **Responsive preview** at different viewport sizes
- **Accessibility addon** for compliance checking
- **Documentation** with component usage examples

## Technologies Used

- **React 18** - Component framework
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **Storybook 7** - Component documentation
- **Jest & React Testing Library** - Testing framework
- **Docker** - Containerization

## Troubleshooting

### Port Already in Use

If port 8083 is already in use, you can map to a different port:

```bash
docker run -d --name smith_john_coding_assignment12 -p 3000:8083 smith_john_coding_assignment12
```

### Container Won't Start

Check the container logs:

```bash
docker logs smith_john_coding_assignment12
```

### Build Issues

Ensure you have the latest version of Docker and sufficient disk space for the build process.

## Support

For issues or questions about this component library, please check the component documentation in Storybook or review the test files for usage examples.
