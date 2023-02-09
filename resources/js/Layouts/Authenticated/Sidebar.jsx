import React, { useState, useEffect, useRef } from "react";
import "../../../css/sidebar.css";
import { HiChevronLeft } from "react-icons/hi";
import { MdDashboard, MdLogout } from "react-icons/md";
import { IoAnalyticsSharp, IoHome } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react";

export default function Sidebar({ name, email }) {
    const [open, setOpen] = useState(true);
    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [open]);

    return (
        <>
            <div
                className={`${
                    open ? "w-[300px]" : "w-[100px]"
                } h-max mx-[35px] my-[25px] sidebar-container rounded-[15px] relative`}
                ref={ref}
            >
                <HiChevronLeft
                    className={`sidebar-controller absolute cursor-pointer text-[35px] -right-11 top-9 rounded-[10px]  ${
                        !open && "rotate-180 sidebar-controller"
                    }`}
                    onClick={() => setOpen(!open)}
                />
                <Link
                    href={route("user.profile")}
                    className="avatar pt-[35px]"
                >
                    <div className="flex items-center space-x-4">
                        <a href="#" className="avatar-img rounded-full">
                            <img
                                className="w-[70px] h-[70px] rounded-full p-[5px]"
                                src="/image/Doom.png"
                                alt=""
                            />
                        </a>
                        <div
                            className={`${!open && "hidden"} text-xl font-play`}
                        >
                            <p>{name}</p>
                            <p className="text-[15px] text-black">{email}</p>
                        </div>
                    </div>
                </Link>
                <div className="p-[10px]">
                    <ul>
                        <li>
                            <Link
                                href={route("home")}
                                className={`menu-item flex rounded-md p-2 mt-[20px] cursor-pointer font-play text-black text-[20px] text-center items-center gap-x-3 ${
                                    !open && "tooltip justify-center"
                                }`}
                            >
                                <div className="menu-item-logo">
                                    <IoHome className="text-[30px] text-black" />
                                </div>
                                <span
                                    className={`${
                                        !open && "hidden"
                                    } origin-left duration-200`}
                                >
                                    Home
                                </span>
                                <span
                                    className={`hidden ${
                                        !open && "tooltiptext"
                                    }`}
                                >
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("user.dashboard.index")}
                                className={`menu-item flex rounded-md p-2 mt-[20px] cursor-pointer font-play text-black text-[20px] text-center items-center gap-x-3 ${
                                    !open && "tooltip justify-center"
                                }`}
                            >
                                <div className="menu-item-logo">
                                    <MdDashboard className="text-[30px] text-black" />
                                </div>
                                <span
                                    className={`${
                                        !open && "hidden"
                                    } origin-left duration-200`}
                                >
                                    Dashboard
                                </span>
                                <span
                                    className={`hidden ${
                                        !open && "tooltiptext"
                                    }`}
                                >
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        {/* <li
                            className={`menu-item flex rounded-md p-2 mt-[20px] cursor-pointer font-play text-black text-[20px] text-center items-center gap-x-3 ${
                                !open && "tooltip justify-center"
                            }`}
                        >
                            <div className="menu-item-logo">
                                <IoAnalyticsSharp className="text-[30px] text-black" />
                            </div>
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-200`}
                            >
                                Analytics
                            </span>
                            <span
                                className={`hidden ${!open && "tooltiptext"}`}
                            >
                                Analytics
                            </span>
                        </li> */}
                        <li>
                            <Link
                                href={route("user.subscriptionPlan")}
                                className={`menu-item flex rounded-md p-2 mt-[20px] cursor-pointer font-play text-black text-[20px] text-center items-center gap-x-3 ${
                                    !open && "tooltip justify-center"
                                }`}
                            >
                                <div className="menu-item-logo">
                                    <MdPayments className="text-[30px] text-black" />
                                </div>
                                <span
                                    className={`${
                                        !open && "hidden"
                                    } origin-left duration-200`}
                                >
                                    Payments
                                </span>
                                <span
                                    className={`hidden ${
                                        !open && "tooltiptext"
                                    }`}
                                >
                                    Payments
                                </span>
                            </Link>
                        </li>
                        <li className="mt-[130px]">
                            <Link
                                href={route("user.profile")}
                                className={`menu-item flex rounded-md p-2 mt-[20px] cursor-pointer font-play text-black text-[20px] text-center items-center gap-x-3 ${
                                    !open && "tooltip justify-center"
                                }`}
                            >
                                <div className="menu-item-logo">
                                    <BsFillPersonFill className="text-[30px] text-black" />
                                </div>
                                <span
                                    className={`${
                                        !open && "hidden"
                                    } origin-left duration-200`}
                                >
                                    My Account
                                </span>
                                <span
                                    className={`hidden ${
                                        !open && "tooltiptext"
                                    }`}
                                >
                                    My Account
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("logout")}
                                method="post"
                                className={`menu-item flex rounded-md p-2 mt-[20px] cursor-pointer font-play text-black text-[20px] text-center items-center gap-x-3 ${
                                    !open && "tooltip justify-center"
                                }`}
                            >
                                <div className="menu-item-logo">
                                    <MdLogout className="text-[30px] text-black" />
                                </div>
                                <span
                                    className={`${
                                        !open && "hidden"
                                    } origin-left duration-200`}
                                >
                                    Logout
                                </span>
                                <span
                                    className={`hidden ${
                                        !open && "tooltiptext"
                                    }`}
                                >
                                    Logout
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
