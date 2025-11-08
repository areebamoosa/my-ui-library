import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Accept Terms"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Sizes = () => (
  <div className="flex flex-col gap-4">
    <Checkbox label="Small" size="sm" />
    <Checkbox label="Medium" size="md" />
    <Checkbox label="Large" size="lg" />
  </div>
);

export const WithError = () => (
  <Checkbox
    label="I agree to the policy"
    error
    helperText="You must agree before continuing"
  />
);

export const Disabled = () => (
  <Checkbox
    label="Disabled Checkbox"
    disabled
    checked={true}
  />
);
