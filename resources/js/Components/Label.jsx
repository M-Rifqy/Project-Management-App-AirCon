import React from "react";

export default function Label({ forInput, value, children }) {
    return (
        <>
            <label
                htmlFor={forInput}
                className={`absolute text-xl px-5 font-play duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
                {value ? value : children}
            </label>
        </>
    );
}
