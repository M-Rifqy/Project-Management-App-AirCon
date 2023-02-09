import React, { useRef } from "react";
import "../../../../css/jobReport.css";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/inertia-react";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";

export default function JobReport({ auth, job_data }) {
    const pdfRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => pdfRef.current,
        documentTitle: "JobReport",
    });

    const excelRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: excelRef.current,
        filename: "job_report",
        sheet: "JobReport",
    });
    return (
        <Authenticated auth={auth}>
            <div className="mx-20 mt-20 flex flex-col mb-5">
                <div className="flex flex-row justify-between mb-5">
                    <div className="prev p-3 rounded-[10px] bg-black text-white font-play">
                        <Link href={route("user.dashboard.index")}>
                            Back to Dashboard
                        </Link>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="pdf-btn font-play text-white p-3 px-5 rounded-[50px] bg-green-600">
                            <button onClick={onDownload}>
                                Export to Excel
                            </button>
                        </div>
                        <div className="pdf-btn font-play text-white p-3 px-5 rounded-[50px] bg-red-600">
                            <button onClick={handlePrint}>Export to PDF</button>
                        </div>
                    </div>
                </div>
                <div ref={pdfRef}>
                    <div
                        className="job-report-container rounded-[15px] p-10"
                        ref={excelRef}
                    >
                        <div className="flex flex-col">
                            <div className="header-container">
                                <div className="font-play text-8xl">
                                    <h1>Job Report</h1>
                                </div>
                            </div>
                            <hr class="h-px mt-8 mb-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <div className="info flex flex-col">
                                <div className="flex flex-col">
                                    <h1 className="font-play text-2xl">
                                        Billed To :
                                    </h1>
                                    <div className="flex flex-row justify-between items-center">
                                        <div>
                                            <p className="font-play mt-3 text-[25px] font-extrabold">
                                                {job_data.customer_name}
                                            </p>
                                            <p className="font-play text-xl">
                                                {job_data.address}
                                            </p>
                                            <p className="font-play text-xl">
                                                {job_data.phone_number}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="mt-5">
                            <thead>
                                <tr>
                                    <th>Job Date</th>
                                    <th>AC Brand</th>
                                    <th>AC in PK</th>
                                    <th>Service Description</th>
                                    <th>Freon Pressure</th>
                                    <th>Ampere Pressure</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{job_data.job_date}</td>
                                    <td>{job_data.ac_brand}</td>
                                    <td>{job_data.ac_type}</td>
                                    <td>{job_data.service_description}</td>
                                    <td>{job_data.freon_pressure}</td>
                                    <td>{job_data.ampere_pressure}</td>
                                    <td>{job_data.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
