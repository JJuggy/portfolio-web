import AnimatedText from "@/components/AnimatedText";
import {GithubIcon} from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
const FeaturedProject = ({type, title, summary, image, link, github}) => {
	return (
		<article className="w-full relative p-12 flex items-center justify-between rounded-3xl rounded-br-2xl border-solid border-dark bg-white shadow-2xl">
			<div className="absolute top-0 -right-3 rounded-br-3xl -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />

			<Link
				target={"_black"}
				href={link}
				className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
			>
				<Image src={image} alt="title" className="w-full h-auto " />
			</Link>
			<div className="w-1/2 flex flex-col items-start  justify-between pl-6">
				<span className="text-primary font-medium text-xl">{type}</span>
				<Link
					target={"_black"}
					href={link}
					className="hover:underline hover:underline-offset-2 transition-all duration-300"
				>
					<h2 className="my-2  w-full text-left text-4xl font-bold ">
						{title}
					</h2>
				</Link>
				<p className="my-2 font-medium text-dark ">{summary}</p>
				<div className="mt-2 flex items-center ">
					<Link target={"_black"} href={github} className="w-10">
						<GithubIcon />
					</Link>
					<Link
						target={"_black"}
						href={link}
						className="ml-4 rounded bg-dark text-light p-2 text-lg px-6 font-semibold"
					>
						Visited Project
					</Link>
				</div>
			</div>
		</article>
	);
};
const Project = ({type, title, summary, image, link, github}) => {
	return (
		<article className="w-full flex flex-col items-center p-6 relative justify-between rounded-2xl border-solid border-dark bg-light shadow-2xl">
			<div className="absolute top-0 -right-3 rounded-br-3xl -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />

			<Link
				target={"_black"}
				href={link}
				className="w-fullcursor-pointer overflow-hidden rounded-lg"
			>
				<Image src={image} alt="title" className="w-full h-auto " />
			</Link>
			<div className="w-full flex flex-col items-start  justify-between mt-4">
				<span className="text-primary font-medium text-xl">{type}</span>
				<Link
					target={"_black"}
					href={link}
					className="hover:underline hover:underline-offset-2 transition-all duration-300"
				>
					<h2 className="my-2  w-full text-left text-3xl font-bold ">
						{title}
					</h2>
				</Link>
				<div className="mt-2 flex items-center justify-between w-full">
					<Link
						target={"_black"}
						href={link}
						className=" rounded underline underline-offset-1  text-lg px-6 font-semibold"
					>
						Visit
					</Link>
					<Link target={"_black"} href={link} className="w-10">
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	);
};
const projects = () => {
	return (
		<>
			<Head>
				<title>Projects</title>
				<meta
					name="projects done"
					content="links and looks of projects done"
				/>
			</Head>
			<main className="w-full mb-16 flex flex-col items-center justify-center">
				<Layout className="pt-16 ">
					<AnimatedText
						text="Imagination Trumps Knowledge!"
						className="mb-16"
					/>
					<div className="grid grid-cols-12 gap-24 ">
						<div className="col-span-12">
							<FeaturedProject
								title="Crypto Screener Application"
								type="Featured Project"
								summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
							It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
							local currency."
								image={project1}
								link="/"
								github="/"
							/>
						</div>
						<div className="col-span-6 gap-y-32">
							<Project
								title="Crypto Screener Application"
								type="Featured Project"
								summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
							It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
							local currency."
								image={project1}
								link="/"
								github="/"
							/>
						</div>
						<div className="col-span-6">
							<Project
								title="Crypto Screener Application"
								type="Featured Project"
								summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
							It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
							local currency."
								image={project1}
								link="/"
								github="/"
							/>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
