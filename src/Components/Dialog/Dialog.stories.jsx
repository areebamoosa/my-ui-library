import React, { useState } from "react";
import Dialog from "./Dialog";

export default {
    title: "UI/Dialog",
    component: Dialog,
    tags: ["autodocs"],
};

export const PopupBox = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="px-4 py-3 bg-black text-white rounded-lg text-lg shadow-lg hover:bg-gray-800 transition-all cursor-pointer">
                    Open  Dialog
                </button>
            )}

            <Dialog
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Default Dialog">
                <p>This is a basic dialog.</p>

            </Dialog>
        </div>
    );
};