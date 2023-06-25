import { FiFacebook, FiInstagram, FiTwitter, FiFileText } from "react-icons/fi";

export default function Social() {
    return <div className="flex flex-col text-black">
        <p className="text-2xl font-semibold mb-8">Chats</p>
        <main className="flex">
            <div className="min-w-[300px] mr-5">
                {[...Array(5)].map((item, index) => {
                    return <div className="cursor-pointer hover:bg-slate-200 flex items-center mb-2 bg-slate-50 rounded-md p-3">
                        <div className="avatar mr-2">
                            <div className="w-14 mask mask-squircle">
                                <img src="https://hips.hearstapps.com/hmg-prod/images/marcus-aurelius-gettyimages-122316830.jpg" />
                            </div>
                        </div>
                        <div>
                            <p className="text-md font-semibold">Sample User {index}</p>
                            <p className="text-sm">Hello, I need a help.</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="flex flex-col justify-between w-full h-[80vh] bg-slate-100" style={{ zIndex: "2" }}>
                <div className="flex flex-col">
                    <div className="mb-1 bg-yellow-300 text-black p-4 m-4 w-fit rounded-md shadow">
                        Hello, I need a help
                    </div>
                    <div className="bg-yellow-300 text-black p-4 m-4 w-fit rounded-md shadow">
                        What color is your bugatti?
                    </div>
                </div>
                <div className="flex p-4">
                    <input type="text" placeholder="Type here" className="mr-2 input input-bordered w-full" />
                    <button className="btn btn-primary">Send</button>
                </div>
            </div>
        </main>
    </div>;
}