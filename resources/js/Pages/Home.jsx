import React, { useState, useEffect, useRef } from "react";
import "../../css/home.css";
import Button from "@/Components/Button";
import { Link } from "@inertiajs/inertia-react";

export default function Home({ auth }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [isOpen]);

    return (
        <>
            {/* NAVBAR */}
            <div className="w-full flex items-center justify-between fixed py-5 px-16">
                <div className="slide-d flex items-center m-3">
                    <img
                        src="/image/octagon.png"
                        className="h-16 w-16 lg:h-20 lg:w-20"
                        alt="octagon"
                    />
                    <span className="font-orbitron text-md lg:text-2xl text-[#000000]">
                        AirCon
                    </span>
                </div>
                <div
                    className="flex flex-col items-center relative cursor-pointer"
                    ref={ref}
                >
                    {auth.user ? (
                        <>
                            <div
                                className="slide-d flex"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <div className="relative">
                                    <img
                                        type="button"
                                        className="w-[50px] h-[50px] rounded-full mr-2"
                                        src="./image/Doom.png"
                                        alt="User dropdown"
                                    />
                                    <span className="bottom-1 left-[37px] absolute w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                </div>
                                <div className="pl-1 font-medium dark:text-[#000]">
                                    <div className="font-play text-xl">
                                        {auth.user.name}
                                    </div>
                                    <div className="font-play text-md text-[#666666] dark:text-[#666666] -mt-[5px]">
                                        {auth.user.email}
                                    </div>
                                </div>
                            </div>
                            {isOpen && (
                                <div className="absolute top-[55px] left-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                    <div className="px-4 py-3 text-sm text-gray-900">
                                        <div>{auth.user.name}</div>
                                        <div className="font-medium truncate">
                                            {auth.user.email}
                                        </div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li>
                                            <Link
                                                href={route(
                                                    "user.dashboard.index"
                                                )}
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("user.profile")}
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Help
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Sign out
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <Button variant="primary"  className="slide-d px-5 py-3 rounded-[30px] text-xl">
                            <Link href={route("login")}>Get Started</Link>
                        </Button>
                    )}
                </div>
            </div>

            {/* HERO */}
            <div className="h-screen flex flex-col justify-center bg-[url('./image/polygon.jpg')] bg-cover mb-20">
                <div className="flex flex-col justify-center items-center text-center hero-content">
                    <h2 className="pop-out m-0 text-[120px] md:text-[134px] font-black italic bg-clip-text font-montserrat">
                        AirCon
                    </h2>
                    <p className="slide-l m-0 text-[20px] md:text-[25px] italic font-quicksand -mt-[30px] -ml-10">
                        One stop for all your AC requirements
                    </p>
                </div>
            </div>
            <div className="raise-up w-full -mt-[250px] md:-mt-[340px]">
                <img
                    src="./image/polygon-bottom.png"
                    className="w-full"
                    alt="polygon2"
                />
            </div>
        </>
    );
}
