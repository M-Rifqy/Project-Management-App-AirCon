import React from "react";
import "../../css/navAuth.css";

export default function NavAuth() {
    return (
        <>
            <nav class="navbar mt-[20px]">
                <div class="ml-[20px]">
                    <a href="#" class="flex">
                        <img
                            src="../../image/octagon.png"
                            class="h-[70px]"
                            alt="AirCon-Logo"
                        />
                        <span class="text-[25px] mt-[15px] font-orbitron">
                            AirCon
                        </span>
                    </a>
                </div>
            </nav>
        </>
    );
}
