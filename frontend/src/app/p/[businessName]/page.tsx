"use client";
import { potteryProducts } from "@/utils/util";
import Image from "next/image";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi"
import Chat from '@/app/Chat/component/Chat';
import React, { useState, useEffect } from 'react';

export default function ProductListingPage() {
    const [closeChat, setCloseChat] = useState(false);

    return (
        <div>
            
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
                    return <div className="md:w-72 m-5 bg-base-100 text-black cursor-pointer hover:scale-105" style={{ transition: "0.1s" }}>
                        <figure><img className="w-full rounded-lg" src={item?.image} alt="Achaar" width={200} height={200} /></figure>
                        <div className="mt-2">
                            <h2 className="text-md font-semibold">{item?.name}</h2>
                            <p className="text-md">₹ {item?.price}</p>
                        </div>
                    </div>
                })}
            </div>
            {closeChat &&
                <Chat onClose={
                    () => {
                        setCloseChat(true);
                    }
                } />
            }
            <button onClick={() => setCloseChat(!closeChat)} className="absolute bottom-5 right-5 btn btn-primary"><FiMessageSquare className='mr-1' />CHAT</button>
        </div>
    )
}