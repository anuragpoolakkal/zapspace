export default function Settings() {
    return <div className="flex flex-col text-black">
        <p className="text-2xl font-semibold mb-4">Settings</p>
        <p className="mb-1">Custom Domain</p>
        <div className="flex items-center"><input type="text" placeholder="yourdomain" className="input input-bordered w-full max-w-xs" /><p>.zapspaces.com</p></div>
    </div>;
}   