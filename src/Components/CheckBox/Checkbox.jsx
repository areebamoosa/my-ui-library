import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ label, checked, onChange, size = "md", disabled = false, error = false, helperText = "" }) => {

  const sizes =
    size === "sm" ? "w-4 h-4" :
    size === "lg" ? "w-6 h-6" :
    "w-5 h-5"; 

  const baseStyle = `${sizes} rounded border cursor-pointer transition-all duration-150 
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${error ? "border-red-500" : "border-gray-400"}
  `;

  return (
    <div className="flex flex-col items-start gap-1">
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={baseStyle}
        />
        {label && (
          <span className={`text-sm font-medium ${disabled ? "text-gray-400" : "text-black"}`}>
            {label}
          </span>
        )}
      </label>

      {helperText && (
        <p className={`text-xs ${error ? "text-red-500" : "text-gray-500"}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default Checkbox;