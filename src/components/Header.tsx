import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHamburger,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import ThemeToggler from "./ThemeToggler";
export default function Header() {
  return (
    <>
    <div id="home"></div>
      <header  className="fixed top-0 w-screen shadow-[0_5px_15px_rgba(0,_0,_0,_0.2)]  z-50 bg-[rgba(0,0,0,0.08)] backdrop-blur-[20px] ">
        <div className="container flex items-center justify-between py-8 m-auto ">
          <div className="flex justify-center items-center gap-x-32 *:font-extrabold *:tracking-wider ">


            <Link className="link " href={"#home"}>Home</Link>
            <Link className="link " href={"/"}>About</Link>
            <Link className="link " href={"/"}>Contact</Link>
            <Link className="link " href={"#projects"}>Projects</Link>
            <Link className="link " href={"/"}>Skills</Link>
          </div>
            <ThemeToggler />

        </div>
      </header>
    </>
  );
}
