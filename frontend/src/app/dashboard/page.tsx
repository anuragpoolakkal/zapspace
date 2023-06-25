"use client";
import { serverURL } from "@/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiChevronDown, FiHome, FiBook, FiPieChart, FiUsers, FiShoppingBag, FiEye, FiGlobe, FiExternalLink } from "react-icons/fi";

export default function Dashboard() {
    const [businessData, setBusinessData] = useState<any>({ name: "" });

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

    useEffect(() => {
        getBusiness();
    }, []);

    return <div className="flex flex-col text-black w-full">
        <p className="text-2xl font-semibold mb-4">Dashboard</p>
        <div className="w-full flex flex-col stats shadow mt-4 p-4 mr-4">
            <p className="flex items-center"><FiGlobe className="mr-1" /> WEBSITE</p>
            <div className="flex items-center">
                <p className="text-2xl font-semibold">{businessData?.name}</p>
                <button className="ml-3 btn" onClick={() => { window.open(`/p/${businessData?.businessId}/site`) }}><FiExternalLink /><p>View</p></button>
            </div>
        </div>
        <div className="stats shadow my-4   ">

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="stat-title">Total Sales</div>
                <div className="stat-value">236</div>
                <div className="stat-desc">Jun 1st - July 1st</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <div className="stat-title">New Users</div>
                <div className="stat-value">18</div>
                <div className="stat-desc">↗︎ 5 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <div className="stat-title">Earnings</div>
                <div className="stat-value">₹ 4,268</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
        <div className="card w-96 bg-base-100 shadow">
            <div className="card-body">
                <div className="flex">
                    <h2 className="card-title mr-2">Blog</h2>
                    <div className="flex">
                    <p className="text-xs bg-green-600 text-white font-semibold rounded-md w-fit p-1">LATEST</p>
                    </div>
                </div>
                <p>What's special about my coffee?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read</button>
                </div>
            </div>
        </div>
    </div>;
}