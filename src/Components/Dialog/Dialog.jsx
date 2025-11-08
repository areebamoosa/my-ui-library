import React from "react";
import PropTypes from "prop-types";

const Dialog = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 " onClick={onClose}>

            <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-2xl transform transition-all duration-300 scale-100  relative" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                </div>

                <div className="text-gray-600 leading-relaxed text-base">
                    {children}
                </div>

                <div className="flex justify-end mt-8">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all cursor-pointer">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

Dialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Dialog;