"use client";
import { FiCheck, FiStar } from "react-icons/fi";

export default function PremiumButton() {
	return (
		<div className="absolute bottom-[10px] right-[10px] justify-end">
			{/* Open the modal using ID.showModal() method */}
			<button
				className="btn btn-primary"
				onClick={() => window.my_modal_2.showModal()}
			>
				<FiStar className="text-black" />
				PREMIUM
			</button>
			<dialog id="my_modal_2" className="modal">
				<form method="dialog" className="modal-box">
					<h3 className="flex items-center font-bold text-lg">
						<FiStar className="mr-1" />
						Upgrade to Premium
					</h3>
					<ul className="mt-3">
						<li className="mb-4 flex items-center">
							<FiCheck className="text-lg mr-2" />
							More than 10,000 customers per month
						</li>
						<li className="mb-4 flex items-center">
							<FiCheck className="text-lg mr-2" />
							Automated systems for digital marketing and social
							media management
						</li>
						<li className="mb-4 flex items-center">
							<FiCheck className="text-lg mr-2" />
							Custom domain
						</li>
						<li className="mb-4 flex items-center">
							<FiCheck className="text-lg mr-2" />
							Highly customizable
						</li>
						<li className="mb-4 flex items-center">
							<FiCheck className="text-lg mr-2" />
							Advanced analytics
						</li>
						<li className="mb-4 flex items-center">
							<FiCheck className="text-lg mr-2" />
							Expanded storage and bandwidth
						</li>
						<li className="mb-4 flex items-center">
							<FiCheck className="text-lg mr-2" />
							Realtime technical support
						</li>
					</ul>
					<div className="modal-action">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn">Close</button>
						<button className="btn btn-primary bg-black text-white hover:bg-black hover:text-[#f0f0f0]">
							Upgrade to Premium
						</button>
					</div>
				</form>
			</dialog>
		</div>
	);
}
