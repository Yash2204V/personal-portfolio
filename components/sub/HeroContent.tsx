"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Socials } from "@/constants";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full w-full flex flex-row items-center justify-center px-20 mt-40 z-[20]"
    >
      <div className="flex flex-col gap-5 justify-center m-auto text-start items-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-center flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white w-[80vw] max-w-[600px] h-auto justify-center items-center"
        >
          <span>
            Crafting solution, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              excellence{" "}
            </span>
            is here
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-center text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website development. Check out my projects and skills.
        </motion.p>
        <motion.div className="flex gap-4 items-center">
          <motion.a
            variants={slideInFromLeft(1)}
            className="px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Email Me
          </motion.a>
            <motion.div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <motion.div
              key={social.name}
              variants={slideInFromLeft(1.2)}
              >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
              </motion.div>
            ))}
            </motion.div>
        </motion.div>
        
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden md:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
