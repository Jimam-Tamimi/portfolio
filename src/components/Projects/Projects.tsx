"use client"
import { splitArrayRoundRobin } from '@/helpers'
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

type ProjectType = {
    image: string,
    name: string,
    description: string,
    sourceCode?: string,
    demo?: string,
    liveWeb?: string,
}

const projects: ProjectType[] = [
    {
        image: "/projects/tic tac toe.webp",
        name: "Tic Tac Toe",
        description: " This was an online Online Multiplayer Tic Tac Toe Game where 2 people could create an isolated room and generate a room code. Then they can play the Tic Tac Toe game with each other. <br /> I have used Django Channels to implement WebSockets because I had to Stream the game Data in Real Time.",
        sourceCode: "https://github.com/jimam-tamimi/creating-a-tic-tac-toe-game-using-django-channels-ty",
        demo: "https://youtu.be/LPCy1bKN-bE?list=PL90Q7SlTaUyl2FJGDBApGGvPBC3KwQd73",
        liveWeb: ""
    },
    {
        image: "/projects/ransomeware.jpg",
        name: "Advance Ransomware",
        description: "This was ransomware created in Python. If the victim somehow runs the encrypt.exe file then all the files in his computer will be encrypted with a key and then the program will send that key and some other information about the PC to the server and save it into its database. then the server will return the ID to the victim's computer and the ID will be saved in his computer. <br />After I get some ransome (which I am never going to do obviously) I will give him the decrypt.exe file and the victim can run that program to decrypt all his files.<br />It was a fun project I made for my YouTube channel.",
        sourceCode: "https://github.com/jimam-tamimi/ransomware-django",
        demo: "https://youtu.be/nhsq3OcSLro?list=PLsVwvQrt9P05H2dUeNFJoEBQ01fRe7p3V",
        liveWeb: ""
    },
    {
        image: "/projects/chatbot.png",
        name: "Ai Chatbot (Without using GPT or any other API)",
        description: "This was a Web App where users to give text input or audio input and ask any type of question to the chatbot and it could give answers to those questions in text format or speech. <br />At first, I am taking the user input through the JavaScript SpeechRecognition API. and sending it to convert the audio to text and send it to the server. Then the server analyzes the text and generates a response for the user's question. Then it sends back the data to the client and using javascript the site populates the answers.",
        sourceCode: "https://github.com/jimam-tamimi/ransomware-django",
        demo: "https://youtu.be/nhsq3OcSLro?list=PLsVwvQrt9P05H2dUeNFJoEBQ01fRe7p3V",
        liveWeb: ""
    },
    {
        image: "/projects/mfy.webp",
        name: "Law Firm Business Web Application",
        description: " This was a web application I made for a Law Firm.",
        sourceCode: "",
        demo: "",
        liveWeb: "https://mfylegal.av.tr/en/"
    },
    {
        image: "/projects/blood.jpg",
        name: "Blood Support (Blood Donating Website)",
        description: "This was a website I made where people who are in need of blood can post a request for blood with all the details like location, hospital, blood group and others. <br />The other users around that specific location can see those requests and if they want they can manage blood and contact the requestor and save a valuable life.<br />I have used React JS for the front end and Django (Rest Framework) for the back end.    I have used websockets to build chat and notification system.",
        sourceCode: "https://github.com/jimam-tamimi/blood-support-p",
        demo: "",
        liveWeb: ""
    },
    {
        image: "/projects/doctor.avif",
        name: "Find My Doctor",
        description: "This was a website I built for one of my clients where people could search for doctors and book an appointment. The website also had a payment system integrated so you could pay your doctor from the site. <br />The website had an admin dashboard from where the admin could manage all the doctors, appointments and other data.",
        sourceCode: "https://github.com/jimam-tamimi/find-my-doctor",
        demo: "",
        liveWeb: ""
    },
    {
        image: "/projects/fb bot.webp",
        name: "Facebook Group Event Creator Bot",
        description: "You can use this bot and give it a CSV file mentioning all the groups and another CSV file mentioning all the user IDs and passwords and it could automatically create group events in those groups from all the user accounts. <br />I have used Selenium for browser automation and PyQtPy for the Desktop GUI",
        sourceCode: "https://github.com/jimam-tamimi/facebook-group-event-creator-bot",
        demo: "",
        liveWeb: ""
    },
    {
        image: "/projects/tutor.webp",
        name: "Tutor Street",
        description: " This was another website I built for my client where teachers could signup and students could book online classes. There was an admin dashboard from where you could manage all the data.",
        sourceCode: "https://github.com/jimam-tamimi/edu-master-n",
        demo: "",
        liveWeb: ""
    },
    {
        image: "/projects/ware me.jpg",
        name: "Wear Me",
        description: "This was a t-shirt selling website where people could buy t-shirts. I have used Django and Django rest framework as a backend and next JS for the frontend. I also implemented a payment gateway so users could pay after the purchase.",
        sourceCode: "https://github.com/jimam-tamimi/wear-me",
        demo: "",
        liveWeb: ""
    },

]

