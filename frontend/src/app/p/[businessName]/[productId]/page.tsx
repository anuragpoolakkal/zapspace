"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImagePreview from './components/ImagePreview';
import Colors from './components/Colors';
import Size from './components/Size';
import axios from "axios";
import { businessCategories, potteryProducts, serverURL } from '@/utils/util';
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi"
import Chat from '@/app/Chat/component/Chat';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Params = {
    params: {
        businessName: string,
        productId: string
    }
}

const ProductPage = ({ params: { businessName, productId } }: Params) => {
    const [businessData, setBusinessData] = useState<any>({ name: "" });

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

    const [closeChat, setCloseChat] = useState(false);

    return (
        <>  <div className="navbar" style={{ background: businessData?.category !== -1 ? businessCategories[businessData.category]?.color : "#DDC12D" }}>
            <div className="w-full flex justify-between">
                <a className="btn btn-ghost normal-case text-xl" onClick={() => window.location.href = `/p/${businessName}/site`}>{businessData?.name}</a>
                <a className="btn btn-ghost normal-case text-xl" onClick={() => window.location.href = `/p/${businessName}/cart`}><FiShoppingCart /></a>
            </div>
        </div>
            <main className="flex-1 w-auto md:mx-16 mx-5">
                <div className="container p-4 w-screen h-screen bg-white m-auto ">
                    <div className="flex p-5 pt-8">
                        <div className="w-1/2">
                            <ImagePreview images={[potteryProducts[parseInt(productId)]?.image, potteryProducts[parseInt(productId)]?.image, potteryProducts[parseInt(productId)]?.image]} />
                        </div>
                        <div className="w-1/2 pl-8 text-black">
                            <h2 className="text-5xl font-semibold mb-4 ">{potteryProducts[parseInt(productId)]?.name}</h2>
                            <span className="text-lg font-bold">₹ {potteryProducts[parseInt(productId)]?.price}</span>
                            <p className="text-gray-600 mb-4">{potteryProducts[parseInt(productId)]?.description}
                            </p>
                            <div className="flex mb-4 items-center gap-x-4">
                                <input type="number" min={1} placeholder="Qty" className="input w-20 input-primary" />
                            </div>
                            <div className="flex mb-4 items-center gap-x-4">
                                <Colors colors={["red", "green", "yellow"]} />
                            </div>
                            <div className="flex mb-4 items-center gap-x-4">
                                <Size sizes={["xs", "sm", "md", "lg"]} />
                            </div>
                            <div className='flex gap-x-5'>
                                <button onClick={()=>{
                                    toast.success("Added to Cart!")
                                    if(!Array.isArray(JSON.parse(localStorage.getItem("cart")!))){
                                        localStorage.setItem("cart", "[]");
                                    }
                                    var cartProducts: any = JSON.parse(localStorage.getItem("cart")!) ?? [];
                                    cartProducts.push(potteryProducts[parseInt(productId)]);
                                    localStorage.setItem("cart", JSON.stringify(cartProducts));
                                }} className="btn btn-primary">Add to Cart</button>
                                <button className="btn btn-success">Buy Now</button>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
            {closeChat &&
                <Chat onClose={
                    () => {
                        setCloseChat(true);
                    }
                } />
            }
            <button onClick={()=>setCloseChat(!closeChat)} className="absolute bottom-5 right-5 btn btn-primary"><FiMessageSquare className='mr-1' />CHAT</button>
            <ToastContainer/>
        </>
    );
}




export default ProductPage;
