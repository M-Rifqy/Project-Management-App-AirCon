import React from "react";

export default function SubscriptionDetail({
    name,
    isPremium,
    remainingActiveDays,
    activeDays,
}) {
    const remainingDays = activeDays - remainingActiveDays;
    const loadingProgress = () => {
        const progress = remainingDays / activeDays;
        if (progress < 0.25) {
            return "w-3/12";
        } else if (progress < 0.5) {
            return "w-6/12";
        } else if (progress < 0.75) {
            return "w-9/12";
        } else {
            return "w-full";
        }
    };
    return (
        <>
            {/* BASIC */}
            {!isPremium && (
                <div>
                    <div className="bg-[url('/image/card1.png')] subscription-detail flex flex-row justify-between w-[400px] rounded-[10px] p-5">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-row">
                                <span className="font-extrabold tracking-tight subscription-detail-premium text-[35px] px-[8px] py-[2px] mr-[3px] rounded-[5px]">
                                    {name}
                                </span>
                            </div>
                            <div>
                                <div className="text-md font-play mb-2">
                                    {remainingActiveDays} of {activeDays} days
                                </div>
                                <div className="rounded-full w-full h-[8px] bg-[#333333]">
                                    <div className={`rounded-full h-full bg-slate-400 progress ${loadingProgress()}`}></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="/image/Silver.png"
                                className="h-[100px] w-[100px]"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
            {/* PREMIUM */}
            {isPremium && (
                <div>
                    <div className="bg-[url('/image/card2.png')] subscription-detail flex flex-row justify-between w-[400px] rounded-[10px] p-5">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-row">
                                <span className="font-extrabold tracking-tight subscription-detail-premium text-[35px] px-[8px] py-[2px] mr-[3px] rounded-[5px]">
                                    {name}
                                </span>
                            </div>
                            <div>
                                <div className="text-md font-play mb-2">
                                    {remainingActiveDays} of {activeDays} days
                                </div>
                                <div className="rounded-full w-full h-[8px] bg-[#333333]">
                                    <div className={`rounded-full h-full bg-yellow-400 progress ${loadingProgress()}`}></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="/image/Gold.png"
                                className="h-[100px] w-[100px]"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
