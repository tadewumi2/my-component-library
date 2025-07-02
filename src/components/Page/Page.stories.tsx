import React from "react";
import { Page } from "./Page";

export default {
  title: "Components/Page",
  component: Page,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = () => <Page />;

export const Disabled = () => <Page disabled />;
