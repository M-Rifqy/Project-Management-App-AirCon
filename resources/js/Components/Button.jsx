import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`font-play login-btn p-[8px] mb-[10px] w-full rounded-[5px] text-center ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
