import React, { useRef } from "react";
import "../../../../css/dashboardDetail.css";
import { Link } from "@inertiajs/inertia-react";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";

export default function DashboardDetail({ auth, reports }) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Data",
    });

    const excelRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: excelRef.current,
        filename: "invoice",
        sheet: "Invoice",
    });
    return (
        <>
            <div className="d-detail" auth={auth}>
                <div className="overflow-y-auto h-[800px]">
                    <div className="flex flex-row justify-between mt-20 mx-5">
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
                            <div className="font-play text-white p-3 px-5 rounded-[50px] bg-red-600">
                                <button onClick={handlePrint}>
                                    Export to PDF
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={componentRef}
                        style={{
                            width: "100%",
                            height: window.innerHeight,
                        }}
                    >
                        <div ref={excelRef}>
                            <div className="table-container m-5 p-5 mt-5">
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
                                        {reports.map((report) => (
                                            <tr key={report.id}>
                                                <td>{report.job_date}</td>
                                                <td>{report.customer_name}</td>
                                                <td>{report.phone_number}</td>
                                                <td>{report.address}</td>
                                                <td>{report.ac_brand}</td>
                                                <td>{report.ac_type}</td>
                                                <td>{report.service_description}</td>
                                                <td>{report.freon_pressure}</td>
                                                <td>{report.ampere_pressure}</td>
                                                <td>{report.description}</td>
                                                <td>{report.cost}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
