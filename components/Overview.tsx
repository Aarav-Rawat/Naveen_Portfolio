'use client'
import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision'
import { GlareCard } from './ui/GlareCard'

const Overview = () => {
    return (
        <div className="flex justify-center items-start min-h-[100vh] text-start relative ">
            <BackgroundBeamsWithCollision className="relative w-full py-5">
                <div className="text-center flex flex-col gap-5">
                    <h1 className="text-6xl font-bold mr-[70vw] text-purple">Overview.</h1>
                    <p className="mb-10 flex items-center justify-start text-xl w-[70vw] text-[#AAA6C3] text-start">I&apos;m mastering full stack engineering proficient in JavaScript, with expertise in React.js for client-side development, Node.js and Express.js for server-side applications, and MongoDB for database management. Additionally, I am expanding my skills by learning Next.js for full-stack development. I also have an interest in modern UI libraries such as Acceternity and Shadcn. I have a great foundation in Data Structures and Algorithms (DSA) using C/C++, with a good understanding of OOP&apos;s principles and proficiency in the Standard Template Library (STL).
                    </p>

                    <div className='flex gap-10 items-center justify-center flex-wrap'>
                        <GlareCard >
                            <div className='flex flex-col items-center justify-center w-full h-[60%]'>
                                <span className="text-4xl font-bold">Front-End</span>     
                            </div>
                        </GlareCard>

                        <GlareCard>
                            <div className='flex flex-col items-center justify-center w-full h-[60%]'>
                                <span className="text-4xl font-bold">Back-End</span>
                               
                            </div>
                        </GlareCard>

                        <GlareCard>
                            <div className='flex flex-col items-center justify-center w-full h-[60%]'>
                                <span  className="text-4xl font-bold">Software <br/> Engineering</span>
                                
                            </div>
                        </GlareCard>
                    </div>

                </div>
            </BackgroundBeamsWithCollision>
        </div>
    )
}

export default Overview