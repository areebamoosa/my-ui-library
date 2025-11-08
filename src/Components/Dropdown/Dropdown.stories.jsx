import React from "react";
import Dropdown from "./Dropdown";

export default {
    title: "UI/Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
};

export const Default = () => (
    <Dropdown
        label="Dropdown"
        align="left"
        options={[
            { label: "Profile" },
            { label: "Settings" },
            { label: "Logout" },
        ]}
    />
);

export const LeftAligned = () => (
    <Dropdown
        label="Left Aligned"
        align="left"
        options={[
            { label: "Profile" },
            { label: "Settings" },
            { label: "Logout" },
        ]}
    />
);

export const RightAligned = () => (
    <Dropdown
        label="Right Aligned"
        align="right"
        options={[
            { label: "Profile" },
            { label: "Settings" },
            { label: "Logout" },
        ]}
    />
);