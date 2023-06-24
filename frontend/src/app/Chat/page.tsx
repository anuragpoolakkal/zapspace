import Chat from "../component/Chat";

export default function ChatPage() {
    return (
        <div className="h-screen flex bg-white ">
            <div className="p-5 h-min w-full">
                <h6 className="text-6xl font-bold text-black">Chat</h6>
                <Chat />
                
            </div>

        </div>
    );
}