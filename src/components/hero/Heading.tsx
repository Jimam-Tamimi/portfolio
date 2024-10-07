"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Heading() {
    return (
        <>
            <h1 style={{lineHeight: '1.5'}} className="text-5xl font-bold tracking-wide md:text-6xl lg:text-7xl">





                Hi 👋,
                <span className="bg-gradient-to-br  from-[#02103d] to-[#1e00a3] dark:from-[#eaefff] dark:to-[#ffcfe4] space-y-10  text-transparent bg-clip-text ">
                    I'm <br />
                    <TypeAnimation
                        sequence={[
                            'Jimam Tamimi', // Types 'One'
                            1000, // Waits 1s
                            'A Web Developer', // Deletes 'One' and types 'Two'
                            1500, // Waits 1.5s
                            'An Application Developer', // Deletes 'One' and types 'Two'
                            1500, // Waits 1.5s
                            'A Conent Creator', // Types 'Three' without deleting 'Two'
                            1500, // Waits 1.5s

                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className=''
                    />
                </span>

            </h1>


        </>
    )
}
