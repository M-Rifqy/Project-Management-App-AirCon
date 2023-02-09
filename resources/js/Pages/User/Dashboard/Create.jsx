import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import ValidationErrors from "@/Components/ValidationErrors";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { useForm } from "@inertiajs/inertia-react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        job_date: "",
        customer_name: "",
        phone_number: "",
        address: "",
        ac_brand: "",
        ac_type: "",
        service_description: "",
        freon_pressure: "",
        ampere_pressure: "",
        description: "",
        cost: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("user.dashboard.store"));
    };
    return (
        <Authenticated auth={auth}>
            <div className="m-8">
                <h1 className="font-play text-center">Insert Data</h1>
                <ValidationErrors errors={errors} />
                <form onSubmit={submit}>
                    <div className="m-10">
                        <div className="relative z-0 mt-5">
                            {/* job_date */}
                            <Input
                                type="date"
                                id="job_date"
                                name="job_date"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.job_date}
                            />
                            <Label forInput="job_date" value="Job Date" />
                        </div>
                        <div className="relative z-0 mt-5">
                            {/* customer_name */}
                            <Input
                                type="text"
                                id="customer_name"
                                name="customer_name"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.customer_name}
                            />
                            <Label
                                forInput="customer_name"
                                value="Customer Name"
                                className="mt-4"
                            />
                        </div>
                        {/* phone_number */}
                        <div className="relative z-0 mt-5">
                            <Input
                                type="text"
                                id="phone_number"
                                name="phone_number"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.phone_number}
                            />
                            <Label
                                forInput="phone_number"
                                value="Phone Number"
                                className="mt-4"
                            />
                        </div>
                        <div className="relative z-0 mt-5">
                            {/* address */}
                            <Input
                                type="text"
                                id="address"
                                name="address"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.address}
                            />
                            <Label
                                forInput="address"
                                value="Address"
                                className="mt-4"
                            />
                        </div>
                        <div className="relative z-0 mt-5">
                            {/* ac_brand */}
                            <Input
                                type="text"
                                id="ac_brand"
                                name="ac_brand"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.ac_brand}
                            />
                            <Label
                                forInput="AC Brand"
                                value="AC Brand"
                                className="mt-4"
                            />
                        </div>
                        <div className="relative z-0 mt-5">
                            {/* ac_type */}
                            <Input
                                type="text"
                                id="ac_type"
                                name="ac_type"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.ac_type}
                            />
                            <Label
                                forInput="ac_type"
                                value="AC in PK"
                                className="mt-4"
                            />
                        </div>
                        <div className="relative z-0 mt-5">
                            {/* service_description */}

                            <Input
                                type="text"
                                id="service_description"
                                name="service_description"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.service_description}
                            />
                            <Label
                                forInput="service_description"
                                value="Service Description"
                                className="mt-4"
                            />
                        </div>
                        <div className="relative z-0 mt-5">
                            {/* freon_pressure */}

                            <Input
                                type="text"
                                id="freon_pressure"
                                name="freon_pressure"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.freon_pressure}
                            />
                            <Label
                                forInput="freon_pressure"
                                value="Freon Pressure"
                                className="mt-4"
                            />
                        </div>
                        <div className="relative z-0 mt-5">
                            {/* ampere_pressure */}

                            <Input
                                type="text"
                                id="ampere_pressure"
                                name="ampere_pressure"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.ampere_pressure}
                            />
                            <Label
                                forInput="ampere_pressure"
                                value="Ampere Pressure"
                                className="mt-4"
                            />
                        </div>
                        <div className="relative z-0 mt-5">
                            {/* description */}

                            <Input
                                type="text"
                                id="description"
                                name="description"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.description}
                            />
                            <Label
                                forInput="description"
                                value="Remarks"
                                className="mt-4"
                            />
                        </div>
                        <div className="relative z-0 mt-5">
                            {" "}
                            {/* cost */}
                            <Input
                                type="text"
                                id="cost"
                                name="cost"
                                placeholder=" "
                                handleChange={onHandleChange}
                                isError={errors.cost}
                            />
                            <Label
                                forInput="cost"
                                value="Cost"
                                className="mt-4"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="mt-4"
                            variant="primary"
                            processing={processing}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
}
