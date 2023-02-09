import React from "react";
import "../../../css/topbar.css";

export default function Topbar({ name }) {
    return (
        <>
            <div className="rounded-[15px] px-[35px] py-[5px] mx-[35px] mt-[25px] topbar-header">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center">
                        <img
                            src="/image/octagon.png"
                            className="h-[60px] w-[60px]"
                        />
                        <h1 className="text-black mt-[-5px] origin-left font-medium font-orbitron text-xl duration-200">
                            AirCon
                        </h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <p>hi, {name}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
