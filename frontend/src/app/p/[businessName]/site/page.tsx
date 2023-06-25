"use client"
import { businessCategories, potteryProducts, serverURL } from "@/utils/util";
import axios from "axios";
import { FiArrowRight, FiMessageSquare, FiShoppingCart } from "react-icons/fi"
import Chat from '@/app/Chat/component/Chat';
import React, { useState, useEffect } from 'react';

type Params = {
    params: {
        businessName: string
    }
}

export default function Site({ params: { businessName } }: Params) {

    const [businessData, setBusinessData] = useState<any>({ name: "" });
    const [closeChat, setCloseChat] = useState(false);
    const getBusiness = async () => {
        const config = {
            method: "POST",
            url: `${serverURL}/business/by-id`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
            data: {
                businessId: businessName
            },
        };

        axios(config).then((response) => {
            setBusinessData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => { getBusiness() }, [])

    return <>
        <div className="navbar" style={{ background: businessData?.category !== -1 ? businessCategories[businessData.category]?.color : "#DDC12D" }}>
            <div className="flex w-full justify-between">
                <a className="btn btn-ghost normal-case text-xl" onClick={() => window.location.href = `/p/${businessName}/site`}>{businessData?.name}</a>
                <a className="btn btn-ghost normal-case text-xl" onClick={() => window.location.href = `/p/${businessName}/cart`}><FiShoppingCart /></a>
            </div>
        </div>
        <main className="flex-1 w-auto h-full md:mx-16 mx-5">
            <div className="w-full h-[80vh] flex flex-col items-center justify-center text-black">
                <p className="text-black font-semibold text-5xl">{businessData?.name}</p>
                <p className="mt-5 text-gray-500 text-lg text-center">{businessData?.description}</p>
                <button onClick={()=> window.location.href = `/p/${businessName}`} style={{zIndex: "2"}} className="mt-10 btn btn-primary">VIEW COLLECTIONS <FiArrowRight /></button>
            </div>{businessData.name ? <div className="flex w-full justify-between absolute bottom-0 left-0">
                <img src={businessData?.category !== -1 ? businessCategories[businessData.category]?.image : "https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-5130510-4292743.png"} alt="icon" width={250} height={250} />
                <div style={{ background: businessData?.category !== -1 ? businessCategories[businessData.category]?.color : "#DDC12D" }} className="absolute right-[-80px] bottom-[-80px] rounded-full w-[250px] h-[250px]"></div>
            </div> : ""}
            {closeChat &&
                <Chat onClose={
                    () => {
                        setCloseChat(true);
                    }
                } />
            }
            <button onClick={() => setCloseChat(!closeChat)} className="absolute bottom-5 right-5 btn btn-primary"><FiMessageSquare className='mr-1' />CHAT</button>
        </main>
    </>
}