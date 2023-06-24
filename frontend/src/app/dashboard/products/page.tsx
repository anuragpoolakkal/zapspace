import Image from "next/image";
import { FiPlus } from "react-icons/fi";

export default function Products() {
    return <div className="flex flex-col text-black w-full">
        <p className="text-2xl font-semibold mb-4">Products</p>
        <div className="flex">
            <button className="btn mb-2"><FiPlus />New Product</button>
        </div>
        <main className="overflow-y-scroll h-[80vh]">
            {[1,1,1,1,11,1,1,1,1,1,1,1,1].map((item, index) => {
                return <div className="flex">
                    <Image src={"https://static.toiimg.com/thumb/imgsize-23456,msid-88137086,width-600,resizemode-4/88137086.jpg"} width={200} height={200} alt="hello" />
                    <div className="flex flex-col">
                        <p>Product Name</p>
                        <p>Elegant pot home made pot good pot.</p>
                        <p>₹ 250</p>
                    </div>
                </div>
            })}
        </main>
    </div>;
}