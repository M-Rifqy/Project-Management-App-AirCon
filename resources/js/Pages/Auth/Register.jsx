import React, { useEffect } from "react";
import "../../../css/register.css";
import NavAuth from "../../Components/NavAuth";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    return (
        <>
            <Head title="Sign Up" />
            <div className="register-bg">
                <NavAuth />
                <form
                    className="register-container rounded-xl"
                    onSubmit={submit}
                >
                    <h1 className="text-[50px] text-center font-play mb-10">
                        Create an Account
                    </h1>
                    <ValidationErrors errors={errors} />
                    <div>
                        <div className="relative z-0 mb-4">
                            <Input
                                type="text"
                                name="name"
                                value={data.name}
                                id="name"
                                placeholder=" "
                                handleChange={onHandleChange}
                                autocomplete="off"
                                required
                            />
                            <Label forInput="name" value="Username" />
                        </div>
                        <div className="relative z-0 mb-4">
                            <Input
                                type="text"
                                name="email"
                                value={data.email}
                                id="email"
                                placeholder=" "
                                handleChange={onHandleChange}
                                required
                            />
                            <Label forInput="email" value="Email" />
                        </div>
                        <div className="relative z-0 mb-4">
                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                id="password"
                                placeholder=" "
                                handleChange={onHandleChange}
                                required
                            />
                            <Label forInput="password" value="Password" />
                        </div>
                        <div className="relative z-0 mb-4">
                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                id="password"
                                placeholder=" "
                                handleChange={onHandleChange}
                                required
                            />
                            <Label
                                forInput="password_confirmation"
                                value="Confirm Password"
                            />
                        </div>
                        <Button
                            type="submit"
                            processing={processing}
                            variant="primary"
                        >
                            Register
                        </Button>
                    </div>

                    <Link
                        href={route("login")}
                        className="font-play text-[18px] login-link"
                    >
                        Already have an account ?
                    </Link>
                    <p className="font-play text-[15px] mt-7 mb-3 agreed">
                        By registering, you agree to AirCon's{" "}
                        <a href="#">Terms of Service</a> and{" "}
                        <a href="#">Privacy Policy</a> .
                    </p>
                </form>
            </div>
        </>
    );
}
