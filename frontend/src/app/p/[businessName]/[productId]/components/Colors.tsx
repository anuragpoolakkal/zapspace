
import React, { useState } from 'react'


interface ColorsProps {
    colors: string[];
}



function Colors({ colors }: { colors: string[] }) {

    const [selectedColor, setSelectedColor] = useState(colors[0])

    return (
        <div>
            <h1>Colors</h1>
            <div className="flex gap-x-2">
                {colors.map((color) => (
                    <div key={color} className={`rounded-full w-14 h-14 bg-${color}-500 border border-yellow-300 cursor-pointer`} onClick={() => {
                        setSelectedColor(color)
                    }}>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Colors