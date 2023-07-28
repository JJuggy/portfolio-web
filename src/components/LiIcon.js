import {useScroll, motion} from "framer-motion";
import React from "react";

const LiIcon = ({reference}) => {
	const {scrollYProgress} = useScroll({
		target: reference,
		offset: ["center end", "center center"],
	});
	return (
		<figure className="absolute left-0 stroke-dark">
			<svg className="-rotate-90 "  width="75" height="75" viewBox="0 0 100 100">
				<circle
					cx="75"
					cy="50"
					r="20"
					className="stroke-primary dark:stroke-light dark:stroke-2  stroke-1 fill-none"
				/>
				<motion.circle
					style={{pathLength: scrollYProgress}}
					cx="75"
					cy="50"
					r="20"
					className="dark:fill-dark  stroke-[5px] fill-light"
				/>
				<circle
					cx="75"
					cy="50"
					r="10"
					className=" animate-pulse stroke-1 fill-primary"
				/>
			</svg>
		</figure>
	);
};

export default LiIcon;
