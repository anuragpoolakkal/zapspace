"use client";

import Chat from "./component/Chat";
import { useState } from "react";

export default function ChatPage() {
    const [close, setClose] = useState(false);

    return (
        <div className="h-screen flex bg-white ">
            <div className="p-5 h-min w-full">
                <h6 className="text-6xl font-bold text-black">Chat</h6>
                {!close &&
                    <Chat onClose={
                        () => {
                            setClose(true);
                        }
                    } />

                }

            </div>

        </div>
    );
}