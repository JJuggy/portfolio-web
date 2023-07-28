import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, {useRef} from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import {motion, useMotionValue} from "framer-motion";

const FramerImage = motion(Image);
const FeaturedArticle = ({image, title, time, summary, link}) => {
	return (
		<li className="col-span-1 relative w-full p-4 bg-light border border-solid border-dark rounded-2xl ">
			<div className="absolute top-0 -right-3 rounded-br-3xl -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />
			<Link
				target={"_black"}
				href={link}
				className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
			>
				<FramerImage
					whileHover={{scale: 1.05}}
					transition={{duration: 0.2}}
					src={image}
					alt="title"
					className="w-full h-auto "
				/>
			</Link>
			<Link href={link} target="_blank">
				<h2 className="capitalize mt-4 text-2xl font-bold my-2 hover:underline">
					{title}
				</h2>
				<p className="text-sm mb-2 ">{summary}</p>
				<span className="text-primary font-semibold">{time}</span>
			</Link>
		</li>
	);
};
const MovingImage = ({title, img, link}) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const imageRef = useRef(null);
	function handleMouse(event) {
		imageRef.current.style.display = `inline-block`;
		x.set(event.pageX);
		y.set(-10);
	}
	function handleMouseLeave(event) {
		imageRef.current.style.display = `none`;
		x.set(0);
		y.set(0);
	}
	return (
		<Link
			onMouseMove={handleMouse}
			onMouseLeave={handleMouseLeave}
			href={link}
			target="_blank"
		>
			<h2 className="capitalize font-semibold text-xl hover:underline">
				{title}
			</h2>
			<FramerImage
				initial={{opacity: 0}}
				whileInView={{opacity: 1, transition: {duration: 0.2}}}
				style={{
					x: x,
					y: y,
				}}
				ref={imageRef}
				src={img}
				alt={title}
				className="z-10 w-96 h-auto hidden absolute rounded-lg"
			/>
		</Link>
	);
};
const Article = ({date, img, title, link}) => {
	return (
		<motion.li
			initial={{y: 200}}
			whileInView={{y: 0, transition: {duration: 0.5, ease: "easeInOut"}}}
			viewport={{once: true}}
			className="relative border-r-4  border-b-4 w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark"
		>
			<MovingImage title={title} img={img} link={link} />
			<span className="text-primary dark:text-primaryDark font-semibold pl-4 ">
				{date}
			</span>
		</motion.li>
	);
};
const articles = () => {
	return (
		<>
			<Head>
				<title>About page</title>
				<meta name="description" content="About Juggy" />
			</Head>
			<main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
				<Layout className="pt-16">
					<AnimatedText
						text="Words Can Change The World! "
						className="mb-16 pt-0"
					/>
					<ul className="grid grid-cols-2 gap-16">
						<FeaturedArticle
							title=" Build A Custom Pagination Component In Reactjs From Scratch"
							summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
							time=" 9 min read"
							link="/"
							image={article1}
						/>
						<FeaturedArticle
							title=" Build A Custom Pagination Component In Reactjs From Scratch"
							summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
							time=" 9 min read"
							link="/"
							image={article2}
						/>
					</ul>
					<h2 className="font-bold dark:text-light text-4xl w-full text-center my-16 mt-32 ">
						All Articles
					</h2>

					<ul>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							img={article3}
							date="March 21, 2021"
							link="/"
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							img={article3}
							date="March 21, 2021"
							link="/"
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							img={article3}
							date="March 21, 2021"
							link="/"
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							img={article3}
							date="March 21, 2021"
							link="/"
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							img={article3}
							date="March 21, 2021"
							link="/"
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							img={article3}
							date="March 21, 2021"
							link="/"
						/>
					</ul>
				</Layout>
			</main>
		</>
	);
};

export default articles;
