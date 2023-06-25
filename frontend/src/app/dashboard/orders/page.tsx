"use client";
import { orders } from "@/utils/util";
import Image from "next/image";
import { useRef } from "react";
import { FiMapPin, FiPhone, FiPlus } from "react-icons/fi";

export default function Orders() {
    const modalRef = useRef(null);

    return <div className="flex flex-col text-black w-full">
        <p className="flex text-2xl font-semibold mb-4">Orders <div className="flex">
            <p className="ml-3 text-lg flex items-center justify-center text-center bg-black text-white font-semibold rounded-md w-fit p-1">{orders?.length}</p>
        </div></p>
        <main className="overflow-y-scroll h-[85vh]">
            {orders?.map((item:any, index:number) => {
                return <div className="flex bg-gray-100 rounded-lg m-3 p-3">
                    <img src={item?.product?.image} width={200} height={200} alt="hello" />
                    <div className="flex flex-col justify-center ml-5">
                        <p className="text-sm text-gray-600 font-medium">{item?.date.toUpperCase()}</p>
                        <p className="text-lg font-semibold">{item?.product?.name}</p>
                        <p className="flex items-center mt-3"><FiMapPin className="mr-1"/> {item?.address}</p>
                        <p className="mt-3">Orders: {item?.order}</p>
                        <p className="mt-3 font-bold mb-4">₹ {item?.price}</p>
                        <button onClick={()=>window.open("tel:+919961053621")} className="w-fit btn btn-primary"><FiPhone/> CONTACT</button>
                    </div>
                </div>
            })}
        </main>
        {/* Open the modal using ID.showModal() method */}
        <dialog id="my_modal_1" ref={modalRef} className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg mb-3">New Product</h3>
                <input type="file" placeholder="Product Image" multiple className="mb-4 input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Name" className="mb-4 input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Description" className="mb-4 input input-bordered w-full max-w-xs" />
                <input type="number" placeholder="Price ₹" className="mb-4 input input-bordered w-full max-w-xs" />
                <input type="number" placeholder="Stock" className="mb-4 input input-bordered w-full max-w-xs" />
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cancel</button>
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </dialog>
    </div>;
}