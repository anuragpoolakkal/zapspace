"use client";
import { FiFacebook, FiInstagram, FiTwitter, FiFileText, FiPlus } from "react-icons/fi";

export default function Social() {
    return <div className="flex flex-col text-black">
        <p className="text-2xl font-semibold mb-4">Social</p>
        <div className="flex mb-4">
            <button className="btn mb-2" onClick={() => window.my_modal_1.showModal()}>
                <FiPlus />
                Create New Post
            </button>
        </div>
        <div className="flex items-center mb-8">
            <FiFacebook className="text-4xl mr-2" />
            <p className="text-xl font-semibold">Facebook</p>
            <button className="ml-3 btn bg-blue-700 text-white hover:bg-blue-950">CONNECT</button>
        </div>
        <div className="flex items-center mb-8">
            <FiInstagram className="text-4xl mr-2" />
            <p className="text-xl font-semibold">Instagram</p>
            <button className="ml-3 btn bg-blue-700 text-white hover:bg-blue-950" onClick={() => {
                var width = 600; // Popup window width
                var height = 600; // Popup window height
                var left = (window.innerWidth - width) / 2; // Calculate the center position for the popup window
                var top = (window.innerHeight - height) / 2; // Calculate the center position for the popup window

                var loginUrl = "https://www.instagram.com/accounts/login"; // Instagram login URL

                // Open the popup window
                window.open(loginUrl, "Instagram Login", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
            }}>CONNECT</button>
        </div>
        <div className="flex items-center mb-8">
            <FiTwitter className="text-4xl mr-2" />
            <p className="text-xl font-semibold">Twitter</p>
            <button className="ml-3 btn bg-blue-700 text-white hover:bg-blue-950">CONNECT</button>
        </div>
        {/* Open the modal using ID.showModal() method */}
        <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Create new post</h3>
                <p className="py-4">Image</p>
                <button className="btn btn-primary"><FiPlus/>Add Image</button>
                <p className="py-4">Title</p>
                <input type="text" placeholder="Post title" className="input input-bordered w-full max-w-xs" />
                <p className="py-4">Caption</p>
                <textarea className="textarea w-full max-w-xs textarea-bordered" placeholder="Post caption"></textarea>
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>
    </div>;
}