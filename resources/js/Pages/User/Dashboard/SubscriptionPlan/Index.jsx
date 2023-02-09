import React from "react";
import "../../../../../css/subscriptionPlan.css";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import { IoHome } from "react-icons/io5";

export default function SubscriptionPlan({ auth, subscriptionPlans, env }) {
    const SelectSubscription = (id) => {
        Inertia.post(
            route("user.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            }),
            {},
            {
                only: ["userSubscription"],
                onSuccess: ({ props }) => {
                    onSnapMidtrans(props.userSubscription);
                },
            }
        );
    };

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            // Optional
            onSuccess: function (result) {
                Inertia.visit(route("user.dashboard.index"));
            },
            // Optional
            onPending: function (result) {
                console.log({ result });
            },
            // Optional
            onError: function (result) {
                console.log({ result });
            },
        });
    };

    return (
        <>
            <div auth={auth}>
                <Head title="Subscription Plan">
                    <script
                        src="https://app.sandbox.midtrans.com/snap/snap.js"
                        data-client-key={env.MIDTRANS_CLIENTKEY}
                    ></script>
                </Head>
                <div className="relative flex flex-row justify-center text-center items-center pt-[60px] pb-[20px]">
                    <div className="logout-btn rounded-[10px] absolute left-10 top-10 p-3">
                        <Link href={route("home")}>
                            <div>
                                <IoHome className="text-[25px] text-black" />
                            </div>
                        </Link>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-5xl tracking-tight">
                            Get Started Today
                        </h1>
                        <p className="pt-5 text-black text-[25px] font-play">
                            Choose the right plan and start creating projects
                        </p>
                    </div>
                </div>
                <div className="bg-[url('/image/polygon-bottom.png')] bg-cover flex flex-row justify-center items-center gap-10 mt-5">
                    {subscriptionPlans.map((subscriptionPlan) => (
                        <SubscriptionCard
                            name={subscriptionPlan.name}
                            price={subscriptionPlan.price}
                            durationInMonth={
                                subscriptionPlan.active_period_in_months
                            }
                            features={JSON.parse(subscriptionPlan.features)}
                            isPremium={subscriptionPlan.name === "Premium"}
                            key={subscriptionPlan.id}
                            onSelectSubscription={() =>
                                SelectSubscription(subscriptionPlan.id)
                            }
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
