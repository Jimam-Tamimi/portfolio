"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
export type SkillType = {
  name: string,
  percentage: number,
}

export default function Skills() {
  const [skills, setSkills] = useState<SkillType[]>([
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 95 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "BootStrap", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "React JS", percentage: 85 },
    { name: "Next JS", percentage: 85 },
    { name: "Python", percentage: 90 },
    { name: "Django", percentage: 90 },
    { name: "Django Rest Frmaework", percentage: 80 },
    { name: "Web Sockets", percentage: 80 },
    { name: "Django Channels", percentage: 85 },
    { name: "Git, Github", percentage: 80 },
    { name: "C", percentage: 60 },
    { name: "PHP", percentage: 60 },
    { name: "Ruby, Ruby on Rails", percentage: 40 },
    { name: "Adobe Premiere Pro", percentage: 75 },
    { name: "Adobe After Effects", percentage: 50 },
    { name: "Adobe Photoshop", percentage: 60 },
  ])

  useEffect(() => {


    return () => {

    }
  }, [])


  return (
    <>
      <section className='mb-40 mt-52' id='projects' >
        <div className="container flex flex-col items-center justify-center m-auto space-y-20 relative">
          <h1 className='text-5xl font-bold tracking-wide text-center '>My Skills</h1>
          {/* <div  className="absolute  shadow-[0px_0px_165px_50px_#25ebba] bg-transparent z-0 right-0"></div> */}
        {/* <div className="absolute  right-[212px] bottom-[212px] shadow-[0px_0px_300px_135px_#005eff] bg-transparent z-0"></div> */}
        <div className="absolute  right-[212px] bottom-[212px] shadow-[0px_0px_165px_50px_#25eb62] bg-transparent z-0"></div>

          <div className='flex flex-wrap items-center justify-center w-full *:my-5 md:justify-between

          *:flex *:flex-col *:items-start *:justify-center *:w-full *:space-y-3 *:lg:w-[48%] 
          
          '>
            {
              skills.map((skill, i) => (
                <Skill i={i} skill={skill} />
              ))
            }



          </div>

        </div>
      </section>
    </>
  )
}



function Skill({ skill, i }: { i: number, skill: SkillType }) {
  return (
    <>
      <div className='' key={i}>
        <div className='flex justify-between items-center w-full'>
          <h5 className='text-xl font-bold tracking-widest' >{skill.name}</h5>
          <motion.h3 initial={{ opacity: "0", transform: 'scale(0)' }} whileInView={{ opacity: `1`, transform: 'scale(1)' }} className='text-gray-500 font-bold tracking-widest transition-all duration-1000  ease-in-out ' >{skill.percentage}%</motion.h3>
        </div>
        <div className='relative w-full h-5 dark:bg-pink-100 rounded-md bg-[#0310333a]'>

          <motion.div

            initial={{ width: "0%" }}
            whileInView={{ width: `${skill.percentage}%` }}
            className=' rounded-r-md  bg-gradient-to-br  from-[#2563eb] to-[#0035a8] dark:from-[#ff0040] dark:to-[#ff3b93] backdrop-blur-md absolute top-0 left-0 w-[60%] h-full transition-all duration-300  ease-in-out '></motion.div>
        </div>
      </div>



    </>
  )
}