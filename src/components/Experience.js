import React, { use, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      className="my-8 dark:text-light first:mt-0 last:mb-0 w-[60%] mx-auto flex-col flex items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            className="text-primary capitalize"
            target={"_blank"}
            href={companyLink}
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize fonr-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold dark:text-light text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute dark:bg-light left-9 top-0 h-full bg-dark origin-top w-[4px]"
        />
        <ul className="w-full flex flex-col items-start ml-4 justify-between">
          <Details
            position="Front End Developer"
            company={"A Good Shout LTD"}
            time="2021 - present"
            address="London, UK"
            work=" I maintained and implemented new features on existing React Native and ReactJS
codebases, working closely with backend developers and product designers "
          />
          <Details
            position="Lead Front end engineer "
            company={"Prime bazaar"}
            time="Contract"
            address="Lagos, Nigeria"
            work="Developed the REST APIs, managed the database migration, deployment to
production, and maintained API documentation"
          />
          <Details
            position="Back End engineer "
            company={"Hemify"}
            time="Contract"
            address="Lagos, Nigeria"
            work="Developed the REST APIs, managed the database migration, deployment to
production, and maintained API documentation."
          />
          <Details
            position="Front End Developer"
            company={"Afroverified"}
            time="2018 - 2019"
            address="Lagos, Nigeria"
            work="Utilised React and Redux to build responsive user interfaces, while working with
UX/UI designers to ensure a consistent, visually appealing experience and debugging
front-end issues"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
