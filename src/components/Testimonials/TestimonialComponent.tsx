"use client"
import { splitArrayRoundRobin } from '@/helpers'
import React, { useEffect, useState } from 'react'
import { TestimonialType } from './Testimonials'




export default function TestimonialComponent({testimonials}:{testimonials:TestimonialType[]}) {



    const [testimonialsList, setTestimonialsList] = useState<TestimonialType[][]>([  ])

    useEffect(() => {
      
        const testimonialsLists  = splitArrayRoundRobin(testimonials) as TestimonialType[][]
        setTestimonialsList(testimonialsLists)
      return () => {
        
      }
    }, [])
    

    return (
        <>

 

            {
                testimonialsList.map((testimonials, i) => (
                    <div className=' space-y-10'>

                        {
                            testimonials.map((testimonial, i) => (

                                <div className=' shadow-[0_5px_15px_rgba(0,_0,_0,_0.1)]   bg-[rgba(255,_255,_255,_0.228)] backdrop-blur-md rounded-lg basis-[100%] md:basis-[49%] lg:basis-[32%] relative group transition-all duration-300 ease-in-out hover:scale-110 px-6 py-5 gap-5 flex flex-col justify-center items-start'>
                                    <div className='flex justify-start items-center gap-5'>
                                        <img className='object-cover object-center w-16 h-16   rounded-full transition-all duration-300 ease-in-out'
                                         src={testimonial?.image} alt={`${testimonial?.name} Image`} />
                                        <div className='space-y-1'>
                                            <h4 className='text-lg font-semibold '>{testimonial?.name}</h4>
                                            <p className='opacity-80'>{testimonial?.position}</p>
                                        </div>
                                    </div>
                                    <p className='text-sm leading-loose tracking-wide '>{testimonial?.review}</p>
                                </div>
                            ))
                        }

                    </div>

                ))
            }


        </>
    )
}
