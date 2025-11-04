import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Ui/Input",
  component: Input,
  tags: ["autodocs"],
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      label="Username"
      placeholder="Enter your username"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      size="md"
    />
  );
};

export const Sizes = () => (

  <div className="flex justify-center items-center gap-10">
    <Input label="Small" placeholder="Small input" size="sm" />
    <Input label="Medium" placeholder="Medium input" size="md" />
    <Input label="Large" placeholder="Large input" size="lg" />
  </div>

);

export const WithError = () => (
  <Input
    label="Email"
    placeholder="Enter your email"
    error
    helperText="Invalid email address"
  />
);

export const Disabled = () => (
  <Input label="User ID" value="164" disabled size="sm" />
);