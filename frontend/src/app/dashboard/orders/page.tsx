"use client";
import Image from "next/image";
import { useRef } from "react";
import { FiPlus } from "react-icons/fi";

export default function Orders() {
    const modalRef = useRef(null);

    return <div className="flex flex-col text-black w-full">
        <p className="text-2xl font-semibold mb-4">Orders</p>
        <main className="overflow-y-scroll h-[85vh]">
            {[1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                return <div className="flex bg-gray-100 rounded-lg m-3 p-3">
                    <Image src={"https://static.toiimg.com/thumb/imgsize-23456,msid-88137086,width-600,resizemode-4/88137086.jpg"} width={200} height={200} alt="hello" />
                    <div className="flex flex-col justify-center ml-5">
                        <p className="text-lg font-semibold">Order</p>
                        <p>Elegant pot home made pot good pot.</p>
                        <p className="mt-3">₹ 250</p>
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