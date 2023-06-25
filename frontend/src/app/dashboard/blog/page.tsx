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
			<div></div>
			<div className="card w-96 bg-base-100 shadow">
				<div className="card-body">
					<div className="flex">
						<h2 className="card-title mr-2">Blog</h2>
						<div className="flex">
							<p className="flex justify-center items-center text-xs bg-green-600 text-white font-semibold rounded-md w-fit p-1">LATEST</p>
						</div>
					</div>
					<p>What's special about my coffee?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Read</button>
					</div>
				</div>
			</div>
		</div>
	);
}
