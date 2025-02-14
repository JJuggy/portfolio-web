import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-1.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef();
  const MotionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true });
  const SpringValue = useSpring(MotionValue, {
    duration: 3000,
  });
  useEffect(() => {
    isInView && MotionValue.set(value);
  }, [isInView, MotionValue, value]);
  useEffect(() => {
    SpringValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [SpringValue, value]);

  return (
    <span className="dark:text-light" ref={ref}>
      {value}
    </span>
  );
};

const about = () => {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="About Juggy" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className={"pt-16"}>
          <AnimatedText text="Passion Fuels Purpose" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase dark:text-light text-dark/75">
                Biography
              </h2>
              <p className="font-medium dark:text-light">
                - Hi, I amm Amiolemen David, a Software developer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences. With 4 years of experience in the field. I am
                always looking for new and innovative ways to bring my clients 
                visions to life.
              </p>
              <p className=" my-4 font-medium dark:text-light">
                {" "}
                I believe that design is about more than just making things look
                pretty – it is about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium dark:text-light">
                {" "}
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 dark:bg-dark relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
              <Image
                src={profilePic}
                alt="Juggy"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block dark:text-light text-7xl font-bold">
                  <AnimatedNumbers value={9} />+
                </span>
                <h2 className="text-xl dark:text-light font-medium capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block dark:text-light text-7xl font-bold">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className="text-xl dark:text-light font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block dark:text-light text-7xl font-bold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium dark:text-light capitalize text-dark/75">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