export default function Projects() {

    const [projectsLists, setProjectsLists] = useState<ProjectType[][]>([])

    useEffect(() => {


        setProjectsLists(e => splitArrayRoundRobin(projects) as ProjectType[][])

        return () => {

        }
    }, [])


    return (
        <section className='my-40' id='projects' >
            <div className="container flex flex-col items-center justify-center relative m-auto space-y-24">
                <h1 className='text-5xl font-bold tracking-wide text-center '>Latest Projects</h1>
          <div  className="absolute  shadow-[0px_0px_565px_81px_#25ebba] bg-transparent z-0 top-0 left-0"></div>
          <div className="absolute  -right-8  shadow-[0px_0px_2000px_250px_#e1ff0047] bg-transparent z-0"></div>
          <div className="absolute  left-8 bottom-[0] shadow-[0px_0px_205px_70px_#25eb62] bg-transparent z-0"></div>

                <div className='flex flex-wrap items-start justify-center w-full *:my-5 md:justify-between'>
                    {
                        projectsLists.map((projects, i) => (
                            <div className=' space-y-14 basis-[100%] md:basis-[49%] lg:basis-[31%] '>
                                {
                                    projects.map((project, i) => (
                                        <div className=' w-full shadow-[0_5px_15px_rgba(0,_0,_0,_0.1)]   bg-[rgba(255,_255,_255,_0.228)] backdrop-blur-md rounded-lg relative group transition-all duration-300 ease-in-out hover:scale-110 '>
                                            <div className='overflow-hidden rounded-t-lg'>
                                                <img className='object-cover w-full transition-all duration-300 ease-in-out scale-110 group-hover:scale-100 h-72' src={project.image} alt={project.image + "image"} />
                                            </div>
                                            <div className='relative p-5 space-y-4 text-sm leading-relaxed'>
                                                {/* <div className='absolute w-full h-full '></div> */}
                                                <h4 className='text-3xl font-bold tracking-wide leading-relaxed '>{project.name}</h4>
                                                <p className='text-[1rem]' dangerouslySetInnerHTML={{ __html: project.description }} ></p>
                                                <div className='space-x-8 text-[1rem] font-semibold '>
                                                    {project?.sourceCode && <a href={project?.sourceCode} target='_blank' className="link"><span>Source Code</span></a>}
                                                    {project?.liveWeb && <a href={project?.liveWeb} target='_blank' className="link"><span>View Website</span></a>}
                                                    {project?.demo && <a href={project?.demo} target='_blank' className="link"><span>View Demo</span></a>}


                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        ))
                    }





                </div>

            </div>
        </section>
    )
}


function Project({ project }: { project: ProjectType }) {
    return (
        <>

            <div className=' shadow-[0_5px_15px_rgba(0,_0,_0,_0.1)]   bg-[rgba(255,_255,_255,_0.228)] backdrop-blur-md rounded-lg basis-[100%] md:basis-[49%] lg:basis-[32%] relative group transition-all duration-300 ease-in-out hover:scale-110 '>
                <div className='overflow-hidden rounded-t-lg'>
                    <img className='object-cover w-full transition-all duration-300 ease-in-out scale-110 group-hover:scale-100 h-72' src="/projects/tic tac toe.webp" alt="" />
                </div>
                <div className='relative p-5 space-y-3 text-sm leading-relaxed'>
                    {/* <div className='absolute w-full h-full '></div> */}
                    <h4 className='text-4xl font-semibold'>Tic Tac Toe</h4>
                    <p className='text-[1rem]'> This was an online Online Multiplayer Tic Tac Toe Game where 2 people could create an isolated room and generate a room code. Then they can play the Tic Tac Toe game with each other.
                        I have used Django Channels to implement WebSockets because I had to Stream the game Data in Real Time.</p>
                    <div className='space-x-8 text-[1rem] font-semibold '>
                        <a href="#" className='link '><span>Source Code</span>
                        </a>
                        <a href="#" className='link'><span>View Demo</span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
