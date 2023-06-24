"use client";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import Image from "next/image";

export default function Home() {
    const [showOnboarding, setShowOnboarding] = useState(false);

    return <div className="flex w-screen h-screen bg-white flex flex-col text-black p-5">
        <nav>
            <p className="text-lg font-bold">Zapspace</p>
        </nav>
        {/* Onboarding */}
        {showOnboarding ? <main className="absolute left-0 top-0 w-full h-full flex flex-col bg-[#DDC12D] p-5">
            <nav className="flex w-full justify-between">
                <p className="text-lg font-bold">Zapspace</p>
                <FiX onClick={() => setShowOnboarding(false)} className="cursor-pointer text-2xl" />
            </nav>
            <div className="flex px-8 h-full items-center justify-center">
                <div className="w-full h-full flex flex-col justify-center">
                    <p>1 of 6</p>
                    <p className="text-2xl font-semibold mb-3">Start your business in a few clicks</p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <div className="flex">
                        <button className="btn btn-neutral mt-7">NEXT</button>
                    </div>
                </div>
                <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-5130510-4292743.png" alt="icon" width={500} height={500} />
            </div>
        </main> : ""}
        {/* Onboarding */}
        <main className="w-full h-full flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Start your business in a few clicks</p>
            <button onClick={() => setShowOnboarding(true)} className="btn btn-neutral mt-7">GET STARTED</button>
        </main>
    </div>;
}