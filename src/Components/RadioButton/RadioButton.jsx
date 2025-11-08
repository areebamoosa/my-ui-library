import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({label,name,value,checked,onChange,size = "md",disabled = false,error = false,helperText = "",}) => {
  
    const sizes =
    size === "sm"? "w-2 h-2"
    : size === "lg" ? "w-5 h-5"
    : "w-4 h-4";

  const baseStyle = `${sizes} rounded-full bordercursor-pointer transition-all duration-150
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${error ? "border-red-500" : "border-gray-400"}`;

  return (
    <div className="flex flex-col items-start gap-1">

      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={baseStyle}
        />

        {label && (
          <span
            className={`text-sm font-medium ${
              disabled ? "text-gray-400" : "text-black"
            }`}
          >
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

RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default RadioButton;
