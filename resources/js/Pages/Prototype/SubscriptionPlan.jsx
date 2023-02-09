import React from "react";
import "../../../css/subscriptionPlan.css";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function SubscriptionPlan() {
    return (
        <>
            <div>
                <div class="flex flex-col justify-center text-center items-center pt-[60px] pb-[20px]">
                    <h1 class="font-extrabold text-5xl tracking-tight">
                        Get Started Today
                    </h1>
                    <p class="pt-5 text-black text-[25px] font-play">
                        Choose the right plan and start creating projects
                    </p>
                </div>
                <div class="bg-[url('/image/polygon-bottom.png')] bg-cover flex flex-col lg:flex-row justify-center items-center gap-10 mt-5">
                    {/* Basic */}
                    <SubscriptionCard 
                    name="Basic"
                    price={18888}
                    durationInMonth={2}
                    features={["Feature 1", "Feature 2", "Feature 3",]}
                    />
                    {/* Premium */}
                    <SubscriptionCard 
                    isPremium
                    name="Premium"
                    price={48888}
                    durationInMonth={5}
                    features={["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]}
                     />
                </div>
            </div>
        </>
    );
}
