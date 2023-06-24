import Image from "next/image";


export default function ProductListingPage() {
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
            <div className="w-full flex">
                <div className="w-1/5 min-h-screen flex-col">
                    <div>
                        <h2 className="font-semibold text-xl">Categories</h2>
                    </div>
                </div>
                <div className="w-4/5 min-h-screen flex flex-wrap justify-center gap-x-3 gap-y-3">
                    <div className="flex h-1/2">
                        <div className="items-center p-5 bg-blue-500 rounded-md ">
                            <figure className="flex items-center"><Image src="https://images.unsplash.com/photo-1624109789237-6f796cd9e570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" width={280} height={300} alt="Shoes" /></figure>
                            <div className="flex-col">
                                <div className="flex justify-between px-5 text-black">
                                    <p className="text-sm">Mens Winter Jacket</p>
                                    <p className="text-sm">M</p>
                                </div>
                                <div className="px-5">
                                    <p>$99</p>
                                </div>
                            </div>
                        </div>
                        <div className="items-center p-5">
                            <figure className="flex items-center"><Image src="https://images.unsplash.com/photo-1624109789237-6f796cd9e570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" width={200} height={300} alt="Shoes" /></figure>
                            <div className="flex-col">
                                <div className="flex justify-between px-5">
                                    <p>Mens Winter Jacket</p>
                                    <p>M</p>
                                </div>
                                <div className="px-5">
                                    <p>$99</p>
                                </div>
                            </div>
                        </div>
                        <div className=" items-center p-5">
                            <figure className="flex items-center"><Image src="https://images.unsplash.com/photo-1624109789237-6f796cd9e570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" width={200} height={300} alt="Shoes" /></figure>
                            <div className="flex-col">
                                <div className="flex justify-between px-5">
                                    <p>Mens Winter Jacket</p>
                                    <p>M</p>
                                </div>
                                <div className="px-5">
                                    <p>$99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            )
        </div>
    )
}