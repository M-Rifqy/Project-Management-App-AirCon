import React, { useRef } from "react";
import "../../../../css/invoice.css";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/inertia-react";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";

export default function Invoice({ auth, invoice_data }) {
    const pdfRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => pdfRef.current,
        documentTitle: "Invoice",
    });

    const excelRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: excelRef.current,
        filename: "invoice",
        sheet: "Invoice",
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
                        <div className="font-play text-white p-3 px-5 rounded-[50px] bg-green-600">
                            <button onClick={onDownload}>
                                Export to Excel
                            </button>
                        </div>
                        <div className="font-play text-white p-3 px-5 rounded-[50px] bg-red-600">
                            <button onClick={handlePrint}>Export to PDF</button>
                        </div>
                    </div>
                </div>
                <div ref={pdfRef}>
                    <div
                        className="invoice-container rounded-[15px] p-10"
                        ref={excelRef}
                    >
                        <div className="flex flex-col">
                            <div className="header-container">
                                <div className="font-play text-8xl">
                                    <h1>Invoice</h1>
                                </div>
                            </div>
                            <hr class="h-px mt-8 mb-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <div className="info flex flex-col">
                                <div className="font-play text-3xl">
                                    <p>Billing Invoice</p>
                                </div>
                                <div className="flex flex-col mt-[80px]">
                                    <h1 className="font-play text-2xl">
                                        Billed To :
                                    </h1>
                                    <div className="flex flex-row justify-between items-center">
                                        <div>
                                            <p className="font-play mt-3 text-[25px] font-extrabold">
                                                {invoice_data.customer_name}
                                            </p>
                                            <p className="font-play text-xl">
                                                {invoice_data.address}
                                            </p>
                                            <p className="font-play text-xl">
                                                {invoice_data.phone_number}
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
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{invoice_data.job_date}</td>
                                    <td>{invoice_data.ac_brand}</td>
                                    <td>{invoice_data.ac_type}</td>
                                    <td>{invoice_data.service_description}</td>
                                    <td>{invoice_data.cost}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
