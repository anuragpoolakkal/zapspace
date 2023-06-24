

interface ChatProps {
    onClose: () => void;
}

export default function Chat({ onClose }: ChatProps) {
    return (
        <div className="w-1/5 h-[600px] flex flex-col justify-between  mr-2 z-10 absolute right-0 bg-neutral-100 shadow-xl shadow-slate-300 rounded-lg ">
            <div className="bg-neutral-200 p-3 rounded-t-md flex justify-between">
                <h4 className="text-xl font-bold text-black">Chat</h4>
                <button onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex items-center mb-2 p-3">
                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full text-black" />
                <button className="btn btn-primary ml-2">Send</button>
            </div>

        </div>
    )
}

