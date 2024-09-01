import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>

            <footer className="top-0 w-screen  relative ">
        <div className="absolute  left-[50px] dark:opacity-100 opacity-45 bottom-[112px] shadow-[0px_0px_1000px_165px_#2563ebc9] bg-transparent z-0"></div>

                <div className="container flex justify-between items-center  *:font- *:tracking-wider pb-8 m-auto ">
                        <p>@2024 Jimam Tamimi</p>

                        <Link className="link " href={"mailto:jimamtamimi12@gmail.com"}>jimamtamimi12@gmail.com</Link> 

                </div>
            </footer>

        </>
    )
}
