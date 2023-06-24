import { FiFacebook, FiInstagram, FiTwitter, FiFileText } from "react-icons/fi";

export default function Social() {
    return <div className="flex flex-col text-black">
        <p className="text-2xl font-semibold mb-8">Social</p>
        <div className="flex items-center mb-8">
            <FiFacebook className="text-4xl mr-2" />
            <p className="text-xl font-semibold">Facebook</p>
            <button className="ml-3 btn">CONNECT</button>
        </div>
        <div className="flex items-center mb-8">
            <FiInstagram className="text-4xl mr-2" />
            <p className="text-xl font-semibold">Instagram</p>
            <button className="ml-3 btn">CONNECT</button>
        </div>
        <div className="flex items-center mb-8">
            <FiTwitter className="text-4xl mr-2" />
            <p className="text-xl font-semibold">Twitter</p>
            <button className="ml-3 btn">CONNECT</button>
        </div>
    </div>;
}