import { useEffect } from "react";
import "../../../css/login.css";
import NavAuth from "../../Components/NavAuth";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Sign In" />
            <div className="login-bg">
                <NavAuth />
                <div className="login-container rounded-xl flex flex-col md:flex-row">
                    <form className="p-[20px]" onSubmit={submit}>
                        <h1 className="text-[50px] text-center font-play">
                            Welcome Back!
                        </h1>
                        <p className="text-[18px] text-center mb-9 font-play">
                            We're so excited to see you again
                        </p>
                        <ValidationErrors errors={errors} />
                        <div>
                            <div className="relative z-0 mb-5">
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
                            <div className="relative z-0">
                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    id="password"
                                    placeholder=" "
                                    handleChange={onHandleChange}
                                />
                                <Label forInput="password" value="Password" />
                            </div>
                            <div className="mt-5">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    processing={processing}
                                >
                                    Log In
                                </Button>
                            </div>
                        </div>
                        <div className="no-register">
                            <span className="font-play text-lg">
                                Need an account?
                            </span>{" "}
                            <span>
                                <Link
                                    href={route("register")}
                                    className="font-play text-lg"
                                >
                                    Register
                                </Link>
                            </span>
                        </div>
                    </form>
                    <div className="flex flex-col hidden md:block">
                        <div className="rounded-[10px] m-[40px] mb-[20px] mt-[55px]">
                            <img
                                src="/image/qr-code.png"
                                alt="Make Sure That You're Connected to Internet"
                                className="rounded-[10px] w-[250px] h-[250px]"
                            />
                        </div>
                        <div>
                            <h1 className="text-center text-[35px] font-bold font-play">
                                Log in with QR Code
                            </h1>
                            <p className="text-center text-xl font-play">
                                Scan to Login Automatically
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
