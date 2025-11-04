import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, placeholder, value, onChange, size, type = "text", disabled = false , error = false, helperText =""}) => {

    const sizeStyles =
        size === "sm" ? "text-sm px-2 py-2 w-[120px] h-[32px]"
      : size === "md" ? "text-base px-3 py-2 w-[200px] h-[44px]"
      : size === "lg" ? "text-lg px-4 py-3 w-[250px] h-[56px]"
      : "text-base px-3 py-2 w-[240px] h-[44px]";

    const baseStyles = "block border rounded-md "

    const stateStyles = error ? "border-red-500 " : "border-gray-300 ";

    const disabledStyles = disabled ? "bg-gray-200 text-gray-500 cursor-not-allowed opacity-70" : "";


    return (
        <>
            <div className='flex  justify-center items-center gap-2'>

                {label && (
                    <label className="text-sm font-medium text-black">{label}</label>
                )}

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={`${baseStyles} ${sizeStyles}  ${stateStyles} ${disabledStyles}`}
                />
                
            </div>

            <div className='flex justify-center items-center mt-2'>
                {helperText && (
                    <p className={`text-sm ${error ? "text-red-500" : "text-gray-500"}`}>{helperText}</p>
                )}
            </div>
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    helperText: PropTypes.string,
};

export default Input