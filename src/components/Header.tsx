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
import MobileMenu from "./Header/MobileMenu";

export default function Header() {
  const menuLinks = [
    { link: "#home", name: "Home" },
    { link: "#skills", name: "Skills" },
    { link: "#projects", name: "Projects" },
    { link: "#testimonials", name: "Testimonials" },
    { link: "#contact", name: "Contact" },
  ]

  return (
    <>
      <div id="home"></div>
      <header className="fixed top-0 w-screen lg:shadow-[0_5px_15px_rgba(0,_0,_0,_0.2)]  z-50 bg-[rgba(0,0,0,0.08)] lg:backdrop-blur-[15px] backdrop-filter-none ">
        <div className="container flex items-center justify-between py-5 lg:py-8 m-auto ">

          <MobileMenu menuLinks={menuLinks} />
          <div className="lg:flex hidden justify-center items-center gap-x-32 *:font-extrabold *:tracking-wider ">

            {
              menuLinks.map(menu => (
                <>
                  <Link className="link " href={menu.link}>{menu.name}</Link>
                </>

              ))
            }
          </div>
          <ThemeToggler />

        </div>
      </header>
    </>
  );
}
