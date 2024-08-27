/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Form() {
    const [agreed, setAgreed] = useState(false)

    return (
        <>

            <form action="#" method="POST" className="flex flex-wrap items-center justify-between w-full *:my-4 tracking-wide 
            
            [&_input]:shadow-[0_5px_15px_rgba(0,_0,_0,_0.1)]  
             [&_input]:bg-[rgba(255,255,255,0.23)] [&_input]:backdrop-blur-md 
            [&_input]:outline-none
             [&_input]:dark:bg-[#ffffff2b] [&_input]:rounded [&_input]:text-base [&_input]:text-black [&_input]:px-3 [&_input]:py-2  [&_input]:border-0">
                <div className='flex flex-col items-stretch justify-center sm:w-[48%] w-full  space-y-3 '>
                    <label htmlFor="first-name" className='text-xl tracking-wide'>First Name</label>
                    <input placeholder='First Name' type="text" id='first-name' className='' />
                </div>
                <div className='flex flex-col items-stretch justify-center sm:w-[48%] w-full space-y-3 '>
                    <label htmlFor="first-name" className='text-xl tracking-wide'>Last Name</label>
                    <input placeholder='Last Name' type="text" id='first-name' />
                </div>
                <div className='flex flex-col items-stretch justify-center sm:w-[48%] w-full   space-y-3 '>
                    <label htmlFor="first-name" className='text-xl tracking-wide'>Email</label>
                    <input placeholder='Email' type="text" id='first-name' />
                </div>
                <div className='flex flex-col items-stretch justify-center sm:w-[48%] w-full  space-y-3 '>
                    <label htmlFor="first-name" className='text-xl tracking-wide'>Number </label>
                    <input placeholder='Number' type="text" id='first-name' />
                </div>
                <div className='flex flex-col items-stretch justify-center w-[100%] space-y-3 '>
                    <label htmlFor="first-name" className='text-xl tracking-wide'>Subject </label>
                    <input placeholder='Subject' type="text" id='first-name' />
                </div>
                <div className='flex flex-col items-stretch justify-center w-[100%] space-y-3 '>
                    <label htmlFor="first-name" className='text-xl tracking-wide'>Message </label>
                    <textarea placeholder='Message' rows={10} id='first-name' className='shadow-[0_5px_15px_rgba(0,_0,_0,_0.1)]  
             bg-[rgba(255,255,255,0.23)] backdrop-blur-md 
            outline-none
             dark:bg-[#ffffff2b] rounded text-base text-black px-3 py-2  border-0'  ></textarea>
                </div>

                <button
                    // onClick={(e) => localStorage.setItem("theme", "dark")}
                    // className="  bg-blue-600 text-lg text-white font-semibold py-3 px-6 tracking-wide  rounded-md hover:bg-blue-700 hover:scale-[1.03] transition-all duration-300 active:bg-blue-500 active:scale-95"
                    className="w-full px-6 py-2 ml-auto text-lg font-semibold tracking-wide text-white transition-all duration-300 sm:w-auto btn-hover-animation">Submit</button>

            </form>

        </>
    )
}
