import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";

const Logo = () => {
	const MotionLink = motion(Link);
	return (
		<div className="flex items-center justify-center mt-2">
			<MotionLink
				whileHover={{
					backgroundColor: [
						"#121212",
						"rgba(131,58,180,1)",
						"rgba(253,29,29,1)",
						"rgba(252,176,69,1)",
						"rgba(131,58,180,1)",
						"#121212",
					],
					transition: {
						duration: 1,
						repeat: Infinity,
					},
				}}
				href="/"
				className="w-16 h-16 dark:border-light border border-solid border-transparent dark:border-light bg-dark text-light flex items-center justify-center text-xxl font-bold rounded-full"
			>
				AD
			</MotionLink>
		</div>
	);
};

export default Logo;
