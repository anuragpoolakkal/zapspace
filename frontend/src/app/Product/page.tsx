"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ImagePreview from './components/ImagePreview';
import Colors from './components/Colors';
import Size from './components/Size';

const ProductPage = () => {

    return (
        <div className="container p-4 w-screen h-screen bg-white m-auto ">
            <div className="flex p-5 pt-8">
                <div className="w-1/2">
                    <ImagePreview images={["https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80", "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80", "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80", "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80"]} />
                </div>
                <div className="w-1/2 pl-8 text-black">
                    <h2 className="text-5xl font-semibold mb-4 ">Product Name</h2>
                    <span className="text-lg font-bold">$99.99</span>
                    <p className="text-gray-600 mb-4">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor arcu non turpis rutrum vestibulum.
                        Cillum sit minim consequat adipisicing quis do incididunt nisi id do occaecat consectetur. Culpa et tempor duis qui laborum enim in nulla non mollit tempor pariatur. Cupidatat deserunt nisi veniam anim fugiat elit cupidatat.
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
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-success">Buy Now</button>
                    </div>
                </div>


            </div>
        </div>
    );
}




export default ProductPage;
