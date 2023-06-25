"use client"
import { businessCategories, potteryProducts, serverURL } from "@/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi"

type Params = {
    params: {
        businessName: string
    }
}

export default function Cart({ params: { businessName } }: Params) {

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

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        getBusiness();

        if (localStorage.getItem("cart")) {
            var total = 0;
            for (const item of JSON.parse(localStorage.getItem("cart")!)) {
                total += parseInt(item.price);
            }
            setTotalPrice(total);
        }
    }, []);

    return <div className="flex flex-col">
        <div className="navbar" style={{ background: businessData?.category !== -1 ? businessCategories[businessData.category]?.color : "#DDC12D" }}>
            <div className="flex w-full justify-between">
                <a className="btn btn-ghost normal-case text-xl" onClick={() => window.location.href = `/p/${businessName}/site`}>{businessData?.name}</a>
                <a className="btn btn-ghost normal-case text-xl" onClick={() => window.location.href = `/p/${businessName}/cart`}><FiShoppingCart /></a>
            </div>
        </div>
        <main className="p-3 h-[90vh] text-black overflow-y-auto">
            <p className="text-2xl font-bold">Cart</p>
            {!localStorage.getItem("cart") ? "No items in cart" : JSON.parse(localStorage.getItem("cart")?.toString()!).map((item: any, index: number) => {
                return <div
                    className="flex bg-gray-100 rounded-lg m-3 p-3"
                    key={index}
                >
                    <img
                        src={item.image}
                        width={200}
                        height={200}
                        alt="hello"
                    />
                    <div className="flex flex-col justify-center ml-5">
                        <p className="text-lg font-semibold">{item.name}</p>
                        <p>{item.description}</p>
                        <p className="mt-3">₹ {item.price}</p>
                    </div>
                </div>
            })}
            <p className="font-bold"><span className="font-semibold">Total Price: </span>₹ {totalPrice} </p>
            <button className="btn btn-primary mt-3">CHECKOUT</button>
        </main>
    </div>
}