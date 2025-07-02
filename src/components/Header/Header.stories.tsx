import React from "react";
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

export const LoggedIn = () => (
  <Header
    user={{ name: "Jane Doe" }}
    onLogin={() => {}}
    onLogout={() => {}}
    onCreateAccount={() => {}}
  />
);

export const LoggedOut = () => (
  <Header onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />
);
