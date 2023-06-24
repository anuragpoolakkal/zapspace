export default function Home() {
    return <div className="flex w-screen h-screen bg-white text-black p-5">
        <nav>
            <p className="text-lg font-bold">Zapspace</p>
        </nav>
        {/* Onboarding */}
        <main className="absolute left-0 top-0 w-full h-full flex flex-col bg-[#DDC12D] p-5">
            <nav>
                <p className="text-lg font-bold">Zapspace</p>
            </nav>
            <main className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-2xl font-semibold">Start your business in a few clicks</p>
                <button className="btn btn-neutral mt-7">GET STARTED</button>
            </main>
        </main>
        {/* Onboarding */}
        <main className="w-full h-full flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Start your business in a few clicks</p>
            <button className="btn btn-neutral mt-7">GET STARTED</button>
        </main>
    </div>;
}