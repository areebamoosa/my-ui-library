import React, { useState } from "react";
import PropTypes from "prop-types";

const Switch = ({ label, checked = false, onChange, size = "md", disabled = false }) => {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isOn;
    setIsOn(newValue);
    onChange && onChange(newValue);
  };

  const sizeStyles =
    size === "sm" ? "w-[32px] h-[18px]"
    : size === "lg" ? "w-[56px] h-[32px]"
    : "w-[44px] h-[24px]";

  const circleSize =
    size === "sm" ? "w-[14px] h-[14px]"
    : size === "lg" ? "w-[28px] h-[28px]"
    : "w-[20px] h-[20px]";

  const translateAmount =
    size === "sm"
      ? "translate-x-[14px]"
      : size === "lg"
      ? "translate-x-[24px]"
      : "translate-x-[18px]";

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-gray-800 text-sm">{label}</span>}

      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`
          relative rounded-full transition-colors duration-300 focus:ring-2 focus:ring-black focus:ring-offset-1
          ${sizeStyles}
          ${isOn ? "bg-black ring-2 ring-black ring-offset-1" : "bg-gray-300"}
          ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        <span
          className={`
            absolute top-1/2 left-[3px] transform -translate-y-1/2 bg-white rounded-full transition-all duration-300
            ${circleSize}
            ${isOn ? translateAmount : ""}
          `}
        />
      </button>
    </div>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
};

export default Switch;