import React from "react";
import Select from "./Select";

export default {
    title: "UI/Select",
    component: Select,
    tags: ["autodocs"],
};

export const Default = () => (
    <div className="flex justify-center items-center  ">
        <Select />
    </div>
);

export const InsideCard = () => (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
                Choose a Category
            </h3>
            <Select />
        </div>
    </div>
);

export const DarkMode = () => (
    <div className="flex justify-center items-center min-h-screen ">
        <div className="p-4 rounded-xl bg-gray-800">
            <Select />
        </div>
    </div>
);