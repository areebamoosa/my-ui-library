import React, { useState } from "react";
import TextArea from "./TextArea";

export default {
  title: "UI/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <TextArea
      label="Description"
      placeholder="Enter your message..."
      value={value} rows={3}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Sizes = () => (
  <div className="flex flex-col justify-center items-center gap-6">
    <TextArea label="Small" placeholder="Small textarea" size="sm" rows={2} />
    <TextArea label="Medium" placeholder="Medium textarea" size="md" rows={4} />
    <TextArea label="Large" placeholder="Large textarea" size="lg" rows={6} />
  </div>
);


export const WithError = () => (
  <TextArea
    label="Feedback"
    placeholder="Enter feedback"
    error
    helperText="This field is required"
  />
);