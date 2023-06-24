"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImagePreviewProps {
    images: string[];
}


const ImagePreview: React.FC<ImagePreviewProps> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div className="flex">
            <div className="w-1/4">
                <div className="flex flex-col h-full justify-center items-center gap-y-5">
                    {images.map((image) => (
                        <Image
                            key={image}
                            src={image}
                            alt="Product thumbnail"
                            className="cursor-pointer border-gray-200 border-2 w-auto rounded-md"
                            onClick={() => setCurrentImage(image)}
                            width={80}
                            height={80}
                        />
                    ))}
                </div>
            </div>
            <div className="w-3/4 ">
                <Image src={currentImage} alt="Product" className="w-full mx-auto rounded-md" width={400} height={400}/>
            </div>
        </div>
    );
}

export default ImagePreview;