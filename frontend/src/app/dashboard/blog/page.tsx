"use client";
import { serverURL } from "@/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";
import {
	FiChevronDown,
	FiHome,
	FiBook,
	FiPieChart,
	FiUsers,
	FiShoppingBag,
	FiPlus,
} from "react-icons/fi";

export default function Blog() {
	return (
		<div className="flex flex-col text-black">
			<p className="text-2xl font-semibold mb-4">Blogs</p>
			<div className="flex">
				<button className="btn mb-2">
					<FiPlus />
					New Blog
				</button>
			</div>
			<div className="flex">
				<div className="card w-96 bg-base-100 shadow mr-4">
					<div className="card-body">
						<p className="text-sm">20 June 2023</p>
						<div className="flex">
							<h2 className="card-title mr-2">
								Checkout our latest collection!
							</h2>
						</div>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Edit</button>
						</div>
					</div>
				</div>
				<div className="card w-96 bg-base-100 shadow mr-4">
					<div className="card-body">
						<div className="flex flex-col">
							<p className="text-sm">20 June 2023</p>
							<div className="flex">
								<h2 className="card-title mr-2">
									Enchanting World of Botanical-Inspired
									Pottery
								</h2>
							</div>
						</div>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Edit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
