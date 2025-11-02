import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, disabled = false, variant = "white", width = "w-32", height = "h-10" }) => {

    const baseStyles = "px-2 py-2 rounded-md font-medium transition focus:outline-none cursor-pointer";

    const variants = {
        white: "border border-black text-black bg-white font-light hover:bg-black hover:text-white ",
        black: "text-white bg-black font-light hover:bg-white hover:text-black hover:border hover:border-black",
        transparent: "bg-transparent border border-black font-light hover:bg-black hover:text-white ",
    };

    return (
        <>
        <button className={`${baseStyles} ${variants[variant]} ${width} ${height}`} onClick={onClick} disabled={disabled} >{children}</button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["white", "black", "transparent"]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Button