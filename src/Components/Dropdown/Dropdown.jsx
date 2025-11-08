import React, { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ label = "Menu", options = [], align = "left" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const alignmentClass =
    align === "right" ? "left-0" : "right-0";

  return (

    <div className="flex justify-center items-center">  

    <div className="relative inline-block text-left" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>

      <button className="px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
        {label}
      </button>

      {isOpen && (
          <div className={`absolute ${alignmentClass} mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10`}>

          {options.length > 0 ? (
              options.map((option, idx) => (
                  <button key={idx} onClick={option.onClick} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                {option.label}
              </button>
            ))
        ) : (
            <p className="px-4 py-2 text-sm text-gray-500">No options</p>
        )}
        </div>
      )}
    </div>

    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  align: PropTypes.oneOf(["left", "right"]),
};

export default Dropdown;