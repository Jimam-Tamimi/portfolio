"use client"

import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import Link from 'next/link' 

export default function MobileMenu({ menuLinks }: any) {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className='lg:hidden block z-20'>
                <Hamburger  toggled={show} onToggle={toggled => setShow(prevState => { return !prevState})} />
            </div>
            <div className={`lg:hidden flex justify-center items-center gap-x-32 flex-col fixed top-0 left-0 w-[76%] gap-[10%] h-screen *:font-extrabold *:tracking-wider  shadow-[0_5px_15px_rgba(0,_0,_0,_0.2)]  z-10 bg-[rgba(0,0,0,0.08)]  backdrop-blur-[15px] transition-all duration-300 ease-in-out
                ${show? "translate-x-0  opacity-100" : "-translate-x-full  opacity-0"}
            
            `}>

                {
                    menuLinks.map((menu: any, i:any) => (
                        <>
                            <Link key={i} onClick={ e => setShow(false)} className="link " href={menu?.link}>{menu?.name}</Link>
                        </>

                    ))
                }

            </div>
        </>
    )
}
