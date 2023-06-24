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
} from "react-icons/fi";

export default function Blog() {
	return (
		<div className="flex flex-col text-black">
			<div className="w-full card card-bordered shadow-lg p-4 mr-4">
				<p className="font-semibold text-lg mb-2">Analytics</p>
				<div></div>
				<div className="flex mt-3">
					<div className="flex flex-col mr-10">
						<div className="flex items-end">
							<p className="text-lg font-semibold mr-2">₹</p>
							<p className="text-4xl font-bold">832</p>
						</div>
						<p>WEEKLY EARNINGS</p>
					</div>
					<div className="flex flex-col">
						<div className="flex items-end">
							<FiUsers />
							<p className="ml-2 text-4xl font-bold">23</p>
						</div>
						<p>NEW CLIENTS</p>
					</div>
				</div>
			</div>
			<div className="w-full card card-bordered shadow-lg p-4">
				<p className="font-semibold text-lg mb-2">Blog</p>
				<div></div>
				<div className="flex">
					<div className="flex flex-col">
						<div className="flex">LATEST</div>
						<p className="text-lg font-semibold">
							What's special about my pots?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
