import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxButton,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-gray-200 p-6" id="about-me">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <h2 className="font-bold text-3xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Community</h2>
                <a href="#" className="flex items-center mb-2 hover:text-white text-2xl">
                    <FaYoutube />
                    <span className="ml-2">YouTube</span>
                </a>
                <a href="#" className="flex items-center mb-2 hover:text-white text-2xl">
                    <RxGithubLogo />
                    <span className="ml-2">GitHub</span>
                </a>
                <a href="#" className="flex items-center mb-2 hover:text-white text-2xl">
                    <RxDiscordLogo />
                    <span className="ml-2">Discord</span>
                </a>
            </div>
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <h2 className="font-bold text-3xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Social Media</h2>
                <a href="#" className="flex items-center mb-2 hover:text-white text-2xl">
                    <RxInstagramLogo />
                    <span className="ml-2">Instagram</span>
                </a>
                <a href="#" className="flex items-center mb-2 hover:text-white text-2xl">
                    <RxTwitterLogo />
                    <span className="ml-2">Twitter</span>
                </a>
                <a href="#" className="flex items-center mb-2 hover:text-white text-2xl">
                    <RxLinkedinLogo />
                    <span className="ml-2">LinkedIn</span>
                </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
                <h2 className="font-bold text-3xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">About</h2>
                <a href="https://buymeacoffee.com/yashv22010a" target='_blank' className="mb-2 cursor-pointer hover:text-white text-2xl">
                    Buy me a Coffee, Cold❄️
                </a>
                <a href="/about" className="mb-2 cursor-pointer hover:text-white text-2xl">
                    About Me
                </a>
                <a href="/contact" className="mb-2 cursor-pointer hover:text-white text-2xl">
                    Contact
                </a>
            </div>
        </div>
        <div className="text-center mt-6">
            &copy; Yash Varma {new Date().getFullYear()} Inc. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer