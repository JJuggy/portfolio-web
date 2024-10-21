import React from "react";
import {motion} from "framer-motion";

const Skill = ({name, positionX, positionY}) => {
	return (
		<motion.div
			whileHover={{scale: 1.05}}
			className="flex items-center dark:bg-light dark:text-dark absolute  cursor-pointer justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark"
			initial={{x: 0, y: 0}}
			whileInView={{x: positionX, y: positionY}}
			transition={{duration: 1.5}}
			viewport={{once: true}}
		>
			{name}
		</motion.div>
	);
};
const Skills = () => {
	return (
		<>
			<h2 className="font-bold dark:text-light text-8xl w-full mt-64 text-center">
				Skills
			</h2>
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
				<motion.div
					whileHover={{scale: 1.05}}
					className="flex dark:bg-light dark:text-dark items-center cursor-pointer justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
				>
					Web
				</motion.div>
				<Skill name="CSS" positionX="-5vw" positionY="-9vw" />
				<Skill name="Redux" positionX="-5vw" positionY="-18vw" />
				<Skill name="HTML" positionX="20vw" positionY="2vw" />
				<Skill name="Unit Testing" positionX="34vw" positionY="2vw" />
				<Skill name="JavaScript" positionX="0vw" positionY="14vw" />
				<Skill name="React Native" positionX="-17vw" positionY="19vw" />
				<Skill name="TypeScript" positionX="9vw" positionY="22vw" />
				<Skill name="React" positionX="-20vw" positionY="2vw" />
				<Skill name="Next JS" positionX="-35vw" positionY="2vw" />
				<Skill name="Mongo DB" positionX="32vw" positionY="-10vw" />
				<Skill name="Node JS" positionX="33vw" positionY="-18vw" />
				<Skill
					name="Tailwind CSS"
					positionX="-20vw"
					positionY="-13vw"
				/>
			</div>
		</>
	);
};

export default Skills;
