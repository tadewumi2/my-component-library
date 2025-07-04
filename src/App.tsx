import React from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Label } from "./components/Label";
import { Text } from "./components/Text";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableFooter,
} from "./components/Table";
import { Dropdown } from "./components/Dropdown";
import { RadioButton } from "./components/RadioButton";
import { Img } from "./components/Img";
import { HeroImage } from "./components/HeroImage";
import { Card } from "./components/Card";

const AppContainer = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const dropdownOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

function App() {
  return (
    <AppContainer>
      <Text variant="heading" as="h1" align="center">
        UI Component Library
      </Text>
      <Text variant="subheading" as="p" align="center">
        A comprehensive React component library built with Storybook
      </Text>

      <HeroImage
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        alt="Technology hero"
        title="Built with Modern Technologies"
        subtitle="React, TypeScript, Styled Components, and Storybook"
        height="300px"
        gradient
      />

      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button variant="primary" size="large">
            Large
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </Section>

      <Section>
        <SectionTitle>Typography</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Label htmlFor="demo-input" required>
            Form Label
          </Label>
          <Text variant="heading">Heading Text</Text>
          <Text variant="subheading">Subheading Text</Text>
          <Text variant="body">
            Body text for paragraphs and general content.
          </Text>
          <Text variant="caption">Caption text for small details.</Text>
          <Text variant="overline">Overline text</Text>
        </div>
      </Section>

      <Section>
        <SectionTitle>Form Controls</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <Label htmlFor="dropdown-demo">Select Framework</Label>
            <Dropdown
              id="dropdown-demo"
              options={dropdownOptions}
              placeholder="Choose a framework"
              onChange={(value) => console.log("Selected:", value)}
            />
          </div>

          <div>
            <Label>Choose Your Experience Level</Label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              <RadioButton
                name="experience"
                value="beginner"
                label="Beginner"
                defaultChecked
              />
              <RadioButton
                name="experience"
                value="intermediate"
                label="Intermediate"
              />
              <RadioButton name="experience" value="expert" label="Expert" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Table</SectionTitle>
        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Component</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell align="center">Status</TableHeaderCell>
              <TableHeaderCell align="right">Tests</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>Button</TableCell>
              <TableCell>Interactive</TableCell>
              <TableCell align="center">✅ Complete</TableCell>
              <TableCell align="right">8 tests</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Typography</TableCell>
              <TableCell align="center">✅ Complete</TableCell>
              <TableCell align="right">6 tests</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Data Display</TableCell>
              <TableCell align="center">✅ Complete</TableCell>
              <TableCell align="right">12 tests</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>-</TableCell>
              <TableCell align="center">9/9</TableCell>
              <TableCell align="right">75+ tests</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>

      <Section>
        <SectionTitle>Images</SectionTitle>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            alt="Profile picture"
            width={100}
            height={100}
            borderRadius="50%"
          />
          <Img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Landscape"
            width={150}
            height={100}
            borderRadius="8px"
          />
          <Img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Ocean"
            width={150}
            height={100}
            borderRadius="8px"
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Cards</SectionTitle>
        <ComponentGrid>
          <Card
            title="Product Card"
            subtitle="$299.99"
            imageSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            imageAlt="Product"
            variant="elevated"
            actions={
              <>
                <Button variant="secondary" size="small">
                  Save
                </Button>
                <Button variant="primary" size="small">
                  Buy Now
                </Button>
              </>
            }
          >
            Premium wireless headphones with noise cancellation.
          </Card>

          <Card
            title="Article Card"
            subtitle="Tech News"
            imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            imageAlt="Technology"
            variant="outlined"
            clickable
            onClick={() => console.log("Article clicked!")}
          >
            Latest developments in web technology and React ecosystem.
          </Card>

          <Card
            title="Profile Card"
            subtitle="Software Engineer"
            imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            imageAlt="Profile"
            variant="filled"
          >
            Experienced developer specializing in React and Node.js.
          </Card>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Component Features</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          <Card variant="outlined" size="small">
            <Text variant="subheading">✅ Responsive Design</Text>
            <Text>All components adapt to different screen sizes</Text>
          </Card>
          <Card variant="outlined" size="small">
            <Text variant="subheading">⚡ TypeScript Support</Text>
            <Text>Full type safety with comprehensive interfaces</Text>
          </Card>
          <Card variant="outlined" size="small">
            <Text variant="subheading">🎨 Styled Components</Text>
            <Text>CSS-in-JS styling with theme support</Text>
          </Card>
          <Card variant="outlined" size="small">
            <Text variant="subheading">📚 Storybook Integration</Text>
            <Text>Interactive documentation and testing</Text>
          </Card>
          <Card variant="outlined" size="small">
            <Text variant="subheading">🧪 Comprehensive Testing</Text>
            <Text>Jest and React Testing Library coverage</Text>
          </Card>
          <Card variant="outlined" size="small">
            <Text variant="subheading">♿ Accessibility</Text>
            <Text>ARIA attributes and keyboard navigation</Text>
          </Card>
        </div>
      </Section>
    </AppContainer>
  );
}

export default App;
