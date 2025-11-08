import React, { useState } from "react";
import RadioButton from "./RadioButton";

export default {
  title: "UI/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export const Default = () => {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="flex flex-col gap-3">
      <RadioButton
        label="Option 1"
        name="example"
        value="option1"
        checked={selected === "option1"}
        onChange={(e) => setSelected(e.target.value)}
      />
    </div>
  );
};

export const Sizes = () => (
  <div className="flex flex-col gap-4 justify-center items-center ">
    <RadioButton label="Small" name="sizes" value="sm" size="sm" />
    <RadioButton label="Default" name="sizes" value="md" size="md" />
    <RadioButton label="Large" name="sizes" value="lg" size="lg" />
  </div>
);

export const WithError = () => (
  <RadioButton
    label="Agree to terms"
    name="error"
    value="agree"
    error
    helperText="You must select one option"
  />
);

export const Disabled = () => (
  <RadioButton label="Disabled Option" name="disabled" value="off" disabled />
);