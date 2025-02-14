import React from "react";
import {CircularText} from "./Icons";
import Link from "next/link";

const HireMe = ({}) => {
	return (
		<div className="fixed left-4 right-4 flex items-center justfy-center overflow-hidden">
			<div className="w-48 h-auto flex items-center justify-center relative">
				<CircularText
					className={"fill-dark dark:fill-light animate-spin-slow"}
				/>
				<Link
					href="mailto:Amidavid01@gmail.com"
					className="flex dark:bg-light dark:text-dark   border transition-all hover:text-dark items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-white shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold text-md"
				>
					Hire me
				</Link>
			</div>
		</div>
	);
};

export default HireMe;
