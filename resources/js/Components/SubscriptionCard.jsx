import React from "react";
import Button from "./Button";

export default function SubscriptionCard({
    id,
    name,
    price,
    durationInMonth,
    features,
    isPremium,
    onSelectSubscription,
}) {
    return (
        <>
            {/* Basic */}
            {!isPremium && (
                <div className="kartu rounded-[10px] p-3">
                    <div className="w-[280px] bg-[url('/image/card1.png')] p-4 w-full max-w-sm sm:p-8 rounded-[10px]">
                        <h5 className="basic-title mb-4 text-3xl text-center font-quicksand font-black">
                            {name}
                        </h5>
                        <div className="mb-8 relative flex items-baseline justify-center text-gray-900">
                            <span className="rp text-2xl font-quicksand">
                                Rp
                            </span>
                            <div className="flex flex-col">
                                <span className="text-5xl font-extrabold tracking-tight">
                                    {price.toLocaleString()}
                                </span>
                                <span className="mt-1 text-xl font-quicksand text-[#262626]">
                                    /{durationInMonth} Month
                                </span>
                            </div>
                        </div>
                        <ul
                            role="list"
                            className="space-y-5 flex flex-col justify-center"
                        >
                            {features.map((feature, index) => (
                                <li
                                    className="flex space-x-3"
                                    key={`${index}-${id}-${features}`}
                                >
                                    <div className="check rounded-full ">
                                        <svg
                                            aria-hidden="true"
                                            className="flex-shrink-0 w-6 h-6 text-black"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Check icon</title>
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-[20px] text-base font-quicksand leading-tight text-[#262626]">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div onClick={onSelectSubscription}>
                            <Button
                                type="button"
                                className="mt-10 kartu-btn font-quicksand font-black rounded-full text-sm px-5 py-2.5 w-full text-center"
                                variant="white-outline"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {/* Premium */}
            {isPremium && (
                <div className="kartu rounded-[10px] p-3">
                    <div className="w-[280px] bg-[url('/image/card2.png')] p-4 w-full max-w-sm sm:p-8 rounded-[10px]">
                        <h5 className="premium-title mb-4 text-3xl text-center font-quicksand font-black">
                            {name}
                        </h5>
                        <div className="mb-8 relative flex items-baseline justify-center text-gray-900">
                            <span className="rp text-2xl font-quicksand">
                                Rp
                            </span>
                            <div className="flex flex-col">
                                <span className="text-5xl font-extrabold tracking-tight">
                                    {price.toLocaleString()}
                                </span>
                                <span className="mt-1 text-lg font-quicksand text-[#262626]">
                                    /{durationInMonth} Month
                                </span>
                            </div>
                        </div>
                        <ul
                            role="list"
                            className="space-y-5 flex flex-col justify-center"
                        >
                            {features.map((feature, index) => (
                                <li
                                    className="flex space-x-3"
                                    key={`${index}-${id}-${features}`}
                                >
                                    <div className="check rounded-full ">
                                        <svg
                                            aria-hidden="true"
                                            className="flex-shrink-0 w-6 h-6 text-black"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Check icon</title>
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-[20px] text-base font-quicksand leading-tight text-[#262626]">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div onClick={onSelectSubscription}>
                            <Button
                                type="button"
                                className="mt-10 kartu-btn font-quicksand font-black rounded-full text-sm px-5 py-2.5 w-full text-center"
                                variant="white-outline"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
