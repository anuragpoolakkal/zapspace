"use client";

import { useState } from "react";
import { FiSave } from "react-icons/fi";

export default function Settings() {
    const [checked, setChecked] = useState(false);

    return <div className="flex flex-col text-black">
        <p className="text-2xl font-semibold mb-4">Settings</p>
        <p className="mb-1 font-semibold text-md">Custom Domain</p>
        <div className="flex items-center"><input type="text" placeholder="yourdomain" className="input input-bordered w-full max-w-xs mr-3" /><p>.zapspaces.com</p></div>
        <div className="form-control max-w-fit mt-3">
            <label className="label cursor-pointer">
                <span className="label-text font-semibold text-md">Automatically post to social media when a product is added</span>
                <input type="checkbox" className="ml-3 toggle" checked={checked} onChange={(x)=>setChecked(x.target.checked)} />
            </label>
        </div>
       <div className="mt-4 flex">
       <button className="btn btn-primary"><FiSave/>Save</button>
       </div>
    </div>;
}   