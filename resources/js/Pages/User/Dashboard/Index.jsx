import React from "react";
import "../../../../css/dashboard.css";
import Authenticated from "@/Layouts/Authenticated/Index";
import FlashMessage from "@/Components/FlashMessage";
import Button from "@/Components/Button";
import { Link, useForm } from "@inertiajs/inertia-react";
import { HiPlus } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";
import { TbFileExport, TbFileInvoice } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";

export default function Dashboard({ auth, flashMessage, reports }) {
    const { delete: destroy } = useForm();
    return (
        <Authenticated auth={auth}>
            <div className="font-play">
                <div className="px-10 mt-10">
                    <h1 className="font-extrabold text-5xl tracking-tight">
                        Dashboard
                    </h1>
                </div>
                <div className="flex flex-row justify-between items-center ml-5 mt-5">
                    <Link href={route("user.detail")} className="-mb-8">
                        <Button
                            type="button"
                            className="flex flex-row justify-center items-center gap-2 px-6 p-[8px] rounded-[10px] export-btn text-[18px] text-black"
                        >
                            <div className="text-[30px]">
                                <TbFileExport />
                            </div>
                            <span>Export</span>
                        </Button>
                    </Link>
                    <div className="-mb-5 flex flex-row justify-center items-center">
                        <form className="hidden search rounded-[10px] mr-2 flex items-center w-[300px]">
                            <label htmlFor="simple-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full rounded-[10px]">
                                <div className="rounded-[10px] absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-black-500 dark:text-black-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="bg-transparent text-black text-lg rounded-[10px] block w-full pl-10 p-2.5"
                                    placeholder="Search Data"
                                    required
                                />
                            </div>
                        </form>
                        <Link
                            href={route("user.dashboard.create")}
                            className="mr-8 rounded-[10px] flex flex-row items-center cursor-pointer text-[20px] gap-3 create p-3 px-5"
                        >
                            <div className="p-[8px] rounded-lg create-btn text-[30px]">
                                <HiPlus />
                            </div>
                            <span>Entry Data</span>
                        </Link>
                    </div>
                </div>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}
                <div className="table-container m-5 p-5 mt-5">
                    <div className="overflow-y-auto h-max">
                        <div className="flex flex-row">
                            <table className="m-3">
                                <thead>
                                    <tr>
                                        <th>Job Date</th>
                                        <th>Customer Name</th>
                                        <th>Phone Number</th>
                                        <th>Address</th>
                                        <th>AC Brand</th>
                                        <th>AC in PK</th>
                                        <th>Service Description</th>
                                        <th>Freon Pressure</th>
                                        <th>Ampere Pressure</th>
                                        <th>Remarks</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reports &&
                                        reports.map((report) => (
                                            <tr key={report.id}>
                                                <td>{report.job_date}</td>
                                                <td>{report.customer_name}</td>
                                                <td>{report.phone_number}</td>
                                                <td>{report.address}</td>
                                                <td>{report.ac_brand}</td>
                                                <td>{report.ac_type}</td>
                                                <td>
                                                    {report.service_description}
                                                </td>
                                                <td>{report.freon_pressure}</td>
                                                <td>
                                                    {report.ampere_pressure}
                                                </td>
                                                <td>{report.description}</td>
                                                <td>{report.cost}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                            <table className="m-3">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reports &&
                                        reports.map((report) => (
                                            <tr key={report.id}>
                                                <td>
                                                    <div className="mt-2 mx-3 flex flex-row justify-center items-center gap-3">
                                                        <div className="action-icon-cotainer flex justify-center items-center text-lg">
                                                            <TbFileInvoice className="action-icon text-[30px]" />
                                                            <Link
                                                                href={route(
                                                                    "user.invoice",
                                                                    report.id
                                                                )}
                                                                className="invoice-btn rounded-[5px] p-[2px] font-bold"
                                                            >
                                                                Invoice
                                                            </Link>
                                                        </div>
                                                        <div className="action-icon-cotainer flex justify-center items-center text-lg">
                                                            <CgWorkAlt className="action-icon text-[30px]" />
                                                            <Link
                                                                href={route(
                                                                    "user.job",
                                                                    report.id
                                                                )}
                                                                className="job-btn rounded-[5px] p-[2px] font-bold"
                                                            >
                                                                Job Report
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link
                                                                href={route(
                                                                    "user.dashboard.edit",
                                                                    report.id
                                                                )}
                                                            >
                                                                <Button
                                                                    type="button"
                                                                    variant="warning"
                                                                >
                                                                    <MdEdit />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        <div
                                                            onClick={() => {
                                                                destroy(
                                                                    route(
                                                                        "user.dashboard.destroy",
                                                                        report.id
                                                                    )
                                                                );
                                                            }}
                                                        >
                                                            <Button
                                                                type="button"
                                                                variant="danger"
                                                            >
                                                                <BsTrashFill />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
