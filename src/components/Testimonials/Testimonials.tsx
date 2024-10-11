import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import TestimonialComponent from './TestimonialComponent'

export type TestimonialType = {
    image: string,
    name: string,
    position?: string,
    review: string,
}


export default function Testimonials() {


    let testimonials: TestimonialType[] = [
        { image: "/clients/tony.jpg", name: "Tony Ennis", position: "Founder - Tonic Labs", review: "Great developer, would work with again" },
        { image: "/clients/mfy.jpg", name: "M. Furkan Yuce", position: "", review: "Thank you so much for all your services" },
        { image: "/clients/na.jpg", name: "Susan P.", position: "", review: "We hired Jimam as he already started work on the project, before we confirmed , irrespective of whether we hired him or not. We were shown in detail ,samples of how he intended to proceed with our project.He has completed the work in the time frame." },
        { image: "/clients/na.jpg", name: "Joseph M", position: "", review: "Very reliable, fast and knowledge. Definitely recommended. I will hire him for my next project" },
        { image: "/clients/na.jpg", name: "Saleh A.", position: "Academic Researcher", review: "Jimam is a great developer. I will hire him again and recommend him for any one wants a great job" },
        { image: "/clients/ritesh.webp", name: "Ritesh Kawadkar", position: "Web Developer", review: "Super Developer. Delivered Code before time" },
        { image: "/clients/na.jpg", name: "Hamal Hamilton", position: "", review: "Good work. Thanks for your great work and looking forward to hiring you again" },
        { image: "/clients/na.jpg", name: "Nargis P", position: "Web Developer", review: "Great Developer And Very Professional.Very Responsive To My Requirements.I Will Keep Assigning All Job To Him From Now On. Thank You Md Matiur" },
        { image: "/clients/na.jpg", name: "Charan NM", position: "", review: "Excellent work and patient developer. would like to work again" },
    ]

    return (
        <section className='my-44 mb-0' id='testimonials' >
            <div className="container relative  flex flex-col items-center justify-center m-auto space-y-24">

                <div className="absolute right-[30%] top-[50%] shadow-[0px_0px_565px_81px_#25ebba] bg-transparent z-0 "></div>
                <h1 className='text-5xl font-bold tracking-wide text-center '>Testimonials</h1>
                <div className='flex flex-wrap items-start justify-center w-full    space-y-10 lg:space-y-0 lg:justify-between
                *:lg:w-[32%] *:w-full  
                '>
                    <TestimonialComponent testimonials={testimonials} />
                </div>

            </div>
        </section>
    )
}
