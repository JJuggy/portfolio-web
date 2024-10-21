import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/piqy.jpg";
import project2 from "../../public/images/projects/a-good-shout.jpg";
import project3 from "../../public/images/projects/piqy-discover-more.webp";
import { motion } from "framer-motion";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full relative p-12 flex items-center justify-between rounded-3xl rounded-br-2xl border-solid border-dark bg-white shadow-2xl">
      <div className="absolute top-0 -right-3  rounded-br-3xl -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />

      <Link
        target={"_black"}
        href={link}
        className="w-[40%] cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={image}
          alt="title"
          className=" w-[450px] h-[400px] rounded-md  "
        />
      </Link>
      <div className="flex flex-col items-start    justify-between pl-6">
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
          <Link
            target={"_black"}
            href={link}
            className="rounded bg-dark text-light p-2 text-lg px-6 font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center p-6 relative justify-between rounded-2xl border-solid border-dark bg-light shadow-2xl">
      <div className="absolute top-0 -right-3 rounded-br-3xl -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />

      <Link
        target={"_black"}
        href={link}
        className="w-fullcursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={image}
          alt="title"
          className="w-full h-auto "
        />
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
        <meta name="projects done" content="links and looks of projects done" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24  space-y-6">
            <div className="col-span-12 space-y-6">
              <FeaturedProject
                title="PIQY WEB"
                type="Featured Project"
                summary="A restaurant curative application that helps users discover dining options based on their preferences, built with Next JS."
                image={project1}
                link="https://piqy.co.uk"
                github="/"
              />
              <FeaturedProject
                title="PIQY MOBILE"
                type="Featured Project"
                summary="A restaurant curative website that helps users discover dining options based on their preferences, built with React Native."
                image={project3}
                link="https://apps.apple.com/gb/app/piqy/id6446364127"
                github="/"
              />
              <FeaturedProject
                title="A GOOD SHOUT"
                type="Featured Project"
                summary="Built the landing pages and all screen ensuit for the website"
                image={project2}
                link="https://agoodshout.co.uk"
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
