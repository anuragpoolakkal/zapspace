"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { potteryProducts } from "@/utils/util";

export default function Products() {
	const modalRef = useRef(null);
	const fileInputRef = useRef(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleNewProduct = () => {
		setIsModalOpen(true);
	};

	const handleAddProduct = (event : Chan) => {
		event.preventDefault();
		const files = fileInputRef.current.files;
		const name = event.target.elements.name.value;
		const description = event.target.elements.description.value;
		const price = event.target.elements.price.value;
		const stock = event.target.elements.stock.value;

		// Process the new product data (e.g., send it to the server)

		// Close the modal
		setIsModalOpen(false);
	};

	return (
		<div className="flex flex-col text-black w-full">
			<p className="text-2xl font-semibold mb-4">Products</p>
			<div className="flex">
				<button className="btn mb-2" onClick={handleNewProduct}>
					<FiPlus />
					New Product
				</button>
			</div>
			<main className="overflow-y-scroll h-[80vh]">
				{potteryProducts.map((item) => (
					<div
						className="flex bg-gray-100 rounded-lg m-3 p-3"
						key={item.id}
					>
						<Image
							src={item.image}
							width={200}
							height={200}
							alt="hello"
						/>
						<div className="flex flex-col justify-center ml-5">
							<p className="text-lg font-semibold">{item.name}</p>
							<p>{item.description}</p>
							<p className="mt-3">₹ {item.price}</p>
						</div>
					</div>
				))}
			</main>
			{/* Open the modal using ID.showModal() method */}
			{isModalOpen && (
				<dialog id="my_modal_1" ref={modalRef} className="modal">
					<form
						method="dialog"
						className="modal-box"
						onSubmit={handleAddProduct}
					>
						<h3 className="font-bold text-lg mb-3">New Product</h3>
						<input
							type="file"
							placeholder="Product Image"
							multiple
							className="mb-4 input input-bordered w-full max-w-xs"
							ref={fileInputRef}
						/>
						<input
							type="text"
							placeholder="Name"
							className="mb-4 input input-bordered w-full max-w-xs"
							name="name"
						/>
						<input
							type="text"
							placeholder="Description"
							className="mb-4 input input-bordered w-full max-w-xs"
							name="description"
						/>
						<input
							type="number"
							placeholder="Price ₹"
							className="mb-4 input input-bordered w-full max-w-xs"
							name="price"
						/>
						<input
							type="number"
							placeholder="Stock"
							className="mb-4 input input-bordered w-full max-w-xs"
							name="stock"
						/>
						<div className="modal-action">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">Cancel</button>
							<button type="submit" className="btn btn-primary">
								Add
							</button>
						</div>
					</form>
				</dialog>
			)}
		</div>
	);
}
