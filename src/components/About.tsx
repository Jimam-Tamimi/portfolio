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

export default function About() {

  return (
    <>

      <section id="about" className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-[#eaefff] to-[#ffe9f3] dark:from-[#020e32] dark:to-[#320017] dark:text-white ">
        <div className="absolute  left-[212px] top-[212px] shadow-[0px_0px_300px_135px_#2563eb] bg-transparent z-0"></div>
        {/* <div className="absolute  right-[212px] top-[412px] shadow-[0px_0px_230px_120px_#eb25a6] bg-transparent z-0"></div> */}
        {/* <div className="absolute  left-[0] top-[0] shadow-[0px_143px_12810px_297px_#2563eb7d] bg-transparent z-0"></div> */}
        <div className="absolute  right-[0] bottom-[0] shadow-[0px_143px_12810px_297px_#eb25a67d] bg-transparent z-0"></div>

        <div className="container flex flex-col-reverse items-center justify-between mx-auto md:flex-row  md:space-x-5 z-[1]">
          <div className="flex flex-col items-center justify-center my-5 text-center md:items-start md:text-start md:w-7/12 space-y-7 md:space-y-9 lg:space-y-10">
            <h1 className="text-5xl font-bold leading-snug tracking-wide md:text-6xl lg:text-7xl">
              Hi 👋, I'm <br className="md:hidden" />
              <span className="dark:bg-gradient-to-br dark:from-[#eaefff] dark:to-[#ffe9f3] text-blue-600  dark:text-transparent dark:bg-clip-text">
                Jimam Tamimi
              </span>
            </h1>

            <p className="max-w-lg font-medium leading-7 tracking-wide lg:tracking-normal sm:max-w-xl md:max-w-2xl lg:max-w-3xl lg:leading-10 lg:text-lg">
              Self-taught, Well-qualified and Hardworking Full Stack Web
              Developer familiar with a wide range of programming utilities and
              languages. Also a part-time content creator. Able to handle any
              part of the process with ease. Have good communication skills
            </p>
            <button
              // onClick={(e) => localStorage.setItem("theme", "dark")}
              className="  bg-blue-600 text-lg text-white font-semibold py-3 px-6 tracking-wide  rounded-md hover:bg-blue-700 hover:scale-[1.03] transition-all duration-300 active:bg-blue-500 active:scale-95">
              <Link href={"/contact/"}>Download Resume</Link>
            </button>
            <div
              className="relative flex space-x-12 -2xl lg:mt-11 top-2 ">
              <Link
                className=" hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"#"}>
                <FaFacebook />
              </Link>
              <Link
                className="hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"#"}>
                <FaGithub />
              </Link>
              <Link
                className="hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"#"}>
                <FaYoutube />
              </Link>
              <Link
                className="hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"#"}>
                <FaLinkedin />
              </Link>
              <Link
                className="hover:text-blue-700 transition-all hover:scale-[1.15] duration-300 active:scale-95 active:text-blue-400"
                href={"#"}>
                <FaInstagram />
              </Link>
              <div
                id="light-1"
                className="absolute  shadow-[0px_0px_165px_50px_#25eb62] bg-transparent z-0"></div>
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="relative my-5 border-8 border-blue-600 rounded-full w-72 h-72 md:w-full">
              <div
                id="light-2"
                className="absolute  left-[50%] top-[70%]  shadow-[0px_0px_165px_50px_#eb25e1] bg-transparent z-0"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
