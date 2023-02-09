import React from "react";
import "../../../../../css/profile.css";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/inertia-react";
import { MdEdit } from "react-icons/md";
import SubscriptionDetail from "@/Pages/User/Dashboard/Profile/SubscriptionDetail";

export default function Index({ auth }) {
    return (
        <Authenticated auth={auth}>
            <div className="m-5 overflow-y-auto h-[600px]">
                <div className="flex xl:flex-row lg:flex-col sm:flex-col p-3">
                    <div className="user-setting rounded-[10px] w-screen p-8 mr-8 sm:mb-[30px]">
                        <div>
                            <div className="flex items-center space-x-4">
                                <Link href="#" className="avatar-img rounded-full">
                                    <img
                                        className="w-[150px] h-[150px] rounded-full p-[5px]"
                                        src="/image/Doom.png"
                                        alt=""
                                    />
                                </Link>
                                <div>
                                    <p className="font-play font-extrabold tracking-tight text-4xl">
                                        {auth.user.name}
                                    </p>
                                    <p className="font-play text-xl">
                                        {auth.user.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <h1 className="font-play text-xl">Username</h1>
                                <div className="flex flex-row justify-between mt-[2px]">
                                    <div className="font-play text-[23px]">
                                        {auth.user.name}
                                    </div>
                                    <Link href={route("user.profile.edit")}>
                                        <MdEdit className="user-edit text-[25px]" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col mt-3">
                                <h1 className="font-play text-xl">Email</h1>
                                <div className="flex flex-row justify-between mt-[2px]">
                                    <div className="font-play text-[20px]">
                                        {auth.user.email}
                                    </div>
                                    <Link href={route("user.profile.edit")}>
                                        <MdEdit className="user-edit text-[25px]" />
                                    </Link>
                                </div>
                            </div>

                            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <div className="flex flex-col">
                                <h1 className="font-play text-xl">Password</h1>
                                <div className="flex flex-row justify-between">
                                    <div className="font-play text-[20px] mt-2">
                                        ••••••••••••••••
                                    </div>
                                    <Link href={route("user.profile.edit")}>
                                        <MdEdit className="user-edit text-[25px]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {auth.activePlan && (
                        <SubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
