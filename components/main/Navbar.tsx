import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between sm:px-[10px] gap-4 sm:gap-0">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Yash Varma
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#projects" className="cursor-pointer text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              Projects
            </a>
            <a href="#skills" className="cursor-pointer text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              Skills
            </a>
            <a href="#about-me" className="cursor-pointer text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
