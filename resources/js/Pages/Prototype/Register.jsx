import React from "react";
import "../../../css/register.css";
import NavAuth from "../../Components/NavAuth";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
// import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    // const { data, setData, post, processing, errors, reset } = useForm({
    //     name: "",
    //     email: "",
    //     password: "",
    //     password_confirmation: "",
    // });

    // useEffect(() => {
    //     return () => {
    //         reset("password", "password_confirmation");
    //     };
    // }, []);

    // const onHandleChange = (event) => {
    //     setData(event.target.name, event.target.value);
    // };

    // const submit = (e) => {
    //     e.preventDefault();

    //     post(route("register"));
    // };
    return (
        <>
            <Head title="Sign Up" />
            <div className="register-bg">
                <NavAuth />
                <form className="register-container rounded-xl">
                    <h1 className="text-[50px] text-center font-play mb-10">
                        Create an Account
                    </h1>

                    <div>
                        <div className="relative z-0 mb-4">
                            <Input type="text" id="name" placeholder=" " />
                            <Label forInput="name" value="Username" />
                        </div>
                        <div className="relative z-0 mb-4">
                            <Input type="text" id="email" placeholder=" " />
                            <Label forInput="email" value="Email" />
                        </div>
                        <div className="relative z-0 mb-4">
                            <Input
                                type="password"
                                id="password"
                                placeholder=" "
                            />
                            <Label forInput="password" value="Password" />
                        </div>
                        <div className="relative z-0 mb-4">
                            <Input
                                type="password"
                                id="password"
                                placeholder=" "
                            />
                            <Label
                                forInput="password"
                                value="Confirm Password"
                            />
                        </div>
                        <Link href={route("prototype.dashboard")}>
                            <Button type="submit" variant="primary">
                                Register
                            </Button>
                        </Link>
                    </div>

                    <Link
                        href={route("prototype.login")}
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
