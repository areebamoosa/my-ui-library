import React, { useState } from "react";
import Switch from "./Switch";

export default {
    title: "UI/Switch",
    component: Switch,
    tags: ["autodocs"],
};

export const Default = () => {
    const [on, setOn] = useState(false);
    return (
        <div className="flex justify-center items-center">
            <Switch checked={on} onChange={setOn} />
        </div>
    )
};

export const Sizes = () => {
    const [selected, setSelected] = useState(true);
    return (
        <div className="flex flex-col items-center gap-4">
            <Switch label="Small" size="sm" checked={selected} onChange={setSelected} />
            <Switch label="Medium" size="md" checked={selected} onChange={setSelected} />
            <Switch label="Large" size="lg" checked={selected} onChange={setSelected} />
        </div>
    );
};

export const Disabled = () => 
 <Switch label="Disabled" disabled checked />;   