import Link from "next/link";
import React, {use, useEffect, useState} from "react";
import Logo from "./Logo";
import {useRouter} from "next/router";
import {
	TwitterIcon,
	GithubIcon,
	PinterestIcon,
	LinkedInIcon,
	SunIcon,
	MoonIcon,
} from "./Icons";
import {motion} from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({href, title, className = ""}) => {
	const router = useRouter();
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`${
					router.asPath === href ? "w-full" : "w-0"
				} h-[1px] dark:bg-light dark:text-light inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}
			>
				&nbsp;
			</span>
		</Link>
	);
};
const CustomMobileLink = ({href, title, className = "", toggle}) => {
	const router = useRouter();
	const handleClick = () => {
		toggle();
		return router.push(href);
	};
	return (
		<button
			onClick={handleClick}
			href={href}
			className={`${className} relative group text-light dark:text-dark my-2`}
		>
			{title}
			<span
				className={`${
					router.asPath === href ? "w-full" : "w-0"
				} h-[1px] dark:bg-light dark:text-light inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}
			>
				&nbsp;
			</span>
		</button>
	);
};
const Navbar = () => {
	const [mode, setMode] = useThemeSwitcher();
	useEffect(() => {
		console.log(mode);
	}, [mode]);
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		return setIsOpen(!isOpen);
	};
	return (
		<header className="w-full relative dark:text-light px-32 py-8 font-normal flex items-center justify-between">
			<button
				onClick={handleClick}
				className=" justify-center hidden lg:flex items-center flex-col"
			>
				<span
					className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm ${
						isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
					}`}
				></span>
				<span
					className={` bg-dark  dark:bg-light transition-all duration-300 block  h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? "opacity-0" : "opacity-100"
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm ${
						isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
					} `}
				></span>
			</button>
			<div className="absolute left-[50%] translate-x-[-50%] top-2">
				<Logo />
			</div>

			<div className="w-full flex justify-between items-center lg:hidden">
				<nav className="">
					<CustomLink
						href="/"
						title="Home"
						c
						transition-all
						duration-300lassName="mr-4"
					/>
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
					<button
						className={`ml-3 flex items-center justify-center rounded-full p-1 ${
							mode === "light"
								? "bg-dark text-light"
								: "bg-light text-dark"
						} `}
						onClick={() =>
							setMode(mode === "dark" ? "light" : "dark")
						}
					>
						{mode === "dark" ? (
							<SunIcon className={"fill-dark"} />
						) : (
							<MoonIcon className={"fill-dark"} />
						)}
					</button>
				</nav>
			</div>
			{isOpen ? (
				<motion.div
					initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
					animate={{scale: 1, opacity: 1}}
					transition={{duration: 0.3}}
					className="min-w-[70vw] z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 flex-col flex justify-between items-center  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<nav className="flex flex-col items-center justify-center">
						<CustomMobileLink
							href="/"
							title="Home"
							transition-all
							duration-300lassName="mr-4"
							toggle={handleClick}
						/>
						<CustomMobileLink
							href="/about"
							title="About"
							className=""
							toggle={handleClick}
						/>
						<CustomMobileLink
							href="/projects"
							title="Projects"
							className=""
							toggle={handleClick}
						/>
						<CustomMobileLink
							href="/articles"
							title="Articles"
							className=""
							toggle={handleClick}
						/>
					</nav>

					<nav className="flex mt-2 items-center justify-center flex-wrap">
						<motion.a
							target={"_blank"}
							whileHover={{y: -2}}
							whileTap={{scale: 0.9}}
							href="/"
							className="w-6 sm:mx-1 mr-3"
						>
							<TwitterIcon />
						</motion.a>
						<motion.a
							target={"_blank"}
							whileHover={{y: -2}}
							whileTap={{scale: 0.9}}
							href="/"
							className="w-6  sm:mx-1 mx-3"
						>
							<LinkedInIcon />
						</motion.a>
						<motion.a
							target={"_blank"}
							whileHover={{y: -2}}
							href="/"
							whileTap={{scale: 0.9}}
							className="w-6 sm:mx-1 mx-3 rounded-full bg-light dark:bg-dark"
						>
							<GithubIcon />
						</motion.a>
						<motion.a
							whileTap={{scale: 0.9}}
							target={"_blank"}
							whileHover={{y: -2}}
							href="/"
							className="w-6 sm:mx-1 ml-3"
						>
							<PinterestIcon />
						</motion.a>
						<button
							className={`ml-3 flex items-center justify-center rounded-full p-1 ${
								mode === "light"
									? "bg-dark text-light"
									: "bg-light text-dark"
							} `}
							onClick={() =>
								setMode(mode === "dark" ? "light" : "dark")
							}
						>
							{mode === "dark" ? (
								<SunIcon className={"fill-dark"} />
							) : (
								<MoonIcon className={"fill-dark"} />
							)}
						</button>
					</nav>
				</motion.div>
			) : null}
		</header>
	);
};

export default Navbar;
