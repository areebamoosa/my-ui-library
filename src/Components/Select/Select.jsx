import { useState } from "react";

export default function Select() {
    const [selected, setSelected] = useState("Select a category");
    const [open, setOpen] = useState(false);

    const options = ["Beauty", "Makeup", "Skincare", "Haircare", "Accessories"];

    return (
        <div className="relative w-56 text-gray-800">

            <div
                onClick={() => setOpen(!open)}
                className="bg-white border border-gray-300 rounded-md px-4 py-2 cursor-pointer shadow-sm hover:shadow-md flex justify-between items-center transition-all"
            >
                <span>{selected}</span>
                <i className={`fa-solid fa-chevron-down transition-transform ${open ? "rotate-180" : ""}`}></i>
            </div>

            {open && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden animate-fadeIn">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${selected === option ? "bg-gray-100 text-black font-medium" : ""
                                }`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}