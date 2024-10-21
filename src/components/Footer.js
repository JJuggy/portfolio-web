import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full dark:text-light dark:border-light  border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="pt-8 flex items-center justify-between ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      </Layout>
    </footer>
  );
};

export default Footer;
