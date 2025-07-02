import React from "react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = () => <Button primary>Primary Button</Button>;

export const Secondary = () => <Button>Secondary Button</Button>;

export const Large = () => <Button size="large">Large Button</Button>;

export const Small = () => <Button size="small">Small Button</Button>;
