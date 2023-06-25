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
            <div className="w-full h-[80vh] flex flex-wrap overflow-y-auto  pt-5">
                {[...Array(10)].map((item, index) => {
                    return <div key={index} className="md:w-72 m-5 bg-base-100 text-black cursor-pointer hover:scale-105" style={{ transition: "0.1s" }}>
                        <figure><Image className="w-full rounded-lg" src="https://www.nestlehealthscience.com/sites/g/files/dnigna366/files/asset-library/PublishingImages/recipes/BOOST/BOOST_CocoaCream.jpg" alt="Achaar" width={200} height={200} /></figure>
                        <div className="mt-2">
                            <h2 className="text-md font-semibold">Boost Cocoa & Cream</h2>
                            <p className="text-md">₹ 250</p>
                        </div>
                    </div>
                })}
            </div>
            )
        </div>
    )
}