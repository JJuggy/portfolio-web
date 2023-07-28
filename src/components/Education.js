import React, {use, useRef} from "react";
import {motion, useScroll} from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({type, time, place, info}) => {
	const ref = useRef();
	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 dark:text-light last:mb-0 w-[60%] mx-auto flex-col flex items-center justify-between"
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{y: 50}}
				whileInView={{y: 0}}
				transition={{duration: 0.5, type: "spring"}}
			>
				<h3 className="capitalize dark:text-light font-bold text-2xl">{type}&nbsp;</h3>
				<span className="capitalize dark:text-light fonr-medium text-dark/75">
					{time} | {place}
				</span>
				<p className="font-medium dark:text-light w-full">{info}</p>
			</motion.div>
		</li>
	);
};
const Education = () => {
	const ref = useRef();
	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});
	return (
		<div className="my-64">
			<h2 className="font-bold dark:text-light  text-8xl mb-32 w-full text-center">
				Education
			</h2>
			<div className="w-[75%] mx-auto relative">
				<motion.div
					style={{scaleY: scrollYProgress}}
					ref={ref}
					className="absolute dark:bg-light left-9 top-0 h-full bg-dark origin-top w-[4px]"
				/>
				<ul className="w-full flex flex-col items-start ml-4 justify-between">
					<Details
						type="Bachelor Of Science In Electrical And Electronics Engineering"
						place={"University Of Lagos"}
						time="2016-2020"
						address="Lagos, Nigeria"
						//yet to put info
						info=""
					/>
					<Details
						type="High School Diploma"
						place={"Elias International Secondary School"}
						time="2016-2020"
						address="Lagos, Nigeria"
						//yet to put info
						info=""
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
