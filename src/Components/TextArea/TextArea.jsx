import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ label, placeholder, value, onChange, rows = 3, error = false, helperText = "", size }) => {

    const baseStyle = "border rounded-md text-gray-800 border-grey-500"

    const sizeStyles =
        size === "sm" ? "text-sm px-2 py-2 w-[120px] h-[32px]"
        : size === "md" ? "text-base px-3 py-2 w-[200px] h-[44px]"
        : size === "lg" ? "text-lg px-4 py-3 w-[250px] h-[56px]"
        : "text-base px-3 py-2 w-[240px] h-[44px]";

    const errorStyle = error ? "border-red-500" : "border-gray-500"

    return (
        <>
            <div className="flex flex-col items-start gap-1">
                {label && (
                    <label className="text-sm font-medium text-black">{label}</label>
                )}

                <textarea placeholder={placeholder} value={value} onChange={onChange} rows={rows} className={`${baseStyle} ${sizeStyles} ${errorStyle} rounded-md `} />

                {helperText && (
                    <p className={`text-sm ${error ? "text-red-500" : "text-gray-500"}`}>{helperText}</p>
                )}
            </div>
        </>
    )
}

TextArea.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    rows: PropTypes.number,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    disabled: PropTypes.bool,
};

export default TextArea