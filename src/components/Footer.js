import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
			<Layout className="pt-8 flex items-center justify-between ">
				<span>
					{new Date().getFullYear()} &copy; All Rights Reserved
				</span>
				<div className="flex items-center">
					Build with{" "}
					<span className="text-primary px-1 text-2xl">&#9825;</span>{" "}
					by &nbsp;
					<Link href="/" className="underline underline-offset-2">
						Code Bucks
					</Link>
				</div>
				<Link href="/" className="underline underline-offset-2">
					Say hello
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
