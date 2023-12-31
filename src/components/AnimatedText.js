import React from "react";
import {motion} from "framer-motion";

const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};
const singleword = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};
const AnimatedText = ({text, className = ""}) => {
	return (
		<div className="w-full dark:text-light mx-auto py-2 flex items-center justify-center sm:py-0 text-center overflow-hidden">
			<motion.h1
				variants={quote}
				initial="initial"
				animate="animate"
				className={`${className} dark:text-light inline-block w-full text-dark font-bold capitalize text-8xl `}
			>
				{text.split(" ").map((word, index) => (
					<motion.span
						key={word + "-" + index}
						className="inline-block"
						variants={singleword}
						// initial="initial"
						// animate="animate"
					>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
