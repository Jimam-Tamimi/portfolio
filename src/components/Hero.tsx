import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaHamburger,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Heading from "./hero/Heading";

export default function Hero() {
  return (
    <>
      <section id="home" className="flex items-center justify-center w-screen mb-40 mt-44 ">
        <div className="absolute  left-[212px] top-[212px] shadow-[0px_0px_300px_135px_#2563eb] bg-transparent z-0"></div>
        {/* <div className="absolute  right-[212px] top-[412px] shadow-[0px_0px_230px_120px_#eb25a6] bg-transparent z-0"></div> */}
        {/* <div className="absolute  left-[0] top-[0] shadow-[0px_143px_12810px_297px_#2563eb7d] bg-transparent z-0"></div> */}
        <div className="absolute  right-[0] bottom-[0] shadow-[0px_143px_12810px_297px_#eb25a67d] bg-transparent z-0"></div>

        <div className=" flex flex-col-reverse items-center justify-center mx-auto md:flex-row  md:space-x-5 z-[1]">
          <div className="container flex flex-col items-center justify-center my-8 text-center space-y-7 md:space-y-9 lg:space-y-12 ">
            <Heading />
            <p className="max-w-lg font-medium leading-7 tracking-wide lg:tracking-normal sm:max-w-xl md:max-w-2xl lg:max-w-3xl lg:leading-10 lg:text-lg">
              Self-taught, Well-qualified and Hardworking Full Stack Web
              Developer familiar with a wide range of programming utilities
              and languages. Also a part-time content creator. Able to
              handle any part of the process with ease. Have good
              communication skills
            </p>
            <button
              className=" !mt-16   text-lg text-white font-semibold py-3 px-6 tracking-wide   transition-all duration-300 
              
              btn-hover-animation
              "

            >
              <Link href={"https://drive.google.com/file/d/14Of-l1NVJU35AAT2SvMlF760HzeVGN2_/view?usp=sharing"} target="_blank">Download Resume</Link>
            </button>
            <div className="relative flex space-x-12 text-2xl !mt-24  ">
              <Link
                className=" hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"https://www.facebook.com/JimamFB/"} target="_blank" >
                <FaFacebook />
              </Link>
              <Link
                className="hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"https://github.com/Jimam-Tamimi"} target="_blank" >
                <FaGithub />
              </Link>
              <Link
                className="hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"https://www.youtube.com/@Jimam"} target="_blank" >
                <FaYoutube />
              </Link>
              <Link
                className="hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"https://www.linkedin.com/in/jimam-tamimi-6b5a72324/"} target="_blank" >
                <FaLinkedin />
              </Link>
              <Link
                className="hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"https://www.instagram.com/jimam_tamimi/"} target="_blank" >
                <FaInstagram />
              </Link>
              <div className="absolute  shadow-[0px_0px_165px_50px_#25eb62] bg-transparent z-0"></div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
