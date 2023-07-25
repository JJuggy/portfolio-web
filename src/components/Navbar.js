import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import {useRouter} from "next/router";
import {TwitterIcon, GithubIcon, PinterestIcon, LinkedInIcon} from "./Icons";
import {motion} from "framer-motion";

const CustomLink = ({href, title, className = ""}) => {
	const router = useRouter();
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`${
					router.asPath === href ? "w-full" : "w-0"
				} h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}
			>
				&nbsp;
			</span>
		</Link>
	);
};
const Navbar = () => {
	return (
		<header className="w-full px-32 py-8 font-normal flex items-center justify-between">
			<nav className="">
				<CustomLink href="/" title="Home" className="mr-4" />
				<CustomLink href="/about" title="About" className="mx-4" />
				<CustomLink
					href="/projects"
					title="Projects"
					className="mx-4"
				/>
				<CustomLink
					href="/articles"
					title="Articles"
					className="ml-4"
				/>
			</nav>

			<div className="absolute left-[50%] translate-x-[-50%] top-2">
				<Logo />
			</div>

			<nav className="flex items-center justify-center flex-wrap">
				<motion.a
					target={"_blank"}
					whileHover={{y: -2}}
					whileTap={{scale: 0.9}}
					href="/"
					className="w-6 mr-3"
				>
					<TwitterIcon />
				</motion.a>
				<motion.a
					target={"_blank"}
					whileHover={{y: -2}}
					whileTap={{scale: 0.9}}
					href="/"
					className="w-6 mx-3"
				>
					<LinkedInIcon />
				</motion.a>
				<motion.a
					target={"_blank"}
					whileHover={{y: -2}}
					href="/"
					whileTap={{scale: 0.9}}
					className="w-6 mx-3"
				>
					<GithubIcon />
				</motion.a>
				<motion.a
					whileTap={{scale: 0.9}}
					target={"_blank"}
					whileHover={{y: -2}}
					href="/"
					className="w-6 ml-3"
				>
					<PinterestIcon />
				</motion.a>
			</nav>
		</header>
	);
};

export default Navbar;