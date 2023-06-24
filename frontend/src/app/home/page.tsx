"use client";
import { useEffect, useState } from "react";
import { FiX, FiUser } from "react-icons/fi";
import Image from "next/image";
import { serverURL, onboardingMessages } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [createBusinessData, setCreateBusinessData] = useState({
        name: "",
        description: "",
        category: 0,
    });

    const signUp = async () => {
        const config = {
            method: "POST",
            url: `${serverURL}/user/signup`,
            headers: {
                "Content-Type": `application/json`
            },
            data: signUpData
        };

        axios(config).then((response) => {
            console.log(response.data);
            toast.success("Signed Up Successfully");
            setShowSignUp(false);
        }).catch((error) => {
            console.log(error);
        });
    };


    const login = async () => {
        const config = {
            method: "POST",
            url: `${serverURL}/user/login`,
            headers: {
                "Content-Type": `application/json`
            },
            data: loginData
        };

        axios(config).then((response) => {
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.token);
            toast.success("Logged In Successfully");
            setShowLogin(false);
        }).catch((error) => {
            console.log(error);
        });
    };

    const [businessData, setBusinessData] = useState();

    const getBusiness = async () => {
        const config = {
            method: "GET",
            url: `${serverURL}/business`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        };

        axios(config).then((response) => {
            setBusinessData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const [onboardingIndex, setOnboardingIndex] = useState(0);

    useEffect(() => {
        getBusiness();
    }, []);

    return <div className="flex w-screen h-screen bg-white flex flex-col text-black p-5">
        <nav className="flex justify-between">
            <p className="text-lg font-bold">Zapspace</p>
            {localStorage.getItem("user") ? <div className="flex items-center"><FiUser onClick={() => {
                localStorage.clear();
                window.location.reload()
            }} className="cursor-pointer text-2xl mr-2" /><p>{JSON.parse(localStorage.getItem("user")!).name}</p></div> : <button onClick={() => setShowLogin(true)} className="btn btn-primary">Login</button>}
        </nav>
        {/* SignUp */}
        {showSignUp ? <main className="absolute left-0 top-0 w-full h-full flex flex-col bg-[#DDC12D] p-5">
            <nav className="flex w-full justify-between">
                <p className="text-lg font-bold">Zapspace</p>
                <FiX onClick={() => setShowSignUp(false)} className="cursor-pointer text-2xl" />
            </nav>
            <div className="flex px-8 h-full items-center justify-center mb-20">
                <div className="w-full h-full flex flex-col justify-center">
                    <p className="text-2xl mb-20 font-bold">SignUp</p>
                    <p className="text-lg font-semibold mb-3">Name</p>
                    <input type="text" onChange={(x) => setSignUpData({ ...signUpData, name: x.target.value })} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    <p className="text-lg font-semibold mb-3 mt-3">Email</p>
                    <input type="email" onChange={(x) => setSignUpData({ ...signUpData, email: x.target.value })} placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                    <p className="text-lg font-semibold mb-3 mt-3">Password</p>
                    <input type="password" onChange={(x) => setSignUpData({ ...signUpData, password: x.target.value })} placeholder="Set a Password" className="input input-bordered w-full max-w-xs" />
                    <div className="flex">
                        <button onClick={(x) => signUp()} className="btn btn-neutral mt-7">Signup</button>
                    </div>
                </div>
                <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-5130510-4292743.png" alt="icon" width={500} height={500} />
            </div>
        </main> : ""}
        {/* SignUp */}
        {/* Login */}
        {showLogin ? <main className="absolute left-0 top-0 w-full h-full flex flex-col bg-[#DDC12D] p-5">
            <nav className="flex w-full justify-between">
                <p className="text-lg font-bold">Zapspace</p>
                <FiX onClick={() => setShowLogin(false)} className="cursor-pointer text-2xl" />
            </nav>
            <div className="flex px-8 h-full items-center justify-center mb-20">
                <div className="w-full h-full flex flex-col justify-center">
                    <p className="text-2xl mb-20 font-bold">Login</p>
                    <p className="text-lg font-semibold mb-3">Email</p>
                    <input type="text" onChange={(x) => setLoginData({ ...loginData, email: x.target.value })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <p className="text-lg font-semibold mb-3 mt-3">Password</p>
                    <input type="password" onChange={(x) => setLoginData({ ...loginData, password: x.target.value })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <div className="flex">
                        <button onClick={(x) => login()} className="btn btn-neutral mt-7">Login</button>
                    </div>
                </div>
                <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-5130510-4292743.png" alt="icon" width={500} height={500} />
            </div>
        </main> : ""}
        {/* Login */}
        {/* Onboarding */}
        {showOnboarding ? <main className="absolute left-0 top-0 w-full h-full flex flex-col bg-[#DDC12D] p-5">
            <nav className="flex w-full justify-between">
                <p className="text-lg font-bold">Zapspace</p>
                <FiX onClick={() => { setShowOnboarding(false); setOnboardingIndex(0) }} className="cursor-pointer text-2xl" />
            </nav>
            <div className="flex px-8 h-full items-center justify-center">
                <div className="w-full h-full flex flex-col justify-center">
                    <p>{onboardingIndex + 1} of {onboardingMessages.length}</p>
                    <p className="text-2xl font-semibold mb-3">{onboardingMessages[onboardingIndex].title}</p>
                    {onboardingIndex === 0 ? <input type="text" onChange={(x) => {
                        setCreateBusinessData({ ...createBusinessData, name: x.target.value });
                    }} value={onboardingIndex === 0 ? createBusinessData.name : onboardingIndex === 1 ? createBusinessData.description : ""} placeholder="Business name" className="input input-bordered w-full max-w-xs" /> : onboardingIndex === 1 ? <textarea className="textarea textarea-bordered" placeholder="Description"></textarea> : <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Business Category</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>}
                    <div className="flex">
                        <button onClick={() => {
                            if (onboardingIndex < onboardingMessages.length - 1) {
                                setOnboardingIndex(onboardingIndex + 1)
                            }
                            console.log(createBusinessData)
                        }} className="btn btn-neutral mt-7">{onboardingIndex === onboardingMessages.length - 1 ? "Create" : "Next"}</button>
                    </div>
                </div>
                <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-5130510-4292743.png" alt="icon" width={500} height={500} />
            </div>
        </main> : ""}
        {/* Onboarding */}
        <main className="w-full h-full flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Start your business in a few clicks</p>
            <button onClick={() => {
                if (localStorage.getItem("user") == null) {
                    setShowSignUp(true);
                } else if (!businessData) {
                    setShowOnboarding(true);
                }
            }} className="btn btn-neutral mt-7">GET STARTED</button>
        </main>
        <ToastContainer />
    </div>;
}