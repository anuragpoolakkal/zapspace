"use client";
import { useEffect, useState } from "react";
import { FiX, FiUser } from "react-icons/fi";
import Image from "next/image";
import { serverURL, onboardingMessages, businessCategories } from "@/utils/util";
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
        category: -1,
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
            getBusiness();
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
            getBusiness();
        }).catch((error) => {
            console.log(error);
        });
    };

    const [businessData, setBusinessData] = useState<any>({ name: "" });

    const getBusiness = async () => {
        const config = {
            method: "GET",
            url: `${serverURL}/business`,
            headers: {
                Authorization: `Bearer ${typeof localStorage !== "undefined" && localStorage.getItem("token")
                }`,
            },
        };

        axios(config).then((response) => {
            setBusinessData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const [onboardingIndex, setOnboardingIndex] = useState(0);

    const createBusiness = () => {
        const config = {
            method: "POST",
            url: `${serverURL}/business`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
            data: {
                name: createBusinessData.name,
                description: createBusinessData.description,
                category: createBusinessData.category
            },
        };

        axios(config).then((response) => {
            toast.success("Business Created Successfully");
            setBusinessData(response.data);
            getBusiness();
        }).catch((error) => {
            toast.error("Something went wrong");
            console.log(error);
        });
    };

    useEffect(() => {
        getBusiness();
    }, []);

    return <div className="flex w-screen h-screen bg-white flex-col text-black p-5">
        <nav className="flex justify-between mb-4">
            <p className="text-lg font-bold">Zapspace</p>
            {localStorage.getItem("user") ? <div className="flex items-center"><FiUser onClick={() => {
                localStorage.clear();
                window.location.reload();
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
        {showOnboarding ? <main style={{ background: createBusinessData.category !== -1 ? businessCategories[createBusinessData.category].color : "#DDC12D" }} className="absolute left-0 top-0 w-full h-full flex flex-col p-5">
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
                    }} value={createBusinessData.name} placeholder="Business name" className="input input-bordered w-full max-w-xs" />
                        :
                        onboardingIndex === 1
                            ?
                            <textarea onChange={(x) => {
                                setCreateBusinessData({ ...createBusinessData, description: x.target.value });
                            }} className="textarea textarea-bordered" value={createBusinessData.description} placeholder="Description"></textarea>
                            :
                            <select onChange={(x) => setCreateBusinessData({ ...createBusinessData, category: parseInt(x.target.value) })} className="select select-bordered w-full max-w-xs" value={createBusinessData.category}>
                                <option value={-1} disabled selected>Business Category</option>
                                {
                                    businessCategories.map((category, index) => {
                                        return <option key={index} value={index}>{category.category}</option>
                                    })
                                }
                            </select>}
                    <div className="flex">
                        <button onClick={() => {
                            if (onboardingIndex === onboardingMessages.length - 1) {
                                setShowOnboarding(false);
                                setOnboardingIndex(0);
                                createBusiness();
                            }

                            if (onboardingIndex < onboardingMessages.length - 1) {
                                setOnboardingIndex(onboardingIndex + 1)
                            }
                            console.log(createBusinessData)
                        }} className="btn btn-neutral mt-7">{onboardingIndex === onboardingMessages.length - 1 ? "Create" : "Next"}</button>
                    </div>
                </div>
                <Image src={createBusinessData.category !== -1 ? businessCategories[createBusinessData.category].image : "https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-5130510-4292743.png"} alt="icon" width={500} height={500} />
            </div>
        </main> : ""}
        {/* Onboarding */}
        {showOnboarding || showLogin || showSignUp ? "" : <div style={{ background: "black"}} className="rounded-2xl hero min-h-[80vh]">
            <img style={{filter: "opacity(0.5)"}} src={businessData?.name ? `${businessCategories[businessData?.category].bgImage}")` : "https://images.unsplash.com/photo-1576500714954-8a687d0ea1ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>
            <div className="hero-content flex-col lg:flex-row">
                {businessData?.name ? <img width={250} src={businessData?.name ?  businessCategories[businessData?.category].image : "https://static.vecteezy.com/system/resources/previews/011/997/009/non_2x/online-shop-3d-icon-illustration-for-your-website-user-interface-and-presentation-3d-render-illustration-free-png.png"} className="max-w-sm rounded-lg shadow-2xl" /> : ""}
                <div>
                    <h1 className="text-5xl text-white font-bold">{businessData.name ? `Welcome ${businessData.name}!` : "Start a business in minutes!"}</h1>
                    <p className="text-white py-6">{businessData.name ? "Take control of your business with ease - visit your personalized dashboard on our platform to effortlessly manage and monitor your products, sales, and more, all in one convenient place." : "Turn your dreams into reality with Zapspace - the fastest and easiest way to start and launch your own business in just minutes."}</p>
                    <button className="btn btn-primary" onClick={() => {
                        if (businessData.name) {
                            window.location.href = "/dashboard";
                        }
                        else {
                            if (localStorage.getItem("user") == null) {
                                setShowSignUp(true);
                            } else if (!businessData) {
                                setShowOnboarding(true);
                            }
                        }
                    }}>{businessData.name ? "Go to Dashboard" : "GET STARTED"}</button>
                </div>
            </div>
        </div>}
        {/* <main className="w-full h-full flex flex-col justify-center items-center">
            
            <p className="text-2xl font-semibold">{businessData.name ? `Welcome ${businessData.name}!` : "Start your business in a few clicks"}</p>
            <button onClick={() => {
                if (businessData.name) {
                    window.location.href = "/dashboard";
                }
                else {
                    if (localStorage.getItem("user") == null) {
                        setShowSignUp(true);
                    } else if (!businessData) {
                        setShowOnboarding(true);
                    }
                }
            }} className="btn btn-neutral mt-7">{businessData.name ? "Go to Dashboard" : "GET STARTED"}</button>
            {businessData.name ? <div className="flex w-full justify-between absolute bottom-0 left-0">
                <Image src={businessData?.category !== -1 ? businessCategories[businessData.category]?.image : "https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-5130510-4292743.png"} alt="icon" width={250} height={250} />
                <div style={{ background: businessData?.category !== -1 ? businessCategories[businessData.category]?.color : "#DDC12D" }} className="absolute right-[-80px] bottom-[-80px] rounded-full w-[250px] h-[250px]"></div>
            </div> : <div className="flex w-full justify-between absolute bottom-0 left-0">
                <img src={"https://static.vecteezy.com/system/resources/previews/011/997/009/non_2x/online-shop-3d-icon-illustration-for-your-website-user-interface-and-presentation-3d-render-illustration-free-png.png"} alt="icon" width={250} height={250} />
                <div style={{ background: businessData?.category !== -1 ? businessCategories[businessData.category]?.color : "#DDC12D" }} className="absolute right-[-80px] bottom-[-80px] rounded-full w-[250px] h-[250px]"></div>
            </div>}
        </main> */}
        <ToastContainer />
    </div>;
}