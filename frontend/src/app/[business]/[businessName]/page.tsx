"use client"
import { businessCategories, potteryProducts, serverURL } from "@/utils/util";
import axios from "axios";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi"
import Chat from '@/app/Chat/component/Chat';
import React, { useState, useEffect } from 'react';

type Params = {
    params: {
        businessName: string
    }
}

export default function BusinessPage({ params: { businessName } }: Params) {

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
                    <a className="btn btn-ghost normal-case text-xl"  onClick={()=>window.location.href=`/p/${businessName}/site`}>{businessData?.name}</a>
                    <a className="btn btn-ghost normal-case text-xl"  onClick={()=>window.location.href=`/p/${businessName}/cart`}><FiShoppingCart/></a>
                </div>
            </div>
            <main className="flex-1 w-auto md:mx-16 mx-5">
                <div className="flex flex-col text-black">
                    <div className="flex justify-between relative">
                        <div className="text-black flex items-center gap-x-3 p-3">
                            <h2 className="font-semibold text-xl">Filters</h2>
                            <button className="btn btn-xs">Clear Filters</button>
                        </div>
                        <div className="absolute right-0">
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <label tabIndex={0} className="btn m-1">Sort By</label>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black">
                                    <li><a>Min Price</a></li>
                                    <li><a>Max Price</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[80vh] flex flex-wrap overflow-y-auto pt-5">
                        {potteryProducts.map((item, index) => {
                            return <div onClick={()=>window.location.href=`/p/${businessName}/${index}`} className="md:w-72 m-5 bg-base-100 text-black cursor-pointer hover:scale-105" style={{ transition: "0.1s" }}>
                                <figure><img className="w-full rounded-lg" src={item?.image} alt="Achaar" width={200} height={200} /></figure>
                                <div className="mt-2">
                                    <h2 className="text-md font-semibold">{item?.name}</h2>
                                    <p className="text-md">₹ {item?.price}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                {closeChat &&
                    <Chat onClose={
                        () => {
                            setCloseChat(true);
                        }
                    } />
                }
                <button onClick={()=>setCloseChat(!closeChat)} className="absolute bottom-5 right-5 btn btn-primary"><FiMessageSquare className='mr-1' />CHAT</button>
            </main>
        </>;
}