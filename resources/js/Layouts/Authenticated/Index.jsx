import React from "react";
import Sidebar from "@/Layouts/Authenticated/Sidebar";
import Topbar from "@/Layouts/Authenticated/Topbar";

export default function Authenticated({ auth, children }) {
    return (
        <>
            <div className="bg-[url('/image/polygon-bottom.png')] bg-cover">
                <div className="flex flex-col">
                    {/* START: Topbar */}
                        <Topbar name={auth.user.name} />
                    {/* END: Topbar */}
                    <div className="flex flex-row overflow-y-auto h-[700px]">
                        {/* START: Sidebar */}
                        <div className="">
                            <Sidebar
                                name={auth.user.name}
                                email={auth.user.email}
                            />
                        </div>
                        {/* END: Sidebar */}
                        {/* START: Content */}
                        <div className="mt-5 m-10 flex flex-col w-screen overflow-x-auto">
                            <main>{children}</main>
                        </div>

                        {/* END: Content */}
                    </div>
                </div>
            </div>
        </>
    );
}
