import Image from 'next/image'
import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import Form from './Form'

export default function Projects() {
    return (
        <section className="relative pt-56 -mt-8  pb-20 bg-center bg-cover" id='projects' >
            <Image
                layout="fill"
                style={{ zIndex: "-1", objectFit: "cover", objectPosition: "center", }}
                src={"/contact.webp"}
                className='mix-blend-screen dark:mix-blend-color-dodge '
                alt={"World Map Image"}
            />
            <div className="container flex flex-col items-center justify-center m-auto space-y-10">
                <h1 className='text-5xl font-bold tracking-wide text-center '>Contact Me</h1>
                <div className='flex flex-wrap items-start justify-center w-full space-y-12 md:space-y-0 md:justify-between'>




                </div>
                <Form />

            </div>
        </section>
    )
}
