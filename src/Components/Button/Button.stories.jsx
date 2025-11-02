import Button from "./Button";

export default {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["white", "black", "transparent"],
        },
        onClick: { action: "clicked" },
    },
};

export const White = {
    args: {
        children: "White Button",
        variant: "white",
    },
};

export const Black = {
    args: {
        children: "Black Button",
        variant: "black",
    },
};

export const Transparent = {
    args: {
        children: "Transparent",
        variant: "transparent",
    },
};