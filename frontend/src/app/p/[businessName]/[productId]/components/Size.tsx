
import React, { useState } from 'react'


interface Size {
    sizes: string[];
}



function Size({ sizes }: { sizes: string[] }) {
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    return (
        <div>
            <h1>Size</h1>
            <div className="flex gap-x-2">
                {sizes.map((size) => (
                    <div key={size} className={` w-14 h-14 flex items-center justify-center font-semibold cursor-pointer border border-yellow-300`} onClick={() => {
                        setSelectedSize(size)
                    }}>
                        {size.toUpperCase()}
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Size;